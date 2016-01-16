exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async: function (value) {
    var dfd = $.Deferred();
    setTimeout(function () {
      dfd.resolve(value);
    }, 10);
    return dfd.promise();
  },

  manipulateRemoteData: function (url) {
    var dfd = $.Deferred();
    $.getJSON(url).then(function (result) {
      var arr = $.map(result.people, function (person) {
        return person.name;
      });
      dfd.resolve(arr.sort());
    });
    return dfd.promise();
  }
};