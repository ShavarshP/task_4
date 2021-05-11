function mySlicep(arr, start, end = arr.length) {
  let ped = [];
  for (let i = start; i < end; i++) {
    const element = arr[i];
    ped.push(element);
  }
  return ped;
}

console.log(mySlicep([4, 5, 7, 9, 1, 2, 8, 23, 8], 1, 6));
