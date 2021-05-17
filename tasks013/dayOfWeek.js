const dayOfWeek = (data) => {
  let days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  let date = new Date(data);
  console.log(days[date.getDay()]);
};
dayOfWeek("12/07/2016");
