const sumOfArry = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  let sum = 0;
  arr.map((i, index) => {
    sum = sum + arr[index];
  });
  return sum;
};
console.log(sumOfArry([1, 5, 5, 4, 5]));
// in recursion way
const sumation = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  let sum = 0;
  let rest = arr.slice(1);
  console.log(rest, "rest", arr[0]);

  return (sum = arr[0] + sumation(rest));
};
console.log(sumation([1, 2, 1, 2, 1]));
console.log("asdf", [1, 2] + 4);
