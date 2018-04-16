// begin Map 5
let mapFive = L.map('drawMap5').setView([39, -98], 4)
// mymap.on('click', function(event){ } center of US coords

//create basemap layer
let openStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapFive)

let grayBasemap = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png')
let satelliteBasemap = L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}')
let oceanBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}')
let mhi = L.esri.dynamicMapLayer({
  url: 'https://servoces.arcgisonline.com/arcgis/rest/services/Demographics/USA_Median_Household_Income/MapServer',
  opacity: 0.7
}).addTo(mapFive)

// return 'Risk Level' + featureCollection.features[0].properties[2012 Median Household Income (ESRI);
// https://esri.github.io/esri-leaflet/examples/customizing-popups.html

let baseMaps5 = {
    'Open Streets Map': openSteetMap,
    'Basic Map': grayBasemap,
    'Satellite Map': satelliteBasemap,
    'Ocean Map': oceanBasemap,
    'Interactive Map': mhi
}

L.control.layers(baseMaps5).addTo(mapFive)

myStyle = function (state) {
  let genderFemale = state.properties.FEMALES // female population
  let genderMale = state.properties.MALES // male population
  let stateColor = 'red'
  if (genderFemale > genderMale) {stateColor = 'Purple'} // girls are royalty
  let myStyle = {
    color: stateColor,
    fillOpacity: 0.3,
    dashArray: 3,
    weight: 4
  }
  return myStyle
}

let myOptions = {
  style: myStyle,
  onEachFeature: stateInfo
}

function stateInfo (state, layer) {
  let stateName = state.properties.STATE_NAME
  let genderFemale = state.properties.FEMALES
  let genderMale = state.properties.MALES
  let statePopulation = state.properties.POPULATION
  layer.bindPopup(stateName + ': Population by gender <br>Assigned female at birth:' + genderFemale + '<br>Assigned male at birth:' + genderMale + '<br>Total population in 2016: ' + statePopulation)
}

// function myStyle (feature) {
// }
// function myPopup (feature, layer) {
// }

// let myOptions = {
  // style: myStyle,
  // onEachFeature: myPopup
// }

L.geoJSON(mygeoJsonMapFour, myOptions).addTo(mapFive) // object 2 is the color or inner object; object 1 is the style with the object 2 within console.log(require('util').inspect(, { depth: null }))
// L.geoJSON(stateDemographics, myOptions).addTo(mapFive)
