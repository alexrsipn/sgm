/** @type {import('webpack').Configuration} */

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');
const {
    merge
} = require("webpack-merge")
const common = require("./webpack.common")

const devConfig = {
    mode: "development",
    // module: {
    //     rules: [
    //         {
    //             use: ["style-loader", "css-loader", "sass-loader"],
    //             test: /.(css|sass|scss)$/,
    //         },
    //     ],
    // },
    devServer: {
        port: 3000,
        contentBase: "../dist",
        open: "chrome",
        hot: true,
    },
    target: "web",
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),
    ],
    devtool: "eval-source-map",
};

module.exports = merge(common, devConfig)