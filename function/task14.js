const newArr = (arr) => {
  let mta = [[]];
  let max = -Infinity;
  for (var i = 0; i < arr.length; i++) {
    let newMax = 0;
    for (var i1 = 0; i1 < arr[i].length; i1++) {
      if (arr[i][i1] < 0) {
        newMax += arr[i][i1];
      }
    }
    console.log(newMax);
    if (newMax > max && newMax !== 0) {
      max = newMax;
    }
  }
  if (max == -Infinity) {
    console.log("Invalid Argument");
    return "Invalid Argument";
  }

  return max*-1;
};
newArr([5, 9, 23, 0, -2, -1, 5]);
