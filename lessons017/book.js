class Author {
  constructor(name, mail, gender) {
    this._name = name;
    this._mail = mail;
    this._gender = gender;
  }
  toString() {
    if (this._gender === "fEmaLe") {
      return "Ms " + this._name;
    } else {
      return "Mr " + this._name;
    }
  }
  get gender() {
    return this._gander;
  }
  set gender(value) {
    if (value === "fEmaLe" || value === "maLe") {
      this._gender = value;
      return ":)";
    } else {
      return Error;
    }
  }
  get name() {
    return this._name;
  }
  set name(value) {
    let regex = /^([a-zA-Z ]){2,30}$/;
    if (regex.test(value)) {
      return "throws error";
    } else {
      this._name = value;
      return "good";
    }
  }
}
class Book {
  constructor(title, author, price, quantitry) {
    super(title, author, price, quantitry);

    this._title = title;

    this._price = price;
    this._quantity = quantitry;
  }

  get price() {
    return this._price;
  }
  set price(value) {
    let regex = /^([0-9]){2,30}$/;
    if (!regex.test(value)) {
      return "throws error";
    } else {
      this._price = value;
      return "good";
    }
  }
  get title() {
    return this._title;
  }
  set title(value) {
    let regex = /^([a-zA-Z ]){2,30}$/;
    if (!regex.test(value)) {
      return "throws error";
    } else {
      this._title = value;
      return "good";
    }
  }
  get quantity() {
    return this._quantity;
  }
  set quantity(value) {
    let regex = /^([a-zA-Z ]){2,30}$/;
    if (!regex.test(value)) {
      return "throws error";
    } else {
      this._quantity = value;
      return "good";
    }
  }
}
