const findMaxLength = (str) => {
  let newStr = "";
  let max = 0;
  let index = 0;
  for (var i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i]) || /[a-z]/.test(str[i])) {
      newStr += str[i];
      index++;
    } else {
      if (index > max) {
        max = index;
      }
      index = 0;
      newStr += " ";
    }
  }
  str = newStr.split(" ");
  for (var i = 0; i < str.length; i++) {
    if (str[i].length === max) {
      console.log(str[i]);
    }
  }
};
