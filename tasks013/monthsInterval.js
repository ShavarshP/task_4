const monthsInterval = (start, end) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let newArr = [];
  if (start.getFullYear() <= end.getFullYear()) {
    console.log(start.getMonth());
    if (start.getMonth() <= end.getMonth()) {
      console.log(end.getMonth());
      for (var i = start.getMonth(); i <= end.getMonth(); i++) {
        newArr.push(months[i]);
      }
    } else {
      return [months[tart.getMonth()], months[end.getMonth()]];
    }
  } else {
    return [months[tart.getMonth()], months[end.getMonth()]];
  }

  return newArr;
  // }
};
let january = new Date(2017, 0, 1);
let march = new Date(2017, 2, 1);

console.log(monthsInterval(january, march));
