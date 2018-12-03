$(function() {

var today = new Date();

// XXX prepend site baseurl
$.getJSON( "/courses.json", function( courses ) {

  var items = [];

  // Iterate in reverse, as newest entry is at the start
  for (var i = courses.length-1; i >= 0 ; i--)
  {
    var entry = courses[i];

    // s = '01-12-2018'
    var s = entry.date;
    var p = s.split('-');
    var d = new Date(p[2], p[1]-1, p[0]);
    if (d >= today)
    {
      var l = entry.description;
      if (entry.link)
        l = "<a href=\"" + entry.link + "\">" + entry.description + "</a>";
      items.push( "<tr><td nowrap style='vertical-align: top'>" + entry.date + "<td><i>" + l + "</i> @ " + entry.location + "</tr>" );
    }
  }

  if (items.length > 0)
  {
    var table = "<table>" + items.join( "" ) + "</table>";
    $('#upcoming_courses').html(table);
  }
  else
    $('#upcoming_courses').html("<i>None at the moment</i>");

});

});
