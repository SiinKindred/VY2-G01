const { Sequelize, DataTypes } = require("sequelize");
module.exports = function (sequelize) {
	return sequelize.define("OrderDetail", {
		id: {
			type: DataTypes.UUID,
			allowNull: false,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV4,
		},
		productName: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		price: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		thumbnail: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
		link: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
	});
};
