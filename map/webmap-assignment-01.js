let mymap = L.map('drawMap').setView([51.499, -0.1], 13.5)

let basemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
L.tileLayer(basemapUrl).addTo(mymap)

let markerTransport = L.marker([51.5, -0.09]).addTo(mymap)  // class default - London Bridge Station
let markerClock = L.marker([51.508155, -0.099892]).addTo(mymap) // Big Ben
let markerAbbey = L.marker([51.499552, -0.126971]).addTo(mymap) // Westminster Abbey
let markerTheatre = L.marker([51.508077, -0.096854]) // Globe Theatre

let polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
], {color: 'lightgreen'}).addTo(mymap)

markerTransport.bindPopup('London Bridge Station')
markerClock.bindPopup('Big Ben')
markerAbbey.bindPopup('Westminster Abbey')
markerTheatre.bindPopup('Shakespeare\'s Globe Theatre)

polygon.bindPopup('St. Katharine\'s and Wapping')

function logCurrentCoordinates (event) {
  console.log('You clicked the map at ' + event.latlng)
}
mymap.on('click', logCurrentCoordinates)

// mymap.on('click', function (event) {
  // console.log('You clicked the map at ' + event.latlng)
// })  this is called an anonymous function - it doesn't have a someName
// the function we put in is called the 'call-back' function which calls the object (event),which has a latLong property
