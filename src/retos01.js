function maxNumber(list) {
  max = list[0];
  for (let i = 1; i < list.length; i++) {

    max = list[i] > max ? list[i] : max;
  }
  return max;
}

function sumaPares(list) {

}

module.exports = {
  maxNumber,
  sumaPares,
};