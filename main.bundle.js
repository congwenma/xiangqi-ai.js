(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

class Avatar {
  constructor ({faction} = {}) {
    this.faction = faction;
  }
}



class General extends Avatar {
  constructor (params) {
    super(params);
  }
}

// Chess game starts here

console.log(General);

})));
