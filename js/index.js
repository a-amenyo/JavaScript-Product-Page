// testing js 
// alert("i am working fine");
// Adding some elements to the div with id of wrapper
const para = document.createElement("div");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("wrapper");
element.appendChild(para);
