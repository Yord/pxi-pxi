const csv     = require('./src/csv')
const xml     = require('./src/xml')
const geojson = require('./src/geojson')

const R       = require('ramda')

const getTime = json => json.time

module.exports = {
  plugins:  [
    csv,
    xml,
    geojson
  ],
  context:  Object.assign({}, R, {getTime}),
  defaults: {}
}