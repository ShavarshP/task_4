function myforEach(arr, callBack) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (undefined === callBack(element, i, arr)) {
      element = callBack(element, i, arr);
    }
  }
  return arr;
}

console.log(
  myforEach([4, 5, 7, 9, 1, 2], (t) => {
    return t + 1;
  })
);
