(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

class General$$1 extends Avatar {
  constructor (params) {
    super(params);
  }
}

class Avatar {
  constructor ({faction} = {}) {
    this.faction = faction;
  }
}

// Chess game starts here

console.log(General$$1);

})));
