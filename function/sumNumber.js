const sum=(string)=>{
  let newNumber=""
  let sum = 0
  for (var i = 0; i < string.length; i++) {
    if (/[0-9]/.test(string[i])) {
      newNumber+=string[i]

    }else {
      sum+=Number(newNumber)
      newNumber=""
    }
  }
  return sum;
}
