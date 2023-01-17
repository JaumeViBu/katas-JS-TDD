const { maxNumber, sumaPares, filterStrings } = require('../src/retos01.js');
// const retos01 = require('../src/retos01.js')
// retos01.maxNumber()

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
  console.log(sut);
  //THEN

  //1.comparamos que tenga el contenido ['gat', 'gos', '111'] en cualquier orden
  expect(sut).toEqual(expect.arrayContaining(['gat', 'gos', '111']))

  //2.comparamos que todos los items del array sean strings
  for (const item of sut) {
    expect(typeof item).toBe('string');
  }

  //3. comparamos que el array tenga solo 3 items
  expect(sut.length).toBe(3);
})
