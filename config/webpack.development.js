import { merge } from 'webpack-merge'
import CommonConfig from './webpack.common.js'
import path from 'path'

export default merge(CommonConfig, {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve('assets'),
    publicPath: '/assets/'
  },
  devServer: {
    static: path.join(process.cwd(), '_site'),
    devMiddleware: {
      writeToDisk: true
    }
  },
  devtool: 'eval'
})
