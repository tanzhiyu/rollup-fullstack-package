/*
 * @Author: tanzhiyu
 * @Date: 2021-11-08 15:50:47
 * @LastEditors: tanzhiyu
 * @LastEditTime: 2021-11-10 14:58:47
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.body)
  res.json([{a: "1"}]);
});

router.post("/cats", function(req, res, next) {
  console.log("req.body", typeof req.body, req.body);
  const cats = [
    {
      name: "kitty",
      age: 3
    },
    {
      name: "tom",
      age: 4
    },
  ]
  res.json(cats);
});

module.exports = router;
