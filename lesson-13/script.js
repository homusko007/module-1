'use strict';

(() => {
  const figuresEng = ['rock', 'scissors', 'paper'];
  const figuresRus = ['камень', 'ножницы', 'бумага'];


  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  function game(language) {
    let userResult = 0;
    let computerResult = 0;

    function startEng() {
      const getComputerChoice = () => {
        const random = getRandomIntInclusive(0, 2);
        let computerChoice = 0;
        if (random === 0) {
          computerChoice = 'rock';
        } else if (random === 1) {
          computerChoice = 'scissors';
        } else {
          computerChoice = 'paper';
        }
        return computerChoice;
      };

      const userChoise = prompt('rock, scissors, paper?').toLowerCase();
      if (figuresEng.includes(userChoise)) {
        console.log(userChoise);

        const computer = getComputerChoice();
        console.log(computer);
        const user = userChoise;

        if (computer === 'rock' && user === 'paper' ||
                    computer === 'scissors' && user === 'rock' ||
                    computer === 'paper' && user === 'scissors') {
          userResult++;
          alert(`Your choice: ${user} \nComputer choice: ${computer} \nYou won!`);
        } else if (computer === 'rock' && user === 'scissors' ||
                    computer === 'scissors' && user === 'paper' ||
                    computer === 'paper' && user === 'rock') {
          computerResult++;
          alert(`Your choice: ${user} \nComputer choice: ${computer} \nComputer won!`);
        } else {
          alert(`Your choice: ${user} \nComputer choice: ${computer} \nDraw!`);
        }

        let result;
        if (userResult > computerResult) {
          result = 'User won';
        } else if (userResult < computerResult) {
          result = 'Computer won!';
        } else {
          result = 'Score equal';
        }
        if (confirm(`Сontinue the game?`)) {
        } else if (confirm(`Are you sure?`)) {

        } else {
          alert(`${result} \nUser: ${userResult} Computer: ${computerResult}`);
          return;
        }
        startEng();
      } else {
        alert('Enter the correct value');
        startEng();
      }
    }

    function startRus() {
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

      const userChoise = prompt('камень, ножницы, бумага?').toLowerCase();
      if (figuresRus.includes(userChoise)) {
        console.log(userChoise);

        const computer = getComputerChoice();
        console.log(computer);
        const user = userChoise;

        if (computer === 'камень' && user === 'бумага' ||
                    computer === 'ножницы' && user === 'камень' ||
                    computer === 'бумага' && user === 'ножницы') {
          userResult++;
          alert(`Ваш выбор ${user} \nВыбор компьютера: ${computer} \nВы выйграли!`);
        } else if (computer === 'камень' && user === 'ножницы' ||
                    computer === 'ножницы' && user === 'бумага' ||
                    computer === 'бумага' && user === 'камень') {
          computerResult++;
          alert(`Ваш выбор ${user} \nВыбор компьютера: ${computer} \nКомпьютер выйграл!`);
        } else {
          alert(`Ваш выбор ${user} \nВыбор компьютера: ${computer} \nНичья!`);
        }

        let result;
        if (userResult > computerResult) {
          result = 'Пользователь выиграл';
        } else if (userResult < computerResult) {
          result = 'Компьютер выиграл';
        } else {
          result = 'Счет равен';
        }
        if (confirm(`Продолжить игру?`)) {
        } else if (confirm(`Вы уверены?`)) {

        } else {
          alert(`${result} \nПользователь: ${userResult} Компьютер: ${computerResult}`);
          return;
        }
        startRus();
      } else {
        alert('Введите правильное значение');
        startRus();
      }
    }

    const lang = language;
    if (lang === 'ENG' || lang === 'EN') {
      startEng();
    } else {
      startRus();
    }
  }

  window.RPS = game;
})();
