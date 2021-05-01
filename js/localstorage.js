const addToCartButton = document.getElementById("addToCart");
const productPrice = document.getElementById("price").textContent;
const productTitle = document.getElementById("productTitle").textContent;
const smallSize = document.getElementById("S");
const mediumSize = document.getElementById("M");
const largeSize = document.getElementById("L");
const xlargeSize = document.getElementById("XL");
const image = document.getElementById("picOne");




function EventListener(){
    addToCartButton.addEventListener("click",AddLocal);
}

EventListener();



function getLocal(){
    if(localStorage.getItem("userCart") == null){
      return userCart = [];
    }
    else{
       return userCart=JSON.parse(localStorage.getItem("userCart"))
    }
}


function AddLocal(e){
    userCart = getLocal();
    userCart.push(image.src);
    userCart.push(productTitle);
    userCart.push(productPrice);
    if(smallSize.style.border == "3px solid white"){
        userCart.push("S");
    }
    if(mediumSize.style.border == "3px solid white"){
        userCart.push("M");
    }
    if(largeSize.style.border == "3px solid white"){
        userCart.push("L");
    }
    if(xlargeSize.style.border == "3px solid white"){
        userCart.push("XL");
    }

    localStorage.setItem("userCart",JSON.stringify(userCart))
}