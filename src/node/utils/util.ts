/*
 * @Author: tanzhiyu
 * @Date: 2021-10-07 23:03:59
 * @LastEditors: tanzhiyu
 * @LastEditTime: 2021-11-01 17:07:08
 */
const fs = require('fs');
import { Primitive, isPrimitive } from 'utility-types';
const path = require('path');

export const sayHello = (): string => {
	console.log('sayHello');
	return 'sayHello';
};

const consumer = (value: Primitive | Primitive[]):any => {
	if (isPrimitive(value)) {
		return console.log('Primitive value: ', value);
	}
	// type of value now inferred as Primitive[]
	 value.map(primitive => consumer(primitive));
};
console.log(consumer(['a', 'b', 'c', 1, 2]));

export const writeDataFile = (data: any) => {
  fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(data));
}




