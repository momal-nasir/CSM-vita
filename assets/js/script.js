document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("hidden"); 
    navLinks.classList.toggle("flex");   
    navLinks.classList.toggle("flex-col"); 
    navLinks.classList.toggle("bg-white");
    navLinks.classList.toggle("p-4");     
  });
});
