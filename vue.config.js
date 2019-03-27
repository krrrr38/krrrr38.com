const PrettierPlugin = require('prettier-webpack-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      // 設定値は .prettierrc へ記述して、vueのwebpack側へ設定を反映するために読み込む
      new PrettierPlugin()
    ]
  }
}
