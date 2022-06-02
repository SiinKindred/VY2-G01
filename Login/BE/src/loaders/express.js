const express = require('express');
const helmet = require('helmet');
const routes = require('../routes');
const morgan = require("morgan");
const cors = require('cors');

module.exports = app => {

    app.use(helmet());
    app.use(express.json());
    app.use(cors());
    routes(app);



};