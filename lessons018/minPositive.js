const minPositive = (arr, min = -1, index = 0) => {
  if (arr.length == index) {
    return min;
  }
  if (arr[index] >= 0) {
    if (min == -1) {
      min = arr[index];
    } else if (min > arr[index]) {
      min = arr[index];
    }
  }
  return minPositive(arr, min, index + 1);
};
const array = [56, -9, 87, -23, 0, -105, 55, 1];
console.log(minPositive(array));
