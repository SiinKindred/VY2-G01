const express = require("express");
const { verifyUser } = require("../middlewares/auth.middleware");

const router = express.Router();

const authUserController = require("../controllers/user/AuthUserController");

// test
router.get("/", authUserController.Test);

//POST LOGIN
router.post("/postLogin", authUserController.postLogin);

router.post("/postRegister", authUserController.postRegister);

router
	.route("/me")
	.all(verifyUser)
	.get(authUserController.getMe)
	.put(authUserController.changeInfo);

router.post("/change-password", verifyUser, authUserController.changePassword);

router.post("/update-reward", verifyUser, authUserController.updateReward);

module.exports = router;
