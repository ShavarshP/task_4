const sums = (arr, index = arr.length, in2 = 0) => {
  if (in2 === index) {
    return [0, ...arr];
  }
  arr = arr.reduce((acc, item, i) => {
    if (in2 < i && i < index) {
      acc = [...acc, arr[in2] + item];
    }
    return acc;
  }, arr);
  in2 += 1;
  return sums(arr, index, in2);
};
const arr = [1, 4, 4];
sums(arr);
