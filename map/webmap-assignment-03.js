let mymap = L.map('drawMap').setView([51.507, -0.096], 14)

let basemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
L.tileLayer(basemapUrl).addTo(mymap)

let marker = L.marker([51.499, -0.127]).addTo(mymap)
let polygon = L.polygon([
  [51.499, -0.127],
  [51.508, -0.099],
  [51.500 -0.090],
  [51.499 -0.127]
], {color: 'red'}).addTo(mymap)

let myFlagIcon = L.icon({
  iconUrl: 'leaf-green.png',
  shadowUrl: 'leaf-shadow.png',
  iconSize: [38, 95], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
})

let myMarker = L.marker([51.5, -0.09], {icon: myGreenIcon}).addTo(map);

let myStyle = {
  color: 'orange',
  fillColor: 'yellow'
}

let myPolygon = L.polygon(myCoords, myStyle).addTo(mymap)
