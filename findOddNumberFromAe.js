const arr = [65, 656, 56, 23, 2, 4, 9, 53, 6, 85, 23, 2, 2, 3, 6, 3, 36, 65];
const oddNumbers = [];
const evenNumbers = [];

const i = (item, index, arr) => {
  if (item % 2 !== 0) {
    oddNumbers.push(item);
  } else {
    evenNumbers.push(item);
  }
};
arr.forEach(i);
const totalOddNumber = oddNumbers.length;
const totalEvenNumber = evenNumbers.length;
console.log(
  "all odd number of the arry ",
  " total number = ",
  totalOddNumber,
  oddNumbers
);
console.log(
  "all  even number of the arry ",
  " total number = ",
  totalEvenNumber,
  evenNumbers
);

// count all of odd number of this arry
