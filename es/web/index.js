/*
 * @Author: tanzhiyu
 * @Date: 2021-10-05 18:56:27
 * @LastEditors: tanzhiyu
 * @LastEditTime: 2021-11-03 15:25:08
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App, { appLog } from './App';
appLog("hello word");
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));
export { App };