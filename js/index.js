
// Adding some elements to the div with id of main-container
let div = document.querySelector('#main-container'); 
div.classList.add("left-container"); 

div.insertAdjacentElement( 'afterbegin', 
`
<div>
<img id="pic1" src="assets/frontview.jpg" alt="">
</div>
<div>
<img id="pic2" src="assets/kiddo.jpg" alt="">
</div>
<div>
<img id="pic3" src="assets/backview.jpg" alt="">
</div>

`)
// Adding right hand side div 
let div2 = document.querySelector('.left-container'); 
div2.classList.add('right-container'); 
div2.insertAdjacentElement('afterend', `

<div>
<img id="img1" src="assets/frontview.jpg" alt="">
</div>
<div>
<img id="img2" src="assets/kiddo.jpg" alt="">
</div>
<div>
<img id="img3" src="assets/backview.jpg" alt="">
</div>

`)
