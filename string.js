let lastName="wagh";
console.log(`The last name is : ${lastName}`);

let firstNmae=new String("ramesh");
console.log(`The first name is : ${firstNmae}`);

let fNmae=new String("   Santosh - Wagh  .");
// console.log(firstNmae.charCodeAt(3));   // It will return the ASCII value of the character at mentioned index
console.log(`The character at mentioned index is : ${fNmae.charAt(3)}`);
console.log(`The character at the end of the string is match or not: ${firstNmae.endsWith('wagh', 11)}`);
console.log(fNmae.repeat(2));   //Repeat the string for mentioned no of times 
console.log(fNmae);

console.log(fNmae.trim());      //Remove the whitespaces from start and End
console.log(fNmae.trimStart()); //Remove the whitespaces from start
console.log(fNmae.trimEnd());   //Remove the whitespaces from End

console.log(fNmae.toLowerCase());   //Convert the given string into lowercase
console.log(fNmae.toLocaleLowerCase()); 
console.log(fNmae.toUpperCase());   //Convert the given string into lowercase
console.log(fNmae.toLocaleUpperCase()); 

console.log(`The length of string / no. of characters in a string is: ${fNmae.length}`);  //Length of the string or no of characters

console.log(fNmae.includes('W'));   //The string includes a character or not

//console.log(fNmae.replace(/a/g, 'g'));   // Replace the string with mentioned string
//console.log(fNmae.replace(/./g, 'g'));   // Replace the all characters with mentioned string


let sNmae=new String("Santosh-Wagh");
//console.log(sNmae.split('-'));  

console.log(sNmae.slice(4));               // Extracts a section of this string and returns it as a new string
console.log(sNmae.slice(4, 10));           // Extracts a section of this string and returns it as a new string. In this excludes string from 10 character
console.log(sNmae.slice(-4, 0));


//console.log(fNmae.substring(4,10));