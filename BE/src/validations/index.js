const { PARTNER, SERVICE, PARTNERSERVICE } = require("../models");
const DetailsSchema = [
	{
		productName: "string",
		quantity: "number",
		price: "number",
		thumbnail: "string",
		link: "string",
	},
];

const OrderSchema = {
	total: "number",
	reward: "number",
	voucherCode: "string",
	partner_id: "string",
	user_id: "string",
	details: DetailsSchema,
};

module.exports = {
	createOrder: async (req, res, next) => {
		const { total, details, voucherCode, partner_id, user_id, reward } =
			req.body;
		const { service_code } = req.headers;

		const services = await SERVICE.findAll({
			attributes: ["service_name", "service_code"],
		});

		if (Object.keys(req.body).length == 0) {
			return res.BadRequestException({
				message: "No Info",
				schema: OrderSchema,
			});
		}

		if (!service_code) {
			return res.BadRequestException({
				message: `Please add "service_code" to headers. this is a service code.`,
				note: services,
			});
		}

		const isExistedService = await SERVICE.findOne({
			where: { service_code },
		});

		if (!isExistedService) {
			return res.BadRequestException({
				message: `Please add "service_code" to headers. this is a service code.`,
				note: services,
			});
		}

		if (!details || typeof details !== "object")
			return res.BadRequestException({
				message: "details incorrect. details is a Array",
				Schema: DetailsSchema,
			});

		if (!total || total < 1)
			return res.BadRequestException({
				message: "total is a number and more than 0.",
			});

		if (!partner_id)
			return res.BadRequestException({
				message: "partnerId is empty",
				Note: "This is a User with PARTNER type",
			});

		if (!user_id)
			return res.BadRequestException({
				message: "userId is empty",
				Note: "This is a User with USER type",
			});

		const partner = await PARTNER.findOne({
			where: { partner_id: partner_id },
		});

		if (!partner)
			return res.BadRequestException({
				message: "Partner not existed",
			});

		const isPartnerOfService = await PARTNERSERVICE.findOne({
			where: {
				partner_id: partner_id,
				service_id: isExistedService.service_id,
			},
		});

		if (!isPartnerOfService) {
			return res.BadRequestException({
				message: `Partner Not Using Service ${service_code}`,
			});
		}

		const user = await PARTNER.findOne({
			where: { partner_id: user_id },
		});

		if (!user)
			return res.BadRequestException({ message: "User not existed" });

		res.locals.order = {
			create_at: new Date(),
			reward,
			total,
			details,
			voucherCode,
			partner_id,
			user_id,
		};

		next();
	},
};
