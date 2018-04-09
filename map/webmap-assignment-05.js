
//function map4 () {

//}

let mymap = L.map('map5').setView([39, -98], 4)
mymap.on('click', function(event){

}
//create basemap layer
let grayBasemap = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png').addTo(mymap)

let satelliteBasemap = L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}').addTo(mymap)

let myBasemaps = {
    'Light basemap': grayBasemap,
    'Satellite': satelliteBasemap
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
