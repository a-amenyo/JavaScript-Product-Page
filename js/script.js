// Functionality 
// Add to cart quantity change in the nav bar 
const addToCart = document.querySelector("#add-tocart");
const quantityUpdate = document.querySelector("#qty");
const stockDecrement = document.querySelector("#prod-stock"); 
addToCart.addEventListener("click", function (){
    
    if ( quantityUpdate.textContent >= 20){
        alert("Sorry, we are out of stock!");
    }
    else if (quantityUpdate.textContent <= 20){
        quantityUpdate.textContent = Number(quantityUpdate.textContent)+1; 
        stockDecrement.innerText --; 

    }    
    
})
// Delete function 
const removeItem = document.querySelector("#remove");

removeItem.addEventListener("click", function (){
    if (quantityUpdate.textContent < removeItem.textContent ){

    }
})


// $("#qty").change(function(){
//     // Assigning a variable to the this.val() function
//     // let displayQuantity = $(this).val();
//     // $("#displayqty").text(displayQuantity);
//   $("#displayqty").text($(this).val());
//     // Quantity of items to show at nav bar also 
//     // $("#disp").text(displayQuantity);
//     $("#disp").text($(this).val());
// });

