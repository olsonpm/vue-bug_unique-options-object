'use strict'

//---------//
// Imports //
//---------//

const webpack = require('webpack'),
  webpackMerge = require('webpack-merge')

const commonConfig = require('../common')

//
//------//
// Main //
//------//

module.exports = webpackMerge(commonConfig, {
  output: {
    filename: 'client.bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.VUE_ENV': '"client"',
    })
  ],
})
