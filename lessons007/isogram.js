//task8
const isogram = (string) => {
  let result = [];

  for (let str of string.split("")) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return string.length == result.length ? true : false;
};
