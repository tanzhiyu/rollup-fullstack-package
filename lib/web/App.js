"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.appLog = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Author: tanzhiyu
 * @Date: 2021-10-07 23:35:43
 * @LastEditors: tanzhiyu
 * @LastEditTime: 2021-11-03 15:24:33
 */
var App = function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "app"
  }, "hello world");
};

var _default = App;
exports.default = _default;

var appLog = function appLog(arg) {
  return console.log(arg);
};

exports.appLog = appLog;