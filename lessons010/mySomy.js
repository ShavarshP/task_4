function mySomy(arr, callBack) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (callBack(element, i, arr)) {
      return true;
    }
  }
  return false;
}

console.log(mySomy([4, null, 7, 9, 1, 2], (t) => t));
