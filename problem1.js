const arry = [1, 2, 3, -4, -6, -9, 3, 4, 4, 5, 45, 90, "error"];
//find the largest namber and lowest number of the arry and show thrie diffreace , and skip the error and any string if have
const findHeightAndLowestNumber = () => {
  let height = arry[0];
  let lowest = arry[0];
  for (i = 0; i < arry.length; i++) {
    if (typeof arry[i] !== "number") continue;
    console.log(typeof arry[i]);
    if (height < arry[i]) {
      height = arry[i];
    }
    if (lowest > arry[i]) {
      lowest = arry[i];
    }
  }
  return height - lowest;
};
findHeightAndLowestNumber();
console.log("himan ");
console.log(arry);
