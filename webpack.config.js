let webpack = require('webpack');

const ENV = process.env.ENV || 'dev';

module.exports = {
	entry: './main',
	output: {
		filename: 'build.js',
		library: 'app'
	},
	
	devtool: ENV == 'dev' ? 'source-map': false,

	plugins: [
		new webpack.DefinePlugin({
			ENV: JSON.stringify(ENV)
		})
	]
}