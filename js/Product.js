class Product {
    constructor(price, stock, title, description, imgUrl, productId){
        this.price = price;
        this.stock = stock; 
        this.title =title; 
        this,description = description; 
        this.imgUrl = imgUrl;
        this.productId = productId;
    }
// Getter methods 
    get price(){
        return this.price;
    }
    get stock (){
        return this.stock; 
    }
    get title(){
        return this.title; 
    }
    get description(){
        return this.description; 
    }
    get imgUrl(){
        return this.imgUrl; 
    }
    get productId(){
        return this.imgUrl; 
    }


}
// Cart Class 
class Cart{
    constructor(quantity){
        this.quantity= quantity;

    }

    get quantity (){
        return this.quantity; 
    }
}
