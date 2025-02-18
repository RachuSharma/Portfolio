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

  // Dark Mode Toggle
  const toggleButton = document.getElementById("darkModeToggle");
  if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
  }
  toggleButton.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
  });

  // Typed.js
  new Typed('#element', {
      strings: ['Software Engineering Student', 'Full-Stack Developer', 'UI Enthusiast'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
  });
});

// JavaScript for Call Button 
    document.getElementById("showCallButton").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("callButton").style.display = "inline-block";
    });

