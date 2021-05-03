const parseFloat2=(string)=>{
  let newNumber=""
  let condition = 0
  for (var i = 0; i < string.length; i++) {
    if (/[0-9]/.test(string[i]) || string[i]=="." || string[i]==" ") {
      if (string[i]==".") {
        if(condition){
          break
        }
        condition++
      }
      newNumber+=string[i]
    }else {
      break
    }
  }
  if (newNumber=="") {
    console.log(NaN);
  }else {

    console.log(Number(newNumber));

  }
}
