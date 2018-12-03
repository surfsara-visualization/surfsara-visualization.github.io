$(function() {

var today = new Date();

// XXX prepend site baseurl
$.getJSON( "/events.json", function( events ) {

  var items = [];

  // Iterate in reverse, as newest entry is at the start
  for (var i = events.length-1; i >= 0 ; i--)
  {
    var entry = events[i];

    // s = '01-12-2018'
    var s = entry.date;
    var p = s.split('-');
    var d = new Date(p[2], p[1]-1, p[0]);
    if (d >= today)
    {
      var l = entry.event;
      if (entry.event_link)
        l = "<a href=\"" + entry.event_link + "\">" + entry.event + "</a>";
      items.push( "<tr><td nowrap style='vertical-align: top'>" + entry.date + "<td><i>" + l + "</i></tr>" );
    }
  }

  if (items.length > 0)
  {
    var table = "<table>" + items.join( "" ) + "</table>";
    $('#upcoming_events').html(table);
  }
  else
    $('#upcoming_events').html("<i>None at the moment</i>");

});

});
