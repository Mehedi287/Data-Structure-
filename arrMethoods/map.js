const arry = [
  { name: "asdf", prize: 452, count: 4 },
  { name: "asdf", prize: 432, count: 4 },
  { name: "asdf", prize: 45332, count: 4 },
  { name: "asdf", prize: 43, count: 4 },
];
const result = arry.map((item, index, arr) => [
  { totalPrize: item.prize * item.count },
]);
console.log(result);
