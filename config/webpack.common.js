/* eslint-disable indent */
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'

export default {
  context: path.resolve(process.cwd()),

  entry: {
    app: './_src/index.js',
    admin: './_src/admin.js'
  },
  plugins: [
    new FaviconsWebpackPlugin({
      logo: './icon.png'
    }),
    new HtmlWebpackPlugin({
      template: './_src/template/default.html',
      filename: '../_layouts/default.html',
      chunks: ['app'],
      scriptLoading: 'defer',
      inject: 'head'
    }),
    new HtmlWebpackPlugin({
      template: './_src/template/admin.html',
      filename: '../admin/index.html',
      chunks: ['admin']
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve('_src/images'),
        to: 'images/'
      },
      {
        from: path.resolve('_src/fonts'),
        to: 'fonts/'
      }]
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'esbuild-loader',
          options: {
            target: 'es2015'  // Syntax to compile to
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'resolve-url-loader'
        ]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: '_src' // prevent display of src/ in filename
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: '_src' // prevent display of src/ in filename
        }
      }
    ]
  }
}
