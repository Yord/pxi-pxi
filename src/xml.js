const xmlMarshaller = {
  name: 'xml',
  desc: 'foo.',
  func: ({xmlRoot, X}) => {
    const js2xmlparser = require('js2xmlparser')
    const _xmlRoot = xmlRoot || X || 'root'
    
    return jsons => {
      let str   = ''
      const err = []

      for (let index = 0; index < jsons.length; index++) {
        try {
          const obj = jsons[index]
          str += js2xmlparser.parse(_xmlRoot, obj) + '\n'
        } catch (e) {
          // ADD BETTER ERROR INFO!
          err.push(e)
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
  marshallers: [xmlMarshaller]
}