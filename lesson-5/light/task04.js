'use strict';

const calculate = (summ, totalItems, promo) => {
    let newSumm = summ;

   if (totalItems >= 10) {
        newSumm -= (newSumm * 0.03);
        console.log('Сумма с первой скидкой: ' + newSumm);
    } 
        
    if (newSumm > 30000) {
        newSumm -= (newSumm - 30000) * 0.15;
        console.log('Сумма со второй скидкой: ' + newSumm);
    }

    if (promo === "METHED") {
        newSumm = newSumm - (newSumm * 0.1);
    }  else if (promo === "G3H2Z1") {
        newSumm = (newSumm - 500);
    }
    console.log('Стоимость корзины: ' + newSumm);
}

calculate(50000, 11, "METHED");

