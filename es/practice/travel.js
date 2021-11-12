"use strict";
/*
 * @Author: tanzhiyu
 * @Date: 2021-10-09 10:08:33
 * @LastEditors: tanzhiyu
 * @LastEditTime: 2021-10-09 10:08:33
 */

var root = {
  content: 1,
  children: [{
    content: 2,
    children: [{
      content: 3
    }, {
      content: 4
    }]
  }, {
    content: 5,
    children: [{
      content: 6
    }, {
      content: 7,
      children: [{
        content: 8
      }, {
        content: 9
      }]
    }]
  }]
};

function travel(node) {
  console.log(node.content);
  var i = 0;
  var sum = node.content;

  while (node.children && i < node.children.length) {
    sum += travel(node.children[i]);
    i++;
  }

  return sum;
}

function travel2(node) {
  var $stack = [];
  var $result = 0;

  var $call = function $call(node) {
    return $stack.push({
      continuation: 0,
      node: node,
      i: 0,
      sum: 0
    });
  };

  var $return = function $return(n) {
    $stack.pop();
    $result = n;
  };

  $call(node);

  while ($stack.length > 0) {
    var current = $stack[$stack.length - 1];
    var continuation = current.continuation,
        _node = current.node;

    switch (continuation) {
      case 0:
        {
          console.log(_node.content);
          current.i = 0;
          current.sum = _node.content;
          current.continuation = 1;
          break;
        }

      case 1:
        {
          if (_node.children && current.i < _node.children.length) {
            $call(_node.children[current.i]);
            current.continuation = 2;
            break;
          }

          current.continuation = 3;
          break;
        }

      case 2:
        {
          current.sum += $result;
          current.i++;
          current.continuation = 1;
          break;
        }

      case 3:
        {
          $return(current.sum);
          break;
        }
    }
  }

  return $result;
}

console.log('travel', travel(root));
console.log('travel2', travel2(root));