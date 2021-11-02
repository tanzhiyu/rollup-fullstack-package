/*
 * @Author: tanzhiyu
 * @Date: 2021-10-14 11:06:52
 * @LastEditors: tanzhiyu
 * @LastEditTime: 2021-11-01 18:56:05
 */


const qs = require("qs");
import { writeDataFile } from "./utils/util";

const obj = qs.parse("a=c");
console.log(obj);

writeDataFile({a: 'a', b: 'b', c: 'c'});