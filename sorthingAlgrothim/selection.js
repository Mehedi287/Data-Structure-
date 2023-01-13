const arr = [4, 54, 2154, 45];
const swap = (x, y) => {
  let tem = x;
  x = y;
  y = tem;
};
const selection = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);

    for (let j = 0; j < arr.length; j++) {
      let lowest = arr[i];
      if (arr[i] > arr[j]) {
        lowest = arr[j];
        swap(arr[i], arr[j]);
        // console.log(" smallr", arr[j]);
      }
      //   console.log("from j", arr[i], arr[j]);
    }
  }
  return arr;
};
console.log(selection(arr));
