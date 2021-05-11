function myForEach(arr, callBack) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    callBack(arr[i], i, arr);
  }
}

console.log(
  myForEach([4, 5, 7, 9, 1, 2], (item, t) => {
    item += t;
  })
);
