/*Async-await memungkinkan kita menuliskan proses asynchronous layaknya proses synchronous.*/

const getCoffee = () => {
  return new Promise((resolve, reject) => {
    const seeds = 100;
    setTimeout(() => {
      if (seeds >= 10) {
        resolve("Kopi didapatkan!");
      } else {
        reject("Biji kopi habis!");
      }
    }, 1000);
  });
};

function makeCoffee() {
  const coffee = getCoffee();
  console.log(coffee);
}

makeCoffee();
