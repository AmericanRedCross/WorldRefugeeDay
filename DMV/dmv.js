// Create a map in the div #map
var map = L.mapbox.map('map', 'americanredcross.iccbb88b')
    .setView([38.72,-76.459],6);

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Population'],
    ['Bhutan', 3801],
    ['Burma', 2275],
    ['Burundi', 206],
    ['Cuba', 207],
    ['Democratic Republic of the Congo', 243],
    ['Eritrea', 650],
    ['Ethiopia', 246],
    ['Iran', 623],
    ['Iraq', 3246],
    ['Somalia', 298]
  ]);

  var options = {
    titleTextStyle: {color: 'white', fontName: 'Cisalpin'},
    legendTextStyle: {color: 'white', fontName: 'Cisalpin'},
    pieHole: 0.4,
    backgroundColor: 'none'
    };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}
