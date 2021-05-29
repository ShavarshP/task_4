const digits = (int) => {
  if (int == 0) {
    return true;
  }
  let newNum = int % 10;
  if (newNum % 2 == 0) {
    return false;
  }
  return digits((int - newNum) / 10);
};
const num = 2171357;
console.log(digits(num));
