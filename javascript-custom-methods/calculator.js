/* exported calculator */

var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (array) {
    let result = 0;
    for (let numIndex = 0; numIndex < array.length; numIndex++) {
      result += array[numIndex];
    }
    return result;
  },
  getAverage: function (array) {
    let result = 0;
    for (let numIndex = 0; numIndex < array.length; numIndex++) {
      result += array[numIndex];
    }
    return result / array.length;
  }
};
