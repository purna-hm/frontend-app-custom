"use client";
import * as React from "react";
import * as ReactDOM from "react-dom/client";

// widget.js externalizes React and calls require("react") at runtime.
// Expose the app's own React + ReactDOM instances before the widget script loads.
if (typeof window !== "undefined") {
  (window as any).React = React;
  (window as any).ReactDOM = ReactDOM;
  (window as any).require = (mod: string) => {
    if (mod === "react") return React;
    if (mod === "react-dom" || mod === "react-dom/client") return ReactDOM;
    throw new Error(`Dynamic require of "${mod}" is not supported`);
  };
}

export default function ReactGlobalExport() {
  return null;
}
