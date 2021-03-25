const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: { filename: "[name].js", path: path.resolve(__dirname, "dist") },
  devtool: "inline-source-map",
  module: {
    rules: [
      { test: /\.js$|.jsx$/i, exclude: /node_modules/, loader: "babel-loader" }, // Babel for JSX
      {
        test: /\.css$/i,
        use: ["style-loader", { loader: "css-loader", options: { sourceMap: true } }],
      },
      {
        test: /\.svg/,
        use: {
          loader: "svg-url-loader",
          options: {},
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html", favicon: "./public/favicon-32x32.png" }), // HTML
  ],
};
