/**
 * TODO 1 (Tiger.js):
 * Ekspor nilai dari class Tiger
 *
 * TODO 2 (Wolf.js)
 * Ekspor nilai dari class Wolf
 *
 * TODO 3 (main.js)
 * Impor class Tiger dan Wolf
 *
 * TODO 4 (main.js)
 * Ekspor fungsi fight, myTiger, myWolf, dan result
 *
 */
// TODO 3
import { Wolf } from "./Wolf.js";
import { Tiger } from "./Tiger.js";

const fight = (tiger, wolf) => {
  if (tiger.strength > wolf.strength) {
    return tiger.growl();
  }
  if (wolf.strength > tiger.strength) {
    return wolf.howl();
  }
  return "Harimau dan serigala sama-sama kuat!";
};

const myTiger = new Tiger();
const myWolf = new Wolf();

// const result = fight(myTiger, myWolf);
const result2 = fight(myTiger, myTiger); /* custom by dennis */

console.log(Tiger);
console.log(Wolf);
// console.log(result);
console.log(result2); /* custom by dennis */

// TODO 4
// module.exports = { fight, myTiger, myWolf, result };
