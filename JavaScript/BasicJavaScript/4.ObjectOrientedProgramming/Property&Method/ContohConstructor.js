// // cara 1, jika kita menggunakan statement class
// class Mail {
//     constructor(params1, params2, ....) {
//       this.yourPropertyName = params1;
//       // do something here
//     };
//   }
   
//   // cara 2, jika kita menggunakan statement function
//   function Mail(params1, params2, ....) {
//       this.yourPropertyName = params1;
//     // do something here
//   }

// Contoh penerapannya sebagai berikut:
// cara 1
class Mail {
    constructor(author) {
        this.from = author;
        console.log('is instantiated', author);
    };
}
 
// cara 2
function Mail(author) {
    this.from = author;
    console.log('is instantiated', author);
}
