var addListings = function (data) {
  var $ul = $('#listings');

    for(var i = 0; i < data.length; i++) {
      var $li = $('<li></li>');
      $li.html(data[i].name +' - ' + data[i].address + ' - ' + data[i].price);
      $ul.append($li);
    }
}

// var testData = [{name : 'John', address : 'San Francisco', price : '1.00'},
//   {name : 'David', address : 'Germany', price : '600000000.00'}]

$(function () {
  // addListings(testData);
  $.get("/rent", function (data) {
   addListings(data);
  });
});
