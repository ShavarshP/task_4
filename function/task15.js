function swap(obj) {
  const res = {};

  Object.keys(obj).forEach(function(value) {
    var key = obj[value];
    if (res[key]) {
      console.log(res[key]);
      res[key]=[...res[key], value]
    }else {

      res[key] = value;
    }
  });
  return res;
};
console.log(swap(myObj));
