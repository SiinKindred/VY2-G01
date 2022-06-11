const {SERVICE} = require('../../models');

class ServiceController {
    async getService(req,res,next)
    { 
        const service = await SERVICE.findAll();
        res.status(200).json({
            success: true, 
            listService  : service
        })
    }


    async createService(req, res, next){
        const {serviceCode} = req.body;
        console.log(serviceCode);
        try {
            await SERVICE.create({
                service_code: serviceCode
            });
            res.status(200).json({
                success: true, 
                message: 'Tao service thanh cong !'
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                success: false, 
                message: 'Tao service that bai!'
            });
        }
      
    }
}

module.exports = new ServiceController()