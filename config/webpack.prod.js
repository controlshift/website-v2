const { merge } = require('webpack-merge')
const CommonConfig = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(CommonConfig, {
  mode: 'production',

  output: {
    filename: '[name]-[hash].bundle.js',
    path: path.resolve('assets'),
    publicPath: '/assets/'
  },

  plugins: [
    new CleanWebpackPlugin({})
  ],

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: true
      })
    ]
  }
})
