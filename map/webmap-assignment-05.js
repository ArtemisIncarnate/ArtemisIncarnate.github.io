let mapFive = L.map('drawMapFive').setView([38, -98], 4) // center of US coords
let openStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapFive)

mapStyle = function (state) {
  let genderFemale = state.properties.FEMALES // female population
  let genderMale = state.properties.MALES // male population
  let stateColor = 'red'
  if (genderFemale > genderMale) {stateColor = 'Purple'} // girls are royalty
  let mapStyle = {
    color: stateColor,
    fillOpacity: 0.3,
    dashArray: 3,
    weight: 4
  }
  return mapStyle
}

let mapOptions = {
  style: mapStyle,
  onEachFeature: stateInfo
}

function stateInfo (state, layer) {
  let stateName = state.properties.STATE_NAME
  let genderFemale = state.properties.FEMALES
  let genderMale = state.properties.MALES
  let statePopulation = state.properties.POPULATION
  layer.bindPopup(stateName + ': Population by gender <br>Assigned female at birth:' + genderFemale + '<br>Assigned male at birth:' + genderMale + '<br>Total population in 2016: ' + statePopulation)
}
L.geoJSON(mygeoJsonMapFour, mapOptions).addTo(mapFive) // object 2 is the color or inner object; object 1 is the style with the object 2 within console.log(require('util').inspect(, { depth: null }))
// L.geoJSON(stateDemographics, mapOptions).addTo(mapFive)
let grayBasemap = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png')
let satelliteBasemap = L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}')
let oceanBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}')

let baseMapsFive = {
    'Basic Map': grayBasemap,
    'Satellite Map': satelliteBasemap,
    'Ocean Map': oceanBasemap
}

L.control.layers(baseMapsFive).addTo(mapFive)
