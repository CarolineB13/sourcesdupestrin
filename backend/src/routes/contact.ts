import { Router } from "express";
import { z } from "zod";

const router = Router();

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10).max(2000),
  locale: z.enum(["fr","en"]).optional()
});

router.post("/", (req, res) => {
  const parse = ContactSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ error: "invalid_payload", details: parse.error.flatten() });
  }
  const data = parse.data;

  // (plus tard: envoi email / DB)
  console.log("[contact] message reçu", data);

  const okMsg = data.locale === "en"
    ? "Message received. We will get back to you shortly."
    : "Message reçu. Nous vous répondons rapidement.";
  res.json({ status: "ok", message: okMsg });
});

export default router;
