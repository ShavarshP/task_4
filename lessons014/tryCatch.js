const reverseString = (str) => {
  if (typeof str !== "string") {
    throw str;
  } else {
    return str.split("").reverse().join("");
  }
};
console.log(reverseString("sadfstt"));

const isPositive = (a) => {
  if (a <= 0) {
    throw "Error";
  } else {
    return "yes";
  }
};

function reverseString(s) {
  try {
    if (typeof s !== "string") {
      console.log("s.split is not a function");
    } else {
      throw Error;
    }
  } catch (e) {
    s.split("").reverse().join("");
    console.log(s);
  }
}
