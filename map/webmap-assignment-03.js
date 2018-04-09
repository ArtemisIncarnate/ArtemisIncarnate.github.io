let newmap = L.map('drawNewMap').setView([51.507, -0.096], 14)

let newbasemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
L.tileLayer(newbasemapUrl).addTo(newmap)

let myFlagIcon = L.icon({
  iconFlagUrl: 'ukflagicon.png',
  iconFlagSize: [38, 95], // size of the icon
  iconFlagAnchor: [51.499, -0.127], // point of the icon which will correspond to marker's location
  popupFlagAnchor: [-50, -0.135] // point from which the popup should open relative to the iconAnchor
})

let myMarker = L.marker([51.499, -0.127], {icon: myFlagIcon}).addTo(newmap).bindPopup("Westminster Abbey")

let myNewPolygon = L.polygon(
  [51.499, -0.127],
  [51.508, -0.099],
  [51.500 -0.090],
  [51.499 -0.127], myNewPolygonStyle).addTo(newmap)

let myNewPolygonStyle = {
  color: 'blue',
  fillColor: 'lightblue'
}
