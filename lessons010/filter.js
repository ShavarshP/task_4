const onlyNumbers = (arr) => arr.filter((item) => parseInt(item));
const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];
console.log(onlyNumbers(arr));

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];
const filterUsers = (users) => users.filter((item) => item.lang !== "ru");
console.log(filterUsers(users));

const users2 = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",

    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];
const filterByField = (users2) => users2.filter((item) => item.isAstronaut);
console.log(filterByField(users2));
