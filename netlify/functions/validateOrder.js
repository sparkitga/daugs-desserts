// netlify/functions/validateOrder.js
import fetch from "node-fetch";
import sanitizeHtml from "sanitize-html";

exports.handler = async (event) => {
  try {
    // Parse incoming JSON from frontend
    const data = JSON.parse(event.body);

    // Your reCAPTCHA secret key (stored securely in Netlify)
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    const token = data.recaptchaToken;

    // ✅ Step 1: Verify reCAPTCHA with Google
    const verify = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secret}&response=${token}`,
    });
    const recaptcha = await verify.json();

    if (!recaptcha.success || recaptcha.score < 0.5) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Bot validation failed. Please try again." }),
      };
    }

    // ✅ Step 2: Sanitize all user inputs
    const sanitize = (input) =>
      typeof input === "string"
        ? sanitizeHtml(input, { allowedTags: [], allowedAttributes: {} }).trim()
        : "";

    const name = sanitize(data.name);
    const email = sanitize(data.email);
    const packSize = sanitize(data.packSize || "");
    const items = Array.isArray(data.items)
      ? data.items.map((item) => sanitize(item))
      : [];

    // ✅ Step 3: Validate sanitized data
    if (!name || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Name and email are required." }),
      };
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid email format." }),
      };
    }

    if (items.length > 12) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Max 12 items allowed." }),
      };
    }

    // ✅ Step 4: Return sanitized, validated result
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Order validated and sanitized ✅",
        sanitizedData: { name, email, packSize, items },
      }),
    };
  } catch (err) {
    console.error("Validation Error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error. Please try again later." }),
    };
  }
};
