const path = require('path');
function resolve(dir) {
 return path.join(__dirname, dir)
}

module.exports = {
 publicPath: process.env.BASE_URL,
 assetsDir: process.env.BASE_URL,
 outputDir: path.resolve(__dirname, "./dist"),
 devServer: {
  contentBase: path.join(__dirname, 'src/assets/') // 설정하면 url(/src/assets") 경로 사용 가능
 },

 configureWebpack: {
  resolve: {
   alias: {
    '@': resolve('src')
   }
  },
  performance: {
   hints: false
  },
  optimization: {
   splitChunks: {
    minSize: 10000,
    maxSize: 250000
   }
  }
 },

 transpileDependencies: [
   'vuetify'
 ]
};
