var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRIGraylight_1 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_reasdeabrangnciadeUBSDensiddemogrficahabkm_2 = new ol.format.GeoJSON();
var features_reasdeabrangnciadeUBSDensiddemogrficahabkm_2 = format_reasdeabrangnciadeUBSDensiddemogrficahabkm_2.readFeatures(json_reasdeabrangnciadeUBSDensiddemogrficahabkm_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasdeabrangnciadeUBSDensiddemogrficahabkm_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasdeabrangnciadeUBSDensiddemogrficahabkm_2.addFeatures(features_reasdeabrangnciadeUBSDensiddemogrficahabkm_2);
var lyr_reasdeabrangnciadeUBSDensiddemogrficahabkm_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reasdeabrangnciadeUBSDensiddemogrficahabkm_2, 
                style: style_reasdeabrangnciadeUBSDensiddemogrficahabkm_2,
                interactive: true,
    title: 'Áreas de abrangência de UBS - Densid.demográfica (hab/km²)<br />\
    <img src="styles/legend/reasdeabrangnciadeUBSDensiddemogrficahabkm_2_0.png" /> 13 - 7818<br />\
    <img src="styles/legend/reasdeabrangnciadeUBSDensiddemogrficahabkm_2_1.png" /> 7818 - 14568<br />\
    <img src="styles/legend/reasdeabrangnciadeUBSDensiddemogrficahabkm_2_2.png" /> 14568 - 21319<br />\
    <img src="styles/legend/reasdeabrangnciadeUBSDensiddemogrficahabkm_2_3.png" /> 21319 - 35408<br />\
    <img src="styles/legend/reasdeabrangnciadeUBSDensiddemogrficahabkm_2_4.png" /> 35408 - 72885<br />'
        });
var format_SupervisoTcnicadeSadeSTS_3 = new ol.format.GeoJSON();
var features_SupervisoTcnicadeSadeSTS_3 = format_SupervisoTcnicadeSadeSTS_3.readFeatures(json_SupervisoTcnicadeSadeSTS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SupervisoTcnicadeSadeSTS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SupervisoTcnicadeSadeSTS_3.addFeatures(features_SupervisoTcnicadeSadeSTS_3);
var lyr_SupervisoTcnicadeSadeSTS_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SupervisoTcnicadeSadeSTS_3, 
                style: style_SupervisoTcnicadeSadeSTS_3,
                interactive: true,
                title: '<img src="styles/legend/SupervisoTcnicadeSadeSTS_3.png" /> Supervisão Técnica de Saúde (STS)'
            });
var format_CoordenadoriaRegionaldeSadeCRS_4 = new ol.format.GeoJSON();
var features_CoordenadoriaRegionaldeSadeCRS_4 = format_CoordenadoriaRegionaldeSadeCRS_4.readFeatures(json_CoordenadoriaRegionaldeSadeCRS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordenadoriaRegionaldeSadeCRS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordenadoriaRegionaldeSadeCRS_4.addFeatures(features_CoordenadoriaRegionaldeSadeCRS_4);
var lyr_CoordenadoriaRegionaldeSadeCRS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordenadoriaRegionaldeSadeCRS_4, 
                style: style_CoordenadoriaRegionaldeSadeCRS_4,
                interactive: true,
                title: '<img src="styles/legend/CoordenadoriaRegionaldeSadeCRS_4.png" /> Coordenadoria Regional de Saúde (CRS)'
            });
var format_ProvisoHabitacional_5 = new ol.format.GeoJSON();
var features_ProvisoHabitacional_5 = format_ProvisoHabitacional_5.readFeatures(json_ProvisoHabitacional_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProvisoHabitacional_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProvisoHabitacional_5.addFeatures(features_ProvisoHabitacional_5);
var lyr_ProvisoHabitacional_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProvisoHabitacional_5, 
                style: style_ProvisoHabitacional_5,
                interactive: true,
                title: '<img src="styles/legend/ProvisoHabitacional_5.png" /> Provisão Habitacional'
            });
var format_Assentamentoprecrio_6 = new ol.format.GeoJSON();
var features_Assentamentoprecrio_6 = format_Assentamentoprecrio_6.readFeatures(json_Assentamentoprecrio_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Assentamentoprecrio_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Assentamentoprecrio_6.addFeatures(features_Assentamentoprecrio_6);
var lyr_Assentamentoprecrio_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Assentamentoprecrio_6, 
                style: style_Assentamentoprecrio_6,
                interactive: true,
    title: 'Assentamento precário<br />\
    <img src="styles/legend/Assentamentoprecrio_6_0.png" /> Abrigo/Alojamento<br />\
    <img src="styles/legend/Assentamentoprecrio_6_1.png" /> Favela<br />\
    <img src="styles/legend/Assentamentoprecrio_6_2.png" /> Núcleo<br />\
    <img src="styles/legend/Assentamentoprecrio_6_3.png" /> Ocupação de Terreno<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_ESRIGraylight_1.setVisible(true);lyr_reasdeabrangnciadeUBSDensiddemogrficahabkm_2.setVisible(true);lyr_SupervisoTcnicadeSadeSTS_3.setVisible(true);lyr_CoordenadoriaRegionaldeSadeCRS_4.setVisible(true);lyr_ProvisoHabitacional_5.setVisible(true);lyr_Assentamentoprecrio_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ESRIGraylight_1,lyr_reasdeabrangnciadeUBSDensiddemogrficahabkm_2,lyr_SupervisoTcnicadeSadeSTS_3,lyr_CoordenadoriaRegionaldeSadeCRS_4,lyr_ProvisoHabitacional_5,lyr_Assentamentoprecrio_6];
lyr_reasdeabrangnciadeUBSDensiddemogrficahabkm_2.set('fieldAliases', {'CNES': 'CNES', 'NOMEUBS': 'NOMEUBS', 'STS': 'STS', 'CRS': 'CRS', 'PERC_ESF': 'PERC_ESF', 'EAB': 'EAB', 'DENS_DEMOG': 'DENS_DEMOG', });
lyr_SupervisoTcnicadeSadeSTS_3.set('fieldAliases', {'Cod_STS': 'Cod_STS', 'STS': 'STS', 'STS_M': 'STS_M', 'STS_SSG': 'STS_SSG', 'X': 'X', 'Y': 'Y', 'STS_rotulo': 'STS_rotulo', 'ID_COD': 'ID_COD', });
lyr_CoordenadoriaRegionaldeSadeCRS_4.set('fieldAliases', {'CRS': 'CRS', 'AREA_KM2': 'AREA_KM2', });
lyr_ProvisoHabitacional_5.set('fieldAliases', {'id': 'id', 'id_hsp': 'id_hsp', 'id_sgm': 'id_sgm', 'meta': 'meta', 'name': 'name', 'endereco': 'endereco', 'subprefeit': 'subprefeit', 'a_tec_cons': 'a_tec_cons', 'ent_organ': 'ent_organ', 'his1': 'his1', 'his2': 'his2', 'hmp': 'hmp', 'r2v': 'r2v', 'nr': 'nr', 'total_uh': 'total_uh', 'programa': 'programa', 'subprogram': 'subprogram', 'st_empreen': 'st_empreen', 'dis': 'dis', 'sql_princi': 'sql_princi', 'sql_secund': 'sql_secund', 'incra': 'incra', 'zoneamento': 'zoneamento', 'area_terre': 'area_terre', 'gestao': 'gestao', 'hist_gesta': 'hist_gesta', });
lyr_Assentamentoprecrio_6.set('fieldAliases', {'gid': 'gid', 'uuid_id': 'uuid_id', 'nome': 'nome', 'nome_secun': 'nome_secun', 'localizaca': 'localizaca', 'categoria': 'categoria', 'totdomicil': 'totdomicil', 'fonte_totd': 'fonte_totd', 'data_totdo': 'data_totdo', 'anoocupaca': 'anoocupaca', 'propriedad': 'propriedad', 'propried_1': 'propried_1', 'nome_propr': 'nome_propr', 'prog_habit': 'prog_habit', 'areageo_m2': 'areageo_m2', 'alcaacesso': 'alcaacesso', 'embaixopon': 'embaixopon', 'rotatoriai': 'rotatoriai', 'aterrosani': 'aterrosani', 'embaixored': 'embaixored', 'sobreoleod': 'sobreoleod', 'sobrearean': 'sobrearean', 'sobreareac': 'sobreareac', 'sistemavia': 'sistemavia', 'sistemafer': 'sistemafer', 'sobrealtad': 'sobrealtad', 'qtdremocao': 'qtdremocao', 'abastecime': 'abastecime', 'esgotament': 'esgotament', 'redeeletri': 'redeeletri', 'viaspavime': 'viaspavime', 'drenagempl': 'drenagempl', 'iluminacao': 'iluminacao', 'coletalixo': 'coletalixo', 'op_data_vi': 'op_data_vi', 'distrito_n': 'distrito_n', 'distrito_p': 'distrito_p', 'subprefeit': 'subprefeit', 'subprefe_1': 'subprefe_1', 'dear_nome': 'dear_nome', 'dear_porc': 'dear_porc', 'zonlei1640': 'zonlei1640', 'zonlei16_1': 'zonlei16_1', 'zonlei16_2': 'zonlei16_2', 'per_acao_i': 'per_acao_i', 'per_acao_1': 'per_acao_1', 'ipvs_2010': 'ipvs_2010', 'ipvs_2010_': 'ipvs_2010_', 'risco_tipo': 'risco_tipo', 'risco_grau': 'risco_grau', 'risco_porc': 'risco_porc', 'macrozona_': 'macrozona_', 'macrozon_1': 'macrozon_1', 'macrozon_2': 'macrozon_2', 'macroarea_': 'macroarea_', 'macroare_1': 'macroare_1', 'macroare_2': 'macroare_2', 'regiao8_no': 'regiao8_no', 'regiao8_po': 'regiao8_po', 'ouc_sigla': 'ouc_sigla', 'ouc_nome': 'ouc_nome', 'ouc_porc': 'ouc_porc', 'sit_ativa_': 'sit_ativa_', 'op_data_cr': 'op_data_cr', 'op_data_al': 'op_data_al', 'op_histori': 'op_histori', });
lyr_reasdeabrangnciadeUBSDensiddemogrficahabkm_2.set('fieldImages', {'CNES': 'TextEdit', 'NOMEUBS': 'TextEdit', 'STS': 'TextEdit', 'CRS': 'TextEdit', 'PERC_ESF': 'TextEdit', 'EAB': 'TextEdit', 'DENS_DEMOG': 'TextEdit', });
lyr_SupervisoTcnicadeSadeSTS_3.set('fieldImages', {'Cod_STS': 'Range', 'STS': 'TextEdit', 'STS_M': 'TextEdit', 'STS_SSG': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'STS_rotulo': 'TextEdit', 'ID_COD': 'TextEdit', });
lyr_CoordenadoriaRegionaldeSadeCRS_4.set('fieldImages', {'CRS': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_ProvisoHabitacional_5.set('fieldImages', {'id': 'TextEdit', 'id_hsp': 'TextEdit', 'id_sgm': 'TextEdit', 'meta': 'TextEdit', 'name': 'TextEdit', 'endereco': 'TextEdit', 'subprefeit': 'TextEdit', 'a_tec_cons': 'TextEdit', 'ent_organ': 'TextEdit', 'his1': 'TextEdit', 'his2': 'TextEdit', 'hmp': 'TextEdit', 'r2v': 'TextEdit', 'nr': 'TextEdit', 'total_uh': 'TextEdit', 'programa': 'TextEdit', 'subprogram': 'TextEdit', 'st_empreen': 'TextEdit', 'dis': 'TextEdit', 'sql_princi': 'TextEdit', 'sql_secund': 'TextEdit', 'incra': 'TextEdit', 'zoneamento': 'TextEdit', 'area_terre': 'TextEdit', 'gestao': 'TextEdit', 'hist_gesta': 'TextEdit', });
lyr_Assentamentoprecrio_6.set('fieldImages', {'gid': 'TextEdit', 'uuid_id': 'TextEdit', 'nome': 'TextEdit', 'nome_secun': 'TextEdit', 'localizaca': 'TextEdit', 'categoria': 'TextEdit', 'totdomicil': 'TextEdit', 'fonte_totd': 'TextEdit', 'data_totdo': 'DateTime', 'anoocupaca': 'TextEdit', 'propriedad': 'TextEdit', 'propried_1': 'TextEdit', 'nome_propr': 'TextEdit', 'prog_habit': 'TextEdit', 'areageo_m2': 'TextEdit', 'alcaacesso': 'TextEdit', 'embaixopon': 'TextEdit', 'rotatoriai': 'TextEdit', 'aterrosani': 'TextEdit', 'embaixored': 'TextEdit', 'sobreoleod': 'TextEdit', 'sobrearean': 'TextEdit', 'sobreareac': 'TextEdit', 'sistemavia': 'TextEdit', 'sistemafer': 'TextEdit', 'sobrealtad': 'TextEdit', 'qtdremocao': 'TextEdit', 'abastecime': 'TextEdit', 'esgotament': 'TextEdit', 'redeeletri': 'TextEdit', 'viaspavime': 'TextEdit', 'drenagempl': 'TextEdit', 'iluminacao': 'TextEdit', 'coletalixo': 'TextEdit', 'op_data_vi': 'DateTime', 'distrito_n': 'TextEdit', 'distrito_p': 'TextEdit', 'subprefeit': 'TextEdit', 'subprefe_1': 'TextEdit', 'dear_nome': 'TextEdit', 'dear_porc': 'TextEdit', 'zonlei1640': 'TextEdit', 'zonlei16_1': 'TextEdit', 'zonlei16_2': 'TextEdit', 'per_acao_i': 'TextEdit', 'per_acao_1': 'TextEdit', 'ipvs_2010': 'TextEdit', 'ipvs_2010_': 'TextEdit', 'risco_tipo': 'TextEdit', 'risco_grau': 'TextEdit', 'risco_porc': 'TextEdit', 'macrozona_': 'TextEdit', 'macrozon_1': 'TextEdit', 'macrozon_2': 'TextEdit', 'macroarea_': 'TextEdit', 'macroare_1': 'TextEdit', 'macroare_2': 'TextEdit', 'regiao8_no': 'TextEdit', 'regiao8_po': 'TextEdit', 'ouc_sigla': 'TextEdit', 'ouc_nome': 'TextEdit', 'ouc_porc': 'TextEdit', 'sit_ativa_': 'TextEdit', 'op_data_cr': 'DateTime', 'op_data_al': 'DateTime', 'op_histori': 'TextEdit', });
lyr_reasdeabrangnciadeUBSDensiddemogrficahabkm_2.set('fieldLabels', {'CNES': 'inline label', 'NOMEUBS': 'inline label', 'STS': 'inline label', 'CRS': 'inline label', 'PERC_ESF': 'inline label', 'EAB': 'inline label', 'DENS_DEMOG': 'inline label', });
lyr_SupervisoTcnicadeSadeSTS_3.set('fieldLabels', {'Cod_STS': 'no label', 'STS': 'inline label', 'STS_M': 'no label', 'STS_SSG': 'no label', 'X': 'no label', 'Y': 'no label', 'STS_rotulo': 'no label', 'ID_COD': 'no label', });
lyr_CoordenadoriaRegionaldeSadeCRS_4.set('fieldLabels', {'CRS': 'inline label', 'AREA_KM2': 'no label', });
lyr_ProvisoHabitacional_5.set('fieldLabels', {'id': 'no label', 'id_hsp': 'no label', 'id_sgm': 'no label', 'meta': 'no label', 'name': 'inline label', 'endereco': 'inline label', 'subprefeit': 'no label', 'a_tec_cons': 'no label', 'ent_organ': 'no label', 'his1': 'no label', 'his2': 'no label', 'hmp': 'no label', 'r2v': 'no label', 'nr': 'no label', 'total_uh': 'inline label', 'programa': 'no label', 'subprogram': 'no label', 'st_empreen': 'no label', 'dis': 'no label', 'sql_princi': 'no label', 'sql_secund': 'no label', 'incra': 'no label', 'zoneamento': 'no label', 'area_terre': 'no label', 'gestao': 'no label', 'hist_gesta': 'no label', });
lyr_Assentamentoprecrio_6.set('fieldLabels', {'gid': 'no label', 'uuid_id': 'no label', 'nome': 'inline label', 'nome_secun': 'inline label', 'localizaca': 'inline label', 'categoria': 'no label', 'totdomicil': 'inline label', 'fonte_totd': 'no label', 'data_totdo': 'no label', 'anoocupaca': 'no label', 'propriedad': 'no label', 'propried_1': 'no label', 'nome_propr': 'no label', 'prog_habit': 'no label', 'areageo_m2': 'no label', 'alcaacesso': 'no label', 'embaixopon': 'no label', 'rotatoriai': 'no label', 'aterrosani': 'no label', 'embaixored': 'no label', 'sobreoleod': 'no label', 'sobrearean': 'no label', 'sobreareac': 'no label', 'sistemavia': 'no label', 'sistemafer': 'no label', 'sobrealtad': 'no label', 'qtdremocao': 'no label', 'abastecime': 'no label', 'esgotament': 'no label', 'redeeletri': 'no label', 'viaspavime': 'no label', 'drenagempl': 'no label', 'iluminacao': 'no label', 'coletalixo': 'no label', 'op_data_vi': 'no label', 'distrito_n': 'no label', 'distrito_p': 'no label', 'subprefeit': 'no label', 'subprefe_1': 'no label', 'dear_nome': 'no label', 'dear_porc': 'no label', 'zonlei1640': 'no label', 'zonlei16_1': 'no label', 'zonlei16_2': 'no label', 'per_acao_i': 'no label', 'per_acao_1': 'no label', 'ipvs_2010': 'no label', 'ipvs_2010_': 'inline label', 'risco_tipo': 'inline label', 'risco_grau': 'inline label', 'risco_porc': 'inline label', 'macrozona_': 'no label', 'macrozon_1': 'no label', 'macrozon_2': 'no label', 'macroarea_': 'no label', 'macroare_1': 'no label', 'macroare_2': 'no label', 'regiao8_no': 'no label', 'regiao8_po': 'no label', 'ouc_sigla': 'no label', 'ouc_nome': 'no label', 'ouc_porc': 'no label', 'sit_ativa_': 'no label', 'op_data_cr': 'no label', 'op_data_al': 'no label', 'op_histori': 'no label', });
lyr_Assentamentoprecrio_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});