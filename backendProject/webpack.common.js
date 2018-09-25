const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");

/* -- BEGIN MAIN CONFIG -- */
module.exports = {
	entry: ["./src/helloExample.ts"],
	target: "node",
	externals: [nodeExternals()],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
				options: { 
					projectReferences: true 
				}
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
		modules: [
			path.resolve(__dirname, "../Common.Node/node_modules"),
			path.resolve(__dirname, "../Common.Node"),
			"node_modules"
		]
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "server.js"
	}
};
