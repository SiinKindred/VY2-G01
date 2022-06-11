const { sequelize } = require("../models");

module.exports = async () => {
	try {
		// await sequelize.sync({ force: true });
		await sequelize.sync();
		console.clear();

		console.log("Connect database successfully !");
	} catch (error) {
		console.clear();
		
		console.error(error);
		console.log("Connect database failed !");
		process.exitCode(0);
	}
};
