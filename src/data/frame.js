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
              renderer: 'html',
              classname: '',
              html: 'IRender'
            },
            body: [
              {
                name: 'website',
                title: '组件示例',
                renderer: 'menuitem',
                icon: 'DataBoard'
              },
              {
                name: 'website',
                title: '更新日志',
                renderer: 'menuitem',
                icon: 'Tickets'
              },
              {
                name: 'website',
                title: '项目地址',
                renderer: 'menuitem',
                icon: 'AddLocation'
              },
              {
                name: 'website',
                title: '荣誉资质',
                renderer: 'menuitem',
                icon: 'Aim'
              },
              {
                name: 'website',
                title: '关于我',
                renderer: 'menuitem',
                icon: 'Avatar'
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
                text: '代码仓库'
              },
              {
                renderer: 'action',
                type: 'text',
                text: '更新日志'
              },
              {
                renderer: 'action',
                type: 'text',
                text: '设计理念'
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
                text: 'react'
              },
              {
                renderer: 'action',
                type: 'text',
                text: 'vue'
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
                text: 'qq: 1462026137'
              },
              {
                renderer: 'action',
                type: 'text',
                text: 'phone: 15510351839'
              },
              {
                renderer: 'action',
                type: 'text',
                text: 'e-mail: sshuzhong@outlook.com'
              }
            ]
          }
        ]
      }
    ]
  }
};
