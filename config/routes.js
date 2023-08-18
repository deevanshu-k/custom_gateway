const auth = require("../services/auth");

const ROUTES = [
    {
        url: '/todos',
        authServices: [auth.checkForAuth,auth.checkForAuth2],
        creditCheck: false,
        proxy: {
            target: "https://jsonplaceholder.typicode.com",
            changeOrigin: true,
            pathRewrite: {
                [`^/free`]: '',
            },
        }
    },
    {
        url: '/posts',
        authServices: [auth.checkForAuth],
        creditCheck: false,
        proxy: {
            target: "https://jsonplaceholder.typicode.com",
            changeOrigin: true,
            pathRewrite: {
                [`^/free`]: '',
            },
        }
    },
    {
        url: '/static',
        authServices: [auth.checkForAuth2],
        creditCheck: false,
        proxy: {
            target: "http://127.0.0.1/",
            changeOrigin: false,
            pathRewrite: {
                [`^/static`]: '/',
            },
            onError: (err, req, res, target) => {
                res.writeHead(500, {
                    'Content-Type': 'text/plain',
                  });
                res.end('Something went wrong. And we are reporting a custom error message.');
            }
        }
    },
    {
        url: '/products',
        authServices: [],
        creditCheck: false,
        proxy: {
            target: "https://dummyjson.com",
            changeOrigin: true,
            pathRewrite: {
                [`^/free`]: '',
            },
            onError: (err, req, res, target) => {
                res.writeHead(500, {
                    'Content-Type': 'text/plain',
                  });
                res.end('Something went wrong. And we are reporting a custom error message.');
            }
        }
    }
]

module.exports = ROUTES;