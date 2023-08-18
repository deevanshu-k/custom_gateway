const morgan = require("morgan");
let logger = {};

logger.setupLogging = (app) => {
    app.use(morgan('short'));
}

module.exports = logger;