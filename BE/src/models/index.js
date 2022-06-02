require('dotenv').config();

var DataTypes = require("sequelize").DataTypes;
const {Sequelize} = require('sequelize');
var _Service = require("./Service");
var _Partner = require("./Partner");
var _PartnerService = require("./PartnerService");
var _TransactionAiport = require("./TransactionAirport");

const sequelize = new Sequelize(process.env.DB_URI);

  var SERVICE = _Service(sequelize);
  var PARTNER = _Partner(sequelize);
  var PARTNERSERVICE = _PartnerService(sequelize);
  var TRANSACTIONAIRPORT = _TransactionAiport(sequelize);

  SERVICE.belongsToMany(PARTNER, {  through: PARTNERSERVICE, foreignKey: "service_id", otherKey: "partner_id" });
  PARTNER.belongsToMany(SERVICE, {  through: PARTNERSERVICE, foreignKey: "partner_id", otherKey: "service_id" });

  TRANSACTIONAIRPORT.belongsTo(PARTNERSERVICE, { foreignKey: "partner_service_id"});
  PARTNERSERVICE.hasMany(TRANSACTIONAIRPORT, {  foreignKey: "partner_service_id"});


module.exports  = {
  SERVICE,
  PARTNER,
  PARTNERSERVICE,
  TRANSACTIONAIRPORT,
  sequelize
};
