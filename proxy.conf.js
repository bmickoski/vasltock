/**
 * File defines Angular proxy used for development.
 * Server can be mock-server or local instance of Arkcase
 */
const config = require("config");

module.exports = config.get("proxyValstock");
