const router = require("express").Router();
const path = require("path");

const resRoutes = require("./res");

router.use("/reserve", resRoutes);
// router.use("/program", resRoutes);


module.exports = router;
