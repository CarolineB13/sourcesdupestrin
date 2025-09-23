import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import path from "path";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;
const ORIGIN = process.env.CORS_ORIGIN || "http://localhost:5173";

app.use(helmet());
app.use(cors({ origin: ORIGIN, credentials: true }));
app.use(express.json());
app.use(morgan("dev"));

// Limiteur uniquement pour /api/contact (ex: 5 req / minute / IP)
const contactLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "too_many_requests", retryAfter: "1m" }
});

// Routes
import healthRouter from "./routes/health";
import productsRouter from "./routes/products";
import contactRouter from "./routes/contact";

app.use("/api/health", healthRouter);
app.use("/api/products", productsRouter);
app.use("/api/contact", contactLimiter, contactRouter);

// 404
app.use((req, res) => res.status(404).json({ error: "Not found" }));

app.listen(PORT, () => {
  console.log(`[backend] listening on http://localhost:${PORT}`);
});
