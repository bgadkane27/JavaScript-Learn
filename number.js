let number=new Number(10.431);
console.log(number);

console.log(`The 2 decimal points after the number ${number} is: ${number.toFixed(2)}`);
console.log(`The number ${number} is converted to base of 2 is: ${number.toString(2)}`); // It convert the number to the string in the base mentioned.
console.log(`The number ${number} is converted to base of 8 is: ${number.toString(8)}`);
console.log(`The number ${number} is converted to base of 16 is: ${number.toString(16)}`);

function precise(num) {
    return num.toPrecision(5);    
}

console.log(precise(-12.23489644));
console.log(precise(0.000005));