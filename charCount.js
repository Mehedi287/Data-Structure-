const str = "hi my name is mehedi hasan HH";
const convertedString = str.toLocaleLowerCase();
console.log(convertedString);
// we need count every charter in this string
const charCount = () => {
  let charList = {};
  for (i = 0; i < convertedString.length; i++) {
    let char = convertedString[i];

    if (charList[char]) {
      charList[char] = charList[char] + 1;
    } else {
      charList[char] = 1;
    }
  }
  return console.log(charList);
};

charCount();
