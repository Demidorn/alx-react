const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/App/App.js', // Adjust entry point if necessary
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
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
    resolve: {
        extensions: ['.js', '.jsx'], // Add this to resolve .js and .jsx files
        alias: {
            'react': path.resolve(__dirname, 'node_modules/react'),
            'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
          }
    },
    plugins: [
        new HtmlWebpackPlugin({
            // template: './dist/index.html',
            // template: path.resolve(__dirname, '../dist/index.html'), // Adjust path according to your config folder
            // filename: 'index.html',
            template: './public/index.html',
        }),
    ],
    devServer: {
        static: path.resolve(__dirname, '../dist'),
        compress: true,
        port: 8564,
        hot: true,
    },
    devtool: 'inline-source-map',
};
