const {
  maxNumber,
  sumaPares,
  filterStrings,
  filterA,
  getRepeatedWord,
  filtrarProductosMasCaros,
} = require('../src/retos01.js')
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
  //THEN

  //1.comparamos que tenga el contenido ['gat', 'gos', '111'] en cualquier orden
  expect(sut).toEqual(expect.arrayContaining(['gat', 'gos', '111']))

  //2.comparamos que todos los items del array sean strings
  for (const item of sut) {
    expect(typeof item).toBe('string')
  }

  //3. comparamos que el array tenga solo 3 items
  expect(sut.length).toBe(3)
})

test('filterA, dado un array de strings devuelve un array de los strings que empiezan por "a"', () => {
  //GIVEN
  const arrayList = [27, 88, 'gos', 'gat', '111', 'auto', '', 'arrow']
  //WHEN
  const sut = filterA(arrayList)
  //THEN

  //1.comparamos que tenga el contenido ['auto', 'arrow'] en cualquier orden
  expect(sut).toEqual(expect.arrayContaining(['auto', 'arrow']))

  //2.comparamos que todos los items del array sean strings y que comiencen por la letra "a"
  for (const item of sut) {
    expect(typeof item).toBe('string')
    expect(item[0]).toBe('a')
  }

  //3. comparamos que el array tenga solo 2 items
  expect(sut.length).toBe(2)
})

test('getRepeatedWord al darle una lista de strings (con palabras repetidas) devuelva el número de repeticiones de la palabra que más veces aparezca', () => {
  //GIVEN
  const words = [
    'gato',
    'zapato',
    'patata',
    'zapato',
    'zapato',
    'gato',
  ]
  //WHEN
  const sut = getRepeatedWord(words);
  //THEN
  expect(sut).toBe(3);
});

test('filtrarProductosMasCaros al darle un array de objetos producto (con nombre y precio) devuelva un array de los objetos que sean más caros de 10', () => {

  //GIVEN
  const products = [
    { nombre: 'x', precio: 10 },
    { nombre: 's', precio: 8 },
    { nombre: 'f', precio: 10 },
    { nombre: 'h', precio: 12 },
    { nombre: 'd', precio: 9 },
    { nombre: 'a', precio: 7 },
    { nombre: 'g', precio: 11 },
  ];
  //WHEN
  const sut = filtrarProductosMasCaros(products);
  console.log(sut);
  //THEN
  expect(sut).toEqual([{ nombre: 'h', precio: 12 }, { nombre: 'g', precio: 11 }])
});
