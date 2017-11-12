var path = require("path");


//This should be cleaned up to have src dir and dist dir...

var SRC_DIR = path.resolve(__dirname)



var config = {



  entry: './main.js',

  output: {
    path: SRC_DIR,
    filename: 'index.js'
  },

  devServer: {
    inline: true,
    port: 7777
  },

  module: {
    loaders: [
      {
        test: /\.js?/,
        exclude: [/node_modules/, /socket.io/ ] ,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}

module.exports = config;
