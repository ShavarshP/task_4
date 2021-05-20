// task 4
// class ClassName {
//   constructor() {
//     this.name="hrach"
//   }
//   static obj={
//     name: "name",
//     k: ()=>{
//       console.log(this.name);
//     },
//     fu: function() {
//       console.log(this.name);
//     },
//   }
//   lg(){
//     this.obj.k()
//     this.obj.fu()
//   }
// }
// 5
class Person {
  constructor(obj) {
    this.name = obj.name;
    this.age = obj.age;
  }
}
class Baby extends Person {
  constructor(obj) {
    super(obj);
    this.favoriteToy = obj.toy;
  }
  play() {
    console.log(this.name + " Playing with " + this.favoriteToy);
  }
}
const jon = new Baby({ name: "joni", age: 12, toy: "megatron" });
