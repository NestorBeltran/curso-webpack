const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const UrlLoader = require('url-loader');

module.exports = {
  mode: 'development',
  entry: {
    home: path.resolve(__dirname,'src/js/index.js')
  },
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  devServer:{
    hot: true,
    open:true,
    port:9000,
  },
  module:{
    rules:[
      {
        test: /\.jpg|png|git|woff|eot|ttf|svg|mp4|webm$/,
        use:{
          loader: 'url-loader',
          options: {
            limit: 90000,
          }
        },
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Plugins',
      template: path.resolve(__dirname,'index.html')
    })
  ]
}