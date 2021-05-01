const cart = document.querySelector(".cartProducts");
const product = document.getElementById("product");
const cancel = document.getElementById("cancel");
const price = document.getElementById("costPrice");
const allPrice = document.getElementById("allPrice");

let prices = 0;

function eventsListener() {
    getProducts();
    document.addEventListener("DOMContentLoaded", addProducts)
    cart.addEventListener("click", deleteProduct);
}

eventsListener();

function getProducts() {
    const Products = JSON.parse(localStorage.getItem("userCart"));
    return Products;
}

function addProducts() {
    const Products = getProducts();
    for (let i = 0; i < Products.length; i = i + 4) {

        cart.innerHTML += `<div class="product" id="product">
        <div class="cartUrun"><img src="${Products[i]}"></div>
        <div class="cartName">${Products[i + 1]}</div>
        <div class="cartSize">${Products[i + 3]}</div>
        <div class="cartPrice">${Products[i + 2]}</div>
        <div class="cancel"id="cancel">X</div>
    </div>`
        let cost = Products[i + 2]
        cost = cost.substring(1);
        prices += parseInt(cost);
    }

    price.innerHTML = `${prices}₺`
    allPrice.innerHTML = `${prices + 10}₺`
}

function deleteProduct(e) {
    console.log(e)
    if (e.target.className == "cancel") {
        deleteFromStorage(e.target.parentElement.childNodes[1]);

        e.target.parentElement.remove();
    }
    ;

}

function deleteFromStorage(image) {
    let Products = getProducts();
    for (let i = 0; i < Products.length; i++) {
        if (image.firstChild.src == Products[i]) {
            Products.splice(i, 4);
            localStorage.setItem("userCart", JSON.stringify(Products));
        }
    }

    Products = getProducts();
    cost = 0;
    prices = 0;
    for (let i = 0; i < Products.length; i = i + 4) {
        let cost = Products[i + 2]
        cost = cost.substring(1);
        prices += parseInt(cost);
        console.log(cost)

    }

    price.innerHTML = `${prices}₺`
    allPrice.innerHTML = `${prices + 9.99}₺`


}