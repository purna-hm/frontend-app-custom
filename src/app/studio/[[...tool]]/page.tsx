/**
 * Sanity Studio embedded at /studio
 * Access: https://your-domain.com/studio
 * Protect with Vercel password protection or Sanity CORS in production.
 */
"use client";

import dynamic from "next/dynamic";
import config from "../../../../sanity.config";

// Load NextStudio entirely on the client to avoid React SSR conflicts
const NextStudio = dynamic(
  () => import("next-sanity/studio").then((mod) => mod.NextStudio),
  { ssr: false }
);

export default function StudioPage() {
  return <NextStudio config={config} />;
}
