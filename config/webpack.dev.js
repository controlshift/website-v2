const { merge } = require('webpack-merge')
const CommonConfig = require('./webpack.common.js')
const path = require('path')

module.exports = merge(CommonConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '..', '_site'),
    writeToDisk: true
  }
})
