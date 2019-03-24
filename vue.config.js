const PrettierPlugin = require('prettier-webpack-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new PrettierPlugin({
        singleQuote: true,
        semi: false,
        tabWidth: 2,
        printWidth: 200
      })
    ]
  }
}
