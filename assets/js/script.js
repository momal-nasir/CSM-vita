// Navbar toggle for mobile
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("hidden"); // show/hide nav links
    navLinks.classList.toggle("flex");   // make them visible in flex layout
    navLinks.classList.toggle("flex-col"); // stack vertically on mobile
    navLinks.classList.toggle("bg-white"); // add background
    navLinks.classList.toggle("p-4");     // add padding
  });
});
