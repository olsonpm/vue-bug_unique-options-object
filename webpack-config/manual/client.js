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

const shallowClone = Object.assign({}, commonConfig)

shallowClone.output.filename = 'client.bundle.js'
shallowClone.plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development'),
    'process.env.VUE_ENV': '"client"',
  })
]

module.exports = shallowClone
