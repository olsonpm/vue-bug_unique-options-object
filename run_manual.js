'use strict'

const webpack = require("webpack")

const config = {
  client: require('./webpack-config/manual/client'),
  server: require('./webpack-config/manual/server'),
}

const log = something => console.log(something),
  logErr = err => console.error(err)

console.log('for client')
process(config.client)

function process(aWebpackConfig) {
  webpack(aWebpackConfig, (err, stats) => {
    if (err) {
      console.error(err)
      return
    }

    const info = stats.toJson();
    if (stats.hasErrors()) {
      info.errors.forEach(logErr)
      return
    }
    else if (stats.hasWarnings()) {
      info.warnings.forEach(logErr)
      return
    }

    if (aWebpackConfig !== config.server) {
      console.log('\nfor server')
      process(config.server)
    }
  });
}
