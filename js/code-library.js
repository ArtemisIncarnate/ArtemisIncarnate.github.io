//this library contains code used in GEOG 4046
//<script src = "js/code-library.js"></script>

//this will become a library of code. This is referring to a bunch of functions or
//classes that can be used for something else.
//this library file (used for the portfolio page) saves one from having to write their
// own code. We can use the on-file library codes to reference and use a code that has
// already been made.
// Library is a collection of code around a certain theme. (i.e. a mapping library for ArcGIS)

function describeProject (project) {
  let projectDescription = 'The ' + myProjects + ' is one of many in a student portfolio.'
  return projectDescription
}

let myProjects = 'Book Assignment 1, Story Tour, '
let projectDescription = describeProject('myProjects')
console.log(projectDescription)

//jQuery code - way of doing something after it has already been run and waiting for it to load again
//$(document).ready(console.log('The page is ready!'))  // this is not built into Javascript. It is built into our jQuery library
$(document).ready(describeProject('myProjects'))
