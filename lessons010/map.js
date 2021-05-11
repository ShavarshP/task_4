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
const getUserNames = (users) => {
  return users.map((item) => item.username);
};
console.log(getUserNames(users));
const getUsernameLengths = (users) => {
  return users.map((item) => item.username.length);
};

console.log(getUsernameLengths(users));

const possibleToParse = (arr) => {
  return arr.map((item) => {
    if (parseInt(item)) {
      return parseInt(item);
    }
    return null;
  });
};
console.log(possibleToParse(["1", "gfhhj", "2"]));
