const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../umd'),
    filename: 'v-parser.js',

    // library: "VParser",
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /\.node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ]
  },
  resolve: {
    // extensions: ['.js', '.jsx'],
    enforceExtension: false  // 如果为true，则将不允许无扩展名的文件。
  }
};
