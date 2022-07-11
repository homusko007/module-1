'use strict';

let input;
const random = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
console.log(random);

const foo1 = () => {
  input = +prompt('Введите число от 1 до 100:');
  if (isNaN(input)) {
    alert('Введите число!');
  } else if (input > random) {
    alert('Меньше!');
  } else if (input < random) {
    alert('Больше!');
  } else if (input === random) {
    alert('Правильно!');
    if (confirm(`Продолжить игру?`)) {
    } else {
      return;
    }
  }
  foo1();
};


foo1();
