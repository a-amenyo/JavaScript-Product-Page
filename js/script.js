// Functionality 
// Add to cart quantity change in the nav bar 
const addToCart = document.querySelector("#add-tocart");
const quantityUpdate = document.querySelector("#qty");e
addToCart.addEventListener("click", function (){
    quantityUpdate.textContent = Number(quantityUpdate.textContent)+1; 

})

$("#qty").change(function(){
    // Assigning a variable to the this.val() function
    // let displayQuantity = $(this).val();
    // $("#displayqty").text(displayQuantity);
  $("#displayqty").text($(this).val());
    // Quantity of items to show at nav bar also 
    // $("#disp").text(displayQuantity);
    $("#disp").text($(this).val());
});

