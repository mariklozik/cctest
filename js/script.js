$( document ).ready(function() {
    var FileUploadModel = Backbone.Model.extend({
        initialize: function(){
            console.log('створений новий екземпляр моделі');
        },
        csvParse: function(allText){
            var allTextLines = allText.split(/\r\n|\n/);
            var headers = allTextLines[0].split(',');
            var lines = [];
            for (var i=1; i<allTextLines.length; i++) {
                var data = allTextLines[i].split(',');
                if (data.length == headers.length) {
                    var tarr = [];
                    for (var j=0; j<headers.length; j++) {
                        tarr.push(/*headers[j]+":"+*/data[j]);
                    }
                    lines.push(tarr);
                }
            }
            return lines;
        },
        getColumns: function(cols,data){
            var temp = [];
            var graph = [];

            for (var i in data){
                temp = [];
                for (var j in cols){
                    temp.push(data[i][cols[j]]);
                }
                graph.push(temp);
            }
            return graph;
        },
        drawFunc: function(csv){
            var csvdata = this.csvParse(csv);
            drawChart1(this.getColumns([2,3],csvdata));
            drawChart2(this.getColumns([2,4],csvdata));
            console.log(csvdata);
        },
    });
    var FileUploadView = Backbone.View.extend({
        el: '.wrapper',

        initialize: function() {
            console.log('Створений новий екземпляр виду');
        },
        events: {
            'change #fileinput':'uploadfile',
        },
        uploadfile: function(){
            var file = document.getElementById('fileinput').files[0];
            console.log("name : " + file.name);

            var reader = new FileReader();
            var that = this;
            reader.onload = function(e) {
                that.model.drawFunc(reader.result);
            };
            reader.readAsText(file);
        },
    });

    var fileUploadModel = new FileUploadModel ({
    });

    var fileUploadView = new FileUploadView({
        model:fileUploadModel,

    });
});