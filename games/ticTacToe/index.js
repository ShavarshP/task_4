let box = document.getElementsByClassName("scale22");
const right = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let m = "X";
let arrBox = [];

const isWon = (array) => {
  const length = array.length;
  for (var i = 0; i < right.length; i++) {
    let newArr = [...array, ...right[i]];
    let arr = newArr.filter(function (item, pos) {
      return newArr.indexOf(item) == pos;
    });
    if (newArr.length - 3 == arr.length) {
      console.log("maladec");
      return true;
    }
  }
};

const check = () => {
  let arrX = [];
  let arrY = [];
  for (var i = 0; i < box.length; i++) {
    if (box[i].innerHTML) {
      if (box[i].innerHTML == "X") {
        arrX.push(i);
      } else {
        arrY.push(i);
      }
    }
  }

  if (isWon(arrX)) {
    alert("O  won ");
  }
  if (isWon(arrY)) {
    alert("O  won ");
  }
};

box[0].addEventListener("click", () => {
  if (!box[0].innerHTML) {
    box[0].innerHTML = m;
    m == "X" ? (m = "O") : (m = "X");
    setTimeout(check, 200);
  }
});
box[1].addEventListener("click", () => {
  if (!box[1].innerHTML) {
    box[1].innerHTML = m;
    m == "X" ? (m = "O") : (m = "X");
    setTimeout(check, 200);
  }
});
box[2].addEventListener("click", () => {
  if (!box[2].innerHTML) {
    box[2].innerHTML = m;
    m == "X" ? (m = "O") : (m = "X");
    setTimeout(check, 200);
  }
});
box[3].addEventListener("click", () => {
  if (!box[3].innerHTML) {
    box[3].innerHTML = m;
    m == "X" ? (m = "O") : (m = "X");
    setTimeout(check, 200);
  }
});
box[4].addEventListener("click", () => {
  if (!box[4].innerHTML) {
    box[4].innerHTML = m;
    m == "X" ? (m = "O") : (m = "X");
    setTimeout(check, 200);
  }
});
box[5].addEventListener("click", () => {
  if (!box[5].innerHTML) {
    box[5].innerHTML = m;
    m == "X" ? (m = "O") : (m = "X");
    setTimeout(check, 200);
  }
});
box[6].addEventListener("click", () => {
  if (!box[6].innerHTML) {
    box[6].innerHTML = m;
    m == "X" ? (m = "O") : (m = "X");
    setTimeout(check, 200);
  }
});
box[7].addEventListener("click", () => {
  if (!box[7].innerHTML) {
    box[7].innerHTML = m;
    m == "X" ? (m = "O") : (m = "X");
    setTimeout(check, 200);
  }
});
box[8].addEventListener("click", () => {
  if (!box[8].innerHTML) {
    box[8].innerHTML = m;
    m == "X" ? (m = "O") : (m = "X");
    setTimeout(check, 200);
  }
});
