let mapCcSlr = L.map('drawSlrMap').setView([38, -98], 4)

let openMap = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapCcSlr)

let grayBasemap = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png')
let satelliteBasemap = L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}')
let oceanBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}')

let baseMapsSlr = {
  'Open Source Map': openMap,
  'Boundaries Map': grayBasemap,
  'Satellite Map': satelliteBasemap,
  'Ocean Map': oceanBasemap
}

L.control.layers(baseMapsSlr).addTo(mapCcSlr)

let mapCcStyle = function (atriskpocstate) {
  let raceBlack = atriskpocstate.properties.BLACK
  let raceHispanic = atriskpocstate.properties.HISPANIC
  let raceWhite = atriskpocstate.properties.WHITE
  let atriskpocstateColor = 'green'
  if (raceBlack + raceHispanic > raceWhite) { atriskpocstate = 'red' }
  let mapCcStyle = {
    color: atriskpocstateColor,
    fillOpacity: 0.3,
    dashArray: 3,
    weight: 4
  }
  return mapCcStyle
}

let mapCcOptions = {
  style: mapCcStyle,
  onEachFeature: atriskpocstateInfo
}

function atriskpocstateInfo (atriskpocstate, layer) {
  let raceBlack = atriskpocstate.properties.BLACK
  let raceHispanic = atriskpocstate.properties.HISPANIC
  let raceWhite = atriskpocstate.properties.WHITE
  let statePopulation = state.properties.POPULATION
  layer.bindPopup(stateName + ': Population demographics by race <br>Black population:' + raceBlack + '<br>Hisplanic population:' + raceHispanic + '<br>White population: ' + raceWhite)
}
L.geoJSON(geoJsonCcSlrPop, mapCcOptions).addTo(mapCcSlr)
