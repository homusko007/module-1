'use strict';

{
    const productName = prompt('Ведите наименование товара');
    const count = +prompt('Ведите количество товара');
    const category = prompt('Ведите категорию товара');
    const price = +prompt('Ведите стоимость товара');


    if (isNaN(count) === true) {
        console.log('Введены некорректный данные');
    } else if (isNaN(price) === true) {
        console.log('Введены некорректный данные');
    }
    else {
            console.log(`На складе ${count} единицы товара ${productName} на сумму ${count * price} руб.`);
        }

    }

