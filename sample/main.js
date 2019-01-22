(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["../index"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("../index"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.index);
    global.main = mod.exports;
  }
})(this, function (_index) {
  "use strict";

  _index = _interopRequireDefault(_index);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  (0, _index.default)(['./config', './config2'], function (cfg) {
    console.log('obj:');
    console.log(cfg);

    require(['react', 'jquery'], function (React, JQuery) {
      console.log(React);
      console.log(JQuery);
    });
  });
});
//# sourceMappingURL=main.js.map