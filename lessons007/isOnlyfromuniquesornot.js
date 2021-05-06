//task7
const isOnlyfromuniquesornot = (arr) => {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return arr.length == result.length ? true : false;
};
