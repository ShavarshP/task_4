//task10
const finthLarger = (str) => {
  let position = [];
  let p = 0;
  let newSrt = "";
  for (var k = 0; k < str.length; k++) {
    p = 0;
    for (let i = k + 1; i < str.length; i++) {
      for (let j = k; j != i; j--) {
        if (/[A-Z]/.test(str[j]) || /[a-z]/.test(str[j])) {
          newSrt += str[j];
        }
      }
      if ([...newSrt.split("")].length == newSrt.split("").length) {
        console.log(k, i);
      }
    }
  }
  console.log(position);
};
finthLarger("parting your soup is not a miracle, bruce.");
