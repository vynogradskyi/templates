const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use:{
                    loader: "babel-loader",
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
            test: /\.scss$/,
            use: [
                {
                    loader: "style-loader",
                },
                {
                    loader: "css-loader",
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true
                    }
                }
            ]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Template'
        })
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    }
};