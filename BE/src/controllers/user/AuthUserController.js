
const {PARTNER, PARTNERSERVICE} = require('../../models');
const { generateAccessToken } = require("../../utils/token");
var md5 = require("md5");
const {v4 : uuidv4} = require("uuid");

class AuthUserController {
    async Test(req, res, next) {
        const users = await PARTNERSERVICE.findAll();
        res.send(users);
    }


    //[POST] http://localhost:6000/api/user/postLogin
    async postLogin(req, res, next) {
        console.log(req.body);
        const { username, password } = req.body;
        var user = await PARTNER.findOne({ username });
        
        if (!user) {
            res.status(400).send({
                success: false,
                msg: "Tài khoản và mật khẩu không đúng"
            });
            return;
        }

    
        const passwordCrypto = md5(password);
        console.log({passwordCrypto, p: user.password});
        if (user.password !== passwordCrypto) {
        
            res.status(400).send({
                success: false,
                msg: "Tài khoản và mật khẩu không đúng"
            });
            return;
        }
        const token = generateAccessToken(user);
        res.status(200).send({
            success: true,
            msg: "Đăng nhập thành công",
            accessToken: token
        })

    }


    //[POST] /api/user/register
    async postRegister(req, res, next) {

        let { username, password, name, email, gender, dob, phone, address, type, reward,company_name } = req.body;
        
        const isUser = await PARTNER.findOne({ where: { username: username } });
        
        if (isUser) {
            res.status(404).send({
                success: false,
                msg: "Tài khoản đã tồn tại"
            })
        }
        else {
           
            password = md5(password);
       
            const newPartner = await PARTNER.create({username,password,name,email,gender,phone,address,type,reward,company_name,dob});
            
            const id = uuidv4();
            console.log(req.body)
            req.body.services.forEach(async (el)=>{
                await PARTNERSERVICE.create({partner_id: newPartner.partner_id,service_id: el})
            })
            
            res.status(200).send({
                success: true,
                msg: "Đăng ký thành công"
            })


        }

    }

    //[GET] /api/user/getMe
   async getMe(req,res,next)
    {
        const username = req.user.username;
        const user = await PARTNER.findOne({ where: { username: username } });
        res.status(200).json({ 
            success : true,
            infoUser : user
        })
    }
}

module.exports = new AuthUserController()