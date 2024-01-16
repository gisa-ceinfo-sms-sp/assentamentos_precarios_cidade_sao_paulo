var size = 0;
var placement = 'point';
function categories_Assentamentoprecrio_6(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Abrigo/Alojamento':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(113,174,205,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),fill: new ol.style.Fill({color: 'rgba(113,174,205,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Favela':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(237,142,33,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),fill: new ol.style.Fill({color: 'rgba(237,142,33,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Núcleo':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(154,40,225,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),fill: new ol.style.Fill({color: 'rgba(154,40,225,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ocupação de Terreno':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(235,26,82,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),fill: new ol.style.Fill({color: 'rgba(235,26,82,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Assentamentoprecrio_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("categoria");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Assentamentoprecrio_6(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
