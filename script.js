// Mobile Navbar
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

// Skills Animation on Scroll
const bars = document.querySelectorAll(".bar span");

window.addEventListener("scroll", () => {
  const skillSection = document.getElementById("skills");
  const sectionPos = skillSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;

  if (sectionPos < screenPos) {
    bars.forEach((bar) => {
      const fill = bar.getAttribute("data-fill");
      bar.style.width = fill + "%";
    });
  }
});
