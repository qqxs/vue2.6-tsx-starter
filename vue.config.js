const proxyTarget = 'http://www.google.com'
// https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE
module.exports = {
  publicPath: '/',
  //   outputDir: process.env.NODE_ENV === 'production' ? 'build' : 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: proxyTarget
      }
    }
  },
  configureWebpack: {
    devServer: {
      disableHostCheck: true
    }
  },
  chainWebpack: config => {
    // 为保证加入百度搜索引擎的meta格式，修改htmlWebpackPlugin的选项
    config.plugin('html').tap(options => {
      options[0] = {
        ...options[0],
        NODE_ENV: process.env.NODE_ENV
      }
      // more options: https://github.com/jantimon/html-webpack-plugin#minification
      return options
    })
  }
}
