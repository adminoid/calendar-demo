const path = require('path')

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  configureWebpack: {
    devServer: {
      watchOptions: {
        ignored: ['node_modules', 'public']
      }
    },
    resolve: {
      extensions: ['.ts', '.vue'],
      alias: {
        'c@': path.join(__dirname, 'src/ts/components/'),
        't@': path.join(__dirname, 'src/ts/'),
        '@': path.join(__dirname, 'src/')
      }
    }
  }
}
