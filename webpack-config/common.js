'use strict'

//---------//
// Imports //
//---------//

const path = require('path'),
  webpack = require('webpack')

//
//------//
// Main //
//------//

module.exports = {
  entry: './index.js',
  mode: 'development',
  devtool: '#cheap-module-inline-source-map',
  output: {
    path: path.join(__dirname, '..'),
  },
  module: {
    rules: [
      {
        loader: 'vue-loader',
        options: {
          preserveWhitespace: false
        },
        test: /\.vue$/,
      },
    ],
  },
}
