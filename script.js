// Pack selector functionality
document.addEventListener("DOMContentLoaded", () => {
  const packButtons = document.querySelectorAll(".pack-btn")

  packButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      packButtons.forEach((btn) => btn.classList.remove("active"))
      // Add active class to clicked button
      this.classList.add("active")
    })
  })
})
