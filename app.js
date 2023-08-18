require("dotenv").config();
const express = require("express");
const app = express();
const ROUTES = require("./config/routes");
const proxy = require("./services/proxy");
const logger = require("./services/logger");

// ENV Variables
const port = process.env.PORT;

// LOGGER SETUP
logger.setupLogging(app);

// PROXY SETUP
// Edit config/ROUTES.js for proxy setup
proxy.setupProxy(app, ROUTES);

app.listen(port, () => {
    console.log("Gateway running on port :" + port);
});

