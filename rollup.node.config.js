/*
 * @Author: tanzhiyu
 * @Date: 2021-11-01 17:18:58
 * @LastEditors: tanzhiyu
 * @LastEditTime: 2021-11-01 18:05:23
 */
import typescript from "@rollup/plugin-typescript";
export default {
  input: "src/node/index.ts",
  output: {
    dir: "build",
    format: "umd"
  },
  plugins: [typescript()]
}