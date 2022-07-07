'use strict';

let items = [];

const cart = {
    items,
    totalPrice: 0,
    count: 0,

    add(el, cost, amount) {
        items.push({ product: el, price: cost, amount: amount, });
        this.calculateItemPrice();
        this.increaseCount(amount);
    },

    calculateItemPrice() {
        let sum = 0;
        for (let i = 0; i < this.items.length; i++) {
            let elSum = this.items[i].price * this.items[i].amount;
            sum += elSum;
        }
        this.totalPrice = sum;
        return this.totalPrice;
    },

    getTotalPrice() {
        console.log(`'Общая стоимлсть всей корзины:' ${this.totalPrice}`);
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
        this.getTotalPrice()            
    },
}
cart.add('ручка', 20, 1);
cart.add('карандаш', 15, 5);
cart.add('тетрадь', 25, 15);
cart.add('линейка', 10, 1);

console.log(cart);

cart.print()


/*items.map(item => item.price).reduce((prev, curr) => prev + curr, 0);
        return summ;*/
