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
      `Содержит единиц в количестве ${this.units}; десяток в количестве ${this.tens}; сотен в количестве ${this.hundereds}`
    );
  }
}

/**
 * Принимает число, преобразует его в строку, затем в массив
 * @param {number} userNumber
 */
function divisionIntoParts(userNumber) {
  let userNumberStr = String(userNumber);
  let userNumberUnits = userNumberStr.split('');
  settingParameters(userNumberUnits);
}

/**
 * определяет количество символов, разделяет массив на части
 * вводит свойства в параметры объекта.
 * @param {array} userNumberUnits
 */
function settingParameters(userNumberUnits) {
  switch (userNumberUnits.length) {
    case 3:
      units = +userNumberUnits.splice(-1, 1);
      tens = +userNumberUnits.splice(-1, 1);
      hundereds = +userNumberUnits.splice(-1, 1);
      DigitsNumberUser = new DigitsNumber(units, tens, hundereds);
      break;
    case 2:
      units = +userNumberUnits.splice(-1, 1);
      tens = +userNumberUnits.splice(-1, 1);
      DigitsNumberUser = new DigitsNumber(units, tens, (hundereds = 0));
      break;
    case 1:
      units = +userNumberUnits.splice(-1, 1);
      DigitsNumberUser = new DigitsNumber(units, (tens = 0), (hundereds = 0));
      break;
  }
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
