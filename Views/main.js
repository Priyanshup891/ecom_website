let songIndex = 0;
let ProductImg = document.getElementById("ProductImg");
let smallImg = Array.from(document.getElementsByClassName("small-img"));


smallImg[0].onclick = function(){
    ProductImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    ProductImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    ProductImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
    ProductImg.src = smallImg[3].src;
}
function register(){
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)"
}

function login(){
    LoginForm.style.transform = "translateX(300px)";
    RegForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
}