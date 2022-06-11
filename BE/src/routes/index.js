const express = require("express");

const router = express.Router();

const authUserRoute = require("./authUser.route");
const serviceRoute = require("./service.route");
const orderRoute = require("./order.router");
const { verifyUser } = require("../middlewares/auth.middleware");

router.use("/user", authUserRoute);
router.use("/service", serviceRoute);
router.use("/orders", verifyUser, orderRoute);

router.get("/", (req, res) => {
	res.json({ done: true });
});

module.exports = router;
