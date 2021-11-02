/*
 * @Author: tanzhiyu
 * @Date: 2021-10-07 23:03:59
 * @LastEditors: tanzhiyu
 * @LastEditTime: 2021-11-02 15:26:08
 */
const fs = require('fs');
const path = require('path');
const process = require("process");
const cwd = process.cwd();


export const getProcessCwd = (): string => {
	return cwd;
};

export const writeDataFile = (data: any) => {
  fs.writeFileSync(path.join(cwd, 'data.json'), JSON.stringify(data));
}




