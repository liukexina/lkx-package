const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './demo/src/index.js', // dev 路径。
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, '../dist'),
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
			// {
			// 	test: /\.js$/,
			// 	exclude: /\.node_modules$/,
			// 	loader: 'babel-loader',
			// 	options: {
			// 		presets: [
      //       '@babel/preset-react'
      //     ],
			// 	},
			// },
		],
	},
	plugins: [
    new HtmlWebpackPlugin({
      template: './demo/src/index.html'
    })
  ],
	devServer: {
		open: true,
		port: 8080,
		hot: true,
		compress: true,
		writeToDisk: false,
	},
	devtool: 'source-map',
};
