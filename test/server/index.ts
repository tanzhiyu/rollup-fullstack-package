/*
 * @Author: tanzhiyu
 * @Date: 2021-11-02 15:43:14
 * @LastEditors: tanzhiyu
 * @LastEditTime: 2021-11-02 16:29:59
 */
/*
 * @Author: tanzhiyu
 * @Date: 2021-11-02 15:29:35
 * @LastEditors: tanzhiyu
 * @LastEditTime: 2021-11-02 15:41:00
 */
const {greet, getProcessCwd, writeDataFile} = require('../../build/server');

const greetStr = greet();
const cwdPath = getProcessCwd();

console.log(greetStr, cwdPath);

writeDataFile({
  str: "浑天又暗地忍不住的流行"
});