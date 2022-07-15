export default {
  renderer: 'layout',
  classname: 'i-home__me',
  initData: {
    width: 360,
    name: '宋述重',
    education: '本科',
    school: '东北石油大学',
    graduateAge: '2016',
    phone: '15510351839',
    qq: '1462026137',
    wechat: 'ssz1462026137',
    mail: 'sshuzhong@outlook.com',
    github: 'github.com/songshuzhong',
    Java: 20,
    NodeJs: 65,
    Javascript: 90,
    html: 90,
    frondEnd: 'Koa\\Express、React、Vue、H5、CSS3、Webpack、Less',
    backEnd: 'Node.js、Java、MySQL、MyBatis、Sequelize'
  },
  body: [
    {
      renderer: 'aside',
      classname: 'i-home__me__aside',
      body: [
        {
          renderer: 'avatar',
          size: 100,
          src: 'https://songshuzhong.github.io/i-home/public/img/me.jpg',
          title: '宋述重',
          subTitle: 'nodejs/ web/ 互联网'
        },
        {
          renderer: 'divider',
          text: '基本信息'
        },
        {
          renderer: 'static',
          column: 1,
          columns: [
            {
              name: 'name',
              label: '姓名'
            },
            {
              name: 'education',
              label: '学历'
            },
            {
              name: 'school',
              label: '毕业院校'
            },
            {
              name: 'graduateAge',
              label: '毕业年份'
            },
          ]
        },
        {
          renderer: 'divider',
          text: '联系方式'
        },
        {
          renderer: 'static',
          column: 1,
          columns: [
            {
              name: 'phone',
              label: '手机'
            },
            {
              name: 'qq',
              label: 'QQ'
            },
            {
              name: 'wechat',
              label: '微信'
            },
            {
              name: 'mail',
              label: '邮箱'
            },
            {
              name: 'github',
              label: 'github'
            },
          ]
        },
        {
          renderer: 'divider',
          text: '技能点'
        },
        {
          renderer: 'static',
          column: 1,
          columns: [
            {
              name: 'Java',
              label: 'Java',
              body: {
                renderer: 'progress',
                exp: 'data.Java'
              }
            },
            {
              name: 'NodeJs',
              label: 'NodeJs',
              body: {
                renderer: 'progress',
                exp: 'data.NodeJs'
              }
            },
            {
              name: 'Javascript',
              label: 'Javascript',
              body: {
                renderer: 'progress',
                exp: 'data.Javascript'
              }
            },
            {
              name: 'html',
              label: 'html',
              body: {
                renderer: 'progress',
                exp: 'data.html'
              }
            },
          ]
        },
        {
          renderer: 'divider',
          text: '技术栈'
        },
        {
          renderer: 'static',
          column: 1,
          columns: [
            {
              name: 'frondEnd',
              label: '前端'
            },
            {
              name: 'backEnd',
              label: '后端'
            }
          ]
        },
        {
          renderer: 'divider',
          text: '个人特质'
        },
        {
          renderer: 'chart',
          height: 300,
          config: {
            series : [
              {
                type:'graph',
                layout: 'force',
                name : '特征',
                categories : [
                  {
                    name: '性格'
                  },
                  {
                    name: '工作态度'
                  },
                  {
                    name:'自我追求'
                  }
                ],
                tooltip : {},
                itemStyle: {
                  normal: {
                    label: {
                      show: true,
                      textStyle: {
                        color: '#333'
                      }
                    },
                    nodeStyle : {
                      brushType : 'both',
                      borderColor : 'rgba(255,215,0,0.4)',
                      borderWidth : 1
                    },
                    linkStyle: {
                      type: 'curve'
                    }
                  },
                  emphasis: {
                    label: {
                      show: false
                    }
                  }
                },
                nodes:[
                  {category:0, name: '个人特质', value: 40, symbolSize: 40, label: '个人特质', draggable: true, itemStyle: { color: 'lightslategray' } },
                  {category:1, name: '性格',value : 20, symbolSize: 30, label: '性格', draggable: true, itemStyle: { color: '#607d8b'} },
                  {category:1, name: '工作态度',value : 20, symbolSize: 30, label: '工作态度', draggable: true, itemStyle: { color: '#607d8b'} },
                  {category:1, name: '自我追求',value : 20, symbolSize: 30, label: '自我追求', draggable: true, itemStyle: { color: '#607d8b'} },
                  {category:2, name: '主人公',value : 20, symbolSize: 20, label: '主人公', draggable: true, itemStyle: { color: '##e0eaf0' } },
                  {category:2, name: '时间观念',value : 20, symbolSize: 20, label: '时间观念', draggable: true, itemStyle: { color: '##e0eaf0' } },
                  {category:2, name: '闭环处理',value : 20, symbolSize: 20, label: '闭环处理', draggable: true, itemStyle: { color: '##e0eaf0' } },
                  {category:2, name: '设计优先',value : 20, symbolSize: 20, label: '设计优先', draggable: true, itemStyle: { color: '##e0eaf0' } },
                  {category:2, name: 'P/PC平衡',value : 20, symbolSize: 20, label: 'P/PC平衡', draggable: true, itemStyle: { color: '##e0eaf0' } },
                  {category:2, name: '保持敬畏',value : 20, symbolSize: 20, label: '保持敬畏', draggable: true, itemStyle: { color: '##e0eaf0' } },
                  {category:2, name: '有始有终',value : 20, symbolSize: 20, label: '有始有终', draggable: true, itemStyle: { color: '##e0eaf0' } },
                  {category:2, name: '事不过二',value : 20, symbolSize: 20, label: '事不过二', draggable: true, itemStyle: { color: '##e0eaf0' } },
                  {category:2, name: '空杯心态',value : 20, symbolSize: 20, label: '空杯心态', draggable: true, itemStyle: { color: '##e0eaf0' } },
                ],
                links : [
                  { source: '性格', target: '个人特质' },
                  { source: '工作态度', target: '个人特质' },
                  { source: '自我追求', target: '个人特质' },
                  { source: '主人公', target: '性格' },
                  { source: '时间观念', target: '性格' },
                  { source: '保持敬畏', target: '性格' },
                  { source: '闭环处理', target: '工作态度' },
                  { source: '设计优先', target: '工作态度' },
                  { source: 'P/PC平衡', target: '工作态度' },
                  { source: '有始有终', target: '自我追求' },
                  { source: '事不过二', target: '自我追求' },
                  { source: '空杯心态', target: '自我追求' },
                ],
                force: {
                  repulsion: 145
                }
              }
            ]
          }
        }
      ]
    },
    {
      renderer: 'main',
      classname: 'i-home__me__main',
      body: [
        {
          renderer: 'divider',
          text: '教育经历'
        },
        {
          renderer: 'render',
          classname: 'i-home__me__main__subTitle',
          body: [
            {
              tag: 'div',
              innerHTML: '• 东北石油大学-软件工程专业（本科）2012-2016'
            },
            {
              tag: 'div',
              innerHTML: '• 蓝桥杯软件培训中心-2015-2016'
            }
          ]
        },
        {
          renderer: 'divider',
          text: '工作经历'
        },
        {
          renderer: 'render',
          classname: 'i-home__me__main__subTitle',
          body: [
            {
              tag: 'div',
              innerHTML: '• 百度网讯科技有限公司（正式）'
            },
            {
              tag: 'div',
              innerHTML: '负责【好看视频】审核系统及相关H5开发',
              class: 'i-home__me__main__desc'
            },
            {
              tag: 'div',
              innerHTML: '• 联通旅游管理平台（实习）'
            },
            {
              tag: 'div',
              innerHTML: '为联通定制的集旅游指南，监控于一身的管理系统',
              class: 'i-home__me__main__desc'
            },
          ]
        },
        {
          renderer: 'divider',
          text: '个人项目'
        },
        {
          renderer: 'render',
          classname: 'i-home__me__main__subTitle',
          body: [
            {
              tag: 'div',
              innerHTML: '• java-react-isomorphic'
            },
            {
              tag: 'div',
              innerHTML: `java-react-isomorphic是根据React组件开发定制的一套Java平台开发工具包。
                            该工具包在maven环境中集成了前端开发所必须的一系列工具，如node、gulp、webpack等，
                            实现了前、后端开发的热部署、同构渲染，大大减少了项目开发人员的等待时间。<br/>
                            https://github.com/songshuzhong/react-java-isomorphic<br>`,
              class: 'i-home__me__main__desc'
            },
            {
              tag: 'div',
              innerHTML: '• i-renderer'
            },
            {
              tag: 'div',
              innerHTML: `前端低代码开发工具库。<br/>
                            依赖vue3.0+、elementplus基础库而实现，针对通用型后台管理系统可快速生成、迭代、维护的系统性解决方案。
                            自带使用手册，上手成本低，无学习坡度。<br/>
                            https://songshuzhong.github.io/i-home/dist/index.html<br/>`,
              class: 'i-home__me__main__desc'
            },
          ]
        },
        {
          renderer: 'divider',
          text: '奖项与证书'
        },
        {
          renderer: 'render',
          classname: 'i-home__me__main__subTitle',
          body: [
            {
              tag: 'div',
              innerHTML: '• 学士学位证书'
            },
            {
              tag: 'div',
              innerHTML: '东北石油大学',
              class: 'i-home__me__main__desc'
            },
            {
              tag: 'div',
              innerHTML: '• 英语四级证书'
            },
            {
              tag: 'div',
              innerHTML: '东北石油大学',
              class: 'i-home__me__main__desc'
            },
            {
              tag: 'div',
              innerHTML: '• 蓝桥杯软件学院毕业证书'
            },
            {
              tag: 'div',
              innerHTML: '蓝桥杯软件学院',
              class: 'i-home__me__main__desc'
            },
          ]
        },
        {
          renderer: 'divider',
          text: '技能总结'
        },
        {
          renderer: 'static',
          table: false,
          columns: [
            '熟悉react,react-router框架知识，能够灵活应用',
            '熟悉maven,git等项目及版本管理工具，有良好文档习惯，有自己的GitHub',
            '熟练运用gulp，webpack来构建项目',
            '熟悉JavaScript,es6等知识，能够灵活应用',
            '熟悉服务器,客户端渲染过程',
            '熟悉redux，react-redux状态管理机制',
            '熟悉vue,vue-router框架知识',
            '熟练使用linux常用指令',
            '熟悉exlipse, IntelliJ IDEA,sublime,webstorm等开发工具',
            '了解Java技术,了解io,多线程,集合等基础框架,了解Spring,Mybatis等开源框架',
            '了解大型数据库（MySQL）,了解SQL语句',
            '了解http协议, 熟悉服务器,客户端渲染过程',
            '了解vue,vue-router技术栈',
            '了解Echarts,G2图表绘制工具',
            '了解ant-design,elementUI等开源库',
            '了解less预处理器',
            '了解express,koa',
            '了解websocket相关知识',
            '有较强的学习能力，可以较快理解新技术及业务需求',
            '有持续关注前端技术，能承受一定工作压力',
            '有微信小程序开发经验'
          ]
        }
      ]
    }
  ]
};
