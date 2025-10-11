// netlify/functions/validateOrder.js
exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);

    // Basic validation example
    if (!data.name || !data.email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Name and email are required." }),
      };
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid email format." }),
      };
    }

    // Example: limit order to 12 items max
    if (data.items && data.items.length > 12) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Maximum 12 items allowed per order." }),
      };
    }

    // If all checks pass
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Order validated!" }),
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
