const path = require("path")
const webpack = require("webpack")
const uglify = require("uglifyjs-webpack-plugin")

module.exports = {
  entry: "./src/index.js",
  devServer: {
    hot: true
  },
  devtool: 'inline-source-map',
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "production",
  plugins: [
    new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin(),
    // new uglify({test: /\.js($|\?)/i, cache: true, parallel: true})
  ],
  // optimization: {
  //   minimizer: [new uglify({
  //       uglifyOptions: {
  //         ecma: 8
  //       }
  //     })]
  // }
}
