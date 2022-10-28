/*Metode lain yang bisa kita gunakan untuk memanipulasi data pada array adalah shift() dan unshift(). 
Metode shift() digunakan untuk mengeluarkan elemen pertama dari array, 
sementara unshift() digunakan untuk menambahkan elemen di awal array.*/

const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.shift();
myArray.unshift("Apple");

console.log(myArray);

/* output
[ 'Apple', 42.5, 22, true, 'Programming' ]
*/