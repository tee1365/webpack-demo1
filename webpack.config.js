const path = require("path")
// const uglify = require("uglifyjs-webpack-plugin")

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  // plugins: [new uglify()]
}
