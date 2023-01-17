function maxNumber(list) {
  let max = list[0]
  for (let i = 1; i < list.length; i++) {
    max = list[i] > max ? list[i] : max
  }
  return max
}

function sumaPares(list) {
  let suma = 0
  for (const item of list) {
    if (item % 2 == 0) suma += item
    // suma += item%2==0 ? item:0;
  }
  return suma
}

function filterStrings(list) {
  const listaStrings = list.filter((item) => {
    return typeof item == 'string'
  })

  return listaStrings
}

function filterA(listaStrings) {
  //to do
}

module.exports = {
  maxNumber,
  sumaPares,
  filterStrings,
  filterA,
}
