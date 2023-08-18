#### A Microservices API Gateway Built Using Express.js and Express Middleware
----
# Micro Gateway

> **INPORTANT NOTICE**
 A Microservices API Gateway Built Using Express.js and Express Middleware.

Micro gateway is a simple customizable gateway server.

### Configuration
1) add .env int root folder
2) add PORT variable
   ```PORT=8080```
3) add proxy routes object in ROUTES Array in config/routes.js
   ```js
    # Example object array
    let Routes = [{
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
    }]
   ``` 

#### Route Object

1) options.url : Incomming route, we can use all express wildcard syntx in it.
2) authServices : Array of valid middleware function 
   ```js
    function middleware(req,res,next){
        next();
    }
   ``` 
3) creditCheck : Bool Value ( InDevelopment )
4) proxy : Object
   - target : target url
     ```https://jsonplaceholder.typicode.com```
    - changeOrigin : bool value for cors origin policy
    - pathRewrite : to rewrite the url path
        ```js
        // host/free -> proxyhost/api
      pathRewrite: {
                [`^/free`]: '/api',
            }
        ``` 
    - we can add multiple rewrite rules

```js
    // Example object array
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
    }
   ``` 