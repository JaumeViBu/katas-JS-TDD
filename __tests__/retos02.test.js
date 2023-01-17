const {
  listaProductsOrdenedByPrice,
  getUnfinishedTasks,
} = require('../src/retos02.js');

//
test('listaProductsOrdenedByPrice devuelve  una lista de productos de baratos a caros ', () => {
  //GIVEN
  const listProducts = [
    { nombre: 'patatas', precio: 2 },
    { nombre: 'zanahoria', precio: 1 },
    { nombre: 'manzanas', precio: 3 },
  ]
  //WHEN
  const sut = listaProductsOrdenedByPrice(listProducts)
  //THEN
  expect(sut).toEqual([
    { nombre: 'zanahoria', precio: 1 },
    { nombre: 'patatas', precio: 2 },
    { nombre: 'manzanas', precio: 3 },
  ])
});

test('getUnfinishedTasks al darle un array de objetos ’tarea’ (con atributos de: title <string> / isDone<bool>) devuelva otra lista con solamente las tareas no terminadas.', () => {
  //GIVEN
  const taskList = [
    { title: 'asdasda', isDone: true },
    { title: 'kjhkgmg', isDone: false },
    { title: 'fasfdafd', isDone: true },
    { title: 'fghfghfghf', isDone: true },
    { title: 'eryeryety', isDone: false },
    { title: 'xcvbxcb', isDone: false },
    { title: 'hjkhjkhjk', isDone: true },
  ];
  //WHEN
  const sut = getUnfinishedTasks(taskList);
  //THEN
  expect(sut).toEqual([{ title: 'kjhkgmg', isDone: false }, { title: 'eryeryety', isDone: false }, { title: 'xcvbxcb', isDone: false },]);
});




