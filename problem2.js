const marks = [40, 84, 55, 8, 4, 54, 54, 29];
// if mark is 48 its up to 50 , and mark under to 40 fail
const result = (arr) => {
  let newArr = [];
  arr.forEach((item) => {
    if (item < 38) {
      newArr.push("its fail");
    } else if (item > 38) {
      let n = Math.round(item / 5);
      let tem = n * 5;
      let diff = n - item;

      if (diff < 3) {
        newArr.push(tem);
      }
    }
    console.log(item);
  });
  return newArr;
};
console.log(result(marks));
