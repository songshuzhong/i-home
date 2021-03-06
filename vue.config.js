const isDev = process.env.NODE_ENV === 'dev';

module.exports = {
  publicPath: isDev ? './' : '/i-home/dist',
  transpileDependencies: ['element-plus'],
  productionSourceMap: false,
  configureWebpack: {
    output: isDev? {
      filename: 'js/[name].[hash:6].js',
      chunkFilename: 'chunk/[name].[hash:6].js',
    }: {
      filename: 'js/[name].[contenthash:6].js',
      chunkFilename: 'chunk/[name].[contenthash:6].js',
    },
  },
  devServer: {
    port: 80,
    disableHostCheck: true,
    proxy: {
      '/fansSupportOrder': {
        target: 'http://terra.bpdev.biz.weibo.com',
        changeOrigin: true
      },
      '/api/templates': {
        target: 'http://ashina.biz.weibo.com',
        changeOrigin: true
      },
      '/api': {
        target: 'http://localhost:1026',
        changeOrigin: true
      }
    }
  }
};
