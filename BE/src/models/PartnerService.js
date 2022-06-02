const {Sequelize, DataTypes} = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('PartnerService', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    }
  });
};
