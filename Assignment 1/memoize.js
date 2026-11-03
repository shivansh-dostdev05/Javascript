//5/6 test cases passed
export default function memoize(func) {
  let cache = {};

  return function (input) {
    if (cache[input]) {

      return cache[input];
    }

  cache[input] = func.call(this, input);

  return cache[input];
  }
};
