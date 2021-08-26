const path = require('path')
const outputPath = path.resolve(__dirname, './dist')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: outputPath,
        filename: './js/main.js',
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]'
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/main.css'
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './src/templates/index.html'
        }),
        new CleanWebpackPlugin(),
    ]
}
