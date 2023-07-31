

function calculator(){
    var inputNumber = parseFloat(document.getElementById("number").value);
    var cube = inputNumber*inputNumber*inputNumber;

    if(!isNaN(inputNumber)){
        document.getElementById("result").value = cube;
    }else{
        alert("please enter valid number");
    }
}