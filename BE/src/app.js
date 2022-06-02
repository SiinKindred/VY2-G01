const express = require('express');
const {PORT} = require('../src/config/index');

const loaders = require('./loaders');

const app = express();

loaders(app);

app.listen(PORT, () => {
    console.log(`Connect server on port http://localhost:${PORT}`);
});