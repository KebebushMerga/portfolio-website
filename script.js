// Smooth scrolling for nav links
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Smooth scroll for "Hire Me" button
const hireBtn = document.querySelector(".detail a");
if (hireBtn) {
  hireBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  });
}

//  Hover animation for project cards
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
    card.style.transition = "0.3s";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

//  Hover animation for skill cells
const skillCells = document.querySelectorAll(".cell");
skillCells.forEach((cell) => {
  cell.addEventListener("mouseenter", () => {
    cell.style.transform = "scale(1.05)";
    cell.style.transition = "0.3s";
  });
  cell.addEventListener("mouseleave", () => {
    cell.style.transform = "scale(1)";
  });
});

//  Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navUl = document.querySelector("nav ul");
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navUl.classList.toggle("active");
  });
}
