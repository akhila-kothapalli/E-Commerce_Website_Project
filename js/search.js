const search=document.getElementById("search");

const category=document.getElementById("category");

const sort=document.getElementById("sort");

search.addEventListener("input",filterProducts);

category.addEventListener("change",filterProducts);

sort.addEventListener("change",filterProducts);

function filterProducts(){

let filtered=[...products];

filtered=filtered.filter(product=>

product.name.toLowerCase()

.includes(search.value.toLowerCase())

);

if(category.value!="All"){

filtered=filtered.filter(product=>

product.category===category.value

);

}

if(sort.value=="low"){

filtered.sort((a,b)=>a.price-b.price);

}

if(sort.value=="high"){

filtered.sort((a,b)=>b.price-a.price);

}

displayProducts(filtered);

}