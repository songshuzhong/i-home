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
                src: 'https://songshuzhong.github.io/i-assets/public/img/report.png'
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
                  html: '所见即所得，随意拖动鼠标即可让编码有图可依。'
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
                src: 'https://songshuzhong.github.io/i-assets/public/img/monitor.png'
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
                  html: '争夺每一秒，让你节省出编码的时间用在喝咖啡上。'
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
                src: 'https://songshuzhong.github.io/i-assets/public/img/note.png'
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
                  html: '人性化交互，可重复性编辑，让你爱不释手。'
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
                src: 'https://songshuzhong.github.io/i-assets/public/img/cpu.png'
              },
              body: [
                {
                  renderer: 'html',
                  classname: 'i-home__card__title',
                  html: '简单易学'
                },
                {
                  renderer: 'html',
                  classname: 'i-home__card__content',
                  html: '降低学习成本，让每个人享受开发的乐趣。'
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
          renderer: 'wrapper',
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
              src: 'https://songshuzhong.github.io/i-assets/public/logo/element-plus.png'
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
              url: 'https://songshuzhong.github.io/i-website/dist/index.html'
            },
            {
              renderer: 'action',
              type: 'text',
              text: 'vue',
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
              html: '联系'
            },
            {
              renderer: 'action',
              type: 'text',
              text: 'qq: 1462026137',
              actionType: 'static'
            },
            {
              renderer: 'action',
              type: 'text',
              text: 'phone: 15510351839',
              actionType: 'static'
            },
            {
              renderer: 'action',
              type: 'text',
              text: 'e-mail: sshuzhong@outlook.com',
              actionType: 'static'
            }
          ]
        }
      ]
    }
  ]
};

