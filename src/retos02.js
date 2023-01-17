
function listaProductsOrdenedByPrice(itemList) {
  const resultado = itemList.sort((itemA, itemB) => itemA.precio - itemB.precio);
  return resultado;
}

function getUnfinishedTasks(tasksList) {
  return tasksList.filter(task => task.isDone == false);
}

module.exports = {
  listaProductsOrdenedByPrice,
  getUnfinishedTasks,
}
