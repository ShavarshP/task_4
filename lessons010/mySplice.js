let rr = [4, 5, 7, 9, 1, 2, 8, 23, 8];
function mySplicep(arr, start, end, msArr = []) {
  let ped = [];

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (i >= start && i <= start + end - 1) {
      ped.push(element);
      if (i == end) {
        newArr = [...newArr, ...msArr];
      }
    } else {
      newArr.push(element);
    }
  }
  rr = newArr;
  console.log(newArr);
  return ped;
}
console.log(mySplicep(rr, 1, 2, [1, 1, 1, 1, 1, 1, 1, 1]));
console.log(rr);

// function sum(a)=>{
//   return function (b){
//     for (var i = 0; i < a.length; i++) {
//       a[i]+=b
//     }
//     return a
//
//   }
// }
// let arm=[1,1,2,3,4,5,]
// const sum1=sum(arm)
// const sum2=sum(arm)
// console.log(sum1(2));
// console.log(arm);
// console.log(sum2(1));
