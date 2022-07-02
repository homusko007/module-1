'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов','Смирнов', 'Попоп', 'Куликов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попоп'];

const filter = (arr1, arr2) => {
    
    const arr3 = arr1.filter(n => !arr2.includes(n));
    /* проверяется каждый элемент массива. Если функция возвращает true, то элемент остаётся в массиве, 
если false, то удаляется.*/
    return arr3;
}

const passedStudents = filter(allStudents, failedStudents);
console.log(passedStudents);

