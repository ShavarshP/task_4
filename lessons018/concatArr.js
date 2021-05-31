const getArr = (arr, newArr = [], index = 0) => {
  if (arr.length == index) {
    let test = newArr.filter((t) => typeof t != "number");
    if (test == 0) {
      return newArr;
    } else {
      return getArr(newArr);
    }
  }
  if (typeof arr[index] == "number") {
    newArr.push(arr[index]);
    return getArr(arr, newArr, index + 1);
  } else {
    newArr = [...newArr, ...arr[index]];
    return getArr(arr, newArr, index + 1);
  }
};
console.log(getArr([1, [[[3, 4]], 1, 2], 10]));
