const {createProxyMiddleware} = require("http-proxy-middleware");

let proxy = {};

proxy.setupProxy = (app,routes) => {
    routes.forEach(route => {
        app.use(route.url,createProxyMiddleware(route.proxy));
    });
}

module.exports = proxy;

