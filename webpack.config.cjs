const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: path.join(__dirname, 'src/index.tsx'),
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: 'index.js',
        library: {
            type: 'module'
        }
    },
    experiments: {
        outputModule: true
    },
    externalsType: 'module',
    externals: [
        (context, request, callback) => {
            if (request.includes("@ST")) {
                request = request.replace("@ST", "../../../../..");
                return callback(null, `module ${request}`);
            }
            callback();
          },
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        extensionAlias: {
            '.js': ['.ts', '.js', ".tsx", ".jsx"],
        }
    },
    devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                                '@babel/preset-typescript',
                            ],
                        },
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: process.env.NODE_ENV !== 'production',
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ]
            }
        ],
    },
    optimization: {
        minimize: process.env.NODE_ENV === 'production',
        minimizer: [new TerserPlugin({
            extractComments: false,
        })],
    },
}