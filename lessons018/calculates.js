const sum = (num, arrInt = num.toString().split("")) => {
  let min = arrInt.reduce((acc, item) => {
    if (acc > item) {
      acc = item;
      return acc;
    }
    return acc;
  }, arrInt[0]);
  let max = arrInt.reduce((acc, item) => {
    if (acc < item) {
      acc = item;
      return acc;
    }
    return acc;
  }, arrInt[0]);
  let summ = Number(min) + Number(max);
  console.log(summ);
  if (summ > 10) {
    return summ;
  }
  return sum(summ);
};
console.log(sum(9765434567));
