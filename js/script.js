var resultSum = document.getElementById("result-sum");
var sumButton = document.getElementById("sum-button");
var discount = document.getElementById("discount");
var discountCode = "sconto20";


sumButton.addEventListener("click", function () {
    var checkNum = document.getElementsByClassName("somma-check");
    var checkSum = 0;
    
    for (var x = 0; x < checkNum.length; x++)

        if (checkNum[x].checked) {
            checkSum += parseInt(checkNum[x].value);
            resultSum.innerHTML = checkSum + "€";
        }

        if(discount.value.length > 0 && discount.value === discountCode) {
            alert("Hai appena inserito un codice sconto! Premi OK per riscuoterlo!")
            resultSum.innerHTML = checkSum - (checkSum * 20 / 100) + "€";
        } else if (discount.value.length > 0){
            alert("Codice sconto errato, si prega di inserirne uno corretto!")
        }

})