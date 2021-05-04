const anagrams = (string, arr) => {
  let newString = [];
  let index = 0
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length==string.length) {
      console.log(arr[i].split("").sort(),string.split("").sort());
      for (var j = 0; j < arr.length; j++) {
        if (arr[i].split("").sort()[j] == string.split("").sort()[j]) {
          index++
          if ((index == arr[i].length - 1) ) {
            newString.push(arr[i]);
          }
        } else {
          console.log("s");
          index=0
          break;
        }
      }
    }
  }
  console.log(newString);
};
