const getWeekOfMonth = (date) => {

  console.log(Math.ceil((date.getDate()-date.getDay())/7)+1);
};
getWeekOfMonth(new Date(2021, 05, 30));
