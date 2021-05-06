//task9
const evenQuadratic = (arr) => {
  let newArr = arr.map((t) => t ** (1 / 2));
  return newArr.filter((t) => t % 2 == 0);
};
