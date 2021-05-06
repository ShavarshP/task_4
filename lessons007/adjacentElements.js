//task11
const adjacentElements = (arr) => {
  let newArr = []
  let max=arr[0]*arr[1]
  arr.forEach((item, i, arr2) => {
    if (i < arr2.length - 1) {
      newArr.push(item*arr2[i+1])
      if (item*arr2[i+1] > max) max = item*arr2[i+1];
    }
  });
  return max
};
