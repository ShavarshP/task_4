const fixTxt = (txt, str) => {
  let newSrt = "";
  let index = 0;
  let string = "";
  for (var i = 0; i < txt.length; i++) {
    if (txt[i] === " " || i == txt.length - 1) {
      for (var j = 0; j < newSrt.length; j++) {
        if (str.length !== newSrt.length) {
          break;
        }
        if (str[j] == newSrt[j]) {
          console.log(j);
          index++;
        }
      }
      if (index == str.length) {
        newSrt = "";
      } else {
        string += newSrt + " ";
        newSrt = "";
      }
      index = 0;
    } else {
      newSrt += txt[i];
    }
    index = 0;
  }
  console.log(string);
};
