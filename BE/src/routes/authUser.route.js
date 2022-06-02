const express = require('express');
const {verifyUser} = require("../middlewares/auth.middleware");


const router = express.Router();

const authUserController = require("../controllers/user/AuthUserController");

// test
router.get("/",authUserController.Test);


//POST LOGIN 
router.post("/postLogin",authUserController.postLogin);
router.post("/postRegister",authUserController.postRegister);
router.get("/me",verifyUser,authUserController.getMe);
module.exports = router;