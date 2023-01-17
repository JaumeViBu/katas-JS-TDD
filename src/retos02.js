
function listaProductsOrdenedByPrice(itemList) {
    const resultado = itemList.sort((itemA, itemB) => itemA.precio - itemB.precio);
    return resultado;
  }
  
  module.exports = {
    listaProductsOrdenedByPrice,
  }
  