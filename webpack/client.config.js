const path = require('path')

module.exports = {
  // archivo que leerá
  entry: './source/client.js',
  output: {
    // Nombre del archivo a generar
    filename : 'app.js',
    // path donde compilara
    path: path.resolve(__dirname, '../built/statics'),
  },
  module: {
    loaders:[
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude : /(node_modules)/,
        query: {
          presets: ['es2016', 'es2017','react'],
          plugins: ['transform-es2015-modules-commonjs']
        }
      }
    ]
  },
  //permite utilizar los modulos nativos de node
  target: 'web',
}
