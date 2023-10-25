document.addEventListener("DOMContentLoaded", function () {
    const reviews = [
        "Great product!",
        "Good value for the price.",
        "Highly recommended.",
    ];

    const reviewList = document.getElementById("reviewList");


    function displayReviews() {
        reviews.forEach((review) => {
            const li = document.createElement("li");
            li.textContent = review;
            reviewList.appendChild(li);
        });
    }

    displayReviews();


    const addToCartButton = document.getElementById("addToCart");
    addToCartButton.addEventListener("click", function () {
        alert("Product added to cart!");
    });
});
