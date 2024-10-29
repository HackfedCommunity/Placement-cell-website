// Adding simple animations or interactivity

document.addEventListener("DOMContentLoaded", () => {
  console.log("SOICT Website Loaded Successfully");

  // You can add further interactions here, like scroll animations or menu effects.
});

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".nav-links");
let navLinks = document.querySelectorAll(".nav-links li");

function scrollToTarget(target) {
  const element =
    target === "#" ? document.body : document.querySelector(target);
  element.scrollIntoView({ behavior: "smooth" });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    scrollToTarget(this.getAttribute("href"));
  });
});

// Dropdown Menu system from here
menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("open");
};

function closeMenu() {
  navbar.classList.remove("open");
  menuIcon.classList.remove("fa-xmark");
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

