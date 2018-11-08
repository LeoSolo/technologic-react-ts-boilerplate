const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const HtmlWepackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    path.resolve('src', 'index.tsx')
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist')
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(ts,tsx)$/,
        loader: 'tslint-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },

  devServer: {
    contentBase: path.resolve('dist'),
    hot: false
  },
  plugins: [
      new ExtractTextPlugin('style.css'),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      }),
      new HtmlWepackPlugin({
          template: path.resolve('src', 'index.html')
      })
  ]
};