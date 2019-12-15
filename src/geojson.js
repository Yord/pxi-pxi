const geojsonMarshaller = {
    name: 'geojson',
    desc: 'foo.',
    func: ({replacer, R, spaces, S, includes, I, lat, lng}) => {
      const GeoJSON  = require('geojson')
      const _replacer = replacer || R || null
      const _spaces   = spaces   || S || 0
      const _includes = includes || I || []
      const _lat      = lat           || 'lat'
      const _lng      = lng           || 'lng'
      
      const include  = Array.isArray(_includes) ? _includes : [_includes]
  
      return jsons => {
        let err = ''
        let str = ''
  
        for (let index = 0; index < jsons.length; index++) {
          try {
            const obj = jsons[index]
            const geojson = GeoJSON.parse(obj, {Point: [_lat, _lng], include})
            str += JSON.stringify(geojson, _replacer, _spaces) + '\n'
          } catch (e) {
            // ADD BETTER ERROR INFO!
            err += e + '\n'
            if (failEarly) {
              process.stderr.write(err)
              process.exit(1)
            }
          }
        }
  
        return {err, str}
      }
    }
  }
  
  module.exports = {
    lexers:      [],
    parsers:     [],
    applicators: [],
    marshallers: [geojsonMarshaller]
  }