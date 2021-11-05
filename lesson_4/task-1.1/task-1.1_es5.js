'use strict';
function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
  this.price = this.price - this.price * 0.25;
};

const products = [
  new Product('Телефон', 10999),
  new Product('Телевизор', 15249),
  new Product('Триммер', 519),
];

products[0].make25PercentDiscount();
products[2].make25PercentDiscount();
console.log(products);
