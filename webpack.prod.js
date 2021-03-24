const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: { path: path.resolve(__dirname, "dist"), filename: "[name].js" },
  module: {
    rules: [
      { test: /\.js$|\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }, // Babel for JSX
      { test: /.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] }, // CSS
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html", favicon: "./public/favicon-32x32.png" }), // HTML
    new MiniCssExtractPlugin({ filename: "[name].css" }),
  ],
};
