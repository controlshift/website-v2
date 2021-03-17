/* eslint-disable indent */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, '..'),

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
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }]
            ]
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'resolve-url-loader',
          'sass-loader'
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
