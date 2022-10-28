const coffeeStock = require('./state');
 
const makeCoffee = (type, miligrams) => {
    if (coffeeStock[type] >= miligrams) {
        console.log("Kopi berhasil dibuat!");
    } else {
        console.log("Biji kopi habis!");
    }
}
 
makeCoffee("robusta", 80);
 
/* output
Kopi berhasil dibuat!
*/

/*
Tips: Jika kita menggunakan lokasi yang relatif (dapat berubah/dipindahkan), 
pastikan awali dengan menuliskan ./. Contohnya, berkas index.js dan state.js 
berada pada folder yang sama, maka kita cukup menuliskannya dengan ./state.js.
*/