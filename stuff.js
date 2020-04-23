// Module Patterns
module.exports.counter = function(arr){
  return 'There are ' + arr.length + ' elements in this array';
}

module.exports.adder = function(a, b){
  return `The sum of the two numbers is ${a + b}`;
}

module.exports.pi = 3.142

// module.exports.counter = counter
// module.exports.adder = adder
// module.exports.pi = pi

// module.exports = {
//   counter: counter,
//   adder: adder,
//   pi: pi
// }
