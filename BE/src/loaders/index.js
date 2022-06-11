const expressLoader = require("./express");
const sqlserverLoader = require("./sqlserverLoader");

module.exports.AppLoader = async (expressApp) => {
	await sqlserverLoader();
	expressLoader(expressApp);
};
