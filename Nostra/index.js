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

var heart = document.getElementById("heart")

heart.addEventListener("click",function(){
    heart.style.display="red"
})