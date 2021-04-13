let wrapper = document.querySelector(".wrapper");

class Product {
    constructor(title, description, imgUrl, price, stock, productId) {
        this.price = price;
        this.stock = stock;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
        this.productId = productId;
    }

    //  PRODUCT CARDS
    card() {
        let cardElement = document.createElement("div");
        cardElement.className = "main-container";
        cardElement.innerHTML = `
        <div class="image-container"><img class="image" src = "${this.imgUrl}" alt="Image of product"></div>
        <div class="prod-container">
        <h2 class="prod-title">${this.title}</h2>
        <p class="prod-desc">${this.description}</p>
        <p id ="price-tag">${this.price}</p>
        <p id="prod-stock">${this.stock}</p>
        <button id="add-tocart">Add to Cart</button>
        <button id="remove">Remove Item</button></div>
        </div>
        
        `
        return cardElement;
    }

}

// Inheritance 



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
