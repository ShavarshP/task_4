const formatDate = (date) => {
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
  return (
    "" +
    date.getDate() +
    " " +
    months[date.getMonth()] +
    " " +
    date.getFullYear()
  );
};
console.log(formatDate(new Date("2020-01-14")));
