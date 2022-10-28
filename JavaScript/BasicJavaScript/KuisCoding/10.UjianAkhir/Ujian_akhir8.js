let myString = "";

try {
  myString += "a";
  throw Error();
} catch (e) {
  myString += "b";
} finally {
  myString += "c";
  throw Error();
  myString += "d";
}

console.log(myString);

// Apakah output dari program di atas?
