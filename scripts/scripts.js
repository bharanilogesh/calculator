'use strict';

let result = document.getElementById('result');
let output = document.getElementById('output');
let liText = document.querySelector('#text');
let closeBtn = document.getElementById('closeBtn');
let close = document.getElementById('close')


liText.addEventListener('click', calculator);

function calculator(e) {
    var text = e.target.innerHTML
    
    if (text === "CE") {
        result.innerHTML = "";
        output.innerHTML = "0";
    }
    else if(text === "C") {
        result.innerHTML = result.innerHTML.slice(0, -1)
    }
    else if (text === "=") {
        output.innerHTML = eval(result.innerHTML);
    }
    else {
        result.innerHTML += text;
    }
}

closeBtn.addEventListener('click', function(){
    // debugger
    close.style.display = "none";
})
