const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // entry point of application
    entry: "./app/index.js",
	// which transformations to make to code
    module: {
        rules: [
        { test: /\.svg$/, use: "svg-inline-loader" },
        { test: /\.css$/, use: ["style-loader", "css-loader"] },
        { test: /\.(js)$/, use: "babel-loader" },
        ],
    },
    // location to put the newly formed bundles
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index_bundle.js",
        publicPath: "/",
    },
    // plugins to inject
    plugins: [
        // generates index.html with script tag automatically inside the same directory as the bundle
        new HtmlWebpackPlugin({
            template: "app/index.html"
        })
    ],
    // determine environment mode
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    devServer: {
      historyApiFallback: true,
    },
};