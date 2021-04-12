// let bodyElement = document.body; 

let wrapper = document.querySelector(".wrapper"); 

// Adding elements to the main container
// let cardElement = document.createElement("div"); 
// cardElement.className = "main-container"; 
// Container for images
let imageContainer = document.createElement('div'); 
imageContainer.className = "image-container"; 
// Images 
let imageElement = document.createElement("img"); 
imageElement.className = "image";
// Container for description
let descriptionContainer =  document.createElement('div'); 
descriptionContainer.className = "prod-container"; 
// Product Title 
let productTitle = document.createElement('h2'); 
productTitle.className = "prod-title"; 
productTitle.innerText = "OUT OF OFFICE TRIPLE BLACK SHOES"; 
// Product description 
let productDescription = document.createElement("p");
productDescription.className = "prod-desc";
productDescription.innerText = `Black "OOO" sneakers are made for walking.
It's well-known for its durability and simple look ;the signature arrow on the side and Off-White™ logo on the back. 
Also has a tonal rubber sole. 
Black lace-up closure.

Price : GHS 500.0 `;

// Add to cart button 
let addToCart = document.createElement("button"); 
addToCart.innerText = "Add to Cart" ;
addToCart.setAttribute("id", "add-tocart"); 

// Stock
let stock = document.createElement("p");
stock.setAttribute("id", "prod-stock");
// stock.className = "prod-stock";
stock.innerText = `Stock Available : 20 `;

// Remove item 
let removeItem = document.createElement("button"); 
removeItem.innerText = "Remove Item"; 
removeItem.setAttribute("id", "remove"); 

// let btnElement = document.createElement("div");
// btnElement.className = "button-container";
// btnElement.innerHTML =  `<button> Add to Cart </button>`; 

imageElement.src = "assets/item1.webp"; 
imageElement.setAttribute("alt", "Image of product"); 

// wrapper.appendChild(cardElement);  
// cardElement.append(imageContainer, productDescription); 
imageContainer.appendChild(imageElement); 
// adding description details to the descritpion div 
descriptionContainer.append(productTitle, productDescription, stock, addToCart, removeItem);
// And now appending all to the image container
imageContainer.append(descriptionContainer);






