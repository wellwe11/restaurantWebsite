const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
    entry: {
    index: './src/index.js',
    home: './src/homeTab.js', 
    menu: './src/menuTab.js',
    info: './src/infoTab.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
},
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'dist'),
    hot: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'App',
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      title: 'Home Page',
      template: './src/index.html',
      filename: 'home.html',
      chunks: ['home'],
    }),
    new HtmlWebpackPlugin({
      title: 'Menu Page',
      template: './src/index.html',
      filename: 'menu.html',
      chunks: ['menu'],
    }),
    new HtmlWebpackPlugin({
      title: 'Info Page',
      template: './src/index.html',
      filename: 'info.html',
      chunks: ['info'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
};

