//make a function for find a specifice number from the arry and return its idex number
const linearSearch = (arr, number) => {
  const index = arr.indexOf(number);
  if (index === -1) {
    return console.log("the number is absen in this arry");
  } else {
    return console.log(`the index number of ${number} is ${index}`);
  }
};
console.log(
  linearSearch(
    [
      45, 52, 45, 2, 5, 42, 5, 4, 2, 54, 5, 15, 45, 12, 5, 12, 12, 1, 54, 54,
      26, 5, 1, 2,
    ],
    1
  )
);
