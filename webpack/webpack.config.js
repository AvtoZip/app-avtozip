var webpack = require("webpack");
var config = require("./webpack.config.base.js");

config.entry = [
    "webpack-dev-server/client?http://localhost:8014",
    "webpack/hot/only-dev-server",
    "../src/js/main"
];

config.output.publicPath = "http://localhost:8014/";

config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin() // don"t reload if there is an error
]);

module.exports = config;
