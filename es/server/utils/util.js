function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 * @Author: tanzhiyu
 * @Date: 2021-10-07 23:03:59
 * @LastEditors: tanzhiyu
 * @LastEditTime: 2021-11-02 16:41:00
 */
var fs = require('fs');

var path = require('path');

var process = require("process");

var cwd = process.cwd();
export var getProcessCwd = function getProcessCwd() {
  return cwd;
};
export var writeDataFile = function writeDataFile(data) {
  if (!data || _typeof(data) !== 'object') {
    return;
  }

  fs.writeFileSync(path.join(cwd, 'data.json'), JSON.stringify(data));
};