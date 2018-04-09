let mymap = L.map('drawMap').setView([51.507, -0.096], 14)

let basemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
L.tileLayer(basemapUrl).addTo(mymap)

let myGeojson = {"type":"FeatureCollection"...} // use your own geojson

L.geoJSON(myGeojson).addTo(myMap)

L.geoJSON(myGeojson, { style: { color: 'red' }}).addTo(myMap) // object 2 is the color or inner object; object 1 is the style with the object 2 within console.log(require('util').inspect(, { depth: null }))
