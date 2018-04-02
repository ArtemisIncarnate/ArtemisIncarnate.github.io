let mymap = L.map('drawMap').setView([51.505, -0.09], 14)

let basemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
L.tileLayer(basemapUrl).addTo(mymap)

let marker = L.marker([51.5, -0.09]).addTo(mymap)
let polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
], {color: 'lightgreen'}).addTo(mymap)

marker.bindPopup('London Bridge Station')
polygon.bindPopup('St. Katharine\'s and Wapping')

function logCurrentCoordinates (event) {
  console.log('You clicked the map at ' + event.latlng)
}
mymap.on('click', logCurrentCoordinates)
