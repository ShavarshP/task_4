const sortIndex = (arr, index = 1) => {
  if (arr.length <= index || arr.length==1) {
    return -1;
  }
  if (arr[index] < arr[index - 1]) {
    return index;
  }
  return sortIndex(arr, index + 1);
};
const array = [-9, -4, -4, 3, 12, 14, 15];
console.log(sortIndex(array));
