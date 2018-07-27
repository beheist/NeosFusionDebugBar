const path = require('path');

module.exports = {
    mode: "development",
    output: {
        path: path.resolve(__dirname, '../../Public/js'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env', 'babel-preset-react', 'babel-preset-stage-0']
                    }
                }
            }
        ]
    }
};
