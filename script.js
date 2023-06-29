function DisplayNumber(Number) {
    let PreviousElement = document.querySelector('.js-Number-Display').innerText;

    if(PreviousElement.length <13)
    {
        document.querySelector('.js-Number-Display').style.fontSize = "2rem";
    }
    if(PreviousElement.length >= 13 && PreviousElement.length <17)
    {
        document.querySelector('.js-Number-Display').style.fontSize = "1.7rem";
   }
    if(PreviousElement.length >= 17 && PreviousElement.length<23)
    { 
        document.querySelector('.js-Number-Display').style.fontSize = "1.3rem";
    }
    if(PreviousElement.length >= 23)
    { 
        document.querySelector('.js-Number-Display').style.fontSize = "1rem";
    }
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

    if(PreviousCal.length < 8){
        document.querySelector('.js-Answer-Display').style.fontSize = "3rem";
    }

    if(PreviousCal.length >= 8 && PreviousCal.length < 13){
        document.querySelector('.js-Answer-Display').style.fontSize = "2rem";
    }

    if(PreviousElement.length >= 13 && PreviousElement.length <17)
    {
        document.querySelector('.js-Number-Display').style.fontSize = "1.7rem";
   }
    if(PreviousElement.length >= 17 && PreviousElement.length<23)
    { 
        document.querySelector('.js-Number-Display').style.fontSize = "1.3rem";
    }
    if(PreviousElement.length >= 23)
    { 
        document.querySelector('.js-Number-Display').style.fontSize = "1rem";
    }
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

