// Functionality 
// Add to cart quantity change in the nav bar 
const addToCart = document.querySelectorAll("#add-tocart");
const quantityUpdate = document.querySelector("#qty");

for(const item of allProducts){
    let stockDecrement = document.querySelector(`#${item.productId}stock`);
    
        item.getAddToCartButton().addEventListener("click", function (){
            
    
            if ( Number(quantityUpdate.textContent) >= 20){
                alert("Sorry, we are out of stock!");
                
            }
            else if (Number(stockDecrement.innerText) <= 20 && Number(stockDecrement.textContent) >0){
                quantityUpdate.textContent = Number(quantityUpdate.textContent)+1; 
                stockDecrement.innerText = Number(stockDecrement.innerText) - 1;
        
            }             
            
        })
        const removeItem = document.querySelector("#remove");
        // Delete function 
        item.getRemoveItemButton().addEventListener("click", function (){
            if ((Number(quantityUpdate.textContent) > 0 && stockDecrement.textContent < 5)){
                quantityUpdate.textContent = Number(quantityUpdate.textContent)-1;
                stockDecrement.textContent = Number(stockDecrement.textContent)+1; 
            }

        })
           
    }
    




