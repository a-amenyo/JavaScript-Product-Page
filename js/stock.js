// 1st Item ; Shoes 
const product1 = new Product(`"GEARED UP" TRIPLE BLACK SHOES`,`Black "OOO" sneakers are made for walking.
It's well-known for its durability and simple look.
Also has a tonal rubber sole. 
Black lace-up closure.` , "assets/item1.webp", "GHS 350.0", "Stock Available: 20", "prod1"); 

// 2nd Item ; BackPack
const product2 = new Product(`"GEARED UP" BACK-TO-SCHOOL BACKPACK`,`Black, easy-wear backpack with white arrows printed at 
front.  Twin adjustable shoulder straps. Zipped pocket at side. Two-way zip closure at main compartment.
Material: 10% Acrylic, 90% Polyester, 35% Cotton, 58% Polyamide, 42% Polyurethane, 65% Polyurethane.`, 
"assets/item2.webp", "GHS 90.0", "Stock Available: 20", "prod1"); 

// 3rd Item ; T-Shirt
const product3 = new Product(`"GEARED UP" BLACK SHORT SLEEVES T-SHIRT`,`Short sleeves T-Shirt. Crewneck collar. 
Oversize fit.
Available in all sizes.
Material: 100% Cotton.` , "assets/item3.webp", "GHS 50.0", "Stock Available: 20", "prod1"); 

// 4th Item ; KeyChain 
const product4= new Product("HAND OFF KEY CHAIN",`Black key holder with "Off" hand logo. Keyring fastening.

Material: 100% metal 100% PVC.` , "assets/item4.webp", "GHS 45.0", "Stock Available: 20", "prod1"); 

let allProducts = [product1, product2, product3, product4];

allProducts.map(loop => {
    wrapper.append(loop.card()); 

})



