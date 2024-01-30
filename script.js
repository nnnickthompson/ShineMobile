function handleSectionButtonClick() {
    // Check if the screen width is less than or equal to 768 pixels (you can adjust this value based on your design)
    if (window.innerWidth <= 768) {
        // Toggle the visibility of the detail cards or perform desired actions
        document.querySelectorAll(".detail-card").forEach(function (card) {
            card.style.display = (card.style.display === 'none' || card.style.display === '') ? 'block' : 'none';
        });
    }
}

document.querySelectorAll(".section-title-button").forEach(function (button) {
    button.addEventListener("click", handleSectionButtonClick);
});

//test 2

// Add a click event listener to the button under the detail section
document.getElementById("choose-package-btn").addEventListener("click", function () {
    // Check if the screen width is less than or equal to 768 pixels (you can adjust this value based on your design)
    if (window.innerWidth <= 768) {
       

        // Hide the button
        document.getElementById("choose-package-btn").style.display = 'none';
    }
});



//test

document.getElementById("choose-package-btn").addEventListener("click", function () {
    // Check if the screen width is less than or equal to 768 pixels (you can adjust this value based on your design)
    if (window.innerWidth <= 768) {
        // Toggle the visibility of the detail cards
        document.querySelectorAll(".detail-card").forEach(function (card) {
            card.style.display = (card.style.display === 'none' || card.style.display === '') ? 'block' : 'none';
        });
    }
});




function toggleNav() {
    var navbarLinks = document.getElementById("navbar-links");
    navbarLinks.classList.toggle("show");
}




document.addEventListener("DOMContentLoaded", function () {
    var navbarLinks = document.querySelector(".navbar-links");
    var menuToggle = document.querySelector(".menu-toggle");

    menuToggle.addEventListener("click", function () {
        navbarLinks.classList.toggle("show");
    });

    navbarLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navbarLinks.classList.remove("show");
        });
    });
});

    // Initialize an empty array to store selected services
    var selectedServices = [];

    // Function to update the shopping cart
    function updateShoppingCart() {
        var cartList = document.getElementById("cart-list-popup");
        var totalPriceElement = document.getElementById("total-price-popup");

        // Clear the existing items in the cart
        cartList.innerHTML = "";

        // Calculate the total price and update the cart
        var totalPrice = 0;
        selectedServices.forEach(function (service, index) {
            var cartItem = document.createElement("li");

            // Display the service name and price
            cartItem.textContent = service.name + " - $" + service.price;

            // Add a "Remove" button
            var removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.addEventListener("click", function () {
                // Remove the selected service from the array
                selectedServices.splice(index, 1);

                // Update the shopping cart
                updateShoppingCart();
            });

            // Append the "Remove" button to the cart item
            cartItem.appendChild(removeButton);

            // Append the cart item to the cart list
            cartList.appendChild(cartItem);

            // Accumulate the total price
            totalPrice += parseFloat(service.price);
        });

        // Display the total price in the shopping cart
        totalPriceElement.textContent = "Total: $" + totalPrice.toFixed(2);
    }

// Add a click event listener to all detail cards
document.querySelectorAll(".detail-card").forEach(function (card) {
    card.addEventListener("click", function () {
        // Extract service name and price from the clicked card
        var serviceName = card.querySelector("h3").textContent.trim();
        var price = card.querySelector("p.price").textContent.trim().replace('$', '');

        // Add the selected service to the array
        selectedServices.push({ name: serviceName, price: price });

        // Update the shopping cart
        updateShoppingCart();

        // Display the shopping cart
        toggleCartPopup(); // This line triggers the function
    });
});



 


function prepareQuote() {
    // Gather selected services and prices
    const cartList = document.getElementById("cart-list-popup");
    const totalPriceElement = document.getElementById("total-price-popup");

    // Move these variable declarations outside of the forEach loop
    let userEmail = document.getElementById('email').value;
    let userPhone = document.getElementById('phone').value;
    let additionalInfo = document.getElementById('additional-info').value;

    // Create an array to store selected services
    const selectedServices = [];

    // Iterate through the cart list items
    cartList.querySelectorAll("li").forEach(function (cartItem) {
        const serviceName = cartItem.textContent.split(" - $")[0];
        const servicePrice = parseFloat(cartItem.textContent.split(" - $")[1]);

        // Add the selected service to the array
        selectedServices.push({ name: serviceName, price: servicePrice });
    });

    // Calculate the total price
    const totalPrice = parseFloat(totalPriceElement.textContent.split("$")[1]);

    // Prepare email body with selected services
    let emailBody = `Selected Services:\n${selectedServices.map(item => `${item.name}: $${item.price.toFixed(2)}`).join('\n')}\n\nTotal Price: $${totalPrice.toFixed(2)}`;

    // Append user information to the email body
    emailBody += `\n\nUser Information:\nEmail: ${userEmail}\nPhone: ${userPhone}\nAdditional Info: ${additionalInfo}`;

    // Encode the email body for the mailto link
    const encodedEmailBody = encodeURIComponent(emailBody);

    // Create mailto link
    const mailtoLink = `mailto:JoeMelillo@ShineMbl.com?subject=Quote Request&body=${encodedEmailBody}`;

    // Open mailto link in a new tab
    window.open(mailtoLink, '_blank');
}

function toggleServicesPopup() {
    var selectedServicesPopup = document.getElementById("selected-services-popup");
    selectedServicesPopup.style.display = (selectedServicesPopup.style.display === "none") ? "block" : "none";
}
function addToQuote(serviceName, servicePrice) {
    // Add the selected service to the array
    selectedServices.push({ name: serviceName, price: servicePrice });

    // Update the shopping cart
    updateShoppingCart();
}

document.addEventListener("DOMContentLoaded", function () {
    var navbarLinks = document.getElementById("navbar-links");
    var menuToggle = document.querySelector(".menu-toggle");

    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation();
        navbarLinks.classList.toggle("show");
    });

    navbarLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navbarLinks.classList.remove("show");
        });
    });

    document.addEventListener("click", function (event) {
        if (!navbarLinks.contains(event.target) && !menuToggle.contains(event.target)) {
            navbarLinks.classList.remove("show");
        }
    });

    var selectedServices = [];

    function updateShoppingCart() {
        var cartList = document.getElementById("cart-list-popup");
        var totalPriceElement = document.getElementById("total-price-popup");

        cartList.innerHTML = "";

        var totalPrice = 0;
        selectedServices.forEach(function (service, index) {
            var cartItem = document.createElement("li");

            cartItem.textContent = service.name + " - $" + service.price;

            var removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.addEventListener("click", function () {
                selectedServices.splice(index, 1);
                updateShoppingCart();
            });

            cartItem.appendChild(removeButton);
            cartList.appendChild(cartItem);

            totalPrice += parseFloat(service.price);
        });

        totalPriceElement.textContent = "Total: $" + totalPrice.toFixed(2);
    }

    document.querySelectorAll(".detail-card").forEach(function (card) {
        card.addEventListener("click", function () {
            var serviceName = card.querySelector("h3").textContent.trim();
            var price = card.querySelector("p.price").textContent.trim().replace('$', '');

            selectedServices.push({ name: serviceName, price: price });

            updateShoppingCart();
        });
    });
});

function prepareQuote() {
    const cartList = document.getElementById("cart-list-popup");
    const totalPriceElement = document.getElementById("total-price-popup");

    const userEmail = document.getElementById('email').value;
    const userPhone = document.getElementById('phone').value;
    const additionalInfo = document.getElementById('additional-info').value;

    const selectedServices = [];

    cartList.querySelectorAll("li").forEach(function (cartItem) {
        const serviceName = cartItem.textContent.split(" - $")[0];
        const servicePrice = parseFloat(cartItem.textContent.split(" - $")[1]);

        selectedServices.push({ name: serviceName, price: servicePrice });
    });

    const totalPrice = parseFloat(totalPriceElement.textContent.split("$")[1]);

    let emailBody = `Selected Services:\n${selectedServices.map(item => `${item.name}: $${item.price.toFixed(2)}`).join('\n')}\n\nTotal Price: $${totalPrice.toFixed(2)}`;

    emailBody += `\n\nUser Information:\nEmail: ${userEmail}\nPhone: ${userPhone}\nAdditional Info: ${additionalInfo}`;

    const encodedEmailBody = encodeURIComponent(emailBody);

    const mailtoLink = `mailto:JoeMelillo@ShineMbl.com?subject=Quote Request&body=${encodedEmailBody}`;

    window.open(mailtoLink, '_blank');
}

function toggleServicesPopup() {
    var selectedServicesPopup = document.getElementById("selected-services-popup");
    selectedServicesPopup.style.display = (selectedServicesPopup.style.display === "none") ? "block" : "none";
}

function addToQuote(serviceName, servicePrice) {
    selectedServices.push({ name: serviceName, price: servicePrice });
    updateShoppingCart();
}
// Function to toggle the visibility of the detail section
function toggleSection(sectionClass) {
    const section = document.querySelector(`.${sectionClass}`);
    section.style.display = (section.style.display === 'none' || section.style.display === '') ? 'block' : 'none';
}

function toggleCartPopup() {
    var cartPopup = document.getElementById('shopping-cart-popup');
    cartPopup.style.display = (cartPopup.style.display === 'none' || cartPopup.style.display === '') ? 'block' : 'none';

    var requestQuoteBtn = document.getElementById('request-quote-btn');
    requestQuoteBtn.style.display = (cartPopup.style.display === 'none') ? 'block' : 'none';
}
function hideCartAndShowToggle() {
    // Hide the shopping cart
    document.getElementById("shopping-cart-popup").style.display = "none";

    // Show the "Request Quote" toggle button
    document.getElementById("request-quote-btn").style.display = "block";
}


function prepareQuote() {
    const cartList = document.getElementById("cart-list-popup");
    const totalPriceElement = document.getElementById("total-price-popup");

    const userEmail = document.getElementById('email').value;
    const userPhone = document.getElementById('phone').value;
    const additionalInfo = document.getElementById('additional-info').value;

    const selectedServices = [];

    cartList.querySelectorAll("li").forEach(function (cartItem) {
        const serviceName = cartItem.textContent.split(" - $")[0];
        const servicePrice = parseFloat(cartItem.textContent.split(" - $")[1]);

        selectedServices.push({ name: serviceName, price: servicePrice });
    });

    const totalPrice = parseFloat(totalPriceElement.textContent.split("$")[1]);

    let emailBody = `Selected Services:\n${selectedServices.map(item => `${item.name}: $${item.price.toFixed(2)}`).join('\n')}\n\nTotal Price: $${totalPrice.toFixed(2)}`;

    emailBody += `\n\nUser Information:\nEmail: ${userEmail}\nPhone: ${userPhone}\nAdditional Info: ${additionalInfo}`;

    const encodedEmailBody = encodeURIComponent(emailBody);

    // Create an anchor element to trigger the email client
    const mailtoLink = document.createElement('a');
    mailtoLink.href = `mailto:JoeMelillo@ShineMbl.com?subject=Quote Request&body=${encodedEmailBody}`;

    // Simulate a click on the anchor element
    mailtoLink.click();
}function prepareQuote() {
    const cartList = document.getElementById("cart-list-popup");
    const totalPriceElement = document.getElementById("total-price-popup");

    const userEmail = document.getElementById('email').value;
    const userPhone = document.getElementById('phone').value;
    const additionalInfo = document.getElementById('additional-info').value;

    const selectedServices = [];

    cartList.querySelectorAll("li").forEach(function (cartItem) {
        const serviceName = cartItem.textContent.split(" - $")[0];
        const servicePrice = parseFloat(cartItem.textContent.split(" - $")[1]);

        selectedServices.push({ name: serviceName, price: servicePrice });
    });

    const totalPrice = parseFloat(totalPriceElement.textContent.split("$")[1]);

    let emailBody = `Selected Services:\n${selectedServices.map(item => `${item.name}: $${item.price.toFixed(2)}`).join('\n')}\n\nTotal Price: $${totalPrice.toFixed(2)}`;

    emailBody += `\n\nUser Information:\nEmail: ${userEmail}\nPhone: ${userPhone}\nAdditional Info: ${additionalInfo}`;

    const encodedEmailBody = encodeURIComponent(emailBody);

    // Create an anchor element to trigger the email client
    const mailtoLink = document.createElement('a');
    mailtoLink.href = `mailto:JoeMelillo@ShineMbl.com?subject=Quote Request&body=${encodedEmailBody}`;

    // Simulate a click on the anchor element
    mailtoLink.click();
}


 // Add a click event listener to all detail cards
 document.querySelectorAll(".detail-card").forEach(function (card) {
    card.addEventListener("click", function () {
        // Extract service name and price from the clicked card
        var serviceName = card.querySelector("h3").textContent.trim();
        var price = card.querySelector("p.price").textContent.trim().replace('$', '');

        // Add the selected service to the array
        selectedServices.push({ name: serviceName, price: price });

        // Update the shopping cart
        updateShoppingCart();

        // Display the shopping cart
        toggleCartPopup();
    });
});



// JavaScript to add scroll effect
window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(function (item) {
        var itemTop = item.offsetTop;
        var itemHeight = item.offsetHeight;

        var halfwayUp = scrollPosition > itemTop - window.innerHeight / 2;
        var inViewport = scrollPosition > itemTop - window.innerHeight && scrollPosition < itemTop + itemHeight;

        if (inViewport) {
            item.classList.add('scroll-effect');
        } else {
            item.classList.remove('scroll-effect');
        }

        if (halfwayUp) {
            item.querySelector('h2').style.opacity = 1;
        }
    });
});



function sendEmail() {
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var emailBody = "First Name: " + firstName + "\n";
    emailBody += "Last Name: " + lastName + "\n";
    emailBody += "Email: " + email + "\n";
    emailBody += "Message: " + message;

    var mailtoLink = "mailto:JoeMelillo@ShineMbl.com?subject=Contact Form Submission&body=" + encodeURIComponent(emailBody);
    window.location.href = mailtoLink;
}
