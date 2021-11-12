/*
 * @Author: tanzhiyu
 * @Date: 2021-10-07 23:35:43
 * @LastEditors: tanzhiyu
 * @LastEditTime: 2021-11-10 19:25:46
 */
import React from "react";
import "antd/dist/antd.less";
import { RButton }  from "rcrai-rainbow/lib/index";
// import { Button as RButton } from 'antd';

const App: React.FC = () => {
  return (
    <div className="app">
      <RButton type="primary" onClick={() => alert("保存成功！")} >报错</RButton>
    </div>
  );
};

export default App;

export const appLog = (arg: string) => console.log(arg);
