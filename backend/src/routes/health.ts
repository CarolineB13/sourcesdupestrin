import { Router } from "express";
const router = Router();

router.get("/", (_req, res) => {
  res.json({
    status: "ok",
    service: "pestrin-backend",
    env: process.env.NODE_ENV || "development",
    shopEnabled: String(process.env.SHOP_ENABLED) === "true",
    shopUrl: process.env.SHOP_URL || null,
  });
});

export default router;
