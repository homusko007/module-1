'use strict';
{
    const productName = 'яблоко';
    let producAmount = 20;
    const productCategory = 'продукты питания';
    let productCost = 44;

    console.log(productName);
    console.log('Общая стоимость яблок: ' + producAmount * productCost + 'руб.');
}

{
    const productName2 = 'кекс';
    const count2 = 8;
    const category2 = 'продукты питания';
    const price2 = 12;

    console.log(productName2);
    console.log(`общая сумма товара: ${count2 * price2}`);
}


{
    const productName3 = prompt('Ведите наименование товара');
    const count3 = parseInt(prompt('Ведите количество товара'));
    const category3 = prompt('Ведите категорию товара');
    const price3 = parseInt(prompt('Ведите стоимость товара'));


    console.log('count: ', typeof count3);
    console.log('price: ', typeof price3);

    console.log(`На складе ${count3} единицы товара ${productName3} на сумму ${count3 * price3} руб.`);
}
