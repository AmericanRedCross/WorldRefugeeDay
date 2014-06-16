// Create a map in the div #map
var map = L.mapbox.map('map', 'americanredcross.iccb8oo7')
    .setView([46.294,-90.5],6);

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Population'],
      ['Bhutan', 698],
      ['Burma', 3285],
      ['Eritrea', 98],
      ['Ethiopia', 384],
      ['Former USSR', 292],
      ['Iraq', 497],
      ['Laos', 105],
      ['Liberia', 171],
      ['Somalia', 2018],
      ['Thailand', 233]
    ]);

  var options = {
    // title: 'Refugee Population in Minnesota',
    titleTextStyle: {color:'white', fontName:'Cisalpin'},
    legendTextStyle: {color:'white', fontName:'Cisalpin'},
    pieHole: 0.4,
    backgroundColor:'none',
    };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}
