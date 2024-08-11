const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
    entry: {
    index: './src/index.js',
    scripts: './src/scripts.js',
    UI: './src/ui.js',
    extentedUI: './src/extendedUI.js',
    home: './src/homeTab.js',
    info: './src/infoTab.js',
    menuTab: './src/menuTab.js',
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
      title: 'Index Page',
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      title: 'Scripts Page',
      template: './src/scripts.html',
      filename: 'scripts.html',
      chunks: ['scripts'],
    }),
    new HtmlWebpackPlugin({
      title: 'UI Page',
      template: './src/ui.html',
      filename: 'ui.html',
      chunks: ['UI'],
    }),
    new HtmlWebpackPlugin({
      title: 'Extended UI Page',
      template: './src/extendedUI.html',
      filename: 'extendedUI.html',
      chunks: ['extendedUI'],
    }),
    new HtmlWebpackPlugin({
      title: 'Home Page',
      template: './src/home.html',
      filename: 'home.html',
      chunks: ['home'],
    }),
    new HtmlWebpackPlugin({
      title: 'Info Page',
      template: './src/info.html',
      filename: 'info.html',
      chunks: ['info'],
    }),
    new HtmlWebpackPlugin({
      title: 'Menu Page',
      template: './src/menu.html',
      filename: 'menu.html',
      chunks: ['menuTab'],
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

