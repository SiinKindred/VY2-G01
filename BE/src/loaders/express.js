const express = require("express");
const helmet = require("helmet");
const routers = require("../routes");
const cors = require("cors");

module.exports = (app) => {
	app.use(helmet());
	app.use(express.json());
	app.use(cors());

	app.use((req, res, next) => {
		// global res method
		res.UnauthorizedException = (obj = {}) =>
			res
				.status(401)
				.json({ success: false, message: "UNAUTHORIZED", ...obj });

		res.BadRequestException = (obj = {}) =>
			res
				.status(400)
				.json({ success: false, message: "BAD_REQUEST", ...obj });

		res.ConflictException = (obj = {}) =>
			res
				.status(409)
				.json({ success: false, message: "CONFLICT", ...obj });

		res.NotFoundException = (obj = {}) =>
			res
				.status(404)
				.json({ success: false, message: "NOT_FOUND", ...obj });

		res.InternalServerError = (obj = {}) =>
			res
				.status(500)
				.json({
					success: false,
					message: "Internal Server Error",
					...obj,
				});

		res.Success = (obj = {}) =>
			res
				.status(200)
				.json({ success: true, message: "Successful", ...obj });

		// continue flow
		next();
	});

	app.use("/api", routers);
};
