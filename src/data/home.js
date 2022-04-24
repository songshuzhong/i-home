export default {
  renderer: 'wrapper',
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
      body: [
        {
          renderer: 'html',
          html: '灵活易用，了解css、javascript、html即可上手。'
        },
        {
          renderer: 'html',
          html: '丰富的组件库支持，更加自由的搭配组合网页。'
        },
        {
          renderer: 'html',
          html: '让开发体验更贴心、美好。'
        }
      ]
    },
    {
      renderer: 'grid',
      span: 6,
      gutter: 40,
      body: [
        {
          renderer: 'card',
          header: {
            renderer: 'image',
            src: 'https://songshuzhong.github.io/i-assets/public/img/svg/report.svg'
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
            text: '可视化'
          }
        },
        {
          renderer: 'card',
          header: {
            renderer: 'image',
            src: 'https://songshuzhong.github.io/i-assets/public/img/svg/rocket.svg'
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
            text: '一次拖拽流程图'
          }
        },
        {
          renderer: 'card',
          header: {
            renderer: 'image',
            src: 'https://songshuzhong.github.io/i-assets/public/img/svg/note.svg'
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
            text: '控件分类与规则'
          }
        },
        {
          renderer: 'card',
          header: {
            renderer: 'image',
            src: 'https://songshuzhong.github.io/i-assets/public/img/svg/pen.svg'
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
            text: '了解详情'
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
          src: 'https://songshuzhong.github.io/visualizer/static/img/html5.png'
        },
        {
          renderer: 'image',
          src: 'https://songshuzhong.github.io/visualizer/static/img/css3.png'
        },
        {
          renderer: 'image',
          src: 'https://songshuzhong.github.io/visualizer/static/img/js.png'
        },
        {
          renderer: 'image',
          src: 'https://songshuzhong.github.io/visualizer/static/img/jQuery.png'
        },
        {
          renderer: 'image',
          src: 'https://songshuzhong.github.io/visualizer/static/img/koa.png'
        },
        {
          renderer: 'image',
          src: 'https://songshuzhong.github.io/visualizer/static/img/bootstrap.png'
        },
        {
          renderer: 'image',
          src: 'https://songshuzhong.github.io/visualizer/static/img/node.png'
        },
        {
          renderer: 'image',
          src: 'https://songshuzhong.github.io/visualizer/static/img/npm.png'
        },
        {
          renderer: 'image',
          src: 'https://songshuzhong.github.io/visualizer/static/img/sequelize.png'
        },
        {
          renderer: 'image',
          src: 'https://songshuzhong.github.io/visualizer/static/img/mock.png'
        }
      ]
    }
  ]
};
