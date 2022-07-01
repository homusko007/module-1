'use strict';

const isPrime = x => {
    if (x < 2) { 
        console.log(x + ' false');
        return false;  //Отрицательные числа 0 и 1 не м.б. простыми, а 2 единственное простое четное число
    }

    for (let i = 2 ; i < x; i++) {  //начнем проверять с 2 по вышеперечисл. причинам
        if (x % i === 0) {
            console.log(x + ' false');
            return false;
        }
    }
    console.log(x + ' true');
    return true;
};

const res = isPrime(151);
