const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PAGES = ['main', 'pets'];
module.exports = {
	mode: 'development',
	context: path.resolve(__dirname, 'src'),
	entry: PAGES.reduce((config, page) => {
		config[page] = `./pages/${page}/${page}.js`;
		return config;
	}, {}),
	devtool: 'source-map',
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	output: {
		filename: '[name].[hash].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	plugins: [].concat(
		PAGES.map(
			(page) =>
				new HtmlWebpackPlugin({
					inject: true,
					template: `./pages/${page}/${page}.html`,
					filename: `${page}.html`,
					chunks: [page],
				})
		)
	),
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env'],
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
};
