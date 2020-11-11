var amount;
const button = document.getElementById("button");
button.addEventListener("click",getUnitValue);
function getUnitValue(){
    var pay;
    let data = document.getElementById("unit").value;
    if(data<=25){
       pay = data*4.8;
    }
    else if(data<=50){
       pay = 25*4.8 + (data-25)*5.6;
    }
    else if(data<100){
       pay = 25*4.8 + 25*5.6 + (data-50)*7.2;
    }
    else {
        pay = 25*4.8 + 25*5.6 + 50*7.2 + (data-100)*9;
    }
    displayAmount(pay);
}
const displayAmount = function (amount){
    document.getElementById("result").innerHTML="Expected amount You have to pay: ₹"+amount;
}
