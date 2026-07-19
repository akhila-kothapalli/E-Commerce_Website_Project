let products = [];

fetch("data/products.json")
.then(res => res.json())
.then(data => {

    products = data;

    loadProduct();

});

function loadProduct() {

    const id = Number(localStorage.getItem("selectedProduct"));

    const product = products.find(p => p.id === id);

    const details =
        document.getElementById("productDetails");

    details.innerHTML = `

<div class="details-container">

<div>

<img src="${product.image}"
class="details-image">

</div>

<div class="details-info">

<h1>${product.name}</h1>

<h2>₹${product.price}</h2>

<p>

Premium quality
${product.name}
with excellent durability
and stylish design.

</p>

<label>

Quantity

</label>

<input
type="number"
id="qty"
value="1"
min="1">

<br><br>

<button onclick="addToCart(${product.id})">

Add To Cart

</button>

<button onclick="buyNow()">

Buy Now

</button>

</div>

</div>

`;

    showRelated(product.category);

}

function addToCart(id) {

    const qty =
    Number(document.getElementById("qty").value);

    const product =
    products.find(p => p.id === id);

    let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

    for(let i=0;i<qty;i++){

        cart.push(product);

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert("Added to Cart!");

}

function buyNow(){

window.location.href="checkout.html";

}

function showRelated(category){

const related=document.getElementById("relatedProducts");

const items=products.filter(
p=>p.category===category
);

related.innerHTML="";

items.forEach(product=>{

related.innerHTML+=`

<div class="card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p class="price">

₹${product.price}

</p>

<button onclick="view(${product.id})">

View

</button>

</div>

`;

});

}

function view(id){

localStorage.setItem(
"selectedProduct",
id
);

location.reload();

}