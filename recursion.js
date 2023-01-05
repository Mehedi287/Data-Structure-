// ---------------------countdawon number of n in recuision way-----------------------------
const n = 10;
const countdawon = (m) => {
  console.log(m);
  m--;
  if (m > 0) {
    countdawon(m);
  }
};
console.log(countdawon(10));

//--------------------- calculate sume of n in recursion way some  -------------
const sumOfNumber = (n) => {
  //   let sum = (n * (n + 1)) / 2;
  let sum = 0;

  if (n < 0) {
    return 0;
  }
  return n + sumOfNumber(n - 1);
  //   for (let i = n; i > 0; i--) {
  //     sum = sum + i;
  //   }
  console.log(sum);
};
console.log(sumOfNumber(10));

//--------------------- calculate sume of n using for loop some  -------------
