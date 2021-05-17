const obj = {
  _name: [], // ['name', length][]
  setname: (value) => {
    obj._name = value;
  },
  getname: () => {
    return [obj._name, obj._name.length];
  },
};
obj.setname("Vazgen");
console.log(obj.getname());
