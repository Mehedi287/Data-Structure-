// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
let nums1 = [-1, -2];
let nums2 = [3];
function sorted(nums1, nums2) {
  let merged = nums1.concat(nums2);
  let n = merged.length / 2;
  let middle = 0;
  let sort = merged.sort(function (a, b) {
    return a - b;
  });
  //   console.log(sort, n, "o");
  if (sort.length % 2 !== 0) {
    let middleIndex = Math.floor(n);
    middle = sort[middleIndex];
    // console.log(sort.indexOf(sort[middleIndex]), "index");
    // console.log(middle);
  } else {
    let par = n - 1;
    middle = (sort[n] + sort[par]) / 2;

    console.log(middle, par, n, "pre");
  }
  return parseFloat(middle);
  //   console.log(parseFloat(middle));
}
console.log(sorted(nums1, nums2));
