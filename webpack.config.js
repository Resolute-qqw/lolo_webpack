const path = require('path')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        // placeholders
                        name: '[name]_hash.[ext]',
                        outputPath: 'img/',
                        limit: 2048,
                    },
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 
                    'css-loader', 
                    'sass-loader', 
                    'postcss-loader'
                ]
            },
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve('dist')
    }
}