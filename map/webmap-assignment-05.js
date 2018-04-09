
//function map4 () {

//}

let mymap = L.map('map5').setView([39, -98], 4)
mymap.on('click', function(event){

}
//create basemap layer
let grayBasemap = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png').addTo(mymap)

let satelliteBasemap = L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}').addTo(mymap)

let oceanBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}').addTo(mymap)

let mhi = L.esri.dynamicMapLayer({
  url: 'https://servoces.arcgisonline.com/arcgis/rest/services/Demographics/USA_Median_Household_Income/MapServer',
  opacity: 0.7
}).addTo(mymap)

// return 'Risk Level' + featureCollection.features[0].properties[2012 Median Household Income (ESRI);
// https://esri.github.io/esri-leaflet/examples/customizing-popups.html


let myBasemaps = {
    'Light basemap': grayBasemap,
    'Satellite': satelliteBasemap,
    'Ocean basemap': oceanBasemap
}

L.control.layers(myBasemaps).addTo(mymap)

function myStyle (feature) {

}

function myPopup (feature, layer) {

}

let myOptions = {
  style: myStyle,
  onEachFeature: myPopup
}

L.geoJSON(stateDemographics, myOptions).addTo(mymap)
