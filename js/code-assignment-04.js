let projectArray = [
  1,
  'https://actionnetwork.org/fundraising/puerto-rico-rebuilds-campaign',
  'Puerto Rico Rebuilds Campaign',
  'Disaster relief in Puerto Rico.',
  '100 by 35',
  true,
  ['disaster relief', 'solidarity', 'Puerto Rico', 'diaspora']
  ['sustainable infrastructure', 'energy', 'water treatment', 'food sovereignty']
]

let projectObject = {
  id: 1,
  url: 'https://actionnetwork.org/fundraising/puerto-rico-rebuilds-campaign',
  title: 'Puerto Rico Rebuilds Campaign',
  desc: 'Disaster relief in Puerto Rico.',
  dims: '100 by 35',
  thumb: true,
  keywords: [
    'disaster relief',
    'solidarity',
    'Puerto Rico',
    'diaspora'
  ]
  keyterms: [
    'sustainable infrastructure',
    'energy',
    'water treatment',
    'food sovereignty'
  ]
}

console.log(projectArray[4])
console.log(projectObject.dims)
console.log(projectObject["dims"])
