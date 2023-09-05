var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRISatellite_2 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_regionKLPBOline_3 = new ol.format.GeoJSON();
var features_regionKLPBOline_3 = format_regionKLPBOline_3.readFeatures(json_regionKLPBOline_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_regionKLPBOline_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_regionKLPBOline_3.addFeatures(features_regionKLPBOline_3);
var lyr_regionKLPBOline_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_regionKLPBOline_3, 
                style: style_regionKLPBOline_3,
                interactive: true,
    title: 'region KL PBO line<br />\
    <img src="styles/legend/regionKLPBOline_3_0.png" /> Central Business District<br />\
    <img src="styles/legend/regionKLPBOline_3_1.png" /> KLCC-Golden Triangle<br />\
    <img src="styles/legend/regionKLPBOline_3_2.png" /> Suburban<br />\
    <img src="styles/legend/regionKLPBOline_3_3.png" /> Within City Centre<br />'
        });
var format_PBOrental_shp_4 = new ol.format.GeoJSON();
var features_PBOrental_shp_4 = format_PBOrental_shp_4.readFeatures(json_PBOrental_shp_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PBOrental_shp_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBOrental_shp_4.addFeatures(features_PBOrental_shp_4);cluster_PBOrental_shp_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PBOrental_shp_4
});
var lyr_PBOrental_shp_4 = new ol.layer.Vector({
                declutter: true,
                source:cluster_PBOrental_shp_4, 
                style: style_PBOrental_shp_4,
                interactive: true,
                title: '<img src="styles/legend/PBOrental_shp_4.png" /> PBO rental_shp'
            });
var format_Railwaystation_UPT_5 = new ol.format.GeoJSON();
var features_Railwaystation_UPT_5 = format_Railwaystation_UPT_5.readFeatures(json_Railwaystation_UPT_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railwaystation_UPT_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railwaystation_UPT_5.addFeatures(features_Railwaystation_UPT_5);
var lyr_Railwaystation_UPT_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Railwaystation_UPT_5, 
                style: style_Railwaystation_UPT_5,
                interactive: true,
                title: '<img src="styles/legend/Railwaystation_UPT_5.png" /> Railway station_UPT'
            });
var format_RAILWAY_6 = new ol.format.GeoJSON();
var features_RAILWAY_6 = format_RAILWAY_6.readFeatures(json_RAILWAY_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RAILWAY_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAILWAY_6.addFeatures(features_RAILWAY_6);
var lyr_RAILWAY_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RAILWAY_6, 
                style: style_RAILWAY_6,
                interactive: true,
                title: '<img src="styles/legend/RAILWAY_6.png" /> RAILWAY'
            });
var format_Hubdistance_7 = new ol.format.GeoJSON();
var features_Hubdistance_7 = format_Hubdistance_7.readFeatures(json_Hubdistance_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hubdistance_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hubdistance_7.addFeatures(features_Hubdistance_7);
var lyr_Hubdistance_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hubdistance_7, 
                style: style_Hubdistance_7,
                interactive: true,
                title: '<img src="styles/legend/Hubdistance_7.png" /> Hub distance'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_ESRISatellite_2.setVisible(true);lyr_regionKLPBOline_3.setVisible(true);lyr_PBOrental_shp_4.setVisible(true);lyr_Railwaystation_UPT_5.setVisible(true);lyr_RAILWAY_6.setVisible(true);lyr_Hubdistance_7.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OSMStandard_1,lyr_ESRISatellite_2,lyr_regionKLPBOline_3,lyr_PBOrental_shp_4,lyr_Railwaystation_UPT_5,lyr_RAILWAY_6,lyr_Hubdistance_7];
lyr_regionKLPBOline_3.set('fieldAliases', {'id': 'id', 'Region': 'Region', });
lyr_PBOrental_shp_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Railwaystation_UPT_5.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_RAILWAY_6.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_Hubdistance_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'HubName': 'HubName', 'HubDist': 'HubDist', });
lyr_regionKLPBOline_3.set('fieldImages', {'id': 'TextEdit', 'Region': 'TextEdit', });
lyr_PBOrental_shp_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Railwaystation_UPT_5.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_RAILWAY_6.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr_Hubdistance_7.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'HubName': 'TextEdit', 'HubDist': 'TextEdit', });
lyr_regionKLPBOline_3.set('fieldLabels', {'id': 'no label', 'Region': 'no label', });
lyr_PBOrental_shp_4.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'inline label', });
lyr_Railwaystation_UPT_5.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'inline label', });
lyr_RAILWAY_6.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_Hubdistance_7.set('fieldLabels', {'Name': 'inline label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'HubName': 'no label', 'HubDist': 'inline label', });
lyr_Hubdistance_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});