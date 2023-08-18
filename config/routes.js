const auth = require("../services/auth");

const ROUTES = [
    {
        url: '/todos',
        authServices: [auth.checkForTeacherAuth,auth.checkForTeacherAuth2],
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
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
        authServices: [auth.checkForTeacherAuth,auth.checkForTeacherAuth2],
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "https://jsonplaceholder.typicode.com",
            changeOrigin: true,
            pathRewrite: {
                [`^/free`]: '',
            },
        }
    },
    {
        url: '/products',
        authServices: [],
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
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