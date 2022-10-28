/*Dalam operator komparasi di JavaScript, 
hal yang menjadi sedikit “tricky” adalah membedakan antara “sama” (==) dan “identik” (===).*/

const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

/* output
true
false
*/