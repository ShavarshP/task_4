class Shiritory {
  constructor() {
    this.arr = [];
    this.gameOver = [];
    this.lastWorld = "";
    this.over = false;
  }
  play(world) {
    if (
      this.arr.length == 0 ||
      (this.arr.filter((t) => t == world).length == 0 &&
        this.lastWorld[this.lastWorld.length - 1] == world[0] &&
        !this.over)
    ) {
      this.lastWorld = world;
      this.arr = [...this.arr, world];
      return "ok";
    } else {
      this.over = true;
      return this.arr;
    }
  }
  gameOver() {
    return this.over;
  }
}

const pleyer = new Shiritory();
