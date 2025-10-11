// script.js
document.addEventListener("DOMContentLoaded", () => {
  const packButtons = document.querySelectorAll(".pack-btn");
  let selectedPack = "6 PACK";

  // Pack selector functionality
  packButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      packButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      this.classList.add("active");
      selectedPack = this.textContent.trim();
    });
  });

  // Example: backend validation trigger
  const orderBtn = document.querySelector(".btn-order");
  if (orderBtn) {
    orderBtn.addEventListener("click", async () => {
      // Example order payload
      const orderData = {
        name: "Test Customer",
        email: "test@example.com",
        packSize: selectedPack,
        items: ["BUTTER & SALT", "STRAWBERRY BUTTERMILK"], // sample selection
      };

      try {
        const response = await fetch("/.netlify/functions/validateOrder", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(orderData),
        });

        const result = await response.json();

        if (!response.ok) {
          alert(`Validation error: ${result.error}`);
          return;
        }

        alert(`✅ ${result.message}`);
      } catch (err) {
        console.error(err);
        alert("⚠️ Server error, please try again later.");
      }
    });
  }
});

