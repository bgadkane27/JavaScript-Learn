let lastName = "wagh";
console.log(`The last name is : ${lastName}`);

let firstNmae = new String("ramesh");
console.log(`The first name is : ${firstNmae}`);

let fNmae = new String("   Santosh - Wagh  .");
// console.log(firstNmae.charCodeAt(3));   // It will return the ASCII value of the character at mentioned index
console.log(`The character at mentioned index is : ${fNmae.charAt(3)}`);
console.log(
  `The character at the end of the string is match or not: ${firstNmae.endsWith(
    "wagh",
    11
  )}`
);
console.log(fNmae.repeat(2)); //Repeat the string for mentioned no of times
console.log(fNmae);

console.log(fNmae.trim()); //Remove the whitespaces from start and End
console.log(fNmae.trimStart()); //Remove the whitespaces from start
console.log(fNmae.trimEnd()); //Remove the whitespaces from End

console.log(fNmae.toLowerCase()); //Convert the given string into lowercase
console.log(fNmae.toLocaleLowerCase());
console.log(fNmae.toUpperCase()); //Convert the given string into lowercase
console.log(fNmae.toLocaleUpperCase());

console.log(
  `The length of string / no. of characters in a string is: ${fNmae.length}`
); //Length of the string or no of characters

console.log(fNmae.includes("W")); //The string includes a character or not

console.log(fNmae.replace(/a/g, 'g'));   // Replace the string with mentioned string
console.log(fNmae.replace(/./g, 'g'));   // Replace the all characters with mentioned string
console.log(fNmae.replace('Wagh', 'Rane'));

let sNmae = new String("Santosh-Wagh");
console.log(sNmae.split("-"));

console.log(sNmae.slice(4)); // Extracts a section of this string and returns it as a new string
console.log(sNmae.slice(4, 10)); // Extracts a section of this string and returns it as a new string. In this excludes string from 10 character
console.log(sNmae.length);
console.log(sNmae.slice(-4, -1)); // If the indexes are negative then (string.length+startIndex) and (string.length+endIndex) after that extraction of substring happens

console.log(`The substring of ${sNmae} from 4 to 10 is : ${sNmae.substring(4,10)}`);

console.log(sNmae.startsWith('S')); //
console.log(sNmae.endsWith('h'));   //

console.log(sNmae.match(/ant/)); //It matches with the strig

console.log(`Pad the * at the start of ${sNmae} till length of string 15 : ${sNmae.padStart(15,"*")}`);    // The originl string pads the mentioned character at the start until it reaches to the mentioned length of a string
console.log(`Pad the * at the end of ${sNmae} till length of string 15 : ${sNmae.padEnd(15,"*")}`);      // The originl string pads the mentioned character at the end until it reaches to the mentioned length of a string