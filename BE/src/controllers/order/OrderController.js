const { ORDER, PARTNER, ORDERDETAIL } = require("../../models");

module.exports = class OrderController {
	static async createOrder(req, res, next) {
		const { details, ...order } = res.locals.order;

		const userEntity = await PARTNER.findOne({
			where: { partner_id: order.user_id },
		});

		userEntity.reward += order.reward;

		const data = await ORDER.create(order);

		data.dataValues.details = [];

		for (const product of details) {
			data.dataValues.details.push(
				await ORDERDETAIL.create({
					...product,
					order_id: data.order_id,
				})
			);
		}

		await userEntity.save();

		res.Success({ message: "Create Order Successful", data });
	}

	static async getOrders(req, res, next) {
		const { type, sub } = req.user;

		const data = await ORDER.findAll({
			where: {
				[type == "PARTNER" ? "partner_id" : "user_id"]: sub,
			},
		});

		for (const order of data) {
			order.dataValues.partner_id = await PARTNER.findOne({
				where: { partner_id: order.partner_id },
			});

			order.dataValues.user_id = await PARTNER.findOne({
				where: { partner_id: order.user_id },
			});

			order.dataValues.details = await ORDERDETAIL.findAll({
				where: { order_id: order.order_id },
			});
		}

		res.Success({ data });
	}

	static async getOrderById(req, res, next) {
		const { id } = req.params;

		const data = await ORDER.findOne({ where: { order_id: id } });

		if (!data)
			return res.NotFoundException({ message: "Not Found Order" });

		data.dataValues.details = await ORDERDETAIL.findAll({
			where: { order_id: id },
		});

		res.Success({ data });
	}
};
