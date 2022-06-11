const jwt = require("jsonwebtoken");
const { secret } = process.env;

module.exports = {
	generateAccessToken: ({
		name,
		username,
		partner_id,
		email,
		type,
		services,
		company_name,
	}) => {
		if(services)
    		services = services.map((e) => e.service_code);

        // tạo ra token
		return jwt.sign(
			{
				name: type == "PARTNER" ? company_name : name,
				username,
				email,
				sub: partner_id,
				type,
				services,
			},
			secret,
			{
				expiresIn: "90 days",
			}
		);
	},
	// //
	generateRefreshToken: (customer) => {
		return jwt.sign(
			{ id: customer._id, isAdmin: customer["isAdmin"] },
			"myRefreshToken"
		);
	},
};
