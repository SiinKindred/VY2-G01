const express = require("express");

const ctrler = require("../controllers/order/OrderController");

const { createOrder } = require("../validations");

const router = express.Router();

router.route("/").get(ctrler.getOrders).post(createOrder, ctrler.createOrder);

router.route("/:id").get(ctrler.getOrderById);

module.exports = router;
