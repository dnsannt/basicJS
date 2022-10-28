/*array.some() merupakan fungsi bawaan dari array yang cukup sering digunakan. 
Fungsi ini akan menghasilkan nilai boolean.*/

const array = [1, 2, 3, 4, 5];
const even = array.some(element => element % 2 === 0);

console.log(even);

/** 
output true
**/