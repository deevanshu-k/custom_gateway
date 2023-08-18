require("dotenv").config();
const express = require("express");
const app = express();
const ROUTES = require("./config/routes");
const proxy = require("./services/proxy");
const { createProxyMiddleware } = require("http-proxy-middleware");

const port = process.env.PORT;

app.use("/search", createProxyMiddleware({
    target: "https://www.google.com", changeOrigin: true, onError: (err) => {
        console.log(err);
    }
}));
proxy.setupProxy(app, ROUTES);

app.listen(port, () => {
    console.log("Gateway running on port :" + port);
});

