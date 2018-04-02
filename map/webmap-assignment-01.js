// let someName = L.map('your-map-div-id').setView([yourLat, yourLon], yourZoom)
let mymap = L.map('drawMap').setView([51.499, -0.007], 14) // this map is being created as an object
// the capitol L here is specfiic to Leaflet and the syntax is specific to it (like console is for js
// the dot.setview is another function that will take the map object and rearranges aspects of the object function
// 13 is the zoom level. The higher the number, the more zoomed in it is. It can go up to 20

// 51.499552, -0.099892], 14
// 51.508155, -0.099892 - Big Ben
// 51.499552, -0.126971 - Westminster Abbey

let basemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
L.tileLayer(basemapUrl).addTo(mymap)
// let markerArray = [5.15, -0.09] -- this is an alternative way of writing code below
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

// mymap.on('click', function (event) {
  // console.log('You clicked the map at ' + event.latlng)
// })  this is called an anonymous function - it doesn't have a someName
// the function we put in is called the 'call-back' function which calls the object (event),which has a latLong property
