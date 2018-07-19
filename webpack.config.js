const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: ["./src/index.ts"],
    resolve: {
        extensions: [".ts"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: './static/'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: ["ts-loader"]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader"
                }]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "less-loader"
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ],
    mode: 'development'
}