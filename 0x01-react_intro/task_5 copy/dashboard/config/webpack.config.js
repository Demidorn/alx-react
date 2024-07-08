const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/App.js', // Adjust entry point if necessary
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|ico)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext]',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../dist/index.html'),
            // template: './dist/index.html',
        }),
    ],
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        compress: true,
        watchFiles: ['src/**/*', 'public/**/*'], // Adjust watch files if necessary
        port: 8564,
        hot: true,
        open: true,
    },
    devtool: 'inline-source-map',
};
