const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];
const sum = (arr) => arr.filter((t) => t > 18).reduce((a, i) => a + i);
console.log(sum(arr));

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];
const average = (obj) => {
  return (
    obj.reduce((a, i) => {
      return a + i.age;
    }, 0) / obj.length
  );
};
console.log(average(users));
