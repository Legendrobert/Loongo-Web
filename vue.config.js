
const { defineConfig } = require('@vue/cli-service')


module.exports = defineConfig({
  transpileDependencies: true,
  // 设置应用的公共基础路径
  publicPath: process.env.NODE_ENV === 'production' ? '/my-app/' : '/',
  

    
  
})
