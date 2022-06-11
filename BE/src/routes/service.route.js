const express = require('express');

const router = express.Router();

const  serviceController = require("../controllers/service/ServiceController");

router.get("/",serviceController.getService);

router.post("/",serviceController.createService);

module.exports = router;