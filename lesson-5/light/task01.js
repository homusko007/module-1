'use strict';

const getCost = (price) => {
    let resultPrise = price * 1.2 * 73;
    return  resultPrise;
}

const result = getCost(10);
console.log(`Стоимость в рублях:  ${result}`);


