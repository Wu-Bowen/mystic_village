const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
        static: [
            {
                directory: path.join(__dirname, 'src/assets'),
                publicPath: '/src/assets',
            }
        ],
    },
    devtool: 'eval-source-map',
    target: 'web',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: ['ts-loader'],
                exclude: '/node_modules/',
            },
            {
                test: /\.(s?(a|c)ss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(jpg|png|webp)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192, // Only inline images smaller than 8KB
                        name: 'images/[name].[ext]',
                        publicPath: '/',
                    },
                },
            },
            {
                test: /\.svg$|\.ico$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[hash]-[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        modules: ['node_modules'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            favicon: './src/favicon.ico',
        }),
    ],
};
