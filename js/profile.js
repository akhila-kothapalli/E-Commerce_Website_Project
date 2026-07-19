let user =
JSON.parse(localStorage.getItem("loggedInUser"));

if(!user){

alert("Please Login First");

window.location.href="login.html";

}

document.getElementById("welcome").innerHTML =
"Welcome, " + user.name;

document.getElementById("name").value =
user.name;

document.getElementById("email").value =
user.email;



function updateProfile(){

user.name =
document.getElementById("name").value;

localStorage.setItem(
"loggedInUser",
JSON.stringify(user)
);

let users =
JSON.parse(localStorage.getItem("users")) || [];

users = users.map(u => {

if(u.email === user.email){

u.name = user.name;

}

return u;

});

localStorage.setItem(
"users",
JSON.stringify(users)
);

document.getElementById("welcome").innerHTML =
"Welcome, " + user.name;

alert("Profile Updated Successfully!");

}



const orders =
JSON.parse(localStorage.getItem("orders")) || [];

document.getElementById("orderCount").innerHTML =
orders.length;

const ordersList =
document.getElementById("ordersList");

if(orders.length === 0){

ordersList.innerHTML =

"<p>No Orders Yet</p>";

}else{

orders.forEach(order=>{

let products = "";

order.items.forEach(item=>{

products +=

`<li>

${item.name}

(${item.quantity})

- ₹${item.price * item.quantity}

</li>`;

});

ordersList.innerHTML += `

<div class="order">

<h4>

Order Date

</h4>

<p>

${order.date}

</p>

<p>

Payment :

${order.customer.payment}

</p>

<p>

Total :

₹${order.total}

</p>

<b>Products</b>

<ul>

${products}

</ul>

</div>

`;

});

}



function logout(){

localStorage.removeItem("loggedInUser");

alert("Logged Out Successfully");

window.location.href="login.html";

}