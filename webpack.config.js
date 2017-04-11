const path = require("path");

module.exports = {
    entry: './admin/index.jsx',
    output:{
        filename: 'bundle.js',
        path: path.join(__dirname,'admin/public/js/')
    },
    module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : path.join(__dirname,'admin/'),
        loader : 'babel-loader'
      }
    ]
  }
};