var _ = {};

_.identity = function (x) {
  return x === x ? true : false;
};

_.first = function (arr, n) {
  if (!Array.isArray(arr) && typeof arr !== 'string') return undefined;
  if (typeof arr === 'string') arr = arr.split('');
  if (arguments.length < 2) {
    return arr[0];
  }
  const copy = arr.slice();
  return copy.slice(0, n);
};

_.last = function (arr, n) {
  if (!Array.isArray(arr) && typeof arr !== 'string') return undefined;
  if (typeof arr === 'string') arr = arr.split('');
  if (arguments.length < 2) {
    return arr[arr.length - 1];
  }
  const copy = arr.slice();
  return copy.slice(copy.length - n);
};

_.each = function (list, func) {
  if (Array.isArray(list)) {
    list.map(function (x, i) {
      func(x, i, list);
    });
    return list;
  }
  if (typeof list === 'object' && list !== null) {
    for (var key in list) {
      func(list[key], key, list);
    }
    return list;
  }
};

_.indexOf = function (array, value, isSorted) {
  if (!Array.isArray(array)) return undefined;

  if (isSorted === false || arguments.length < 3) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) return array.indexOf(value);
    }
    return -1;
  }

  if (isSorted && arguments.length === 3) {
    const bin = binarySearch(array, value);
    return bin !== null ? bin : -1;
  }

  function binarySearch(list, value) {
    var start = 0;
    var end = list.length - 1;
    for (let i = 0; i < 10; i++) {
      var mid = Math.floor((end + start) / 2);
      if (list[mid] === value) {
        return mid;
      }
      if (value < list[mid]) {
        end = mid - 1;
      }
      if (value > list[mid]) {
        start = mid + 1;
      }
    }
    return mid + 1;
  }
};

_.filter = function (list, func) {
  if (typeof list === 'string') return list.split('');
  if (list !== null && typeof list === 'object') list = Object.values(list);
  if (!Array.isArray(list) || func === undefined) return [];

  const arr = [];
  for (let i = 0; i < list.length; i++) {
    if (func(list[i])) arr.push(list[i]);
  }
  return arr;
};

_.reject = function (list, func) {
  if (typeof list === 'string') return [];
  if (list !== null && typeof list === 'object') list = Object.values(list);
  if (!Array.isArray(list) || func === undefined) return [];

  const arr = [];
  for (let i = 0; i < list.length; i++) {
    if (!func(list[i])) arr.push(list[i]);
  }
  return arr;
};

_.uniq = function (array) {
  if (!Array.isArray(array)) return [];
  return array.filter(function (item, pos) {
    return array.indexOf(item) == pos;
  });
};

_.map = function (list, func) {
  if (list === undefined) return [];
  if (typeof list === 'string') return list.split('');
  if (list !== null && typeof list === 'object') list = Object.values(list);
  if (!Array.isArray(list)) return [];

  const arr = [];
  for (let i = 0; i < list.length; i++) {
    arr.push(func(list[i], i, list));
  }
  return arr;
};

_.pluck = function (list, prop) {
  if (!Array.isArray(list)) return [];
  if (typeof list === 'string') return [undefined];
  if (list !== null && typeof list === 'object') list = Object.values(list);

  return list.map(x => x[prop]);
};

_.reduce = function (list, func, start) {
  if (arguments.length < 2) return undefined;
  if (typeof list === 'string') list = list.split('');
  if (arguments.length > 2) {
    if (start === undefined) return NaN;
    return list.reduce(func, start);
  }
  else {
    return list.reduce(func);
  }
};

_.contains = function (list, value, fromIndex) {
  if (arguments.length < 2) return false;
  if (typeof list === 'string') list = list.split('');
  if (list !== null && typeof list === 'object') list = Object.values(list);
  if (!Array.isArray(list) || arguments.length < 2) return [];

  if (arguments.length > 2) {
    list.slice(fromIndex);
    return list.some(function (x) { return x === value; });
  }
  return list.some(function (x) { return x === value; });
};

_.every = function (list, func) {
  if (arguments.length < 2) return true;
  if (typeof func !== 'function') return false;
  if (list !== null && typeof list === 'object') list = Object.values(list);

  for (let i = 0; i < list.length; i++) {
    if (!func(list[i])) return false;
  }
  return true;
};

_.some = function (list, func) {
  if (typeof func !== 'function' || arguments.length === 0) return false;
  if (arguments.length === 1) return true;
  if (list !== null && typeof list === 'object') list = Object.values(list);

  for (let i = 0; i < list.length; i++) {
    if (func(list[i])) return true;
  }
  return false;
};

_.extend = function (destination) {
  var len = arguments.length;
  if (len === 0) return undefined;
  if (destination.length === 0) return destination;
  if (typeof destination !== 'object' || Array.isArray(destination)) return destination;

  while (len--) {
    for (var key in arguments[len]) {
      destination[key] = arguments[len][key];
    }
  }
  return destination;
};

_.defaults = function (obj) {
  if (arguments.length === 0) return undefined;
  if (obj.length === 0) return obj;
  if (typeof obj !== 'object' || Array.isArray(obj)) return obj;

  for (var key in arguments) {
    if (!obj[arguments[key]] && arguments[key] !== obj) {
      if (!obj[Object.keys(arguments[key])]) {
        obj[Object.keys(arguments[key])] = arguments[key][Object.keys(arguments[key])];
      }
    }
  }
  return obj;
};

_.indexOf = function (array, value, isSorted) {
    if (!Array.isArray(array)) return undefined;

    if (isSorted === false || arguments.length < 3) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) return array.indexOf(value);
        }
        return -1;
    }

    if (isSorted && arguments.length === 3) {
        const bin = binarySearch(array, value);
        return bin !== null ? bin : -1;
    }

    function binarySearch (list, value) {
        var start = 0;
        var end = list.length - 1;
        for (let i = 0; i < 10; i++) {
            var mid = Math.floor((end + start) / 2);
            if (list[mid] === value) {
                return mid;
            }
            if (value < list[mid]) {
                end = mid - 1;
            }
            if (value > list[mid]) {
                start = mid + 1;
            }
        }
        return mid + 1;
    }
};

_.once = function (func) {
    var done = false;
    var result;

    return function () {
        if (done === true) {
            return result;
        } else {
            done = true;
            result = func.apply(null, arguments);
            return result;
        }
    };
};

_.memoize = function (iteratee, hashFunction) {
    const memo = {};

    const speedy = function () {
        const args = hashFunction ?
            hashFunction.apply(null, arguments) :
            JSON.stringify(arguments[0]);

        if (!memo[args]) {
            memo[args] = iteratee.apply(null, arguments);
        }
        return memo[args];
    };
    speedy.cache = memo;
    return speedy;
};

_.delay = function (func, wait) {
    const inputs = Array.prototype.slice.call(arguments);

    return setTimeout(function () {
        return func.apply(null, inputs);
    }, wait);
};

_.shuffle = function (list) {
    if (list === undefined || list.length === 0) return [];
    if (typeof list === 'object' && list !== null) list = Object.values(list);
    if (typeof list === 'string') list = list.split('');

    const newArray = list.slice();

    function shuffler (arr) {
        var index = arr.length, temp, x;

        while (index !== 0) {
            x = Math.floor(Math.random() * index);
            index -= 1;

            temp = arr[index];
            arr[index] = arr[x];
            arr[x] = temp;
        }
        return arr;
    }
    return shuffler(newArray);
};

_.invoke = function (list, methodName) {
    if (typeof list === 'object' && list !== null) list = Object.values(list);
    if (list === undefined || list.length === 0) return [];
    if (typeof list === 'string') list = list.split('');

    const args = Array.prototype.slice.call(arguments, 2);
    let isFunc = (typeof methodName === 'function');
    return list.map(function (value) {
        var func = isFunc ? methodName : value[methodName];
        return func.apply(value, args);
    });
};

_.sortBy = function (list, key) {
    if (typeof list === 'string') return list.split('').sort();
    if (typeof list === 'object' && list !== null) list = Object.values(list);
    if (list === undefined || list.length === 0) return [];

    if (arguments.length < 2) {
        return list.sort(function (a, b) {
            return a > b;
        });
    }
    return list.sort(function (a, b) {
        if (a[key] > b[key]) return 1;
        if (a[key] < b[key]) return -1;
        return 0;
    });
};

_.zip = function (arrays) {
    var args = Array.prototype.slice.call(arguments);

    if (typeof arrays === 'string') {
        args = arrays.split('');
        return args.map(x => [x]);
    }
    return args[0].map(function (_, i) {
        return args.map(function (array) { return array[i]; });
    });
};

_.sortedIndex = function (list, value, iteratee) {
    if (!Array.isArray(list) || list.length === 0) return 0;
    if (arguments.length === 3) {
        return binarySearch(_.sortBy(list, iteratee), value);
    }
    function binarySearch (list, value) {
        var start = 0;
        var end = list.length - 1;
        for (let i = 0; i < 10; i++) {
            var mid = Math.floor((end + start) / 2);
            if (list[mid] === value) {
                return mid;
            }
            if (value < list[mid]) {
                end = mid - 1;
            }
            if (value > list[mid]) {
                start = mid + 1;
            }
        }
        return mid + 1;
    }
    return binarySearch(list, value);
};

_.flatten = function (array, shallow) {
    if (typeof array === 'string') return array.split('');
    if (typeof array === 'object' && !Array.isArray(array)) return [];

    function flat (array) {
        var total = [];
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                total = total.concat(flat(array[i]));
            }
            else total.push(array[i]);
        }
        return total.filter(x => !!x);
    }
    if (!shallow) {
        return flat(array);
    } else {
        return [].concat.apply([], array);
    }
};

_.intersection = function (arrays) {
    if (typeof arrays === 'string') return arrays.split('');
    if (arguments.length === 0) return [];

    const args = Array.prototype.slice.call(arguments, 1);

    Array.prototype.intersect = function (...a) {
        return [this, ...a].reduce((p, c) => p.filter(e => c.includes(e)));
    };
    return arguments[0].intersect(...args);
};

_.difference = function (arr) {
    if (arguments.length === 0) return [];
    if (typeof arr === 'string') return arr.split('');
    if (arguments.length === 1) return arr;

    const args = _.flatten(Array.prototype.slice.call(arguments).slice(1));

    return arr.filter(x => args.indexOf(x) == -1);
};

_.throttle = function (callback, limit) {
    var timer;
    return function () {
        clearTimeout(timer);
        var args = [].slice.call(arguments);
        timer = setTimeout(function () {
            callback.apply(this, args);
        }, limit);
    };
};

if (typeof module !== 'undefined') {
  module.exports = _;
}