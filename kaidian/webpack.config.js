let webpack =require('webpack');
let path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  entry: {
    'confirm': resolve('./src/views/Confirm/index.js'),
    'Index': resolve('./src/views/Index/index.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: './dist',
    filename: '[name][hash].js'
  },
  resolve: {
    
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        loader: 'sass-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'confirm.html',
      chunks: ['confirm'],
      template: path.resolve(__dirname, 'index.html'),
      inject: true,
      title: 'confirm'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['Index'],
      template: path.resolve(__dirname, 'index.html'),
      inject: true,
      title: 'index'
    })
  ]
}