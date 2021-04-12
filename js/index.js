// let bodyElement = document.body; 
let wrapper = document.querySelector(".wrapper"); 

// Adding elements to the main container
let cardElement = document.createElement("div"); 
cardElement.className = "main-container"; 
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
productDescription.innerText = `Black OOO sneakers are made for walking.
It's well-known for its durability and simple look ;the signaature arrow on the side and Off-White™ logo on the back. 
Also has a tonal rubber sole. 
Black lace-up closure.

Price : GHS 500.0 `;

// sTOCK
let stock = document.createElement("p");
stock.className = "prod-stock";
stock.innerText = `Stock Available : 20 `;



// Add to cart button 
let btnElement = document.createElement("button"); 
btnElement.innerText = "Add to Cart" ;
btnElement.setAttribute("id", "add-tocart"); 

// let btnElement = document.createElement("div");
// btnElement.className = "button-container";
// btnElement.innerHTML =  `<button> Add to Cart </button>`; 

imageElement.src = "assets/item1.webp"; 
imageElement.setAttribute("alt", "Image of product"); 

wrapper.appendChild(cardElement);  
cardElement.append(imageContainer, productDescription); 
imageContainer.appendChild(imageElement); 
// adding description details to the descritpion div 
descriptionContainer.append(productTitle, productDescription, stock, btnElement);
// And now appending all to the image container
imageContainer.append(descriptionContainer);


 










// Adding some elements to the div with id of main-container
// let div = document.querySelector('#main-container');
// const leftSide = document.createElement('div');
// leftSide.className = "left-container";
// leftSide.innerHTML = `
// <div>
// <img id="pic1" src="assets/item1.webp" alt="">
// </div>

// <div>
// <img id="pic2" src="assets/kiddo.jpg" alt="">
// </div>

// <div>
// <img id="pic3" src="assets/backview.jpg" alt="">
// </div>

// `;

// Adding right hand side div 
// let div2 = document.querySelector('.left-container'); 
// const rightSide = document.createElement('div');
// div.className = "right-container";
// div2.insertAdjacentElement('afterend', `

// <div>
// A
// </div>
// <div>
// B
// </div>
// <div>
// C
// </div>

// `)
