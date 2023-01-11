const arr = [4, 56, 5, 5];
let x = 0;
let max = 0;
const result = arr.reduce((accum, item, index, arr) => {
  if (accum > item) {
    max = accum;
  } else {
    max = item;
  }

  return (x = accum + item), max;
});
// const callback = (a, current, index, arr) => {
//   return (x = a + current);
// };
// const result = arr.reduce(callback, 0);
console.log(max, x);
