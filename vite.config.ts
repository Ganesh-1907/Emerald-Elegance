import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import fs from "fs/promises";
import path from "path";
import { createRequire } from "module";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const require = createRequire(import.meta.url);
const Prerenderer = require("@prerenderer/prerenderer");
const PuppeteerRenderer = require("@prerenderer/renderer-puppeteer");

const port = Number(process.env.PORT) || 5173;
const basePath = process.env.BASE_PATH || "/";
const securityHeaders = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
};

const prerenderRoutes = [
  "/",
  "/services",
  "/parts",
  "/community",
  "/rides",
  "/about",
  "/blog",
  "/contact",
  "/privacy",
  "/terms",
];

const createPrerenderPlugin = (staticDir: string) => ({
  name: "motonode-prerender",
  apply: "build" as const,
  enforce: "post" as const,
  async closeBundle() {
    const prerenderer = new Prerenderer({
      staticDir,
      server: {
        host: "127.0.0.1",
        port: 8472,
      },
      renderer: new PuppeteerRenderer({
        renderAfterDocumentEvent: "motonode:route-rendered",
        maxConcurrentRoutes: 2,
        skipThirdPartyRequests: true,
        timeout: 60_000,
      }),
    });

    let initialized = false;

    try {
      console.log(
        `[motonode-prerender] Rendering routes: ${prerenderRoutes.join(", ")}`,
      );

      await prerenderer.initialize();
      initialized = true;

      const renderedRoutes = await prerenderer.renderRoutes(prerenderRoutes);

      await Promise.all(
        renderedRoutes.map(async (renderedRoute: { route: string; html: string }) => {
          const sanitizedRoute = renderedRoute.route.replace(/^\/|\/$/g, "");
          const outputPath = sanitizedRoute
            ? path.join(staticDir, sanitizedRoute, "index.html")
            : path.join(staticDir, "index.html");

          await fs.mkdir(path.dirname(outputPath), { recursive: true });
          await fs.writeFile(outputPath, renderedRoute.html.trim());
        }),
      );

      console.log("[motonode-prerender] Route snapshots written successfully.");
    } finally {
      if (initialized) {
        await Promise.resolve(prerenderer.destroy());
      }
    }
  },
});

export default defineConfig(({ command }) => {
  const distDir = path.resolve(import.meta.dirname, "dist");
  const plugins = [
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
  ];

  if (command === "build") {
    plugins.push(createPrerenderPlugin(distDir));
  }

  return {
    base: basePath,
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "src"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
      dedupe: ["react", "react-dom"],
    },
    root: path.resolve(import.meta.dirname),
    build: {
      outDir: distDir,
      emptyOutDir: true,
    },
    server: {
      port,
      host: "0.0.0.0",
      allowedHosts: true,
      headers: securityHeaders,
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
    preview: {
      port,
      host: "0.0.0.0",
      allowedHosts: true,
      headers: securityHeaders,
    },
  };
});
