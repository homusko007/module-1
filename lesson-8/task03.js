'use strict';


const getArr3 = (lenght, n, m, condition) => {
    const arr3 = [];
    let min = Math.min(n, m);
    let max = Math.max(n, m);
   
    
      for (let i = 0; i < lenght; i++) {
        if (condition === 'even') {
         arr3[i] = Math.floor(Math.random() * ((max - min - 1)) * 2 + min / 2);
            
        } else {
         arr3[i] = Math.floor(Math.random() * ((max - min - 1) / 2 + 1)) * 2 + min; //OK
        } 
    }
    return arr3
}


const newArr3 = getArr3(5, 5, 15, 'even');
console.log(newArr3);