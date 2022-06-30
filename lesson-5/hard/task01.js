'use strict';

const getResult = (a, b) => {
    if (!b) {
        return Math.abs(a);
    }
    return getResult(b, a % b);
};

console.log(getResult(7, -21));
