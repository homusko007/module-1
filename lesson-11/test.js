'use strict';

const items = [];

const cart = {
  items,
  count: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },

  add(el, cost, amount) {
    items.push({product: el, price: cost, amount});
    this.calculateItemPrice();
    this.increaseCount(amount);
  },

  calculateItemPrice() {
    let sum = 0;
    for (let i = 0; i < this.items.length; i++) {
      const elSum = this.items[i].price * this.items[i].amount;
      sum += elSum;
    }
    return sum;
  },

  increaseCount(amount) {
    cart.count += amount;
  },

  clear() {
    cart.items = [];
    cart.totalPrice = 0;
    cart.count = 0;
  },

  print() {
    const cartStr = JSON.stringify(items);
    const cartObj = JSON.parse(cartStr);
    console.log(cartObj);
    console.log(`'Общая стоимость карзины:' ${this.totalPrice}`);
  },
};
cart.add('ручка', 20, 1);
cart.add('карандаш', 15, 5);
cart.add('тетрадь', 25, 15);
cart.add('линейка', 10, 1);

console.log(cart);

cart.print();
