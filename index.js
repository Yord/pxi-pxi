const csvLexer = {
  name: "csv",
  desc: "is a csv lexer.",
  func: function (verbose, failEarly, argv) {
    const delimiter = argv.D || argv.delimiter || ','
  
    return (data, prevLines) => {
      const tokens = []
      const lines  = prevLines
  
      let values   = []
  
      let text     = data
      let len      = text.length
  
      let at       = -1
      let line     = 1
  
      let escaped  = false
      let string   = false
  
      let obj      = false
      let value    = false
  
      let done     = false
      let from     = 0
      let ch
  
      do {
        at++
        ch = text.charAt(at)
  
        if (string) {
          if (escaped) escaped = false
          else {
            if      (ch === '"')  string  = false
            else if (ch === '\\') escaped = true
          }
        } else {
          if (ch === '"') {
            string = true
          } else if (ch === delimiter) {
            value = true
          } else if (ch === '\n') {
            value = true
            obj = true
          }
        }
  
        if (at === len) done = true
  
        if (value) {
          value = false
  
          for (let index = from; index <= at; index++) {
            const char = text[index]
            if (char === ' ' || char === '"') from = index + 1
            else break
          }
  
          let to = at
          for (let index = at; index >= from; index--) {
            const char = text[index - 1]
            if (char === ' ' || char === '"') to = index - 1
            else break
          }
  
          const val = text.slice(from, to)
          values.push(val)
          if (verbose) lines.push(line)
  
          text = text.slice(at + 1, len)
          len  = text.length
          from = 0
          at   = -1
        }
  
        if (obj) {
          obj = false
          tokens.push(values)
          if (verbose) lines.push(line)
    
          values = []
          text   = text.slice(at + 1, len)
          len    = text.length
          from   = 0
          at     = -1
        }
  
        if (done) tokens.push(values)
      } while (!done)
  
      return {err: '', tokens, lines, rest: text}
    }
  }
}

const csvParser = {
  name: 'csv',
  desc: 'is a csv parser.',
  func: function (verbose, failEarly, argv) {
    let header    = argv.H || argv.header || undefined

    let len       = header ? header.length : 0
    let headerSet = header ? true : false

    return (tokens, lines) => {
      let err   = ''
      let jsons = []
      
      // ADD ERROR HANDLING!
      for (let index = 0; index < tokens.length; index++) {
        const values = tokens[index]

        if (!headerSet) {
          len = values.length
          header = []
          for (let jndex = 0; jndex < len; jndex++) header.push(jndex.toString())
          headerSet = true
        }
        
        if (values.length >= len) {
          let obj = {}
          for (let jndex = 0; jndex < len; jndex++) {
            const key = header[jndex]
            const val = values[jndex]
            obj[key] = val
          }
          jsons.push(obj)
        }
      }

      return {err, jsons}
    }
  }
}

const csv = {
  lexers:      [csvLexer],
  parsers:     [csvParser],
  applicators: [],
  marshallers: []
}

const xmlMarshaller = {
  name: 'xml',
  desc: 'foo.',
  func: function (verbose, failEarly, argv) {
    const js2xmlparser = require('js2xmlparser')
    const xmlRoot = argv.X || argv.xmlRoot || 'root'
    
    return jsons => {
      let err = ''
      let str = ''

      for (let index = 0; index < jsons.length; index++) {
        try {
          const obj = jsons[index]
          str += js2xmlparser.parse(xmlRoot, obj) + '\n'
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

const xml = {
  lexers:      [],
  parsers:     [],
  applicators: [],
  marshallers: [xmlMarshaller]
}

const geojsonMarshaller = {
  name: 'geojson',
  desc: 'foo.',
  func: function (verbose, failEarly, argv) {
    const GeoJSON  = require('geojson')
    const replacer = argv.R || argv.replacer || null
    const spaces   = argv.S || argv.spaces   || 0
    const includes = argv.I || argv.includes || []
    const lat      =           argv.lat      || 'lat'
    const lng      =           argv.lng      || 'lng'
    
    const include  = Array.isArray(includes) ? includes : [includes]

    return jsons => {
      let err = ''
      let str = ''

      for (let index = 0; index < jsons.length; index++) {
        try {
          const obj = jsons[index]
          const geojson = GeoJSON.parse(obj, {Point: [lat, lng], include})
          str += JSON.stringify(geojson, replacer, spaces) + '\n'
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

const geojson = {
  lexers:      [],
  parsers:     [],
  applicators: [],
  marshallers: [geojsonMarshaller]
}

const R = require('ramda')

const getTime = json => json.time

module.exports = {
  plugins:  [csv, xml, geojson],
  context:  Object.assign({}, R, {getTime}),
  defaults: {
    //lexer: 'jsonStream'
  }
}