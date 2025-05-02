const express = require('express');
const { getAllLaunches } = require('./launches.controller');

const launchRouter = express.Router();

launchRouter.get('launch', getAllLaunches);

module.exports = launchRouter;