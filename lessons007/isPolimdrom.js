//task10
const isPolimdrom = (number) => {
  revX = number.toFixed(0).split("").reverse().join("") - 0;
  return number == revX ? true : false;
};
