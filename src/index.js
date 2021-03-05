
exports.min = function min (array) {
  if(typeof array == 'undefined' || array.length == 0) return 0;
  let min = array[0];
  for(let i = 1, len = array.length; i < len; i++) {
    if(array[i] < min) min = array[i];
  }
  return min;
}

exports.max = function max (array) {
  if(typeof array == 'undefined' || array.length == 0) return 0;
  let max = array[0];
  for(let i = 1, len = array.length; i < len; i++) {
    if(array[i] > max) max = array[i];
  }
  return max;
}

exports.avg = function avg (array) {
  if(typeof array == 'undefined' || array.length == 0) return 0;
  let avg = 0, len = array.length;
  for(let i = 0; i < len; i++) {
    avg += array[i];
  }
  return avg / len;
}
