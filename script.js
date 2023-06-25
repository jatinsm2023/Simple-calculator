function DisplayNumber(Number) {
    const PreviousElement = document.querySelector('.js-Number-Display').innerText;
    document.querySelector('.js-Number-Display')
        .innerText = PreviousElement + Number;
}

function DisplayClear() {
    document.querySelector('.js-Number-Display')
        .innerText = "";
    document.querySelector('.js-Answer-Display')
        .innerText = "";
}

function DisplayCalculation() {
    let PreviousCal = document.querySelector('.js-Number-Display').innerText;
    PreviousCal = eval(PreviousCal);
    document.querySelector('.js-Answer-Display')
        .innerText = PreviousCal;
    // console.log(PreviousCal);
}
