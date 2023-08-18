const ROUTES = [
    {
        url: '/todos',
        auth: false,
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
        auth: false,
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
        auth: false,
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
        }
    }
]

module.exports = ROUTES;