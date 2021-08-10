const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev

const filename = (ext) => isDev ? `[name].${ext}` :  `[name].[contenthash].${ext}`;

module.exports = {
	context: path.resolve(__dirname, 'src'), // Все пути прописываються относительно заданой корневой папки  
	mode: 'development', //Выбираем режим 'development' или 'production'
	entry: {
		index: './index.js' // Задаем точку входа
	},
	devtool: 'inline-source-map', // Включаем карту по сайту
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html' // Прописываем путь к Html файлу.
		}),
		new MiniCssExtractPlugin({
			filename: `./css/${filename('css')}`
		}),
		new CopyWebpackPlugin({
			patterns: [
				{from: path.resolve(__dirname, 'src/img'), to:path.resolve(__dirname, 'dist/img')},
				{from: path.resolve(__dirname, 'src/test'), to:path.resolve(__dirname, 'dist/test')}
			]
		}),
	],
	output: {
		filename: `./${filename('js')}`, // Задаем имя компелируеммому файлу 
		path: path.resolve(__dirname, 'dist'), //Создаем папку для продакшина
		clean: true, // Очищаем папку  
		publicPath: ''
	},
	module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      // },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(ttf|woff|woff|oet)$/,
        use: ['file-loader'],
      },
    ],
  },
};