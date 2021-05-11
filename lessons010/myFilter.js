function myEvery(arr, callBack) {

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (callBack(element, i, arr)) {
      return false;
    }
  }
  return true;
}


console.log(myEvery([4, null,7,9,1,2],(t)=> t));
