const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  output: {
    path: path.join(__dirname, "/bundle"),
    filename: "index_bundle.js",
  },
  devServer: {
    host: "192.168.1.115",
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }, //this was added to handle importing css files
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
