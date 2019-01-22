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
    global.index = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = function _default(files, main) {
    require(files, function (config) {
      var paths = {};
      var shim = {};
      var packages = [];

      for (var i = 0; i < arguments.length; i++) {
        var obj = arguments[i].default;
        if (obj.paths !== undefined) Object.assign(paths, arguments[i].default.paths);
        if (obj.shim !== undefined) Object.assign(shim, arguments[i].default.shim);
        if (obj.packages !== undefined) packages = packages.concat(arguments[i].default.packages);
      }

      var cfg = {
        waitSeconds: 30,
        paths: paths,
        shim: shim,
        packages: packages
      };

      require.config(cfg);

      main(cfg);
    });
  };

  _exports.default = _default;
});
//# sourceMappingURL=index.js.map