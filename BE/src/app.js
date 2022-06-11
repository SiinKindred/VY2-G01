const express = require("express");
const { PORT } = require("../src/config/index");

const {AppLoader} = require("./loaders/index");

const app = express();

AppLoader(app).then(() => {
	console.log("Load App Successful!");
}).catch((e) => {
	console.error(e);
});

app.listen(PORT, () => {
	console.log(`Connect server on port http://localhost:${PORT}`);
});
