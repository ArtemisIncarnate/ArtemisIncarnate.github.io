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

let myTampaIcon = L.icon({
  iconUrl: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffloridaphotomatt.com%2Fwp-content%2Fphotos%2F2014%2F08%2FTampa-After-Sunset-Tight.jpg&f=1',
  iconSize: [20, 20], // size of the icon
  iconAnchor: [2, 5], // point of the icon which will correspond to marker's location
  popupAnchor: [-2, -3] // point from which the popup should open relative to the iconAnchor
})

let myTampaMarker = L.marker([-82.496337890625, 27.945886221761945], {icon: myTampaIcon}).addTo(mapCcSlr)

let myFlPolygonStyle = {
  color: 'blue',
  fillColor: 'lightblue',
  fillOpacity: 0.3
}

let myFlPolygon = L.polygon([
  [-87.47314453125, 30.29701788337205],
  [-87.62695312499999, 31.034108344903512],
  [-84.990234375, 31.015278981711266],
  [-84.92431640625, 30.713503990354965],
  [-82.177734375, 30.581179257386985],
  [-82.08984375, 30.35391637229704],
  [-81.89208984375, 30.80791068136646],
  [-81.5185546875, 30.675715404167743],
  [-80.068359375, 26.843677401113002],
  [-80.22216796875, 25.720735134412106],
  [-80.33203125, 25.284437746983055],
  [-81.18896484375, 25.145284610685064],
  [-81.38671875, 25.918526162075153],
  [-81.8701171875, 26.07652055985697],
  [-82.08984375, 26.64745870265938],
  [-82.7490234375, 27.605670826465445],
  [-82.880859375, 28.033197847676377],
  [-82.68310546875, 28.613459424004414],
  [-83.0126953125, 29.305561325527698],
  [-83.8916015625, 30.088107753367257],
  [-84.375, 29.935895213372444],
  [-85.14404296875, 29.707139348134145],
  [-85.869140625, 30.221101852485987],
  [-86.98974609375, 30.41078179084589],
  [-87.51708984375, 30.391830328088137]
], myFlPolygonStyle).addTo(mapCcSlr)

myTampaMarker.bindPopup('Tampa, FL')
myFlPolygon.bindPopup('The population of FL is densely populated by people of <br/>color who are at disproportionate risk of their white counterparts as the state faces coastal erosion due to climate change induced sea level rise.')

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
