let products = [];

fetch("data/products.json")
.then(res=>res.json())
.then(data=>{

products=data;

displayProducts(products);

});

function displayProducts(items){

const container=document.getElementById("products");

container.innerHTML="";

items.forEach(product=>{

container.innerHTML+=`

<div class="card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p class="price">₹${product.price}</p>

<button onclick="addToCart(${product.id})">

Add to Cart


</button>

</div>

`;


});

container.innerHTML += `
<div class="card">

    <img src="${product.image}" alt="${product.name}">

    <h3>${product.name}</h3>

    <p class="price">₹${product.price}</p>

    <button onclick="viewProduct(${product.id})">
        View Details
    </button>

</div>
`;

}

function addToCart(id){

let cart=JSON.parse(localStorage.getItem("cart"))||[];

const product=products.find(p=>p.id===id);

cart.push(product);

localStorage.setItem("cart",JSON.stringify(cart));

alert("Added to Cart!");

}
function viewProduct(id) {

    localStorage.setItem("selectedProduct", id);

    window.location.href = "product-details.html";

}