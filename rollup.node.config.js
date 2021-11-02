/*
 * @Author: tanzhiyu
 * @Date: 2021-11-01 17:18:58
 * @LastEditors: tanzhiyu
 * @LastEditTime: 2021-11-02 13:47:28
 */
import typescript from "@rollup/plugin-typescript";
import  resolve  from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const pkg = require('./package.json');

export default {
  input: "src/node/index.ts",
  output: {
    file: pkg.node
  },
  plugins: [
    typescript(),
    commonjs(),
    resolve(),
  ]
}