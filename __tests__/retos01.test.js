const { maxNumber, sumaPares } = require('../src/retos01.js')

test('maxNumber debe devolver el numero mayor de un array de numeros pasado', () => {
  //GIVEN
  const numList = [1, -5, 0, 3, 2]
  //WHEN
  const sut = maxNumber(numList)
  //THEN
  expect(sut).toBe(3)
  expect(typeof sut).toBe('number')
})

test('sumaPares, al darle una lista de números devuelva la suma de todos los que sean pares.', () => {
  //GIVEN
  const numList = [1, -4, -5, 0, 3, 2]
  //WHEN
  const sut = sumaPares(numList)
  //THEN
  expect(sut).toBe(-2)
  expect(typeof sut).toBe('number')
})

test('filterStrings, de un array de números y strings devuelva un array de solamente los string', () => {
  //GIVEN
  const arrayList = [27, 88, 'gos', 'gat', '111']
  //WHEN
  const sut = filterStrings(arrayList)
  //THEN
  expect(sut).toEqual(expect.arrayContaining(['gos', 'gat', '111']))
})
