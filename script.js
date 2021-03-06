// Loading
window.addEventListener("load", () => {
  document.getElementById("mainCont").classList.remove("isLoading");
});

// Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

const body = document.body;

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  links.forEach(link => {
    link.classList.toggle("fade");
  });

  body.classList.toggle("op");
});
