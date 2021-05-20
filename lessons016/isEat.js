// task 3
class Person {
  constructor(prop) {
    this.name = prop.name;
    this.age = prop.age;
    this.stomach = [];
  }
  eat = (food) => {
    if (this.stomach.length <= 10) {
      this.stomach.push(food);
    }
  };
  pop = () => {
    this.stomach = [];
  };
  toString = () => {
    console.log("name " + this.name + " age " + this.age);
  };
}

const anna = new Person({ name: "Anna", age: 16 });
console.log(anna);
