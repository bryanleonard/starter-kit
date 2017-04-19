import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from  'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';


export default {
	debug: true,
	devtool: 'source-map',
	noInfo: false,
	entry: {
		vendor: path.resolve(__dirname, 'src/vendor'),
		main: path.resolve(__dirname, 'src/index')
	}
	,
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath:  '/',
		filename: '[name].[chunkhash].js'
	},
	plugins: [

		// Generate and external CSS file with has in the filename
		new ExtractTextPlugin('[name].[contenthash].css', {
			allChunks: true
		}),

		// Hash the files using MD5 so their names change when the content changes. Bust data cache.
		new WebpackMd5Hash(),

		//Jquery sucka
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		}),

		//CommonsChunkPlugin to create separate bundles
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),

		//Create HTML file that includes reference to bundled JS
		new HTMLWebpackPlugin({
			template: 'src/index.html',
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: false,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttribures: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: false,
				minifyURLs: true
			}
		}),

		//Eliminate duplicate packages when generating bundle
		new webpack.optimize.DedupePlugin(),

		//Minify JS
		new webpack.optimize.UglifyJsPlugin()

	],
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
			{test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
		]
	}
}
