document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

   // Dark Mode Toggle (dark by default)
const toggleButton = document.getElementById("darkModeToggle");

// default = dark unless user saved light
if (localStorage.getItem("theme") !== "light") {
    document.documentElement.classList.add("dark-mode");
    document.body.classList.add("dark-mode");
}

toggleButton.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark-mode");
    document.body.classList.toggle("dark-mode");

    if (document.documentElement.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
});



