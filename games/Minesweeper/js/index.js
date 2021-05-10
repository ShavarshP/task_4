const Gamesiz = 12;
const Coefficient = 50; //the number of enemies and walls depends on this value

const childsizblock = 30;

const createTileValues = (theSize) => {
  const value = [];
  for (let i = 0; i < theSize; i++) {
    let value2 = [];
    for (let j = 0; j < theSize; j++) {
      value2.push(0);
    }
    value.push(value2);
  }
  return value;
};
//

const createParticipants = (theSize, coefficient) => {
  return Math.round((theSize * theSize) / coefficient + 1) * 2;
};

//
const createLocations = (coefficient2, gamesiz) => {
  const Locations = [];
  for (let i = 0; i < coefficient2; i++) {
    let loc = [randomIndex(0, gamesiz), randomIndex(0, gamesiz)];

    if (!isLocationsMatch(loc, Locations)) {
      Locations.push(loc);
    } else {
      i--;
    }
  }
  return Locations;
};

const isLocationsMatch = (loc, arrXy) => {
  for (let i = 0; i < arrXy.length; i++) {
    if (loc[0] == arrXy[i][0] && loc[1] == arrXy[i][1]) {
      return true;
    }
  }
  return false;
};

function randomIndex(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
//

const createPlayers = (loc, numb) => {
  const players = loc.map((t, i) => {
    return {
      name: "Walls",
      loc: t,
      img:
        "https://c0.klipartz.com/pngpicture/220/369/gratis-png-minesweeper-pro-clasico-minesweeper-minesweeper-plus-le-gusta-el-buscaminas-bomb.png",
    };
  });
  return players;
};
///
const placePlayers = (tileValues, players) => {
  for (let i = 0; i < players.length; i++) {
    let x = players[i].loc[0];
    let y = players[i].loc[1];
    tileValues[y][x] = { name: players[i].name, img: players[i].img };
  }

  return tileValues;
};
/////

const render = (tableOfGame, siz, sizblock) => {
  document.getElementById("container").innerHTML = "";
  document.getElementById("container").style.width = siz * sizblock + "px";
  document.getElementById("container").style.height = siz * sizblock + "px";
  const blok = [];
  const blokchild = [];

  for (let i = 0; i < siz; i++) {
    blok[i] = document.createElement("div");
    blok[i].class = "imgfader1";
    blok[i].style.width = siz * sizblock + "px";
    blok[i].style.height = sizblock + "px";

    blok[i].style.display = "flex";
    blok[i].style.justifyContent = "space-evenly";
    document.getElementById("container").appendChild(blok[i]);
    for (let j = 0; j < siz; j++) {
      blokchild[j] = document.createElement("div");
      blokchild[j].class = "imgfader1";
      blokchild[j].style.width = sizblock - 4 + "px";
      blokchild[j].style.height = sizblock - 4 + "px";
      blokchild[j].style.backgroundColor = "hsl(50, 13%, 65%)";
      blok[i].appendChild(blokchild[j]);
      if (tableOfGame[i][j]) {
        if (Number(tableOfGame[i][j])) {
          console.log("maladec");
          blokchild[j].innerHTML = tableOfGame[i][j];
          continue;
        }
        let img = document.createElement("img");
        img.style.width = sizblock - 4 + "px";
        img.style.height = sizblock - 4 + "px";
        img.src = tableOfGame[i][j].img;
        blokchild[j].appendChild(img);
      }
    }
  }
};

///////////////////////////////
const nearbyBombs = (loc, gloLoc) => {
  console.log(loc);
  console.log(gloLoc);
  for (var i = 0; i < loc.length; i++) {
    console.log("maladec");
    if (Number(gloLoc[loc[i][1]][loc[i][0] - 1]+1)) {
      gloLoc[loc[i][1]][loc[i][0] - 1] += 1;
    }
    if (Number(gloLoc[loc[i][1]][loc[i][0] + 1]+1)) {
      gloLoc[loc[i][1]][loc[i][0] + 1] += 1;
    }
    if (loc[i][1]!==11 && Number(gloLoc[loc[i][1] + 1][loc[i][0]]+1)) {
      gloLoc[loc[i][1] + 1][loc[i][0]] += 1;
    }
    if (loc[i][1]!==0 && Number(gloLoc[loc[i][1] - 1][loc[i][0]]+1)) {
      gloLoc[loc[i][1] - 1][loc[i][0]] += 1;
    }
    if (loc[i][1]!==0 && Number(gloLoc[loc[i][1] - 1][loc[i][0] - 1]+1)) {
      gloLoc[loc[i][1] - 1][loc[i][0] - 1] += 1;
    }
    if (loc[i][1]!==0 && Number(gloLoc[loc[i][1] - 1][loc[i][0] + 1]+1)) {
      gloLoc[loc[i][1] - 1][loc[i][0] + 1] += 1;
    }
    if (loc[i][1]!==11 && Number(gloLoc[loc[i][1] + 1][loc[i][0] - 1]+1)) {
      gloLoc[loc[i][1] + 1][loc[i][0] - 1] += 1;
    }
    if (loc[i][1]!==11 && Number(gloLoc[loc[i][1] + 1][loc[i][0] + 1]+1)) {
      gloLoc[loc[i][1] + 1][loc[i][0] + 1] += 1;
    }
  }
};
//////

const coefficient2 = createParticipants(Gamesiz, Coefficient);
let locations = createLocations(coefficient2 + 2, Gamesiz - 1); //house and hare-2
const homeLocation = locations[1];

const Locations = () => {
  const TileValues = createTileValues(Gamesiz);
  const Players = createPlayers(locations, coefficient2 / 2); //number of wolves==number of wolves

  const PlacePlayers = placePlayers(TileValues, Players); //place players by coordinates
  nearbyBombs(locations, PlacePlayers);

  render(PlacePlayers, Gamesiz, childsizblock);
};
Locations();
