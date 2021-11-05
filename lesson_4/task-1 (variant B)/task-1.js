'use strict';

let DigitsNumberUser;
let units;
let tens;
let hundereds;

class DigitsNumber {
  constructor(units, tens, hundereds) {
    this.units = units;
    this.tens = tens;
    this.hundereds = hundereds;
  }
  show() {
    console.log(
      `Введенное число ${userNumber} содержит единиц: в количестве ${this.units}; десяток в количестве ${this.tens}; сотен в количестве ${this.hundereds}`
    );
  }
}

/**
 * Принимает число, преобразует в массив
 * затем вводит свойства в параметры объекта.
 * @param {number} userNumber
 */
function divisionIntoParts(userNumber) {
  let userNumberArr = [];
  for (let i = 0; i < 3; i++) {
    userNumberArr[i] = userNumber % 10;
    userNumber = (userNumber / 10).toFixed();
  }
  units = userNumberArr[0];
  tens = userNumberArr[1];
  hundereds = userNumberArr[2];
  DigitsNumberUser = new DigitsNumber(units, tens, hundereds);
}

const userNumber = +prompt('Введите число от 0 до 999');
if (
  typeof userNumber == 'number' &&
  0 <= userNumber < 1000 &&
  Number.isInteger(userNumber) == true
) {
  divisionIntoParts(userNumber);
  DigitsNumberUser.show();
  console.log(DigitsNumberUser);
} else {
  DigitsNumberUser = new DigitsNumber(0, 0, 0);
  console.log(
    `Ввведенное в строку значение ${userNumber} - не соответствует условиям!`
  );
  console.log(DigitsNumberUser);
}
