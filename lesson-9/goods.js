'use strict';

class Goods {
    constructor(name, price, amount, discount) {
        this.name = name;
        this.price = price;
        this.discount = discount; 
        this.amount = amount;
    }
};

class FoodGoods extends Goods {
    constructor(name, price, amount, discount, calories) {
        super (name, price, amount, discount);
        this.calories = calories;
    }
};

class СlothingGoods extends Goods {
    constructor(name, price, amount, discount, material) {
        super (name, price, amount, discount);
        this.material = material;
    }
};

class TechnicsGoods extends Goods {
    constructor(name, price, amount, discount, equipment) {
        super (name, price, amount, discount);
        this.equipment = equipment;
    }
};

const good1 = new FoodGoods('авокадо', 15, 2, 5, 100);
const good2 = new СlothingGoods('брюки', 1000, 1, 0, 'футер');
const good3 = new TechnicsGoods('чайник', 1500, 1, 8, 'бытовая техника');
