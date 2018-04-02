var siteseeing = [
		["London Bridge Station",51.5,-0.09],
		["Big Ben",51.508155,-0.099892],
		["Westminster Abbey",-51.499552,-0.126971],
		["Shakespeare\'s Globe Theatre",51.508077,-0.096854]
		]

let mymap = L.map('drawMap').setView([51.505, -0.09], 14)

let basemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
L.tileLayer(basemapUrl).addTo(mymap)

let polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
], {color: 'lightgreen'}).addTo(mymap)

polygon.bindPopup('St. Katharine\'s and Wapping')

for (var i = 0; i < siteseeing.length; i++) {
  marker = new L.marker([planes[i][1],planes[i][2]])
    .bindPopup(siteseeing[i][0])
    .addTo(mymap);

function logCurrentCoordinates (event) {
  console.log('You clicked the map at ' + event.latlng)
}
mymap.on('click', logCurrentCoordinates)
