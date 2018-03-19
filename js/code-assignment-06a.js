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

//let webApps = []  
//this is a global variable which is accessable in functions but does not need to refer to a parameter. Not a good practice to keep.

for (let i = 0; i < webApps.length; i++) {
  console.log('webApp ' + i + ' title: ' + webApps[i].title)
  console.log('url: ' + webApps[i].url + ' Link to app')
  console.log('images/screenwatershedsinks' + webApps[i].id + '.png')
  if (webApps[i].url === true) {
    console.log('url ' + webApps[i].url + 'Success!')
  } else {
    console.log('url/no-preview.com')
  }
  if (webApps[i].hasThumbnail === true) {
    console.log('images/screenwatershedsinks' + webApps[i].id + '.png')
  } else {
    console.log('images/no-preview.com')
  }
  if (webApps[i].title === '') {
    console.log('The title is Assignment ' + i)
  } else {
    console.log('This assignment has title ' + i)
  }
}

//begin js.code-assignment-06 specific code

function describeProject (project) {
  let projectDescription = 'The ' + project + 'is one of many in a student portfolio.'
  return projectDescription
}

let myProject = 'Book Assignment 2, Earthquake Activity Map, '
let projectDescription = describeProject('myProject')
console.log(projectDescription)

//this is also the same as 1) let projectDescription = describeProject('myProject'); 2) console.log(projectDescription)
// this is also the same as 1) console.log(describeProject('myProject'))
