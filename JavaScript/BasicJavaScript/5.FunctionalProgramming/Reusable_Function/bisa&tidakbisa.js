const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
 
for(let i = 0; i < names.length; i++) {
  if(names[i] === 'Jeff') continue; // Bisa!
  
  console.log(`Hello, ${names[i]}!`);
}
 
// names.forEach((name) => {
//   if(name === 'Jeff') continue; // Tidak Bisa!
//   console.log(`Hello, ${name}`);
// });


 /*Namun, ketahuilah bahwa ketika menggunakan forEach, kita tidak bisa menggunakan 
 operator break atau continue pada proses perulangan (Anda bisa melakukannya pada 
 perulangan for). Hal ini juga berlaku ketika pada fungsi map dan filter. 
 */