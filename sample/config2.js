(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.config2 = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    paths: {
      "jquery": "//unpkg.com/jquery@2.2.4/dist/jquery.min"
    },
    shim: {
      'jquery': {
        exports: '$'
      }
    }
  };
  _exports.default = _default;
});
//# sourceMappingURL=config2.js.map