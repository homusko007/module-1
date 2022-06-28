'use strict';

{
    const productName = prompt('Ведите наименование товара');
    const count = parseInt(prompt('Ведите количество товара'));
    const category = prompt('Ведите категорию товара');
    const price = parseInt(prompt('Ведите стоимость товара'));


    console.log('count: ', typeof count);
    console.log('price: ', typeof price);

    console.log(`На складе ${count} единицы товара ${productName} на сумму ${count * price} руб.`);
}