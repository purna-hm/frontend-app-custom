"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, Minimize2, Maximize2 } from "lucide-react";

interface ChatbotConfig {
  /** Full script URL of the chatbot (e.g. Tidio, Drift, Crisp, or custom) */
  scriptSrc?: string;
  /** Full iframe URL for embedded chatbots */
  iframeSrc?: string;
  /** Title shown in the header */
  title?: string;
  /** Width of the widget */
  width?: number;
  /** Height of the widget */
  height?: number;
}

interface ChatbotWidgetProps {
  config?: ChatbotConfig;
}

const DEFAULT_CONFIG: ChatbotConfig = {
  title: "MyUni Assistant",
  width: 380,
  height: 520,
  // Set iframeSrc or scriptSrc via NEXT_PUBLIC_CHATBOT_IFRAME_URL / NEXT_PUBLIC_CHATBOT_SCRIPT_URL env vars
};

export default function ChatbotWidget({ config = {} }: ChatbotWidgetProps) {
  const mergedConfig = { ...DEFAULT_CONFIG, ...config };
  const iframeSrc = config.iframeSrc || process.env.NEXT_PUBLIC_CHATBOT_IFRAME_URL;
  const scriptSrc = config.scriptSrc || process.env.NEXT_PUBLIC_CHATBOT_SCRIPT_URL;

  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // Load external chatbot script (e.g. Tidio, Drift, Intercom)
  useEffect(() => {
    if (!scriptSrc || scriptLoaded) return;
    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [scriptSrc, scriptLoaded]);

  // If using external script — the script handles its own UI, just return null
  if (scriptSrc && !iframeSrc) return null;

  // If no iframe URL configured — show a placeholder
  const showPlaceholder = !iframeSrc;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Chatbot panel */}
      {isOpen && (
        <div
          className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col transition-all duration-300"
          style={{
            width: mergedConfig.width,
            height: isMinimized ? 0 : mergedConfig.height,
            maxWidth: "calc(100vw - 2rem)",
          }}
        >
          {/* Header */}
          <div className="bg-[#1a1a5e] text-white px-4 py-3 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-yellow-400 rounded-full flex items-center justify-center">
                <MessageCircle size={14} className="text-[#1a1a5e]" />
              </div>
              <div>
                <div className="text-sm font-semibold">{mergedConfig.title}</div>
                <div className="text-xs text-blue-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block"></span>
                  Online
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 hover:bg-blue-800 rounded transition-colors"
                aria-label={isMinimized ? "Maximize" : "Minimize"}
              >
                {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-blue-800 rounded transition-colors"
                aria-label="Close chat"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          {/* Chat body */}
          {!isMinimized && (
            <div className="flex-1 overflow-hidden">
              {showPlaceholder ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 p-6 text-center bg-gray-50">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <MessageCircle size={28} className="text-[#1a1a5e]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Configure Your Chatbot</p>
                    <p className="text-sm text-gray-500">
                      Set{" "}
                      <code className="bg-gray-200 px-1 rounded text-xs">
                        NEXT_PUBLIC_CHATBOT_IFRAME_URL
                      </code>{" "}
                      in your <code className="bg-gray-200 px-1 rounded text-xs">.env.local</code> to embed your chatbot here.
                    </p>
                  </div>
                  <div className="text-xs text-gray-400 bg-white border border-gray-200 rounded-lg p-3 w-full">
                    Supports: Tidio · Drift · Crisp · Intercom · Freshdesk · Custom iframe
                  </div>
                </div>
              ) : (
                <iframe
                  src={iframeSrc}
                  title={mergedConfig.title}
                  className="w-full h-full border-0"
                  allow="microphone; camera"
                />
              )}
            </div>
          )}
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setIsMinimized(false);
        }}
        className={`
          w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110
          ${isOpen
            ? "bg-gray-700 hover:bg-gray-600"
            : "bg-[#1a1a5e] hover:bg-[#2a2a8e]"
          }
        `}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X size={22} className="text-white" />
        ) : (
          <MessageCircle size={22} className="text-white" />
        )}
      </button>
    </div>
  );
}
