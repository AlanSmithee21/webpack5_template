const path = require('path')
const outputPath = path.resolve(__dirname, './dist')

module.exports = {
    entry: './src/index.js',
    output: {
        path: outputPath
    }
}