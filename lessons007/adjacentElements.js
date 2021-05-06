//task11

const adjacentElements = (arr) => {
  let newArr = []
  arr.forEach((item, i, arr2) => {
    if (i < arr2.length - 1) {
      newArr.push(item*arr2[i+1])
    }
  });
  let max=newArr[0]
  for (i = 1; i < newArr.length; ++i) {
      if (newArr[i] > max) max = newArr[i];
    }
  return max
};
