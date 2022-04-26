export default {
  renderer: 'page',
  iProtal: true,
  classname: 'i-home__page',
  body: {
    renderer: 'layout',
    direction: 'vertical',
    body: [
      {
        renderer: 'header',
        body: [
          {
            renderer: 'menu',
            name: 'i-website-nav',
            router: true,
            ellipsis: false,
            defaultActive: '',
            title: {
              renderer: 'wrapper',
              classname: '',
              body: [
                {
                  renderer: 'image',
                  src: 'https://songshuzhong.github.io/i-assets/public/logo/favicon.png'
                },
                {
                  renderer: 'html',
                  classname: '',
                  html: 'IRender'
                }
              ]
            },
            body: [
              {
                name: '/',
                title: '首页',
                renderer: 'menuitem',
                icon: 'HomeFilled'
              },
              {
                name: 'https://songshuzhong.github.io/i-website/dist/index.html',
                title: '组件示例',
                renderer: 'menuitem',
                icon: 'DataBoard',
                extra: true
              },
              {
                name: 'logs',
                title: '更新日志',
                renderer: 'menuitem',
                icon: 'Tickets'
              },
              {
                name: 'website',
                title: '荣誉资质',
                renderer: 'menuitem',
                icon: 'Aim'
              },
              {
                name: 'https://songshuzhong.github.io/visualizer/views/resume.html',
                title: '关于我',
                renderer: 'menuitem',
                icon: 'Avatar',
                extra: true
              }
            ]
          }
        ]
      },
      {
        renderer: 'main',
        routerView: true,
        iProtal: true,
        classname: 'i-home__main'
      }
    ]
  }
};
