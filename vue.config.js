const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({

    //打包
    // assetsDir: 'static',
    // parallel: false,
    // publicPath: './',

  transpileDependencies: true,
  lintOnSave:false,
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            // 'text-color': '#111',
            // 'border-color': '#eee',
            // 'cell-font-size':'15px',
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "./src/styles/cover.less";`,
          },
        },
      },
    },
  },
})

