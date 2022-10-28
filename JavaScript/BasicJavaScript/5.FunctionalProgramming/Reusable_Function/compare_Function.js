const array1 = [1, 30, 4, 1000];

const compareNumber = (a, b) => {
  return a - b;
};
const sorting = array1.sort(compareNumber);
console.log(sorting);

/**
output
[ 1, 4, 30, 1000 ]
**/



/**Pada compare function, fungsi akan membandingkan 2 nilai yang akan menghasilkan 3 result yaitu negatif (-), 0, dan positif (+).

Jika, negative maka `a` akan diletakkan sebelum `b`
Jika, positive maka `b` akan diletakkan sebelum `a`
Jika, 0 maka tidak ada perubahan posisi.*/