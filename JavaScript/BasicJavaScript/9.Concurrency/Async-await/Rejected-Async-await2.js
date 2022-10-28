/*Async-await memungkinkan kita menuliskan proses asynchronous layaknya proses synchronous.*/

const getCoffee = () => {
  return new Promise((resolve, reject) => {
    const seeds = 100;
    setTimeout(() => {
      if (seeds >= 1012) {
        resolve("Kopi didapatkan!");
      } else {
        reject("Biji kopi habis!");
      }
    }, 1000);
  });
};

async function makeCoffee() {
  try {
    const coffee = await getCoffee();
    console.log(coffee);
  } catch (rejectedReason) {
    console.log(rejectedReason);
  }
}

makeCoffee();

/* output
Biji kopi habis!
*/
