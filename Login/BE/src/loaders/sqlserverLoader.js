const {sequelize} = require('../models');

module.exports = async () => {
    try {
        await sequelize.sync();
        console.log('Connect database successfully !');
    } catch (error) {
        console.error(error);
        console.log('Connect database failed !');
        process.exitCode(0);
    }
};