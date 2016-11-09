(function (global, $, Rx) {

  // Search Wikipedia for a given term

  function main() {
    var $input = $('#barcode');

    // Get all distinct key up events from the input and only fire if long enough and distinct
    var keyup = Rx.Observable.fromEvent($input, 'keyup')
      .filter(function (e) {
        return e.which >= 48 && e.which <= 57
      })
      .map(function (e) {
        return String.fromCharCode(e.which)
      })
      .filter(function (text) {
        return text.length >= 10; // Only if the text is longer than 10 characters
      })
      .distinctUntilChanged(); // Only if the value has changed


    keyup.subscribe(
      function (data) {
        console.log(data);
      },
      function (error) {
        console.log(error);
      });
  }

  $(main);

}(window, jQuery, Rx));
