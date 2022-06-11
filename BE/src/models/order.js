const { Sequelize, DataTypes } = require("sequelize");
module.exports = function (sequelize) {
	return sequelize.define(
		"Order",
		{
			order_id: {
				type: DataTypes.UUID,
				allowNull: false,
				primaryKey: true,
				defaultValue: Sequelize.UUIDV4,
			},
			create_at: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			total: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			reward: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			voucherCode: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			user_id: {
				type: DataTypes.UUID,
				allowNull: false,
			},
			partner_id: {
				type: DataTypes.UUID,
				allowNull: false,
			},
		},
		{
			timestamps: false,
			createdAt: false,
			updatedAt: false,
		}
	);
};
