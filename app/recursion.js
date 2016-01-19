exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function (data, dirName) {
    var arr = [];

    function iterateRecursively(data) {
      // console.log(data);
      for (var prop in data) {
        if (data.hasOwnProperty(prop)) {
          if (typeof data[prop] === 'string' && prop !== 'dir') {
            // console.log("push " + data[prop]);
            arr.push(data[prop]);
          } else if (typeof data[prop] === 'object') {
            // console.log("starting recursion");
            iterateRecursively(data[prop]);
          }
        }
      }
    }

    function iterateRecursivelyDir(data, dirFound) {
      for (var prop in data) {
        if (data.hasOwnProperty(prop)) {
          if (dirFound) {
            // console.log("DIRFOUND TRUE");
            if (typeof data[prop] === 'string' && prop !== 'dir') {
              // console.log("push " + data[prop]);
              arr.push(data[prop]);
            } else if (typeof data[prop] === 'object') {
              // console.log("starting recursion");
              iterateRecursivelyDir(data[prop], dirFound);
            }
          } else {
            if (prop === 'dir' && data[prop] === dirName) {
              // console.log("Dir found: " + data[prop]);
              dirFound = true;
            } else if (typeof data[prop] === 'object') {
              // console.log("starting recursion");
              iterateRecursivelyDir(data[prop], dirFound);
            }
          }
        }
      }
    }

    if (dirName === undefined) {
      // console.log("NO DIR");
      iterateRecursively(data);
    } else {
      // console.log("DIR");
      // console.log(data);
      iterateRecursivelyDir(data, false);
    }
    return arr;
  },

  permute: function (arr) {
    var temp = [];
    var answer = [];

    return doIt(arr);

    function doIt(a) {
      var i, len, item;

      for (i = 0, len = arr.length; i < len; i++) {
        // remove the item at index i
        item = arr.splice(i, 1)[0];
        // add that item to the array we're building up
        temp.push(item);

        if (arr.length) {
          // if there's still anything left in the array,
          // recurse over what's left
          doIt(arr);
        } else {
          // otherwise, log the result and move on
          logResult();
        }

        // restore the item we removed at index i
        // and remove it from our temp array
        arr.splice(i, 0, item);
        temp.pop();
      }
      return answer;
    }

    function logResult() {
      answer.push(
        // make a copy of temp using .slice()
        // so we can continue to work with temp
        temp.slice()
      );
    }
  },

  fibonacci: function (n) {
    var fibArr = [0, 1];
    for (var i = 0; i < n - 1; i++) {
      var newFib = fibArr[i] + fibArr[i + 1];
      fibArr.push(newFib);
    }
    return fibArr[fibArr.length - 1];
  },

  validParentheses: function (n) {
    var arr = [];
    // How does the recursion work exactly?
    function brackets(openStock, closeStock, s) {
      // console.log("openStock: " + openStock + ", closeStock: " + closeStock + " " + s);
      if (openStock === 0 && closeStock === 0) {
        // console.log("push: " + s);
        arr.push(s);
      }
      if (openStock > 0) {
        brackets(openStock - 1, closeStock + 1, s + "(");
      }
      if (closeStock > 0) {
        brackets(openStock, closeStock - 1, s + ")");
      }
    }
    brackets(n, 0, "");
    return arr;
  }
};