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

function DeletelastElement() {
    let Elem = document.querySelector('.js-Number-Display')
        .innerText;
    // console.log(Elem.length);
    Elem = Elem.substr(0,Elem.length-1);
    // console.log(Elem[Elem.length-1]);
    // console.log(Elem);
    document.querySelector('.js-Number-Display')
        .innerText = Elem;
}
