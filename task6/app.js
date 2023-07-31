

function splitter(){
    var amount = parseFloat(document.getElementById("amount").value);
    var amount = parseFloat(document.getElementById("people").value);
    var split = amount/people;

    if(!isNaN(inputNumber)){
        document.getElementById("result").value = split;
    }else{
        alert("please enter valid number");
    }
}