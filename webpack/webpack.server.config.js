const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

/*
entry: primer archivo que va a leer webpack
output: ruta donde webpack va a dejar los archivos
module:
  loaders: tomar archivos y los procesan
  presets: conjunto de plugins
  latest-minimal: detecta la version de node y agrega los plugins de lo que no funcione
*/
const config = {
  entry: './source/server.jsx',
  output: {
    filename: 'index.js',
    path: './built/server',
    publicPath: process.env.NODE_ENV === 'production' ? 'https://platzi-react-sfs.now.sh' : 'http://localhost:3001',
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /(node_modules)/,
        query: {
          presets: ['latest-minimal', 'react'],
          env: {
            production: {
              plugins: ['transform-regenerator', 'transform-runtime'],
              presets: ['es2015']
            },
            development: {
              presets: ['latest-minimal']
            }
          }
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules'),
      },
    ],
  },
  target: 'node',
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.json']
  },
  plugins: [
    new webpack.DefinePlugin({
      'proccess.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new ExtractTextPlugin('../statics/styles.css'),
  ],
};

if(process.env.NODE_ENV == 'production') {
  // OccurrenceOrderPlugin ordena los modulos deacuerdo al uso

  // DedupePlugin: evita una dependencia duplicada
  // UglifyJsPlugin: minifica el codigo, warnings: para que no muestre en consola los warnings
  // DedupePlugin: evita una dependencia duplicada
  config.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      mangle: {
        except: ['$super', '$', 'exports', 'require'],
      },
    })
  )
}

module.exports = config
