// MENU TOGGLE
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// DARK MODE
const darkToggle = document.getElementById("darkToggle");

darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// SMOOTH SCROLL
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
});

// CONTACT FORM
const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Message Sent Successfully 🚀");
    form.reset();
});

// PROJECT MODAL
function openModal(title){
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("projectModal").style.display = "flex";
}

function closeModal(){
    document.getElementById("projectModal").style.display = "none";
}