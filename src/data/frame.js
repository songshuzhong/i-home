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
                name: 'quality',
                title: '荣誉资质',
                renderer: 'menuitem',
                icon: 'Aim'
              },
              {
                name: 'me',
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
      },
      {
        renderer: 'footer',
        classname: 'i-home__footer',
        body: [
          {
            renderer: 'wrapper',
            body: [
              {
                renderer: 'html',
                html: '链接'
              },
              {
                renderer: 'action',
                type: 'text',
                text: '代码仓库',
                actionType: 'url',
                url: 'https://songshuzhong.github.io/i-website/dist/index.html'
              },
              {
                renderer: 'action',
                type: 'text',
                text: '更新日志',
                actionType: 'url',
                url: 'https://songshuzhong.github.io/i-website/dist/index.html'
              },
              {
                renderer: 'action',
                type: 'text',
                text: '设计理念',
                actionType: 'url',
                url: 'https://songshuzhong.github.io/i-website/dist/index.html'
              }
            ]
          },
          {
            renderer: 'wrapper',
            body: [
              {
                renderer: 'html',
                html: '相关'
              },
              {
                renderer: 'action',
                type: 'text',
                text: 'react',
                actionType: 'url',
                url: 'https://react.docschina.org/'
              },
              {
                renderer: 'action',
                type: 'text',
                text: 'vue',
                actionType: 'url',
                url: 'https://cn.vuejs.org/index.html'
              }
            ]
          },
          {
            renderer: 'wrapper',
            body: [
              {
                renderer: 'html',
                html: '联系'
              },
              {
                renderer: 'action',
                type: 'text',
                text: 'qq: 1462026137',
                actionType: 'copy',
                content: '1462026137'
              },
              {
                renderer: 'action',
                type: 'text',
                text: 'phone: 15510351839',
                actionType: 'copy',
                content: '15510351839'
              },
              {
                renderer: 'action',
                type: 'text',
                text: 'e-mail: sshuzhong@outlook.com',
                actionType: 'mail'
              }
            ]
          }
        ]
      }
    ]
  }
};
