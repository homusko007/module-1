'use strict';


const chooseYears = (start, end) => {
    const arrYear = [];
    let result = [];

    for (let i = start; i <= end; i++) {
        arrYear.push(i);
    }
   

    arrYear.forEach((year) => {
        if (getLeapYear(year)) {
            result.push(year);
        }
    });

    return result;
}

const getLeapYear = year => {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        return year;
    } else {
        return false;
    }
}

console.log(chooseYears(1999, 2018));
