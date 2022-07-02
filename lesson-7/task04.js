'use strict';

const cashbox = [[12, 4500],
[7, 3210],
[4, 650],
[3, 1250],
[9, 7830],
[1, 990],
[6, 13900],
[1, 370]];

console.log(cashbox);
const getAveragePriceGoods = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][1] / arr[i][0];
        sum += arr[i];
    }
     return sum / arr.length;
}

console.log("Средняя стоимость 1 товара: " + getAveragePriceGoods(cashbox).toFixed(2))