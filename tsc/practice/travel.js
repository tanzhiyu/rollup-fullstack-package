"use strict";
/*
 * @Author: tanzhiyu
 * @Date: 2021-10-09 10:08:33
 * @LastEditors: tanzhiyu
 * @LastEditTime: 2021-10-09 10:08:33
 */
const root = {
    content: 1,
    children: [
        {
            content: 2,
            children: [
                { content: 3 },
                { content: 4 }
            ]
        },
        {
            content: 5,
            children: [
                { content: 6 },
                {
                    content: 7,
                    children: [
                        { content: 8 }, { content: 9 }
                    ]
                }
            ]
        }
    ]
};
function travel(node) {
    console.log(node.content);
    let i = 0;
    let sum = node.content;
    while (node.children && i < node.children.length) {
        sum += travel(node.children[i]);
        i++;
    }
    return sum;
}
function travel2(node) {
    const $stack = [];
    let $result = 0;
    const $call = (node) => $stack.push({
        continuation: 0,
        node: node,
        i: 0,
        sum: 0,
    });
    const $return = (n) => {
        $stack.pop();
        $result = n;
    };
    $call(node);
    while ($stack.length > 0) {
        const current = $stack[$stack.length - 1];
        const { continuation, node } = current;
        switch (continuation) {
            case 0: {
                console.log(node.content);
                current.i = 0;
                current.sum = node.content;
                current.continuation = 1;
                break;
            }
            case 1: {
                if (node.children && current.i < node.children.length) {
                    $call(node.children[current.i]);
                    current.continuation = 2;
                    break;
                }
                current.continuation = 3;
                break;
            }
            case 2: {
                current.sum += $result;
                current.i++;
                current.continuation = 1;
                break;
            }
            case 3: {
                $return(current.sum);
                break;
            }
        }
    }
    return $result;
}
console.log('travel', travel(root));
console.log('travel2', travel2(root));
