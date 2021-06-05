const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
//const StylelintPlugin = require('stylelint-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'main.js',
    },
    devServer: {
        contentBase: './dist',
        port: 3000,
        hot: true,
        watchContentBase: true,
    },
    devtool: 'inline-source-map',
    module: {
    	rules: [
      	{ 	
      		test: /\.css$/,
       		use:  [
          	{
            	loader: MiniCssExtractPlugin.loader,
            	options: {
              		esModule: true,
            	},
          	},
          	'css-loader',
     		],
    	},
        {
            test: /\.(js|jsx)$/,
            exclude: '/node_module/',
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.(png|jpg|jpeg|gif|svg)$/i,
            dependency: { not: ['url'] },
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[ext]",
                        outputPath: "./src/img",
                        esModule: false
                    }
                },
            ],
            //type: 'javascript/auto'
        },
        ]
    },
    plugins: [
    	new MiniCssExtractPlugin({filename: 'style.css'}),
    	new HtmlWebpackPlugin({title: 'Development', template: './src/index.html', filename: 'index.html'}),
    	new TerserWebpackPlugin(),
    	//new StylelintPlugin({files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}']}),
    ],
    optimization: {
    	minimize: true,
    	minimizer: [new TerserWebpackPlugin()],
  	},
}