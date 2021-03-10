//const path = require('path')
//const debug = process.env.NODE_ENV !== 'production'
module.exports = {
    // 輸出檔案目錄
    outputDir: 'dist',
    assetsDir: 'assets', // 靜態資源目錄 (js, css, img, fonts)
    // eslint-loader 是否在儲存的時候檢查
    lintOnSave: true,
     pages: {
       index: {
         // page 的入口
         entry: 'src/main.js',
         // 模板来源
         template: 'public/index.html',
         // 在 dist/index.html 的输出
         filename: 'index.html',
         // 当使用 title 选项时，
         // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
         title: 'Index Page',
         // 在这个页面中包含的块，默认情况下会包含
         // 提取出来的通用 chunk 和 vendor chunk。
         chunks: ['chunk-vendors', 'chunk-common', 'index']
       },
       // 当使用只有入口的字符串格式时，
       // 模板会被推导为 `public/subpage.html`
       // 并且如果找不到的话，就回退到 `public/index.html`。
       // 输出文件名会被推导为 `subpage.html`。
       //subpage: 'src/subpage/main.js'
     },
     devServer: {
       proxy: {
         '/api': {
           target: 'https://localhost:5001/', 
           changeOrigin: true,
           https: true,
           ws: true,
           pathRewrite: {
             '^/api': ''
           }
         }
       }
     },
     // 生產環境是否生成 sourceMap 檔案
    productionSourceMap: true,
    // css相關配置 配置高於chainWebpack中關於css loader的配置
    css: {
    },
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores 構建時開啟多程序處理babel編譯
    parallel: require('os').cpus().length > 1,
    // 是否啟用dll
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
    // dll: false,
   
    // PWA 外掛相關配置
    // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},
   }