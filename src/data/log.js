export default {
  renderer: 'service',
  classname: 'i-home__logs',
  initApi: {
    url: 'https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/logs'
  },
  body: {
    renderer: 'timeline',
    body: {
      renderer: 'html',
      html: '<%=data.message%>'
    }
  }
};
