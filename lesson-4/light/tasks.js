'use strict';

{
const rain = Math.random();

console.log(Math.round(rain));

if (Math.round(rain) === 1) {
    console.log('Пошёл дождь. Возьмите зонт!');
}
else {
    console.log('Дождя нет!');
}
}

{
const value1 = parseInt(prompt('Введите кол-во баллов по математике: '));
const value2 =  parseInt(prompt('Введите кол-во баллов по русскому языку:'));
const value3 =  parseInt(prompt('Введите кол-во баллов по информатике: '));

const totlValue = value1 + value2 + value3;

if (isNaN(totlValue) === true) {
    alert('Вы ввели некоректные данные');
}
else if (totlValue >= 265) {
alert('Поздравляю, вы поступили на бюджет!');
}
else if ((totlValue) >= 200)
{
    alert('Вы поступили на платную форму обучения');
}
else {
    alert('К сожалению, вы не поступили');
}
}


{
    const money = +prompt('Какую сумму желаете снять');
        
   if (money % 100 === 0) {
    console.log('Операия выполнена успешно!');
   }
    else {
      console.log('Минимальные банкноты 100р');  
    }
}