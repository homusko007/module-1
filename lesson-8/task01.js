'use strict';


const getArr = (num) => {
let arr = [];
for (let i = 0; i < num; i++) {
    arr[i] = (~~(Math.random() * (100 - 1) + 1));
    }
return arr;
}

const newArr = getArr(7);
console.log(newArr);
