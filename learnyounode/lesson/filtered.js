const fs = require('fs')
const path = require('path')
const folder = process.argv[2]
const fileType = '.' + process.argv[3]

fs.readdir(folder, (err, data) => {
  if (err) {
    throw err
  }
  for (let i = 0; i < data.length; i++) {
    if (fileType === path.extname(data[i])) {
      console.log(data[i])
    }
  }
})
