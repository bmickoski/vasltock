/**
 *  Start mocking server that is used for testing.
 *  It uses JSON files located in "data/mock-data/api" as responses
 *
 */

const express = require("express");
const apiMocker = require("connect-api-mocker");
const logger = require("../../utils/logger");

const PORT = 3000;

const app = express();

//  Init JSON Mock data
app.use(apiMocker("/api", "data/mock-data/api"));

app.listen(PORT);
logger.header(`Mock server is listening at ${PORT}`);
