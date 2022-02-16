function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length  == 4){
        return pin;
    }
    else{
        //console.log 3 degit
        return getPin();
    }
}
function genaratePin(){
    const pin = getPin();
    // box display way
    document.getElementById('display-pin').value = pin;
}


// calculate
document.getElementById("key-pad").addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{                                                  /// jodi number na hoy tahole input jabe
        const previusNumber = calcInput.value;
        const newCalc = previusNumber + number;
        calcInput.value = newCalc;
    }
});



// submit verify 
function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const sucessMessage = document.getElementById('notify-sucsess');
    const failError = document.getElementById('notify-faild');
    if(pin == typedNumbers){  
        sucessMessage.style.display = 'block'
        failError.style.display = 'none'
    }
    else{
        failError.style.display = 'block'
        sucessMessage.style.display = 'none'
    }
}