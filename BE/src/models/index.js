const { Sequelize } = require("sequelize");
var _Service = require("./Service");
var _Partner = require("./Partner");
var _PartnerService = require("./PartnerService");
var _TransactionAiport = require("./TransactionAirport");
var _Order = require("./order");
var _OrderDetail = require("./order-detail");

const CONFIG_DB = require("../config/database_config");

const sequelize = new Sequelize(CONFIG_DB);

var SERVICE = _Service(sequelize);
var PARTNER = _Partner(sequelize);
var PARTNERSERVICE = _PartnerService(sequelize);
var TRANSACTIONAIRPORT = _TransactionAiport(sequelize);
var ORDER = _Order(sequelize);
var ORDERDETAIL = _OrderDetail(sequelize);

SERVICE.belongsToMany(PARTNER, {
	through: PARTNERSERVICE,
	foreignKey: "service_id",
	otherKey: "partner_id",
});

PARTNER.belongsToMany(SERVICE, {
	through: PARTNERSERVICE,
	foreignKey: "partner_id",
	otherKey: "service_id",
});

ORDERDETAIL.belongsTo(ORDER, {
	foreignKey: "order_id",
});

ORDER.hasMany(ORDERDETAIL, {
	foreignKey: "order_id",
});

TRANSACTIONAIRPORT.belongsTo(PARTNERSERVICE, {
	foreignKey: "partner_service_id",
});
PARTNERSERVICE.hasMany(TRANSACTIONAIRPORT, {
	foreignKey: "partner_service_id",
});

module.exports = {
	SERVICE,
	PARTNER,
	ORDER,
	ORDERDETAIL,
	PARTNERSERVICE,
	TRANSACTIONAIRPORT,
	sequelize,
};
