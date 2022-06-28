'use strict';


{
    const money = +prompt('Какая ваша зарплата?');
    let tax;

    if (money < 15000) {
        tax = money * 0.15;
    }
    else if (money >= 50000) {
        tax = money * 0.3;
    }
    else {
        tax = money * 0.2;
    }
    console.log('Сумма налога: ' + tax);

}
