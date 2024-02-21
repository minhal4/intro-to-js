var money = 20;
var danishPrice=45;
var butterBon = 15;
var toastBiscuit = 10;
if(money > danishPrice) {
    console.log('tumi ami ar denish hae denish');
}
else if(money > toastBiscuit) {
    console.log('tumi ami ar toast biscuit hae toast biscuit');
}

else if(money <= butterBon) {
    console.log('tumi ami ar butter bon hae butter bon');
}

else {
    console.log('tumi ami ar cha bindash');
}