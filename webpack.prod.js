const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
// const path = require('path');
const ghpages = require('gh-pages');

module.exports = merge(common, {
	mode: 'production',
	output: {
		publicPath: '/rsschool-shelter/',
	},
});
//publish to gh-pages
ghpages.publish(
	'dist',
	{
		message: 'Auto-generated commit',
	},
	function (err) {}
);
