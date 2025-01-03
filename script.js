const sideBarToggle = document.querySelector("#sidebar-toggle");
const sideBarClose = document.querySelector("#sidebar-close");
const overlay = document.querySelector("#overlay");
const body = document.querySelector("body");

sideBarToggle.addEventListener("click", () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.right = "0px";
    
    // Add blur effect
});

sideBarClose.addEventListener("click", () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.right = "-300px";
   
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add("visible");
      }
  });
});

// Select elements to observe
const elementsToAnimate = document.querySelectorAll(".container, .row, .image-container, .name,.skill-card");
elementsToAnimate.forEach((el) => observer.observe(el));

// Scroll animation using Intersection Observer for skills

// Scroll animation using Intersection Observer

