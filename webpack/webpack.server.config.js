const path = require('path')

module.exports = {
  // archivo que leera
  entry: './source/server.js',
  output: {
    // Nombre del archivo a generar
    filename : 'index.js',
    // path donde compilara
    path: path.resolve(__dirname, '../built/server'),
  },
  module: {
    loaders:[
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude : /(node_modules)/,
        query: {
          // latest-minimal (ecmascript 2017 - 2016 - 2015)
          presets: ['latest-minimal', 'react']
        }
      }
    ]
  },
  //permite utilizar los modulos nativos de node
  target: 'node',
}
