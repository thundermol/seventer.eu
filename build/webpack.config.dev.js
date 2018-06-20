'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

const HOST = 'localhost'
const PORT = 8082

module.exports = merge(baseConfig, {
    mode: 'development',

    devServer: {
        clientLogLevel: 'warning',
        hot: true,
        contentBase: 'dist',
        compress: true,
        host: HOST,
        port: PORT,
        open: true,
        overlay: {warnings: false, errors: true},
        publicPath: '/',
        quiet: true,
        watchOptions: {
            poll: true
        }
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "vue-style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader" // compiles Sass to CSS
                    }

                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "vue-style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    }
                ]
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})
