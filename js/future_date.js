$(function() {

var today = new Date();

$(".date").each(function(i, item) {

  // s = '01-12-2018'
  var s = $(item).html();
  var p = s.split('-');

  var d = new Date(p[2], p[1]-1, p[0]);
  if (d > today)
    $(item).html('<b><i>'+s+'</i></b>');
});

});
