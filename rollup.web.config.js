/*
 * @Author: tanzhiyu
 * @Date: 2021-11-01 18:33:55
 * @LastEditors: tanzhiyu
 * @LastEditTime: 2021-11-02 13:45:41
 */
/*
 * @Author: tanzhiyu
 * @Date: 2021-11-01 17:18:58
 * @LastEditors: tanzhiyu
 * @LastEditTime: 2021-11-01 18:05:23
 */
import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import injectProcessEnv from 'rollup-plugin-inject-process-env';

const pkg = require('./package.json');

export default {
  input: "src/ui/index.tsx",
  output: {
    file: pkg.main,
  },
  plugins: [
    typescript(),
    commonjs(),
    injectProcessEnv({
      NODE_ENV: "development",
      options: {
        verbose: true
      }
    }),
    nodeResolve(),
  ]
}