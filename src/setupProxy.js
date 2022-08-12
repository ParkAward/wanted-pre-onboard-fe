const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/production",
    createProxyMiddleware({
      target: "https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com",
      changeOrigin: true,
    })
  );
};
