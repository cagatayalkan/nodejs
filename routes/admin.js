const express = require("express");

const router = express.Router();

router.get("/admin", (req, res, next) => {
  res.send("hello admin");
});

module.exports = router;
