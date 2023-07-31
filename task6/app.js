function splitBill() {
    var amount = parseFloat(document.getElementById("amount").value);
    var people = parseInt(document.getElementById("people").value);
    var warningElement1 = document.getElementById("warning1");
    var warningElement2 = document.getElementById("warning2");

    // Check if the amount is a valid positive number
    if (isNaN(amount) || amount <= 0) {
        warningElement1.textContent = "Please enter a valid amount.";
        return;
    } else {
        warningElement1.textContent = "";
    }

    // Check if the number of people is greater than one

    if (isNaN(people) || people <= 1) {
        warningElement2.textContent = "No need to split the bill.";
        return;
    } else {
        warningElement2.textContent = "";
    }

    // Calculate the split amount

    var splitAmount = amount / people;
    document.getElementById("result").value = `${splitAmount.toFixed(2)}`;

}