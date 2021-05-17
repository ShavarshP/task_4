const getWeekOfMonth = (date) => {
  return (date.getDay())? Math.ceil((date.getDate())/7):Math.ceil((date.getDate()-date.getDay())/7)+1
};
console.log(getWeekOfMonth(new Date(2021, 05, 30)));
