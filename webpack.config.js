const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),  
    entry: {
        app: './main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './[name].bundle.js'
    },
    devServer: {
        compress: true,
        port: 8080,
        stats: 'errors-only',
        open: true
    },
    devtool: 'inline-source-map',
}
