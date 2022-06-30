'use strict';

const getStr = (str) => {
   let modificStr =  str.split("").reverse().join("");
    return  modificStr;
}

console.log(getStr('Привет мир'));
