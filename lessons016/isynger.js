const Person = (name, age) => {
  return {
    newName: name,
    newAge: age,
    compareAge: function (obj) {
      if (obj.newAge == age) {
        console.log(obj.newName + " is the same age as me.");
      }
      if (obj.newAge > age) {
        console.log(obj.newName + " is older than me.");
      }
      if (obj.newAge < age) {
        console.log(obj.newName + "is younger than me.");
      }
    },
  };
};
const p1 = Person("Samuel", 24);
const p2 = Person("Joel", 36);
const p3 = Person("Lily", 24);
p1.compareAge(p2);
p2.compareAge(p1);
p1.compareAge(p3);
