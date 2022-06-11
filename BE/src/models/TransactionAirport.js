const {Sequelize, DataTypes} = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('TransactionAirport', {
        transactionID: {
            type : DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        customerID: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        customerName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        serviceID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        unitCost: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        totalCost: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        pickupDate: {
            type: DataTypes.DATE,
            allowNull: false,
            unique: false
        },
        pickupTime: {
            type: DataTypes.TIME,
            allowNull: false,
            unique: false
        },
        fromAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        toAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        vehicle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        transactionStartus: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        voucherId: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        giftId: {
            type: DataTypes.STRING,
            defaultValue: null
        }
        //VOUCHER ID

        //GIRT ID

    }
)};