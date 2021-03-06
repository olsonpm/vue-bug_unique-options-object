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

shallowClone.target = 'node'

shallowClone.output.filename = 'server.bundle.js'
shallowClone.output.libraryTarget = 'commonjs2'
shallowClone.plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development'),
    'process.env.VUE_ENV': '"server"',
  })
]

module.exports = shallowClone
