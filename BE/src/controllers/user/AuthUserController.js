const { PARTNER, PARTNERSERVICE, SERVICE } = require("../../models");
const { generateAccessToken } = require("../../utils/token");
var md5 = require("md5");
const { v4: uuidv4 } = require("uuid");

class AuthUserController {
	async Test(req, res, next) {
		const users = await PARTNERSERVICE.findAll();
		res.Success({ data: users });
	}

	//[POST] http://localhost:6000/api/user/postLogin
	async postLogin(req, res, next) {
		const { username, password } = req.body;

		const user = await PARTNER.findOne({
			where: { username, password: md5(password) },
		});

		if (!user)
			return res.UnauthorizedException({
				message: "Tài khoản và mật khẩu không đúng!",
			});

		if (user.type == "PARTNER") {
			const partnerService = await PARTNERSERVICE.findAll({
				where: { partner_id: user.partner_id },
			});

			user.services = await SERVICE.findAll({
				where: {
					service_id: partnerService.map(
						({ service_id }) => service_id
					),
				},
			});
		}

		const accessToken = generateAccessToken(user);

		res.Success({
			message: "Đăng nhập thành công",
			data: user,
			accessToken,
		});
	}

	//[POST] /api/user/register
	async postRegister(req, res, next) {
		try {
			let {
				username,
				password,
				name,
				email,
				gender,
				dob,
				phone,
				address,
				reward,
				company_name,
				services,
			} = req.body;

			const isExisted = await PARTNER.findOne({
				where: { username: username },
			});

			if (isExisted) {
				return res.ConflictException({
					message: "Tài khoản đã tồn tại",
				});
			}

			password = md5(password);

			const type = company_name ? "PARTNER" : "USER";

			const user = await PARTNER.create({
				username,
				password,
				name,
				email,
				gender,
				phone,
				address,
				type,
				reward,
				company_name,
				dob,
			});

			if (user.type == "PARTNER")
				for (const service_id of services) {
					await PARTNERSERVICE.create({
						partner_id: user.partner_id,
						service_id,
					});
				}

			res.Success({
				message: "Đăng ký thành công",
			});
		} catch (e) {
			res.InternalServerError(e);
		}
	}

	//[GET] /api/user/me
	async getMe(req, res, next) {
		const username = req.user.username;

		const data = await PARTNER.findOne({ where: { username: username } });

		if (!data) return res.UnauthorizedException();

		res.Success({ data });
	}

	async changeInfo(req, res, next) {
		const { name, email, gender, dob, phone, address } = req.body;
		const { sub } = req.user;

		const userEntity = await PARTNER.findOne({
			where: { partner_id: sub },
		});
		userEntity.name = name;
		userEntity.email = email;
		userEntity.gender = gender;
		userEntity.dob = dob;
		userEntity.phone = phone;
		userEntity.address = address;

		userEntity.save();

		res.Success({ message: "Change Info Succesful" });
	}

	async changePassword(req, res, next) {
		const { old_password, new_password } = req.body;
		const { sub } = req.user;

		console.log(old_password, new_password, req.body);

		const user = await PARTNER.findOne({ where: { partner_id: sub } });

		if (md5(old_password) != user.password) {
			return res.BadRequestException({
				message: "Old password is incorrect",
			});
		}

		user.password = md5(new_password);

		await user.save();

		res.Success({ message: "Change Password Successful" });
	}
}

module.exports = new AuthUserController();
