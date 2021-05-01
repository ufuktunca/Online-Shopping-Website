const small = document.getElementById("S");
const medium = document.getElementById("M");
const large = document.getElementById("L");
const xlarge = document.getElementById("XL");

function allTheFunctions(){
    small.addEventListener("click",setSmall);
    medium.addEventListener("click",setMedium);
    large.addEventListener("click",setLarge);
    xlarge.addEventListener("click",setXLarge);
}



allTheFunctions();


function setSmall(){
    small.style.border="3px solid white";
    medium.style.border="1px solid gray";
    large.style.border="1px solid gray";
    xlarge.style.border="1px solid gray";
}

function setMedium(){
    small.style.border="1px solid gray";
    medium.style.border="3px solid white";
    large.style.border="1px solid gray";
    xlarge.style.border="1px solid gray";
}

function setLarge(){
    small.style.border="1px solid gray";
    medium.style.border="1px solid gray";
    large.style.border="3px solid white";
    xlarge.style.border="1px solid gray";
}

function setXLarge(){
    small.style.border="1px solid gray";
    medium.style.border="1px solid gray";
    large.style.border="1px solid gray";
    xlarge.style.border="3px solid white";
}