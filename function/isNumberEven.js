const isNumberEven = (int1, int2) => {
  let pam = true;
  let newArr = "";
  for (var i = int1; i < int2; i++) {
    pam = true;
    for (var j = 0; j < String(i).length; j++) {
      if (Number(String(i)[j]) % 2 !== 0) {
        pam = false;
      }
    }
    if (pam) {
      newArr += i + ", ";
    }
  }
  return newArr
};
