'use strict';

function Cart() {
    this.goods = [];
    this.totalPrice = 0,
    this.count = 0
};

Cart.prototype.add = function (item) {
    this.goods.push(item);
    this.calculateItemPrice(item);
    this.increaseCount(item.amount);
};

Cart.prototype.calculateItemPrice = function () {
    let sum = 0;
    for (let i = 0; i < this.goods.length; i++) {
        let elSum = this.goods[i].price * this.goods[i].amount;
        sum += elSum;
    }
    this.totalPrice = sum;
    return this.totalPrice;
};

Cart.prototype.getTotalPrice = function () {
    console.log(`'Общая стоимость всей корзины:' ${this.totalPrice}`);
};

Cart.prototype.increaseCount = function (amount) {
    cart.count += amount;
};

Cart.prototype.clear = function () {
    cart.goods = [];
    cart.totalPrice = 0;
    cart.count = 0;
};

Cart.prototype.print = function () {
    const cartStr = JSON.stringify(this.goods);
    const cartObj = JSON.parse(cartStr);
    console.log(cartObj);
    this.getTotalPrice()
};

const cart = new Cart()
cart.add(good1);
cart.add(good2);
cart.add(good3);
cart.print();
