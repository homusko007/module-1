'use strict';


{
    const money = +prompt('Какая ваша зарплата?');
    let tax;

    if (money < 15000) {
        tax = money * 0.15;
    }
    else if (money >= 50000) {
        tax = (money - 49999) * 0.3 + (35000 * 0.2)+ (14999 * 0.15);
    }
    else {
        tax = (money - 14999) * 0.2 + (14999 * 0.15);
    }
    console.log('Сумма налога: ' + tax);

}
