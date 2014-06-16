// Create a map in the div #map
var map = L.mapbox.map('map', 'americanredcross.ic0afiln')
    .setView([34.2,-108.298],6);

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Population'],
    ['Bhutan', 2628],
    ['Burma', 2826],
    ['Burundi', 352],
    ['Cuba', 472],
    ['Democratic Republic of the Congo', 574],
    ['Eritrea', 553],
    ['Iran', 404],
    ['Iraq', 4663],
    ['Somalia', 1261],
    ['Thailand', 255]
  ]);

  var options = {
    // title: 'Refugee Population in Arizona',
    titleTextStyle: {color:'white', fontName:'Cisalpin'},
    legendTextStyle: {color:'white', fontName:'Cisalpin'},
    pieHole: 0.4,
    backgroundColor:'none',
    };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}
