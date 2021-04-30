//task 1
const isNumberOdd = (number) => {
  if (number === 0) {
    console.log(":)");
  } else {
    if (number % 2 === 0) {
      console.log("odd");
    } else {
      console.log("even");
    }
  }
};

//task 2
const findAngles = (angl1, angl2) => {
  return 180 - (angl1 + angl2);
};

//task 3
const esim = (number) => {
  if (number % 10 !== 0 && number > 10) {
    let tn = (number - (number % 10)) / 10;
    tn += "";
    console.log((number % 10) + tn);
  } else {
    console.log(number);
  }
};

//task 4
const isNumberisMultiple = (number) => {
  if (number % 5 !== 0 && number % 3 !== 0 && number % 7 !== 0) {
    console.log("number" + " is not a multiple of 3, 5 or 7");
  } else if (number % 5 == 0 && number % 3 == 0 && number % 7 == 0) {
    console.log("number" + " is a multiple of 3, 5 and 7");
  } else if (number % 5 !== 0 && number % 3 == 0 && number % 7 !== 0) {
    console.log("number" + " is a multiple of 3");
  } else if (number % 5 !== 0 && number % 3 == 0 && number % 7 == 0) {
    console.log("number" + " is a multiple of 3 and 7");
  }
};

// task5

const sort = (arr) => {
  console.log(arr.sort((a, b) => a - b));
};

//task 6
const findSign = (number1, number2, number3) => {
  let sum = number1 * number2 * number3;
  if (sum > 0) {
    console.log("+");
  } else if (sum < 0) {
    console.log("-");
  } else {
    console.log("“unsigned”");
  }
};
//task 7
const checkWhethertheDigit = (n1, n2) => {
  if (n2 < 10) {
    if (n1 == n2) {
      console.log("yes");
    } else {
      console.log("no");
    }
  } else {
    if (n2 % n1 == 0) {
      console.log("yes");
    } else {
      n2 = (n2 - (n2 % 10)) / 10;
      checkWhethertheDigit(n1, n2);
    }
  }
};
//task 8

const findLength = (number, length) => {
  if (number > 10) {
    number = (number - (number % 10)) / 10;
    length *= 10;
    console.log(number, length);
    return findLength(number, length);
  } else {
    return length;
  }
};

const esim2 = (number) => {
  if (number > 10) {
    let length = findLength(number, 1);

    let tn = ((number % length) - ((number % length) % 10)) / 10;
    tn += "";
    console.log((number % 10) + tn + (number - (number % length)) / length);
  } else {
    console.log(number);
  }
};

//task 9

const isNumberPrime = (number) => {
  for (var i = 2; i <= number; i++) {
    number[i];
    if (number % i === 0) {
      console.log("yes");
      break;
    }
    if (number == i) {
      console.log("NO");
      break;
    }
  }
};

//task 10
const fibonacci = (number) => {
  let arr = [0, 1];
  if (number === 0) {
    return console.log(0);
  }
  for (var i = 1; i < number; i++) {
    arr.push(arr[i] + arr[i - 1]);
  }
  return console.log(arr[arr.length - 1]);
};
//task 11
const quotient = (number) => {
  let sum1 = 0,
    sum2 = 1;
  for (var i = 0; i < 200; i++) {
    if (number < 10) {
      sum2 *= number;
      sum1 += number;
      break;
    } else {
      sum2 *= number % 10;
      sum1 += number % 10;
      number = (number - (number % 10)) / 10;
    }
  }
  console.log(sum1, sum2);
  if (!sum1 || !sum2) {
    return console.log("Cannot calculate");
  }
  if (sum2 % sum1 === 0) {
    return console.log("Quotient is " + sum2 / sum1);
  } else if (sum2 % sum1 !== 0) {
    return console.log("Remainderis " + (sum2 % sum1));
  }
};

//task 12
const string = (string, arr) => {
  let index = 0;
  let newString;
  for (var i = 0; i < string.length; i++) {
    if (string[i] == "_") {
      if (index < arr.length) {
        newString += arr[index];
        index++;
      }
    } else {
      newString += string[i];
    }
  }
  return console.log(newString);
};

//task13
const filteArray = (arr) => {
  let newArr = [];
  let newArr2 = [];
  for (var i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      if (arr[i] % 2 === 0) {
        newArr2.push(arr[i]);
      } else {
        newArr.push(arr[i]);
      }
    }
  }
  for (var i = 0; i < newArr2.length; i++) {
    newArr.push(newArr2[i]);
  }
  return console.log(newArr);
};
//task14
const stringsNumbers = (arr) => {
  let newArr = [0, 0];
  for (var i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      newArr[0] += 1;
    } else {
      newArr[1] += 1;
    }
  }
  return console.log("Numbers: " + newArr[0] + ", Strings: " + newArr[1]);
};
//task15
const stringsLength = (arr) => {
  let min = arr[0].length,
    max = arr[0].length;

  for (var i = 0; i < arr.length; i++) {
    if (min > arr[i].length) {
      min = arr[i].length;
    }
    if (max < arr[i].length) {
      max = arr[i].length;
    }
  }
  return console.log(min + max);
};
//task16
const equalThatNumber = (arr, namber) => {
  let min = Math.abs(arr[0] - namber);
  let index = 0;
  for (var i = 0; i < arr.length; i++) {
    if (min > Math.abs(arr[i] - namber)) {
      min = Math.abs(arr[i] - namber);
      index = i;
    }
  }
  return console.log(index);
};
//task 17
const sentenceAsString = (sentence) => {
  let newArr = [];
  let newString = "";
  for (var i = 0; i < sentence.length; i++) {
    if (sentence[i] == " ") {
      if (newString !== "") {
        newArr.push(newString);
      }
      newString = "";
    } else {
      newString += sentence[i];
    }
  }
  newArr.push(newString);
  return console.log(newArr);
};
//task 18
const undifindAndNumber = (arr) => {
  arr = arr.sort((a, b) => a - b);
  let index = arr[0];
  let newArr = [];
  for (var i = arr[0]; i < arr[arr.length]; i++) {
    newArr.push(undefined);
  }
  for (var i = 0; i < arr.length; i++) {
    newArr[arr[i] - index] = arr[i];
  }
  return console.log(newArr);
};
//task19
const sumOfArrey = (arr) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].reduce(reducer);
  }
  return console.log(arr);
};
//task20
const arr15 = () => {
  let k = 1;
  let string = "";
  let newArr = [];
  for (var i = 0; i < 5; i++) {
    for (var j = i; j < 5; j++) {
      newArr.push("");
      newArr[j] += k + " ";
      k++;
    }
    string = newArr[i].toString();
    console.log(string);
  }
};

//Optional Tasks.1
const findDifference = (number) => {
  let min = 9,
    max = 0;

  for (var i = 0; i < 30; i++) {
    if (number < 10) {
      if (max < number) {
        max = number;
      }
      if (min > number) {
        min = number;
      }
      break;
    } else {
      if (max < number % 10) {
        max = number % 10;
      }
      if (min > number % 10) {
        min = number % 10;
      }
      number = (number - (number % 10)) / 10;
    }
  }
  return console.log(max - min);
};
//Optional Tasks.2

const toBase10 = (number) => {
  let sum = 0;
  for (var i = 0; i < number.length; i++) {
    if (number[i] == 1) {
      sum += 2 ** i;
    }
  }
  number = sum.sort((a, b) => a - b);
  return console.log(number);
};

//Optional Tasks.3

const sumOfArrey2 = (array, array2) => {
  for (var i = 0; i < array2.length; i++) {
    array.push(array2[i]);
  }
  console.log(array);
};

//Optional Tasks.4
const factorial = (index) => {
  let index2 = 1;
  for (var i = 1; i <= index; i++) {
    index2 *= i;
  }
  return console.log(index2);
};

//Optional Tasks.5

const isValid = (arr) => {
  let newarr = [];
  for (var i = 0; i < arr.length; i++) {
    if (/[a-z]/.test(arr[i])) {
      newarr[0] = true;
    }
    if (/[A-Z]/.test(arr[i])) {
      newarr[1] = true;
    }
    if (/[$#@]/.test(arr[i])) {
      newarr[2] = true;
    }
    if (/[0-9]/.test(arr[i])) {
      newarr[3] = true;
    }
    if (arr.length >= 6) {
      newarr[4] = true;
    }
    if (arr.length <= 16) {
      newarr[5] = true;
    }
  }
  if (
    newarr[0] &&
    newarr[1] &&
    newarr[2] &&
    newarr[3] &&
    newarr[4] &&
    newarr[5]
  ) {
    return console.log("Valid");
  } else {
    return console.log("Invalid");
  }
};
