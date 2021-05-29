const sortIndex = (arr, index = 1, newArr = []) => {
  if (arr.length == index) {
    return newArr;
  }
  return sortIndex(arr, index + 1, [...newArr, arr[index]]);
};
const array = [-9, -4, -4, 3, 12, 14, 15];
console.log(sortIndex(array));
