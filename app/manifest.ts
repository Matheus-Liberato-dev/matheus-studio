export const dynamic = 'force-static';

import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Matheus Liberato | AI Developer & Web Consultant",
    short_name: "Matheus Liberato",
    description:
      "Matheus Liberato - AI Developer & Web Consultant based in Sydney. I help individuals and small businesses build software, websites, and learn to use AI.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "ai",
      "web development",
      "consulting",
      "developer",
      "freelance",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
