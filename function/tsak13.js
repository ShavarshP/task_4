const newArr = (arr) => {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  let mta = [];
  for (var i = 0; i < result.length - 2; i++) {
    for (var i1 = i + 1; i1 < result.length - 1; i1++) {
      for (var i2 = i1 + 1; i2 < result.length; i2++) {
        let matricArr = [];
        matricArr[0] = result[i];
        matricArr[1] = result[i1];
        matricArr[2] = result[i2];

        mta.push(matricArr);
      }
    }
  }

  console.log(mta);
};
newArr([5, 9, 23, 0, -2, -1, 5]);
