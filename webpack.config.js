const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
  
  const mode = env.production ? 'production' : 'development';

  return {
    mode: mode,
    entry: {
      extension: path.resolve(__dirname, 'src', 'apps', 'extension', 'index.js'),
      options: path.resolve(__dirname, 'src', 'apps', 'options', 'index.js'),
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'build'),
    },
    context: path.join(__dirname),
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
              path.resolve(__dirname, 'public').replace(/\\/g, "/"),
              path.resolve(__dirname, 'src', 'content-sripts').replace(/\\/g, "/"),
              path.resolve(__dirname, 'src', 'background-scripts').replace(/\\/g, "/"),
            ]
        })
    ],
    module: {
      rules: [
        {
          test: /\.(jsx|js)$/,
          exclude: /node_modules/,
          use: [{
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  "targets": "defaults" 
                }],
                '@babel/preset-react'
              ]
            }
          }]
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3|html|json)$/,
          exclude: /node_modules/,
          use: [{
            loader: 'file-loader',
          }]
        },
      ]
    },
    devtool: 'cheap-module-source-map'
  }
}