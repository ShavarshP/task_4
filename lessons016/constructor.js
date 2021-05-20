class Calculator {
  constructor(props) {}
  add = (a, b) => {
    return a + b;
  };
  subtract = (a, b) => {
    return a - b;
  };
  multiply = (a, b) => {
    return a * b;
  };
  divide = (a, b) => {
    return a / b;
  };
}

const calculator = new Calculator();
calculator.add(10, 5);
console.log(calculator.add(10, 5));
calculator.subtract(10, 5);
calculator.multiply(10, 5);
calculator.divide(10, 5);
