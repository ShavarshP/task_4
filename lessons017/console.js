class Console {
  constructor(type) {
    this.type = type;
    this.histor = "";
  }
  log(a, ...arr) {
    if (typeof a == "string") {
      if (typeof arr == "object") {
        let tabjson = [];
        for (var p in arr) {
          if (a.hasOwnProperty(p)) {
            tabjson.push('"' + p + '"' + ":" + arr[p]);
          }
        }
        console.log(tabjson);

        return "{" + tabjson.join(",") + "}";
      }
      this.histor = a + [...arr];
      return a + [...arr];
    }
    this.histor = this.type + " : " + a;
    return this.type + " : " + a;
  }
  clearHistory() {
    this.type = "";
  }
  history() {
    return this.histor;
  }
}
