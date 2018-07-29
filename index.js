'use strict';

var DDDDebounceList = new Map();

var DDDDebounce = function (cb, wait, name) {
  if (arguments.length < 2) {
    throw TypeError('method myDebounce need 2 or 3 argunments ( callback: Function, waitTime: number, name?: string )');
  }
  if (!name) {
    name = cb.toString();
  }
  if (DDDDebounceList.get(name)) {
    clearTimeout(DDDDebounceList.get(name));
  }
  DDDDebounceList.set(name, setTimeout(function () {
    cb();
    DDDDebounceList.delete(name);
  }, wait));
};

module.exports = DDDDebounce;
