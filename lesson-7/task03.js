'use strict';

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arr, text) => {
    let arr1 = [];

    for (let i = 0; i < arr.length; i++) { 
    arr1[i]= text + ' ' +  arr[i];
    }
    return arr1;
}

console.log(addPrefix(names, 'Mr'));

