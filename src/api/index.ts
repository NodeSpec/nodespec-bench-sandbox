import express from "express";
export const app = express();
app.get("/health", (_req, res) => res.send("ok"));
app.patch("/orders/:id/status", (_req, res) => res.json({}));
export const handler = () => "bench";
