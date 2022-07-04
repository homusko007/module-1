'use strict';

let input, random = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
console.log(random);


while (input = prompt("Введите число от 0 до 100:")) {
    if (isNaN(input))
        alert("Введите число!");
    else if (input > random)
        alert("Меньше!");
    else if (input < random)
        alert("Больше!");
    else if (input == random) {
        alert("Правильно!");
        if (confirm(`Продолжить игру?`)) {
          
        }
        else {
            break;
        }
    }
}
