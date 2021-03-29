//vue.config.js
module.exports = {
    //解决打包出现空白
  publicPath: process.env.NODE_ENV === 'production'
  ? '/AwesomePOS-master/'
  : '/'
}