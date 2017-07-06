module.exports = {
	// where it should start processing your code
	entry: './app/app.jsx',
	// specify the output
	output: {
		path: __dirname, //-> specify the directory root
		filename: './public/bundle.js'
	},
	// --> list of files we want to be able to process
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	//--> this let us import components by their name without having
	  //  to specify their paths. ex:  require('Greeter') vs require(./components/Greeter)
		alias: {
			// Greeter: __dirname + '/public/components/Greeter.jsx',
		},
		
	},
	// --> adding module to be able to interpret the jsx extension
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					// -> take all the files, parse them through react and interpret them as
					// 2015 js. How does it know which file? specify the test, see next
					presets: ['react', 'es2015']
				},
				test: /\.jsx?$/, //--> use this loader and parse all the files that end in jsx
				exclude: /(node_modules|bower_components)/
			}
		]
	}
};