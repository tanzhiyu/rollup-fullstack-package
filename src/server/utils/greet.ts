/*
 * @Author: tanzhiyu
 * @Date: 2021-10-08 00:20:39
 * @LastEditors: tanzhiyu
 * @LastEditTime: 2021-11-02 15:26:27
 */

import { getProcessCwd } from "./util";

export const greet = (): string => {
  console.log("hello");
  return getProcessCwd()
}
