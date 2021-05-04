//17
const isCompareShallow = (obj1, obj2) => {
  for (var prop in b) {
    if (a[prop] !== b[prop]) {
      return false;
    }
  }
  return true;
};
let a = { a: "2" };
let b = { a: "2" };
console.log(isCompareShallow(a, b));
