const path = require('path')

module.exports = {
  style: {
    css: {
      loaderOptions: () => {
        return {
          url: false
        }
      }
    },
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    configure: {
      // output: {
      //   publicPath: process.env.PUBLIC_URL+'/'
      // },
      module: {
        rules: [
          {
            test: /\.(glsl|vs|fs|vert|frag)$/,
            use: [{loader: 'raw-loader'}, {loader: 'glslify-loader'}],
            type: 'javascript/auto'
          }
        ]
      }
    }
  },
}