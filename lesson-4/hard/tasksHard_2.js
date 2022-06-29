'use strict';


{
    const money = +prompt('Какая ваша зарплата?');
    let tax;

    if (money <= 15000) {
        tax = money * 0.13;
    }
    else if (15000 < money <= 50000) {
        tax = (money - 15000) * 0.2 + (15000 * 0.13);
    }
    else {
        tax = (money - 50000) * 0.3 + (35000 * 0.2)+ (15000 * 0.13);
    }
    console.log('Сумма налога: ' + tax);
}
