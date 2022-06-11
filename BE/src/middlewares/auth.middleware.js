const jwt = require("jsonwebtoken");
const { secret } = process.env;

module.exports = {
	verifyUser: async (req, res, next) => {
		const { authorization } = req.headers;

		if (!authorization) return res.UnauthorizedException();

		const token = authorization.split(" ")[1];

		if (!token) return res.UnauthorizedException();

		try {
			req.user = jwt.verify(token, secret);

			next();
		} catch (e) {
			res.UnauthorizedException();
		}
	},
};
