var shopper1 = {
  firstName: "Nicole",
  age: 15,
  trusted: true,
  hasTrust: function() {
    return this.firstName + "has trust? = " + this.trusted;
  },
  groceryCart: ["Eggs", "Bacon", "stawberries"]
};

console.log(shopper1.hasTrust());

var shopper2 = {
  firstName: "Mckay",
  age: 15,
  trusted: false,
  hasTrust: function() {
    return this.firstName + "has trust? = " + this.trusted;
  },
  groceryCart: ["Eggs", "Bacon", "stawberries"]
};

console.log(shopper2.hasTrust());
