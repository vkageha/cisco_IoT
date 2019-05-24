//function definition
function sayHello(){
    console.log("Hello Paul");

}
sayHello();
sayHello();
sayHello();
sayHello();


//function expression
const sayHi = function(){    //assigning a function to a vrble..ie the variable store the function
    console.log("Hi Val");
}

sayHi();

//Parameters
function loopArrays(array){
    for(let item of array){ //equivalent of for(let i=1;i<array.length; i=++)
        console.log(item)
    }
}
loopArrays([1,2,3]);
loopArrays(["CATE", "CYNTHIA", "SUSAN"]);

//subtraction
function subtract(number1, number2){
    return number1 - number2;
}
let subnum = subtract(12,23);
console.log(subnum);
console.log(subtract(12,23));

//write a function that adds arbitrary/random numbers
//TO DO!
//hint: REST PARAMETERS