var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

module.exports = {

  // Entry accepts a path or an object of entries.
  // The build chapter contains an example of the latter.
  entry: PATHS.app,

  // All outputs are in build
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Kanban app'
    })
  ]
};
