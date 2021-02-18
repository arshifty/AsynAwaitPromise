const express = require("express");
const router = express.Router();
const Post = require("../model/customercollection");
const controller = require("../controller/customerController");

router.post("/", controller.save);
router.get("/async", controller.retrive)
router.get("/promise", controller.promiseRetrive)
router.get("/asyncPromise", controller.retriveWithoutPromise)
module.exports = router;
