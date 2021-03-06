let webApp0 = {
  id: 0,
  title: 'Web Map App: Client',
  url: 'https://lsu-gis.maps.arcgis.com/apps/webappviewer/index.html?id=4e483548f9c246109f2c044798951275',
  hasThumbnail: true
}

let webApp1 = {
  id: 1,
  title: 'Web Map App: User',
  url: 'https://lsu-gis.maps.arcgis.com/apps/webappviewer/index.html?id=84b8637888554febb96bdf2c9580f07a',
  hasThumbnail: true
}

let webApps = [
  webApp0,
  webApp1
]

for (let i = 0; i < webApps.length; i++) {
  console.log('webApp ' + i + ' title: ' + webApps[i].title)
  console.log('url: ' + webApps[i].url + ' Link to app')
  console.log('images/screenviewhome00' + webApps[i].id + '.png')
  if (webApps[i].url === true) {
    console.log('url ' + webApps[i].url + 'Success!')
  } else {
    console.log('url/no-preview.com')
  }
  if (webApps[i].hasThumbnail === true) {
    console.log('images/screenviewhome00-' + webApps[i].id + '.png')
  } else {
    console.log('images/no-preview.com')
  }
  if (webApps[i].title === '') {
    console.log('The title is Assignment ' + i)
  } else {
    console.log('This assignment has title ' + i)
  }
}
