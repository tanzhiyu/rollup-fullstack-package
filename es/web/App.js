/*
 * @Author: tanzhiyu
 * @Date: 2021-10-07 23:35:43
 * @LastEditors: tanzhiyu
 * @LastEditTime: 2021-11-03 15:24:33
 */
import React from 'react';

var App = function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, "hello world");
};

export default App;
export var appLog = function appLog(arg) {
  return console.log(arg);
};