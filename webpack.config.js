const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    scripts: "./src/scripts.js",
    UI: "./src/ui.js",
    extentedUI: "./src/extendedUI.js",
    homeTab: "./src/homeTab.js",
    infoTab: "./src/infoTab.js",
    menuTab: "./src/menuTab.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devtool: "inline-source-map",
  devServer: {
    static: path.join(__dirname, "dist"),
    hot: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Index Page",
      template: "./src/index.html",
      filename: "index.html",
      chunks: [
        "index",
        "scripts",
        "UI",
        "extendedUI",
        "homeTab",
        "infoTab",
        "menuTab",
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
      },
    ],
  },
  optimization: {
    runtimeChunk: "single",
  },
};
