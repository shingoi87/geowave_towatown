var wms_layers = [];


        var lyr_CS_0 = new ol.layer.Tile({
            'title': 'CS立体図（高知県）',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://rinya-kochi.geospatial.jp/2023/rinya/tile/csmap/{z}/{x}/{y}.png'
            })
        });

        var lyr_google_1 = new ol.layer.Tile({
            'title': 'google 航空写真',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format___2 = new ol.format.GeoJSON();
var features___2 = format___2.readFeatures(json___2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___2.addFeatures(features___2);
var lyr___2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___2, 
                style: style___2,
                popuplayertitle: "行政界_土佐町",
                interactive: false,
                title: '<img src="styles/legend/__2.png" /> 行政界_土佐町'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: "国有林",
                interactive: false,
                title: '<img src="styles/legend/_3.png" /> 国有林'
            });
var format_Geowave_4 = new ol.format.GeoJSON();
var features_Geowave_4 = format_Geowave_4.readFeatures(json_Geowave_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geowave_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geowave_4.addFeatures(features_Geowave_4);
var lyr_Geowave_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geowave_4, 
                style: style_Geowave_4,
                popuplayertitle: "Geowave設置場所",
                interactive: true,
    title: 'Geowave設置場所<br />\
    <img src="styles/legend/Geowave_4_0.png" /> 親機<br />\
    <img src="styles/legend/Geowave_4_1.png" /> 中継機<br />'
        });

lyr_CS_0.setVisible(true);lyr_google_1.setVisible(true);lyr___2.setVisible(true);lyr__3.setVisible(true);lyr_Geowave_4.setVisible(true);
var layersList = [lyr_CS_0,lyr_google_1,lyr___2,lyr__3,lyr_Geowave_4];
lyr___2.set('fieldAliases', {'N03_001': 'N03_001', 'N03_002': 'N03_002', 'N03_003': 'N03_003', 'N03_004': 'N03_004', 'N03_005': 'N03_005', 'N03_006': 'N03_006', 'N03_007': 'N03_007', });
lyr__3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PREFEC_CD': 'PREFEC_CD', 'AREA_CD': 'AREA_CD', 'CTV_NAME': 'CTV_NAME', 'FIS_YEAR': 'FIS_YEAR', 'THEMA_NO': 'THEMA_NO', 'LAYER_NO': 'LAYER_NO', 'OBJ_NAME': 'OBJ_NAME', 'AREA_SIZE': 'AREA_SIZE', 'IOSIDE_DIV': 'IOSIDE_DIV', 'REMARK_STR': 'REMARK_STR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Geowave_4.set('fieldAliases', {'No.': 'No.', '区分': '区分', '設置候補地': '設置候補地', '所有者等': '所有者等', 'field_5': 'field_5', '重要度／目': '重要度／目', '想定ルート': '想定ルート', '緯度経度': '緯度経度', '経度': '経度', 'アクセス': 'アクセス', '日照条件': '日照条件', '設置許可': '設置許可', '設置場所の': '設置場所の', 'その他／詳': 'その他／詳', '状況': '状況', });
lyr___2.set('fieldImages', {'N03_001': 'TextEdit', 'N03_002': 'TextEdit', 'N03_003': 'TextEdit', 'N03_004': 'TextEdit', 'N03_005': 'TextEdit', 'N03_006': 'TextEdit', 'N03_007': 'TextEdit', });
lyr__3.set('fieldImages', {'OBJECTID': 'TextEdit', 'PREFEC_CD': 'Range', 'AREA_CD': 'Range', 'CTV_NAME': 'TextEdit', 'FIS_YEAR': 'TextEdit', 'THEMA_NO': 'Range', 'LAYER_NO': 'Range', 'OBJ_NAME': 'TextEdit', 'AREA_SIZE': 'TextEdit', 'IOSIDE_DIV': 'Range', 'REMARK_STR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Geowave_4.set('fieldImages', {'No.': 'TextEdit', '区分': 'TextEdit', '設置候補地': 'TextEdit', '所有者等': 'TextEdit', 'field_5': 'TextEdit', '重要度／目': 'TextEdit', '想定ルート': 'TextEdit', '緯度経度': 'TextEdit', '経度': 'TextEdit', 'アクセス': 'TextEdit', '日照条件': 'TextEdit', '設置許可': 'TextEdit', '設置場所の': 'TextEdit', 'その他／詳': 'TextEdit', '状況': 'TextEdit', });
lyr___2.set('fieldLabels', {'N03_001': 'no label', 'N03_002': 'no label', 'N03_003': 'no label', 'N03_004': 'no label', 'N03_005': 'no label', 'N03_006': 'no label', 'N03_007': 'no label', });
lyr__3.set('fieldLabels', {'OBJECTID': 'no label', 'PREFEC_CD': 'no label', 'AREA_CD': 'no label', 'CTV_NAME': 'no label', 'FIS_YEAR': 'no label', 'THEMA_NO': 'no label', 'LAYER_NO': 'no label', 'OBJ_NAME': 'no label', 'AREA_SIZE': 'no label', 'IOSIDE_DIV': 'no label', 'REMARK_STR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Geowave_4.set('fieldLabels', {'No.': 'no label', '区分': 'no label', '設置候補地': 'no label', '所有者等': 'no label', 'field_5': 'no label', '重要度／目': 'no label', '想定ルート': 'no label', '緯度経度': 'no label', '経度': 'no label', 'アクセス': 'no label', '日照条件': 'no label', '設置許可': 'no label', '設置場所の': 'no label', 'その他／詳': 'no label', '状況': 'no label', });
lyr_Geowave_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});