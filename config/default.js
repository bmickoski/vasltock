const logger = require("../utils/logger");
logger.info("Load config DEFAULT");

/**
 * Proxy settings for arkcase applications
 * Detailed proxy config docs  at https://webpack.js.org/configuration/dev-server/#devserverproxy
 */

module.exports = {
  /**
   * Mocks server proxy settings
   */
  proxyValstock: {
    "/api/*": {
      target: "http://localhost:3000",
      secure: false,
      logLevel: "debug",
      changeOrigin: true,
    },
  },
};
