const getBestStudent = {
  John: [100, 90, 80],
  Bob: [100, 70, 80],
  BestStudent: [],

  getAvg: () => {
    const sum = (arr) => {
      return arr.reduce((acc, t) => (acc += t)) / arr.length;
    };
    return ["john", sum(getBestStudent.John), "Bob", sum(getBestStudent.Bob)];
  },
  setBestStudent: (object) => {
    const sum = (arr) => {
      return arr.reduce((acc, t) => (acc += t)) / arr.length;
    };
    let max = 0;
    let name = "";
    for (var key in object) {
      if (sum(object[key]) > max) {
        max = sum(object[key]);
        name = key;
      }
    }
    return name;
  },
};
console.log(getBestStudent.getAvg());
console.log(
  getBestStudent.setBestStudent({ John: [100, 90, 80], Bob: [100, 70, 80] })
);
