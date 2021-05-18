const myRegExpTest = (test) => {
  if (test.match(/4|6/) && !test.match(/\s/) && !test.match(/\D/)) {
    console.log("true");
  } else {
    console.log("false");
  }
};
myRegExpTest("3243541");
