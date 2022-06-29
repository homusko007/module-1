'use strict';


{
    const money = +prompt('Какая ваша зарплата?');
    let tax;

    if (money <= 15000) {
        tax = money * 0.13;
    }
    else if (15000 < money <= 50000) {
        tax = money * 0.2;
    }
    else {
        tax = money * 0.3;
    }
    console.log('Сумма налога: ' + tax);
}
