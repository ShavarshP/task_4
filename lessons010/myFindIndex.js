function myFind(arr, callBack) {
  let mapped = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (callBack(element, i, arr)) {
      return i;
    }
  }
  return null;
}

console.log(
  myFind([4, 5, 7, 9, 1, 2], (t, i) => {
    return t == 7;
  })
);
