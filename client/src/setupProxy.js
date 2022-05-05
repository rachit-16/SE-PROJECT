const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/execute',
    createProxyMiddleware({
      target: 'https://code-play-apis.herokuapp.com/api/execute',
      changeOrigin: true,
    })
  );
};