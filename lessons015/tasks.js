const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
const newArr=alphabetArray.reduce((acc,t,i)=>{
  if (Math.floor(i/4)==i/4) {
    console.log("maladec");
    return acc=[...acc, [t]]
  }else {
    let k=acc
    k[Math.floor(i/4)].push(t)
    console.log(acc);

    return acc=k
  }
},[])
console.log(newArr);
const Pagination={
  arr: [],
  init: function(newArr, conut) {

    this.arr=newArr.filter((t,i)=>i<conut)

  },
  getPageItems: function(){
    return console.log(this.arr);
  }
}
Pagination.init(alphabetArray, 4);
Pagination.getPageItems();
console.log(Pagination.arr);
Pagination.nextPage();
Pagination.getPageItems();
Pagination.nextPage().nextPage();
Pagination.goToPage(3);

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
const Pagination = {
  arr: [],
  hendArr: [],
  page: 1,
  pageCount: 0,
  init: (newArr, count) => {
    Pagination.hendArr = newArr;
    Pagination.pageCount = count;

    Pagination.arr = Pagination.hendArr.filter((t, i) => {
      if (
        Pagination.pageCount * (Pagination.page - 1) <= i &&
        i < Pagination.page * Pagination.pageCount
      ) {
        return t;
      }
    });
  },
  getPageItems: () => {
    return console.log(Pagination.arr);
  },
  nextPage: () => {
    Pagination.page += 1;
    Pagination.init(Pagination.hendArr, Pagination.pageCount);
    return { nextPage: Pagination.nextPage };
  },
  goToPage: (paages) => {
    Pagination.page = paages;
  },
  prevPage:
};
Pagination.init(alphabetArray, 4);
Pagination.getPageItems();
Pagination.getPageItems();
Pagination.nextPage();
Pagination.getPageItems();
Pagination.nextPage().nextPage().nextPage();
Pagination.getPageItems();
Pagination.goToPage(3);
Pagination.nextPage();
Pagination.getPageItems();

const flying = {
  takeOff: function () {
    return (this.isFlying = true);
  },
  land: function () {
    return (this.isFlying = false);
  },
};
let armavia = Object.create(flying, {});
armavia.takeOff();
console.log(armavia.isFlying);

console.log(armavia);
