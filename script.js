// Savory Bites - Initial JavaScript

console.log("Welcome to Savory Bites!");


// Display a message when the page has loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("Savory Bites webpage loaded successfully.");
});// =========================================
// SAVORY BITES - JAVASCRIPT
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Savory Bites website loaded successfully.");

    // -----------------------------------------
    // MENU FILTER
    // -----------------------------------------

    const categoryButtons = document.querySelectorAll(
        ".menu-categories button"
    );

    const menuCards = document.querySelectorAll(".menu-card");

    categoryButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const category = button.textContent.trim().toLowerCase();

            // Remove active state from all buttons
            categoryButtons.forEach((btn) => {
                btn.classList.remove("active");
            });

            // Add active state to selected button
            button.classList.add("active");

            menuCards.forEach((card) => {

                const title = card
                    .querySelector("h3")
                    .textContent
                    .toLowerCase();

                if (
                    category === "all" ||
                    (category === "breakfast" &&
                        !title.includes("coffee") &&
                        !title.includes("tea")) ||
                    (category === "drinks" &&
                        (title.includes("coffee") ||
                            title.includes("tea")))
                ) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }

            });

        });

    });


    // -----------------------------------------
    // ORDER BUTTONS
    // -----------------------------------------

    const orderButtons = document.querySelectorAll(".order-button");

    orderButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const card = button.closest(".menu-card");

            const mealName = card.querySelector("h3").textContent;

            alert(
                `Thank you for choosing ${mealName}!\n\n` +
                `Online ordering will be available soon.`
            );

        });

    });


    // -----------------------------------------
    // UPDATE CURRENT YEAR
    // -----------------------------------------

    const yearElement = document.querySelector(".footer-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});
