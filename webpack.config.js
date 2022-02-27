const path = require('path');

module.exports = {
   // entry point of the app
   entry: "./src/index.js",
   // for the projet purpose the app will run only in development mode
   mode: "development",
   output: {
       path: path.resolve(__dirname, '/dist'),
       filename: 'index.bundle.js',
   },
   devServer: {
       // app will run on localhost:3000
       port: 3000,
       hot: true
   },
   module: {
       rules: [
           {
               test: /\.(js|jsx)$/,
               exclude: /node_modules/,
               use: {
                   loader: 'babel-loader'
               }
           },
           {
               test: /\.scss$/,
               use: [
                   'style-loader',
                   'css-loader',
                   'sass-loader',
               ]
           }
       ]
   }
};