// Create a map in the div #map
var map = L.mapbox.map('map', 'americanredcross.iccb530e')
    .setView([47.2,-117.5],6);

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Population'],
    ['Bhutan',      2262],
    ['Burma',     3011],
    ['Cuba',  224],
    ['Democratic Republic of the Congo', 176],
    ['Eritrea',      441],
    ['Former USSR',  2061],
    ['Iran',     467],
    ['Iraq', 1684],
    ['Somalia',    880],
    ['Vietnam',    174]
  ]);

  var options = {
    // title: 'Refugee Population in Washington',
    titleTextStyle: {color:'white', fontName:'Cisalpin'},
    legendTextStyle: {color:'white', fontName:'Cisalpin'},
    pieHole: 0.4,
    backgroundColor:'none',
    };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}
