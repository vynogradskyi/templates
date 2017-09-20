const path = require('path');
const webpack = require('webpack');

module.exports = [
    {
        name: 'client',
        target: 'web',
        entry: './client.jsx',
        output: {
            path: path.join(__dirname, 'static'),
            filename: 'client.js',
            publicPath: '/static/'
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules\/)/,
                    use: [
                        {
                            loader: 'babel-loader'
                        }
                    ]
                },
                {
                    test: /\.scss$/,
                    use:[
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                                localIdentName: '[name]___[local]___[hash:base64:5]',
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                }
            ]
        }
    },
    {
        name: 'server',
        target: 'node',
        entry: './server.jsx',
        output: {
            path: path.join(__dirname, 'static'),
            filename: 'server.js',
            libraryTarget: 'commonjs2',
            publicPath: '/static/'
        },
        devtool: 'source-map',
        resolve: {
            extensions: ['.js', '.jsx']
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules\/)/,
                    use: [
                        {
                            loader: 'babel-loader'
                        }
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: 'isomorphic-style-loader'
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                                localIdentName: '[name]___[local]___[hash:base64:5]',
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                }
            ]
        }
    }
];