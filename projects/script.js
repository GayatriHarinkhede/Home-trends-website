let var1 = document.querySelector(".overflow");
let var2= document.querySelector(".fa-angle-left");
let var3=document.querySelector(".fa-angle-right");

var1.addEventListener("wheel",(event)=>{
 event.preventDefault();
//  it is use for  top to bottom scrolling
var1.scrollLeft += event.deltaX;
// var1.scrollLeft += event.deltaY;
});
fa-angle-left.addEventListener("click",()=>{
    var1.scrollLeft += 650;
})
fa-angle-right.addEventListener("click",()=>{
    var1.scrollLeft += 650;
})
