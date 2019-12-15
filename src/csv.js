const csvLexer = {
  name: "csv",
  desc: "is a csv lexer.",
  func: ({verbose, delimiter, D}) => {
    const _delimiter = delimiter || D || ','
  
    return (data, prevLines) => {
      const tokens = []
      const lines  = prevLines
      const err    = []
  
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
          } else if (ch === _delimiter) {
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
  
      return {err, tokens, lines, rest: text}
    }
  }
}

const csvParser = {
  name: 'csv',
  desc: 'is a csv parser.',
  func: function ({header, H}) {
    let _header    = header || H || undefined

    let len       = _header ? _header.length : 0
    let headerSet = _header ? true           : false

    return (tokens, lines) => {
      const err = []
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

module.exports = {
  lexers:      [csvLexer],
  parsers:     [csvParser],
  applicators: [],
  marshallers: []
}