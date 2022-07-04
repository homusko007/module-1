'use strict';


const getArr2 = (num, n, m) => {
    let arr2 = [];

    let min = Math.min(n, m);
    let max = Math.max(n, m);

    for (let i = 0; i < num; i++) {
        arr2[i] = Math.round(Math.random() * (max - min) + min);
    }
    return arr2;
}

const newArr2 = getArr2(7, -10, 1);
console.log(newArr2);