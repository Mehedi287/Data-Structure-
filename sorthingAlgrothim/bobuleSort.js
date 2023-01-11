// what is bobule short
// boubl is a sorthing algrothim . its compare couple of element of this arry and find the largest number
// if the left number in bigger than right number , left number is swapping to right number . and ints contine

const arr = [4512, 54, 21512, 5, 12, 5];
const boubleSorth = [];
const result = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      //   console.log(fristNumber, secondNumber);
      if (arr[j] > arr[j + 1]) {
        console.log(arr[j], arr[j + 1]);
        let tem = arr[j];

        arr[j] = arr[j + 1];
        console.log("here", arr[j]);
        arr[j + 1] = tem;
        console.log("last", arr[j + 1]);
      }
    }
  }
  return arr;
};

console.log(result(arr));
