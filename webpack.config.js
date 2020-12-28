let path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const variables = require('./variables').variables;

module.exports = {
    watch: true,
    mode: 'development',
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, variables.DIST_PATH),
        filename: variables.BUNDLE_JS_FILE_NAME
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, variables.SERVER_FOLDER),
        compress: true,
        port: variables.SERVER_PORT
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: variables.BUNDLE_CSS_FILE_NAME,
        }),
    ]
};