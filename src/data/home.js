export default {
  renderer: 'layout',
  direction: 'vertical',
  body: [
    {
      renderer: 'main',
      body: [
        {
          renderer: 'wrapper',
          classname: 'i-home__ball'
        },
        {
          renderer: 'wrapper',
          classname: 'i-home__ball'
        },
        {
          renderer: 'wrapper',
          classname: 'i-home__ball'
        },
        {
          renderer: 'carousel',
          classname: 'i-home__carousel',
          autoplay: true,
          loop: true,
          body: [
            {
              renderer: 'wrapper',
              classname: 'i-home__carousel__item',
              body: [
                {
                  renderer: 'html',
                  html: '灵活易用，了解css、javascript、html即可上手'
                },
                {
                  renderer: 'action',
                  text: '了解详情',
                  actionType: 'url',
                  url: 'https://songshuzhong.github.io/i-website/dist/index.html'
                }
              ]
            },
            {
              renderer: 'wrapper',
              classname: 'i-home__carousel__item',
              body: [
                {
                  renderer: 'html',
                  html: '丰富的组件库支持，更加自由的搭配组合网页'
                },
                {
                  renderer: 'action',
                  text: '了解详情',
                  actionType: 'url',
                  url: 'https://songshuzhong.github.io/i-website/dist/index.html'
                }
              ]
            },
            {
              renderer: 'wrapper',
              classname: 'i-home__carousel__item',
              body: [
                {
                  renderer: 'html',
                  html: '让开发体验更贴心、美好'
                },
                {
                  renderer: 'action',
                  text: '了解详情',
                  actionType: 'url',
                  url: 'https://songshuzhong.github.io/i-website/dist/index.html'
                }
              ]
            }
          ]
        },
        {
          renderer: 'grid',
          span: 6,
          gutter: 50,
          body: [
            {
              renderer: 'card',
              header: {
                renderer: 'image',
                src: 'https://songshuzhong.github.io/i-assets/public/img/jigsaw.png'
              },
              body: [
                {
                  renderer: 'html',
                  classname: 'i-home__card__title',
                  html: '健壮易扩展'
                },
                {
                  renderer: 'html',
                  classname: 'i-home__card__content',
                  html: '兼容自定义组件、接口适配、样式适配。'
                }
              ],
              footer: {
                renderer: 'action',
                type: 'text',
                text: '快速了解',
                actionType: 'url',
                url: 'https://songshuzhong.github.io/i-website/dist/index.html'
              }
            },
            {
              renderer: 'card',
              header: {
                renderer: 'image',
                src: 'https://songshuzhong.github.io/i-assets/public/img/rocket.png'
              },
              body: [
                {
                  renderer: 'html',
                  classname: 'i-home__card__title',
                  html: '快速构建'
                },
                {
                  renderer: 'html',
                  classname: 'i-home__card__content',
                  html: '几近零代码，拒绝repeat，把节省出的时间用在喝咖啡上。'
                }
              ],
              footer: {
                renderer: 'action',
                type: 'text',
                text: '快速了解',
                actionType: 'url',
                url: 'https://songshuzhong.github.io/i-website/dist/index.html'
              }
            },
            {
              renderer: 'card',
              header: {
                renderer: 'image',
                src: 'https://songshuzhong.github.io/i-assets/public/img/bar.png'
              },
              body: [
                {
                  renderer: 'html',
                  classname: 'i-home__card__title',
                  html: '可视化'
                },
                {
                  renderer: 'html',
                  classname: 'i-home__card__content',
                  html: '可视化编辑器，简单点击鼠标即可完成页面搭建。'
                }
              ],
              footer: {
                renderer: 'action',
                type: 'text',
                text: '快速了解',
                actionType: 'url',
                url: 'https://songshuzhong.github.io/i-website/dist/index.html'
              }
            },
            {
              renderer: 'card',
              header: {
                renderer: 'image',
                src: 'https://songshuzhong.github.io/i-assets/public/img/friendly.png'
              },
              body: [
                {
                  renderer: 'html',
                  classname: 'i-home__card__title',
                  html: '细腻友好'
                },
                {
                  renderer: 'html',
                  classname: 'i-home__card__content',
                  html: '人性化交互，编辑器自带文档注释，零成本上手。'
                }
              ],
              footer: {
                renderer: 'action',
                type: 'text',
                text: '快速了解',
                actionType: 'url',
                url: 'https://songshuzhong.github.io/i-website/dist/index.html'
              }
            }
          ]
        },
        {
          renderer: 'html',
          classname: 'i-home__thanks',
          html: 'Thank You!'
        },
        {
          renderer: 'grid',
          classname: 'i-home__thanks__images',
          body: [
            {
              renderer: 'image',
              src: 'https://songshuzhong.github.io/i-assets/public/logo/html5.png'
            },
            {
              renderer: 'image',
              src: 'https://songshuzhong.github.io/i-assets/public/logo/css3.png'
            },
            {
              renderer: 'image',
              src: 'https://songshuzhong.github.io/i-assets/public/logo/js.png'
            },
            {
              renderer: 'image',
              src: 'https://songshuzhong.github.io/i-assets/public/logo/react.svg'
            },
            {
              renderer: 'image',
              src: 'https://songshuzhong.github.io/i-assets/public/logo/vue.svg'
            },
            {
              renderer: 'image',
              src: 'https://songshuzhong.github.io/i-assets/public/logo/element-plus.svg'
            },
            {
              renderer: 'image',
              src: 'https://songshuzhong.github.io/i-assets/public/logo/svgs.png'
            },
            {
              renderer: 'image',
              src: 'https://songshuzhong.github.io/i-assets/public/logo/koa.png'
            },
            {
              renderer: 'image',
              src: 'https://songshuzhong.github.io/i-assets/public/logo/bootstrap.png'
            },
            {
              renderer: 'image',
              src: 'https://songshuzhong.github.io/i-assets/public/logo/node.png'
            },
            {
              renderer: 'image',
              src: 'https://songshuzhong.github.io/i-assets/public/logo/npm.png'
            },
            {
              renderer: 'image',
              src: 'https://songshuzhong.github.io/i-assets/public/logo/sequelize.png'
            },
            {
              renderer: 'image',
              src: 'https://songshuzhong.github.io/i-assets/public/logo/mock.png'
            }
          ]
        },
        {
          renderer: 'wrapper',
          classname: 'i-home__sponsor',
          body: [
            {
              renderer: 'html',
              html: '赞助'
            },
            {
              renderer: 'image',
              classname: 'i-home__me',
              src: 'https://songshuzhong.github.io/i-assets/public/img/charge.png'
            }
          ]
        }
      ]
    },
  ]
};

