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
    contentBase: path.join(process.cwd(), '_site'),
    writeToDisk: true
  },
  devtool: 'eval'
})
