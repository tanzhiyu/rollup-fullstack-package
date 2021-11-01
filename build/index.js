/*
 * @Author: tanzhiyu
 * @Date: 2021-10-07 23:03:59
 * @LastEditors: tanzhiyu
 * @LastEditTime: 2021-11-01 18:20:04
 */
const fs = require('fs');
const path = require('path');
const process = require("process");
const cwd = process.cwd();
const writeDataFile = (data) => {
    fs.writeFileSync(path.join(cwd, 'data.json'), JSON.stringify(data));
};

/*
 * @Author: tanzhiyu
 * @Date: 2021-10-14 11:06:52
 * @LastEditors: tanzhiyu
 * @LastEditTime: 2021-11-01 16:31:03
 */
writeDataFile({ a: 'a', b: 'b', c: 'c' });
