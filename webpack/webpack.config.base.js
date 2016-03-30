var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname,

    entry: path.resolve("src/js/main.js"),

    output: {
        path: path.resolve("dist/development"),
        filename: "assets/[name]-[hash].js",
        publicPath: "/"
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "AvtoZip Store",
            template: path.resolve("src/index.tmpl")
        }),
        new ExtractTextPlugin("assets/[name]-[hash].css", {
            allChunks: true
        })
    ],

    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style", "css")
            },
            {
                test: /\.less$/,
                loaders: ["style", "css", "less"]
            },
            {
                test: /\.sass$/,
                loaders: ["style", "css", "sass"],
                query: {indentedSyntax: 1, sourceMap: 1}
            },
            {
                test: /\.json$/,
                loaders: ["json"]
            }
        ]
    },

    resolve: {
        root: path.resolve("../src/"),
        modulesDirectories: ["node_modules"],
        extensions: ["", ".json", ".js", ".jsx"]
    }
};
