const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './index-example.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8200,
    open: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Ordering Components',
      template: './index.html'
    })
  ]
})
