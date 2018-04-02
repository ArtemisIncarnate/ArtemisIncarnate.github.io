let mymap = L.map('drawMap').setView([51.499, -0.1], 13.5)

let basemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
L.tileLayer(basemapUrl).addTo(mymap)

let marker = L.marker([51.508077, -0.096854]).addTo(mymap)
let polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
], {color: 'lightgreen'}).addTo(mymap)

marker.bindPopup('Shakespeare\'s Globe Theatre')
polygon.bindPopup('St. Katharine\'s and Wapping')

function logCurrentCoordinates (event) {
  console.log('You clicked the map at ' + event.latlng)
}
mymap.on('click', logCurrentCoordinates)

let latlngs = [
    [51.499552, -0.126971],
    [51.508155, -0.099892],
    [51.508077, -0.096854],
    [51.5, -0.09]
]
let polyline = L.polyline(latlngs, {color: 'red'}).addTo(mymap)
