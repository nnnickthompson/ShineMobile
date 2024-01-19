document.addEventListener("DOMContentLoaded", function() {
    var navbarLinks = document.getElementById("navbar-links");
    var menuToggle = document.querySelector(".menu-toggle");

    menuToggle.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent the event from reaching document click handler
        navbarLinks.classList.toggle("show");
    });

    // Close the sidebar when a link is clicked
    navbarLinks.querySelectorAll("a").forEach(function(link) {
        link.addEventListener("click", function() {
            navbarLinks.classList.remove("show");
        });
    });

    // Close the sidebar when clicking anywhere outside of navbar or sidebar
    document.addEventListener("click", function(event) {
        if (!navbarLinks.contains(event.target) && !menuToggle.contains(event.target)) {
            navbarLinks.classList.remove("show");
        }
    });
});
