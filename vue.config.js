const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/system/webdev/IO/API/DocManager/' : '/',
  transpileDependencies: [
    'vuetify'
  ]
})
