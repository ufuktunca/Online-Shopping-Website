const firstPicture = document.getElementById("picOne");
const secondPicture = document.getElementById("picTwo");
const thirdPicture = document.getElementById("picThree");
const fourthPicture = document.getElementById("picFour");
const fifthPicture = document.getElementById("picFive");
const mainPicture = document.getElementById("picMain");

function Slider(){
    firstPicture.addEventListener("click",firstImage);
    secondPicture.addEventListener("click",secondImage);
    thirdPicture.addEventListener("click",thirdImage);
    fourthPicture.addEventListener("click",fourthImage);
    fifthPicture.addEventListener("click",fifthImage);
}

Slider();


function firstImage(){
    mainPicture.src=firstPicture.className;
}

function secondImage(){
    mainPicture.src=secondPicture.className;
}

function thirdImage(){
    mainPicture.src=thirdPicture.className;
}

function fourthImage(){
    mainPicture.src=fourthPicture.className;
}

function fifthImage(){
    mainPicture.src=fifthPicture.className;
}
