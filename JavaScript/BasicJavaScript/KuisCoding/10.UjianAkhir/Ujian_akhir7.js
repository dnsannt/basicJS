function calculate(value) {
  return value < 2 ? value : calculate(value - 1) + calculate(value - 2);
}

console.log(calculate(3));
// Jika kode di atas dijalankan, maka manakah hasilnya?
