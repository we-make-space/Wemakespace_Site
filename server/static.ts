import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { injectMetaTags } from "./meta";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist — inject per-page meta for social crawlers
  app.use("*", (req, res) => {
    const indexPath = path.resolve(distPath, "index.html");
    let html = fs.readFileSync(indexPath, "utf-8");
    html = injectMetaTags(html, req.path);
    res.status(200).set({ "Content-Type": "text/html" }).send(html);
  });
}
