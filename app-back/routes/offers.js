var express = require("express");
var router = express.Router();
const Job = require("../controllers/job");

//GET ALL
router.get("/", function (req, res, next) {
  Job.findAll().then((result) => {
    res.send(result);
  });
});

//POST
router.post("/", function (req, res, next) {
  const { name, company, salary, city } = req.body;

  Job.insertOne({ name, company, salary, city }).then((result) => {
    res.send(result.ops[0]);
  });
});
module.exports = router;
