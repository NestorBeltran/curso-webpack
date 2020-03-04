const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const UrlLoader = require('url-loader');

module.exports = {
  mode: 'development',
  entry: {
    home: path.resolve(__dirname,'src/js/index.js'),
    contact: path.resolve(__dirname,'src/js/contact.js')
  },
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: 'dist/',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  // devServer:{
  //   hot: true,
  //   open:true,
  //   port:9000,
  // },
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
          {
            loader: MiniCSSExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options:{
              importLoaders: 1
            }
          },
          'postcss-loader',
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          'css-loader',
          'stylus-loader'
        ]
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new MiniCSSExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'
    }),
    new HtmlWebpackPlugin({
      title: 'Plugins',
      template: path.resolve(__dirname,'index.html')
    }),
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json')
    })
  ],
  // optimization:{
  //   splitChunks:{
  //     chunks: 'all',
  //     minSize: 0,
  //     name: 'commons'
  //   }
  // }
}