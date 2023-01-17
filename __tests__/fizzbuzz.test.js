const { fizzbuzz } = require('../src/fizzbuzz.js')

describe('fizzbuzz', () => {
  test('Para multiplos de 3 devuelve "Fizz"', () => {
    //GIVEN
    const num = 9
    //WHEN
    const sut = fizzbuzz(num)
    //THEN
    expect(typeof sut).toBe('string')
    expect(sut).toBe('Fizz')
  })

  test('Para multiplos de 5 devuelve "Buzz"', () => {
    //GIVEN
    const num = 10
    //WHEN
    const sut = fizzbuzz(num)
    //THEN
    expect(typeof sut).toBe('string')
    expect(sut).toBe('Buzz')
  })

  test('Para multiplos de 3 y 5 devuelve "FizzBuzz"', () => {
    //GIVEN
    const num = 15
    //WHEN
    const sut = fizzbuzz(num)
    //THEN
    expect(typeof sut).toBe('string')
    expect(sut).toBe('FizzBuzz')
  })

  test('Para los que no sean multiplos ni de 3 ni de 5, devuelve el numero', () => {
    //GIVEN
    const num = 4
    //WHEN
    const sut = fizzbuzz(num)
    //THEN
    expect(typeof sut).toBe('number')
    expect(sut).toBe(4)
  })
})
