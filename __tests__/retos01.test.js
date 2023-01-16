const { maxNumber, sumaPares } = require('../src/retos01.js');


test('maxNumber debe devolver el numero mayor de un array de numeros pasado', () => {

  //GIVEN
  const numList = [1, -5, 0, 3, 2];
  //WHEN
  const sut = maxNumber(numList);
  //THEN
  expect(sut).toBe(3);
});


test('', () => {
  //GIVEN
  //WHEN
  //THEN
});