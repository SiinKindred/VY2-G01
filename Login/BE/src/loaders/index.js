const expressLoader = require('./express');
const sqlserverLoader = require('./sqlserverLoader');

module.exports = async expressApp => {
    await sqlserverLoader();
    expressLoader(expressApp);
};