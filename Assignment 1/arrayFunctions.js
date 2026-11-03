//reduce()
Array.prototype.myReduce = function (callbackFunction) {
  const arr = this;
  let accumulator = arr[0];
  let startIndex = 1;


  for (let i = startIndex; i < arr.length; i++){
    accumulator = callbackFunction(accumulator, arr[i]);
  }

  return accumulator;
};


//filter()
Array.prototype.myFilter = function (callbackFunction) {
  const arr = this;
  let result = [];

  for (let i = 0; i < arr.length; i++){
    let value = callbackFunction(arr[i]);
    if (value) {
      result.push(arr[i]);
    }
  }

  return result;
};

//map()
Array.prototype.myMap = function (callbackFunction) {
  const arr = this;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let value = callbackFunction(arr[i]);
    result.push(value);
  }

  return result;
};

//forEach()
Array.prototype.myForEach = function (callbackFunction) {
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    callbackFunction(arr[i]);
  }
};
