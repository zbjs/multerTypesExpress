import express from "express";
const routes = express.Router();
import { uploadsImg } from "@/controllers";

routes.post("/upload", uploadsImg);
routes.get("/me", (_req, res) => {
  res.send("Welcome to Kazibyte API");
});

export default routes;
