const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const removed = fruits.splice(2, 2, 'fig', 'grape'); 
console.log(`The original array after splice method operations: ${fruits}`); 

console.log(`The array after splice method operations: ${removed}`); 