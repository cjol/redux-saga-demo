var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    hot: true,
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  },
  //   entry: "src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "index_bundle.js"
  },
  plugins: [new HtmlWebpackPlugin()]
};
