const { HotModuleReplacementPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const autoprefixer = require('autoprefixer')
const marked = require("marked");
const renderer = new marked.Renderer();

const path = require('path')
const environment = process.env.NODE_ENV
const webpack = require('webpack')

const port = 3000
const context = path.join(__dirname, '/src')
const webpackConfig = {
  entry: './src/index.tsx',
  output: {
    filename: 'app.js',
    path: path.join(__dirname, '/dist')
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  devtool: 'source-map',

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),

    // Use the index.html file as the template,
    // and just fill its body
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true,
      filename: 'index.html',
      inject: 'body'
    }),
    // Manually copy the index.css file and anything
    // inside the public/assets directory in the dist
    // folder
    new CopyWebpackPlugin([
      {
        from: 'src/index.css'
      },
      {
        from: 'public/assets',
        to: 'assets'
      }
    ]),
    // Use this plugin to add an hash to each included file
    // to avoid browser's aggressive caching
    new HtmlWebpackIncludeAssetsPlugin({
      assets: ['index.css'],
      hash: true,
      append: true
    }),
    new HotModuleReplacementPlugin()
  ],

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      {
        test: /\.md$/,
        use: [{
          loader: "html-loader"
        },{
          loader: "markdown-loader",
          options: {
            gfm: true,
            renderer
          }
        }]
      },
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: require.resolve('typed-css-modules-loader')
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9' // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009'
                })
              ]
            }
          }
        ]
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
  }
}

if (environment === 'development') {
  // Turn off performance hints during development because we don't do any
  // splitting or minification in interest of speed. These warnings become
  // cumbersome.
  webpackConfig.performance = {
    hints: false
  }

  // You may want 'eval' instead if you prefer to see the compiled output in DevTools.
  // See the discussion in https://github.com/facebookincubator/create-react-app/issues/343.
  webpackConfig.devtool = 'cheap-module-source-map'

  webpackConfig.devServer = {
    port,
    contentBase: context,
    historyApiFallback: true,
    stats: {
      colors: true
    },
    noInfo: false,
    quiet: false,
    hot: true
  }
}

module.exports = webpackConfig
