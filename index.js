const R       = require('ramda')
const L       = require('lodash')

const getTime = json => json.time

const samplePlugin = require('@pfx/sample')

module.exports = {
  plugins:  [samplePlugin],
  context:  Object.assign({}, R, {_: L, getTime}),
  defaults: {}
}