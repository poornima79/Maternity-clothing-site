document.addEventListener("DOMContentLoaded", function() {
    // Add smooth scrolling to navigation links
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const sliderContainer = document.querySelector('.slider-container');
    let isDown = false;
    let startX;
    let scrollLeft;

    sliderContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - sliderContainer.offsetLeft;
        scrollLeft = sliderContainer.scrollLeft;
    });

    sliderContainer.addEventListener('mouseleave', () => {
        isDown = false;
    });

    sliderContainer.addEventListener('mouseup', () => {
        isDown = false;
    });

    sliderContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - sliderContainer.offsetLeft;
        const walk = (x - startX) * 2; 
        sliderContainer.scrollLeft = scrollLeft - walk;
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const sliderContainer = document.querySelector('.slider-container');
    const selectedProductsList = document.getElementById('selected-products');
    let total = 0;

    sliderContainer.addEventListener('click', function(event) {
        const target = event.target;
        if (target.tagName === 'IMG') {
            const product = target.alt;
            const price = parseFloat(target.parentElement.querySelector('.price').textContent.replace('Rs.', ''));
            
            // Add selected product to the basket
            const li = document.createElement('li');
            li.textContent = `${product} - Rs.${price}`;
            selectedProductsList.appendChild(li);

            // Update total price
            total += price;
            document.getElementById('total-price').textContent = `Total: Rs. ${total}`;
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const checkoutButton = document.getElementById("checkout-button");
    checkoutButton.addEventListener("click", function() {
        // Simulate redirection to a payment gateway
        window.location.href = "https://example.com/payment"; // Replace with your payment gateway URL
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const basket = document.getElementById("selected-products");
    const totalElement = document.getElementById("total-price");
    let total = 0;

    const addToBasket = (productName, productPrice) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${productName} - ${productPrice}`;
        basket.appendChild(listItem);
        total += productPrice;
        totalElement.textContent = `Total: ${total.toFixed(2)}`;
    };

    const productSlides = document.querySelectorAll(".slide");
    productSlides.forEach(slide => {
        slide.addEventListener("click", function() {
            const productName = this.querySelector(".description h3").textContent;
            const productPrice = parseFloat(this.querySelector(".description .price").textContent.replace("Rs.", ""));
            addToBasket(productName, productPrice);
        });
    });

    const checkoutButton = document.getElementById("checkout-button");
    checkoutButton.addEventListener("click", function() {
        // Simulate redirection to a payment gateway or open a payment modal
        alert("Redirecting to payment gateway...");
        // Here you can integrate with your payment gateway or show a payment modal
    });
});



