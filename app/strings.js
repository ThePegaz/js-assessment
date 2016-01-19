exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function (str, amount) {
    var newStr = "";

    function trimString(str) {
      if (str.length > 0) {
        var firstChar = str.charAt(0);
        var regex = new RegExp("^(" + firstChar + ")\\1{0,}");
        var chars = regex.exec(str);
        if (chars) {
          if (chars[0].length > amount) {
            newStr = newStr + chars[0].substring(0, amount);
            trimString(str.substring(chars[0].length, str.length));
          } else {
            newStr = newStr + chars[0];
            trimString(str.substring(chars[0].length, str.length));
          }
        }
      }
    }
    trimString(str);
    return newStr;
  },
  wordWrap: function (str, cols) {

  },
  reverseString: function (str) {
    return str.split('').reverse().join('');
  }
};