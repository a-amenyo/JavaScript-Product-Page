let wrapper = document.querySelector(".wrapper");

class Product{
    constructor(title, description, imgUrl, price, stock, productId) {
        this.price = price;
        this.stock = stock;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
        this.productId = productId;
    }


}
// Applying inheritance 
class productItems extends Product{
    constructor(title, description, imgUrl, price, stock, productId){
        super(title, description, imgUrl, price, stock, productId);
    }
        //  PRODUCT CARDS
        card() {
            let cardElement = document.createElement("div");
            cardElement.className = "main-container";
            cardElement.innerHTML = `
            <div class="image-container"><img class="image" src = "${this.imgUrl}" alt="Image of product"></div>
            <div class="prod-container">
            <h2 class="prod-title"> ${this.title}</h2>
            <p class="prod-desc">${this.description}</p>
            <p id ="price-tag">  GH₵ ${this.price}</p>
            <p>Stock Available : <pus id="${this.productId}stock">  ${this.stock}</pus></p>
            <button  class = "add-tocart" id="${this.productId}addBtn">Add to Cart</button>
            <button class ="remove" id="${this.productId}removeBtn">Remove Item</button></div>
            </div>
            
            `
            return cardElement;
        }
        getAddToCartButton(){
            return document.querySelector(`#${this.productId}addBtn`);
        }
        getRemoveItemButton(){
            return document.querySelector(`#${this.productId}removeBtn`);
        }
}



// 1st Item ; Shoes 
const product1 = new productItems(`"GEARED UP" TRIPLE BLACK SHOES`,`Black "OOO" sneakers are made for walking.
It's well-known for its durability and simple look.
Also has a tonal rubber sole. 
Black lace-up closure.` , "assets/item1.webp", 350.0, 5, "prod1"); 

// 2nd Item ; BackPack
const product2 = new productItems(`"GEARED UP" BACK-TO-SCHOOL BACKPACK`,`Black, easy-wear backpack with white arrows printed at 
front.  Twin adjustable shoulder straps. Zipped pocket at side. Two-way zip closure at main compartment.
Material: 10% Acrylic, 90% Polyester, 35% Cotton, 58% Polyamide, 42% Polyurethane, 65% Polyurethane.`, 
"assets/item2.webp", 90.0,  5, "prod2"); 

// 3rd Item ; T-Shirt
const product3 = new productItems(`"GEARED UP" BLACK SHORT SLEEVES T-SHIRT`,`Short sleeves T-Shirt. Crewneck collar. 
Oversize fit.
Available in all sizes.
Material: 100% Cotton.` , "assets/item5.jpg", 50.0,  5, "prod3"); 

// 4th Item ; Earrings
const product4= new productItems("ARROW EARRINGS",`Drop arrows earrings in gold-tone metal with green rectangular pendants. "HEXNUT" text engraved at post-stud fastening.

Material: 100% Brass` , "assets/item6.webp",45.0,  5, "prod4"); 

let allProducts = [product1, product2, product3, product4];

allProducts.map(loop => {
    wrapper.append(loop.card()); 

})

// Add to cart card 
let addCard = document.createElement("div");
addCard.className = "add-card";
addCard.innerHTML = `
        <div class="add-popup">
        <div class="items">
            <h2>Items added to cart <a id="items">&times</a></h2>
        </div>
        <div class="popup-info">
            <div class="img">
                <img src="assets/frontview.jpg" alt="">
            </div>
            <div class="desc">
                <p> <strong> Boys' Stillwater Sherpa 1/4-Zip</strong> </p> <br>
                <p id="newprice">$<d id="pop-price">0</d< /p> <br>
                        <p>Camel / 4T </p> <br>
                        <p> Quantity :<d id="disp-qty"></d>
                        </p> <br>
                        <p><a href="">$195.96</a></p> <br>
            </div>
        </div>
        <hr>
        <div class="subtotal">
            <h4>CART SUBTOTAL : <span id="subprice">$195.96</span> </h4>
        </div>

        <div class="to-checkout">
            <div class="checkk">
                <h3> <a href="cart.html">CHECKOUT</a> </h3>
            </div>
            <div class="shopp">
                <p> <strong>CONTINUE SHOPPING</strong> </p>
                <p id="get"> <a href="index.html">return to store</a> </p>
            </div>
        </div>

    </div>
        `
// wrapper.append(addCard); 


// Cart Class 
class Cart {
    constructor(items) {
        this.items = items;

    }

    get quantity() {
        return this.quantity;
    }

    addToCart(product) {
        this.items.push(product);

    }
}
