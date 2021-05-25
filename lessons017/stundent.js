class Person {
  constructor(firstName, lastName, gender, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
    return this._name;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    this._lastName = value;
    return this._lastName;
  }
  get gender() {
    return this._gender;
  }
  set gender(value) {
    this._gander = value;
    return this._gender;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value;
    return this._age;
  }
  toString() {
    return this._name + " " + this._lastName + " " + this._age + " years old";
  }
}
class Student extends Person {
  constructor(year, fee, program) {
    (this._year = year), (this._fee = fee);
    this._program = [];
  }
  get year() {
    return this._year;
  }
  set year(value) {
    this._yare = value;
    return this._year;
  }
  passExam(programName, grade) {
    this._program = [
      ...this._program,
      { programName: programName, grade: grade },
    ];
  }
  toString() {
    if ((this._program.filter((t) => t.grade < 50).length = 0)) {
      return "grade is great";
    } else {
      return "grade is not great";
    }
  }
  isAllPassed() {
    this._year++;
  }
}
