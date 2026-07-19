console.log("Welcome to ShopEasy!");

const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {

button.addEventListener("click", () => {

window.location.href = "products.html";

});

});