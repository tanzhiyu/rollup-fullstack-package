/*
 * @Author: tanzhiyu
 * @Date: 2021-10-08 00:20:39
 * @LastEditors: tanzhiyu
 * @LastEditTime: 2021-10-08 00:22:52
 */

import { sayHello } from "./util";
const greet = (): string => {
  console.log("hello");
  return sayHello()
}

greet();