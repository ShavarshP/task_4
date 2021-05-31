const getArr = (arr, index = 0, newArr = [...arr, ...arr, ...arr]) => {
  if (index > 0 && index > arr.length) {
    console.log(index - arr.length);
    return getArr(arr, index - arr.length);
  }
  if (index < 0 && index < -arr.length) {
    return getArr(arr, index + arr.length);
  }
  index = arr.length + index;

  return newArr.slice(index, arr.length * 2 + index);
};
console.log(getArr(["a", "b", "s", "d", "f", "j", "h"], -10));
