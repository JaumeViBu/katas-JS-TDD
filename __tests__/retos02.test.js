const {
  listaProductsOrdenedByPrice,
  getUnfinishedTasks,
  getAdminsSorted,
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

test('getAdminsSorted al darle una lista de objetos usuario (con nombre<string> y rol<string>) devuelva otra lista de los usuarios que contenga solamente los usuarios administradores (’admin’) ordenados alfabéticamente por el nombre.', () => {
  //GIVEN
  const users = [
    { nombre: 'sergi', rol: 'admin' },
    { nombre: 'david', rol: 'user' },
    { nombre: 'andrea', rol: 'admin' },
  ];
  //WHEN
  const sut = getAdminsSorted(users);
  console.log(sut);
  //THEN
  expect(sut).toEqual([{ nombre: 'andrea', rol: 'admin' }, { nombre: 'sergi', rol: 'admin' },]);
});




