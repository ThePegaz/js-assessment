exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    var index = -1;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        index = i;
      }
    }
    return index;
  },

  sum: function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },

  remove: function (arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  removeWithoutCopy: function (arr, item) {
    var i, len;

    for(i = 0, len = arr.length; i < len; i++) {
      if(arr[i] === item) {
        arr.splice(i, 1);
        i = i - 1;
        len = len - 1;
      }
    }
    return arr;
  },

  append: function (arr, item) {

  },

  truncate: function (arr) {

  },

  prepend: function (arr, item) {

  },

  curtail: function (arr) {

  },

  concat: function (arr1, arr2) {

  },

  insert: function (arr, item, index) {

  },

  count: function (arr, item) {

  },

  duplicates: function (arr) {

  },

  square: function (arr) {

  },

  findAllOccurrences: function (arr, target) {

  }
};