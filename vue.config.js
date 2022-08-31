const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/public/" ,
  configureWebpack:{
    resolve: {
      fallback: {
        fs: false,
        path: false,
        crypto: false
      }
    }
  }
})
