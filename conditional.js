let balance = 500;
let withdraw  = 300;

if (balance < withdraw)  {
    console.log ("Sorry Miss, you can't withdraw. Try again later");
}   else if  (balance > withdraw){
    console.log ("Success");
    balance -= withdraw; //balnce = balance-withdraw
    console.log  (balance);
}   else{
    console.log  ("Need a float balance");
}