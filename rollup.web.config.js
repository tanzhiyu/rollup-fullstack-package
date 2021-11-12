/*
 * @Author: tanzhiyu
 * @Date: 2021-11-01 18:33:55
 * @LastEditors: tanzhiyu
 * @LastEditTime: 2021-11-05 14:50:03
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
import less from 'rollup-plugin-less';
import lessModules from 'rollup-plugin-less-modules';
import css from 'rollup-plugin-css-porter';
import postcss from 'rollup-plugin-postcss';
import jsx from 'rollup-plugin-jsx';
import svgSprite from 'rollup-plugin-svg-sprite';

const pkg = require('./package.json');

export default {
  input: "src/web/index.tsx",
  output: {
    file: pkg.main,
    name: "startTs"
  },
  plugins: [
    typescript(),
    commonjs(),
    less(),
    lessModules(),
    css(),
    postcss({
      extensions: ['.css', '.scss', '.less'],
      use : [
        'sass',
        ['less', { javascriptEnabled: true }]
      ],
    }),
    jsx( {factory: 'React.createElement'} ),
    injectProcessEnv({
      NODE_ENV: "development",
      options: {
        verbose: true
      }
    }),
    svgSprite({
      outputFolder: 'build/public'
    }),
    nodeResolve(),
  ]
}