let date=new Date();
console.log(date);
console.log(`The default date object representation is: ${date}`);

console.log(date.toDateString());
console.log(date.toLocaleDateString());

console.log(date.getDay());
console.log(date.getDate());
console.log(date.getMonth());  //Get Local-time month value, a zero-base index(0 for January ans so on)
console.log(date.getFullYear());
