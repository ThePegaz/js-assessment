exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function (num, bit) {
    return 1 & (num >> (bit - 1));
  },

  base10: function (str) {
    return parseInt(str, 2);
  },

  convertToBinary: function (num) {
    var binaryString = num.toString(2);
    var addZeros = "";
    if (binaryString.length < 8) {
      var len = 8 - binaryString.length;
      for (var i = 0; i < len; i++) {
        addZeros = "0" + addZeros;
      }
    }
    return addZeros + binaryString;
  },

  multiply: function (a, b) {
    // console.log(a);
    // console.log(b);
    a = adjust(a);
    b = adjust(b);
    // console.log(a.adjusted + " * " + b.adjusted + " / " + a.multiplier + " * " + b.multiplier);
    var result = (a.adjusted * b.adjusted) / (a.multiplier * b.multiplier);
    // console.log("Result: " + result);
    return result;

    function adjust(num) {
      var exponent, multiplier;

      if (num < 1) {
        // console.log("Math.log(num) * -1 : " + Math.log(num) * -1);
        exponent = Math.floor(Math.log(num) * -1);
        // console.log("Exponent: " + exponent);
        multiplier = Math.pow(10, exponent);
        // console.log("Multiplier: " + multiplier);
        
        return {
          adjusted: num * multiplier,
          multiplier: multiplier
        };
      }

      return {
        adjusted: num,
        multiplier: 1
      };
    }
  }
};