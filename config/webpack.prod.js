const { merge } = require('webpack-merge')
const CommonConfig = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(CommonConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin({})
  ]
})
