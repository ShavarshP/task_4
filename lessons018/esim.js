const esim = (str, index = 0, newArr = []) => {
  if (str.length / 2 > index + 1) {
    newArr = [...newArr, str[index], "("];
    return esim(str, index + 1, newArr);
  } else if (str.length - 1 > index) {
    newArr = [...newArr, str[index], ")"];
    return esim(str, index + 1, newArr);
  }
  newArr = [...newArr, str[index]];
  return newArr.reduce((acc, char) => (acc += char));
};
let s = "LItBeoFLcSGBOFQxMHoIuDDWcqcVgkcRoAeocXO";
console.log(esim(s));
