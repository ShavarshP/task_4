const task7 = (str) => {
  console.log(str.split(""));
  let string=str.split("")
  let char = "";
  for (var i = 0; i < str.length-1; i+=3) {
    char=string[i]
    string[i]=string[i+1]
    string[i+1]=string[i+2]
    string[i+2]=char
    console.log(i);
  }
  for (var i = 1; i < string.length; i++) {
    string[0]+=string[i]
  }
  console.log(string[0]);
};

task7("oopoopoopoop")
