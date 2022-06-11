const tedious = require("tedious");
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

module.exports = {
	host: DB_HOST,
	username: DB_USER,
	password: DB_PASSWORD,
	database: DB_NAME,
	dialect: "mssql",
	dialectModule: tedious,
	port: 1433,
	pool: {
		//pool configuration
		max: 5, //maximum number of connection in pool
		min: 0, //minimum number of connection in pool
		acquire: 30000, //maximum time in ms that pool will try to get connection before throwing error
		idle: 10000, //maximum time in ms, that a connection can be idle before being released
	},
};
