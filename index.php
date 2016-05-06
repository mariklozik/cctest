<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>CyberCraft test</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.0/backbone-min.js"></script>
    <script src="js/script.js"></script>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
        google.charts.load('current', {'packages': ['line', "corechart", "bar"]});
        function drawChart1(datalk) {
            var data = google.visualization.arrayToDataTable(datalk);
            var options = {
                width: 1600,
                height: 400,
                bars: 'vertical',
            };
            var chart = new google.charts.Bar(document.getElementById('linechart_material1'));
            chart.draw(data, options);
        }
        function drawChart2(datalk) {
            var data = google.visualization.arrayToDataTable(datalk);
            var options = {
                width: 1600,
                height: 400,
                bars: 'vertical',
            };
            var chart = new google.charts.Bar(document.getElementById('linechart_material2'));
            chart.draw(data, options);
        }
    </script>
</head>
<body>

<div class="wrapper">
    <input type="file" id="fileinput"/>
    <div id="linechart_material1"></div>
    <div id="linechart_material2"></div>
</div>

</body>
</html>