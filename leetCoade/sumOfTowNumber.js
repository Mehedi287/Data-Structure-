const nums = [3, 2, 3];
const target = 6;

function sum(nums, target) {
  let newArry = [];
  let fristNumber = 0;
  let secondNumber = 0;
  nums.forEach((item, index) => {
    secondNumber = nums[index + 1];
    fristNumber = nums[index];
    console.log("result", fristNumber + secondNumber);
    if (fristNumber + secondNumber == target) {
      newArry.push(index, index + 1);
    }
  });

  return newArry;
}
console.log(sum(nums, target));
