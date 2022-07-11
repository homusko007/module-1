'use strict';

const getItemArr = (min, max) => {
  const rand = Math.random() * (max + 1 - min) + min;
  return Math.floor(rand);
};

let sum = 0;
const arr = [];
const getArr = () => {
  const el = getItemArr(0, 10);
  arr.push(el);
  console.log(arr);
  sum += Number(el);
  console.log(sum);
  if (sum >= 50) return; 
  getArr();
};

getArr();

