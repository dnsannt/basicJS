let language = "French";
let greeting = "Selamat Pagi";

if (language === "English") {
  greeting = "Good Morning!";
} else if (language === "French") {
  greeting = "Bonjour!";
} else if (language === "Japanese") {
  greeting = "Ohayou Gozaimasu!";
}

console.log(greeting);

/* output
Bonjour!
*/

/*Pengecekan kondisi akan dilakukan dari statement if paling awal. 
Sehingga, ketika nilai language adalah “French”, 
maka pengecekan untuk language === “Japanese” tidak akan dilakukan. */
