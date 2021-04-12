class Product {
    constructor(title, description, imgUrl, price, stock, productId) {
        this.price = price;
        this.stock = stock;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
        this.productId = productId;
    }
    // Getter methods 
    get price() {
        return this.price;
    }
    get stock() {
        return this.stock;
    }
    get title() {
        return this.title;
    }
    get description() {
        return this.description;
    }
    get imgUrl() {
        return this.imgUrl;
    }
    get productId() {
        return this.imgUrl;
    }
    //   Card for displaying
    card() {
        let cardElement = document.createElement("div");
        cardElement.className = "main-container";
        cardElement.innerHTML = `
        <div class="image-container"><img class="image" ${this.imgUrl} alt="Image of product"></div>
        <div class="prod-container">
        <h2 class="prod-title">${this.title}</h2>
        <p class="prod-desc">${this.description}<br></p>
        <p id ="price-tag">${this.price}</p>
        <p id="prod-stock">${this.stock}</p>
        <button id="add-tocart">Add to Cart</button>
        <button id="remove">Remove Item</button></div>
        </div>
        
        `
    }




}
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
