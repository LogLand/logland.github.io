var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ABFoothills_1 = new ol.format.GeoJSON();
var features_ABFoothills_1 = format_ABFoothills_1.readFeatures(json_ABFoothills_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ABFoothills_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ABFoothills_1.addFeatures(features_ABFoothills_1);
var lyr_ABFoothills_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ABFoothills_1, 
                style: style_ABFoothills_1,
                popuplayertitle: 'AB-Foothills',
                interactive: false,
                title: '<img src="styles/legend/ABFoothills_1.png" /> AB-Foothills'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ABFoothills_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ABFoothills_1];
lyr_ABFoothills_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'folders': 'folders', 'description': 'description', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr_ABFoothills_1.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'folders': 'TextEdit', 'description': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', });
lyr_ABFoothills_1.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'folders': 'no label', 'description': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr_ABFoothills_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});