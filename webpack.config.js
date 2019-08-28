const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    content_script: './content-scripts/App.jsx',
    background: './src/background.js',
    popup: './popup-page/App.jsx',
    option: './option-page/App.jsx',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './popup-page/popup.html', force: true } ,
      { from: './option-page/option.html', force: true } ,
      { from: './src/app/', force: true }
    ], {}),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
