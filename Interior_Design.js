// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 30);
});

// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Contact form (Demo)
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  msg.innerText = "✅ Thank you! We will contact you soon.";
  msg.innerText = "✅ Thank you! Call or WhatsApp us now at "9346704675" to discuss your requirements";
  form.reset();

  setTimeout(() => {
    msg.innerText = "";
  }, 3000);
});
