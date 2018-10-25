const path = require("path");

module.exports = {
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  outputDir: path.resolve(__dirname, "./dist")
};