const sort = (obj) => {
  function sortByPercent(arr) {
    return arr.sort((a, b) => (a.percent > b.percent ? 1 : -1));
  }
  let newObj = [];
  for (var i = 0; i < obj.length; i++) {
    if (obj[i].readStatus) {
      newObj.push(obj[i]);
    }
  }

  console.log(sortByPercent(newObj));
};
sort([
  { book: "Catcher in the Rye", readStatus: true, percent: 40 },
  { book: "sdfgh", readStatus: true, percent: 20 },
  { book: "Solaris", readStatus: false, percent: 90 },
  { book: "The Fall", readStatus: true, percent: 50 },
  { book: "White Nights", readStatus: false, percent: 60 },
  { book: "After Dark", readStatus: true, percent: 70 },
]);
