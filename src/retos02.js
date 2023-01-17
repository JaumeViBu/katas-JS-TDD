
function listaProductsOrdenedByPrice(itemList) {
  const resultado = itemList.sort((itemA, itemB) => itemA.precio - itemB.precio);
  return resultado;
}

function getUnfinishedTasks(tasksList) {
  return tasksList.filter(task => task.isDone == false);
}

function getAdminsSorted(userList) {
  let resultado = userList.filter(user => user.rol == 'admin');
  resultado = resultado.sort((a, b) => {
    if (a.nombre < b.nombre) {
      return -1;
    }
    if (a.nombre > b.nombre) {
      return 1;
    }
    return 0;
  });
  return resultado;
}

module.exports = {
  listaProductsOrdenedByPrice,
  getUnfinishedTasks,
  getAdminsSorted,
}
