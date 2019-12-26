const samplePlugin = require('@pfx/sample')

const R            = require('ramda')
const L            = require('lodash')

const getTime      = json => json.time

module.exports = {
  plugins:  [samplePlugin],
  context:  Object.assign({}, R, {_: L, getTime}),
  defaults: {}
}