//t1
let name, admin;
name = "John";
admin = name;
console.log(admin);

//t2
let i = 10;
let n = i++ % 5;
console.log(n);

//t3
let variables1 = 10,
  variables2 = 3,
  variables;
variables = variables2;
variables2 = variables1;
variables1 = variables;
console.log(variables1, variables2);

//t4
let a = 10,
  b = 3;
a = b + a;
b = a - b;
a = a - b;
console.log(a, b);
