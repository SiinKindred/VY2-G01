module.exports = (permission) => {
	return (req, res, next) => {
		const { user } = req;

		if (user.type == permission) return next();

		return res.UnauthorizedException({ message: "ROLE_DENIED" });
	};
};
