import { merge } from 'webpack-merge'
import CommonConfig from './webpack.common.js'
import path from 'path'
import { ESBuildMinifyPlugin } from 'esbuild-loader'

export default merge(CommonConfig, {
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
