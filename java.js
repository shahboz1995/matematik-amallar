var outputtext = document.getElementById("outputtext");
var firstNumber = document.getElementById("firstNumber");
var secondNumber = document.getElementById("secondNumber");
var multiply = document.getElementById("multiply");
var divideply = document.getElementById("divideply");
var multiplyBtn = document.getElementById("multiplyBtn");
var divideBtn = document.getElementById("divideBtn");
var multiplyn = document.getElementById("multiplyn");

multiply.addEventListener("click", function (){    
    var result = +firstNumber.value + +secondNumber.value;
    outputtext.innerHTML = result;
});
divideply.addEventListener("click", function (){
    var result = firstNumber.value - secondNumber.value;
    outputtext.innerHTML = result;
});

multiplyBtn.addEventListener("click", function () {
    var result = firstNumber.value * secondNumber.value;
    outputtext.innerHTML = result;
});

divideBtn.addEventListener("click", function () {
    var result = firstNumber.value / secondNumber.value;
    outputtext.innerHTML = result;
});
multiplyn.addEventListener("click", function (){
    var result = firstNumber.value % secondNumber.value;
    outputtext.innerHTML = result;
});


