const {Sequelize, DataTypes} = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('Service', {
    service_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    service_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  });
};
