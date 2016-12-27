const fs = require('fs')
const file = process.argv[2]

fs.readFile(file, (err, data) => {
  if (err) {
    throw err
  }
  /**
   * Using 'utf8' as the second argument returns a String instead of a Buffer
   * object.
   * Ex. fs.readFile(file, 'utf8', callback)
   */
  const lines = data.toString().split('\n').length - 1
  console.log(lines)
})
