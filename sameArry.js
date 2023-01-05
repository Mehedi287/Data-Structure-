const arry1 = [2, 3, 5, 6, 7, 4];
const arry2 = [4, 9, 25, 49, 36, 16];
const same = (arry1, arry2) => {
  if (arry1.length !== arry2.length) {
    return false;
  }
  let valueOfarry1 = {};
  let valueOfarry2 = {};
  for (let value of arry1) {
    valueOfarry1[value] = valueOfarry1[value] + 1 || 1;
  }
  for (let value of arry2) {
    valueOfarry2[value] = valueOfarry2[value] + 1 || 1;
  }
  for (let key in valueOfarry1) {
    if (!(key ** 2) in valueOfarry2) {
      return false;
    }
  }

  // for (i = 0; i < arry1.length; i++) {
  //   let index = arry2.indexOf(arry1[i] ** 2);

  //   if (index === -1) {
  //     return false;
  //   }

  //   arry2.splice(index, 1);
  //   console.log(arry2);
  // }
  return true;
};
console.log(same(arry1, arry2));
