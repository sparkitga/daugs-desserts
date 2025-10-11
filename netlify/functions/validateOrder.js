// netlify/functions/validateOrder.js
import fetch from "node-fetch";

// Simple sanitizer to remove HTML/script tags & special chars
function sanitizeInput(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/<[^>]*>?/gm, "") // remove HTML tags
    .replace(/[&<>"'`=\/]/g, ""); // strip special chars
}

exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    const token = data.recaptchaToken;

    // Verify reCAPTCHA v3 token
    const verify = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secret}&response=${token}`,
    });
    const recaptcha = await verify.json();

    if (!recaptcha.success || recaptcha.score < 0.5) {
      return { statusCode: 400, body: JSON.stringify({ error: "Bot validation failed." }) };
    }

    // --- Sanitize inputs ---
    const name = sanitizeInput(data.name);
    const email = sanitizeInput(data.email);
    const packSize = sanitizeInput(data.packSize || "");
    const items = Array.isArray(data.items)
      ? data.items.map((item) => sanitizeInput(item))
      : [];

    // --- Existing validation ---
    if (!name || !email) {
      return { statusCode: 400, body: JSON.stringify({ error: "Name and email are required." }) };
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { statusCode: 400, body: JSON.stringify({ error: "Invalid email format." }) };
    }

    if (items.length > 12) {
      return { statusCode: 400, body: JSON.stringify({ error: "Max 12 items allowed." }) };
    }

    // ✅ Final sanitized response ready for storage/email
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Order validated and sanitized ✅",
        sanitizedData: { name, email, packSize, items },
      }),
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
