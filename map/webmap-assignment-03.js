let newmap = L.map('drawNewMap').setView([51.507, -0.096], 13)

let newbasemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
L.tileLayer(newbasemapUrl).addTo(newmap)

let myFlagIcon = L.icon({
  iconUrl: 'https://www.surfingengland.org/wp-content/uploads/leaflet-maps-marker-icons/Surfing-England-botton-logo.png',
  iconSize: [20, 20], // size of the icon
  iconAnchor: [2, 5], // point of the icon which will correspond to marker's location
  popupAnchor: [-2, -3] // point from which the popup should open relative to the iconAnchor
})

let myMarker = L.marker([51.499, -0.127], {icon: myFlagIcon}).addTo(newmap).myMarker.bindPopup('Westminster Abbey')

let myNewPolygonStyle = {
  color: 'blue',
  fillColor: 'lightblue',
  fillOpacity: 0.3
}

let myNewPolygon = L.polygon([
  [51.499, -0.127],
  [51.508, -0.099],
  [51.500, -0.090]
], myNewPolygonStyle).addTo(newmap).myNewPolygon.bindPopup('My trip to London!')
