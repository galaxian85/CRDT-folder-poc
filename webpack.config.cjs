// import path from 'path'
const path = require('path')

module.exports = {
  entry: ['./js/magic'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}
