let cart = JSON.parse(localStorage.getItem("cart")) || [];

const summary = document.getElementById("summary");
const totalElement = document.getElementById("total");

let grouped = [];

cart.forEach(product => {

const existing = grouped.find(
item => item.id === product.id
);

if(existing){

existing.quantity++;

}else{

grouped.push({

...product,

quantity:1

});

}

});

let total = 0;

grouped.forEach(item=>{

total += item.price * item.quantity;

summary.innerHTML += `

<div class="order-item">

<div>

<h4>${item.name}</h4>

<p>

Qty : ${item.quantity}

</p>

</div>

<div>

₹${item.price * item.quantity}

</div>

</div>

`;

});

totalElement.innerHTML = total;

document
.getElementById("checkoutForm")
.addEventListener("submit",placeOrder);

function placeOrder(e){

e.preventDefault();

const order={

customer:{

name:document.getElementById("name").value,

email:document.getElementById("email").value,

phone:document.getElementById("phone").value,

address:document.getElementById("address").value,

payment:document.getElementById("payment").value

},

items:grouped,

total:total,

date:new Date().toLocaleString()

};

let orders=

JSON.parse(localStorage.getItem("orders"))

|| [];

orders.push(order);

localStorage.setItem(

"orders",

JSON.stringify(orders)

);

localStorage.removeItem("cart");

alert("🎉 Order Placed Successfully!");

window.location.href="order-sucess.html";

}