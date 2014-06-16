// Create a map in the div #map
var map = L.mapbox.map('map', 'americanredcross.ic3dd063')
    .setView([31.66,-92.317],6);

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Population'],
    ['Bhutan', 5813],
    ['Burma', 11351],
    ['Burundi', 832],
    ['Cuba', 1161],
    ['Democratic Republic of the Congo', 1332],
    ['Eritrea', 878],
    ['Iran', 1080],
    ['Iraq', 5759],
    ['Somalia', 1801],
    ['Thailand', 578]
  ]);

  var options = {
    titleTextStyle: {color:'white', fontName:'Cisalpin'},
    legendTextStyle: {color:'white', fontName:'Cisalpin'},
    pieHole: 0.4,
    backgroundColor:'none',
    };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}
