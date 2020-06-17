const path = require("path");

module.exports = {
	mode: "production",
	entry: "./src/index.js",
	output: {
	path: path.resolve("dist"),
		filename: "main.js",
		libraryTarget: "commonjs2"
	},
	optimization: {
		minimize: false
	},
	module: {
		rules: [{
				test: /\.(js)$/,
				include: [path.resolve('src'), path.resolve('node_modules/')],
				exclude: function(modulePath) {
					return( /node_modules/.test(modulePath) && !/node_modules\\suneditor/.test(modulePath) );
				},
				loader: require.resolve('babel-loader'),
				options: {
					compact: true,
					presets: ['@babel/preset-env']
				}
			}, 
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			}
		]
	},
	externals: {
		react: "react"
	}
};