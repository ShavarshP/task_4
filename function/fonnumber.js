const fone = (numbers) => {
  let newfone = "";
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] == "+" && i == 0) {
      i++;
    }
    if (!/[0-9]/.test(numbers[i])) {
      if (numbers[i] !== " ") {
        console.log("Bad number");
        break;
      }
    } else {
      newfone += numbers[i];
    }
  }
  if ((numbers[0] == "+" && newfone.length > 10) || newfone.length == 10) {
    console.log(newfone);
  } else {
    console.log("Bad number");
  }
};
