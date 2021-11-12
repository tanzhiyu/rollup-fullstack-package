/*
 * @Author: tanzhiyu
 * @Date: 2021-11-03 11:33:07
 * @LastEditors: tanzhiyu
 * @LastEditTime: 2021-11-03 15:18:19
 */
export default {
  entry: 'src/web/index.tsx',
  esm: "babel",
  cjs: "babel",
  umd: {
    name: "umd",
    file: "umd"
  },
  doc: {
    themeConfig: { mode: 'dark' },
    base: '/start-ts'
  },
}