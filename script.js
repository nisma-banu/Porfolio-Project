const sideBarToggle = document.querySelector("#sidebar-toggle");
const sideBarClose = document.querySelector("#sidebar-close");
const overlay = document.querySelector("#overlay");
const body = document.querySelector("body");

sideBarToggle.addEventListener("click", () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.right = "0px";
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
const elementsToAnimate = document.querySelectorAll(".container, .row, .image-container, .name");
elementsToAnimate.forEach((el) => observer.observe(el));

// Intersection Observer for progress bars
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const progressElement = entry.target.querySelector(".circular-progress");
            if (progressElement) {
                animateCircularProgress(progressElement);
                skillObserver.unobserve(entry.target); // Stop observing after animation
            }
        }
    });
}, { threshold: 0.5 }); // Adjust threshold as needed

// Function to animate circular progress
function animateCircularProgress(progressElement) {
    const targetValue = parseInt(progressElement.getAttribute("data-progress"), 10);
    let currentValue = 0;

    const animateProgress = setInterval(() => {
        if (currentValue >= targetValue) {
            clearInterval(animateProgress);
        } else {
            currentValue++;
            progressElement.style.background = `conic-gradient(
                rgba(87, 119, 255, 1) ${currentValue}%, 
                #e9ecef ${currentValue}%
            )`;
        }
    }, 20); // Adjust animation speed
}

// Observe each skill card for progress bar animation
document.querySelectorAll(".skill-card").forEach((card) => {
    skillObserver.observe(card);
});


// Intersection Observer for animating service rows
const serviceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            serviceObserver.unobserve(entry.target); // Stop observing after animation
        }
    });
}, { threshold: 0.5 });

// Select and observe service rows
const serviceRows = document.querySelectorAll(".service-row");
serviceRows.forEach((row) => serviceObserver.observe(row));

