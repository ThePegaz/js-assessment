exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber: function (str) {
    var regex = /\d/;
    if (regex.exec(str)) {
      return true;
    }
    return false;
  },

  containsRepeatingLetter: function (str) {
    var regex = /([a-zA-Z])\1{1,}/;
    if (regex.exec(str)) {
      return true;
    }
    return false;
  },

  endsWithVowel: function (str) {
    var regex = /[aeiou]{1}$/i;
    if (regex.exec(str)) {
      return true;
    }
    return false;
  },

  captureThreeNumbers: function (str) {
    var regex = /\d{3}/;
    var result = regex.exec(str);
    if (result) {
      return result[0];
    }
    return false;
  },

  matchesPattern: function (str) {
    var regex = /^\d{3}[-]\d{3}[-]\d{4}$/;
    var result = regex.exec(str);
    if (result) {
      return true;
    }
    return false;
  },
  isUSD: function (str) {
    var regex = /^\$[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$/;
    var result = regex.exec(str);
    if (result) {
      console.log("true: " + str);
      return true;
    }
    console.log("false: " + str);
    return false;
  }
};