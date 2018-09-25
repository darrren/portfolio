const withSass = require('@zeit/next-sass')

module.exports = withSass({
  cssModules: false,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
  exportPathMap () {
    return {
      '/': { page: '/' },
      '/blog': { page: '/blog' },
      '/about': { page: '/about' },
    }
  },
  webpack: (config, options) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        // query: {
        //   cacheDirectory: true,
        //   plugins: [
        //     'babel-plugin-transform-class-properties',
        //     'babel-plugin-syntax-dynamic-import',
        //     [
        //       'babel-plugin-transform-runtime',
        //       {
        //         helpers: true,
        //         polyfill: false, // we polyfill needed features in src/normalize.js
        //         regenerator: true,
        //       },
        //     ],
        //     [
        //       'babel-plugin-transform-object-rest-spread',
        //       {
        //         useBuiltIns: true // we polyfill Object.assign in src/normalize.js
        //       },
        //     ],
        //   ],
        //   presets: [
        //     'babel-preset-react',
        //     ['babel-preset-env', {
        //       modules: false,
        //       targets: {
        //         ie9: true,
        //       },
        //       uglify: true,
        //     }],
        //   ]
        // },
      }],
    })

    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            fallback: 'file-loader',
            publicPath: '/_next/',
            outputPath: 'static/images/',
            name: '[name]-[hash].[ext]'
          }
        }
      ]
    })

    return config
  }
})
