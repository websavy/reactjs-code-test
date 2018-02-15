const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true
    },
    entry:{
        index:['./src/js/Root.js'],
        vendor:["jquery","popper.js","bootstrap","react","react-dom","react-router-dom"]
    },
    output:{
        filename: "[name].js",
        path: path.resolve(__dirname,'build'),
        publicPath: "/build"
    },
    module: {
        rules:[
            {
                use:["babel-loader"],
                test:/\.js$/,
                exclude:/node_modules/
            },
            {
                use:["style-loader","css-loader","sass-loader"],
                test:/\.scss$/,
                exclude:/node_modules/
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery',
            Popper: ['popper.js', 'default']
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:"vendor"
        }),
    ]
};
