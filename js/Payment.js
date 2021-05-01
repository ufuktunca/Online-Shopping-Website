const cardNumber = document.getElementById("CardNumberArea");
const month = document.getElementById("MonthArea");
const year = document.getElementById("YearArea");
const cvv = document.getElementById("CvvArea");
const payment = document.getElementById("Payit");
const cardForm = document.getElementById("formCart");
const Error = document.getElementById("errorArea");
const adres = document.getElementById("adressArea");

function EventListener() {
    payment.addEventListener("click", Payit);
}
EventListener();


function Payit() {
    console.log(month.value);
    console.log(year.value);
    console.log(cvv.value);
    console.log(cardNumber.value);

    if (cvv.value === "410" && year.value === "2024" && cardNumber.value === "7485125377794578" && month.value == "may" && adres.value != "") {
        Error.innerHTML = ` <div class="alert" style="text-align: center;background-color: green;>
        <span"></span>
        <strong>Succesful!</strong> Thank you for your purchase.
    </div>`
        localStorage.removeItem("userCart");
        setInterval(() => {
            Error.innerHTML = ``
            window.location.href = "index.html";
        }, 5000);
    }
    else if (adres.value == "") {
        Error.innerHTML = ` <div class="alert" style="text-align: center;>
        <span"></span>
        <strong>Danger!</strong> You must enter your adresses.
    </div>`

        setInterval(() => {
            Error.innerHTML = ``
        }, 5000);
    }
    else {
        Error.innerHTML = ` <div class="alert" style="text-align: center;>
        <span"></span>
        <strong>Danger!</strong> Your credit cart details doesn't match with any credit cart please chek it and try again.
    </div>`

        setInterval(() => {
            Error.innerHTML = ``
        }, 5000);
    }
}
