'use strict';

(() => {
  const figuresRus = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  function start() {
    let computerCount = 5;
    let userCount = 5;

    const getComputerChoice = () => {
      const random = getRandomIntInclusive(0, 2);
      let computerChoice = 0;
      if (random === 0) {
        computerChoice = 'камень';
      } else if (random === 1) {
        computerChoice = 'ножницы';
      } else {
        computerChoice = 'бумага';
      }
      return computerChoice;
    };

    const userChoise = prompt('камень, ножницы, бумага?');
    if (figuresRus.includes(userChoise)) {
      const computer = getComputerChoice();
      const user = userChoise.toLowerCase();

      if (computer === 'камень' && user === 'бумага' ||
            computer === 'ножницы' && user === 'камень' ||
            computer === 'бумага' && user === 'ножницы') {
        alert(`Ваш выбор ${user} \nВыбор компьютера: ${computer} \nВы начинаете первым!`);
        userStep();
      } else if (computer === 'камень' && user === 'ножницы' ||
            computer === 'ножницы' && user === 'бумага' ||
            computer === 'бумага' && user === 'камень') {
        alert(`Ваш выбор ${user} \nВыбор компьютера: ${computer} \nКомпьютер начинает первым!`);
        computerStep();
      } else {
        alert(`Ваш выбор ${user} \nВыбор компьютера: ${computer} \nНичья! Попробуем еще раз`);
        start();
      }

      function userStep() {
        while (computerCount !== 0 && userCount !== 0) {
          let number;
          if (userCount > computerCount) {
            number = +prompt(`Введите число от 1 до ${computerCount}`);
          } else {
            number = +prompt(`Введите число от 1 до ${userCount}`);
          }
          if (number > userCount || number < 1 || isNaN(number) === true) {
            userStep();
          }
          console.log(`пользователь загадывает  ${number}`);

          const computerRundom = getRandomIntInclusive(1, userCount);
          if (computerRundom % 2 === 0 && number % 2 === 0 || computerRundom % 2 !== 0 && number % 2 !== 0) {
            computerCount += number;
            userCount -= number;
            console.log('Компьютер угадал!');
            alert(`Компьютер угадал! \nШариков у компьютера ${computerCount}  \nШариков у игрока ${userCount}`);
          } else {
            if (computerCount < number) {
              userCount += computerCount;
              computerCount -= computerCount;
            } else {
              computerCount -= number;
              userCount += number;
            }
            console.log('Компьютер не угадал!');
            alert(`Компьютер не угадал! \nШариков у компьютера ${computerCount}  \nШариков у игрока ${userCount}`);
          }
          console.log(`шариков у компьютера ${computerCount}`);
          console.log(`шариков у игрока ${userCount}`);
          computerStep();
        }
      }

      function computerStep() {
        while (computerCount !== 0 && userCount !== 0) {
          let computerRundom;
          if (computerCount > userCount) {
            computerRundom = getRandomIntInclusive(1, userCount);
          } else {
            computerRundom = getRandomIntInclusive(1, computerCount);
          }
          console.log(`компьютер загадывает  ${computerRundom}`);

          const b = confirm(`Число четное?`);
          if (b === true && computerRundom % 2 === 0 || b !== true && computerRundom % 2 !== 0) {
            console.log(`Да, Вы угадали!`);
            userCount += computerRundom;
            computerCount -= computerRundom;
            alert(`Да, Вы угадали! \nШариков у компьютера ${computerCount}  \nШариков у игрока ${userCount}`);
          } else {
            if (userCount < computerRundom) {
              computerCount += userCount;
              userCount -= userCount;
            } else {
              userCount -= computerRundom;
              computerCount += computerRundom;
            }
            console.log(`Нет, Вы не угадали!`);
            alert(`Нет, Вы не угадали! \nШариков у компьютера ${computerCount}  \nШариков у игрока ${userCount}`);
          }
          console.log(`шариков у компьютера ${computerCount}`);
          console.log(`шариков у игрока ${userCount}`);
          userStep();
        }
      }

      function showResult() {
        let result;
        if (userCount === 0) {
          result = 'Компьютер выиграл!';
        } else {
          result = 'Вы выиграли!';
        }
        return result;
      }
      if (confirm(`${showResult()} \nСыграем еще разок?`)) {
        start();
      } else {
        return;
      }
    } else {
      alert('Введите правильное значение');
      start();
    }
  }
   window.marbl = start();
})();


