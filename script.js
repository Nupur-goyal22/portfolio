// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Typing Effect
const typingText = document.getElementById("typingText");
const roles = ["Frontend Developer", "Web Designer", "BCA Student", "Creative Coder ✨"];
let index = 0;

setInterval(() => {
  index = (index + 1) % roles.length;
  typingText.textContent = roles[index];
}, 1800);

// Contact Form
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("✅ Message sent successfully!");
  e.target.reset();
});
