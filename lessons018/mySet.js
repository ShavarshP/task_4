class Myset {
  constructor(arr) {
    this.arr=arr.filter((e,i,a)=>a.indexOf(e)==i)
  }

  add(number){
    if (this.arr.filter(t=>number==t).length!=1){
      this.arr=[...this.arr, number]
    }
    return this.arr
  }
  delete(item){
    this.arr=this.arr.filter(t=>item!=t)
    return this.arr
  }
  has(item){
    if (this.arr.filter(t=>item==t).length>0) {
      return true
    }else{
      return false
    }
  }
  clear(){
    this.arr=[]
    return this.arr
  }
  size(){
    return this.arr.length
  }
}
let arr= new Myset([2,54,3,6,2,7,7,87,8,7])
