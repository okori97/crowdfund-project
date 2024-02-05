const path = require("path");
const HTMLwebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: "file-loader",
						options: {
							outputPath: "images",
							name: "[name].[ext]",
							publicPath: "/",
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: [".js", "jsx"],
	},
	plugins: [
		new HTMLwebpackPlugin({ template: "index.html" }),
		new CopyPlugin({
			patterns: [
				{ from: "./src/app.css", to: "app.css" },
				{ from: "./images", to: "images" },
			],
		}),
	],
	devServer: {
		hot: true,
		static: "./dist",
		historyApiFallback: true,
	},
};
