class CoffeeShop {
  constructor(prop) {
    this.name = "mark";
    this.manue = [
      { name: "pizza", price: 10, type: "food" },
      { name: "FRAPPUCCINO", price: 11, type: "drink" },
      { name: "CARAMEL MACCHIATO", price: 11, type: "drink" },
      { name: "AMERICANO.", price: 12, type: "drink" },
      { name: "CAFÉ LATTE", price: 6, type: "drink" },
      { name: "Donalds", price: 3, type: "food" },
    ];
    this.orders = [];
  }
  addOrder(food) {
    let k
    if (this.manue.filter((t) => food == t.name)) {
      this.orders = [...this.orders, food];
      return "maladec";
    } else {
      return "This item is currently unavailable!";
    }
  }
  fulfillOrder() {
    if (this.orders) {
      return "The {item} is ready!";
    }else {
      return "All orders have been fulfilled!"
    }
  }
  cheapestItem(){
    return this.manue.reduce((acc, item)=>{

      if (acc.price>item.price) {
        return item
      }else {
        return acc
      }
    },this.manue[0])
  }
  drinksOnly(){
    return this.manue.filter(t=>t.type=="drink")
  }
  foodOnky(){
    return this.manue.filter(t=>t.type=="food")
  }

}
