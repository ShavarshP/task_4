const sum=(str)=>{
  let number=""
  let number2=""
  let operator=""
  for (var i = 0; i < string.length; i++) {
    if (!/[0-9]/.test(string[i])) {
      operator+=string[i]
      number2=number
    }else {
      number=""+=string[i]
    }
  }
  if (operator="+") {
    return Number(number)+Number(number2)
  }else if (operator="-") {
    return Number(number)-Number(number2)
  }else if (operator="/") {
    return Number(number)/Number(number2)
  }else if (operator="*") {
    return Number(number)*Number(number2)
  }

}
