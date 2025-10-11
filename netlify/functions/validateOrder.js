// netlify/functions/validateOrder.js
import fetch from "node-fetch";

exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);
    const secret = process.env.RECAPTCHA_SECRET_KEY; // set in Netlify → Site Settings → Environment Variables
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

    // --- Existing validation ---
    if (!data.name || !data.email)
      return { statusCode: 400, body: JSON.stringify({ error: "Name and email are required." }) };

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      return { statusCode: 400, body: JSON.stringify({ error: "Invalid email format." }) };

    if (data.items && data.items.length > 12)
      return { statusCode: 400, body: JSON.stringify({ error: "Max 12 items allowed." }) };

    return { statusCode: 200, body: JSON.stringify({ success: true, message: "Order validated ✅" }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
