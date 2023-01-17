const {
    listaProductsOrdenedByPrice,
  } = require('../src/retos02.js');

  //
test('devuelve  una lista de productos de baratos a caros ', () => {
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
  })
  