console.log(`The value of PI is: ${Math.PI}`);

let number=new Number(16);
console.log(`The square root of ${number} is: ${Math.sqrt(number)}`);

let numberCube=new Number(8);
console.log(`The cube root of ${numberCube} is: ${Math.cbrt(numberCube)}`);

let numberNear=new Number(1.8);
console.log(`Round off of a number ${numberNear} is: ${Math.round(numberNear)}`);
console.log(Math.ceil(numberNear));  //Provides the Greater number
console.log(Math.floor(numberNear)); //Provides the Smallest number

let numArray=[1,5,8,11];

console.log(`The max number is: ${Math.max(1,2,5,8,0,11.5464454)}`); //Max Number
console.log(`The min number is: ${Math.min(1,2,5,8,0,11,-5)}`);         //Min number

console.log(`The ramdom number between 0 and 1 is: ${Math.random()}`); //Random number from 0 to 1

console.log(`The power of 1st number to 2nd number is: ${Math.pow(2, 3)}`); // base^exponent

console.log(`Remove the fractional digit from ${numberNear} then num is: ${Math.trunc(numberNear)}`);