var menuicon = document.getElementById("menuicon")
var sidenavbar = document.getElementById("sidenav")
var closenavbar = document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenavbar.style.left = 0;
})
closenavbar.addEventListener("click",function(){
    sidenavbar.style.left = "-50%";
})

var cross = document.getElementById("cross")
var offerbar = document.getElementById("offerbar")

cross.addEventListener("click",function(){
    offerbar.style.display = "none";
})


var search = document.getElementById("search")
var products = document.getElementById("products")
var h1list = products.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredvalue = event.target.value.toUpperCase();
    for(i=0; i<h1list.length; i++){
        if(h1list[i].textContent.toUpperCase().indexOf(enteredvalue)<0){
            h1list[i].style.display = "none"
        }else{
            h1list[i].style.display="block"
        }
    }
})