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

    for (i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i = i - 1;
        len = len - 1;
      }
    }
    return arr;
  },

  append: function (arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function (arr) {
    arr.splice(-1, 1);
    return arr;
  },

  prepend: function (arr, item) {
    var newArr = [];
    newArr.push(item);
    for (var i = 0; i < arr.length; i++) {
      newArr.push(arr);
    }
    return newArr;
  },

  curtail: function (arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat: function (arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function (arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function (arr, item) {
    var sum = 0;
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        sum += 1;
      }
    }
    return sum;
  },

  duplicates: function (arr) {
    arr.sort();
    var i,
      len,
      duplicatesArray = [],
      obj = {};

    for (i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === arr[i + 1]) {
        obj[arr[i]] = 0;
      }
    }
    for (i in obj) {
      duplicatesArray.push(Number(i));
    }
    return duplicatesArray;
  },

  square: function (arr) {
    for (var i = 0, len = arr.length; i < len; i++) {
      arr[i] = arr[i] * arr[i];
    }
    return arr;
  },

  findAllOccurrences: function (arr, target) {
    var newArr = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      if(arr[i] === target) {
        newArr.push(i);
      }
    }
    return newArr;
  }
};