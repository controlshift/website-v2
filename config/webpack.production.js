const { merge } = require('webpack-merge')
const CommonConfig = require('./webpack.common.js')
const path = require('path')
const { ESBuildMinifyPlugin } = require('esbuild-loader')

module.exports = merge(CommonConfig, {
  mode: 'production',

  output: {
    filename: '[name]-[contenthash].bundle.js',
    path: path.resolve('assets'),
    publicPath: '/assets/'
  },

  optimization: {
    minimize: true,
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2015',
        css: true
      })
    ]
  }
})
