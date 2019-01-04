var webpack = require('webpack');


module.exports = {
  entry: [
    './src/index.js',
    // './src/assets/scss/index.scss'
  ],
  output: {
      path: __dirname + '/dist',
      filename: 'bundle-[name].js',
      publicPath: '/dist/',
  },
  module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: [ 'es2015', 'react', 'stage-2', 'stage-3'  ], plugins: ['syntax-dynamic-import'] }
            },
            { 
                test: /\.css$/, 
                loaders: ['style-loader', 'css-loader'] 
            },
            { 
                test: /\.(jpe|jpg|gif|woff|woff2|eot|ttf)(\?.*$|$)/,
                exclude: /node_modules/, 
                loader: 'url-loader?importLoaders=1&limit=100000'
            },
           
            {
                test: /\.png$/,
                loader: "url-loader",
                query: { mimetype: "image/png" }
            },
            {
              test: /\.mp3$/,
              // include: SRC,
              loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __PROD__: true
        }),
    ],
    devtool: 'inline-source-map'
};