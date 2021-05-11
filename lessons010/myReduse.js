function myReduce(arr, callBack, acc) {
  let index = 0;
  if (acc === undefined) {
    index = 1;
    acc = arr[0];
  }
  for (let i = index; i < arr.length; i++) {
    const element = arr[i];
    acc = callBack(acc, element, i, arr);
  }
  return acc;
}
console.log(
  myReduce(
    [4, 5, 7, 9, 1, 2],
    (acc, t) => {
      return acc + t;
    },
    2
  )
);
