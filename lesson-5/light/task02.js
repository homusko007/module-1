'use strict';

const getString = (text) => {
   let modificText = text[0].toUpperCase() + text.slice(1).toLowerCase();
    return  modificText;
}

console.log(getString('пРИвЕт Мир'));

