const dayOfYear=(end)=>{
  console.log(end.split("/"));
  let countDownDate = new Date(end).getTime()
  let now = new Date("Jan 1, "+end.split("/")[2]).getTime()
  let distance = countDownDate - now
  return Math.floor(distance / (1000 * 60 * 60 * 24))+1
}
console.log(dayOfYear("12/31/2000"));
