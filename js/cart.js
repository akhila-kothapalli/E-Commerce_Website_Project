let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cartContainer");
const totalElement = document.getElementById("total");

displayCart();

function displayCart(){

container.innerHTML="";

if(cart.length===0){

container.innerHTML=`
<h2 class="empty">
Your Cart is Empty
</h2>
`;

document.getElementById("cartSummary").style.display="none";

return;

}

let grouped=[];

cart.forEach(product=>{

const existing=grouped.find(item=>item.id===product.id);

if(existing){

existing.quantity++;

}else{

grouped.push({

...product,

quantity:1

});

}

});

let total=0;

grouped.forEach(item=>{

total+=item.price*item.quantity;

container.innerHTML+=`

<div class="cart-item">

<img src="${item.image}">

<div class="info">

<h3>${item.name}</h3>

<p>Price : ₹${item.price}</p>

<div class="quantity">

<button onclick="decrease(${item.id})">-</button>

<span>${item.quantity}</span>

<button onclick="increase(${item.id})">+</button>

</div>

</div>

<button
class="remove"
onclick="removeItem(${item.id})">

Remove

</button>

</div>

`;

});

totalElement.innerHTML=total;

}

function increase(id){

const product=cart.find(item=>item.id===id);

cart.push(product);

localStorage.setItem("cart",JSON.stringify(cart));

displayCart();

}

function decrease(id){

const index=cart.findIndex(item=>item.id===id);

if(index!=-1){

cart.splice(index,1);

}

localStorage.setItem("cart",JSON.stringify(cart));

displayCart();

}

function removeItem(id){

cart=cart.filter(item=>item.id!==id);

localStorage.setItem("cart",JSON.stringify(cart));

displayCart();

}