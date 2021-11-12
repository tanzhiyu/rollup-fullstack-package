/*
 * @Author: tanzhiyu
 * @Date: 2021-11-10 14:44:49
 * @LastEditors: tanzhiyu
 * @LastEditTime: 2021-11-10 15:27:50
 */
const http = require('http');

const opts = {
  port: 3000,
  host: "localhost",
  path: "/users/cats",
  method: "POST",
  data: {
    postData: "postData"
  }
}

const req = http.request(opts, function(res) {
  res.setEncoding("utf8");
  res.on("data", function(data) {
    console.log(data);
  })
});

req.write(Buffer.from(JSON.stringify({a: "aaa"})))

req.end();