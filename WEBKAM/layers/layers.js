var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_PetaKecamatanPati_0 = new ol.format.GeoJSON();
var features_PetaKecamatanPati_0 = format_PetaKecamatanPati_0.readFeatures(json_PetaKecamatanPati_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetaKecamatanPati_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PetaKecamatanPati_0.addFeatures(features_PetaKecamatanPati_0);var lyr_PetaKecamatanPati_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PetaKecamatanPati_0, 
                style: style_PetaKecamatanPati_0,
    title: 'Peta Kecamatan Pati<br />\
    <img src="styles/legend/PetaKecamatanPati_0_0.png" /> Batangan<br />\
    <img src="styles/legend/PetaKecamatanPati_0_1.png" /> Cluwak<br />\
    <img src="styles/legend/PetaKecamatanPati_0_2.png" /> Dukuhseti<br />\
    <img src="styles/legend/PetaKecamatanPati_0_3.png" /> Gabus<br />\
    <img src="styles/legend/PetaKecamatanPati_0_4.png" /> Gembong<br />\
    <img src="styles/legend/PetaKecamatanPati_0_5.png" /> Gunungwungkal<br />\
    <img src="styles/legend/PetaKecamatanPati_0_6.png" /> Jaken<br />\
    <img src="styles/legend/PetaKecamatanPati_0_7.png" /> Jakenan<br />\
    <img src="styles/legend/PetaKecamatanPati_0_8.png" /> Juwana<br />\
    <img src="styles/legend/PetaKecamatanPati_0_9.png" /> Kayen<br />\
    <img src="styles/legend/PetaKecamatanPati_0_10.png" /> Margorejo<br />\
    <img src="styles/legend/PetaKecamatanPati_0_11.png" /> Margoyoso<br />\
    <img src="styles/legend/PetaKecamatanPati_0_12.png" /> Pati<br />\
    <img src="styles/legend/PetaKecamatanPati_0_13.png" /> Pucakwangi<br />\
    <img src="styles/legend/PetaKecamatanPati_0_14.png" /> Sukoilo<br />\
    <img src="styles/legend/PetaKecamatanPati_0_15.png" /> Tamboakromo<br />\
    <img src="styles/legend/PetaKecamatanPati_0_16.png" /> Tayu<br />\
    <img src="styles/legend/PetaKecamatanPati_0_17.png" /> Tlogowungu<br />\
    <img src="styles/legend/PetaKecamatanPati_0_18.png" /> Trangkil<br />\
    <img src="styles/legend/PetaKecamatanPati_0_19.png" /> Wedarijaksa<br />\
    <img src="styles/legend/PetaKecamatanPati_0_20.png" /> Winong<br />\
    <img src="styles/legend/PetaKecamatanPati_0_21.png" /> <br />'
        });

lyr_PetaKecamatanPati_0.setVisible(true);
var layersList = [baseLayer,lyr_PetaKecamatanPati_0];
lyr_PetaKecamatanPati_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', '2020': '2020', '2021': '2021', });
lyr_PetaKecamatanPati_0.set('fieldImages', {'Kecamatan': 'TextEdit', '2020': 'TextEdit', '2021': 'TextEdit', });
lyr_PetaKecamatanPati_0.set('fieldLabels', {'Kecamatan': 'inline label', '2020': 'inline label', '2021': 'inline label', });
lyr_PetaKecamatanPati_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});