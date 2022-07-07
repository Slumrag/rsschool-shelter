const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PAGES = ['main', 'pets'];
module.exports = (env, argvs) => {
	return {
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
				staticOptions: {
					// redirect: true,
					// index: 'main.html',
				},
			},
			hot: true,
		},
		optimization: {
			runtimeChunk: 'single',
			splitChunks: {
				chunks: 'all',
			},
		},
		output: {
			filename: '[name].[hash].bundle.js',
			path: path.resolve(__dirname, 'dist'),
			clean: true,
		},
		plugins: [
			...PAGES.map(
				(page) =>
					new HtmlWebpackPlugin({
						inject: true,
						template: `./pages/${page}/${page}.html`,
						filename: `${page}.html`,
						chunks: [page],
					})
			),
			new MiniCssExtractPlugin(),
		],
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
					use: [MiniCssExtractPlugin.loader, 'css-loader'],
				},
				{
					test: /\.s[ac]ss$/i,
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader',
						'sass-loader',
					],
				},
				{
					test: /\.(png|svg|jpg|jpeg|gif)$/i,
					type: 'asset/resource',
				},
			],
		},
	};
};
