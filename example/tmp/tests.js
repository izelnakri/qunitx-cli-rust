"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/qunitx/vendor/qunit.js
  var require_qunit = __commonJS({
    "node_modules/qunitx/vendor/qunit.js"(exports, module2) {
      (function() {
        "use strict";
        function _arrayLikeToArray(r, a) {
          (null == a || a > r.length) && (a = r.length);
          for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
          return n;
        }
        __name(_arrayLikeToArray, "_arrayLikeToArray");
        function _arrayWithHoles(r) {
          if (Array.isArray(r)) return r;
        }
        __name(_arrayWithHoles, "_arrayWithHoles");
        function _arrayWithoutHoles(r) {
          if (Array.isArray(r)) return _arrayLikeToArray(r);
        }
        __name(_arrayWithoutHoles, "_arrayWithoutHoles");
        function _classCallCheck(a, n) {
          if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
        }
        __name(_classCallCheck, "_classCallCheck");
        function _defineProperties(e, r) {
          for (var t = 0; t < r.length; t++) {
            var o = r[t];
            o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
          }
        }
        __name(_defineProperties, "_defineProperties");
        function _createClass(e, r, t) {
          return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
            writable: false
          }), e;
        }
        __name(_createClass, "_createClass");
        function _iterableToArray(r) {
          if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
        }
        __name(_iterableToArray, "_iterableToArray");
        function _iterableToArrayLimit(r, l) {
          var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
          if (null != t) {
            var e, n, i, u, a = [], f = true, o = false;
            try {
              if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = false;
              } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
            } catch (r2) {
              o = true, n = r2;
            } finally {
              try {
                if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
              } finally {
                if (o) throw n;
              }
            }
            return a;
          }
        }
        __name(_iterableToArrayLimit, "_iterableToArrayLimit");
        function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        __name(_nonIterableRest, "_nonIterableRest");
        function _nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        __name(_nonIterableSpread, "_nonIterableSpread");
        function _slicedToArray(r, e) {
          return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
        }
        __name(_slicedToArray, "_slicedToArray");
        function _toConsumableArray(r) {
          return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
        }
        __name(_toConsumableArray, "_toConsumableArray");
        function _toPrimitive(t, r) {
          if ("object" != typeof t || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var i = e.call(t, r || "default");
            if ("object" != typeof i) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === r ? String : Number)(t);
        }
        __name(_toPrimitive, "_toPrimitive");
        function _toPropertyKey(t) {
          var i = _toPrimitive(t, "string");
          return "symbol" == typeof i ? i : i + "";
        }
        __name(_toPropertyKey, "_toPropertyKey");
        function _typeof(o) {
          "@babel/helpers - typeof";
          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
            return typeof o2;
          } : function(o2) {
            return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
          }, _typeof(o);
        }
        __name(_typeof, "_typeof");
        function _unsupportedIterableToArray(r, a) {
          if (r) {
            if ("string" == typeof r) return _arrayLikeToArray(r, a);
            var t = {}.toString.call(r).slice(8, -1);
            return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
          }
        }
        __name(_unsupportedIterableToArray, "_unsupportedIterableToArray");
        function getGlobalThis() {
          if (typeof globalThis !== "undefined") {
            return globalThis;
          }
          if (typeof self !== "undefined") {
            return self;
          }
          if (typeof window$1 !== "undefined") {
            return window$1;
          }
          if (typeof global !== "undefined") {
            return global;
          }
          throw new Error("Unable to locate global object");
        }
        __name(getGlobalThis, "getGlobalThis");
        var g = getGlobalThis();
        var console$1 = g.console;
        var setTimeout$1 = g.setTimeout;
        var clearTimeout = g.clearTimeout;
        var process$1 = g.process;
        var window$1 = g.window;
        var document = window$1 && window$1.document;
        var navigator = window$1 && window$1.navigator;
        var localSessionStorage = (function() {
          var x = "qunit-test-string";
          try {
            g.sessionStorage.setItem(x, x);
            g.sessionStorage.removeItem(x);
            return g.sessionStorage;
          } catch (e) {
            return void 0;
          }
        })();
        var StringMap = typeof g.Map === "function" && typeof g.Map.prototype.keys === "function" && typeof g.Symbol === "function" && _typeof(g.Symbol.iterator) === "symbol" ? g.Map : /* @__PURE__ */ __name(function StringMap2(input) {
          var _this = this;
          var store = /* @__PURE__ */ Object.create(null);
          var hasOwn2 = Object.prototype.hasOwnProperty;
          this.has = function(strKey) {
            return hasOwn2.call(store, strKey);
          };
          this.get = function(strKey) {
            return store[strKey];
          };
          this.set = function(strKey, val) {
            if (!hasOwn2.call(store, strKey)) {
              this.size++;
            }
            store[strKey] = val;
            return this;
          };
          this.delete = function(strKey) {
            if (hasOwn2.call(store, strKey)) {
              delete store[strKey];
              this.size--;
            }
          };
          this.forEach = function(callback) {
            for (var strKey in store) {
              callback(store[strKey], strKey);
            }
          };
          this.keys = function() {
            return Object.keys(store);
          };
          this.clear = function() {
            store = /* @__PURE__ */ Object.create(null);
            this.size = 0;
          };
          this.size = 0;
          if (input) {
            input.forEach(function(val, strKey) {
              _this.set(strKey, val);
            });
          }
        }, "StringMap");
        var StringSet = typeof g.Set === "function" && typeof g.Set.prototype.values === "function" ? g.Set : function(input) {
          var set = /* @__PURE__ */ Object.create(null);
          if (Array.isArray(input)) {
            input.forEach(function(item) {
              set[item] = true;
            });
          }
          return {
            add: /* @__PURE__ */ __name(function add(value) {
              set[value] = true;
            }, "add"),
            has: /* @__PURE__ */ __name(function has(value) {
              return value in set;
            }, "has"),
            get size() {
              return Object.keys(set).length;
            }
          };
        };
        var toString = Object.prototype.toString;
        var hasOwn$1 = Object.prototype.hasOwnProperty;
        var performance = {
          // eslint-disable-next-line compat/compat -- Checked
          now: window$1 && window$1.performance && window$1.performance.now ? window$1.performance.now.bind(window$1.performance) : Date.now
        };
        function diff$1(a, b) {
          return a.filter(function(a2) {
            return b.indexOf(a2) === -1;
          });
        }
        __name(diff$1, "diff$1");
        var inArray = Array.prototype.includes ? function(elem, array) {
          return array.includes(elem);
        } : function(elem, array) {
          return array.indexOf(elem) !== -1;
        };
        function objectValues(obj) {
          var allowArray = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
          var vals = allowArray && is2("array", obj) ? [] : {};
          for (var key in obj) {
            if (hasOwn$1.call(obj, key)) {
              var val = obj[key];
              vals[key] = val === Object(val) ? objectValues(val, allowArray) : val;
            }
          }
          return vals;
        }
        __name(objectValues, "objectValues");
        function objectValuesSubset(obj, model) {
          if (obj !== Object(obj)) {
            return obj;
          }
          var subset = {};
          for (var key in model) {
            if (hasOwn$1.call(model, key) && hasOwn$1.call(obj, key)) {
              subset[key] = objectValuesSubset(obj[key], model[key]);
            }
          }
          return subset;
        }
        __name(objectValuesSubset, "objectValuesSubset");
        function extend2(a, b, undefOnly) {
          for (var prop in b) {
            if (hasOwn$1.call(b, prop)) {
              if (b[prop] === void 0) {
                delete a[prop];
              } else if (!(undefOnly && typeof a[prop] !== "undefined")) {
                a[prop] = b[prop];
              }
            }
          }
          return a;
        }
        __name(extend2, "extend");
        function objectType2(obj) {
          if (typeof obj === "undefined") {
            return "undefined";
          }
          if (obj === null) {
            return "null";
          }
          var match = toString.call(obj).match(/^\[object\s(.*)\]$/);
          var type = match && match[1];
          switch (type) {
            case "Number":
              if (isNaN(obj)) {
                return "nan";
              }
              return "number";
            case "String":
            case "Boolean":
            case "Array":
            case "Set":
            case "Map":
            case "Date":
            case "RegExp":
            case "Function":
            case "Symbol":
              return type.toLowerCase();
            default:
              return _typeof(obj);
          }
        }
        __name(objectType2, "objectType");
        function is2(type, obj) {
          return objectType2(obj) === type;
        }
        __name(is2, "is");
        function generateHash(module3, testName) {
          var str = module3 + "" + testName;
          var hash = 0;
          for (var i = 0; i < str.length; i++) {
            hash = (hash << 5) - hash + str.charCodeAt(i);
            hash |= 0;
          }
          var hex = (4294967296 + hash).toString(16);
          if (hex.length < 8) {
            hex = "0000000" + hex;
          }
          return hex.slice(-8);
        }
        __name(generateHash, "generateHash");
        function errorString(error) {
          var resultErrorString = String(error);
          if (resultErrorString.slice(0, 7) === "[object") {
            return (error.name || "Error") + (error.message ? ": ".concat(error.message) : "");
          } else {
            return resultErrorString;
          }
        }
        __name(errorString, "errorString");
        function escapeText(str) {
          if (!str) {
            return "";
          }
          return ("" + str).replace(/['"<>&]/g, function(s) {
            switch (s) {
              case "'":
                return "&#039;";
              case '"':
                return "&quot;";
              case "<":
                return "&lt;";
              case ">":
                return "&gt;";
              case "&":
                return "&amp;";
            }
          });
        }
        __name(escapeText, "escapeText");
        var BOXABLE_TYPES = new StringSet(["boolean", "number", "string"]);
        var memory = [];
        function useStrictEquality(a, b) {
          return a === b;
        }
        __name(useStrictEquality, "useStrictEquality");
        function useObjectValueEquality(a, b) {
          return a === b || a.valueOf() === b.valueOf();
        }
        __name(useObjectValueEquality, "useObjectValueEquality");
        function compareConstructors(a, b) {
          return getConstructor(a) === getConstructor(b);
        }
        __name(compareConstructors, "compareConstructors");
        function getConstructor(obj) {
          var proto = Object.getPrototypeOf(obj);
          return !proto || proto.constructor === null ? Object : obj.constructor;
        }
        __name(getConstructor, "getConstructor");
        function getRegExpFlags(regexp) {
          return "flags" in regexp ? regexp.flags : regexp.toString().match(/[gimuy]*$/)[0];
        }
        __name(getRegExpFlags, "getRegExpFlags");
        var objTypeCallbacks = {
          undefined: useStrictEquality,
          null: useStrictEquality,
          // Handle boxed boolean
          boolean: useObjectValueEquality,
          number: /* @__PURE__ */ __name(function number(a, b) {
            return a === b || a.valueOf() === b.valueOf() || isNaN(a.valueOf()) && isNaN(b.valueOf());
          }, "number"),
          // Handle boxed string
          string: useObjectValueEquality,
          symbol: useStrictEquality,
          date: useObjectValueEquality,
          nan: /* @__PURE__ */ __name(function nan() {
            return true;
          }, "nan"),
          regexp: /* @__PURE__ */ __name(function regexp(a, b) {
            return a.source === b.source && // Include flags in the comparison
            getRegExpFlags(a) === getRegExpFlags(b);
          }, "regexp"),
          // identical reference only
          function: useStrictEquality,
          array: /* @__PURE__ */ __name(function array(a, b) {
            if (a.length !== b.length) {
              return false;
            }
            for (var i = 0; i < a.length; i++) {
              if (!typeEquiv(a[i], b[i])) {
                return false;
              }
            }
            return true;
          }, "array"),
          // Define sets a and b to be equivalent if for each element aVal in a, there
          // is some element bVal in b such that aVal and bVal are equivalent. Element
          // repetitions are not counted, so these are equivalent:
          // a = new Set( [ X={}, Y=[], Y ] );
          // b = new Set( [ Y, X, X ] );
          set: /* @__PURE__ */ __name(function set(a, b) {
            if (a.size !== b.size) {
              return false;
            }
            var outerEq = true;
            a.forEach(function(aVal) {
              if (!outerEq) {
                return;
              }
              var innerEq = false;
              b.forEach(function(bVal) {
                if (innerEq) {
                  return;
                }
                var originalMemory = memory;
                memory = [];
                if (typeEquiv(bVal, aVal)) {
                  innerEq = true;
                }
                memory = originalMemory;
              });
              if (!innerEq) {
                outerEq = false;
              }
            });
            return outerEq;
          }, "set"),
          // Define maps a and b to be equivalent if for each key-value pair (aKey, aVal)
          // in a, there is some key-value pair (bKey, bVal) in b such that
          // [ aKey, aVal ] and [ bKey, bVal ] are equivalent. Key repetitions are not
          // counted, so these are equivalent:
          // a = new Map( [ [ {}, 1 ], [ {}, 1 ], [ [], 1 ] ] );
          // b = new Map( [ [ {}, 1 ], [ [], 1 ], [ [], 1 ] ] );
          map: /* @__PURE__ */ __name(function map(a, b) {
            if (a.size !== b.size) {
              return false;
            }
            var outerEq = true;
            a.forEach(function(aVal, aKey) {
              if (!outerEq) {
                return;
              }
              var innerEq = false;
              b.forEach(function(bVal, bKey) {
                if (innerEq) {
                  return;
                }
                var originalMemory = memory;
                memory = [];
                if (objTypeCallbacks.array([bVal, bKey], [aVal, aKey])) {
                  innerEq = true;
                }
                memory = originalMemory;
              });
              if (!innerEq) {
                outerEq = false;
              }
            });
            return outerEq;
          }, "map")
        };
        var entryTypeCallbacks = {
          undefined: useStrictEquality,
          null: useStrictEquality,
          boolean: useStrictEquality,
          number: /* @__PURE__ */ __name(function number(a, b) {
            return a === b || isNaN(a) && isNaN(b);
          }, "number"),
          string: useStrictEquality,
          symbol: useStrictEquality,
          function: useStrictEquality,
          object: /* @__PURE__ */ __name(function object(a, b) {
            if (memory.some(function(pair) {
              return pair.a === a && pair.b === b;
            })) {
              return true;
            }
            memory.push({
              a,
              b
            });
            var aObjType = objectType2(a);
            var bObjType = objectType2(b);
            if (aObjType !== "object" || bObjType !== "object") {
              return aObjType === bObjType && objTypeCallbacks[aObjType](a, b);
            }
            if (compareConstructors(a, b) === false) {
              return false;
            }
            var aProperties = [];
            var bProperties = [];
            for (var i in a) {
              aProperties.push(i);
              if (a.constructor !== Object && typeof a.constructor !== "undefined" && typeof a[i] === "function" && typeof b[i] === "function" && a[i].toString() === b[i].toString()) {
                continue;
              }
              if (!typeEquiv(a[i], b[i])) {
                return false;
              }
            }
            for (var _i in b) {
              bProperties.push(_i);
            }
            return objTypeCallbacks.array(aProperties.sort(), bProperties.sort());
          }, "object")
        };
        function typeEquiv(a, b) {
          if (a === b) {
            return true;
          }
          var aType = _typeof(a);
          var bType = _typeof(b);
          if (aType !== bType) {
            return (aType === "object" && BOXABLE_TYPES.has(objectType2(a)) ? a.valueOf() : a) === (bType === "object" && BOXABLE_TYPES.has(objectType2(b)) ? b.valueOf() : b);
          }
          return entryTypeCallbacks[aType](a, b);
        }
        __name(typeEquiv, "typeEquiv");
        function innerEquiv(a, b) {
          var res = typeEquiv(a, b);
          memory = [];
          return res;
        }
        __name(innerEquiv, "innerEquiv");
        function equiv2(a, b) {
          if (arguments.length === 2) {
            return a === b || innerEquiv(a, b);
          }
          var i = arguments.length - 1;
          while (i > 0) {
            if (!innerEquiv(arguments[i - 1], arguments[i])) {
              return false;
            }
            i--;
          }
          return true;
        }
        __name(equiv2, "equiv");
        var config2 = {
          // HTML Reporter: Modify document.title when suite is done
          altertitle: true,
          // TODO: Move here from /src/core.js in QUnit 3.
          // autostart: true,
          // HTML Reporter: collapse every test except the first failing test
          // If false, all failing tests will be expanded
          collapse: true,
          countStepsAsOne: false,
          // TODO: Make explicit in QUnit 3.
          // current: undefined,
          // whether or not to fail when there are zero tests
          // defaults to `true`
          failOnZeroTests: true,
          // Select by pattern or case-insensitive substring match against "moduleName: testName"
          filter: void 0,
          testFilter: null,
          // TODO: Make explicit in QUnit 3.
          // fixture: undefined,
          // Depth up-to which object will be dumped
          maxDepth: 5,
          // Select case-insensitive match of the module name
          module: void 0,
          // HTML Reporter: Select module/test by array of internal IDs
          moduleId: void 0,
          // By default, run previously failed tests first
          // very useful in combination with "Hide passed tests" checked
          reorder: true,
          reporters: {},
          // When enabled, all tests must call expect()
          requireExpects: false,
          // By default, scroll to top of the page when suite is done
          scrolltop: true,
          // TODO: Make explicit in QUnit 3.
          // seed: undefined,
          // The storage module to use for reordering tests
          storage: localSessionStorage,
          testId: void 0,
          // The updateRate controls how often QUnit will yield the main thread
          // between tests. This is mainly for the benefit of the HTML Reporter,
          // so that the browser can visually paint DOM changes with test results.
          // This also helps avoid causing browsers to prompt a warning about
          // long-running scripts.
          // TODO: Move here from /src/core.js in QUnit 3.
          // updateRate: 1000,
          // HTML Reporter: List of URL parameters that are given visual controls
          urlConfig: [],
          // Internal: The first unnamed module
          //
          // By being defined as the intial value for currentModule, it is the
          // receptacle and implied parent for any global tests. It is as if we
          // called `QUnit.module( "" );` before any other tests were defined.
          //
          // If we reach begin() and no tests were put in it, we dequeue it as if it
          // never existed, and in that case never expose it to the events and
          // callbacks API.
          //
          // When global tests are defined, then this unnamed module will execute
          // as any other module, including moduleStart/moduleDone events etc.
          //
          // Since this module isn't explicitly created by the user, they have no
          // access to add hooks for it. The hooks object is defined to comply
          // with internal expectations of test.js, but they will be empty.
          // To apply hooks, place tests explicitly in a QUnit.module(), and use
          // its hooks accordingly.
          //
          // For global hooks that apply to all tests and all modules, use QUnit.hooks.
          //
          // NOTE: This is *not* a "global module". It is not an ancestor of all modules
          // and tests. It is merely the parent for any tests defined globally,
          // before the first QUnit.module(). As such, the events for this unnamed
          // module will fire as normal, right after its last test, and *not* at
          // the end of the test run.
          //
          // NOTE: This also should probably also not become a global module, unless
          // we keep it out of the public API. For example, it would likely not
          // improve the user interface and plugin behaviour if all modules became
          // wrapped between the start and end events of this module, and thus
          // needlessly add indentation, indirection, or other visible noise.
          // Unit tests for the callbacks API would detect that as a regression.
          currentModule: {
            name: "",
            tests: [],
            childModules: [],
            testsRun: 0,
            testsIgnored: 0,
            hooks: {
              before: [],
              beforeEach: [],
              afterEach: [],
              after: []
            }
          },
          // Internal: Exposed to make resets easier
          // Ref https://github.com/qunitjs/qunit/pull/1598
          globalHooks: {},
          // Internal: ProcessingQueue singleton, created in /src/core.js
          pq: null,
          // Internal: Created in /src/core.js
          // TODO: Move definitions here in QUnit 3.0.
          // started: 0,
          // Internal state
          _event_listeners: /* @__PURE__ */ Object.create(null),
          _event_memory: {},
          _deprecated_timeout_shown: false,
          _deprecated_countEachStep_shown: false,
          blocking: true,
          callbacks: {},
          modules: [],
          queue: [],
          stats: {
            all: 0,
            bad: 0,
            testCount: 0
          }
        };
        function readFlatPreconfigBoolean(val, dest) {
          if (typeof val === "boolean" || typeof val === "string" && val !== "") {
            config2[dest] = val === true || val === "true";
          }
        }
        __name(readFlatPreconfigBoolean, "readFlatPreconfigBoolean");
        function readFlatPreconfigNumber(val, dest) {
          if (typeof val === "number" || typeof val === "string" && /^[0-9]+$/.test(val)) {
            config2[dest] = +val;
          }
        }
        __name(readFlatPreconfigNumber, "readFlatPreconfigNumber");
        function readFlatPreconfigString(val, dest) {
          if (typeof val === "string" && val !== "") {
            config2[dest] = val;
          }
        }
        __name(readFlatPreconfigString, "readFlatPreconfigString");
        function readFlatPreconfigStringOrBoolean(val, dest) {
          if (typeof val === "boolean" || typeof val === "string" && val !== "") {
            config2[dest] = val;
          }
        }
        __name(readFlatPreconfigStringOrBoolean, "readFlatPreconfigStringOrBoolean");
        function readFlatPreconfigStringArray(val, dest) {
          if (typeof val === "string" && val !== "") {
            config2[dest] = [val];
          }
        }
        __name(readFlatPreconfigStringArray, "readFlatPreconfigStringArray");
        function readFlatPreconfig(obj) {
          readFlatPreconfigBoolean(obj.qunit_config_altertitle, "altertitle");
          readFlatPreconfigBoolean(obj.qunit_config_autostart, "autostart");
          readFlatPreconfigBoolean(obj.qunit_config_collapse, "collapse");
          readFlatPreconfigBoolean(obj.qunit_config_failonzerotests, "failOnZeroTests");
          readFlatPreconfigString(obj.qunit_config_filter, "filter");
          readFlatPreconfigString(obj.qunit_config_fixture, "fixture");
          readFlatPreconfigBoolean(obj.qunit_config_hidepassed, "hidepassed");
          readFlatPreconfigNumber(obj.qunit_config_maxdepth, "maxDepth");
          readFlatPreconfigString(obj.qunit_config_module, "module");
          readFlatPreconfigStringArray(obj.qunit_config_moduleid, "moduleId");
          readFlatPreconfigBoolean(obj.qunit_config_noglobals, "noglobals");
          readFlatPreconfigBoolean(obj.qunit_config_notrycatch, "notrycatch");
          readFlatPreconfigBoolean(obj.qunit_config_reorder, "reorder");
          readFlatPreconfigBoolean(obj.qunit_config_requireexpects, "requireExpects");
          readFlatPreconfigBoolean(obj.qunit_config_scrolltop, "scrolltop");
          readFlatPreconfigStringOrBoolean(obj.qunit_config_seed, "seed");
          readFlatPreconfigStringArray(obj.qunit_config_testid, "testId");
          readFlatPreconfigNumber(obj.qunit_config_testtimeout, "testTimeout");
          var reporterKeys = {
            qunit_config_reporters_console: "console",
            qunit_config_reporters_tap: "tap"
          };
          for (var key in reporterKeys) {
            var val = obj[key];
            if (typeof val === "boolean" || typeof val === "string" && val !== "") {
              var dest = reporterKeys[key];
              config2.reporters[dest] = val === true || val === "true" || val === "1";
            }
          }
        }
        __name(readFlatPreconfig, "readFlatPreconfig");
        if (process$1 && "env" in process$1) {
          readFlatPreconfig(process$1.env);
        }
        readFlatPreconfig(g);
        var preConfig = g && g.QUnit && !g.QUnit.version && g.QUnit.config;
        if (preConfig) {
          extend2(config2, preConfig);
        }
        config2.modules.push(config2.currentModule);
        if (config2.seed === "true" || config2.seed === true) {
          config2.seed = (Math.random().toString(36) + "0000000000").slice(2, 12);
        }
        var dump2 = (function() {
          function quote(str) {
            return '"' + str.toString().replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"';
          }
          __name(quote, "quote");
          function literal(o) {
            return o + "";
          }
          __name(literal, "literal");
          function join(pre, arr, post) {
            var s = dump3.separator();
            var inner = dump3.indent(1);
            if (arr.join) {
              arr = arr.join("," + s + inner);
            }
            if (!arr) {
              return pre + post;
            }
            var base = dump3.indent();
            return [pre, inner + arr, base + post].join(s);
          }
          __name(join, "join");
          function array(arr, stack2) {
            if (dump3.maxDepth && dump3.depth > dump3.maxDepth) {
              return "[object Array]";
            }
            this.up();
            var i = arr.length;
            var ret = new Array(i);
            while (i--) {
              ret[i] = this.parse(arr[i], void 0, stack2);
            }
            this.down();
            return join("[", ret, "]");
          }
          __name(array, "array");
          function isArray(obj) {
            return (
              // Native Arrays
              toString.call(obj) === "[object Array]" || // NodeList objects
              typeof obj.length === "number" && obj.item !== void 0 && (obj.length ? obj.item(0) === obj[0] : obj.item(0) === null && obj[0] === void 0)
            );
          }
          __name(isArray, "isArray");
          var reName = /^function (\w+)/;
          var dump3 = {
            // The objType is used mostly internally, you can fix a (custom) type in advance
            parse: /* @__PURE__ */ __name(function parse(obj, objType, stack2) {
              stack2 = stack2 || [];
              var objIndex = stack2.indexOf(obj);
              if (objIndex !== -1) {
                return "recursion(".concat(objIndex - stack2.length, ")");
              }
              objType = objType || this.typeOf(obj);
              var parser = this.parsers[objType];
              var parserType = _typeof(parser);
              if (parserType === "function") {
                stack2.push(obj);
                var res = parser.call(this, obj, stack2);
                stack2.pop();
                return res;
              }
              if (parserType === "string") {
                return parser;
              }
              return "[ERROR: Missing QUnit.dump formatter for type " + objType + "]";
            }, "parse"),
            typeOf: /* @__PURE__ */ __name(function typeOf(obj) {
              var type;
              if (obj === null) {
                type = "null";
              } else if (typeof obj === "undefined") {
                type = "undefined";
              } else if (is2("regexp", obj)) {
                type = "regexp";
              } else if (is2("date", obj)) {
                type = "date";
              } else if (is2("function", obj)) {
                type = "function";
              } else if (obj.setInterval !== void 0 && obj.document !== void 0 && obj.nodeType === void 0) {
                type = "window";
              } else if (obj.nodeType === 9) {
                type = "document";
              } else if (obj.nodeType) {
                type = "node";
              } else if (isArray(obj)) {
                type = "array";
              } else if (obj.constructor === Error.prototype.constructor) {
                type = "error";
              } else {
                type = _typeof(obj);
              }
              return type;
            }, "typeOf"),
            separator: /* @__PURE__ */ __name(function separator() {
              if (this.multiline) {
                return this.HTML ? "<br />" : "\n";
              } else {
                return this.HTML ? "&#160;" : " ";
              }
            }, "separator"),
            // Extra can be a number, shortcut for increasing-calling-decreasing
            indent: /* @__PURE__ */ __name(function indent(extra) {
              if (!this.multiline) {
                return "";
              }
              var chr = this.indentChar;
              if (this.HTML) {
                chr = chr.replace(/\t/g, "   ").replace(/ /g, "&#160;");
              }
              return new Array(this.depth + (extra || 0)).join(chr);
            }, "indent"),
            up: /* @__PURE__ */ __name(function up(a) {
              this.depth += a || 1;
            }, "up"),
            down: /* @__PURE__ */ __name(function down(a) {
              this.depth -= a || 1;
            }, "down"),
            setParser: /* @__PURE__ */ __name(function setParser(name, parser) {
              this.parsers[name] = parser;
            }, "setParser"),
            // The next 3 are exposed so you can use them
            quote,
            literal,
            join,
            depth: 1,
            maxDepth: config2.maxDepth,
            // This is the list of parsers, to modify them, use dump.setParser
            parsers: {
              window: "[Window]",
              document: "[Document]",
              error: /* @__PURE__ */ __name(function error(_error) {
                return 'Error("' + _error.message + '")';
              }, "error"),
              // This has been unused since QUnit 1.0.0.
              // @todo Deprecate and remove.
              unknown: "[Unknown]",
              null: "null",
              undefined: "undefined",
              function: /* @__PURE__ */ __name(function _function(fn) {
                var ret = "function";
                var name = "name" in fn ? fn.name : (reName.exec(fn) || [])[1];
                if (name) {
                  ret += " " + name;
                }
                ret += "(";
                ret = [ret, dump3.parse(fn, "functionArgs"), "){"].join("");
                return join(ret, dump3.parse(fn, "functionCode"), "}");
              }, "_function"),
              array,
              nodelist: array,
              arguments: array,
              object: /* @__PURE__ */ __name(function object(map, stack2) {
                var ret = [];
                if (dump3.maxDepth && dump3.depth > dump3.maxDepth) {
                  return "[object Object]";
                }
                dump3.up();
                var keys = [];
                for (var key in map) {
                  keys.push(key);
                }
                var nonEnumerableProperties = ["message", "name"];
                for (var i in nonEnumerableProperties) {
                  var _key = nonEnumerableProperties[i];
                  if (_key in map && !inArray(_key, keys)) {
                    keys.push(_key);
                  }
                }
                keys.sort();
                for (var _i = 0; _i < keys.length; _i++) {
                  var _key2 = keys[_i];
                  var val = map[_key2];
                  ret.push(dump3.parse(_key2, "key") + ": " + dump3.parse(val, void 0, stack2));
                }
                dump3.down();
                return join("{", ret, "}");
              }, "object"),
              node: /* @__PURE__ */ __name(function node(_node) {
                var open = dump3.HTML ? "&lt;" : "<";
                var close = dump3.HTML ? "&gt;" : ">";
                var tag = _node.nodeName.toLowerCase();
                var ret = open + tag;
                var attrs = _node.attributes;
                if (attrs) {
                  for (var i = 0; i < attrs.length; i++) {
                    var val = attrs[i].nodeValue;
                    if (val && val !== "inherit") {
                      ret += " " + attrs[i].nodeName + "=" + dump3.parse(val, "attribute");
                    }
                  }
                }
                ret += close;
                if (_node.nodeType === 3 || _node.nodeType === 4) {
                  ret += _node.nodeValue;
                }
                return ret + open + "/" + tag + close;
              }, "node"),
              // Function calls it internally, it's the arguments part of the function
              functionArgs: /* @__PURE__ */ __name(function functionArgs(fn) {
                var l = fn.length;
                if (!l) {
                  return "";
                }
                var args = new Array(l);
                while (l--) {
                  args[l] = String.fromCharCode(97 + l);
                }
                return " " + args.join(", ") + " ";
              }, "functionArgs"),
              // Object calls it internally, the key part of an item in a map
              key: quote,
              // Function calls it internally, it's the content of the function
              functionCode: "[code]",
              // Node calls it internally, it's a html attribute value
              attribute: quote,
              string: quote,
              date: quote,
              regexp: literal,
              number: literal,
              boolean: literal,
              symbol: /* @__PURE__ */ __name(function symbol(sym) {
                return sym.toString();
              }, "symbol")
            },
            // If true, entities are escaped ( <, >, \t, space and \n )
            HTML: false,
            // Indentation unit
            indentChar: "  ",
            // If true, items in a collection, are separated by a \n, else just a space.
            multiline: true
          };
          return dump3;
        })();
        var Logger = {
          warn: console$1 ? Function.prototype.bind.call(console$1.warn || console$1.log, console$1) : function() {
          }
        };
        var SuiteReport = /* @__PURE__ */ (function() {
          function SuiteReport2(name, parentSuite) {
            _classCallCheck(this, SuiteReport2);
            this.name = name;
            this.fullName = parentSuite ? parentSuite.fullName.concat(name) : [];
            this.globalFailureCount = 0;
            this.tests = [];
            this.childSuites = [];
            if (parentSuite) {
              parentSuite.pushChildSuite(this);
            }
          }
          __name(SuiteReport2, "SuiteReport");
          return _createClass(SuiteReport2, [{
            key: "start",
            value: /* @__PURE__ */ __name(function start2(recordTime) {
              if (recordTime) {
                this._startTime = performance.now();
              }
              return {
                name: this.name,
                fullName: this.fullName.slice(),
                tests: this.tests.map(function(test3) {
                  return test3.start();
                }),
                childSuites: this.childSuites.map(function(suite) {
                  return suite.start();
                }),
                testCounts: {
                  total: this.getTestCounts().total
                }
              };
            }, "start")
          }, {
            key: "end",
            value: /* @__PURE__ */ __name(function end(recordTime) {
              if (recordTime) {
                this._endTime = performance.now();
              }
              return {
                name: this.name,
                fullName: this.fullName.slice(),
                tests: this.tests.map(function(test3) {
                  return test3.end();
                }),
                childSuites: this.childSuites.map(function(suite) {
                  return suite.end();
                }),
                testCounts: this.getTestCounts(),
                runtime: this.getRuntime(),
                status: this.getStatus()
              };
            }, "end")
          }, {
            key: "pushChildSuite",
            value: /* @__PURE__ */ __name(function pushChildSuite(suite) {
              this.childSuites.push(suite);
            }, "pushChildSuite")
          }, {
            key: "pushTest",
            value: /* @__PURE__ */ __name(function pushTest(test3) {
              this.tests.push(test3);
            }, "pushTest")
          }, {
            key: "getRuntime",
            value: /* @__PURE__ */ __name(function getRuntime() {
              return Math.round(this._endTime - this._startTime);
            }, "getRuntime")
          }, {
            key: "getTestCounts",
            value: /* @__PURE__ */ __name(function getTestCounts() {
              var counts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                passed: 0,
                failed: 0,
                skipped: 0,
                todo: 0,
                total: 0
              };
              counts.failed += this.globalFailureCount;
              counts.total += this.globalFailureCount;
              counts = this.tests.reduce(function(counts2, test3) {
                if (test3.valid) {
                  counts2[test3.getStatus()]++;
                  counts2.total++;
                }
                return counts2;
              }, counts);
              return this.childSuites.reduce(function(counts2, suite) {
                return suite.getTestCounts(counts2);
              }, counts);
            }, "getTestCounts")
          }, {
            key: "getStatus",
            value: /* @__PURE__ */ __name(function getStatus() {
              var _this$getTestCounts = this.getTestCounts(), total = _this$getTestCounts.total, failed = _this$getTestCounts.failed, skipped = _this$getTestCounts.skipped, todo2 = _this$getTestCounts.todo;
              if (failed) {
                return "failed";
              } else {
                if (skipped === total) {
                  return "skipped";
                } else if (todo2 === total) {
                  return "todo";
                } else {
                  return "passed";
                }
              }
            }, "getStatus")
          }]);
        })();
        var moduleStack = [];
        var runSuite = new SuiteReport();
        function isParentModuleInQueue() {
          var modulesInQueue = config2.modules.filter(function(module3) {
            return !module3.ignored;
          }).map(function(module3) {
            return module3.moduleId;
          });
          return moduleStack.some(function(module3) {
            return modulesInQueue.includes(module3.moduleId);
          });
        }
        __name(isParentModuleInQueue, "isParentModuleInQueue");
        function createModule(name, testEnvironment, modifiers) {
          var parentModule = moduleStack.length ? moduleStack.slice(-1)[0] : null;
          var moduleName = parentModule !== null ? [parentModule.name, name].join(" > ") : name;
          var parentSuite = parentModule ? parentModule.suiteReport : runSuite;
          var skip2 = parentModule !== null && parentModule.skip || modifiers.skip;
          var todo2 = parentModule !== null && parentModule.todo || modifiers.todo;
          var env = {};
          if (parentModule) {
            extend2(env, parentModule.testEnvironment);
          }
          extend2(env, testEnvironment);
          var module3 = {
            name: moduleName,
            parentModule,
            hooks: {
              before: [],
              beforeEach: [],
              afterEach: [],
              after: []
            },
            testEnvironment: env,
            tests: [],
            moduleId: generateHash(moduleName),
            testsRun: 0,
            testsIgnored: 0,
            childModules: [],
            suiteReport: new SuiteReport(name, parentSuite),
            // Initialised by test.js when the module start executing,
            // i.e. before the first test in this module (or a child).
            stats: null,
            // Pass along `skip` and `todo` properties from parent module, in case
            // there is one, to childs. And use own otherwise.
            // This property will be used to mark own tests and tests of child suites
            // as either `skipped` or `todo`.
            skip: skip2,
            todo: skip2 ? false : todo2,
            ignored: modifiers.ignored || false
          };
          if (parentModule) {
            parentModule.childModules.push(module3);
          }
          config2.modules.push(module3);
          return module3;
        }
        __name(createModule, "createModule");
        function setHookFromEnvironment(hooks2, environment, name) {
          var potentialHook = environment[name];
          if (typeof potentialHook === "function") {
            hooks2[name].push(potentialHook);
          }
          delete environment[name];
        }
        __name(setHookFromEnvironment, "setHookFromEnvironment");
        function makeSetHook(module3, hookName) {
          return /* @__PURE__ */ __name(function setHook(callback) {
            if (config2.currentModule !== module3) {
              Logger.warn("The `" + hookName + "` hook was called inside the wrong module (`" + config2.currentModule.name + "`). Instead, use hooks provided by the callback to the containing module (`" + module3.name + "`). This will become an error in QUnit 3.0.");
            }
            module3.hooks[hookName].push(callback);
          }, "setHook");
        }
        __name(makeSetHook, "makeSetHook");
        function processModule(name, options, scope) {
          var modifiers = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          if (typeof options === "function") {
            scope = options;
            options = void 0;
          }
          var module3 = createModule(name, options, modifiers);
          var testEnvironment = module3.testEnvironment;
          var hooks2 = module3.hooks;
          setHookFromEnvironment(hooks2, testEnvironment, "before");
          setHookFromEnvironment(hooks2, testEnvironment, "beforeEach");
          setHookFromEnvironment(hooks2, testEnvironment, "afterEach");
          setHookFromEnvironment(hooks2, testEnvironment, "after");
          var moduleFns = {
            before: makeSetHook(module3, "before"),
            beforeEach: makeSetHook(module3, "beforeEach"),
            afterEach: makeSetHook(module3, "afterEach"),
            after: makeSetHook(module3, "after")
          };
          var prevModule = config2.currentModule;
          config2.currentModule = module3;
          if (typeof scope === "function") {
            moduleStack.push(module3);
            try {
              var cbReturnValue = scope.call(module3.testEnvironment, moduleFns);
              if (cbReturnValue && typeof cbReturnValue.then === "function") {
                Logger.warn("Returning a promise from a module callback is not supported. Instead, use hooks for async behavior. This will become an error in QUnit 3.0.");
              }
            } finally {
              moduleStack.pop();
              config2.currentModule = module3.parentModule || prevModule;
            }
          }
        }
        __name(processModule, "processModule");
        function clearSuiteReports(currentModule) {
          var childSuite = null;
          var suiteReport = currentModule.suiteReport;
          while (suiteReport) {
            suiteReport.tests.length = 0;
            var i = suiteReport.childSuites.indexOf(childSuite);
            if (i === -1) {
              suiteReport.childSuites.length = 0;
            } else {
              suiteReport.childSuites.splice(0, i);
              suiteReport.childSuites.splice(1);
            }
            if (suiteReport === runSuite) {
              suiteReport = null;
            } else {
              childSuite = suiteReport;
              currentModule = currentModule.parentModule;
              suiteReport = currentModule && currentModule.suiteReport || runSuite;
            }
          }
        }
        __name(clearSuiteReports, "clearSuiteReports");
        var focused$1 = false;
        function module$1(name, options, scope) {
          var ignored = focused$1 && !isParentModuleInQueue();
          processModule(name, options, scope, {
            ignored
          });
        }
        __name(module$1, "module$1");
        module$1.only = function() {
          if (!focused$1) {
            config2.modules.length = 0;
            config2.queue.length = 0;
            clearSuiteReports(config2.currentModule);
            config2.currentModule.ignored = true;
          }
          focused$1 = true;
          processModule.apply(void 0, arguments);
        };
        module$1.skip = function(name, options, scope) {
          if (focused$1) {
            return;
          }
          processModule(name, options, scope, {
            skip: true
          });
        };
        module$1.if = function(name, condition, options, scope) {
          if (focused$1) {
            return;
          }
          processModule(name, options, scope, {
            skip: !condition
          });
        };
        module$1.todo = function(name, options, scope) {
          if (focused$1) {
            return;
          }
          processModule(name, options, scope, {
            todo: true
          });
        };
        function qunitFileName() {
          var error = new Error();
          if (!error.stack) {
            try {
              throw error;
            } catch (err) {
              error = err;
            }
          }
          return (error.stack || "").replace(/^error$\n/im, "").split("\n")[0].replace(/(:\d+)+\)?/g, "").replace(/.+[/\\]/, "");
        }
        __name(qunitFileName, "qunitFileName");
        var fileName = qunitFileName();
        function annotateStacktrace(stack2, formatInternal) {
          var eToString = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
          var frames = stack2.split("\n");
          var annotated = [];
          if (eToString && eToString.indexOf(frames[0]) !== -1) {
            annotated.push(frames.shift());
          }
          var initialInternal = true;
          for (var i = 0; i < frames.length; i++) {
            var frame = frames[i];
            var isInternal = fileName && frame.indexOf(fileName) !== -1 || // Support Node 16+: ESM-style
            // "at wrap (node:internal/modules/cjs/loader:1)"
            frame.indexOf("node:internal/") !== -1 || // Support Node 12-14 (CJS-style)
            // "at load (internal/modules/cjs/loader.js:7)"
            frame.match(/^\s+at .+\(internal[^)]*\)$/) || // Support Node 10
            // "at listOnTimeout (timers.js:263)"
            // Avoid matching "(C:)" on Windows
            // Avoid matching "(http:)"
            frame.match(/^\s+at .+\([a-z]+\.js[:\d]*\)$/);
            if (!isInternal) {
              initialInternal = false;
            }
            if (!initialInternal) {
              annotated.push(isInternal ? formatInternal(frame) : frame);
            }
          }
          return annotated.join("\n");
        }
        __name(annotateStacktrace, "annotateStacktrace");
        function extractStacktrace(e, offset) {
          offset = offset === void 0 ? 4 : offset;
          if (e && e.stack) {
            var stack2 = e.stack.split("\n");
            if (/^error$/i.test(stack2[0])) {
              stack2.shift();
            }
            if (fileName) {
              var include = [];
              for (var i = offset; i < stack2.length; i++) {
                if (stack2[i].indexOf(fileName) !== -1) {
                  break;
                }
                include.push(stack2[i]);
              }
              if (include.length) {
                return include.join("\n");
              }
            }
            return stack2[offset];
          }
        }
        __name(extractStacktrace, "extractStacktrace");
        function sourceFromStacktrace(offset) {
          var error = new Error();
          if (!error.stack) {
            try {
              throw error;
            } catch (err) {
              error = err;
            }
          }
          return extractStacktrace(error, offset);
        }
        __name(sourceFromStacktrace, "sourceFromStacktrace");
        var Assert = /* @__PURE__ */ (function() {
          function Assert2(testContext) {
            _classCallCheck(this, Assert2);
            this.test = testContext;
          }
          __name(Assert2, "Assert");
          return _createClass(Assert2, [{
            key: "timeout",
            value: /* @__PURE__ */ __name(function timeout(duration) {
              if (typeof duration !== "number") {
                throw new Error("You must pass a number as the duration to assert.timeout");
              }
              this.test.timeout = duration;
              if (config2.timeout) {
                clearTimeout(config2.timeout);
                config2.timeout = null;
                if (config2.timeoutHandler && this.test.timeout > 0) {
                  this.test.internalResetTimeout(this.test.timeout);
                }
              }
            }, "timeout")
            // Documents a "step", which is a string value, in a test as a passing assertion
          }, {
            key: "step",
            value: /* @__PURE__ */ __name(function step(message) {
              var assertionMessage = message;
              var result = !!message;
              this.test.steps.push(message);
              if (typeof message === "undefined" || message === "") {
                assertionMessage = "You must provide a message to assert.step";
              } else if (typeof message !== "string") {
                assertionMessage = "You must provide a string value to assert.step";
                result = false;
              }
              this.pushResult({
                result,
                message: assertionMessage
              });
            }, "step")
            // Verifies the steps in a test match a given array of string values
          }, {
            key: "verifySteps",
            value: /* @__PURE__ */ __name(function verifySteps(steps, message) {
              var actualStepsClone = this.test.steps.slice();
              this.deepEqual(actualStepsClone, steps, message);
              this.test.stepsCount += this.test.steps.length;
              this.test.steps.length = 0;
            }, "verifySteps")
          }, {
            key: "expect",
            value: /* @__PURE__ */ __name(function expect(asserts) {
              if (arguments.length === 1) {
                this.test.expected = asserts;
              } else {
                return this.test.expected;
              }
            }, "expect")
            // Create a new async pause and return a new function that can release the pause.
          }, {
            key: "async",
            value: /* @__PURE__ */ __name(function async(count) {
              if (count === void 0) {
                count = 1;
              } else if (typeof count !== "number") {
                throw new TypeError("async takes number as an input");
              }
              var requiredCalls = count;
              return this.test.internalStop(requiredCalls);
            }, "async")
          }, {
            key: "closeTo",
            value: /* @__PURE__ */ __name(function closeTo(actual, expected, delta, message) {
              if (typeof delta !== "number") {
                throw new TypeError("closeTo() requires a delta argument");
              }
              this.pushResult({
                result: Math.abs(actual - expected) <= delta,
                actual,
                expected,
                message: message || "value should be within ".concat(delta, " inclusive")
              });
            }, "closeTo")
            // Alias of pushResult.
          }, {
            key: "push",
            value: /* @__PURE__ */ __name(function push(result, actual, expected, message, negative) {
              var currentAssert = this instanceof Assert2 ? this : config2.current.assert;
              return currentAssert.pushResult({
                result,
                actual,
                expected,
                message,
                negative
              });
            }, "push")
            // Public API to internal test.pushResult()
          }, {
            key: "pushResult",
            value: /* @__PURE__ */ __name(function pushResult(resultInfo) {
              var assert2 = this;
              var currentTest = assert2 instanceof Assert2 && assert2.test || config2.current;
              if (!currentTest) {
                throw new Error("assertion outside test context, in " + sourceFromStacktrace(2));
              }
              if (!(assert2 instanceof Assert2)) {
                assert2 = currentTest.assert;
              }
              return assert2.test.pushResult(resultInfo);
            }, "pushResult")
          }, {
            key: "ok",
            value: /* @__PURE__ */ __name(function ok(result, message) {
              if (!message) {
                message = result ? "okay" : "failed, expected argument to be truthy, was: ".concat(dump2.parse(result));
              }
              this.pushResult({
                result: !!result,
                actual: result,
                expected: true,
                message
              });
            }, "ok")
          }, {
            key: "notOk",
            value: /* @__PURE__ */ __name(function notOk(result, message) {
              if (!message) {
                message = !result ? "okay" : "failed, expected argument to be falsy, was: ".concat(dump2.parse(result));
              }
              this.pushResult({
                result: !result,
                actual: result,
                expected: false,
                message
              });
            }, "notOk")
          }, {
            key: "true",
            value: /* @__PURE__ */ __name(function _true(result, message) {
              this.pushResult({
                result: result === true,
                actual: result,
                expected: true,
                message
              });
            }, "_true")
          }, {
            key: "false",
            value: /* @__PURE__ */ __name(function _false(result, message) {
              this.pushResult({
                result: result === false,
                actual: result,
                expected: false,
                message
              });
            }, "_false")
          }, {
            key: "equal",
            value: /* @__PURE__ */ __name(function equal(actual, expected, message) {
              this.pushResult({
                // eslint-disable-next-line eqeqeq
                result: expected == actual,
                actual,
                expected,
                message
              });
            }, "equal")
          }, {
            key: "notEqual",
            value: /* @__PURE__ */ __name(function notEqual(actual, expected, message) {
              this.pushResult({
                // eslint-disable-next-line eqeqeq
                result: expected != actual,
                actual,
                expected,
                message,
                negative: true
              });
            }, "notEqual")
          }, {
            key: "propEqual",
            value: /* @__PURE__ */ __name(function propEqual(actual, expected, message) {
              actual = objectValues(actual);
              expected = objectValues(expected);
              this.pushResult({
                result: equiv2(actual, expected),
                actual,
                expected,
                message
              });
            }, "propEqual")
          }, {
            key: "notPropEqual",
            value: /* @__PURE__ */ __name(function notPropEqual(actual, expected, message) {
              actual = objectValues(actual);
              expected = objectValues(expected);
              this.pushResult({
                result: !equiv2(actual, expected),
                actual,
                expected,
                message,
                negative: true
              });
            }, "notPropEqual")
          }, {
            key: "propContains",
            value: /* @__PURE__ */ __name(function propContains(actual, expected, message) {
              actual = objectValuesSubset(actual, expected);
              expected = objectValues(expected, false);
              this.pushResult({
                result: equiv2(actual, expected),
                actual,
                expected,
                message
              });
            }, "propContains")
          }, {
            key: "notPropContains",
            value: /* @__PURE__ */ __name(function notPropContains(actual, expected, message) {
              actual = objectValuesSubset(actual, expected);
              expected = objectValues(expected);
              this.pushResult({
                result: !equiv2(actual, expected),
                actual,
                expected,
                message,
                negative: true
              });
            }, "notPropContains")
          }, {
            key: "deepEqual",
            value: /* @__PURE__ */ __name(function deepEqual(actual, expected, message) {
              this.pushResult({
                result: equiv2(actual, expected),
                actual,
                expected,
                message
              });
            }, "deepEqual")
          }, {
            key: "notDeepEqual",
            value: /* @__PURE__ */ __name(function notDeepEqual(actual, expected, message) {
              this.pushResult({
                result: !equiv2(actual, expected),
                actual,
                expected,
                message,
                negative: true
              });
            }, "notDeepEqual")
          }, {
            key: "strictEqual",
            value: /* @__PURE__ */ __name(function strictEqual(actual, expected, message) {
              this.pushResult({
                result: expected === actual,
                actual,
                expected,
                message
              });
            }, "strictEqual")
          }, {
            key: "notStrictEqual",
            value: /* @__PURE__ */ __name(function notStrictEqual(actual, expected, message) {
              this.pushResult({
                result: expected !== actual,
                actual,
                expected,
                message,
                negative: true
              });
            }, "notStrictEqual")
          }, {
            key: "throws",
            value: /* @__PURE__ */ __name(function throws(block, expected, message) {
              var _validateExpectedExce = validateExpectedExceptionArgs(expected, message, "throws");
              var _validateExpectedExce2 = _slicedToArray(_validateExpectedExce, 2);
              expected = _validateExpectedExce2[0];
              message = _validateExpectedExce2[1];
              var currentTest = this instanceof Assert2 && this.test || config2.current;
              if (typeof block !== "function") {
                currentTest.assert.pushResult({
                  result: false,
                  actual: block,
                  message: 'The value provided to `assert.throws` in "' + currentTest.testName + '" was not a function.'
                });
                return;
              }
              var actual;
              var result = false;
              currentTest.ignoreGlobalErrors = true;
              try {
                block.call(currentTest.testEnvironment);
              } catch (e) {
                actual = e;
              }
              currentTest.ignoreGlobalErrors = false;
              if (actual) {
                var _validateException = validateException(actual, expected, message);
                var _validateException2 = _slicedToArray(_validateException, 3);
                result = _validateException2[0];
                expected = _validateException2[1];
                message = _validateException2[2];
              }
              currentTest.assert.pushResult({
                result,
                // undefined if it didn't throw
                actual: actual && errorString(actual),
                expected,
                message
              });
            }, "throws")
          }, {
            key: "rejects",
            value: /* @__PURE__ */ __name(function rejects(promise, expected, message) {
              var _validateExpectedExce3 = validateExpectedExceptionArgs(expected, message, "rejects");
              var _validateExpectedExce4 = _slicedToArray(_validateExpectedExce3, 2);
              expected = _validateExpectedExce4[0];
              message = _validateExpectedExce4[1];
              var currentTest = this instanceof Assert2 && this.test || config2.current;
              var then = promise && promise.then;
              if (typeof then !== "function") {
                currentTest.assert.pushResult({
                  result: false,
                  message: 'The value provided to `assert.rejects` in "' + currentTest.testName + '" was not a promise.',
                  actual: promise
                });
                return;
              }
              var done2 = this.async();
              return then.call(promise, /* @__PURE__ */ __name(function handleFulfillment() {
                currentTest.assert.pushResult({
                  result: false,
                  message: 'The promise returned by the `assert.rejects` callback in "' + currentTest.testName + '" did not reject.',
                  actual: promise
                });
                done2();
              }, "handleFulfillment"), /* @__PURE__ */ __name(function handleRejection(actual) {
                var result;
                var _validateException3 = validateException(actual, expected, message);
                var _validateException4 = _slicedToArray(_validateException3, 3);
                result = _validateException4[0];
                expected = _validateException4[1];
                message = _validateException4[2];
                currentTest.assert.pushResult({
                  result,
                  // leave rejection value of undefined as-is
                  actual: actual && errorString(actual),
                  expected,
                  message
                });
                done2();
              }, "handleRejection"));
            }, "rejects")
          }]);
        })();
        function validateExpectedExceptionArgs(expected, message, assertionMethod) {
          var expectedType = objectType2(expected);
          if (expectedType === "string") {
            if (message === void 0) {
              message = expected;
              expected = void 0;
              return [expected, message];
            } else {
              throw new Error("assert." + assertionMethod + " does not accept a string value for the expected argument.\nUse a non-string object value (e.g. RegExp or validator function) instead if necessary.");
            }
          }
          var valid = !expected || // TODO: be more explicit here
          expectedType === "regexp" || expectedType === "function" || expectedType === "object";
          if (!valid) {
            throw new Error("Invalid expected value type (" + expectedType + ") provided to assert." + assertionMethod + ".");
          }
          return [expected, message];
        }
        __name(validateExpectedExceptionArgs, "validateExpectedExceptionArgs");
        function validateException(actual, expected, message) {
          var result = false;
          var expectedType = objectType2(expected);
          if (!expected) {
            result = true;
          } else if (expectedType === "regexp") {
            result = expected.test(errorString(actual));
            expected = String(expected);
          } else if (expectedType === "function" && expected.prototype !== void 0 && actual instanceof expected) {
            result = true;
          } else if (expectedType === "object") {
            result = actual instanceof expected.constructor && actual.name === expected.name && actual.message === expected.message;
            expected = errorString(expected);
          } else if (expectedType === "function") {
            try {
              result = expected.call({}, actual) === true;
              expected = null;
            } catch (e) {
              expected = errorString(e);
            }
          }
          return [result, expected, message];
        }
        __name(validateException, "validateException");
        Assert.prototype.raises = Assert.prototype["throws"];
        var SUPPORTED_EVENTS = ["error", "runStart", "suiteStart", "testStart", "assertion", "testEnd", "suiteEnd", "runEnd"];
        var MEMORY_EVENTS = ["error", "runEnd"];
        function emit(eventName, data) {
          if (typeof eventName !== "string") {
            throw new TypeError("eventName must be a string when emitting an event");
          }
          var originalCallbacks = config2._event_listeners[eventName];
          var callbacks = originalCallbacks ? _toConsumableArray(originalCallbacks) : [];
          for (var i = 0; i < callbacks.length; i++) {
            callbacks[i](data);
          }
          if (inArray(eventName, MEMORY_EVENTS)) {
            config2._event_memory[eventName] = data;
          }
        }
        __name(emit, "emit");
        function on2(eventName, callback) {
          if (typeof eventName !== "string") {
            throw new TypeError("eventName must be a string when registering a listener");
          } else if (!inArray(eventName, SUPPORTED_EVENTS)) {
            var events = SUPPORTED_EVENTS.join(", ");
            throw new Error('"'.concat(eventName, '" is not a valid event; must be one of: ').concat(events, "."));
          } else if (typeof callback !== "function") {
            throw new TypeError("callback must be a function when registering a listener");
          }
          var listeners = config2._event_listeners[eventName] || (config2._event_listeners[eventName] = []);
          if (!inArray(callback, listeners)) {
            listeners.push(callback);
            if (config2._event_memory[eventName] !== void 0) {
              callback(config2._event_memory[eventName]);
            }
          }
        }
        __name(on2, "on");
        var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
        function commonjsRequire(path) {
          throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
        }
        __name(commonjsRequire, "commonjsRequire");
        var promisePolyfill = { exports: {} };
        (function() {
          var globalNS = (function() {
            if (typeof globalThis !== "undefined") {
              return globalThis;
            }
            if (typeof self !== "undefined") {
              return self;
            }
            if (typeof window !== "undefined") {
              return window;
            }
            if (typeof commonjsGlobal !== "undefined") {
              return commonjsGlobal;
            }
            throw new Error("unable to locate global object");
          })();
          if (typeof globalNS["Promise"] === "function") {
            promisePolyfill.exports = globalNS["Promise"];
            return;
          }
          function finallyConstructor(callback) {
            var constructor = this.constructor;
            return this.then(function(value) {
              return constructor.resolve(callback()).then(function() {
                return value;
              });
            }, function(reason) {
              return constructor.resolve(callback()).then(function() {
                return constructor.reject(reason);
              });
            });
          }
          __name(finallyConstructor, "finallyConstructor");
          function allSettled(arr) {
            var P = this;
            return new P(function(resolve2, reject2) {
              if (!(arr && typeof arr.length !== "undefined")) {
                return reject2(new TypeError(_typeof(arr) + " " + arr + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
              }
              var args = Array.prototype.slice.call(arr);
              if (args.length === 0) return resolve2([]);
              var remaining = args.length;
              function res(i2, val) {
                if (val && (_typeof(val) === "object" || typeof val === "function")) {
                  var then = val.then;
                  if (typeof then === "function") {
                    then.call(val, function(val2) {
                      res(i2, val2);
                    }, function(e) {
                      args[i2] = {
                        status: "rejected",
                        reason: e
                      };
                      if (--remaining === 0) {
                        resolve2(args);
                      }
                    });
                    return;
                  }
                }
                args[i2] = {
                  status: "fulfilled",
                  value: val
                };
                if (--remaining === 0) {
                  resolve2(args);
                }
              }
              __name(res, "res");
              for (var i = 0; i < args.length; i++) {
                res(i, args[i]);
              }
            });
          }
          __name(allSettled, "allSettled");
          var setTimeoutFunc = setTimeout;
          function isArray(x) {
            return Boolean(x && typeof x.length !== "undefined");
          }
          __name(isArray, "isArray");
          function noop() {
          }
          __name(noop, "noop");
          function bind(fn, thisArg) {
            return function() {
              fn.apply(thisArg, arguments);
            };
          }
          __name(bind, "bind");
          function Promise2(fn) {
            if (!(this instanceof Promise2)) throw new TypeError("Promises must be constructed via new");
            if (typeof fn !== "function") throw new TypeError("not a function");
            this._state = 0;
            this._handled = false;
            this._value = void 0;
            this._deferreds = [];
            doResolve(fn, this);
          }
          __name(Promise2, "Promise");
          function handle(self2, deferred) {
            while (self2._state === 3) {
              self2 = self2._value;
            }
            if (self2._state === 0) {
              self2._deferreds.push(deferred);
              return;
            }
            self2._handled = true;
            Promise2._immediateFn(function() {
              var cb = self2._state === 1 ? deferred.onFulfilled : deferred.onRejected;
              if (cb === null) {
                (self2._state === 1 ? resolve : reject)(deferred.promise, self2._value);
                return;
              }
              var ret;
              try {
                ret = cb(self2._value);
              } catch (e) {
                reject(deferred.promise, e);
                return;
              }
              resolve(deferred.promise, ret);
            });
          }
          __name(handle, "handle");
          function resolve(self2, newValue) {
            try {
              if (newValue === self2) throw new TypeError("A promise cannot be resolved with itself.");
              if (newValue && (_typeof(newValue) === "object" || typeof newValue === "function")) {
                var then = newValue.then;
                if (newValue instanceof Promise2) {
                  self2._state = 3;
                  self2._value = newValue;
                  finale(self2);
                  return;
                } else if (typeof then === "function") {
                  doResolve(bind(then, newValue), self2);
                  return;
                }
              }
              self2._state = 1;
              self2._value = newValue;
              finale(self2);
            } catch (e) {
              reject(self2, e);
            }
          }
          __name(resolve, "resolve");
          function reject(self2, newValue) {
            self2._state = 2;
            self2._value = newValue;
            finale(self2);
          }
          __name(reject, "reject");
          function finale(self2) {
            if (self2._state === 2 && self2._deferreds.length === 0) {
              Promise2._immediateFn(function() {
                if (!self2._handled) {
                  Promise2._unhandledRejectionFn(self2._value);
                }
              });
            }
            for (var i = 0, len = self2._deferreds.length; i < len; i++) {
              handle(self2, self2._deferreds[i]);
            }
            self2._deferreds = null;
          }
          __name(finale, "finale");
          function Handler(onFulfilled, onRejected, promise) {
            this.onFulfilled = typeof onFulfilled === "function" ? onFulfilled : null;
            this.onRejected = typeof onRejected === "function" ? onRejected : null;
            this.promise = promise;
          }
          __name(Handler, "Handler");
          function doResolve(fn, self2) {
            var done2 = false;
            try {
              fn(function(value) {
                if (done2) return;
                done2 = true;
                resolve(self2, value);
              }, function(reason) {
                if (done2) return;
                done2 = true;
                reject(self2, reason);
              });
            } catch (ex) {
              if (done2) return;
              done2 = true;
              reject(self2, ex);
            }
          }
          __name(doResolve, "doResolve");
          Promise2.prototype["catch"] = function(onRejected) {
            return this.then(null, onRejected);
          };
          Promise2.prototype.then = function(onFulfilled, onRejected) {
            var prom = new this.constructor(noop);
            handle(this, new Handler(onFulfilled, onRejected, prom));
            return prom;
          };
          Promise2.prototype["finally"] = finallyConstructor;
          Promise2.all = function(arr) {
            return new Promise2(function(resolve2, reject2) {
              if (!isArray(arr)) {
                return reject2(new TypeError("Promise.all accepts an array"));
              }
              var args = Array.prototype.slice.call(arr);
              if (args.length === 0) return resolve2([]);
              var remaining = args.length;
              function res(i2, val) {
                try {
                  if (val && (_typeof(val) === "object" || typeof val === "function")) {
                    var then = val.then;
                    if (typeof then === "function") {
                      then.call(val, function(val2) {
                        res(i2, val2);
                      }, reject2);
                      return;
                    }
                  }
                  args[i2] = val;
                  if (--remaining === 0) {
                    resolve2(args);
                  }
                } catch (ex) {
                  reject2(ex);
                }
              }
              __name(res, "res");
              for (var i = 0; i < args.length; i++) {
                res(i, args[i]);
              }
            });
          };
          Promise2.allSettled = allSettled;
          Promise2.resolve = function(value) {
            if (value && _typeof(value) === "object" && value.constructor === Promise2) {
              return value;
            }
            return new Promise2(function(resolve2) {
              resolve2(value);
            });
          };
          Promise2.reject = function(value) {
            return new Promise2(function(resolve2, reject2) {
              reject2(value);
            });
          };
          Promise2.race = function(arr) {
            return new Promise2(function(resolve2, reject2) {
              if (!isArray(arr)) {
                return reject2(new TypeError("Promise.race accepts an array"));
              }
              for (var i = 0, len = arr.length; i < len; i++) {
                Promise2.resolve(arr[i]).then(resolve2, reject2);
              }
            });
          };
          if (typeof setImmediate === "function") {
            var setImmediateFunc = setImmediate;
            Promise2._immediateFn = function(fn) {
              setImmediateFunc(fn);
            };
          } else {
            Promise2._immediateFn = function(fn) {
              setTimeoutFunc(fn, 0);
            };
          }
          Promise2._unhandledRejectionFn = /* @__PURE__ */ __name(function _unhandledRejectionFn(err) {
            if (typeof console !== "undefined" && console) {
              console.warn("Possible Unhandled Promise Rejection:", err);
            }
          }, "_unhandledRejectionFn");
          promisePolyfill.exports = Promise2;
        })();
        var _Promise = promisePolyfill.exports;
        function registerLoggingCallbacks(obj) {
          var callbackNames = ["begin", "done", "log", "testStart", "testDone", "moduleStart", "moduleDone"];
          function registerLoggingCallback(key2) {
            return /* @__PURE__ */ __name(function loggingCallback(callback) {
              if (typeof callback !== "function") {
                throw new Error("Callback parameter must be a function");
              }
              config2.callbacks[key2].push(callback);
            }, "loggingCallback");
          }
          __name(registerLoggingCallback, "registerLoggingCallback");
          for (var i = 0; i < callbackNames.length; i++) {
            var key = callbackNames[i];
            if (typeof config2.callbacks[key] === "undefined") {
              config2.callbacks[key] = [];
            }
            obj[key] = registerLoggingCallback(key);
          }
        }
        __name(registerLoggingCallbacks, "registerLoggingCallbacks");
        function runLoggingCallbacks(key, args) {
          var callbacks = config2.callbacks[key];
          if (key === "log") {
            callbacks.map(function(callback) {
              return callback(args);
            });
            return;
          }
          var promiseChain = _Promise.resolve();
          callbacks.forEach(function(callback) {
            promiseChain = promiseChain.then(function() {
              return _Promise.resolve(callback(args));
            });
          });
          return promiseChain;
        }
        __name(runLoggingCallbacks, "runLoggingCallbacks");
        var TestReport = /* @__PURE__ */ (function() {
          function TestReport2(name, suite, options) {
            _classCallCheck(this, TestReport2);
            this.name = name;
            this.suiteName = suite.name;
            this.fullName = suite.fullName.concat(name);
            this.runtime = 0;
            this.assertions = [];
            this.skipped = !!options.skip;
            this.todo = !!options.todo;
            this.valid = options.valid;
            this._startTime = 0;
            this._endTime = 0;
            suite.pushTest(this);
          }
          __name(TestReport2, "TestReport");
          return _createClass(TestReport2, [{
            key: "start",
            value: /* @__PURE__ */ __name(function start2(recordTime) {
              if (recordTime) {
                this._startTime = performance.now();
              }
              return {
                name: this.name,
                suiteName: this.suiteName,
                fullName: this.fullName.slice()
              };
            }, "start")
          }, {
            key: "end",
            value: /* @__PURE__ */ __name(function end(recordTime) {
              if (recordTime) {
                this._endTime = performance.now();
              }
              return extend2(this.start(), {
                runtime: this.getRuntime(),
                status: this.getStatus(),
                errors: this.getFailedAssertions(),
                assertions: this.getAssertions()
              });
            }, "end")
          }, {
            key: "pushAssertion",
            value: /* @__PURE__ */ __name(function pushAssertion(assertion) {
              this.assertions.push(assertion);
            }, "pushAssertion")
          }, {
            key: "getRuntime",
            value: /* @__PURE__ */ __name(function getRuntime() {
              return Math.round(this._endTime - this._startTime);
            }, "getRuntime")
          }, {
            key: "getStatus",
            value: /* @__PURE__ */ __name(function getStatus() {
              if (this.skipped) {
                return "skipped";
              }
              var testPassed = this.getFailedAssertions().length > 0 ? this.todo : !this.todo;
              if (!testPassed) {
                return "failed";
              } else if (this.todo) {
                return "todo";
              } else {
                return "passed";
              }
            }, "getStatus")
          }, {
            key: "getFailedAssertions",
            value: /* @__PURE__ */ __name(function getFailedAssertions() {
              return this.assertions.filter(function(assertion) {
                return !assertion.passed;
              });
            }, "getFailedAssertions")
          }, {
            key: "getAssertions",
            value: /* @__PURE__ */ __name(function getAssertions() {
              return this.assertions.slice();
            }, "getAssertions")
            // Remove actual and expected values from assertions. This is to prevent
            // leaking memory throughout a test suite.
          }, {
            key: "slimAssertions",
            value: /* @__PURE__ */ __name(function slimAssertions() {
              this.assertions = this.assertions.map(function(assertion) {
                delete assertion.actual;
                delete assertion.expected;
                return assertion;
              });
            }, "slimAssertions")
          }]);
        })();
        function Test(settings) {
          this.expected = null;
          this.assertions = [];
          this.module = config2.currentModule;
          this.steps = [];
          this.stepsCount = 0;
          this.timeout = void 0;
          this.data = void 0;
          this.withData = false;
          this.pauses = new StringMap();
          this.nextPauseId = 1;
          this.stackOffset = 3;
          extend2(this, settings);
          if (this.module.skip) {
            this.skip = true;
            this.todo = false;
          } else if (this.module.todo && !this.skip) {
            this.todo = true;
          }
          if (config2.pq.finished) {
            Logger.warn("Unexpected test after runEnd. This is unstable and will fail in QUnit 3.0.");
            return;
          }
          if (!this.skip && typeof this.callback !== "function") {
            var method = this.todo ? "QUnit.todo" : "QUnit.test";
            throw new TypeError("You must provide a callback to ".concat(method, '("').concat(this.testName, '")'));
          }
          for (var i = 0, l = this.module.tests; i < l.length; i++) {
            if (this.module.tests[i].name === this.testName) {
              this.testName += " ";
            }
          }
          this.testId = generateHash(this.module.name, this.testName);
          ++Test.count;
          this.errorForStack = new Error();
          if (this.callback && this.callback.validTest) {
            this.errorForStack.stack = void 0;
          }
          this.testReport = new TestReport(this.testName, this.module.suiteReport, {
            todo: this.todo,
            skip: this.skip,
            valid: this.valid()
          });
          this.module.tests.push({
            name: this.testName,
            testId: this.testId,
            skip: !!this.skip
          });
          if (this.skip) {
            this.callback = function() {
            };
            this.async = false;
            this.expected = 0;
          } else {
            this.assert = new Assert(this);
          }
        }
        __name(Test, "Test");
        Test.count = 0;
        function getNotStartedModules(startModule) {
          var module3 = startModule;
          var modules = [];
          while (module3 && module3.testsRun === 0) {
            modules.push(module3);
            module3 = module3.parentModule;
          }
          return modules.reverse();
        }
        __name(getNotStartedModules, "getNotStartedModules");
        Test.prototype = {
          // Use a getter to avoid computing a stack trace (which can be expensive),
          // This is displayed by the HTML Reporter, but most other integrations do
          // not access it.
          get stack() {
            return extractStacktrace(this.errorForStack, this.stackOffset);
          },
          before: /* @__PURE__ */ __name(function before() {
            var _this = this;
            var module3 = this.module;
            var notStartedModules = getNotStartedModules(module3);
            var moduleStartChain = _Promise.resolve();
            notStartedModules.forEach(function(startModule) {
              moduleStartChain = moduleStartChain.then(function() {
                startModule.stats = {
                  all: 0,
                  bad: 0,
                  started: performance.now()
                };
                emit("suiteStart", startModule.suiteReport.start(true));
                return runLoggingCallbacks("moduleStart", {
                  name: startModule.name,
                  tests: startModule.tests
                });
              });
            });
            return moduleStartChain.then(function() {
              config2.current = _this;
              _this.testEnvironment = extend2({}, module3.testEnvironment);
              _this.started = performance.now();
              emit("testStart", _this.testReport.start(true));
              return runLoggingCallbacks("testStart", {
                name: _this.testName,
                module: module3.name,
                testId: _this.testId,
                previousFailure: _this.previousFailure
              }).then(function() {
                if (!config2.pollution) {
                  saveGlobal();
                }
              });
            });
          }, "before"),
          run: /* @__PURE__ */ __name(function run2() {
            config2.current = this;
            if (config2.notrycatch) {
              runTest(this);
              return;
            }
            try {
              runTest(this);
            } catch (e) {
              this.pushFailure("Died on test #" + (this.assertions.length + 1) + ": " + (e.message || e) + "\n" + this.stack, extractStacktrace(e, 0));
              saveGlobal();
              if (config2.blocking) {
                internalRecover(this);
              }
            }
            function runTest(test3) {
              var promise;
              if (test3.withData) {
                promise = test3.callback.call(test3.testEnvironment, test3.assert, test3.data);
              } else {
                promise = test3.callback.call(test3.testEnvironment, test3.assert);
              }
              test3.resolvePromise(promise);
              if (test3.timeout === 0 && test3.pauses.size > 0) {
                pushFailure2("Test did not finish synchronously even though assert.timeout( 0 ) was used.", sourceFromStacktrace(2));
              }
            }
            __name(runTest, "runTest");
          }, "run"),
          after: /* @__PURE__ */ __name(function after() {
            checkPollution();
          }, "after"),
          queueGlobalHook: /* @__PURE__ */ __name(function queueGlobalHook(hook, hookName) {
            var _this2 = this;
            var runHook = /* @__PURE__ */ __name(function runHook2() {
              config2.current = _this2;
              var promise;
              if (config2.notrycatch) {
                promise = hook.call(_this2.testEnvironment, _this2.assert);
              } else {
                try {
                  promise = hook.call(_this2.testEnvironment, _this2.assert);
                } catch (error) {
                  _this2.pushFailure("Global " + hookName + " failed on " + _this2.testName + ": " + errorString(error), extractStacktrace(error, 0));
                  return;
                }
              }
              _this2.resolvePromise(promise, hookName);
            }, "runHook");
            return runHook;
          }, "queueGlobalHook"),
          queueHook: /* @__PURE__ */ __name(function queueHook(hook, hookName, hookOwner) {
            var _this3 = this;
            var callHook = /* @__PURE__ */ __name(function callHook2() {
              var promise = hook.call(_this3.testEnvironment, _this3.assert);
              _this3.resolvePromise(promise, hookName);
            }, "callHook");
            var runHook = /* @__PURE__ */ __name(function runHook2() {
              if (hookName === "before") {
                if (hookOwner.testsRun !== 0) {
                  return;
                }
                _this3.preserveEnvironment = true;
              }
              if (hookName === "after" && !lastTestWithinModuleExecuted(hookOwner) && (config2.queue.length > 0 || config2.pq.taskCount() > 2)) {
                return;
              }
              config2.current = _this3;
              if (config2.notrycatch) {
                callHook();
                return;
              }
              try {
                callHook();
              } catch (error) {
                _this3.pushFailure(hookName + " failed on " + _this3.testName + ": " + (error.message || error), extractStacktrace(error, 0));
              }
            }, "runHook");
            return runHook;
          }, "queueHook"),
          // Currently only used for module level hooks, can be used to add global level ones
          hooks: /* @__PURE__ */ __name(function hooks2(handler) {
            var hooks3 = [];
            function processGlobalhooks(test3) {
              if ((handler === "beforeEach" || handler === "afterEach") && config2.globalHooks[handler]) {
                for (var i = 0; i < config2.globalHooks[handler].length; i++) {
                  hooks3.push(test3.queueGlobalHook(config2.globalHooks[handler][i], handler));
                }
              }
            }
            __name(processGlobalhooks, "processGlobalhooks");
            function processHooks(test3, module3) {
              if (module3.parentModule) {
                processHooks(test3, module3.parentModule);
              }
              if (module3.hooks[handler].length) {
                for (var i = 0; i < module3.hooks[handler].length; i++) {
                  hooks3.push(test3.queueHook(module3.hooks[handler][i], handler, module3));
                }
              }
            }
            __name(processHooks, "processHooks");
            if (!this.skip) {
              processGlobalhooks(this);
              processHooks(this, this.module);
            }
            return hooks3;
          }, "hooks"),
          finish: /* @__PURE__ */ __name(function finish() {
            config2.current = this;
            if (setTimeout$1) {
              clearTimeout(this.timeout);
              config2.timeoutHandler = null;
            }
            this.callback = void 0;
            if (this.steps.length) {
              var stepsList = this.steps.join(", ");
              this.pushFailure("Expected assert.verifySteps() to be called before end of test " + "after using assert.step(). Unverified steps: ".concat(stepsList), this.stack);
            }
            if (!config2._deprecated_countEachStep_shown && !config2.countStepsAsOne && this.expected !== null && this.stepsCount) {
              config2._deprecated_countEachStep_shown = true;
              if (config2.requireExpects) {
                Logger.warn("Counting each assert.step() for assert.expect() is changing in QUnit 3.0. You can enable QUnit.config.countStepsAsOne to prepare for the upgrade. https://qunitjs.com/api/assert/expect/");
              } else {
                Logger.warn("Counting each assert.step() for assert.expect() is changing in QUnit 3.0. Omit assert.expect() from tests that use assert.step(), or enable QUnit.config.countStepsAsOne to prepare for the upgrade. https://qunitjs.com/api/assert/expect/");
              }
            }
            var actualCountForExpect = config2.countStepsAsOne ? this.assertions.length - this.stepsCount : this.assertions.length;
            if (config2.requireExpects && this.expected === null) {
              this.pushFailure("Expected number of assertions to be defined, but expect() was not called.", this.stack);
            } else if (this.expected !== null && this.expected !== actualCountForExpect && this.stepsCount && this.expected === this.assertions.length - this.stepsCount && !config2.countStepsAsOne) {
              this.pushFailure("Expected " + this.expected + " assertions, but " + actualCountForExpect + " were run\nIt looks like you might prefer to enable QUnit.config.countStepsAsOne, which will become the default in QUnit 3.0. https://qunitjs.com/api/assert/expect/", this.stack);
            } else if (this.expected !== null && this.expected !== actualCountForExpect && this.stepsCount && this.expected === this.assertions.length && config2.countStepsAsOne) {
              this.pushFailure("Expected " + this.expected + " assertions, but " + actualCountForExpect + " were run\nRemember that with QUnit.config.countStepsAsOne and in QUnit 3.0, steps no longer count as separate assertions. https://qunitjs.com/api/assert/expect/", this.stack);
            } else if (this.expected !== null && this.expected !== actualCountForExpect) {
              this.pushFailure("Expected " + this.expected + " assertions, but " + actualCountForExpect + " were run", this.stack);
            } else if (this.expected === null && !actualCountForExpect) {
              this.pushFailure("Expected at least one assertion, but none were run - call expect(0) to accept zero assertions.", this.stack);
            }
            var module3 = this.module;
            var moduleName = module3.name;
            var testName = this.testName;
            var skipped = !!this.skip;
            var todo2 = !!this.todo;
            var bad = 0;
            var storage = config2.storage;
            this.runtime = Math.round(performance.now() - this.started);
            config2.stats.all += this.assertions.length;
            config2.stats.testCount += 1;
            module3.stats.all += this.assertions.length;
            for (var i = 0; i < this.assertions.length; i++) {
              if (!this.assertions[i].result) {
                bad++;
                config2.stats.bad++;
                module3.stats.bad++;
              }
            }
            if (skipped) {
              incrementTestsIgnored(module3);
            } else {
              incrementTestsRun(module3);
            }
            if (storage) {
              if (bad) {
                storage.setItem("qunit-test-" + moduleName + "-" + testName, bad);
              } else {
                storage.removeItem("qunit-test-" + moduleName + "-" + testName);
              }
            }
            emit("testEnd", this.testReport.end(true));
            this.testReport.slimAssertions();
            var test3 = this;
            return runLoggingCallbacks("testDone", {
              name: testName,
              module: moduleName,
              skipped,
              todo: todo2,
              failed: bad,
              passed: this.assertions.length - bad,
              total: this.assertions.length,
              runtime: skipped ? 0 : this.runtime,
              // HTML Reporter use
              assertions: this.assertions,
              testId: this.testId,
              // Source of Test
              // generating stack trace is expensive, so using a getter will help defer this until we need it
              get source() {
                return test3.stack;
              }
            }).then(function() {
              if (allTestsExecuted(module3)) {
                var completedModules = [module3];
                var parent = module3.parentModule;
                while (parent && allTestsExecuted(parent)) {
                  completedModules.push(parent);
                  parent = parent.parentModule;
                }
                var moduleDoneChain = _Promise.resolve();
                completedModules.forEach(function(completedModule) {
                  moduleDoneChain = moduleDoneChain.then(function() {
                    return logSuiteEnd(completedModule);
                  });
                });
                return moduleDoneChain;
              }
            }).then(function() {
              config2.current = void 0;
            });
            function logSuiteEnd(module4) {
              var modules = [module4];
              while (modules.length) {
                var nextModule = modules.shift();
                nextModule.hooks = {};
                modules.push.apply(modules, _toConsumableArray(nextModule.childModules));
              }
              emit("suiteEnd", module4.suiteReport.end(true));
              return runLoggingCallbacks("moduleDone", {
                name: module4.name,
                tests: module4.tests,
                failed: module4.stats.bad,
                passed: module4.stats.all - module4.stats.bad,
                total: module4.stats.all,
                runtime: Math.round(performance.now() - module4.stats.started)
              });
            }
            __name(logSuiteEnd, "logSuiteEnd");
          }, "finish"),
          preserveTestEnvironment: /* @__PURE__ */ __name(function preserveTestEnvironment() {
            if (this.preserveEnvironment) {
              this.module.testEnvironment = this.testEnvironment;
              this.testEnvironment = extend2({}, this.module.testEnvironment);
            }
          }, "preserveTestEnvironment"),
          queue: /* @__PURE__ */ __name(function queue() {
            var test3 = this;
            if (!this.valid()) {
              incrementTestsIgnored(this.module);
              return;
            }
            function runTest() {
              return [function() {
                return test3.before();
              }].concat(_toConsumableArray(test3.hooks("before")), [function() {
                test3.preserveTestEnvironment();
              }], _toConsumableArray(test3.hooks("beforeEach")), [function() {
                test3.run();
              }], _toConsumableArray(test3.hooks("afterEach").reverse()), _toConsumableArray(test3.hooks("after").reverse()), [function() {
                test3.after();
              }, function() {
                return test3.finish();
              }]);
            }
            __name(runTest, "runTest");
            var previousFailCount = config2.storage && +config2.storage.getItem("qunit-test-" + this.module.name + "-" + this.testName);
            var prioritize = config2.reorder && !!previousFailCount;
            this.previousFailure = !!previousFailCount;
            config2.pq.add(runTest, prioritize);
          }, "queue"),
          pushResult: /* @__PURE__ */ __name(function pushResult(resultInfo) {
            if (this !== config2.current) {
              var message = resultInfo && resultInfo.message || "";
              var testName = this && this.testName || "";
              var error = "Assertion occurred after test finished.\n> Test: " + testName + "\n> Message: " + message + "\n";
              throw new Error(error);
            }
            var details = {
              module: this.module.name,
              name: this.testName,
              result: resultInfo.result,
              message: resultInfo.message,
              actual: resultInfo.actual,
              testId: this.testId,
              negative: resultInfo.negative || false,
              runtime: Math.round(performance.now() - this.started),
              todo: !!this.todo
            };
            if (hasOwn$1.call(resultInfo, "expected")) {
              details.expected = resultInfo.expected;
            }
            if (!resultInfo.result) {
              var source = resultInfo.source || sourceFromStacktrace();
              if (source) {
                details.source = source;
              }
            }
            this.logAssertion(details);
            this.assertions.push({
              result: !!resultInfo.result,
              message: resultInfo.message
            });
          }, "pushResult"),
          pushFailure: /* @__PURE__ */ __name(function pushFailure3(message, source) {
            if (!(this instanceof Test)) {
              throw new Error("pushFailure() assertion outside test context, was " + sourceFromStacktrace(2));
            }
            this.pushResult({
              result: false,
              message: message || "error",
              source
            });
          }, "pushFailure"),
          /**
           * Log assertion details using both the old QUnit.log interface and
           * QUnit.on( "assertion" ) interface.
           *
           * @private
           */
          logAssertion: /* @__PURE__ */ __name(function logAssertion(details) {
            runLoggingCallbacks("log", details);
            var assertion = {
              passed: details.result,
              actual: details.actual,
              expected: details.expected,
              message: details.message,
              stack: details.source,
              todo: details.todo
            };
            this.testReport.pushAssertion(assertion);
            emit("assertion", assertion);
          }, "logAssertion"),
          /**
           * Reset config.timeout with a new timeout duration.
           *
           * @param {number} timeoutDuration
           */
          internalResetTimeout: /* @__PURE__ */ __name(function internalResetTimeout(timeoutDuration) {
            clearTimeout(config2.timeout);
            config2.timeout = setTimeout$1(config2.timeoutHandler(timeoutDuration), timeoutDuration);
          }, "internalResetTimeout"),
          /**
           * Create a new async pause and return a new function that can release the pause.
           *
           * This mechanism is internally used by:
           *
           * - explicit async pauses, created by calling `assert.async()`,
           * - implicit async pauses, created when `QUnit.test()` or module hook callbacks
           *   use async-await or otherwise return a Promise.
           *
           * Happy scenario:
           *
           * - Pause is created by calling internalStop().
           *
           *   Pause is released normally by invoking release() during the same test.
           *
           *   The release() callback lets internal processing resume.
           *
           * Failure scenarios:
           *
           * - The test fails due to an uncaught exception.
           *
           *   In this case, Test.run() will call internalRecover() which empties the clears all
           *   async pauses and sets the cancelled flag, which means we silently ignore any
           *   late calls to the resume() callback, as we will have moved on to a different
           *   test by then, and we don't want to cause an extra "release during a different test"
           *   errors that the developer isn't really responsible for. This can happen when a test
           *   correctly schedules a call to release(), but also causes an uncaught error. The
           *   uncaught error means we will no longer wait for the release (as it might not arrive).
           *
           * - Pause is never released, or called an insufficient number of times.
           *
           *   Our timeout handler will kill the pause and resume test processing, basically
           *   like internalRecover(), but for one pause instead of any/all.
           *
           *   Here, too, any late calls to resume() will be silently ignored to avoid
           *   extra errors. We tolerate this since the original test will have already been
           *   marked as failure.
           *
           *   TODO: QUnit 3 will enable timeouts by default <https://github.com/qunitjs/qunit/issues/1483>,
           *   but right now a test will hang indefinitely if async pauses are not released,
           *   unless QUnit.config.testTimeout or assert.timeout() is used.
           *
           * - Pause is spontaneously released during a different test,
           *   or when no test is currently running.
           *
           *   This is close to impossible because this error only happens if the original test
           *   succesfully finished first (since other failure scenarios kill pauses and ignore
           *   late calls). It can happen if a test ended exactly as expected, but has some
           *   external or shared state continuing to hold a reference to the release callback,
           *   and either the same test scheduled another call to it in the future, or a later test
           *   causes it to be called through some shared state.
           *
           * - Pause release() is called too often, during the same test.
           *
           *   This simply throws an error, after which uncaught error handling picks it up
           *   and processing resumes.
           *
           * @param {number} [requiredCalls=1]
           */
          internalStop: /* @__PURE__ */ __name(function internalStop() {
            var requiredCalls = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
            config2.blocking = true;
            var test3 = this;
            var pauseId = this.nextPauseId++;
            var pause = {
              cancelled: false,
              remaining: requiredCalls
            };
            test3.pauses.set(pauseId, pause);
            function release() {
              if (pause.cancelled) {
                return;
              }
              if (config2.current === void 0) {
                throw new Error("Unexpected release of async pause after tests finished.\n" + "> Test: ".concat(test3.testName, " [async #").concat(pauseId, "]"));
              }
              if (config2.current !== test3) {
                throw new Error("Unexpected release of async pause during a different test.\n" + "> Test: ".concat(test3.testName, " [async #").concat(pauseId, "]"));
              }
              if (pause.remaining <= 0) {
                throw new Error("Tried to release async pause that was already released.\n" + "> Test: ".concat(test3.testName, " [async #").concat(pauseId, "]"));
              }
              pause.remaining--;
              if (pause.remaining === 0) {
                test3.pauses.delete(pauseId);
              }
              internalStart(test3);
            }
            __name(release, "release");
            if (setTimeout$1) {
              var timeoutDuration;
              if (typeof test3.timeout === "number") {
                timeoutDuration = test3.timeout;
              } else if (typeof config2.testTimeout === "number") {
                timeoutDuration = config2.testTimeout;
              }
              if (typeof timeoutDuration === "number" && timeoutDuration > 0) {
                config2.timeoutHandler = function(timeout) {
                  return function() {
                    config2.timeout = null;
                    pause.cancelled = true;
                    test3.pauses.delete(pauseId);
                    test3.pushFailure("Test took longer than ".concat(timeout, "ms; test timed out."), sourceFromStacktrace(2));
                    internalRecover(test3);
                  };
                };
                clearTimeout(config2.timeout);
                config2.timeout = setTimeout$1(config2.timeoutHandler(timeoutDuration), timeoutDuration);
              } else {
                clearTimeout(config2.timeout);
                config2.timeout = setTimeout$1(function() {
                  config2.timeout = null;
                  if (!config2._deprecated_timeout_shown) {
                    config2._deprecated_timeout_shown = true;
                    Logger.warn('Test "'.concat(test3.testName, '" took longer than 3000ms, but no timeout was set. Set QUnit.config.testTimeout or call assert.timeout() to avoid a timeout in QUnit 3. https://qunitjs.com/api/config/testTimeout/'));
                  }
                }, 3e3);
              }
            }
            return release;
          }, "internalStop"),
          resolvePromise: /* @__PURE__ */ __name(function resolvePromise(promise, phase) {
            if (promise != null) {
              var _test = this;
              var then = promise.then;
              if (typeof then === "function") {
                var resume = _test.internalStop();
                var resolve = /* @__PURE__ */ __name(function resolve2() {
                  resume();
                }, "resolve");
                if (config2.notrycatch) {
                  then.call(promise, resolve);
                } else {
                  var reject = /* @__PURE__ */ __name(function reject2(error) {
                    var message = "Promise rejected " + (!phase ? "during" : phase.replace(/Each$/, "")) + ' "' + _test.testName + '": ' + (error && error.message || error);
                    _test.pushFailure(message, extractStacktrace(error, 0));
                    saveGlobal();
                    internalRecover(_test);
                  }, "reject");
                  then.call(promise, resolve, reject);
                }
              }
            }
          }, "resolvePromise"),
          valid: /* @__PURE__ */ __name(function valid() {
            if (this.callback && this.callback.validTest) {
              return true;
            }
            function moduleChainIdMatch(testModule, selectedId) {
              return (
                // undefined or empty array
                !selectedId || !selectedId.length || inArray(testModule.moduleId, selectedId) || testModule.parentModule && moduleChainIdMatch(testModule.parentModule, selectedId)
              );
            }
            __name(moduleChainIdMatch, "moduleChainIdMatch");
            if (!moduleChainIdMatch(this.module, config2.moduleId)) {
              return false;
            }
            if (config2.testId && config2.testId.length && !inArray(this.testId, config2.testId)) {
              return false;
            }
            function moduleChainNameMatch(testModule, selectedModule2) {
              if (!selectedModule2) {
                return true;
              }
              var testModuleName = testModule.name ? testModule.name.toLowerCase() : null;
              if (testModuleName === selectedModule2) {
                return true;
              } else if (testModule.parentModule) {
                return moduleChainNameMatch(testModule.parentModule, selectedModule2);
              } else {
                return false;
              }
            }
            __name(moduleChainNameMatch, "moduleChainNameMatch");
            var selectedModule = config2.module && config2.module.toLowerCase();
            if (!moduleChainNameMatch(this.module, selectedModule)) {
              return false;
            }
            var filter = config2.filter;
            if (filter) {
              var regexFilter = /^(!?)\/([\w\W]*)\/(i?$)/.exec(filter);
              var fullName = this.module.name + ": " + this.testName;
              if (regexFilter) {
                if (!this.regexFilter(!!regexFilter[1], regexFilter[2], regexFilter[3], fullName)) {
                  return false;
                }
              } else if (!this.stringFilter(filter, fullName)) {
                return false;
              }
            }
            if (typeof config2.testFilter === "function") {
              var testInfo = {
                testId: this.testId,
                testName: this.testName,
                module: this.module.name,
                skip: !!this.skip
              };
              try {
                return !!config2.testFilter(testInfo);
              } catch (error) {
                Logger.warn("Error in QUnit.config.testFilter callback: ", error);
                return false;
              }
            }
            return true;
          }, "valid"),
          regexFilter: /* @__PURE__ */ __name(function regexFilter(exclude, pattern, flags, fullName) {
            var regex = new RegExp(pattern, flags);
            var match = regex.test(fullName);
            return match !== exclude;
          }, "regexFilter"),
          stringFilter: /* @__PURE__ */ __name(function stringFilter(filter, fullName) {
            filter = filter.toLowerCase();
            fullName = fullName.toLowerCase();
            var include = filter.charAt(0) !== "!";
            if (!include) {
              filter = filter.slice(1);
            }
            if (fullName.indexOf(filter) !== -1) {
              return include;
            }
            return !include;
          }, "stringFilter")
        };
        function pushFailure2() {
          if (!config2.current) {
            throw new Error("pushFailure() assertion outside test context, in " + sourceFromStacktrace(2));
          }
          var currentTest = config2.current;
          return currentTest.pushFailure.apply(currentTest, arguments);
        }
        __name(pushFailure2, "pushFailure");
        function saveGlobal() {
          config2.pollution = [];
          if (config2.noglobals) {
            for (var key in g) {
              if (hasOwn$1.call(g, key)) {
                if (/^qunit-test-output/.test(key)) {
                  continue;
                }
                config2.pollution.push(key);
              }
            }
          }
        }
        __name(saveGlobal, "saveGlobal");
        function checkPollution() {
          var old = config2.pollution;
          saveGlobal();
          var newGlobals = diff$1(config2.pollution, old);
          if (newGlobals.length > 0) {
            pushFailure2("Introduced global variable(s): " + newGlobals.join(", "));
          }
          var deletedGlobals = diff$1(old, config2.pollution);
          if (deletedGlobals.length > 0) {
            pushFailure2("Deleted global variable(s): " + deletedGlobals.join(", "));
          }
        }
        __name(checkPollution, "checkPollution");
        var focused = false;
        function addTest(settings) {
          if (focused || config2.currentModule.ignored) {
            return;
          }
          var newTest = new Test(settings);
          newTest.queue();
        }
        __name(addTest, "addTest");
        function addOnlyTest(settings) {
          if (config2.currentModule.ignored) {
            return;
          }
          if (!focused) {
            config2.queue.length = 0;
            clearSuiteReports(config2.currentModule);
            focused = true;
          }
          var newTest = new Test(settings);
          newTest.queue();
        }
        __name(addOnlyTest, "addOnlyTest");
        function test2(testName, callback) {
          addTest({
            testName,
            callback
          });
        }
        __name(test2, "test");
        function makeEachTestName(testName, argument) {
          return "".concat(testName, " [").concat(argument, "]");
        }
        __name(makeEachTestName, "makeEachTestName");
        var rNonObviousStr = /[\x00-\x1F\x7F\xA0]/;
        function runEach(data, eachFn) {
          if (Array.isArray(data)) {
            for (var i = 0; i < data.length; i++) {
              var value = data[i];
              var valueType = _typeof(value);
              var testKey = i;
              if (valueType === "string" && value.length <= 40 && !rNonObviousStr.test(value) && !/\s*\d+: /.test(value)) {
                testKey = value;
              } else if (valueType === "string" || valueType === "number" || valueType === "boolean" || valueType === "undefined" || value === null) {
                var valueForName = String(value);
                if (!rNonObviousStr.test(valueForName)) {
                  testKey = i + ": " + (valueForName.length <= 30 ? valueForName : valueForName.slice(0, 29) + "\u2026");
                }
              }
              eachFn(value, testKey);
            }
          } else if (_typeof(data) === "object" && data !== null) {
            for (var key in data) {
              eachFn(data[key], key);
            }
          } else {
            throw new Error("test.each() expects an array or object as input, but\nfound ".concat(_typeof(data), " instead."));
          }
        }
        __name(runEach, "runEach");
        extend2(test2, {
          todo: /* @__PURE__ */ __name(function todo2(testName, callback) {
            addTest({
              testName,
              callback,
              todo: true
            });
          }, "todo"),
          skip: /* @__PURE__ */ __name(function skip2(testName) {
            addTest({
              testName,
              skip: true
            });
          }, "skip"),
          if: /* @__PURE__ */ __name(function _if(testName, condition, callback) {
            addTest({
              testName,
              callback,
              skip: !condition
            });
          }, "_if"),
          only: /* @__PURE__ */ __name(function only2(testName, callback) {
            addOnlyTest({
              testName,
              callback
            });
          }, "only"),
          each: /* @__PURE__ */ __name(function each(testName, dataset, callback) {
            runEach(dataset, function(data, testKey) {
              addTest({
                testName: makeEachTestName(testName, testKey),
                callback,
                withData: true,
                stackOffset: 5,
                data
              });
            });
          }, "each")
        });
        test2.todo.each = function(testName, dataset, callback) {
          runEach(dataset, function(data, testKey) {
            addTest({
              testName: makeEachTestName(testName, testKey),
              callback,
              todo: true,
              withData: true,
              stackOffset: 5,
              data
            });
          });
        };
        test2.skip.each = function(testName, dataset) {
          runEach(dataset, function(_, testKey) {
            addTest({
              testName: makeEachTestName(testName, testKey),
              stackOffset: 5,
              skip: true
            });
          });
        };
        test2.if.each = function(testName, condition, dataset, callback) {
          runEach(dataset, function(data, testKey) {
            addTest({
              testName: makeEachTestName(testName, testKey),
              callback,
              withData: true,
              stackOffset: 5,
              skip: !condition,
              data: condition ? data : void 0
            });
          });
        };
        test2.only.each = function(testName, dataset, callback) {
          runEach(dataset, function(data, testKey) {
            addOnlyTest({
              testName: makeEachTestName(testName, testKey),
              callback,
              withData: true,
              stackOffset: 5,
              data
            });
          });
        };
        function internalRecover(test3) {
          test3.pauses.forEach(function(pause) {
            pause.cancelled = true;
          });
          test3.pauses.clear();
          internalStart(test3);
        }
        __name(internalRecover, "internalRecover");
        function internalStart(test3) {
          if (test3.pauses.size > 0) {
            return;
          }
          if (setTimeout$1) {
            clearTimeout(config2.timeout);
            config2.timeout = setTimeout$1(function() {
              if (test3.pauses.size > 0) {
                return;
              }
              clearTimeout(config2.timeout);
              config2.timeout = null;
              config2.blocking = false;
              config2.pq.advance();
            });
          } else {
            config2.blocking = false;
            config2.pq.advance();
          }
        }
        __name(internalStart, "internalStart");
        function collectTests(module3) {
          var tests = [].concat(module3.tests);
          var modules = _toConsumableArray(module3.childModules);
          while (modules.length) {
            var nextModule = modules.shift();
            tests.push.apply(tests, nextModule.tests);
            modules.push.apply(modules, _toConsumableArray(nextModule.childModules));
          }
          return tests;
        }
        __name(collectTests, "collectTests");
        function allTestsExecuted(module3) {
          return module3.testsRun + module3.testsIgnored === collectTests(module3).length;
        }
        __name(allTestsExecuted, "allTestsExecuted");
        function lastTestWithinModuleExecuted(module3) {
          return module3.testsRun === collectTests(module3).filter(function(test3) {
            return !test3.skip;
          }).length - 1;
        }
        __name(lastTestWithinModuleExecuted, "lastTestWithinModuleExecuted");
        function incrementTestsRun(module3) {
          module3.testsRun++;
          while (module3 = module3.parentModule) {
            module3.testsRun++;
          }
        }
        __name(incrementTestsRun, "incrementTestsRun");
        function incrementTestsIgnored(module3) {
          module3.testsIgnored++;
          while (module3 = module3.parentModule) {
            module3.testsIgnored++;
          }
        }
        __name(incrementTestsIgnored, "incrementTestsIgnored");
        function exportQUnit(QUnit3) {
          var exportedModule = false;
          if (window$1 && document) {
            if (window$1.QUnit && window$1.QUnit.version) {
              throw new Error("QUnit has already been defined.");
            }
            window$1.QUnit = QUnit3;
            exportedModule = true;
          }
          if (typeof module2 !== "undefined" && module2 && module2.exports) {
            module2.exports = QUnit3;
            module2.exports.QUnit = QUnit3;
            exportedModule = true;
          }
          if (typeof exports !== "undefined" && exports) {
            exports.QUnit = QUnit3;
            exportedModule = true;
          }
          if (typeof define === "function" && define.amd) {
            define(function() {
              return QUnit3;
            });
            QUnit3.config.autostart = false;
            exportedModule = true;
          }
          if (!exportedModule) {
            g.QUnit = QUnit3;
          }
        }
        __name(exportQUnit, "exportQUnit");
        var ConsoleReporter = /* @__PURE__ */ (function() {
          function ConsoleReporter2(runner) {
            var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            _classCallCheck(this, ConsoleReporter2);
            this.log = options.log || Function.prototype.bind.call(console$1.log, console$1);
            runner.on("error", this.onError.bind(this));
            runner.on("runStart", this.onRunStart.bind(this));
            runner.on("testStart", this.onTestStart.bind(this));
            runner.on("testEnd", this.onTestEnd.bind(this));
            runner.on("runEnd", this.onRunEnd.bind(this));
          }
          __name(ConsoleReporter2, "ConsoleReporter");
          return _createClass(ConsoleReporter2, [{
            key: "onError",
            value: /* @__PURE__ */ __name(function onError2(error) {
              this.log("error", error);
            }, "onError")
          }, {
            key: "onRunStart",
            value: /* @__PURE__ */ __name(function onRunStart(runStart) {
              this.log("runStart", runStart);
            }, "onRunStart")
          }, {
            key: "onTestStart",
            value: /* @__PURE__ */ __name(function onTestStart(test3) {
              this.log("testStart", test3);
            }, "onTestStart")
          }, {
            key: "onTestEnd",
            value: /* @__PURE__ */ __name(function onTestEnd(test3) {
              this.log("testEnd", test3);
            }, "onTestEnd")
          }, {
            key: "onRunEnd",
            value: /* @__PURE__ */ __name(function onRunEnd(runEnd) {
              this.log("runEnd", runEnd);
            }, "onRunEnd")
          }], [{
            key: "init",
            value: /* @__PURE__ */ __name(function init2(runner, options) {
              return new ConsoleReporter2(runner, options);
            }, "init")
          }]);
        })();
        var nativePerf = window$1 && typeof window$1.performance !== "undefined" && // eslint-disable-next-line compat/compat -- Checked
        typeof window$1.performance.mark === "function" && // eslint-disable-next-line compat/compat -- Checked
        typeof window$1.performance.measure === "function" ? window$1.performance : void 0;
        var perf = {
          measure: nativePerf ? function(comment, startMark, endMark) {
            try {
              nativePerf.measure(comment, startMark, endMark);
            } catch (ex) {
              Logger.warn("performance.measure could not be executed because of ", ex.message);
            }
          } : function() {
          },
          mark: nativePerf ? nativePerf.mark.bind(nativePerf) : function() {
          }
        };
        var PerfReporter = /* @__PURE__ */ (function() {
          function PerfReporter2(runner) {
            var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            _classCallCheck(this, PerfReporter2);
            this.perf = options.perf || perf;
            runner.on("runStart", this.onRunStart.bind(this));
            runner.on("runEnd", this.onRunEnd.bind(this));
            runner.on("suiteStart", this.onSuiteStart.bind(this));
            runner.on("suiteEnd", this.onSuiteEnd.bind(this));
            runner.on("testStart", this.onTestStart.bind(this));
            runner.on("testEnd", this.onTestEnd.bind(this));
          }
          __name(PerfReporter2, "PerfReporter");
          return _createClass(PerfReporter2, [{
            key: "onRunStart",
            value: /* @__PURE__ */ __name(function onRunStart() {
              this.perf.mark("qunit_suite_0_start");
            }, "onRunStart")
          }, {
            key: "onSuiteStart",
            value: /* @__PURE__ */ __name(function onSuiteStart(suiteStart) {
              var suiteLevel = suiteStart.fullName.length;
              this.perf.mark("qunit_suite_".concat(suiteLevel, "_start"));
            }, "onSuiteStart")
          }, {
            key: "onSuiteEnd",
            value: /* @__PURE__ */ __name(function onSuiteEnd(suiteEnd) {
              var suiteLevel = suiteEnd.fullName.length;
              var suiteName = suiteEnd.fullName.join(" \u2013 ");
              this.perf.mark("qunit_suite_".concat(suiteLevel, "_end"));
              this.perf.measure("QUnit Test Suite: ".concat(suiteName), "qunit_suite_".concat(suiteLevel, "_start"), "qunit_suite_".concat(suiteLevel, "_end"));
            }, "onSuiteEnd")
          }, {
            key: "onTestStart",
            value: /* @__PURE__ */ __name(function onTestStart() {
              this.perf.mark("qunit_test_start");
            }, "onTestStart")
          }, {
            key: "onTestEnd",
            value: /* @__PURE__ */ __name(function onTestEnd(testEnd) {
              this.perf.mark("qunit_test_end");
              var testName = testEnd.fullName.join(" \u2013 ");
              this.perf.measure("QUnit Test: ".concat(testName), "qunit_test_start", "qunit_test_end");
            }, "onTestEnd")
          }, {
            key: "onRunEnd",
            value: /* @__PURE__ */ __name(function onRunEnd() {
              this.perf.mark("qunit_suite_0_end");
              this.perf.measure("QUnit Test Run", "qunit_suite_0_start", "qunit_suite_0_end");
            }, "onRunEnd")
          }], [{
            key: "init",
            value: /* @__PURE__ */ __name(function init2(runner, options) {
              return new PerfReporter2(runner, options);
            }, "init")
          }]);
        })();
        var FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM, isTTY = true;
        if (typeof process !== "undefined") {
          var _ref = process.env || {};
          FORCE_COLOR = _ref.FORCE_COLOR;
          NODE_DISABLE_COLORS = _ref.NODE_DISABLE_COLORS;
          NO_COLOR = _ref.NO_COLOR;
          TERM = _ref.TERM;
          isTTY = process.stdout && process.stdout.isTTY;
        }
        var $ = {
          enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY),
          // modifiers
          reset: init(0, 0),
          bold: init(1, 22),
          dim: init(2, 22),
          italic: init(3, 23),
          underline: init(4, 24),
          inverse: init(7, 27),
          hidden: init(8, 28),
          strikethrough: init(9, 29),
          // colors
          black: init(30, 39),
          red: init(31, 39),
          green: init(32, 39),
          yellow: init(33, 39),
          blue: init(34, 39),
          magenta: init(35, 39),
          cyan: init(36, 39),
          white: init(37, 39),
          gray: init(90, 39),
          grey: init(90, 39),
          // background colors
          bgBlack: init(40, 49),
          bgRed: init(41, 49),
          bgGreen: init(42, 49),
          bgYellow: init(43, 49),
          bgBlue: init(44, 49),
          bgMagenta: init(45, 49),
          bgCyan: init(46, 49),
          bgWhite: init(47, 49)
        };
        function run(arr, str) {
          var i = 0, tmp, beg = "", end = "";
          for (; i < arr.length; i++) {
            tmp = arr[i];
            beg += tmp.open;
            end += tmp.close;
            if (!!~str.indexOf(tmp.close)) {
              str = str.replace(tmp.rgx, tmp.close + tmp.open);
            }
          }
          return beg + str + end;
        }
        __name(run, "run");
        function chain(has, keys) {
          var ctx = {
            has,
            keys
          };
          ctx.reset = $.reset.bind(ctx);
          ctx.bold = $.bold.bind(ctx);
          ctx.dim = $.dim.bind(ctx);
          ctx.italic = $.italic.bind(ctx);
          ctx.underline = $.underline.bind(ctx);
          ctx.inverse = $.inverse.bind(ctx);
          ctx.hidden = $.hidden.bind(ctx);
          ctx.strikethrough = $.strikethrough.bind(ctx);
          ctx.black = $.black.bind(ctx);
          ctx.red = $.red.bind(ctx);
          ctx.green = $.green.bind(ctx);
          ctx.yellow = $.yellow.bind(ctx);
          ctx.blue = $.blue.bind(ctx);
          ctx.magenta = $.magenta.bind(ctx);
          ctx.cyan = $.cyan.bind(ctx);
          ctx.white = $.white.bind(ctx);
          ctx.gray = $.gray.bind(ctx);
          ctx.grey = $.grey.bind(ctx);
          ctx.bgBlack = $.bgBlack.bind(ctx);
          ctx.bgRed = $.bgRed.bind(ctx);
          ctx.bgGreen = $.bgGreen.bind(ctx);
          ctx.bgYellow = $.bgYellow.bind(ctx);
          ctx.bgBlue = $.bgBlue.bind(ctx);
          ctx.bgMagenta = $.bgMagenta.bind(ctx);
          ctx.bgCyan = $.bgCyan.bind(ctx);
          ctx.bgWhite = $.bgWhite.bind(ctx);
          return ctx;
        }
        __name(chain, "chain");
        function init(open, close) {
          var blk = {
            open: "\x1B[".concat(open, "m"),
            close: "\x1B[".concat(close, "m"),
            rgx: new RegExp("\\x1b\\[".concat(close, "m"), "g")
          };
          return function(txt) {
            if (this !== void 0 && this.has !== void 0) {
              !!~this.has.indexOf(open) || (this.has.push(open), this.keys.push(blk));
              return txt === void 0 ? this : $.enabled ? run(this.keys, txt + "") : txt + "";
            }
            return txt === void 0 ? chain([open], [blk]) : $.enabled ? run([blk], txt + "") : txt + "";
          };
        }
        __name(init, "init");
        function prettyYamlValue(value) {
          var indent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
          if (value === void 0) {
            value = String(value);
          }
          if (typeof value === "number" && !isFinite(value)) {
            value = String(value);
          }
          if (typeof value === "number") {
            return JSON.stringify(value);
          }
          if (typeof value === "string") {
            var rSpecialJson = /['"\\/[{}\]\r\n|:#]/;
            var rSpecialYaml = /[-?:,[\]{}#&*!|=>'"%@`]/;
            var rUntrimmed = /(^\s|\s$)/;
            var rNumerical = /^[\d._-]+$/;
            var rBool = /^(true|false|y|n|yes|no|on|off)$/i;
            if (value === "" || rSpecialJson.test(value) || rSpecialYaml.test(value[0]) || rUntrimmed.test(value) || rNumerical.test(value) || rBool.test(value)) {
              if (!/\n/.test(value)) {
                return JSON.stringify(value);
              }
              var _prefix = new Array(indent * 2 + 1).join(" ");
              var trailingLinebreakMatch = value.match(/\n+$/);
              var trailingLinebreaks = trailingLinebreakMatch ? trailingLinebreakMatch[0].length : 0;
              if (trailingLinebreaks === 1) {
                var lines = value.replace(/\n$/, "").split("\n").map(function(line) {
                  return _prefix + line;
                });
                return "|\n" + lines.join("\n");
              } else {
                var _lines = value.split("\n").map(function(line) {
                  return _prefix + line;
                });
                return "|+\n" + _lines.join("\n");
              }
            } else {
              return value;
            }
          }
          var prefix = new Array(indent + 1).join(" ");
          return JSON.stringify(decycledShallowClone(value), null, 2).split("\n").map(function(line, i) {
            return i === 0 ? line : prefix + line;
          }).join("\n");
        }
        __name(prettyYamlValue, "prettyYamlValue");
        function decycledShallowClone(object) {
          var ancestors = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
          if (ancestors.indexOf(object) !== -1) {
            return "[Circular]";
          }
          var type = Object.prototype.toString.call(object).replace(/^\[.+\s(.+?)]$/, "$1").toLowerCase();
          var clone;
          switch (type) {
            case "array":
              ancestors.push(object);
              clone = object.map(function(element) {
                return decycledShallowClone(element, ancestors);
              });
              ancestors.pop();
              break;
            case "object":
              ancestors.push(object);
              clone = {};
              Object.keys(object).forEach(function(key) {
                clone[key] = decycledShallowClone(object[key], ancestors);
              });
              ancestors.pop();
              break;
            default:
              clone = object;
          }
          return clone;
        }
        __name(decycledShallowClone, "decycledShallowClone");
        var TapReporter = /* @__PURE__ */ (function() {
          function TapReporter2(runner) {
            var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            _classCallCheck(this, TapReporter2);
            this.log = options.log || Function.prototype.bind.call(console$1.log, console$1);
            this.testCount = 0;
            this.started = false;
            this.ended = false;
            this.bailed = false;
            runner.on("error", this.onError.bind(this));
            runner.on("runStart", this.onRunStart.bind(this));
            runner.on("testEnd", this.onTestEnd.bind(this));
            runner.on("runEnd", this.onRunEnd.bind(this));
          }
          __name(TapReporter2, "TapReporter");
          return _createClass(TapReporter2, [{
            key: "onRunStart",
            value: /* @__PURE__ */ __name(function onRunStart(_runSuite) {
              if (!this.started) {
                this.log("TAP version 13");
                this.started = true;
              }
            }, "onRunStart")
          }, {
            key: "onError",
            value: /* @__PURE__ */ __name(function onError2(error) {
              if (this.bailed) {
                return;
              }
              this.bailed = true;
              if (!this.ended) {
                this.onRunStart();
                this.testCount = this.testCount + 1;
                this.log("not ok ".concat(this.testCount, " ").concat($.red("global failure")));
                this.logError(error);
              }
              this.log("Bail out! " + errorString(error).split("\n")[0]);
              if (this.ended) {
                this.logError(error);
              }
            }, "onError")
          }, {
            key: "onTestEnd",
            value: /* @__PURE__ */ __name(function onTestEnd(test3) {
              var _this = this;
              this.testCount = this.testCount + 1;
              if (test3.status === "passed") {
                this.log("ok ".concat(this.testCount, " ").concat(test3.fullName.join(" > ")));
              } else if (test3.status === "skipped") {
                this.log("ok ".concat(this.testCount, " ").concat($.yellow(test3.fullName.join(" > ")), " # SKIP"));
              } else if (test3.status === "todo") {
                this.log("not ok ".concat(this.testCount, " ").concat($.cyan(test3.fullName.join(" > ")), " # TODO"));
                test3.errors.forEach(function(error) {
                  return _this.logAssertion(error, "todo");
                });
              } else {
                this.log("not ok ".concat(this.testCount, " ").concat($.red(test3.fullName.join(" > "))));
                test3.errors.forEach(function(error) {
                  return _this.logAssertion(error);
                });
              }
            }, "onTestEnd")
          }, {
            key: "onRunEnd",
            value: /* @__PURE__ */ __name(function onRunEnd(runEnd) {
              this.ended = true;
              this.log("1..".concat(runEnd.testCounts.total));
              this.log("# pass ".concat(runEnd.testCounts.passed));
              this.log("# ".concat($.yellow("skip ".concat(runEnd.testCounts.skipped))));
              this.log("# ".concat($.cyan("todo ".concat(runEnd.testCounts.todo))));
              this.log("# ".concat($.red("fail ".concat(runEnd.testCounts.failed))));
            }, "onRunEnd")
          }, {
            key: "logAssertion",
            value: /* @__PURE__ */ __name(function logAssertion(error, severity) {
              var out = "  ---";
              out += "\n  message: ".concat(prettyYamlValue(error.message || "failed"));
              out += "\n  severity: ".concat(prettyYamlValue(severity || "failed"));
              var hasAny = error.expected !== void 0 || error.actual !== void 0;
              if (hasAny) {
                out += "\n  actual  : ".concat(prettyYamlValue(error.actual));
                out += "\n  expected: ".concat(prettyYamlValue(error.expected));
              }
              if (error.stack) {
                var fmtStack = annotateStacktrace(error.stack, $.grey);
                if (fmtStack.length) {
                  out += "\n  stack: ".concat(prettyYamlValue(fmtStack + "\n"));
                }
              }
              out += "\n  ...";
              this.log(out);
            }, "logAssertion")
          }, {
            key: "logError",
            value: /* @__PURE__ */ __name(function logError(error) {
              var out = "  ---";
              out += "\n  message: ".concat(prettyYamlValue(errorString(error)));
              out += "\n  severity: ".concat(prettyYamlValue("failed"));
              if (error && error.stack) {
                var fmtStack = annotateStacktrace(error.stack, $.grey, error.toString());
                if (fmtStack.length) {
                  out += "\n  stack: ".concat(prettyYamlValue(fmtStack + "\n"));
                }
              }
              out += "\n  ...";
              this.log(out);
            }, "logError")
          }], [{
            key: "init",
            value: /* @__PURE__ */ __name(function init2(runner, options) {
              return new TapReporter2(runner, options);
            }, "init")
          }]);
        })();
        var reporters = {
          console: ConsoleReporter,
          perf: PerfReporter,
          tap: TapReporter
        };
        function makeAddGlobalHook(hookName) {
          return /* @__PURE__ */ __name(function addGlobalHook(callback) {
            if (!config2.globalHooks[hookName]) {
              config2.globalHooks[hookName] = [];
            }
            config2.globalHooks[hookName].push(callback);
          }, "addGlobalHook");
        }
        __name(makeAddGlobalHook, "makeAddGlobalHook");
        var hooks = {
          beforeEach: makeAddGlobalHook("beforeEach"),
          afterEach: makeAddGlobalHook("afterEach")
        };
        function unitSamplerGenerator(seed) {
          var sample = parseInt(generateHash(seed), 16) || -1;
          return function() {
            sample ^= sample << 13;
            sample ^= sample >>> 17;
            sample ^= sample << 5;
            if (sample < 0) {
              sample += 4294967296;
            }
            return sample / 4294967296;
          };
        }
        __name(unitSamplerGenerator, "unitSamplerGenerator");
        var ProcessingQueue = /* @__PURE__ */ (function() {
          function ProcessingQueue2(test3) {
            _classCallCheck(this, ProcessingQueue2);
            this.test = test3;
            this.priorityCount = 0;
            this.unitSampler = null;
            this.taskQueue = [];
            this.finished = false;
          }
          __name(ProcessingQueue2, "ProcessingQueue");
          return _createClass(ProcessingQueue2, [{
            key: "advance",
            value: /* @__PURE__ */ __name(function advance() {
              this.advanceTaskQueue();
              if (!this.taskQueue.length && !config2.blocking && !config2.current) {
                this.advanceTestQueue();
              }
            }, "advance")
            /**
             * Advances the taskQueue with an increased depth
             */
          }, {
            key: "advanceTaskQueue",
            value: /* @__PURE__ */ __name(function advanceTaskQueue() {
              var start2 = performance.now();
              config2.depth = (config2.depth || 0) + 1;
              this.processTaskQueue(start2);
              config2.depth--;
            }, "advanceTaskQueue")
            /**
             * Process the first task on the taskQueue as a promise.
             * Each task is a function added by Test#queue() in /src/test.js
             */
          }, {
            key: "processTaskQueue",
            value: /* @__PURE__ */ __name(function processTaskQueue(start2) {
              var _this = this;
              if (this.taskQueue.length && !config2.blocking) {
                var elapsedTime = performance.now() - start2;
                if (!setTimeout$1 || config2.updateRate <= 0 || elapsedTime < config2.updateRate) {
                  var task = this.taskQueue.shift();
                  _Promise.resolve(task()).then(function() {
                    if (!_this.taskQueue.length) {
                      _this.advance();
                    } else {
                      _this.processTaskQueue(start2);
                    }
                  });
                } else {
                  setTimeout$1(function() {
                    _this.advance();
                  });
                }
              }
            }, "processTaskQueue")
            /**
             * Advance the testQueue to the next test to process. Call done() if testQueue completes.
             */
          }, {
            key: "advanceTestQueue",
            value: /* @__PURE__ */ __name(function advanceTestQueue() {
              if (!config2.blocking && !config2.queue.length && config2.depth === 0) {
                this.done();
                return;
              }
              var testTasks = config2.queue.shift();
              this.addToTaskQueue(testTasks());
              if (this.priorityCount > 0) {
                this.priorityCount--;
              }
              this.advance();
            }, "advanceTestQueue")
            /**
             * Enqueue the tasks for a test into the task queue.
             * @param {Array} tasksArray
             */
          }, {
            key: "addToTaskQueue",
            value: /* @__PURE__ */ __name(function addToTaskQueue(tasksArray) {
              var _this$taskQueue;
              (_this$taskQueue = this.taskQueue).push.apply(_this$taskQueue, _toConsumableArray(tasksArray));
            }, "addToTaskQueue")
            /**
             * Return the number of tasks remaining in the task queue to be processed.
             * @return {number}
             */
          }, {
            key: "taskCount",
            value: /* @__PURE__ */ __name(function taskCount() {
              return this.taskQueue.length;
            }, "taskCount")
            /**
             * Adds a test to the TestQueue for execution.
             * @param {Function} testTasksFunc
             * @param {boolean} prioritize
             */
          }, {
            key: "add",
            value: /* @__PURE__ */ __name(function add(testTasksFunc, prioritize) {
              if (prioritize) {
                config2.queue.splice(this.priorityCount++, 0, testTasksFunc);
              } else if (config2.seed) {
                if (!this.unitSampler) {
                  this.unitSampler = unitSamplerGenerator(config2.seed);
                }
                var index = Math.floor(this.unitSampler() * (config2.queue.length - this.priorityCount + 1));
                config2.queue.splice(this.priorityCount + index, 0, testTasksFunc);
              } else {
                config2.queue.push(testTasksFunc);
              }
            }, "add")
            /**
             * This function is called when the ProcessingQueue is done processing all
             * items. It handles emitting the final run events.
             */
          }, {
            key: "done",
            value: /* @__PURE__ */ __name(function done2() {
              if (config2.stats.testCount === 0 && config2.failOnZeroTests === true) {
                var error;
                if (config2.filter && config2.filter.length) {
                  error = new Error('No tests matched the filter "'.concat(config2.filter, '".'));
                } else if (config2.module && config2.module.length) {
                  error = new Error('No tests matched the module "'.concat(config2.module, '".'));
                } else if (config2.moduleId && config2.moduleId.length) {
                  error = new Error('No tests matched the moduleId "'.concat(config2.moduleId, '".'));
                } else if (config2.testId && config2.testId.length) {
                  error = new Error('No tests matched the testId "'.concat(config2.testId, '".'));
                } else {
                  error = new Error("No tests were run.");
                }
                this.test("global failure", extend2(function(assert2) {
                  assert2.pushResult({
                    result: false,
                    message: error.message,
                    source: error.stack
                  });
                }, {
                  validTest: true
                }));
                this.advance();
                return;
              }
              var storage = config2.storage;
              var runtime = Math.round(performance.now() - config2.started);
              var passed = config2.stats.all - config2.stats.bad;
              this.finished = true;
              emit("runEnd", runSuite.end(true));
              runLoggingCallbacks("done", {
                // @deprecated since 2.19.0 Use done() without `details` parameter,
                // or use `QUnit.on('runEnd')` instead. Parameter to be replaced in
                // QUnit 3.0 with test counts.
                passed,
                failed: config2.stats.bad,
                total: config2.stats.all,
                runtime
              }).then(function() {
                if (storage && config2.stats.bad === 0) {
                  for (var i = storage.length - 1; i >= 0; i--) {
                    var key = storage.key(i);
                    if (key.indexOf("qunit-test-") === 0) {
                      storage.removeItem(key);
                    }
                  }
                }
              });
            }, "done")
          }]);
        })();
        function onUncaughtException(error) {
          if (config2.current) {
            config2.current.assert.pushResult({
              result: false,
              message: "global failure: ".concat(errorString(error)),
              // We could let callers specify an offset to subtract a number of frames via
              // sourceFromStacktrace, in case they are a wrapper further away from the error
              // handler, and thus reduce some noise in the stack trace. However, we're not
              // doing this right now because it would almost never be used in practice given
              // the vast majority of error values will be Error objects, and thus have their
              // own stack trace already.
              source: error && error.stack || sourceFromStacktrace(2)
            });
          } else {
            runSuite.globalFailureCount++;
            config2.stats.bad++;
            config2.stats.all++;
            emit("error", error);
          }
        }
        __name(onUncaughtException, "onUncaughtException");
        function onWindowError(details) {
          Logger.warn("QUnit.onError is deprecated and will be removed in QUnit 3.0. Please use QUnit.onUncaughtException instead.");
          if (config2.current && config2.current.ignoreGlobalErrors) {
            return true;
          }
          var err = new Error(details.message);
          err.stack = details.stacktrace || details.fileName + ":" + details.lineNumber;
          onUncaughtException(err);
          return false;
        }
        __name(onWindowError, "onWindowError");
        function DiffMatchPatch() {
        }
        __name(DiffMatchPatch, "DiffMatchPatch");
        var DIFF_DELETE = -1;
        var DIFF_INSERT = 1;
        var DIFF_EQUAL = 0;
        var hasOwn = Object.prototype.hasOwnProperty;
        DiffMatchPatch.prototype.DiffMain = function(text1, text2, optChecklines) {
          var deadline = Date.now() + 1e3;
          if (text1 === null || text2 === null) {
            throw new Error("Cannot diff null input.");
          }
          if (text1 === text2) {
            if (text1) {
              return [[DIFF_EQUAL, text1]];
            }
            return [];
          }
          if (typeof optChecklines === "undefined") {
            optChecklines = true;
          }
          var commonlength = this.diffCommonPrefix(text1, text2);
          var commonprefix = text1.substring(0, commonlength);
          text1 = text1.substring(commonlength);
          text2 = text2.substring(commonlength);
          commonlength = this.diffCommonSuffix(text1, text2);
          var commonsuffix = text1.substring(text1.length - commonlength);
          text1 = text1.substring(0, text1.length - commonlength);
          text2 = text2.substring(0, text2.length - commonlength);
          var diffs = this.diffCompute(text1, text2, optChecklines, deadline);
          if (commonprefix) {
            diffs.unshift([DIFF_EQUAL, commonprefix]);
          }
          if (commonsuffix) {
            diffs.push([DIFF_EQUAL, commonsuffix]);
          }
          this.diffCleanupMerge(diffs);
          return diffs;
        };
        DiffMatchPatch.prototype.diffCleanupEfficiency = function(diffs) {
          var changes, equalities, equalitiesLength, lastequality, pointer, preIns, preDel, postIns, postDel;
          changes = false;
          equalities = [];
          equalitiesLength = 0;
          lastequality = null;
          pointer = 0;
          preIns = false;
          preDel = false;
          postIns = false;
          postDel = false;
          while (pointer < diffs.length) {
            if (diffs[pointer][0] === DIFF_EQUAL) {
              if (diffs[pointer][1].length < 4 && (postIns || postDel)) {
                equalities[equalitiesLength++] = pointer;
                preIns = postIns;
                preDel = postDel;
                lastequality = diffs[pointer][1];
              } else {
                equalitiesLength = 0;
                lastequality = null;
              }
              postIns = postDel = false;
            } else {
              if (diffs[pointer][0] === DIFF_DELETE) {
                postDel = true;
              } else {
                postIns = true;
              }
              if (lastequality && (preIns && preDel && postIns && postDel || lastequality.length < 2 && preIns + preDel + postIns + postDel === 3)) {
                diffs.splice(equalities[equalitiesLength - 1], 0, [DIFF_DELETE, lastequality]);
                diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
                equalitiesLength--;
                lastequality = null;
                if (preIns && preDel) {
                  postIns = postDel = true;
                  equalitiesLength = 0;
                } else {
                  equalitiesLength--;
                  pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
                  postIns = postDel = false;
                }
                changes = true;
              }
            }
            pointer++;
          }
          if (changes) {
            this.diffCleanupMerge(diffs);
          }
        };
        DiffMatchPatch.prototype.diffPrettyHtml = function(diffs) {
          var html = [];
          for (var x = 0; x < diffs.length; x++) {
            var op = diffs[x][0];
            var data = diffs[x][1];
            switch (op) {
              case DIFF_INSERT:
                html[x] = "<ins>" + escapeText(data) + "</ins>";
                break;
              case DIFF_DELETE:
                html[x] = "<del>" + escapeText(data) + "</del>";
                break;
              case DIFF_EQUAL:
                html[x] = "<span>" + escapeText(data) + "</span>";
                break;
            }
          }
          return html.join("");
        };
        DiffMatchPatch.prototype.diffCommonPrefix = function(text1, text2) {
          var pointermid, pointermax, pointermin, pointerstart;
          if (!text1 || !text2 || text1.charAt(0) !== text2.charAt(0)) {
            return 0;
          }
          pointermin = 0;
          pointermax = Math.min(text1.length, text2.length);
          pointermid = pointermax;
          pointerstart = 0;
          while (pointermin < pointermid) {
            if (text1.substring(pointerstart, pointermid) === text2.substring(pointerstart, pointermid)) {
              pointermin = pointermid;
              pointerstart = pointermin;
            } else {
              pointermax = pointermid;
            }
            pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
          }
          return pointermid;
        };
        DiffMatchPatch.prototype.diffCommonSuffix = function(text1, text2) {
          var pointermid, pointermax, pointermin, pointerend;
          if (!text1 || !text2 || text1.charAt(text1.length - 1) !== text2.charAt(text2.length - 1)) {
            return 0;
          }
          pointermin = 0;
          pointermax = Math.min(text1.length, text2.length);
          pointermid = pointermax;
          pointerend = 0;
          while (pointermin < pointermid) {
            if (text1.substring(text1.length - pointermid, text1.length - pointerend) === text2.substring(text2.length - pointermid, text2.length - pointerend)) {
              pointermin = pointermid;
              pointerend = pointermin;
            } else {
              pointermax = pointermid;
            }
            pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
          }
          return pointermid;
        };
        DiffMatchPatch.prototype.diffCompute = function(text1, text2, checklines, deadline) {
          var diffs, longtext, shorttext, i, hm, text1A, text2A, text1B, text2B, midCommon, diffsA, diffsB;
          if (!text1) {
            return [[DIFF_INSERT, text2]];
          }
          if (!text2) {
            return [[DIFF_DELETE, text1]];
          }
          longtext = text1.length > text2.length ? text1 : text2;
          shorttext = text1.length > text2.length ? text2 : text1;
          i = longtext.indexOf(shorttext);
          if (i !== -1) {
            diffs = [[DIFF_INSERT, longtext.substring(0, i)], [DIFF_EQUAL, shorttext], [DIFF_INSERT, longtext.substring(i + shorttext.length)]];
            if (text1.length > text2.length) {
              diffs[0][0] = diffs[2][0] = DIFF_DELETE;
            }
            return diffs;
          }
          if (shorttext.length === 1) {
            return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
          }
          hm = this.diffHalfMatch(text1, text2);
          if (hm) {
            text1A = hm[0];
            text1B = hm[1];
            text2A = hm[2];
            text2B = hm[3];
            midCommon = hm[4];
            diffsA = this.DiffMain(text1A, text2A, checklines, deadline);
            diffsB = this.DiffMain(text1B, text2B, checklines, deadline);
            return diffsA.concat([[DIFF_EQUAL, midCommon]], diffsB);
          }
          if (checklines && text1.length > 100 && text2.length > 100) {
            return this.diffLineMode(text1, text2, deadline);
          }
          return this.diffBisect(text1, text2, deadline);
        };
        DiffMatchPatch.prototype.diffHalfMatch = function(text1, text2) {
          var longtext, shorttext, dmp, text1A, text2B, text2A, text1B, midCommon, hm1, hm2, hm;
          longtext = text1.length > text2.length ? text1 : text2;
          shorttext = text1.length > text2.length ? text2 : text1;
          if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
            return null;
          }
          dmp = this;
          function diffHalfMatchI(longtext2, shorttext2, i) {
            var seed, j, bestCommon, prefixLength, suffixLength, bestLongtextA, bestLongtextB, bestShorttextA, bestShorttextB;
            seed = longtext2.substring(i, i + Math.floor(longtext2.length / 4));
            j = -1;
            bestCommon = "";
            while ((j = shorttext2.indexOf(seed, j + 1)) !== -1) {
              prefixLength = dmp.diffCommonPrefix(longtext2.substring(i), shorttext2.substring(j));
              suffixLength = dmp.diffCommonSuffix(longtext2.substring(0, i), shorttext2.substring(0, j));
              if (bestCommon.length < suffixLength + prefixLength) {
                bestCommon = shorttext2.substring(j - suffixLength, j) + shorttext2.substring(j, j + prefixLength);
                bestLongtextA = longtext2.substring(0, i - suffixLength);
                bestLongtextB = longtext2.substring(i + prefixLength);
                bestShorttextA = shorttext2.substring(0, j - suffixLength);
                bestShorttextB = shorttext2.substring(j + prefixLength);
              }
            }
            if (bestCommon.length * 2 >= longtext2.length) {
              return [bestLongtextA, bestLongtextB, bestShorttextA, bestShorttextB, bestCommon];
            } else {
              return null;
            }
          }
          __name(diffHalfMatchI, "diffHalfMatchI");
          hm1 = diffHalfMatchI(longtext, shorttext, Math.ceil(longtext.length / 4));
          hm2 = diffHalfMatchI(longtext, shorttext, Math.ceil(longtext.length / 2));
          if (!hm1 && !hm2) {
            return null;
          } else if (!hm2) {
            hm = hm1;
          } else if (!hm1) {
            hm = hm2;
          } else {
            hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
          }
          if (text1.length > text2.length) {
            text1A = hm[0];
            text1B = hm[1];
            text2A = hm[2];
            text2B = hm[3];
          } else {
            text2A = hm[0];
            text2B = hm[1];
            text1A = hm[2];
            text1B = hm[3];
          }
          midCommon = hm[4];
          return [text1A, text1B, text2A, text2B, midCommon];
        };
        DiffMatchPatch.prototype.diffLineMode = function(text1, text2, deadline) {
          var a, diffs, linearray, pointer, countInsert, countDelete, textInsert, textDelete, j;
          a = this.diffLinesToChars(text1, text2);
          text1 = a.chars1;
          text2 = a.chars2;
          linearray = a.lineArray;
          diffs = this.DiffMain(text1, text2, false, deadline);
          this.diffCharsToLines(diffs, linearray);
          this.diffCleanupSemantic(diffs);
          diffs.push([DIFF_EQUAL, ""]);
          pointer = 0;
          countDelete = 0;
          countInsert = 0;
          textDelete = "";
          textInsert = "";
          while (pointer < diffs.length) {
            switch (diffs[pointer][0]) {
              case DIFF_INSERT:
                countInsert++;
                textInsert += diffs[pointer][1];
                break;
              case DIFF_DELETE:
                countDelete++;
                textDelete += diffs[pointer][1];
                break;
              case DIFF_EQUAL:
                if (countDelete >= 1 && countInsert >= 1) {
                  diffs.splice(pointer - countDelete - countInsert, countDelete + countInsert);
                  pointer = pointer - countDelete - countInsert;
                  a = this.DiffMain(textDelete, textInsert, false, deadline);
                  for (j = a.length - 1; j >= 0; j--) {
                    diffs.splice(pointer, 0, a[j]);
                  }
                  pointer = pointer + a.length;
                }
                countInsert = 0;
                countDelete = 0;
                textDelete = "";
                textInsert = "";
                break;
            }
            pointer++;
          }
          diffs.pop();
          return diffs;
        };
        DiffMatchPatch.prototype.diffBisect = function(text1, text2, deadline) {
          var text1Length, text2Length, maxD, vOffset, vLength, v1, v2, x, delta, front, k1start, k1end, k2start, k2end, k2Offset, k1Offset, x1, x2, y1, y2, d, k1, k2;
          text1Length = text1.length;
          text2Length = text2.length;
          maxD = Math.ceil((text1Length + text2Length) / 2);
          vOffset = maxD;
          vLength = 2 * maxD;
          v1 = new Array(vLength);
          v2 = new Array(vLength);
          for (x = 0; x < vLength; x++) {
            v1[x] = -1;
            v2[x] = -1;
          }
          v1[vOffset + 1] = 0;
          v2[vOffset + 1] = 0;
          delta = text1Length - text2Length;
          front = delta % 2 !== 0;
          k1start = 0;
          k1end = 0;
          k2start = 0;
          k2end = 0;
          for (d = 0; d < maxD; d++) {
            if (Date.now() > deadline) {
              break;
            }
            for (k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
              k1Offset = vOffset + k1;
              if (k1 === -d || k1 !== d && v1[k1Offset - 1] < v1[k1Offset + 1]) {
                x1 = v1[k1Offset + 1];
              } else {
                x1 = v1[k1Offset - 1] + 1;
              }
              y1 = x1 - k1;
              while (x1 < text1Length && y1 < text2Length && text1.charAt(x1) === text2.charAt(y1)) {
                x1++;
                y1++;
              }
              v1[k1Offset] = x1;
              if (x1 > text1Length) {
                k1end += 2;
              } else if (y1 > text2Length) {
                k1start += 2;
              } else if (front) {
                k2Offset = vOffset + delta - k1;
                if (k2Offset >= 0 && k2Offset < vLength && v2[k2Offset] !== -1) {
                  x2 = text1Length - v2[k2Offset];
                  if (x1 >= x2) {
                    return this.diffBisectSplit(text1, text2, x1, y1, deadline);
                  }
                }
              }
            }
            for (k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
              k2Offset = vOffset + k2;
              if (k2 === -d || k2 !== d && v2[k2Offset - 1] < v2[k2Offset + 1]) {
                x2 = v2[k2Offset + 1];
              } else {
                x2 = v2[k2Offset - 1] + 1;
              }
              y2 = x2 - k2;
              while (x2 < text1Length && y2 < text2Length && text1.charAt(text1Length - x2 - 1) === text2.charAt(text2Length - y2 - 1)) {
                x2++;
                y2++;
              }
              v2[k2Offset] = x2;
              if (x2 > text1Length) {
                k2end += 2;
              } else if (y2 > text2Length) {
                k2start += 2;
              } else if (!front) {
                k1Offset = vOffset + delta - k2;
                if (k1Offset >= 0 && k1Offset < vLength && v1[k1Offset] !== -1) {
                  x1 = v1[k1Offset];
                  y1 = vOffset + x1 - k1Offset;
                  x2 = text1Length - x2;
                  if (x1 >= x2) {
                    return this.diffBisectSplit(text1, text2, x1, y1, deadline);
                  }
                }
              }
            }
          }
          return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
        };
        DiffMatchPatch.prototype.diffBisectSplit = function(text1, text2, x, y, deadline) {
          var text1a, text1b, text2a, text2b, diffs, diffsb;
          text1a = text1.substring(0, x);
          text2a = text2.substring(0, y);
          text1b = text1.substring(x);
          text2b = text2.substring(y);
          diffs = this.DiffMain(text1a, text2a, false, deadline);
          diffsb = this.DiffMain(text1b, text2b, false, deadline);
          return diffs.concat(diffsb);
        };
        DiffMatchPatch.prototype.diffCleanupSemantic = function(diffs) {
          var changes = false;
          var equalities = [];
          var equalitiesLength = 0;
          var lastequality = null;
          var pointer = 0;
          var lengthInsertions1 = 0;
          var lengthDeletions1 = 0;
          var lengthInsertions2 = 0;
          var lengthDeletions2 = 0;
          while (pointer < diffs.length) {
            if (diffs[pointer][0] === DIFF_EQUAL) {
              equalities[equalitiesLength++] = pointer;
              lengthInsertions1 = lengthInsertions2;
              lengthDeletions1 = lengthDeletions2;
              lengthInsertions2 = 0;
              lengthDeletions2 = 0;
              lastequality = diffs[pointer][1];
            } else {
              if (diffs[pointer][0] === DIFF_INSERT) {
                lengthInsertions2 += diffs[pointer][1].length;
              } else {
                lengthDeletions2 += diffs[pointer][1].length;
              }
              if (lastequality && lastequality.length <= Math.max(lengthInsertions1, lengthDeletions1) && lastequality.length <= Math.max(lengthInsertions2, lengthDeletions2)) {
                diffs.splice(equalities[equalitiesLength - 1], 0, [DIFF_DELETE, lastequality]);
                diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
                equalitiesLength--;
                equalitiesLength--;
                pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
                lengthInsertions1 = 0;
                lengthDeletions1 = 0;
                lengthInsertions2 = 0;
                lengthDeletions2 = 0;
                lastequality = null;
                changes = true;
              }
            }
            pointer++;
          }
          if (changes) {
            this.diffCleanupMerge(diffs);
          }
          var deletion, insertion, overlapLength1, overlapLength2;
          pointer = 1;
          while (pointer < diffs.length) {
            if (diffs[pointer - 1][0] === DIFF_DELETE && diffs[pointer][0] === DIFF_INSERT) {
              deletion = diffs[pointer - 1][1];
              insertion = diffs[pointer][1];
              overlapLength1 = this.diffCommonOverlap(deletion, insertion);
              overlapLength2 = this.diffCommonOverlap(insertion, deletion);
              if (overlapLength1 >= overlapLength2) {
                if (overlapLength1 >= deletion.length / 2 || overlapLength1 >= insertion.length / 2) {
                  diffs.splice(pointer, 0, [DIFF_EQUAL, insertion.substring(0, overlapLength1)]);
                  diffs[pointer - 1][1] = deletion.substring(0, deletion.length - overlapLength1);
                  diffs[pointer + 1][1] = insertion.substring(overlapLength1);
                  pointer++;
                }
              } else {
                if (overlapLength2 >= deletion.length / 2 || overlapLength2 >= insertion.length / 2) {
                  diffs.splice(pointer, 0, [DIFF_EQUAL, deletion.substring(0, overlapLength2)]);
                  diffs[pointer - 1][0] = DIFF_INSERT;
                  diffs[pointer - 1][1] = insertion.substring(0, insertion.length - overlapLength2);
                  diffs[pointer + 1][0] = DIFF_DELETE;
                  diffs[pointer + 1][1] = deletion.substring(overlapLength2);
                  pointer++;
                }
              }
              pointer++;
            }
            pointer++;
          }
        };
        DiffMatchPatch.prototype.diffCommonOverlap = function(text1, text2) {
          var text1Length = text1.length;
          var text2Length = text2.length;
          if (text1Length === 0 || text2Length === 0) {
            return 0;
          }
          if (text1Length > text2Length) {
            text1 = text1.substring(text1Length - text2Length);
          } else if (text1Length < text2Length) {
            text2 = text2.substring(0, text1Length);
          }
          var textLength = Math.min(text1Length, text2Length);
          if (text1 === text2) {
            return textLength;
          }
          var best = 0;
          var length = 1;
          while (true) {
            var pattern = text1.substring(textLength - length);
            var found = text2.indexOf(pattern);
            if (found === -1) {
              return best;
            }
            length += found;
            if (found === 0 || text1.substring(textLength - length) === text2.substring(0, length)) {
              best = length;
              length++;
            }
          }
        };
        DiffMatchPatch.prototype.diffLinesToChars = function(text1, text2) {
          var lineArray = [];
          var lineHash = {};
          lineArray[0] = "";
          function diffLinesToCharsMunge(text) {
            var chars = "";
            var lineStart = 0;
            var lineEnd = -1;
            var lineArrayLength = lineArray.length;
            while (lineEnd < text.length - 1) {
              lineEnd = text.indexOf("\n", lineStart);
              if (lineEnd === -1) {
                lineEnd = text.length - 1;
              }
              var line = text.substring(lineStart, lineEnd + 1);
              lineStart = lineEnd + 1;
              if (hasOwn.call(lineHash, line)) {
                chars += String.fromCharCode(lineHash[line]);
              } else {
                chars += String.fromCharCode(lineArrayLength);
                lineHash[line] = lineArrayLength;
                lineArray[lineArrayLength++] = line;
              }
            }
            return chars;
          }
          __name(diffLinesToCharsMunge, "diffLinesToCharsMunge");
          var chars1 = diffLinesToCharsMunge(text1);
          var chars2 = diffLinesToCharsMunge(text2);
          return {
            chars1,
            chars2,
            lineArray
          };
        };
        DiffMatchPatch.prototype.diffCharsToLines = function(diffs, lineArray) {
          for (var x = 0; x < diffs.length; x++) {
            var chars = diffs[x][1];
            var text = [];
            for (var y = 0; y < chars.length; y++) {
              text[y] = lineArray[chars.charCodeAt(y)];
            }
            diffs[x][1] = text.join("");
          }
        };
        DiffMatchPatch.prototype.diffCleanupMerge = function(diffs) {
          diffs.push([DIFF_EQUAL, ""]);
          var pointer = 0;
          var countDelete = 0;
          var countInsert = 0;
          var textDelete = "";
          var textInsert = "";
          while (pointer < diffs.length) {
            switch (diffs[pointer][0]) {
              case DIFF_INSERT:
                countInsert++;
                textInsert += diffs[pointer][1];
                pointer++;
                break;
              case DIFF_DELETE:
                countDelete++;
                textDelete += diffs[pointer][1];
                pointer++;
                break;
              case DIFF_EQUAL:
                if (countDelete + countInsert > 1) {
                  if (countDelete !== 0 && countInsert !== 0) {
                    var commonlength = this.diffCommonPrefix(textInsert, textDelete);
                    if (commonlength !== 0) {
                      if (pointer - countDelete - countInsert > 0 && diffs[pointer - countDelete - countInsert - 1][0] === DIFF_EQUAL) {
                        diffs[pointer - countDelete - countInsert - 1][1] += textInsert.substring(0, commonlength);
                      } else {
                        diffs.splice(0, 0, [DIFF_EQUAL, textInsert.substring(0, commonlength)]);
                        pointer++;
                      }
                      textInsert = textInsert.substring(commonlength);
                      textDelete = textDelete.substring(commonlength);
                    }
                    commonlength = this.diffCommonSuffix(textInsert, textDelete);
                    if (commonlength !== 0) {
                      diffs[pointer][1] = textInsert.substring(textInsert.length - commonlength) + diffs[pointer][1];
                      textInsert = textInsert.substring(0, textInsert.length - commonlength);
                      textDelete = textDelete.substring(0, textDelete.length - commonlength);
                    }
                  }
                  if (countDelete === 0) {
                    diffs.splice(pointer - countInsert, countDelete + countInsert, [DIFF_INSERT, textInsert]);
                  } else if (countInsert === 0) {
                    diffs.splice(pointer - countDelete, countDelete + countInsert, [DIFF_DELETE, textDelete]);
                  } else {
                    diffs.splice(pointer - countDelete - countInsert, countDelete + countInsert, [DIFF_DELETE, textDelete], [DIFF_INSERT, textInsert]);
                  }
                  pointer = pointer - countDelete - countInsert + (countDelete ? 1 : 0) + (countInsert ? 1 : 0) + 1;
                } else if (pointer !== 0 && diffs[pointer - 1][0] === DIFF_EQUAL) {
                  diffs[pointer - 1][1] += diffs[pointer][1];
                  diffs.splice(pointer, 1);
                } else {
                  pointer++;
                }
                countInsert = 0;
                countDelete = 0;
                textDelete = "";
                textInsert = "";
                break;
            }
          }
          if (diffs[diffs.length - 1][1] === "") {
            diffs.pop();
          }
          var changes = false;
          pointer = 1;
          while (pointer < diffs.length - 1) {
            if (diffs[pointer - 1][0] === DIFF_EQUAL && diffs[pointer + 1][0] === DIFF_EQUAL) {
              var diffPointer = diffs[pointer][1];
              var position = diffPointer.substring(diffPointer.length - diffs[pointer - 1][1].length);
              if (position === diffs[pointer - 1][1]) {
                diffs[pointer][1] = diffs[pointer - 1][1] + diffs[pointer][1].substring(0, diffs[pointer][1].length - diffs[pointer - 1][1].length);
                diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
                diffs.splice(pointer - 1, 1);
                changes = true;
              } else if (diffPointer.substring(0, diffs[pointer + 1][1].length) === diffs[pointer + 1][1]) {
                diffs[pointer - 1][1] += diffs[pointer + 1][1];
                diffs[pointer][1] = diffs[pointer][1].substring(diffs[pointer + 1][1].length) + diffs[pointer + 1][1];
                diffs.splice(pointer + 1, 1);
                changes = true;
              }
            }
            pointer++;
          }
          if (changes) {
            this.diffCleanupMerge(diffs);
          }
        };
        function diff2(o, n) {
          var diff3, output, text;
          diff3 = new DiffMatchPatch();
          output = diff3.DiffMain(o, n);
          diff3.diffCleanupEfficiency(output);
          text = diff3.diffPrettyHtml(output);
          return text;
        }
        __name(diff2, "diff");
        var QUnit2 = {};
        config2.currentModule.suiteReport = runSuite;
        config2.pq = new ProcessingQueue(test2);
        var globalStartCalled = false;
        var runStarted = false;
        QUnit2.isLocal = window$1 && window$1.location && window$1.location.protocol === "file:";
        QUnit2.version = "2.25.0";
        extend2(QUnit2, {
          config: config2,
          diff: diff2,
          dump: dump2,
          equiv: equiv2,
          reporters,
          hooks,
          is: is2,
          objectType: objectType2,
          on: on2,
          onError: onWindowError,
          onUncaughtException,
          pushFailure: pushFailure2,
          assert: Assert.prototype,
          module: module$1,
          test: test2,
          // alias other test flavors for easy access
          todo: test2.todo,
          skip: test2.skip,
          only: test2.only,
          reset: /* @__PURE__ */ __name(function() {
            ProcessingQueue.finished = false;
            globalStartCalled = false;
            runStarted = false;
            config2.queue.length = 0;
            config2.modules.length = 0;
            config2.autostart = false;
            Object.assign(config2.stats, { total: 0, passed: 0, failed: 0, skipped: 0, todo: 0 });
            [
              "started",
              "updateRate",
              "filter",
              "depth",
              "current",
              "pageLoaded",
              "timeoutHandler",
              "timeout",
              "pollution"
            ].forEach((key) => delete config2[key]);
            const suiteReport = config2.currentModule.suiteReport;
            suiteReport.childSuites.length = 0;
            delete suiteReport._startTime;
            delete suiteReport._endTime;
            config2.modules.push(config2.currentModule);
          }, "reset"),
          start: /* @__PURE__ */ __name(function start2(count) {
            if (config2.current) {
              throw new Error("QUnit.start cannot be called inside a test context.");
            }
            var globalStartAlreadyCalled = globalStartCalled;
            globalStartCalled = true;
            if (runStarted) {
              throw new Error("Called start() while test already started running");
            }
            if (globalStartAlreadyCalled || count > 1) {
              throw new Error("Called start() outside of a test context too many times");
            }
            if (config2.autostart) {
              throw new Error("Called start() outside of a test context when QUnit.config.autostart was true");
            }
            if (!config2.pageLoaded) {
              config2.autostart = true;
              if (!document) {
                QUnit2.autostart();
              }
              return;
            }
            scheduleBegin();
          }, "start"),
          onUnhandledRejection: /* @__PURE__ */ __name(function onUnhandledRejection2(reason) {
            Logger.warn("QUnit.onUnhandledRejection is deprecated and will be removed in QUnit 3.0. Please use QUnit.onUncaughtException instead.");
            onUncaughtException(reason);
          }, "onUnhandledRejection"),
          extend: /* @__PURE__ */ __name(function extend$1() {
            Logger.warn("QUnit.extend is deprecated and will be removed in QUnit 3.0. Please use Object.assign instead.");
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            return extend2.apply(this, args);
          }, "extend$1"),
          load: /* @__PURE__ */ __name(function load2() {
            Logger.warn("QUnit.load is deprecated and will be removed in QUnit 3.0. https://qunitjs.com/api/QUnit/load/");
            QUnit2.autostart();
          }, "load"),
          /**
           * @internal
           */
          autostart: /* @__PURE__ */ __name(function autostart() {
            config2.pageLoaded = true;
            extend2(config2, {
              started: 0,
              updateRate: 1e3,
              autostart: true,
              filter: ""
            }, true);
            if (!runStarted) {
              config2.blocking = false;
              if (config2.autostart) {
                scheduleBegin();
              }
            }
          }, "autostart"),
          stack: /* @__PURE__ */ __name(function stack2(offset) {
            offset = (offset || 0) + 2;
            var source = sourceFromStacktrace(offset);
            return source;
          }, "stack")
        });
        registerLoggingCallbacks(QUnit2);
        function scheduleBegin() {
          runStarted = true;
          if (setTimeout$1) {
            setTimeout$1(function() {
              begin2();
            });
          } else {
            begin2();
          }
        }
        __name(scheduleBegin, "scheduleBegin");
        function unblockAndAdvanceQueue() {
          config2.blocking = false;
          config2.pq.advance();
        }
        __name(unblockAndAdvanceQueue, "unblockAndAdvanceQueue");
        function begin2() {
          if (config2.started) {
            unblockAndAdvanceQueue();
            return;
          }
          if (config2.reporters.console) {
            reporters.console.init(QUnit2);
          }
          if (config2.reporters.tap) {
            reporters.tap.init(QUnit2);
          }
          config2.started = performance.now();
          if (config2.modules[0].name === "" && config2.modules[0].tests.length === 0) {
            config2.modules.shift();
          }
          var modulesLog = [];
          for (var i = 0; i < config2.modules.length; i++) {
            if (config2.modules[i].name !== "") {
              modulesLog.push({
                name: config2.modules[i].name,
                moduleId: config2.modules[i].moduleId,
                // Added in QUnit 1.16.0 for internal use by html-reporter,
                // but no longer used since QUnit 2.7.0.
                // @deprecated Kept unofficially to be removed in QUnit 3.0.
                tests: config2.modules[i].tests
              });
            }
          }
          emit("runStart", runSuite.start(true));
          runLoggingCallbacks("begin", {
            totalTests: Test.count,
            modules: modulesLog
          }).then(unblockAndAdvanceQueue);
        }
        __name(begin2, "begin");
        exportQUnit(QUnit2);
        (function() {
          if (!window$1 || !document) {
            return;
          }
          var config3 = QUnit2.config;
          var hasOwn2 = Object.prototype.hasOwnProperty;
          function storeFixture() {
            if (hasOwn2.call(config3, "fixture")) {
              return;
            }
            var fixture = document.getElementById("qunit-fixture");
            if (fixture) {
              config3.fixture = fixture.cloneNode(true);
            }
          }
          __name(storeFixture, "storeFixture");
          QUnit2.begin(storeFixture);
          function resetFixture() {
            if (config3.fixture == null) {
              return;
            }
            var fixture = document.getElementById("qunit-fixture");
            var resetFixtureType = _typeof(config3.fixture);
            if (resetFixtureType === "string") {
              var newFixture = document.createElement("div");
              newFixture.setAttribute("id", "qunit-fixture");
              newFixture.innerHTML = config3.fixture;
              fixture.parentNode.replaceChild(newFixture, fixture);
            } else {
              var clonedFixture = config3.fixture.cloneNode(true);
              fixture.parentNode.replaceChild(clonedFixture, fixture);
            }
          }
          __name(resetFixture, "resetFixture");
          QUnit2.testStart(resetFixture);
        })();
        (function() {
          var location = typeof window$1 !== "undefined" && window$1.location;
          if (!location) {
            return;
          }
          var urlParams = getUrlParams();
          QUnit2.urlParams = urlParams;
          QUnit2.config.filter = urlParams.filter;
          if (/^[0-9]+$/.test(urlParams.maxDepth)) {
            QUnit2.config.maxDepth = QUnit2.dump.maxDepth = +urlParams.maxDepth;
          }
          QUnit2.config.module = urlParams.module;
          QUnit2.config.moduleId = [].concat(urlParams.moduleId || []);
          QUnit2.config.testId = [].concat(urlParams.testId || []);
          if (urlParams.seed === "true" || urlParams.seed === true) {
            QUnit2.config.seed = (Math.random().toString(36) + "0000000000").slice(2, 12);
          } else if (urlParams.seed) {
            QUnit2.config.seed = urlParams.seed;
          }
          QUnit2.config.urlConfig.push({
            id: "hidepassed",
            label: "Hide passed tests",
            tooltip: "Only show tests and assertions that fail. Stored as query-strings."
          }, {
            id: "noglobals",
            label: "Check for Globals",
            tooltip: "Enabling this will test if any test introduces new properties on the global object (`window` in Browsers). Stored as query-strings."
          }, {
            id: "notrycatch",
            label: "No try-catch",
            tooltip: "Enabling this will run tests outside of a try-catch block. Makes debugging exceptions in IE reasonable. Stored as query-strings."
          });
          QUnit2.begin(function() {
            var urlConfig = QUnit2.config.urlConfig;
            for (var i = 0; i < urlConfig.length; i++) {
              var option = QUnit2.config.urlConfig[i];
              if (typeof option !== "string") {
                option = option.id;
              }
              if (QUnit2.config[option] === void 0) {
                QUnit2.config[option] = urlParams[option];
              }
            }
          });
          function getUrlParams() {
            var urlParams2 = /* @__PURE__ */ Object.create(null);
            var params = location.search.slice(1).split("&");
            var length = params.length;
            for (var i = 0; i < length; i++) {
              if (params[i]) {
                var param = params[i].split("=");
                var name = decodeQueryParam(param[0]);
                var value = param.length === 1 || decodeQueryParam(param.slice(1).join("="));
                if (name in urlParams2) {
                  urlParams2[name] = [].concat(urlParams2[name], value);
                } else {
                  urlParams2[name] = value;
                }
              }
            }
            return urlParams2;
          }
          __name(getUrlParams, "getUrlParams");
          function decodeQueryParam(param) {
            return decodeURIComponent(param.replace(/\+/g, "%20"));
          }
          __name(decodeQueryParam, "decodeQueryParam");
        })();
        var fuzzysort$1 = { exports: {} };
        (function(module3) {
          (function(root, UMD) {
            if (module3.exports) module3.exports = UMD();
            else root.fuzzysort = UMD();
          })(commonjsGlobal, /* @__PURE__ */ __name(function UMD() {
            function fuzzysortNew(instanceOptions) {
              var fuzzysort2 = {
                single: /* @__PURE__ */ __name(function single(search, target, options) {
                  if (search == "farzher") return {
                    target: "farzher was here (^-^*)/",
                    score: 0,
                    indexes: [0, 1, 2, 3, 4, 5, 6]
                  };
                  if (!search) return null;
                  if (!isObj(search)) search = fuzzysort2.getPreparedSearch(search);
                  if (!target) return null;
                  if (!isObj(target)) target = fuzzysort2.getPrepared(target);
                  var allowTypo = options && options.allowTypo !== void 0 ? options.allowTypo : instanceOptions && instanceOptions.allowTypo !== void 0 ? instanceOptions.allowTypo : true;
                  var algorithm = allowTypo ? fuzzysort2.algorithm : fuzzysort2.algorithmNoTypo;
                  return algorithm(search, target, search[0]);
                }, "single"),
                go: /* @__PURE__ */ __name(function go(search, targets, options) {
                  if (search == "farzher") return [{
                    target: "farzher was here (^-^*)/",
                    score: 0,
                    indexes: [0, 1, 2, 3, 4, 5, 6],
                    obj: targets ? targets[0] : null
                  }];
                  if (!search) return noResults;
                  search = fuzzysort2.prepareSearch(search);
                  var searchLowerCode = search[0];
                  var threshold = options && options.threshold || instanceOptions && instanceOptions.threshold || -9007199254740991;
                  var limit = options && options.limit || instanceOptions && instanceOptions.limit || 9007199254740991;
                  var allowTypo = options && options.allowTypo !== void 0 ? options.allowTypo : instanceOptions && instanceOptions.allowTypo !== void 0 ? instanceOptions.allowTypo : true;
                  var algorithm = allowTypo ? fuzzysort2.algorithm : fuzzysort2.algorithmNoTypo;
                  var resultsLen = 0;
                  var limitedCount = 0;
                  var targetsLen = targets.length;
                  if (options && options.keys) {
                    var scoreFn = options.scoreFn || defaultScoreFn;
                    var keys = options.keys;
                    var keysLen = keys.length;
                    for (var i = targetsLen - 1; i >= 0; --i) {
                      var obj = targets[i];
                      var objResults = new Array(keysLen);
                      for (var keyI = keysLen - 1; keyI >= 0; --keyI) {
                        var key = keys[keyI];
                        var target = getValue(obj, key);
                        if (!target) {
                          objResults[keyI] = null;
                          continue;
                        }
                        if (!isObj(target)) target = fuzzysort2.getPrepared(target);
                        objResults[keyI] = algorithm(search, target, searchLowerCode);
                      }
                      objResults.obj = obj;
                      var score = scoreFn(objResults);
                      if (score === null) continue;
                      if (score < threshold) continue;
                      objResults.score = score;
                      if (resultsLen < limit) {
                        q.add(objResults);
                        ++resultsLen;
                      } else {
                        ++limitedCount;
                        if (score > q.peek().score) q.replaceTop(objResults);
                      }
                    }
                  } else if (options && options.key) {
                    var key = options.key;
                    for (var i = targetsLen - 1; i >= 0; --i) {
                      var obj = targets[i];
                      var target = getValue(obj, key);
                      if (!target) continue;
                      if (!isObj(target)) target = fuzzysort2.getPrepared(target);
                      var result = algorithm(search, target, searchLowerCode);
                      if (result === null) continue;
                      if (result.score < threshold) continue;
                      result = {
                        target: result.target,
                        _targetLowerCodes: null,
                        _nextBeginningIndexes: null,
                        score: result.score,
                        indexes: result.indexes,
                        obj
                      };
                      if (resultsLen < limit) {
                        q.add(result);
                        ++resultsLen;
                      } else {
                        ++limitedCount;
                        if (result.score > q.peek().score) q.replaceTop(result);
                      }
                    }
                  } else {
                    for (var i = targetsLen - 1; i >= 0; --i) {
                      var target = targets[i];
                      if (!target) continue;
                      if (!isObj(target)) target = fuzzysort2.getPrepared(target);
                      var result = algorithm(search, target, searchLowerCode);
                      if (result === null) continue;
                      if (result.score < threshold) continue;
                      if (resultsLen < limit) {
                        q.add(result);
                        ++resultsLen;
                      } else {
                        ++limitedCount;
                        if (result.score > q.peek().score) q.replaceTop(result);
                      }
                    }
                  }
                  if (resultsLen === 0) return noResults;
                  var results = new Array(resultsLen);
                  for (var i = resultsLen - 1; i >= 0; --i) results[i] = q.poll();
                  results.total = resultsLen + limitedCount;
                  return results;
                }, "go"),
                goAsync: /* @__PURE__ */ __name(function goAsync(search, targets, options) {
                  var canceled = false;
                  var p = new Promise(function(resolve, reject) {
                    if (search == "farzher") return resolve([{
                      target: "farzher was here (^-^*)/",
                      score: 0,
                      indexes: [0, 1, 2, 3, 4, 5, 6],
                      obj: targets ? targets[0] : null
                    }]);
                    if (!search) return resolve(noResults);
                    search = fuzzysort2.prepareSearch(search);
                    var searchLowerCode = search[0];
                    var q2 = fastpriorityqueue();
                    var iCurrent = targets.length - 1;
                    var threshold = options && options.threshold || instanceOptions && instanceOptions.threshold || -9007199254740991;
                    var limit = options && options.limit || instanceOptions && instanceOptions.limit || 9007199254740991;
                    var allowTypo = options && options.allowTypo !== void 0 ? options.allowTypo : instanceOptions && instanceOptions.allowTypo !== void 0 ? instanceOptions.allowTypo : true;
                    var algorithm = allowTypo ? fuzzysort2.algorithm : fuzzysort2.algorithmNoTypo;
                    var resultsLen = 0;
                    var limitedCount = 0;
                    function step() {
                      if (canceled) return reject("canceled");
                      var startMs = Date.now();
                      if (options && options.keys) {
                        var scoreFn = options.scoreFn || defaultScoreFn;
                        var keys = options.keys;
                        var keysLen = keys.length;
                        for (; iCurrent >= 0; --iCurrent) {
                          if (iCurrent % 1e3 === 0) {
                            if (Date.now() - startMs >= 10) {
                              isNode ? setImmediate(step) : setTimeout(step);
                              return;
                            }
                          }
                          var obj = targets[iCurrent];
                          var objResults = new Array(keysLen);
                          for (var keyI = keysLen - 1; keyI >= 0; --keyI) {
                            var key = keys[keyI];
                            var target = getValue(obj, key);
                            if (!target) {
                              objResults[keyI] = null;
                              continue;
                            }
                            if (!isObj(target)) target = fuzzysort2.getPrepared(target);
                            objResults[keyI] = algorithm(search, target, searchLowerCode);
                          }
                          objResults.obj = obj;
                          var score = scoreFn(objResults);
                          if (score === null) continue;
                          if (score < threshold) continue;
                          objResults.score = score;
                          if (resultsLen < limit) {
                            q2.add(objResults);
                            ++resultsLen;
                          } else {
                            ++limitedCount;
                            if (score > q2.peek().score) q2.replaceTop(objResults);
                          }
                        }
                      } else if (options && options.key) {
                        var key = options.key;
                        for (; iCurrent >= 0; --iCurrent) {
                          if (iCurrent % 1e3 === 0) {
                            if (Date.now() - startMs >= 10) {
                              isNode ? setImmediate(step) : setTimeout(step);
                              return;
                            }
                          }
                          var obj = targets[iCurrent];
                          var target = getValue(obj, key);
                          if (!target) continue;
                          if (!isObj(target)) target = fuzzysort2.getPrepared(target);
                          var result = algorithm(search, target, searchLowerCode);
                          if (result === null) continue;
                          if (result.score < threshold) continue;
                          result = {
                            target: result.target,
                            _targetLowerCodes: null,
                            _nextBeginningIndexes: null,
                            score: result.score,
                            indexes: result.indexes,
                            obj
                          };
                          if (resultsLen < limit) {
                            q2.add(result);
                            ++resultsLen;
                          } else {
                            ++limitedCount;
                            if (result.score > q2.peek().score) q2.replaceTop(result);
                          }
                        }
                      } else {
                        for (; iCurrent >= 0; --iCurrent) {
                          if (iCurrent % 1e3 === 0) {
                            if (Date.now() - startMs >= 10) {
                              isNode ? setImmediate(step) : setTimeout(step);
                              return;
                            }
                          }
                          var target = targets[iCurrent];
                          if (!target) continue;
                          if (!isObj(target)) target = fuzzysort2.getPrepared(target);
                          var result = algorithm(search, target, searchLowerCode);
                          if (result === null) continue;
                          if (result.score < threshold) continue;
                          if (resultsLen < limit) {
                            q2.add(result);
                            ++resultsLen;
                          } else {
                            ++limitedCount;
                            if (result.score > q2.peek().score) q2.replaceTop(result);
                          }
                        }
                      }
                      if (resultsLen === 0) return resolve(noResults);
                      var results = new Array(resultsLen);
                      for (var i = resultsLen - 1; i >= 0; --i) results[i] = q2.poll();
                      results.total = resultsLen + limitedCount;
                      resolve(results);
                    }
                    __name(step, "step");
                    isNode ? setImmediate(step) : step();
                  });
                  p.cancel = function() {
                    canceled = true;
                  };
                  return p;
                }, "goAsync"),
                highlight: /* @__PURE__ */ __name(function highlight(result, hOpen, hClose) {
                  if (typeof hOpen == "function") return fuzzysort2.highlightCallback(result, hOpen);
                  if (result === null) return null;
                  if (hOpen === void 0) hOpen = "<b>";
                  if (hClose === void 0) hClose = "</b>";
                  var highlighted = "";
                  var matchesIndex = 0;
                  var opened = false;
                  var target = result.target;
                  var targetLen = target.length;
                  var matchesBest = result.indexes;
                  for (var i = 0; i < targetLen; ++i) {
                    var char = target[i];
                    if (matchesBest[matchesIndex] === i) {
                      ++matchesIndex;
                      if (!opened) {
                        opened = true;
                        highlighted += hOpen;
                      }
                      if (matchesIndex === matchesBest.length) {
                        highlighted += char + hClose + target.substr(i + 1);
                        break;
                      }
                    } else {
                      if (opened) {
                        opened = false;
                        highlighted += hClose;
                      }
                    }
                    highlighted += char;
                  }
                  return highlighted;
                }, "highlight"),
                highlightCallback: /* @__PURE__ */ __name(function highlightCallback(result, cb) {
                  if (result === null) return null;
                  var target = result.target;
                  var targetLen = target.length;
                  var indexes = result.indexes;
                  var highlighted = "";
                  var matchI = 0;
                  var indexesI = 0;
                  var opened = false;
                  var result = [];
                  for (var i = 0; i < targetLen; ++i) {
                    var char = target[i];
                    if (indexes[indexesI] === i) {
                      ++indexesI;
                      if (!opened) {
                        opened = true;
                        result.push(highlighted);
                        highlighted = "";
                      }
                      if (indexesI === indexes.length) {
                        highlighted += char;
                        result.push(cb(highlighted, matchI++));
                        highlighted = "";
                        result.push(target.substr(i + 1));
                        break;
                      }
                    } else {
                      if (opened) {
                        opened = false;
                        result.push(cb(highlighted, matchI++));
                        highlighted = "";
                      }
                    }
                    highlighted += char;
                  }
                  return result;
                }, "highlightCallback"),
                prepare: /* @__PURE__ */ __name(function prepare(target) {
                  if (!target) return {
                    target: "",
                    _targetLowerCodes: [
                      0
                      /*this 0 doesn't make sense. here because an empty array causes the algorithm to deoptimize and run 50% slower!*/
                    ],
                    _nextBeginningIndexes: null,
                    score: null,
                    indexes: null,
                    obj: null
                  };
                  return {
                    target,
                    _targetLowerCodes: fuzzysort2.prepareLowerCodes(target),
                    _nextBeginningIndexes: null,
                    score: null,
                    indexes: null,
                    obj: null
                  };
                }, "prepare"),
                prepareSlow: /* @__PURE__ */ __name(function prepareSlow(target) {
                  if (!target) return {
                    target: "",
                    _targetLowerCodes: [
                      0
                      /*this 0 doesn't make sense. here because an empty array causes the algorithm to deoptimize and run 50% slower!*/
                    ],
                    _nextBeginningIndexes: null,
                    score: null,
                    indexes: null,
                    obj: null
                  };
                  return {
                    target,
                    _targetLowerCodes: fuzzysort2.prepareLowerCodes(target),
                    _nextBeginningIndexes: fuzzysort2.prepareNextBeginningIndexes(target),
                    score: null,
                    indexes: null,
                    obj: null
                  };
                }, "prepareSlow"),
                prepareSearch: /* @__PURE__ */ __name(function prepareSearch(search) {
                  if (!search) search = "";
                  return fuzzysort2.prepareLowerCodes(search);
                }, "prepareSearch"),
                // Below this point is only internal code
                // Below this point is only internal code
                // Below this point is only internal code
                // Below this point is only internal code
                getPrepared: /* @__PURE__ */ __name(function getPrepared(target) {
                  if (target.length > 999) return fuzzysort2.prepare(target);
                  var targetPrepared = preparedCache.get(target);
                  if (targetPrepared !== void 0) return targetPrepared;
                  targetPrepared = fuzzysort2.prepare(target);
                  preparedCache.set(target, targetPrepared);
                  return targetPrepared;
                }, "getPrepared"),
                getPreparedSearch: /* @__PURE__ */ __name(function getPreparedSearch(search) {
                  if (search.length > 999) return fuzzysort2.prepareSearch(search);
                  var searchPrepared = preparedSearchCache.get(search);
                  if (searchPrepared !== void 0) return searchPrepared;
                  searchPrepared = fuzzysort2.prepareSearch(search);
                  preparedSearchCache.set(search, searchPrepared);
                  return searchPrepared;
                }, "getPreparedSearch"),
                algorithm: /* @__PURE__ */ __name(function algorithm(searchLowerCodes, prepared, searchLowerCode) {
                  var targetLowerCodes = prepared._targetLowerCodes;
                  var searchLen = searchLowerCodes.length;
                  var targetLen = targetLowerCodes.length;
                  var searchI = 0;
                  var targetI = 0;
                  var typoSimpleI = 0;
                  var matchesSimpleLen = 0;
                  for (; ; ) {
                    var isMatch = searchLowerCode === targetLowerCodes[targetI];
                    if (isMatch) {
                      matchesSimple[matchesSimpleLen++] = targetI;
                      ++searchI;
                      if (searchI === searchLen) break;
                      searchLowerCode = searchLowerCodes[typoSimpleI === 0 ? searchI : typoSimpleI === searchI ? searchI + 1 : typoSimpleI === searchI - 1 ? searchI - 1 : searchI];
                    }
                    ++targetI;
                    if (targetI >= targetLen) {
                      for (; ; ) {
                        if (searchI <= 1) return null;
                        if (typoSimpleI === 0) {
                          --searchI;
                          var searchLowerCodeNew = searchLowerCodes[searchI];
                          if (searchLowerCode === searchLowerCodeNew) continue;
                          typoSimpleI = searchI;
                        } else {
                          if (typoSimpleI === 1) return null;
                          --typoSimpleI;
                          searchI = typoSimpleI;
                          searchLowerCode = searchLowerCodes[searchI + 1];
                          var searchLowerCodeNew = searchLowerCodes[searchI];
                          if (searchLowerCode === searchLowerCodeNew) continue;
                        }
                        matchesSimpleLen = searchI;
                        targetI = matchesSimple[matchesSimpleLen - 1] + 1;
                        break;
                      }
                    }
                  }
                  var searchI = 0;
                  var typoStrictI = 0;
                  var successStrict = false;
                  var matchesStrictLen = 0;
                  var nextBeginningIndexes = prepared._nextBeginningIndexes;
                  if (nextBeginningIndexes === null) nextBeginningIndexes = prepared._nextBeginningIndexes = fuzzysort2.prepareNextBeginningIndexes(prepared.target);
                  var firstPossibleI = targetI = matchesSimple[0] === 0 ? 0 : nextBeginningIndexes[matchesSimple[0] - 1];
                  if (targetI !== targetLen) for (; ; ) {
                    if (targetI >= targetLen) {
                      if (searchI <= 0) {
                        ++typoStrictI;
                        if (typoStrictI > searchLen - 2) break;
                        if (searchLowerCodes[typoStrictI] === searchLowerCodes[typoStrictI + 1]) continue;
                        targetI = firstPossibleI;
                        continue;
                      }
                      --searchI;
                      var lastMatch = matchesStrict[--matchesStrictLen];
                      targetI = nextBeginningIndexes[lastMatch];
                    } else {
                      var isMatch = searchLowerCodes[typoStrictI === 0 ? searchI : typoStrictI === searchI ? searchI + 1 : typoStrictI === searchI - 1 ? searchI - 1 : searchI] === targetLowerCodes[targetI];
                      if (isMatch) {
                        matchesStrict[matchesStrictLen++] = targetI;
                        ++searchI;
                        if (searchI === searchLen) {
                          successStrict = true;
                          break;
                        }
                        ++targetI;
                      } else {
                        targetI = nextBeginningIndexes[targetI];
                      }
                    }
                  }
                  {
                    if (successStrict) {
                      var matchesBest = matchesStrict;
                      var matchesBestLen = matchesStrictLen;
                    } else {
                      var matchesBest = matchesSimple;
                      var matchesBestLen = matchesSimpleLen;
                    }
                    var score = 0;
                    var lastTargetI = -1;
                    for (var i = 0; i < searchLen; ++i) {
                      var targetI = matchesBest[i];
                      if (lastTargetI !== targetI - 1) score -= targetI;
                      lastTargetI = targetI;
                    }
                    if (!successStrict) {
                      score *= 1e3;
                      if (typoSimpleI !== 0) score += -20;
                    } else {
                      if (typoStrictI !== 0) score += -20;
                    }
                    score -= targetLen - searchLen;
                    prepared.score = score;
                    prepared.indexes = new Array(matchesBestLen);
                    for (var i = matchesBestLen - 1; i >= 0; --i) prepared.indexes[i] = matchesBest[i];
                    return prepared;
                  }
                }, "algorithm"),
                algorithmNoTypo: /* @__PURE__ */ __name(function algorithmNoTypo(searchLowerCodes, prepared, searchLowerCode) {
                  var targetLowerCodes = prepared._targetLowerCodes;
                  var searchLen = searchLowerCodes.length;
                  var targetLen = targetLowerCodes.length;
                  var searchI = 0;
                  var targetI = 0;
                  var matchesSimpleLen = 0;
                  for (; ; ) {
                    var isMatch = searchLowerCode === targetLowerCodes[targetI];
                    if (isMatch) {
                      matchesSimple[matchesSimpleLen++] = targetI;
                      ++searchI;
                      if (searchI === searchLen) break;
                      searchLowerCode = searchLowerCodes[searchI];
                    }
                    ++targetI;
                    if (targetI >= targetLen) return null;
                  }
                  var searchI = 0;
                  var successStrict = false;
                  var matchesStrictLen = 0;
                  var nextBeginningIndexes = prepared._nextBeginningIndexes;
                  if (nextBeginningIndexes === null) nextBeginningIndexes = prepared._nextBeginningIndexes = fuzzysort2.prepareNextBeginningIndexes(prepared.target);
                  targetI = matchesSimple[0] === 0 ? 0 : nextBeginningIndexes[matchesSimple[0] - 1];
                  if (targetI !== targetLen) for (; ; ) {
                    if (targetI >= targetLen) {
                      if (searchI <= 0) break;
                      --searchI;
                      var lastMatch = matchesStrict[--matchesStrictLen];
                      targetI = nextBeginningIndexes[lastMatch];
                    } else {
                      var isMatch = searchLowerCodes[searchI] === targetLowerCodes[targetI];
                      if (isMatch) {
                        matchesStrict[matchesStrictLen++] = targetI;
                        ++searchI;
                        if (searchI === searchLen) {
                          successStrict = true;
                          break;
                        }
                        ++targetI;
                      } else {
                        targetI = nextBeginningIndexes[targetI];
                      }
                    }
                  }
                  {
                    if (successStrict) {
                      var matchesBest = matchesStrict;
                      var matchesBestLen = matchesStrictLen;
                    } else {
                      var matchesBest = matchesSimple;
                      var matchesBestLen = matchesSimpleLen;
                    }
                    var score = 0;
                    var lastTargetI = -1;
                    for (var i = 0; i < searchLen; ++i) {
                      var targetI = matchesBest[i];
                      if (lastTargetI !== targetI - 1) score -= targetI;
                      lastTargetI = targetI;
                    }
                    if (!successStrict) score *= 1e3;
                    score -= targetLen - searchLen;
                    prepared.score = score;
                    prepared.indexes = new Array(matchesBestLen);
                    for (var i = matchesBestLen - 1; i >= 0; --i) prepared.indexes[i] = matchesBest[i];
                    return prepared;
                  }
                }, "algorithmNoTypo"),
                prepareLowerCodes: /* @__PURE__ */ __name(function prepareLowerCodes(str) {
                  var strLen = str.length;
                  var lowerCodes = [];
                  var lower = str.toLowerCase();
                  for (var i = 0; i < strLen; ++i) lowerCodes[i] = lower.charCodeAt(i);
                  return lowerCodes;
                }, "prepareLowerCodes"),
                prepareBeginningIndexes: /* @__PURE__ */ __name(function prepareBeginningIndexes(target) {
                  var targetLen = target.length;
                  var beginningIndexes = [];
                  var beginningIndexesLen = 0;
                  var wasUpper = false;
                  var wasAlphanum = false;
                  for (var i = 0; i < targetLen; ++i) {
                    var targetCode = target.charCodeAt(i);
                    var isUpper = targetCode >= 65 && targetCode <= 90;
                    var isAlphanum = isUpper || targetCode >= 97 && targetCode <= 122 || targetCode >= 48 && targetCode <= 57;
                    var isBeginning = isUpper && !wasUpper || !wasAlphanum || !isAlphanum;
                    wasUpper = isUpper;
                    wasAlphanum = isAlphanum;
                    if (isBeginning) beginningIndexes[beginningIndexesLen++] = i;
                  }
                  return beginningIndexes;
                }, "prepareBeginningIndexes"),
                prepareNextBeginningIndexes: /* @__PURE__ */ __name(function prepareNextBeginningIndexes(target) {
                  var targetLen = target.length;
                  var beginningIndexes = fuzzysort2.prepareBeginningIndexes(target);
                  var nextBeginningIndexes = [];
                  var lastIsBeginning = beginningIndexes[0];
                  var lastIsBeginningI = 0;
                  for (var i = 0; i < targetLen; ++i) {
                    if (lastIsBeginning > i) {
                      nextBeginningIndexes[i] = lastIsBeginning;
                    } else {
                      lastIsBeginning = beginningIndexes[++lastIsBeginningI];
                      nextBeginningIndexes[i] = lastIsBeginning === void 0 ? targetLen : lastIsBeginning;
                    }
                  }
                  return nextBeginningIndexes;
                }, "prepareNextBeginningIndexes"),
                cleanup,
                new: fuzzysortNew
              };
              return fuzzysort2;
            }
            __name(fuzzysortNew, "fuzzysortNew");
            var isNode = typeof commonjsRequire !== "undefined" && typeof window === "undefined";
            var MyMap = typeof Map === "function" ? Map : function() {
              var s = /* @__PURE__ */ Object.create(null);
              this.get = function(k) {
                return s[k];
              };
              this.set = function(k, val) {
                s[k] = val;
                return this;
              };
              this.clear = function() {
                s = /* @__PURE__ */ Object.create(null);
              };
            };
            var preparedCache = new MyMap();
            var preparedSearchCache = new MyMap();
            var noResults = [];
            noResults.total = 0;
            var matchesSimple = [];
            var matchesStrict = [];
            function cleanup() {
              preparedCache.clear();
              preparedSearchCache.clear();
              matchesSimple = [];
              matchesStrict = [];
            }
            __name(cleanup, "cleanup");
            function defaultScoreFn(a) {
              var max = -9007199254740991;
              for (var i = a.length - 1; i >= 0; --i) {
                var result = a[i];
                if (result === null) continue;
                var score = result.score;
                if (score > max) max = score;
              }
              if (max === -9007199254740991) return null;
              return max;
            }
            __name(defaultScoreFn, "defaultScoreFn");
            function getValue(obj, prop) {
              var tmp = obj[prop];
              if (tmp !== void 0) return tmp;
              var segs = prop;
              if (!Array.isArray(prop)) segs = prop.split(".");
              var len = segs.length;
              var i = -1;
              while (obj && ++i < len) obj = obj[segs[i]];
              return obj;
            }
            __name(getValue, "getValue");
            function isObj(x) {
              return _typeof(x) === "object";
            }
            __name(isObj, "isObj");
            var fastpriorityqueue = /* @__PURE__ */ __name(function fastpriorityqueue2() {
              var r = [], o = 0, e = {};
              function n() {
                for (var e2 = 0, n2 = r[e2], c = 1; c < o; ) {
                  var f = c + 1;
                  e2 = c, f < o && r[f].score < r[c].score && (e2 = f), r[e2 - 1 >> 1] = r[e2], c = 1 + (e2 << 1);
                }
                for (var a = e2 - 1 >> 1; e2 > 0 && n2.score < r[a].score; a = (e2 = a) - 1 >> 1) r[e2] = r[a];
                r[e2] = n2;
              }
              __name(n, "n");
              return e.add = function(e2) {
                var n2 = o;
                r[o++] = e2;
                for (var c = n2 - 1 >> 1; n2 > 0 && e2.score < r[c].score; c = (n2 = c) - 1 >> 1) r[n2] = r[c];
                r[n2] = e2;
              }, e.poll = function() {
                if (0 !== o) {
                  var e2 = r[0];
                  return r[0] = r[--o], n(), e2;
                }
              }, e.peek = function(e2) {
                if (0 !== o) return r[0];
              }, e.replaceTop = function(o2) {
                r[0] = o2, n();
              }, e;
            }, "fastpriorityqueue");
            var q = fastpriorityqueue();
            return fuzzysortNew();
          }, "UMD"));
        })(fuzzysort$1);
        var fuzzysort = fuzzysort$1.exports;
        var stats = {
          failedTests: [],
          defined: 0,
          completed: 0
        };
        (function() {
          if (!window$1 || !document) {
            return;
          }
          QUnit2.reporters.perf.init(QUnit2);
          var config3 = QUnit2.config;
          var hiddenTests = [];
          var collapseNext = false;
          var hasOwn2 = Object.prototype.hasOwnProperty;
          var unfilteredUrl = setUrl({
            filter: void 0,
            module: void 0,
            moduleId: void 0,
            testId: void 0
          });
          var dropdownData = null;
          function trim(string) {
            if (typeof string.trim === "function") {
              return string.trim();
            } else {
              return string.replace(/^\s+|\s+$/g, "");
            }
          }
          __name(trim, "trim");
          function addEvent(elem, type, fn) {
            elem.addEventListener(type, fn, false);
          }
          __name(addEvent, "addEvent");
          function removeEvent(elem, type, fn) {
            elem.removeEventListener(type, fn, false);
          }
          __name(removeEvent, "removeEvent");
          function addEvents(elems, type, fn) {
            var i = elems.length;
            while (i--) {
              addEvent(elems[i], type, fn);
            }
          }
          __name(addEvents, "addEvents");
          function hasClass(elem, name) {
            return (" " + elem.className + " ").indexOf(" " + name + " ") >= 0;
          }
          __name(hasClass, "hasClass");
          function addClass(elem, name) {
            if (!hasClass(elem, name)) {
              elem.className += (elem.className ? " " : "") + name;
            }
          }
          __name(addClass, "addClass");
          function toggleClass(elem, name, force) {
            if (force || typeof force === "undefined" && !hasClass(elem, name)) {
              addClass(elem, name);
            } else {
              removeClass(elem, name);
            }
          }
          __name(toggleClass, "toggleClass");
          function removeClass(elem, name) {
            var set = " " + elem.className + " ";
            while (set.indexOf(" " + name + " ") >= 0) {
              set = set.replace(" " + name + " ", " ");
            }
            elem.className = trim(set);
          }
          __name(removeClass, "removeClass");
          function id(name) {
            return document.getElementById && document.getElementById(name);
          }
          __name(id, "id");
          function abortTests() {
            var abortButton = id("qunit-abort-tests-button");
            if (abortButton) {
              abortButton.disabled = true;
              abortButton.innerHTML = "Aborting...";
            }
            QUnit2.config.queue.length = 0;
            return false;
          }
          __name(abortTests, "abortTests");
          function interceptNavigation(ev) {
            var filterInputElem = id("qunit-filter-input");
            filterInputElem.value = trim(filterInputElem.value);
            applyUrlParams();
            if (ev && ev.preventDefault) {
              ev.preventDefault();
            }
            return false;
          }
          __name(interceptNavigation, "interceptNavigation");
          function getUrlConfigHtml() {
            var selection = false;
            var urlConfig = config3.urlConfig;
            var urlConfigHtml = "";
            for (var i = 0; i < urlConfig.length; i++) {
              var val = config3.urlConfig[i];
              if (typeof val === "string") {
                val = {
                  id: val,
                  label: val
                };
              }
              var escaped = escapeText(val.id);
              var escapedTooltip = escapeText(val.tooltip);
              if (!val.value || typeof val.value === "string") {
                urlConfigHtml += "<label for='qunit-urlconfig-" + escaped + "' title='" + escapedTooltip + "'><input id='qunit-urlconfig-" + escaped + "' name='" + escaped + "' type='checkbox'" + (val.value ? " value='" + escapeText(val.value) + "'" : "") + (config3[val.id] ? " checked='checked'" : "") + " title='" + escapedTooltip + "' />" + escapeText(val.label) + "</label>";
              } else {
                urlConfigHtml += "<label for='qunit-urlconfig-" + escaped + "' title='" + escapedTooltip + "'>" + escapeText(val.label) + ": <select id='qunit-urlconfig-" + escaped + "' name='" + escaped + "' title='" + escapedTooltip + "'><option></option>";
                if (Array.isArray(val.value)) {
                  for (var j = 0; j < val.value.length; j++) {
                    escaped = escapeText(val.value[j]);
                    urlConfigHtml += "<option value='" + escaped + "'" + (config3[val.id] === val.value[j] ? (selection = true) && " selected='selected'" : "") + ">" + escaped + "</option>";
                  }
                } else {
                  for (var _j in val.value) {
                    if (hasOwn2.call(val.value, _j)) {
                      urlConfigHtml += "<option value='" + escapeText(_j) + "'" + (config3[val.id] === _j ? (selection = true) && " selected='selected'" : "") + ">" + escapeText(val.value[_j]) + "</option>";
                    }
                  }
                }
                if (config3[val.id] && !selection) {
                  escaped = escapeText(config3[val.id]);
                  urlConfigHtml += "<option value='" + escaped + "' selected='selected' disabled='disabled'>" + escaped + "</option>";
                }
                urlConfigHtml += "</select></label>";
              }
            }
            return urlConfigHtml;
          }
          __name(getUrlConfigHtml, "getUrlConfigHtml");
          function toolbarChanged() {
            var field = this;
            var params = {};
            var value;
            if ("selectedIndex" in field) {
              value = field.options[field.selectedIndex].value || void 0;
            } else {
              value = field.checked ? field.defaultValue || true : void 0;
            }
            params[field.name] = value;
            var updatedUrl = setUrl(params);
            if (field.name === "hidepassed" && "replaceState" in window$1.history) {
              QUnit2.urlParams[field.name] = value;
              config3[field.name] = value || false;
              var tests = id("qunit-tests");
              if (tests) {
                if (field.checked) {
                  var length = tests.children.length;
                  var children = tests.children;
                  for (var i = 0; i < length; i++) {
                    var test3 = children[i];
                    var className = test3 ? test3.className : "";
                    var classNameHasPass = className.indexOf("pass") > -1;
                    var classNameHasSkipped = className.indexOf("skipped") > -1;
                    if (classNameHasPass || classNameHasSkipped) {
                      hiddenTests.push(test3);
                    }
                  }
                  for (var _i = 0; _i < hiddenTests.length; _i++) {
                    tests.removeChild(hiddenTests[_i]);
                  }
                } else {
                  for (var _i2 = 0; _i2 < hiddenTests.length; _i2++) {
                    tests.appendChild(hiddenTests[_i2]);
                  }
                  hiddenTests.length = 0;
                }
              }
              window$1.history.replaceState(null, "", updatedUrl);
            } else {
              window$1.location = updatedUrl;
            }
          }
          __name(toolbarChanged, "toolbarChanged");
          function setUrl(params) {
            var querystring = "?";
            var location = window$1.location;
            params = extend2(extend2({}, QUnit2.urlParams), params);
            for (var key in params) {
              if (hasOwn2.call(params, key) && params[key] !== void 0) {
                var arrValue = [].concat(params[key]);
                for (var i = 0; i < arrValue.length; i++) {
                  querystring += encodeURIComponent(key);
                  if (arrValue[i] !== true) {
                    querystring += "=" + encodeURIComponent(arrValue[i]);
                  }
                  querystring += "&";
                }
              }
            }
            return location.protocol + "//" + location.host + location.pathname + querystring.slice(0, -1);
          }
          __name(setUrl, "setUrl");
          function applyUrlParams() {
            var filter = id("qunit-filter-input").value;
            window$1.location = setUrl({
              filter: filter === "" ? void 0 : filter,
              moduleId: _toConsumableArray(dropdownData.selectedMap.keys()),
              // Remove module and testId filter
              module: void 0,
              testId: void 0
            });
          }
          __name(applyUrlParams, "applyUrlParams");
          function toolbarUrlConfigContainer() {
            var urlConfigContainer = document.createElement("span");
            urlConfigContainer.innerHTML = getUrlConfigHtml();
            addClass(urlConfigContainer, "qunit-url-config");
            addEvents(urlConfigContainer.getElementsByTagName("input"), "change", toolbarChanged);
            addEvents(urlConfigContainer.getElementsByTagName("select"), "change", toolbarChanged);
            return urlConfigContainer;
          }
          __name(toolbarUrlConfigContainer, "toolbarUrlConfigContainer");
          function abortTestsButton() {
            var button = document.createElement("button");
            button.id = "qunit-abort-tests-button";
            button.innerHTML = "Abort";
            addEvent(button, "click", abortTests);
            return button;
          }
          __name(abortTestsButton, "abortTestsButton");
          function toolbarLooseFilter() {
            var filter = document.createElement("form");
            var label = document.createElement("label");
            var input = document.createElement("input");
            var button = document.createElement("button");
            addClass(filter, "qunit-filter");
            label.innerHTML = "Filter: ";
            input.type = "text";
            input.value = config3.filter || "";
            input.name = "filter";
            input.id = "qunit-filter-input";
            button.innerHTML = "Go";
            label.appendChild(input);
            filter.appendChild(label);
            filter.appendChild(document.createTextNode(" "));
            filter.appendChild(button);
            addEvent(filter, "submit", interceptNavigation);
            return filter;
          }
          __name(toolbarLooseFilter, "toolbarLooseFilter");
          function createModuleListItem(moduleId, name, checked) {
            return '<li><label class="clickable' + (checked ? " checked" : "") + '"><input type="checkbox" value="' + escapeText(moduleId) + '"' + (checked ? ' checked="checked"' : "") + " />" + escapeText(name) + "</label></li>";
          }
          __name(createModuleListItem, "createModuleListItem");
          function moduleListHtml(results) {
            var html = "";
            dropdownData.selectedMap.forEach(function(name, moduleId) {
              html += createModuleListItem(moduleId, name, true);
            });
            for (var i = 0; i < results.length; i++) {
              var mod = results[i].obj;
              if (!dropdownData.selectedMap.has(mod.moduleId)) {
                html += createModuleListItem(mod.moduleId, mod.name, false);
              }
            }
            return html;
          }
          __name(moduleListHtml, "moduleListHtml");
          function toolbarModuleFilter(beginDetails) {
            var initialSelected = null;
            dropdownData = {
              options: beginDetails.modules.slice(),
              selectedMap: new StringMap(),
              isDirty: /* @__PURE__ */ __name(function isDirty() {
                return _toConsumableArray(dropdownData.selectedMap.keys()).sort().join(",") !== _toConsumableArray(initialSelected.keys()).sort().join(",");
              }, "isDirty")
            };
            if (config3.moduleId.length) {
              for (var i = 0; i < beginDetails.modules.length; i++) {
                var mod = beginDetails.modules[i];
                if (config3.moduleId.indexOf(mod.moduleId) !== -1) {
                  dropdownData.selectedMap.set(mod.moduleId, mod.name);
                }
              }
            }
            initialSelected = new StringMap(dropdownData.selectedMap);
            var moduleSearch = document.createElement("input");
            moduleSearch.id = "qunit-modulefilter-search";
            moduleSearch.autocomplete = "off";
            addEvent(moduleSearch, "input", searchInput);
            addEvent(moduleSearch, "input", searchFocus);
            addEvent(moduleSearch, "focus", searchFocus);
            addEvent(moduleSearch, "click", searchFocus);
            var label = document.createElement("label");
            label.htmlFor = "qunit-modulefilter-search";
            label.textContent = "Module:";
            var searchContainer = document.createElement("span");
            searchContainer.id = "qunit-modulefilter-search-container";
            searchContainer.appendChild(moduleSearch);
            var applyButton = document.createElement("button");
            applyButton.textContent = "Apply";
            applyButton.title = "Re-run the selected test modules";
            addEvent(applyButton, "click", applyUrlParams);
            var resetButton = document.createElement("button");
            resetButton.textContent = "Reset";
            resetButton.type = "reset";
            resetButton.title = "Restore the previous module selection";
            var clearButton = document.createElement("button");
            clearButton.textContent = "Select none";
            clearButton.type = "button";
            clearButton.title = "Clear the current module selection";
            addEvent(clearButton, "click", function() {
              dropdownData.selectedMap.clear();
              selectionChange();
              searchInput();
            });
            var actions = document.createElement("span");
            actions.id = "qunit-modulefilter-actions";
            actions.appendChild(applyButton);
            actions.appendChild(resetButton);
            if (initialSelected.size) {
              actions.appendChild(clearButton);
            }
            var dropDownList = document.createElement("ul");
            dropDownList.id = "qunit-modulefilter-dropdown-list";
            var dropDown = document.createElement("div");
            dropDown.id = "qunit-modulefilter-dropdown";
            dropDown.style.display = "none";
            dropDown.appendChild(actions);
            dropDown.appendChild(dropDownList);
            addEvent(dropDown, "change", selectionChange);
            searchContainer.appendChild(dropDown);
            selectionChange();
            var moduleFilter = document.createElement("form");
            moduleFilter.id = "qunit-modulefilter";
            moduleFilter.appendChild(label);
            moduleFilter.appendChild(document.createTextNode(" "));
            moduleFilter.appendChild(searchContainer);
            addEvent(moduleFilter, "submit", interceptNavigation);
            addEvent(moduleFilter, "reset", function() {
              dropdownData.selectedMap = new StringMap(initialSelected);
              selectionChange();
              searchInput();
            });
            function searchFocus() {
              if (dropDown.style.display !== "none") {
                return;
              }
              searchInput();
              dropDown.style.display = "block";
              addEvent(document, "click", hideHandler);
              addEvent(document, "keydown", hideHandler);
              function hideHandler(e) {
                var inContainer = moduleFilter.contains(e.target);
                if (e.keyCode === 27 || !inContainer) {
                  if (e.keyCode === 27 && inContainer) {
                    moduleSearch.focus();
                  }
                  dropDown.style.display = "none";
                  removeEvent(document, "click", hideHandler);
                  removeEvent(document, "keydown", hideHandler);
                  moduleSearch.value = "";
                  searchInput();
                }
              }
              __name(hideHandler, "hideHandler");
            }
            __name(searchFocus, "searchFocus");
            function filterModules(searchText) {
              var results;
              if (searchText === "") {
                results = dropdownData.options.slice(0, 20).map(function(obj) {
                  return {
                    obj
                  };
                });
              } else {
                results = fuzzysort.go(searchText, dropdownData.options, {
                  limit: 20,
                  key: "name",
                  allowTypo: true
                });
              }
              return moduleListHtml(results);
            }
            __name(filterModules, "filterModules");
            var searchInputTimeout;
            function searchInput() {
              window$1.clearTimeout(searchInputTimeout);
              searchInputTimeout = window$1.setTimeout(function() {
                dropDownList.innerHTML = filterModules(moduleSearch.value);
              });
            }
            __name(searchInput, "searchInput");
            function selectionChange(evt) {
              var checkbox = evt && evt.target || null;
              if (checkbox) {
                if (checkbox.checked) {
                  dropdownData.selectedMap.set(checkbox.value, checkbox.parentNode.textContent);
                } else {
                  dropdownData.selectedMap.delete(checkbox.value);
                }
                toggleClass(checkbox.parentNode, "checked", checkbox.checked);
              }
              var textForm = dropdownData.selectedMap.size ? dropdownData.selectedMap.size + " " + (dropdownData.selectedMap.size === 1 ? "module" : "modules") : "All modules";
              moduleSearch.placeholder = textForm;
              moduleSearch.title = "Type to search through and reduce the list.";
              resetButton.disabled = !dropdownData.isDirty();
              clearButton.style.display = dropdownData.selectedMap.size ? "" : "none";
            }
            __name(selectionChange, "selectionChange");
            return moduleFilter;
          }
          __name(toolbarModuleFilter, "toolbarModuleFilter");
          function appendToolbar(beginDetails) {
            var toolbar = id("qunit-testrunner-toolbar");
            if (toolbar) {
              toolbar.appendChild(toolbarUrlConfigContainer());
              var toolbarFilters = document.createElement("span");
              toolbarFilters.id = "qunit-toolbar-filters";
              toolbarFilters.appendChild(toolbarLooseFilter());
              toolbarFilters.appendChild(toolbarModuleFilter(beginDetails));
              var clearfix = document.createElement("div");
              clearfix.className = "clearfix";
              toolbar.appendChild(toolbarFilters);
              toolbar.appendChild(clearfix);
            }
          }
          __name(appendToolbar, "appendToolbar");
          function appendHeader() {
            var header = id("qunit-header");
            if (header) {
              header.innerHTML = "<a href='" + escapeText(unfilteredUrl) + "'>" + header.innerHTML + "</a> ";
            }
          }
          __name(appendHeader, "appendHeader");
          function appendBanner() {
            var banner = id("qunit-banner");
            if (banner) {
              banner.className = "";
            }
          }
          __name(appendBanner, "appendBanner");
          function appendTestResults() {
            var tests = id("qunit-tests");
            var result = id("qunit-testresult");
            var controls;
            if (result) {
              result.parentNode.removeChild(result);
            }
            if (tests) {
              tests.innerHTML = "";
              result = document.createElement("p");
              result.id = "qunit-testresult";
              result.className = "result";
              tests.parentNode.insertBefore(result, tests);
              result.innerHTML = '<div id="qunit-testresult-display">Running...<br />&#160;</div><div id="qunit-testresult-controls"></div><div class="clearfix"></div>';
              controls = id("qunit-testresult-controls");
            }
            if (controls) {
              controls.appendChild(abortTestsButton());
            }
          }
          __name(appendTestResults, "appendTestResults");
          function appendFilteredTest() {
            var testId = QUnit2.config.testId;
            if (!testId || testId.length <= 0) {
              return "";
            }
            return "<div id='qunit-filteredTest'>Rerunning selected tests: " + escapeText(testId.join(", ")) + " <a id='qunit-clearFilter' href='" + escapeText(unfilteredUrl) + "'>Run all tests</a></div>";
          }
          __name(appendFilteredTest, "appendFilteredTest");
          function appendUserAgent() {
            var userAgent = id("qunit-userAgent");
            if (userAgent) {
              userAgent.innerHTML = "";
              userAgent.appendChild(document.createTextNode("QUnit " + QUnit2.version + "; " + navigator.userAgent));
            }
          }
          __name(appendUserAgent, "appendUserAgent");
          function appendInterface(beginDetails) {
            var qunit = id("qunit");
            if (qunit) {
              qunit.setAttribute("role", "main");
              qunit.innerHTML = "<h1 id='qunit-header'>" + escapeText(document.title) + "</h1><h2 id='qunit-banner'></h2><div id='qunit-testrunner-toolbar' role='navigation'></div>" + appendFilteredTest() + "<h2 id='qunit-userAgent'></h2><ol id='qunit-tests'></ol>";
            }
            appendHeader();
            appendBanner();
            appendTestResults();
            appendUserAgent();
            appendToolbar(beginDetails);
          }
          __name(appendInterface, "appendInterface");
          function appendTest(name, testId, moduleName) {
            var tests = id("qunit-tests");
            if (!tests) {
              return;
            }
            var title = document.createElement("strong");
            title.className = "qunit-test-name";
            title.innerHTML = getNameHtml(name, moduleName);
            var testBlock = document.createElement("li");
            testBlock.appendChild(title);
            if (testId !== void 0) {
              var rerunTrigger = document.createElement("a");
              rerunTrigger.innerHTML = "Rerun";
              rerunTrigger.href = setUrl({
                testId
              });
              testBlock.id = "qunit-test-output-" + testId;
              testBlock.appendChild(rerunTrigger);
            }
            var assertList = document.createElement("ol");
            assertList.className = "qunit-assert-list";
            testBlock.appendChild(assertList);
            tests.appendChild(testBlock);
            return testBlock;
          }
          __name(appendTest, "appendTest");
          QUnit2.on("runStart", function(runStart) {
            stats.defined = runStart.testCounts.total;
          });
          QUnit2.begin(function(beginDetails) {
            appendInterface(beginDetails);
          });
          function getRerunFailedHtml(failedTests) {
            if (failedTests.length === 0) {
              return "";
            }
            var href = setUrl({
              testId: failedTests
            });
            return ["<br /><a href='" + escapeText(href) + "'>", failedTests.length === 1 ? "Rerun 1 failed test" : "Rerun " + failedTests.length + " failed tests", "</a>"].join("");
          }
          __name(getRerunFailedHtml, "getRerunFailedHtml");
          QUnit2.on("runEnd", function(runEnd) {
            var banner = id("qunit-banner");
            var tests = id("qunit-tests");
            var abortButton = id("qunit-abort-tests-button");
            var assertPassed = config3.stats.all - config3.stats.bad;
            var html = [runEnd.testCounts.total, " tests completed in ", runEnd.runtime, " milliseconds, with ", runEnd.testCounts.failed, " failed, ", runEnd.testCounts.skipped, " skipped, and ", runEnd.testCounts.todo, " todo.<br />", "<span class='passed'>", assertPassed, "</span> assertions of <span class='total'>", config3.stats.all, "</span> passed, <span class='failed'>", config3.stats.bad, "</span> failed.", getRerunFailedHtml(stats.failedTests)].join("");
            var test3;
            var assertLi;
            var assertList;
            if (abortButton && abortButton.disabled) {
              html = "Tests aborted after " + runEnd.runtime + " milliseconds.";
              for (var i = 0; i < tests.children.length; i++) {
                test3 = tests.children[i];
                if (test3.className === "" || test3.className === "running") {
                  test3.className = "aborted";
                  assertList = test3.getElementsByTagName("ol")[0];
                  assertLi = document.createElement("li");
                  assertLi.className = "fail";
                  assertLi.innerHTML = "Test aborted.";
                  assertList.appendChild(assertLi);
                }
              }
            }
            if (banner && (!abortButton || abortButton.disabled === false)) {
              banner.className = runEnd.status === "failed" ? "qunit-fail" : "qunit-pass";
            }
            if (abortButton) {
              abortButton.parentNode.removeChild(abortButton);
            }
            if (tests) {
              id("qunit-testresult-display").innerHTML = html;
            }
            if (config3.altertitle && document.title) {
              document.title = [runEnd.status === "failed" ? "\u2716" : "\u2714", document.title.replace(/^[\u2714\u2716] /i, "")].join(" ");
            }
            if (config3.scrolltop && window$1.scrollTo) {
              window$1.scrollTo(0, 0);
            }
          });
          function getNameHtml(name, module3) {
            var nameHtml = "";
            if (module3) {
              nameHtml = "<span class='module-name'>" + escapeText(module3) + "</span>: ";
            }
            nameHtml += "<span class='test-name'>" + escapeText(name) + "</span>";
            return nameHtml;
          }
          __name(getNameHtml, "getNameHtml");
          function getProgressHtml(stats2) {
            return [stats2.completed, " / ", stats2.defined, " tests completed.<br />"].join("");
          }
          __name(getProgressHtml, "getProgressHtml");
          QUnit2.testStart(function(details) {
            var running, bad;
            appendTest(details.name, details.testId, details.module);
            running = id("qunit-testresult-display");
            if (running) {
              addClass(running, "running");
              bad = QUnit2.config.reorder && details.previousFailure;
              running.innerHTML = [getProgressHtml(stats), bad ? "Rerunning previously failed test: <br />" : "Running: ", getNameHtml(details.name, details.module), getRerunFailedHtml(stats.failedTests)].join("");
            }
          });
          function stripHtml(string) {
            return string.replace(/<\/?[^>]+(>|$)/g, "").replace(/&quot;/g, "").replace(/\s+/g, "");
          }
          __name(stripHtml, "stripHtml");
          QUnit2.log(function(details) {
            var testItem = id("qunit-test-output-" + details.testId);
            if (!testItem) {
              return;
            }
            var message = escapeText(details.message) || (details.result ? "okay" : "failed");
            message = "<span class='test-message'>" + message + "</span>";
            message += "<span class='runtime'>@ " + details.runtime + " ms</span>";
            var expected;
            var actual;
            var diff3;
            var showDiff = false;
            var showAnyValues = !details.result && (details.expected !== void 0 || details.actual !== void 0);
            if (showAnyValues) {
              if (details.negative) {
                expected = "NOT " + QUnit2.dump.parse(details.expected);
              } else {
                expected = QUnit2.dump.parse(details.expected);
              }
              actual = QUnit2.dump.parse(details.actual);
              message += "<table><tr class='test-expected'><th>Expected: </th><td><pre>" + escapeText(expected) + "</pre></td></tr>";
              if (actual !== expected) {
                message += "<tr class='test-actual'><th>Result: </th><td><pre>" + escapeText(actual) + "</pre></td></tr>";
                if (typeof details.actual === "number" && typeof details.expected === "number") {
                  if (!isNaN(details.actual) && !isNaN(details.expected)) {
                    showDiff = true;
                    diff3 = details.actual - details.expected;
                    diff3 = (diff3 > 0 ? "+" : "") + diff3;
                  }
                } else if (typeof details.actual !== "boolean" && typeof details.expected !== "boolean") {
                  diff3 = QUnit2.diff(expected, actual);
                  showDiff = stripHtml(diff3).length !== stripHtml(expected).length + stripHtml(actual).length;
                }
                if (showDiff) {
                  message += "<tr class='test-diff'><th>Diff: </th><td><pre>" + diff3 + "</pre></td></tr>";
                }
              } else if (expected.indexOf("[object Array]") !== -1 || expected.indexOf("[object Object]") !== -1) {
                message += "<tr class='test-message'><th>Message: </th><td>Diff suppressed as the depth of object is more than current max depth (" + QUnit2.dump.maxDepth + ").<p>Hint: Use <code>QUnit.dump.maxDepth</code> to  run with a higher max depth or <a href='" + escapeText(setUrl({
                  maxDepth: 0
                })) + "'>Rerun without max depth</a>.</p></td></tr>";
              } else {
                message += "<tr class='test-message'><th>Message: </th><td>Diff suppressed as the expected and actual results have an equivalent serialization</td></tr>";
              }
              if (details.source) {
                message += "<tr class='test-source'><th>Source: </th><td><pre>" + escapeText(details.source) + "</pre></td></tr>";
              }
              message += "</table>";
            } else if (!details.result && details.source) {
              message += "<table><tr class='test-source'><th>Source: </th><td><pre>" + escapeText(details.source) + "</pre></td></tr></table>";
            }
            var assertList = testItem.getElementsByTagName("ol")[0];
            var assertLi = document.createElement("li");
            assertLi.className = details.result ? "pass" : "fail";
            assertLi.innerHTML = message;
            assertList.appendChild(assertLi);
          });
          QUnit2.testDone(function(details) {
            var tests = id("qunit-tests");
            var testItem = id("qunit-test-output-" + details.testId);
            if (!tests || !testItem) {
              return;
            }
            removeClass(testItem, "running");
            var status;
            if (details.failed > 0) {
              status = "failed";
            } else if (details.todo) {
              status = "todo";
            } else {
              status = details.skipped ? "skipped" : "passed";
            }
            var assertList = testItem.getElementsByTagName("ol")[0];
            var good = details.passed;
            var bad = details.failed;
            var testPassed = details.failed > 0 ? details.todo : !details.todo;
            if (testPassed) {
              addClass(assertList, "qunit-collapsed");
            } else {
              stats.failedTests.push(details.testId);
              if (config3.collapse) {
                if (!collapseNext) {
                  collapseNext = true;
                } else {
                  addClass(assertList, "qunit-collapsed");
                }
              }
            }
            var testTitle = testItem.firstChild;
            var testCounts = bad ? "<b class='failed'>" + bad + "</b>, <b class='passed'>" + good + "</b>, " : "";
            testTitle.innerHTML += " <b class='counts'>(" + testCounts + details.assertions.length + ")</b>";
            stats.completed++;
            if (details.skipped) {
              testItem.className = "skipped";
              var skipped = document.createElement("em");
              skipped.className = "qunit-skipped-label";
              skipped.innerHTML = "skipped";
              testItem.insertBefore(skipped, testTitle);
            } else {
              addEvent(testTitle, "click", function() {
                toggleClass(assertList, "qunit-collapsed");
              });
              testItem.className = testPassed ? "pass" : "fail";
              if (details.todo) {
                var todoLabel = document.createElement("em");
                todoLabel.className = "qunit-todo-label";
                todoLabel.innerHTML = "todo";
                testItem.className += " todo";
                testItem.insertBefore(todoLabel, testTitle);
              }
              var time = document.createElement("span");
              time.className = "runtime";
              time.innerHTML = details.runtime + " ms";
              testItem.insertBefore(time, assertList);
            }
            if (details.source) {
              var sourceName = document.createElement("p");
              sourceName.innerHTML = "<strong>Source: </strong>" + escapeText(details.source);
              addClass(sourceName, "qunit-source");
              if (testPassed) {
                addClass(sourceName, "qunit-collapsed");
              }
              addEvent(testTitle, "click", function() {
                toggleClass(sourceName, "qunit-collapsed");
              });
              testItem.appendChild(sourceName);
            }
            if (config3.hidepassed && (status === "passed" || details.skipped)) {
              hiddenTests.push(testItem);
              tests.removeChild(testItem);
            }
          });
          QUnit2.on("error", function(error) {
            var testItem = appendTest("global failure");
            if (!testItem) {
              return;
            }
            var message = escapeText(errorString(error));
            message = "<span class='test-message'>" + message + "</span>";
            if (error && error.stack) {
              message += "<table><tr class='test-source'><th>Source: </th><td><pre>" + escapeText(error.stack) + "</pre></td></tr></table>";
            }
            var assertList = testItem.getElementsByTagName("ol")[0];
            var assertLi = document.createElement("li");
            assertLi.className = "fail";
            assertLi.innerHTML = message;
            assertList.appendChild(assertLi);
            testItem.className = "fail";
          });
          var usingPhantom = (function(p) {
            return p && p.version && p.version.major > 0;
          })(window$1.phantom);
          if (usingPhantom) {
            console$1.warn("Support for PhantomJS is deprecated and will be removed in QUnit 3.0.");
          }
          if (!usingPhantom && document.readyState === "complete") {
            QUnit2.autostart();
          } else {
            addEvent(window$1, "load", QUnit2.autostart);
          }
          var originalWindowOnError = window$1.onerror;
          window$1.onerror = function(message, fileName2, lineNumber, columnNumber, errorObj) {
            var ret = false;
            if (originalWindowOnError) {
              for (var _len = arguments.length, args = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
                args[_key - 5] = arguments[_key];
              }
              ret = originalWindowOnError.call.apply(originalWindowOnError, [this, message, fileName2, lineNumber, columnNumber, errorObj].concat(args));
            }
            if (ret !== true) {
              if (config3.current && config3.current.ignoreGlobalErrors) {
                return true;
              }
              var error = errorObj || new Error(message);
              if (!error.stack && fileName2 && lineNumber) {
                error.stack = "".concat(fileName2, ":").concat(lineNumber);
              }
              QUnit2.onUncaughtException(error);
            }
            return ret;
          };
          window$1.addEventListener("unhandledrejection", function(event) {
            QUnit2.onUncaughtException(event.reason);
          });
        })();
      })();
    }
  });

  // node_modules/qunitx/shims/browser/index.js
  var import_qunit = __toESM(require_qunit(), 1);
  import_qunit.default.config.autostart = false;
  var isLocal = import_qunit.default.isLocal;
  var on = import_qunit.default.on;
  var test = import_qunit.default.test;
  var skip = import_qunit.default.skip;
  var start = import_qunit.default.start;
  var is = import_qunit.default.is;
  var extend = import_qunit.default.extend;
  var stack = import_qunit.default.stack;
  var onUnhandledRejection = import_qunit.default.onUnhandledRejection;
  var assert = import_qunit.default.assert;
  var dump = import_qunit.default.dump;
  var done = import_qunit.default.done;
  var testStart = import_qunit.default.testStart;
  var moduleStart = import_qunit.default.moduleStart;
  var version = import_qunit.default.version;
  var module = import_qunit.default.module;
  var todo = import_qunit.default.todo;
  var only = import_qunit.default.only;
  var config = import_qunit.default.config;
  var objectType = import_qunit.default.objectType;
  var load = import_qunit.default.load;
  var onError = import_qunit.default.onError;
  var pushFailure = import_qunit.default.pushFailure;
  var equiv = import_qunit.default.equiv;
  var begin = import_qunit.default.begin;
  var log = import_qunit.default.log;
  var testDone = import_qunit.default.testDone;
  var moduleDone = import_qunit.default.moduleDone;
  var diff = import_qunit.default.diff;

  // src/bookstore.ts
  var BookCatalog = class {
    static {
      __name(this, "BookCatalog");
    }
    books = /* @__PURE__ */ new Map();
    addBook(book) {
      this.books.set(book.id, book);
    }
    findBook(id) {
      return this.books.get(id);
    }
    findByAuthor(author) {
      return [...this.books.values()].filter((b) => b.author === author);
    }
    findByGenre(genre) {
      return [...this.books.values()].filter((b) => b.genre === genre);
    }
    removeBook(id) {
      return this.books.delete(id);
    }
    getAll() {
      return [...this.books.values()];
    }
    get size() {
      return this.books.size;
    }
  };
  var Inventory = class {
    static {
      __name(this, "Inventory");
    }
    stock = /* @__PURE__ */ new Map();
    addStock(bookId, quantity) {
      const current = this.stock.get(bookId) ?? 0;
      this.stock.set(bookId, current + quantity);
    }
    removeStock(bookId, quantity) {
      const current = this.stock.get(bookId) ?? 0;
      if (current < quantity) return false;
      this.stock.set(bookId, current - quantity);
      return true;
    }
    getStock(bookId) {
      return this.stock.get(bookId) ?? 0;
    }
    isAvailable(bookId) {
      return this.getStock(bookId) > 0;
    }
  };
  var Checkout = class {
    static {
      __name(this, "Checkout");
    }
    catalog;
    inventory;
    constructor(catalog, inventory) {
      this.catalog = catalog;
      this.inventory = inventory;
    }
    purchase(bookId, quantity = 1) {
      const book = this.catalog.findBook(bookId);
      if (!book) {
        return { success: false, total: 0, message: "Book not found" };
      }
      if (!this.inventory.removeStock(bookId, quantity)) {
        return { success: false, total: 0, message: "Insufficient stock" };
      }
      return { success: true, total: book.price * quantity, message: "Purchase successful" };
    }
    applyDiscount(price, discountPercent) {
      return price * (1 - discountPercent / 100);
    }
    calculateTotal(items) {
      return items.reduce((total, item) => {
        const book = this.catalog.findBook(item.bookId);
        return total + (book ? book.price * item.quantity : 0);
      }, 0);
    }
  };

  // test/catalog-test.ts
  module("BookCatalog", function() {
    test("adds and retrieves a book by id", function(assert2) {
      const catalog = new BookCatalog();
      catalog.addBook({ id: "1", title: "Dune", author: "Frank Herbert", price: 14.99, genre: "Sci-Fi" });
      const book = catalog.findBook("1");
      assert2.equal(book?.title, "Dune");
      assert2.equal(book?.author, "Frank Herbert");
    });
    test("returns undefined for a missing book", function(assert2) {
      const catalog = new BookCatalog();
      assert2.equal(catalog.findBook("nonexistent"), void 0);
    });
    test("finds all books by a given author", function(assert2) {
      const catalog = new BookCatalog();
      catalog.addBook({ id: "1", title: "Dune", author: "Frank Herbert", price: 14.99, genre: "Sci-Fi" });
      catalog.addBook({ id: "2", title: "Dune Messiah", author: "Frank Herbert", price: 12.99, genre: "Sci-Fi" });
      catalog.addBook({ id: "3", title: "1984", author: "George Orwell", price: 9.99, genre: "Dystopia" });
      const results = catalog.findByAuthor("Frank Herbert");
      assert2.equal(results.length, 2);
      assert2.ok(results.every((b) => b.author === "Frank Herbert"));
    });
    test("removes a book from the catalog", function(assert2) {
      const catalog = new BookCatalog();
      catalog.addBook({ id: "1", title: "Dune", author: "Frank Herbert", price: 14.99, genre: "Sci-Fi" });
      assert2.equal(catalog.size, 1);
      const removed = catalog.removeBook("1");
      assert2.ok(removed);
      assert2.equal(catalog.size, 0);
      assert2.equal(catalog.findBook("1"), void 0);
    });
  });

  // test/inventory-test.ts
  module("Inventory", function() {
    test("tracks stock correctly after adding", function(assert2) {
      const inventory = new Inventory();
      inventory.addStock("book-1", 5);
      inventory.addStock("book-1", 3);
      assert2.equal(inventory.getStock("book-1"), 8);
    });
    test("isAvailable reflects stock levels", function(assert2) {
      const inventory = new Inventory();
      assert2.notOk(inventory.isAvailable("book-2"), "unavailable when no stock");
      inventory.addStock("book-2", 1);
      assert2.ok(inventory.isAvailable("book-2"), "available when stock exists");
    });
    test("removeStock prevents going below zero", function(assert2) {
      const inventory = new Inventory();
      inventory.addStock("book-3", 2);
      const success = inventory.removeStock("book-3", 5);
      assert2.notOk(success, "returns false when stock is insufficient");
      assert2.equal(inventory.getStock("book-3"), 2, "stock unchanged after failed removal");
    });
  });

  // test/checkout-test.ts
  function setup() {
    const catalog = new BookCatalog();
    const inventory = new Inventory();
    const checkout = new Checkout(catalog, inventory);
    catalog.addBook({ id: "b1", title: "The Hobbit", author: "J.R.R. Tolkien", price: 11.99, genre: "Fantasy" });
    catalog.addBook({ id: "b2", title: "Foundation", author: "Isaac Asimov", price: 13.49, genre: "Sci-Fi" });
    inventory.addStock("b1", 10);
    inventory.addStock("b2", 3);
    return { catalog, inventory, checkout };
  }
  __name(setup, "setup");
  module("Checkout", function() {
    test("purchase succeeds when book is in stock", function(assert2) {
      const { checkout, inventory } = setup();
      const result = checkout.purchase("b1", 2);
      assert2.ok(result.success);
      assert2.equal(result.total, 23.98);
      assert2.equal(result.message, "Purchase successful");
      assert2.equal(inventory.getStock("b1"), 8, "stock decremented after purchase");
    });
    test("purchase fails when book does not exist", function(assert2) {
      const { checkout } = setup();
      const result = checkout.purchase("unknown-id");
      assert2.notOk(result.success);
      assert2.equal(result.message, "Book not found");
    });
    test("calculateTotal sums prices for multiple items correctly", function(assert2) {
      const { checkout } = setup();
      const total = checkout.calculateTotal([
        { bookId: "b1", quantity: 2 },
        { bookId: "b2", quantity: 1 }
      ]);
      assert2.equal(total, 37.47, "expected wrong total to show a failing test");
    });
  });
})();
/*! Bundled license information:

qunitx/vendor/qunit.js:
  (*!
   * QUnit 2.25.0
   * https://qunitjs.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *)
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL3F1bml0eC92ZW5kb3IvcXVuaXQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3F1bml0eC9zaGltcy9icm93c2VyL2luZGV4LmpzIiwgIi4uL3NyYy9ib29rc3RvcmUudHMiLCAiLi4vdGVzdC9jYXRhbG9nLXRlc3QudHMiLCAiLi4vdGVzdC9pbnZlbnRvcnktdGVzdC50cyIsICIuLi90ZXN0L2NoZWNrb3V0LXRlc3QudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qIVxuICogUVVuaXQgMi4yNS4wXG4gKiBodHRwczovL3F1bml0anMuY29tL1xuICpcbiAqIENvcHlyaWdodCBPcGVuSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vanF1ZXJ5Lm9yZy9saWNlbnNlXG4gKi9cbihmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShyLCBhKSB7XG4gICAgKG51bGwgPT0gYSB8fCBhID4gci5sZW5ndGgpICYmIChhID0gci5sZW5ndGgpO1xuICAgIGZvciAodmFyIGUgPSAwLCBuID0gQXJyYXkoYSk7IGUgPCBhOyBlKyspIG5bZV0gPSByW2VdO1xuICAgIHJldHVybiBuO1xuICB9XG4gIGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhyKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocikpIHJldHVybiByO1xuICB9XG4gIGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhyKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShyKTtcbiAgfVxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soYSwgbikge1xuICAgIGlmICghKGEgaW5zdGFuY2VvZiBuKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxuICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyhlLCByKSB7XG4gICAgZm9yICh2YXIgdCA9IDA7IHQgPCByLmxlbmd0aDsgdCsrKSB7XG4gICAgICB2YXIgbyA9IHJbdF07XG4gICAgICBvLmVudW1lcmFibGUgPSBvLmVudW1lcmFibGUgfHwgITEsIG8uY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBvICYmIChvLndyaXRhYmxlID0gITApLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgX3RvUHJvcGVydHlLZXkoby5rZXkpLCBvKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKGUsIHIsIHQpIHtcbiAgICByZXR1cm4gciAmJiBfZGVmaW5lUHJvcGVydGllcyhlLnByb3RvdHlwZSwgciksIHQgJiYgX2RlZmluZVByb3BlcnRpZXMoZSwgdCksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBcInByb3RvdHlwZVwiLCB7XG4gICAgICB3cml0YWJsZTogITFcbiAgICB9KSwgZTtcbiAgfVxuICBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KHIpIHtcbiAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIG51bGwgIT0gcltTeW1ib2wuaXRlcmF0b3JdIHx8IG51bGwgIT0gcltcIkBAaXRlcmF0b3JcIl0pIHJldHVybiBBcnJheS5mcm9tKHIpO1xuICB9XG4gIGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChyLCBsKSB7XG4gICAgdmFyIHQgPSBudWxsID09IHIgPyBudWxsIDogXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIHJbU3ltYm9sLml0ZXJhdG9yXSB8fCByW1wiQEBpdGVyYXRvclwiXTtcbiAgICBpZiAobnVsbCAhPSB0KSB7XG4gICAgICB2YXIgZSxcbiAgICAgICAgbixcbiAgICAgICAgaSxcbiAgICAgICAgdSxcbiAgICAgICAgYSA9IFtdLFxuICAgICAgICBmID0gITAsXG4gICAgICAgIG8gPSAhMTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChpID0gKHQgPSB0LmNhbGwocikpLm5leHQsIDAgPT09IGwpIHtcbiAgICAgICAgICBpZiAoT2JqZWN0KHQpICE9PSB0KSByZXR1cm47XG4gICAgICAgICAgZiA9ICExO1xuICAgICAgICB9IGVsc2UgZm9yICg7ICEoZiA9IChlID0gaS5jYWxsKHQpKS5kb25lKSAmJiAoYS5wdXNoKGUudmFsdWUpLCBhLmxlbmd0aCAhPT0gbCk7IGYgPSAhMCk7XG4gICAgICB9IGNhdGNoIChyKSB7XG4gICAgICAgIG8gPSAhMCwgbiA9IHI7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghZiAmJiBudWxsICE9IHQucmV0dXJuICYmICh1ID0gdC5yZXR1cm4oKSwgT2JqZWN0KHUpICE9PSB1KSkgcmV0dXJuO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChvKSB0aHJvdyBuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xuICB9XG4gIGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbiAgfVxuICBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShyLCBlKSB7XG4gICAgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQociwgZSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KHIsIGUpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTtcbiAgfVxuICBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkocikge1xuICAgIHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMocikgfHwgX2l0ZXJhYmxlVG9BcnJheShyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkocikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7XG4gIH1cbiAgZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHtcbiAgICBpZiAoXCJvYmplY3RcIiAhPSB0eXBlb2YgdCB8fCAhdCkgcmV0dXJuIHQ7XG4gICAgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gICAgaWYgKHZvaWQgMCAhPT0gZSkge1xuICAgICAgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7XG4gICAgICBpZiAoXCJvYmplY3RcIiAhPSB0eXBlb2YgaSkgcmV0dXJuIGk7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gICAgfVxuICAgIHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7XG4gIH1cbiAgZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkge1xuICAgIHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpO1xuICAgIHJldHVybiBcInN5bWJvbFwiID09IHR5cGVvZiBpID8gaSA6IGkgKyBcIlwiO1xuICB9XG4gIGZ1bmN0aW9uIF90eXBlb2Yobykge1xuICAgIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICAgIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHJldHVybiB0eXBlb2YgbztcbiAgICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICAgIH0sIF90eXBlb2Yobyk7XG4gIH1cbiAgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KHIsIGEpIHtcbiAgICBpZiAocikge1xuICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIHIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShyLCBhKTtcbiAgICAgIHZhciB0ID0ge30udG9TdHJpbmcuY2FsbChyKS5zbGljZSg4LCAtMSk7XG4gICAgICByZXR1cm4gXCJPYmplY3RcIiA9PT0gdCAmJiByLmNvbnN0cnVjdG9yICYmICh0ID0gci5jb25zdHJ1Y3Rvci5uYW1lKSwgXCJNYXBcIiA9PT0gdCB8fCBcIlNldFwiID09PSB0ID8gQXJyYXkuZnJvbShyKSA6IFwiQXJndW1lbnRzXCIgPT09IHQgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QodCkgPyBfYXJyYXlMaWtlVG9BcnJheShyLCBhKSA6IHZvaWQgMDtcbiAgICB9XG4gIH1cblxuICAvLyBXZSBkb24ndCB1c2UgZ2xvYmFsLXRoaXMtcG9seWZpbGwgWzFdLCBiZWNhdXNlIGl0IG1vZGlmaWVzXG4gIC8vIHRoZSBnbG9iYWxzIHNjb3BlIGJ5IGRlZmF1bHQuIFFVbml0IG11c3Qgbm90IGFmZmVjdCB0aGUgaG9zdCBjb250ZXh0XG4gIC8vIGFzIGRldmVsb3BlcnMgbWF5IHRlc3QgdGhlaXIgcHJvamVjdCBtYXkgYmUgc3VjaCBhIHBvbHlmaWxsLCBhbmQvb3JcbiAgLy8gdGhleSBtYXkgaW50ZW50aW9uYWxseSB0ZXN0IHRoZWlyIHByb2plY3Qgd2l0aCBhbmQgd2l0aG91dCBjZXJ0YWluXG4gIC8vIHBvbHlmaWxscyBhbmQgd2UgbXVzdCBub3QgYWZmZWN0IHRoYXQuIEl0IGFsc28gdXNlcyBhbiBvYnNjdXJlXG4gIC8vIG1lY2hhbmlzbSB0aGF0IHNlZW1zIHRvIHNvbWV0aW1lcyBjYXVzZXMgYSBydW50aW1lIGVycm9yIGluIG9sZGVyXG4gIC8vIGJyb3dzZXJzIChzcGVjaWZpY2FsbHkgU2FmYXJpIGFuZCBJRSB2ZXJzaW9ucyB0aGF0IHN1cHBvcnRcbiAgLy8gT2JqZWN0LmRlZmluZVByb3BlcnR5IGJ1dCB0aGVuIHJlcG9ydCBfVF8gYXMgdW5kZWZpbmVkKS5cbiAgLy8gWzFdIGh0dHBzOi8vZ2l0aHViLmNvbS91bmdhcC9nbG9iYWwtdGhpcy9ibG9iL3YwLjQuNC9lc20vaW5kZXguanNcbiAgLy9cbiAgLy8gQW5vdGhlciB3YXkgaXMgYEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKClgLCBidXQgZG9pbmcgc28gcmVsaWVzXG4gIC8vIG9uIGV2YWwgd2hpY2ggd2lsbCBjYXVzZSBhIENTUCBlcnJvciBvbiBzb21lIHNlcnZlcnMuXG4gIC8vXG4gIC8vIEluc3RlYWQsIHNpbXBseSBjaGVjayB0aGUgZm91ciBvcHRpb25zIHRoYXQgYWxyZWFkeSBleGlzdFxuICAvLyBpbiBhbGwgc3VwcG9ydGVkIGVudmlyb25tZW50cy5cbiAgZnVuY3Rpb24gZ2V0R2xvYmFsVGhpcygpIHtcbiAgICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBGb3IgU3BpZGVyTW9ua2V5LCBtb2Rlcm4gYnJvd3NlcnMsIGFuZCByZWNlbnQgTm9kZS5qc1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICByZXR1cm4gZ2xvYmFsVGhpcztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpbmRvdyQxICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gRm9yIGRvY3VtZW50IGNvbnRleHQgaW4gYnJvd3NlcnNcbiAgICAgIHJldHVybiB3aW5kb3ckMTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBGb3IgTm9kZS5qc1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICByZXR1cm4gZ2xvYmFsO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBsb2NhdGUgZ2xvYmFsIG9iamVjdCcpO1xuICB9XG5cbiAgLy8gVGhpcyBhdm9pZHMgYSBzaW1wbGUgYGV4cG9ydCBjb25zdGAgYXNzaWdubWVudCBhcyB0aGF0IHdvdWxkIGxlYWQgUm9sbHVwXG4gIC8vIHRvIGNoYW5nZSBnZXRHbG9iYWxUaGlzIGFuZCB1c2UgdGhlIHNhbWUgKGdlbmVyYXRlZCkgdmFyaWFibGUgbmFtZSB0aGVyZS5cbiAgdmFyIGcgPSBnZXRHbG9iYWxUaGlzKCk7XG5cbiAgLy8gVGhlc2Ugb3B0aW9uYWwgZ2xvYmFscyBhcmUgdW5kZWZpbmVkIGluIG9uZSBvciBtb3JlIGVudmlyb25tZW50czpcbiAgLy8gbW9kZXJuIGJyb3dzZXIsIG9sZCBicm93c2VyLCBOb2RlLmpzLCBTcGlkZXJNb25rZXkuXG4gIC8vIENhbGxpbmcgY29kZSBtdXN0IGNoZWNrIHRoZXNlIGZvciB0cnV0aHktbmVzcyBiZWZvcmUgdXNlLlxuICB2YXIgY29uc29sZSQxID0gZy5jb25zb2xlO1xuICB2YXIgc2V0VGltZW91dCQxID0gZy5zZXRUaW1lb3V0O1xuICB2YXIgY2xlYXJUaW1lb3V0ID0gZy5jbGVhclRpbWVvdXQ7XG4gIHZhciBwcm9jZXNzJDEgPSBnLnByb2Nlc3M7XG4gIHZhciB3aW5kb3ckMSA9IGcud2luZG93O1xuICB2YXIgZG9jdW1lbnQgPSB3aW5kb3ckMSAmJiB3aW5kb3ckMS5kb2N1bWVudDtcbiAgdmFyIG5hdmlnYXRvciA9IHdpbmRvdyQxICYmIHdpbmRvdyQxLm5hdmlnYXRvcjtcbiAgdmFyIGxvY2FsU2Vzc2lvblN0b3JhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHggPSAncXVuaXQtdGVzdC1zdHJpbmcnO1xuICAgIHRyeSB7XG4gICAgICBnLnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICBnLnNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICByZXR1cm4gZy5zZXNzaW9uU3RvcmFnZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSgpO1xuXG4gIC8vIEJhc2ljIGZhbGxiYWNrIGZvciBFUzYgTWFwXG4gIC8vIFN1cHBvcnQ6IElFIDktMTAsIFNhZmFyaSA3LCBQaGFudG9tSlM7IE1hcCBpcyB1bmRlZmluZWRcbiAgLy8gU3VwcG9ydDogaU9TIDg7IGBuZXcgTWFwKGl0ZXJhYmxlKWAgaXMgbm90IHN1cHBvcnRlZFxuICAvL1xuICAvLyBGYWxsYmFjayBmb3IgRVM3IE1hcCNrZXlzXG4gIC8vIFN1cHBvcnQ6IElFIDExOyBNYXAja2V5cyBpcyB1bmRlZmluZWRcbiAgdmFyIFN0cmluZ01hcCA9IHR5cGVvZiBnLk1hcCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZy5NYXAucHJvdG90eXBlLmtleXMgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGcuU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIF90eXBlb2YoZy5TeW1ib2wuaXRlcmF0b3IpID09PSAnc3ltYm9sJyA/IGcuTWFwIDogZnVuY3Rpb24gU3RyaW5nTWFwKGlucHV0KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgc3RvcmUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICAgIHRoaXMuaGFzID0gZnVuY3Rpb24gKHN0cktleSkge1xuICAgICAgcmV0dXJuIGhhc093bi5jYWxsKHN0b3JlLCBzdHJLZXkpO1xuICAgIH07XG4gICAgdGhpcy5nZXQgPSBmdW5jdGlvbiAoc3RyS2V5KSB7XG4gICAgICByZXR1cm4gc3RvcmVbc3RyS2V5XTtcbiAgICB9O1xuICAgIHRoaXMuc2V0ID0gZnVuY3Rpb24gKHN0cktleSwgdmFsKSB7XG4gICAgICBpZiAoIWhhc093bi5jYWxsKHN0b3JlLCBzdHJLZXkpKSB7XG4gICAgICAgIHRoaXMuc2l6ZSsrO1xuICAgICAgfVxuICAgICAgc3RvcmVbc3RyS2V5XSA9IHZhbDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgdGhpcy5kZWxldGUgPSBmdW5jdGlvbiAoc3RyS2V5KSB7XG4gICAgICBpZiAoaGFzT3duLmNhbGwoc3RvcmUsIHN0cktleSkpIHtcbiAgICAgICAgZGVsZXRlIHN0b3JlW3N0cktleV07XG4gICAgICAgIHRoaXMuc2l6ZS0tO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICBmb3IgKHZhciBzdHJLZXkgaW4gc3RvcmUpIHtcbiAgICAgICAgY2FsbGJhY2soc3RvcmVbc3RyS2V5XSwgc3RyS2V5KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMua2V5cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhzdG9yZSk7XG4gICAgfTtcbiAgICB0aGlzLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgc3RvcmUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgdGhpcy5zaXplID0gMDtcbiAgICB9O1xuICAgIHRoaXMuc2l6ZSA9IDA7XG4gICAgaWYgKGlucHV0KSB7XG4gICAgICBpbnB1dC5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIHN0cktleSkge1xuICAgICAgICBfdGhpcy5zZXQoc3RyS2V5LCB2YWwpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIEJhc2ljIGZhbGxiYWNrIGZvciBFUzYgU2V0XG4gIC8vIFN1cHBvcnQ6IElFIDExLCBgbmV3IFNldChpdGVyYWJsZSlgIHBhcmFtZXRlciBub3QgeWV0IGltcGxlbWVudGVkXG4gIC8vIFRlc3QgZm9yIFNldCN2YWx1ZXMoKSB3aGljaCBjYW1lIGFmdGVyIFNldChpdGVyYWJsZSkuXG4gIHZhciBTdHJpbmdTZXQgPSB0eXBlb2YgZy5TZXQgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGcuU2V0LnByb3RvdHlwZS52YWx1ZXMgPT09ICdmdW5jdGlvbicgPyBnLlNldCA6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHZhciBzZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xuICAgICAgaW5wdXQuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBzZXRbaXRlbV0gPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBhZGQ6IGZ1bmN0aW9uIGFkZCh2YWx1ZSkge1xuICAgICAgICBzZXRbdmFsdWVdID0gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgaW4gc2V0O1xuICAgICAgfSxcbiAgICAgIGdldCBzaXplKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoc2V0KS5sZW5ndGg7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICB2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuICB2YXIgaGFzT3duJDEgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICB2YXIgcGVyZm9ybWFuY2UgPSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBhdC9jb21wYXQgLS0gQ2hlY2tlZFxuICAgIG5vdzogd2luZG93JDEgJiYgd2luZG93JDEucGVyZm9ybWFuY2UgJiYgd2luZG93JDEucGVyZm9ybWFuY2Uubm93ID8gd2luZG93JDEucGVyZm9ybWFuY2Uubm93LmJpbmQod2luZG93JDEucGVyZm9ybWFuY2UpIDogRGF0ZS5ub3dcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgbmV3IEFycmF5IHdpdGggdGhlIGVsZW1lbnRzIHRoYXQgYXJlIGluIGEgYnV0IG5vdCBpbiBiXG4gIGZ1bmN0aW9uIGRpZmYkMShhLCBiKSB7XG4gICAgcmV0dXJuIGEuZmlsdGVyKGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gYi5pbmRleE9mKGEpID09PSAtMTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgYW4gZWxlbWVudCBleGlzdHMgaW4gYSBnaXZlbiBhcnJheSBvciBub3QuXG4gICAqXG4gICAqIEBtZXRob2QgaW5BcnJheVxuICAgKiBAcGFyYW0ge2FueX0gZWxlbVxuICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgdmFyIGluQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXMgPyBmdW5jdGlvbiAoZWxlbSwgYXJyYXkpIHtcbiAgICByZXR1cm4gYXJyYXkuaW5jbHVkZXMoZWxlbSk7XG4gIH0gOiBmdW5jdGlvbiAoZWxlbSwgYXJyYXkpIHtcbiAgICByZXR1cm4gYXJyYXkuaW5kZXhPZihlbGVtKSAhPT0gLTE7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlY3Vyc2l2ZWx5IGNsb25lIGFuIG9iamVjdCBpbnRvIGEgcGxhaW4gYXJyYXkgb3Igb2JqZWN0LCB0YWtpbmcgb25seSB0aGVcbiAgICogb3duIGVudW1lcmFibGUgcHJvcGVydGllcy5cbiAgICpcbiAgICogQHBhcmFtIHthbnl9IG9ialxuICAgKiBAcGFyYW0ge2Jvb2x9IFthbGxvd0FycmF5PXRydWVdXG4gICAqIEByZXR1cm4ge09iamVjdHxBcnJheX1cbiAgICovXG4gIGZ1bmN0aW9uIG9iamVjdFZhbHVlcyhvYmopIHtcbiAgICB2YXIgYWxsb3dBcnJheSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdHJ1ZTtcbiAgICB2YXIgdmFscyA9IGFsbG93QXJyYXkgJiYgaXMoJ2FycmF5Jywgb2JqKSA/IFtdIDoge307XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKGhhc093biQxLmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIHZhciB2YWwgPSBvYmpba2V5XTtcbiAgICAgICAgdmFsc1trZXldID0gdmFsID09PSBPYmplY3QodmFsKSA/IG9iamVjdFZhbHVlcyh2YWwsIGFsbG93QXJyYXkpIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFscztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWN1cnNpdmVseSBjbG9uZSBhbiBvYmplY3QgaW50byBhIHBsYWluIG9iamVjdCwgdGFraW5nIG9ubHkgdGhlXG4gICAqIHN1YnNldCBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0aWVzIHRoYXQgZXhpc3QgYSBnaXZlbiBtb2RlbC5cbiAgICpcbiAgICogQHBhcmFtIHthbnl9IG9ialxuICAgKiBAcGFyYW0ge2FueX0gbW9kZWxcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgZnVuY3Rpb24gb2JqZWN0VmFsdWVzU3Vic2V0KG9iaiwgbW9kZWwpIHtcbiAgICAvLyBSZXR1cm4gcHJpbWl0aXZlIHZhbHVlcyB1bmNoYW5nZWQgdG8gYXZvaWQgZmFsc2UgcG9zaXRpdmVzIG9yIGNvbmZ1c2luZ1xuICAgIC8vIHJlc3VsdHMgZnJvbSBhc3NlcnQucHJvcENvbnRhaW5zKCkuXG4gICAgLy8gRS5nLiBhbiBhY3R1YWwgbnVsbCBvciBmYWxzZSB3cm9uZ2x5IGVxdWFsaW5nIGFuIGVtcHR5IG9iamVjdCxcbiAgICAvLyBvciBhbiBhY3R1YWwgc3RyaW5nIGJlaW5nIHJlcG9ydGVkIGFzIG9iamVjdCBub3QgbWF0Y2hpbmcgYSBwYXJ0aWFsIG9iamVjdC5cbiAgICBpZiAob2JqICE9PSBPYmplY3Qob2JqKSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICAvLyBVbmxpa2Ugb2JqZWN0VmFsdWVzKCksIHN1YnNldCBhcnJheXMgdG8gYSBwbGFpbiBvYmplY3RzIGFzIHdlbGwuXG4gICAgLy8gVGhpcyBlbmFibGVzIHN1YnNldHRpbmcgWzIwLCAzMF0gd2l0aCB7MTogMzB9LlxuICAgIHZhciBzdWJzZXQgPSB7fTtcbiAgICBmb3IgKHZhciBrZXkgaW4gbW9kZWwpIHtcbiAgICAgIGlmIChoYXNPd24kMS5jYWxsKG1vZGVsLCBrZXkpICYmIGhhc093biQxLmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIHN1YnNldFtrZXldID0gb2JqZWN0VmFsdWVzU3Vic2V0KG9ialtrZXldLCBtb2RlbFtrZXldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN1YnNldDtcbiAgfVxuICBmdW5jdGlvbiBleHRlbmQoYSwgYiwgdW5kZWZPbmx5KSB7XG4gICAgZm9yICh2YXIgcHJvcCBpbiBiKSB7XG4gICAgICBpZiAoaGFzT3duJDEuY2FsbChiLCBwcm9wKSkge1xuICAgICAgICBpZiAoYltwcm9wXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZGVsZXRlIGFbcHJvcF07XG4gICAgICAgIH0gZWxzZSBpZiAoISh1bmRlZk9ubHkgJiYgdHlwZW9mIGFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSkge1xuICAgICAgICAgIGFbcHJvcF0gPSBiW3Byb3BdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9XG4gIGZ1bmN0aW9uIG9iamVjdFR5cGUob2JqKSB7XG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gICAgfVxuXG4gICAgLy8gQ29uc2lkZXI6IHR5cGVvZiBudWxsID09PSBvYmplY3RcbiAgICBpZiAob2JqID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJ251bGwnO1xuICAgIH1cbiAgICB2YXIgbWF0Y2ggPSB0b1N0cmluZy5jYWxsKG9iaikubWF0Y2goL15cXFtvYmplY3RcXHMoLiopXFxdJC8pO1xuICAgIHZhciB0eXBlID0gbWF0Y2ggJiYgbWF0Y2hbMV07XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdOdW1iZXInOlxuICAgICAgICBpZiAoaXNOYU4ob2JqKSkge1xuICAgICAgICAgIHJldHVybiAnbmFuJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ251bWJlcic7XG4gICAgICBjYXNlICdTdHJpbmcnOlxuICAgICAgY2FzZSAnQm9vbGVhbic6XG4gICAgICBjYXNlICdBcnJheSc6XG4gICAgICBjYXNlICdTZXQnOlxuICAgICAgY2FzZSAnTWFwJzpcbiAgICAgIGNhc2UgJ0RhdGUnOlxuICAgICAgY2FzZSAnUmVnRXhwJzpcbiAgICAgIGNhc2UgJ0Z1bmN0aW9uJzpcbiAgICAgIGNhc2UgJ1N5bWJvbCc6XG4gICAgICAgIHJldHVybiB0eXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gX3R5cGVvZihvYmopO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNhZmUgb2JqZWN0IHR5cGUgY2hlY2tpbmdcbiAgZnVuY3Rpb24gaXModHlwZSwgb2JqKSB7XG4gICAgcmV0dXJuIG9iamVjdFR5cGUob2JqKSA9PT0gdHlwZTtcbiAgfVxuXG4gIC8vIEJhc2VkIG9uIEphdmEncyBTdHJpbmcuaGFzaENvZGUsIGEgc2ltcGxlIGJ1dCBub3RcbiAgLy8gcmlnb3JvdXNseSBjb2xsaXNpb24gcmVzaXN0YW50IGhhc2hpbmcgZnVuY3Rpb25cbiAgZnVuY3Rpb24gZ2VuZXJhdGVIYXNoKG1vZHVsZSwgdGVzdE5hbWUpIHtcbiAgICB2YXIgc3RyID0gbW9kdWxlICsgJ1xceDFDJyArIHRlc3ROYW1lO1xuICAgIHZhciBoYXNoID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgaGFzaCA9IChoYXNoIDw8IDUpIC0gaGFzaCArIHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgaGFzaCB8PSAwO1xuICAgIH1cblxuICAgIC8vIENvbnZlcnQgdGhlIHBvc3NpYmx5IG5lZ2F0aXZlIGludGVnZXIgaGFzaCBjb2RlIGludG8gYW4gOCBjaGFyYWN0ZXIgaGV4IHN0cmluZywgd2hpY2ggaXNuJ3RcbiAgICAvLyBzdHJpY3RseSBuZWNlc3NhcnkgYnV0IGluY3JlYXNlcyB1c2VyIHVuZGVyc3RhbmRpbmcgdGhhdCB0aGUgaWQgaXMgYSBTSEEtbGlrZSBoYXNoXG4gICAgdmFyIGhleCA9ICgweDEwMDAwMDAwMCArIGhhc2gpLnRvU3RyaW5nKDE2KTtcbiAgICBpZiAoaGV4Lmxlbmd0aCA8IDgpIHtcbiAgICAgIGhleCA9ICcwMDAwMDAwJyArIGhleDtcbiAgICB9XG4gICAgcmV0dXJuIGhleC5zbGljZSgtOCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYW4gZXJyb3IgaW50byBhIHNpbXBsZSBzdHJpbmcgZm9yIGNvbXBhcmlzb25zLlxuICAgKlxuICAgKiBAcGFyYW0ge0Vycm9yfGFueX0gZXJyb3JcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gZXJyb3JTdHJpbmcoZXJyb3IpIHtcbiAgICAvLyBVc2UgU3RyaW5nKCkgaW5zdGVhZCBvZiB0b1N0cmluZygpIHRvIGhhbmRsZSBub24tb2JqZWN0IHZhbHVlcyBsaWtlIHVuZGVmaW5lZCBvciBudWxsLlxuICAgIHZhciByZXN1bHRFcnJvclN0cmluZyA9IFN0cmluZyhlcnJvcik7XG5cbiAgICAvLyBJZiB0aGUgZXJyb3Igd2Fzbid0IGEgc3ViY2xhc3Mgb2YgRXJyb3IgYnV0IHNvbWV0aGluZyBsaWtlXG4gICAgLy8gYW4gb2JqZWN0IGxpdGVyYWwgd2l0aCBuYW1lIGFuZCBtZXNzYWdlIHByb3BlcnRpZXMuLi5cbiAgICBpZiAocmVzdWx0RXJyb3JTdHJpbmcuc2xpY2UoMCwgNykgPT09ICdbb2JqZWN0Jykge1xuICAgICAgLy8gQmFzZWQgb24gaHR0cHM6Ly9lczUuZ2l0aHViLmlvLyN4MTUuMTEuNC40XG4gICAgICByZXR1cm4gKGVycm9yLm5hbWUgfHwgJ0Vycm9yJykgKyAoZXJyb3IubWVzc2FnZSA/IFwiOiBcIi5jb25jYXQoZXJyb3IubWVzc2FnZSkgOiAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHRFcnJvclN0cmluZztcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZXNjYXBlVGV4dChzdHIpIHtcbiAgICBpZiAoIXN0cikge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIC8vIEJvdGggc2luZ2xlIHF1b3RlcyBhbmQgZG91YmxlIHF1b3RlcyAoZm9yIGF0dHJpYnV0ZXMpXG4gICAgcmV0dXJuICgnJyArIHN0cikucmVwbGFjZSgvWydcIjw+Jl0vZywgZnVuY3Rpb24gKHMpIHtcbiAgICAgIHN3aXRjaCAocykge1xuICAgICAgICBjYXNlIFwiJ1wiOlxuICAgICAgICAgIHJldHVybiAnJiMwMzk7JztcbiAgICAgICAgY2FzZSAnXCInOlxuICAgICAgICAgIHJldHVybiAnJnF1b3Q7JztcbiAgICAgICAgY2FzZSAnPCc6XG4gICAgICAgICAgcmV0dXJuICcmbHQ7JztcbiAgICAgICAgY2FzZSAnPic6XG4gICAgICAgICAgcmV0dXJuICcmZ3Q7JztcbiAgICAgICAgY2FzZSAnJic6XG4gICAgICAgICAgcmV0dXJuICcmYW1wOyc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YXIgQk9YQUJMRV9UWVBFUyA9IG5ldyBTdHJpbmdTZXQoWydib29sZWFuJywgJ251bWJlcicsICdzdHJpbmcnXSk7XG5cbiAgLy8gTWVtb3J5IGZvciBwcmV2aW91c2x5IHNlZW4gY29udGFpbmVycyAob2JqZWN0LCBhcnJheSwgbWFwLCBzZXQpLlxuICAvLyBVc2VkIGZvciByZWN1cnNpb24gZGV0ZWN0aW9uLCBhbmQgdG8gYXZvaWQgcmVwZWF0ZWQgY29tcGFyaXNvbi5cbiAgLy9cbiAgLy8gRWxlbWVudHMgYXJlIHsgYTogdmFsLCBiOiB2YWwgfS5cbiAgdmFyIG1lbW9yeSA9IFtdO1xuICBmdW5jdGlvbiB1c2VTdHJpY3RFcXVhbGl0eShhLCBiKSB7XG4gICAgcmV0dXJuIGEgPT09IGI7XG4gIH1cbiAgZnVuY3Rpb24gdXNlT2JqZWN0VmFsdWVFcXVhbGl0eShhLCBiKSB7XG4gICAgcmV0dXJuIGEgPT09IGIgfHwgYS52YWx1ZU9mKCkgPT09IGIudmFsdWVPZigpO1xuICB9XG4gIGZ1bmN0aW9uIGNvbXBhcmVDb25zdHJ1Y3RvcnMoYSwgYikge1xuICAgIC8vIENvbXBhcmluZyBjb25zdHJ1Y3RvcnMgaXMgbW9yZSBzdHJpY3QgdGhhbiB1c2luZyBgaW5zdGFuY2VvZmBcbiAgICByZXR1cm4gZ2V0Q29uc3RydWN0b3IoYSkgPT09IGdldENvbnN0cnVjdG9yKGIpO1xuICB9XG4gIGZ1bmN0aW9uIGdldENvbnN0cnVjdG9yKG9iaikge1xuICAgIHZhciBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuXG4gICAgLy8gSWYgdGhlIG9iaiBwcm90b3R5cGUgZGVzY2VuZHMgZnJvbSBhIG51bGwgY29uc3RydWN0b3IsIHRyZWF0IGl0XG4gICAgLy8gYXMgYSBudWxsIHByb3RvdHlwZS5cbiAgICAvLyBSZWYgaHR0cHM6Ly9naXRodWIuY29tL3F1bml0anMvcXVuaXQvaXNzdWVzLzg1MVxuICAgIC8vXG4gICAgLy8gQWxsb3cgb2JqZWN0cyB3aXRoIG5vIHByb3RvdHlwZSwgZnJvbSBPYmplY3QuY3JlYXRlKG51bGwpLCB0byBiZSBlcXVpdmFsZW50IHRvXG4gICAgLy8gcGxhaW4gb2JqZWN0cyB0aGF0IGhhdmUgT2JqZWN0IGFzIHRoZWlyIGNvbnN0cnVjdG9yLlxuICAgIHJldHVybiAhcHJvdG8gfHwgcHJvdG8uY29uc3RydWN0b3IgPT09IG51bGwgPyBPYmplY3QgOiBvYmouY29uc3RydWN0b3I7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0UmVnRXhwRmxhZ3MocmVnZXhwKSB7XG4gICAgcmV0dXJuICdmbGFncycgaW4gcmVnZXhwID8gcmVnZXhwLmZsYWdzIDogcmVnZXhwLnRvU3RyaW5nKCkubWF0Y2goL1tnaW11eV0qJC8pWzBdO1xuICB9XG5cbiAgLy8gU3BlY2lhbGlzZWQgY29tcGFyaXNvbnMgYWZ0ZXIgZW50cnlUeXBlQ2FsbGJhY2tzLm9iamVjdCwgYmFzZWQgb24gYG9iamVjdFR5cGUoKWBcbiAgdmFyIG9ialR5cGVDYWxsYmFja3MgPSB7XG4gICAgdW5kZWZpbmVkOiB1c2VTdHJpY3RFcXVhbGl0eSxcbiAgICBudWxsOiB1c2VTdHJpY3RFcXVhbGl0eSxcbiAgICAvLyBIYW5kbGUgYm94ZWQgYm9vbGVhblxuICAgIGJvb2xlYW46IHVzZU9iamVjdFZhbHVlRXF1YWxpdHksXG4gICAgbnVtYmVyOiBmdW5jdGlvbiBudW1iZXIoYSwgYikge1xuICAgICAgLy8gSGFuZGxlIE5hTiBhbmQgYm94ZWQgbnVtYmVyXG4gICAgICByZXR1cm4gYSA9PT0gYiB8fCBhLnZhbHVlT2YoKSA9PT0gYi52YWx1ZU9mKCkgfHwgaXNOYU4oYS52YWx1ZU9mKCkpICYmIGlzTmFOKGIudmFsdWVPZigpKTtcbiAgICB9LFxuICAgIC8vIEhhbmRsZSBib3hlZCBzdHJpbmdcbiAgICBzdHJpbmc6IHVzZU9iamVjdFZhbHVlRXF1YWxpdHksXG4gICAgc3ltYm9sOiB1c2VTdHJpY3RFcXVhbGl0eSxcbiAgICBkYXRlOiB1c2VPYmplY3RWYWx1ZUVxdWFsaXR5LFxuICAgIG5hbjogZnVuY3Rpb24gbmFuKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICByZWdleHA6IGZ1bmN0aW9uIHJlZ2V4cChhLCBiKSB7XG4gICAgICByZXR1cm4gYS5zb3VyY2UgPT09IGIuc291cmNlICYmXG4gICAgICAvLyBJbmNsdWRlIGZsYWdzIGluIHRoZSBjb21wYXJpc29uXG4gICAgICBnZXRSZWdFeHBGbGFncyhhKSA9PT0gZ2V0UmVnRXhwRmxhZ3MoYik7XG4gICAgfSxcbiAgICAvLyBpZGVudGljYWwgcmVmZXJlbmNlIG9ubHlcbiAgICBmdW5jdGlvbjogdXNlU3RyaWN0RXF1YWxpdHksXG4gICAgYXJyYXk6IGZ1bmN0aW9uIGFycmF5KGEsIGIpIHtcbiAgICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcbiAgICAgICAgLy8gU2FmZSBhbmQgZmFzdGVyXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIXR5cGVFcXVpdihhW2ldLCBiW2ldKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICAvLyBEZWZpbmUgc2V0cyBhIGFuZCBiIHRvIGJlIGVxdWl2YWxlbnQgaWYgZm9yIGVhY2ggZWxlbWVudCBhVmFsIGluIGEsIHRoZXJlXG4gICAgLy8gaXMgc29tZSBlbGVtZW50IGJWYWwgaW4gYiBzdWNoIHRoYXQgYVZhbCBhbmQgYlZhbCBhcmUgZXF1aXZhbGVudC4gRWxlbWVudFxuICAgIC8vIHJlcGV0aXRpb25zIGFyZSBub3QgY291bnRlZCwgc28gdGhlc2UgYXJlIGVxdWl2YWxlbnQ6XG4gICAgLy8gYSA9IG5ldyBTZXQoIFsgWD17fSwgWT1bXSwgWSBdICk7XG4gICAgLy8gYiA9IG5ldyBTZXQoIFsgWSwgWCwgWCBdICk7XG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoYSwgYikge1xuICAgICAgaWYgKGEuc2l6ZSAhPT0gYi5zaXplKSB7XG4gICAgICAgIC8vIFRoaXMgb3B0aW1pemF0aW9uIGhhcyBjZXJ0YWluIHF1aXJrcyBiZWNhdXNlIG9mIHRoZSBsYWNrIG9mXG4gICAgICAgIC8vIHJlcGV0aXRpb24gY291bnRpbmcuIEZvciBpbnN0YW5jZSwgYWRkaW5nIHRoZSBzYW1lXG4gICAgICAgIC8vIChyZWZlcmVuY2UtaWRlbnRpY2FsKSBlbGVtZW50IHRvIHR3byBlcXVpdmFsZW50IHNldHMgY2FuXG4gICAgICAgIC8vIG1ha2UgdGhlbSBub24tZXF1aXZhbGVudC5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgdmFyIG91dGVyRXEgPSB0cnVlO1xuICAgICAgYS5mb3JFYWNoKGZ1bmN0aW9uIChhVmFsKSB7XG4gICAgICAgIC8vIFNob3J0LWNpcmN1aXQgaWYgdGhlIHJlc3VsdCBpcyBhbHJlYWR5IGtub3duLiAoVXNpbmcgZm9yLi4ub2ZcbiAgICAgICAgLy8gd2l0aCBhIGJyZWFrIGNsYXVzZSB3b3VsZCBiZSBjbGVhbmVyIGhlcmUsIGJ1dCBpdCB3b3VsZCBjYXVzZVxuICAgICAgICAvLyBhIHN5bnRheCBlcnJvciBvbiBvbGRlciBKYXZhU2NyaXB0IGltcGxlbWVudGF0aW9ucyBldmVuIGlmXG4gICAgICAgIC8vIFNldCBpcyB1bnVzZWQpXG4gICAgICAgIGlmICghb3V0ZXJFcSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5uZXJFcSA9IGZhbHNlO1xuICAgICAgICBiLmZvckVhY2goZnVuY3Rpb24gKGJWYWwpIHtcbiAgICAgICAgICAvLyBMaWtld2lzZSwgc2hvcnQtY2lyY3VpdCBpZiB0aGUgcmVzdWx0IGlzIGFscmVhZHkga25vd25cbiAgICAgICAgICBpZiAoaW5uZXJFcSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFN3YXAgb3V0IHRoZSBnbG9iYWwgbWVtb3J5LCBhcyBuZXN0ZWQgdHlwZUVxdWl2KCkgd291bGQgY2xvYmJlciBpdFxuICAgICAgICAgIHZhciBvcmlnaW5hbE1lbW9yeSA9IG1lbW9yeTtcbiAgICAgICAgICBtZW1vcnkgPSBbXTtcbiAgICAgICAgICBpZiAodHlwZUVxdWl2KGJWYWwsIGFWYWwpKSB7XG4gICAgICAgICAgICBpbm5lckVxID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gUmVzdG9yZVxuICAgICAgICAgIG1lbW9yeSA9IG9yaWdpbmFsTWVtb3J5O1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFpbm5lckVxKSB7XG4gICAgICAgICAgb3V0ZXJFcSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBvdXRlckVxO1xuICAgIH0sXG4gICAgLy8gRGVmaW5lIG1hcHMgYSBhbmQgYiB0byBiZSBlcXVpdmFsZW50IGlmIGZvciBlYWNoIGtleS12YWx1ZSBwYWlyIChhS2V5LCBhVmFsKVxuICAgIC8vIGluIGEsIHRoZXJlIGlzIHNvbWUga2V5LXZhbHVlIHBhaXIgKGJLZXksIGJWYWwpIGluIGIgc3VjaCB0aGF0XG4gICAgLy8gWyBhS2V5LCBhVmFsIF0gYW5kIFsgYktleSwgYlZhbCBdIGFyZSBlcXVpdmFsZW50LiBLZXkgcmVwZXRpdGlvbnMgYXJlIG5vdFxuICAgIC8vIGNvdW50ZWQsIHNvIHRoZXNlIGFyZSBlcXVpdmFsZW50OlxuICAgIC8vIGEgPSBuZXcgTWFwKCBbIFsge30sIDEgXSwgWyB7fSwgMSBdLCBbIFtdLCAxIF0gXSApO1xuICAgIC8vIGIgPSBuZXcgTWFwKCBbIFsge30sIDEgXSwgWyBbXSwgMSBdLCBbIFtdLCAxIF0gXSApO1xuICAgIG1hcDogZnVuY3Rpb24gbWFwKGEsIGIpIHtcbiAgICAgIGlmIChhLnNpemUgIT09IGIuc2l6ZSkge1xuICAgICAgICAvLyBUaGlzIG9wdGltaXphdGlvbiBoYXMgY2VydGFpbiBxdWlya3MgYmVjYXVzZSBvZiB0aGUgbGFjayBvZlxuICAgICAgICAvLyByZXBldGl0aW9uIGNvdW50aW5nLiBGb3IgaW5zdGFuY2UsIGFkZGluZyB0aGUgc2FtZVxuICAgICAgICAvLyAocmVmZXJlbmNlLWlkZW50aWNhbCkga2V5LXZhbHVlIHBhaXIgdG8gdHdvIGVxdWl2YWxlbnQgbWFwc1xuICAgICAgICAvLyBjYW4gbWFrZSB0aGVtIG5vbi1lcXVpdmFsZW50LlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB2YXIgb3V0ZXJFcSA9IHRydWU7XG4gICAgICBhLmZvckVhY2goZnVuY3Rpb24gKGFWYWwsIGFLZXkpIHtcbiAgICAgICAgLy8gU2hvcnQtY2lyY3VpdCBpZiB0aGUgcmVzdWx0IGlzIGFscmVhZHkga25vd24uIChVc2luZyBmb3IuLi5vZlxuICAgICAgICAvLyB3aXRoIGEgYnJlYWsgY2xhdXNlIHdvdWxkIGJlIGNsZWFuZXIgaGVyZSwgYnV0IGl0IHdvdWxkIGNhdXNlXG4gICAgICAgIC8vIGEgc3ludGF4IGVycm9yIG9uIG9sZGVyIEphdmFTY3JpcHQgaW1wbGVtZW50YXRpb25zIGV2ZW4gaWZcbiAgICAgICAgLy8gTWFwIGlzIHVudXNlZClcbiAgICAgICAgaWYgKCFvdXRlckVxKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbm5lckVxID0gZmFsc2U7XG4gICAgICAgIGIuZm9yRWFjaChmdW5jdGlvbiAoYlZhbCwgYktleSkge1xuICAgICAgICAgIC8vIExpa2V3aXNlLCBzaG9ydC1jaXJjdWl0IGlmIHRoZSByZXN1bHQgaXMgYWxyZWFkeSBrbm93blxuICAgICAgICAgIGlmIChpbm5lckVxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU3dhcCBvdXQgdGhlIGdsb2JhbCBtZW1vcnksIGFzIG5lc3RlZCB0eXBlRXF1aXYoKSB3b3VsZCBjbG9iYmVyIGl0XG4gICAgICAgICAgdmFyIG9yaWdpbmFsTWVtb3J5ID0gbWVtb3J5O1xuICAgICAgICAgIG1lbW9yeSA9IFtdO1xuICAgICAgICAgIGlmIChvYmpUeXBlQ2FsbGJhY2tzLmFycmF5KFtiVmFsLCBiS2V5XSwgW2FWYWwsIGFLZXldKSkge1xuICAgICAgICAgICAgaW5uZXJFcSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFJlc3RvcmVcbiAgICAgICAgICBtZW1vcnkgPSBvcmlnaW5hbE1lbW9yeTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghaW5uZXJFcSkge1xuICAgICAgICAgIG91dGVyRXEgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gb3V0ZXJFcTtcbiAgICB9XG4gIH07XG5cbiAgLy8gRW50cnkgcG9pbnRzIGZyb20gdHlwZUVxdWl2LCBiYXNlZCBvbiBgdHlwZW9mYFxuICB2YXIgZW50cnlUeXBlQ2FsbGJhY2tzID0ge1xuICAgIHVuZGVmaW5lZDogdXNlU3RyaWN0RXF1YWxpdHksXG4gICAgbnVsbDogdXNlU3RyaWN0RXF1YWxpdHksXG4gICAgYm9vbGVhbjogdXNlU3RyaWN0RXF1YWxpdHksXG4gICAgbnVtYmVyOiBmdW5jdGlvbiBudW1iZXIoYSwgYikge1xuICAgICAgLy8gSGFuZGxlIE5hTlxuICAgICAgcmV0dXJuIGEgPT09IGIgfHwgaXNOYU4oYSkgJiYgaXNOYU4oYik7XG4gICAgfSxcbiAgICBzdHJpbmc6IHVzZVN0cmljdEVxdWFsaXR5LFxuICAgIHN5bWJvbDogdXNlU3RyaWN0RXF1YWxpdHksXG4gICAgZnVuY3Rpb246IHVzZVN0cmljdEVxdWFsaXR5LFxuICAgIG9iamVjdDogZnVuY3Rpb24gb2JqZWN0KGEsIGIpIHtcbiAgICAgIC8vIEhhbmRsZSBtZW1vcnkgKHNraXAgcmVjdXJzaW9uKVxuICAgICAgaWYgKG1lbW9yeS5zb21lKGZ1bmN0aW9uIChwYWlyKSB7XG4gICAgICAgIHJldHVybiBwYWlyLmEgPT09IGEgJiYgcGFpci5iID09PSBiO1xuICAgICAgfSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBtZW1vcnkucHVzaCh7XG4gICAgICAgIGE6IGEsXG4gICAgICAgIGI6IGJcbiAgICAgIH0pO1xuICAgICAgdmFyIGFPYmpUeXBlID0gb2JqZWN0VHlwZShhKTtcbiAgICAgIHZhciBiT2JqVHlwZSA9IG9iamVjdFR5cGUoYik7XG4gICAgICBpZiAoYU9ialR5cGUgIT09ICdvYmplY3QnIHx8IGJPYmpUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAvLyBIYW5kbGUgbGl0ZXJhbCBgbnVsbGBcbiAgICAgICAgLy8gSGFuZGxlOiBBcnJheSwgTWFwL1NldCwgRGF0ZSwgUmVneHAvRnVuY3Rpb24sIGJveGVkIHByaW1pdGl2ZXNcbiAgICAgICAgcmV0dXJuIGFPYmpUeXBlID09PSBiT2JqVHlwZSAmJiBvYmpUeXBlQ2FsbGJhY2tzW2FPYmpUeXBlXShhLCBiKTtcbiAgICAgIH1cblxuICAgICAgLy8gTk9URTogTGl0ZXJhbCBudWxsIG11c3Qgbm90IG1ha2UgaXQgaGVyZSBhcyBpdCB3b3VsZCB0aHJvd1xuICAgICAgaWYgKGNvbXBhcmVDb25zdHJ1Y3RvcnMoYSwgYikgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHZhciBhUHJvcGVydGllcyA9IFtdO1xuICAgICAgdmFyIGJQcm9wZXJ0aWVzID0gW107XG5cbiAgICAgIC8vIEJlIHN0cmljdCBhbmQgZ28gZGVlcCwgbm8gZmlsdGVyaW5nIHdpdGggaGFzT3duUHJvcGVydHkuXG4gICAgICBmb3IgKHZhciBpIGluIGEpIHtcbiAgICAgICAgLy8gQ29sbGVjdCBhJ3MgcHJvcGVydGllc1xuICAgICAgICBhUHJvcGVydGllcy5wdXNoKGkpO1xuXG4gICAgICAgIC8vIFNraXAgT09QIG1ldGhvZHMgdGhhdCBsb29rIHRoZSBzYW1lXG4gICAgICAgIGlmIChhLmNvbnN0cnVjdG9yICE9PSBPYmplY3QgJiYgdHlwZW9mIGEuY29uc3RydWN0b3IgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBhW2ldID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBiW2ldID09PSAnZnVuY3Rpb24nICYmIGFbaV0udG9TdHJpbmcoKSA9PT0gYltpXS50b1N0cmluZygpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0eXBlRXF1aXYoYVtpXSwgYltpXSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAodmFyIF9pIGluIGIpIHtcbiAgICAgICAgLy8gQ29sbGVjdCBiJ3MgcHJvcGVydGllc1xuICAgICAgICBiUHJvcGVydGllcy5wdXNoKF9pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmpUeXBlQ2FsbGJhY2tzLmFycmF5KGFQcm9wZXJ0aWVzLnNvcnQoKSwgYlByb3BlcnRpZXMuc29ydCgpKTtcbiAgICB9XG4gIH07XG4gIGZ1bmN0aW9uIHR5cGVFcXVpdihhLCBiKSB7XG4gICAgLy8gT3B0aW1pemF0aW9uOiBPbmx5IHBlcmZvcm0gdHlwZS1zcGVjaWZpYyBjb21wYXJpc29uIHdoZW4gcGFpcnMgYXJlIG5vdCBzdHJpY3RseSBlcXVhbC5cbiAgICBpZiAoYSA9PT0gYikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHZhciBhVHlwZSA9IF90eXBlb2YoYSk7XG4gICAgdmFyIGJUeXBlID0gX3R5cGVvZihiKTtcbiAgICBpZiAoYVR5cGUgIT09IGJUeXBlKSB7XG4gICAgICAvLyBTdXBwb3J0IGNvbXBhcmluZyBwcmltaXRpdmUgdG8gYm94ZWQgcHJpbWl0aXZlc1xuICAgICAgLy8gVHJ5IGFnYWluIGFmdGVyIHBvc3NpYmx5IHVud3JhcHBpbmcgb25lXG4gICAgICByZXR1cm4gKGFUeXBlID09PSAnb2JqZWN0JyAmJiBCT1hBQkxFX1RZUEVTLmhhcyhvYmplY3RUeXBlKGEpKSA/IGEudmFsdWVPZigpIDogYSkgPT09IChiVHlwZSA9PT0gJ29iamVjdCcgJiYgQk9YQUJMRV9UWVBFUy5oYXMob2JqZWN0VHlwZShiKSkgPyBiLnZhbHVlT2YoKSA6IGIpO1xuICAgIH1cbiAgICByZXR1cm4gZW50cnlUeXBlQ2FsbGJhY2tzW2FUeXBlXShhLCBiKTtcbiAgfVxuICBmdW5jdGlvbiBpbm5lckVxdWl2KGEsIGIpIHtcbiAgICB2YXIgcmVzID0gdHlwZUVxdWl2KGEsIGIpO1xuICAgIC8vIFJlbGVhc2UgYW55IHJldGFpbmVkIG9iamVjdHMgYW5kIHJlc2V0IHJlY3Vyc2lvbiBkZXRlY3Rpb24gZm9yIG5leHQgY2FsbFxuICAgIG1lbW9yeSA9IFtdO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvKipcbiAgICogVGVzdCBhbnkgdHdvIHR5cGVzIG9mIEphdmFTY3JpcHQgdmFsdWVzIGZvciBlcXVhbGl0eS5cbiAgICpcbiAgICogQGF1dGhvciBQaGlsaXBwZSBSYXRoXHUwMEU5IDxwcmF0aGVAZ21haWwuY29tPlxuICAgKiBAYXV0aG9yIERhdmlkIENoYW4gPGRhdmlkQHRyb2kub3JnPlxuICAgKi9cbiAgZnVuY3Rpb24gZXF1aXYoYSwgYikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICByZXR1cm4gYSA9PT0gYiB8fCBpbm5lckVxdWl2KGEsIGIpO1xuICAgIH1cblxuICAgIC8vIEdpdmVuIDAgb3IgMSBhcmd1bWVudHMsIGp1c3QgcmV0dXJuIHRydWUgKG5vdGhpbmcgdG8gY29tcGFyZSkuXG4gICAgLy8gR2l2ZW4gKEEsQixDLEQpIGNvbXBhcmUgQyxEIHRoZW4gQixDIHRoZW4gQSxCLlxuICAgIHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgd2hpbGUgKGkgPiAwKSB7XG4gICAgICBpZiAoIWlubmVyRXF1aXYoYXJndW1lbnRzW2kgLSAxXSwgYXJndW1lbnRzW2ldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpLS07XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmZpZyBvYmplY3Q6IE1haW50YWluIGludGVybmFsIHN0YXRlXG4gICAqIExhdGVyIGV4cG9zZWQgYXMgUVVuaXQuY29uZmlnXG4gICAqIGBjb25maWdgIGluaXRpYWxpemVkIGF0IHRvcCBvZiBzY29wZVxuICAgKi9cbiAgdmFyIGNvbmZpZyA9IHtcbiAgICAvLyBIVE1MIFJlcG9ydGVyOiBNb2RpZnkgZG9jdW1lbnQudGl0bGUgd2hlbiBzdWl0ZSBpcyBkb25lXG4gICAgYWx0ZXJ0aXRsZTogdHJ1ZSxcbiAgICAvLyBUT0RPOiBNb3ZlIGhlcmUgZnJvbSAvc3JjL2NvcmUuanMgaW4gUVVuaXQgMy5cbiAgICAvLyBhdXRvc3RhcnQ6IHRydWUsXG5cbiAgICAvLyBIVE1MIFJlcG9ydGVyOiBjb2xsYXBzZSBldmVyeSB0ZXN0IGV4Y2VwdCB0aGUgZmlyc3QgZmFpbGluZyB0ZXN0XG4gICAgLy8gSWYgZmFsc2UsIGFsbCBmYWlsaW5nIHRlc3RzIHdpbGwgYmUgZXhwYW5kZWRcbiAgICBjb2xsYXBzZTogdHJ1ZSxcbiAgICBjb3VudFN0ZXBzQXNPbmU6IGZhbHNlLFxuICAgIC8vIFRPRE86IE1ha2UgZXhwbGljaXQgaW4gUVVuaXQgMy5cbiAgICAvLyBjdXJyZW50OiB1bmRlZmluZWQsXG5cbiAgICAvLyB3aGV0aGVyIG9yIG5vdCB0byBmYWlsIHdoZW4gdGhlcmUgYXJlIHplcm8gdGVzdHNcbiAgICAvLyBkZWZhdWx0cyB0byBgdHJ1ZWBcbiAgICBmYWlsT25aZXJvVGVzdHM6IHRydWUsXG4gICAgLy8gU2VsZWN0IGJ5IHBhdHRlcm4gb3IgY2FzZS1pbnNlbnNpdGl2ZSBzdWJzdHJpbmcgbWF0Y2ggYWdhaW5zdCBcIm1vZHVsZU5hbWU6IHRlc3ROYW1lXCJcbiAgICBmaWx0ZXI6IHVuZGVmaW5lZCxcbiAgICB0ZXN0RmlsdGVyOiBudWxsLFxuICAgIC8vIFRPRE86IE1ha2UgZXhwbGljaXQgaW4gUVVuaXQgMy5cbiAgICAvLyBmaXh0dXJlOiB1bmRlZmluZWQsXG5cbiAgICAvLyBEZXB0aCB1cC10byB3aGljaCBvYmplY3Qgd2lsbCBiZSBkdW1wZWRcbiAgICBtYXhEZXB0aDogNSxcbiAgICAvLyBTZWxlY3QgY2FzZS1pbnNlbnNpdGl2ZSBtYXRjaCBvZiB0aGUgbW9kdWxlIG5hbWVcbiAgICBtb2R1bGU6IHVuZGVmaW5lZCxcbiAgICAvLyBIVE1MIFJlcG9ydGVyOiBTZWxlY3QgbW9kdWxlL3Rlc3QgYnkgYXJyYXkgb2YgaW50ZXJuYWwgSURzXG4gICAgbW9kdWxlSWQ6IHVuZGVmaW5lZCxcbiAgICAvLyBCeSBkZWZhdWx0LCBydW4gcHJldmlvdXNseSBmYWlsZWQgdGVzdHMgZmlyc3RcbiAgICAvLyB2ZXJ5IHVzZWZ1bCBpbiBjb21iaW5hdGlvbiB3aXRoIFwiSGlkZSBwYXNzZWQgdGVzdHNcIiBjaGVja2VkXG4gICAgcmVvcmRlcjogdHJ1ZSxcbiAgICByZXBvcnRlcnM6IHt9LFxuICAgIC8vIFdoZW4gZW5hYmxlZCwgYWxsIHRlc3RzIG11c3QgY2FsbCBleHBlY3QoKVxuICAgIHJlcXVpcmVFeHBlY3RzOiBmYWxzZSxcbiAgICAvLyBCeSBkZWZhdWx0LCBzY3JvbGwgdG8gdG9wIG9mIHRoZSBwYWdlIHdoZW4gc3VpdGUgaXMgZG9uZVxuICAgIHNjcm9sbHRvcDogdHJ1ZSxcbiAgICAvLyBUT0RPOiBNYWtlIGV4cGxpY2l0IGluIFFVbml0IDMuXG4gICAgLy8gc2VlZDogdW5kZWZpbmVkLFxuXG4gICAgLy8gVGhlIHN0b3JhZ2UgbW9kdWxlIHRvIHVzZSBmb3IgcmVvcmRlcmluZyB0ZXN0c1xuICAgIHN0b3JhZ2U6IGxvY2FsU2Vzc2lvblN0b3JhZ2UsXG4gICAgdGVzdElkOiB1bmRlZmluZWQsXG4gICAgLy8gVGhlIHVwZGF0ZVJhdGUgY29udHJvbHMgaG93IG9mdGVuIFFVbml0IHdpbGwgeWllbGQgdGhlIG1haW4gdGhyZWFkXG4gICAgLy8gYmV0d2VlbiB0ZXN0cy4gVGhpcyBpcyBtYWlubHkgZm9yIHRoZSBiZW5lZml0IG9mIHRoZSBIVE1MIFJlcG9ydGVyLFxuICAgIC8vIHNvIHRoYXQgdGhlIGJyb3dzZXIgY2FuIHZpc3VhbGx5IHBhaW50IERPTSBjaGFuZ2VzIHdpdGggdGVzdCByZXN1bHRzLlxuICAgIC8vIFRoaXMgYWxzbyBoZWxwcyBhdm9pZCBjYXVzaW5nIGJyb3dzZXJzIHRvIHByb21wdCBhIHdhcm5pbmcgYWJvdXRcbiAgICAvLyBsb25nLXJ1bm5pbmcgc2NyaXB0cy5cbiAgICAvLyBUT0RPOiBNb3ZlIGhlcmUgZnJvbSAvc3JjL2NvcmUuanMgaW4gUVVuaXQgMy5cbiAgICAvLyB1cGRhdGVSYXRlOiAxMDAwLFxuXG4gICAgLy8gSFRNTCBSZXBvcnRlcjogTGlzdCBvZiBVUkwgcGFyYW1ldGVycyB0aGF0IGFyZSBnaXZlbiB2aXN1YWwgY29udHJvbHNcbiAgICB1cmxDb25maWc6IFtdLFxuICAgIC8vIEludGVybmFsOiBUaGUgZmlyc3QgdW5uYW1lZCBtb2R1bGVcbiAgICAvL1xuICAgIC8vIEJ5IGJlaW5nIGRlZmluZWQgYXMgdGhlIGludGlhbCB2YWx1ZSBmb3IgY3VycmVudE1vZHVsZSwgaXQgaXMgdGhlXG4gICAgLy8gcmVjZXB0YWNsZSBhbmQgaW1wbGllZCBwYXJlbnQgZm9yIGFueSBnbG9iYWwgdGVzdHMuIEl0IGlzIGFzIGlmIHdlXG4gICAgLy8gY2FsbGVkIGBRVW5pdC5tb2R1bGUoIFwiXCIgKTtgIGJlZm9yZSBhbnkgb3RoZXIgdGVzdHMgd2VyZSBkZWZpbmVkLlxuICAgIC8vXG4gICAgLy8gSWYgd2UgcmVhY2ggYmVnaW4oKSBhbmQgbm8gdGVzdHMgd2VyZSBwdXQgaW4gaXQsIHdlIGRlcXVldWUgaXQgYXMgaWYgaXRcbiAgICAvLyBuZXZlciBleGlzdGVkLCBhbmQgaW4gdGhhdCBjYXNlIG5ldmVyIGV4cG9zZSBpdCB0byB0aGUgZXZlbnRzIGFuZFxuICAgIC8vIGNhbGxiYWNrcyBBUEkuXG4gICAgLy9cbiAgICAvLyBXaGVuIGdsb2JhbCB0ZXN0cyBhcmUgZGVmaW5lZCwgdGhlbiB0aGlzIHVubmFtZWQgbW9kdWxlIHdpbGwgZXhlY3V0ZVxuICAgIC8vIGFzIGFueSBvdGhlciBtb2R1bGUsIGluY2x1ZGluZyBtb2R1bGVTdGFydC9tb2R1bGVEb25lIGV2ZW50cyBldGMuXG4gICAgLy9cbiAgICAvLyBTaW5jZSB0aGlzIG1vZHVsZSBpc24ndCBleHBsaWNpdGx5IGNyZWF0ZWQgYnkgdGhlIHVzZXIsIHRoZXkgaGF2ZSBub1xuICAgIC8vIGFjY2VzcyB0byBhZGQgaG9va3MgZm9yIGl0LiBUaGUgaG9va3Mgb2JqZWN0IGlzIGRlZmluZWQgdG8gY29tcGx5XG4gICAgLy8gd2l0aCBpbnRlcm5hbCBleHBlY3RhdGlvbnMgb2YgdGVzdC5qcywgYnV0IHRoZXkgd2lsbCBiZSBlbXB0eS5cbiAgICAvLyBUbyBhcHBseSBob29rcywgcGxhY2UgdGVzdHMgZXhwbGljaXRseSBpbiBhIFFVbml0Lm1vZHVsZSgpLCBhbmQgdXNlXG4gICAgLy8gaXRzIGhvb2tzIGFjY29yZGluZ2x5LlxuICAgIC8vXG4gICAgLy8gRm9yIGdsb2JhbCBob29rcyB0aGF0IGFwcGx5IHRvIGFsbCB0ZXN0cyBhbmQgYWxsIG1vZHVsZXMsIHVzZSBRVW5pdC5ob29rcy5cbiAgICAvL1xuICAgIC8vIE5PVEU6IFRoaXMgaXMgKm5vdCogYSBcImdsb2JhbCBtb2R1bGVcIi4gSXQgaXMgbm90IGFuIGFuY2VzdG9yIG9mIGFsbCBtb2R1bGVzXG4gICAgLy8gYW5kIHRlc3RzLiBJdCBpcyBtZXJlbHkgdGhlIHBhcmVudCBmb3IgYW55IHRlc3RzIGRlZmluZWQgZ2xvYmFsbHksXG4gICAgLy8gYmVmb3JlIHRoZSBmaXJzdCBRVW5pdC5tb2R1bGUoKS4gQXMgc3VjaCwgdGhlIGV2ZW50cyBmb3IgdGhpcyB1bm5hbWVkXG4gICAgLy8gbW9kdWxlIHdpbGwgZmlyZSBhcyBub3JtYWwsIHJpZ2h0IGFmdGVyIGl0cyBsYXN0IHRlc3QsIGFuZCAqbm90KiBhdFxuICAgIC8vIHRoZSBlbmQgb2YgdGhlIHRlc3QgcnVuLlxuICAgIC8vXG4gICAgLy8gTk9URTogVGhpcyBhbHNvIHNob3VsZCBwcm9iYWJseSBhbHNvIG5vdCBiZWNvbWUgYSBnbG9iYWwgbW9kdWxlLCB1bmxlc3NcbiAgICAvLyB3ZSBrZWVwIGl0IG91dCBvZiB0aGUgcHVibGljIEFQSS4gRm9yIGV4YW1wbGUsIGl0IHdvdWxkIGxpa2VseSBub3RcbiAgICAvLyBpbXByb3ZlIHRoZSB1c2VyIGludGVyZmFjZSBhbmQgcGx1Z2luIGJlaGF2aW91ciBpZiBhbGwgbW9kdWxlcyBiZWNhbWVcbiAgICAvLyB3cmFwcGVkIGJldHdlZW4gdGhlIHN0YXJ0IGFuZCBlbmQgZXZlbnRzIG9mIHRoaXMgbW9kdWxlLCBhbmQgdGh1c1xuICAgIC8vIG5lZWRsZXNzbHkgYWRkIGluZGVudGF0aW9uLCBpbmRpcmVjdGlvbiwgb3Igb3RoZXIgdmlzaWJsZSBub2lzZS5cbiAgICAvLyBVbml0IHRlc3RzIGZvciB0aGUgY2FsbGJhY2tzIEFQSSB3b3VsZCBkZXRlY3QgdGhhdCBhcyBhIHJlZ3Jlc3Npb24uXG4gICAgY3VycmVudE1vZHVsZToge1xuICAgICAgbmFtZTogJycsXG4gICAgICB0ZXN0czogW10sXG4gICAgICBjaGlsZE1vZHVsZXM6IFtdLFxuICAgICAgdGVzdHNSdW46IDAsXG4gICAgICB0ZXN0c0lnbm9yZWQ6IDAsXG4gICAgICBob29rczoge1xuICAgICAgICBiZWZvcmU6IFtdLFxuICAgICAgICBiZWZvcmVFYWNoOiBbXSxcbiAgICAgICAgYWZ0ZXJFYWNoOiBbXSxcbiAgICAgICAgYWZ0ZXI6IFtdXG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBJbnRlcm5hbDogRXhwb3NlZCB0byBtYWtlIHJlc2V0cyBlYXNpZXJcbiAgICAvLyBSZWYgaHR0cHM6Ly9naXRodWIuY29tL3F1bml0anMvcXVuaXQvcHVsbC8xNTk4XG4gICAgZ2xvYmFsSG9va3M6IHt9LFxuICAgIC8vIEludGVybmFsOiBQcm9jZXNzaW5nUXVldWUgc2luZ2xldG9uLCBjcmVhdGVkIGluIC9zcmMvY29yZS5qc1xuICAgIHBxOiBudWxsLFxuICAgIC8vIEludGVybmFsOiBDcmVhdGVkIGluIC9zcmMvY29yZS5qc1xuICAgIC8vIFRPRE86IE1vdmUgZGVmaW5pdGlvbnMgaGVyZSBpbiBRVW5pdCAzLjAuXG4gICAgLy8gc3RhcnRlZDogMCxcblxuICAgIC8vIEludGVybmFsIHN0YXRlXG4gICAgX2V2ZW50X2xpc3RlbmVyczogT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICBfZXZlbnRfbWVtb3J5OiB7fSxcbiAgICBfZGVwcmVjYXRlZF90aW1lb3V0X3Nob3duOiBmYWxzZSxcbiAgICBfZGVwcmVjYXRlZF9jb3VudEVhY2hTdGVwX3Nob3duOiBmYWxzZSxcbiAgICBibG9ja2luZzogdHJ1ZSxcbiAgICBjYWxsYmFja3M6IHt9LFxuICAgIG1vZHVsZXM6IFtdLFxuICAgIHF1ZXVlOiBbXSxcbiAgICBzdGF0czoge1xuICAgICAgYWxsOiAwLFxuICAgICAgYmFkOiAwLFxuICAgICAgdGVzdENvdW50OiAwXG4gICAgfVxuICB9O1xuICBmdW5jdGlvbiByZWFkRmxhdFByZWNvbmZpZ0Jvb2xlYW4odmFsLCBkZXN0KSB7XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdib29sZWFuJyB8fCB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyAmJiB2YWwgIT09ICcnKSB7XG4gICAgICBjb25maWdbZGVzdF0gPSB2YWwgPT09IHRydWUgfHwgdmFsID09PSAndHJ1ZSc7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHJlYWRGbGF0UHJlY29uZmlnTnVtYmVyKHZhbCwgZGVzdCkge1xuICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyAmJiAvXlswLTldKyQvLnRlc3QodmFsKSkge1xuICAgICAgY29uZmlnW2Rlc3RdID0gK3ZhbDtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gcmVhZEZsYXRQcmVjb25maWdTdHJpbmcodmFsLCBkZXN0KSB7XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnICYmIHZhbCAhPT0gJycpIHtcbiAgICAgIGNvbmZpZ1tkZXN0XSA9IHZhbDtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gcmVhZEZsYXRQcmVjb25maWdTdHJpbmdPckJvb2xlYW4odmFsLCBkZXN0KSB7XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdib29sZWFuJyB8fCB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyAmJiB2YWwgIT09ICcnKSB7XG4gICAgICBjb25maWdbZGVzdF0gPSB2YWw7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHJlYWRGbGF0UHJlY29uZmlnU3RyaW5nQXJyYXkodmFsLCBkZXN0KSB7XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnICYmIHZhbCAhPT0gJycpIHtcbiAgICAgIGNvbmZpZ1tkZXN0XSA9IFt2YWxdO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiByZWFkRmxhdFByZWNvbmZpZyhvYmopIHtcbiAgICByZWFkRmxhdFByZWNvbmZpZ0Jvb2xlYW4ob2JqLnF1bml0X2NvbmZpZ19hbHRlcnRpdGxlLCAnYWx0ZXJ0aXRsZScpO1xuICAgIHJlYWRGbGF0UHJlY29uZmlnQm9vbGVhbihvYmoucXVuaXRfY29uZmlnX2F1dG9zdGFydCwgJ2F1dG9zdGFydCcpO1xuICAgIHJlYWRGbGF0UHJlY29uZmlnQm9vbGVhbihvYmoucXVuaXRfY29uZmlnX2NvbGxhcHNlLCAnY29sbGFwc2UnKTtcbiAgICByZWFkRmxhdFByZWNvbmZpZ0Jvb2xlYW4ob2JqLnF1bml0X2NvbmZpZ19mYWlsb256ZXJvdGVzdHMsICdmYWlsT25aZXJvVGVzdHMnKTtcbiAgICByZWFkRmxhdFByZWNvbmZpZ1N0cmluZyhvYmoucXVuaXRfY29uZmlnX2ZpbHRlciwgJ2ZpbHRlcicpO1xuICAgIHJlYWRGbGF0UHJlY29uZmlnU3RyaW5nKG9iai5xdW5pdF9jb25maWdfZml4dHVyZSwgJ2ZpeHR1cmUnKTtcbiAgICByZWFkRmxhdFByZWNvbmZpZ0Jvb2xlYW4ob2JqLnF1bml0X2NvbmZpZ19oaWRlcGFzc2VkLCAnaGlkZXBhc3NlZCcpO1xuICAgIHJlYWRGbGF0UHJlY29uZmlnTnVtYmVyKG9iai5xdW5pdF9jb25maWdfbWF4ZGVwdGgsICdtYXhEZXB0aCcpO1xuICAgIHJlYWRGbGF0UHJlY29uZmlnU3RyaW5nKG9iai5xdW5pdF9jb25maWdfbW9kdWxlLCAnbW9kdWxlJyk7XG4gICAgcmVhZEZsYXRQcmVjb25maWdTdHJpbmdBcnJheShvYmoucXVuaXRfY29uZmlnX21vZHVsZWlkLCAnbW9kdWxlSWQnKTtcbiAgICByZWFkRmxhdFByZWNvbmZpZ0Jvb2xlYW4ob2JqLnF1bml0X2NvbmZpZ19ub2dsb2JhbHMsICdub2dsb2JhbHMnKTtcbiAgICByZWFkRmxhdFByZWNvbmZpZ0Jvb2xlYW4ob2JqLnF1bml0X2NvbmZpZ19ub3RyeWNhdGNoLCAnbm90cnljYXRjaCcpO1xuICAgIHJlYWRGbGF0UHJlY29uZmlnQm9vbGVhbihvYmoucXVuaXRfY29uZmlnX3Jlb3JkZXIsICdyZW9yZGVyJyk7XG4gICAgcmVhZEZsYXRQcmVjb25maWdCb29sZWFuKG9iai5xdW5pdF9jb25maWdfcmVxdWlyZWV4cGVjdHMsICdyZXF1aXJlRXhwZWN0cycpO1xuICAgIHJlYWRGbGF0UHJlY29uZmlnQm9vbGVhbihvYmoucXVuaXRfY29uZmlnX3Njcm9sbHRvcCwgJ3Njcm9sbHRvcCcpO1xuICAgIHJlYWRGbGF0UHJlY29uZmlnU3RyaW5nT3JCb29sZWFuKG9iai5xdW5pdF9jb25maWdfc2VlZCwgJ3NlZWQnKTtcbiAgICByZWFkRmxhdFByZWNvbmZpZ1N0cmluZ0FycmF5KG9iai5xdW5pdF9jb25maWdfdGVzdGlkLCAndGVzdElkJyk7XG4gICAgcmVhZEZsYXRQcmVjb25maWdOdW1iZXIob2JqLnF1bml0X2NvbmZpZ190ZXN0dGltZW91dCwgJ3Rlc3RUaW1lb3V0Jyk7XG4gICAgdmFyIHJlcG9ydGVyS2V5cyA9IHtcbiAgICAgIHF1bml0X2NvbmZpZ19yZXBvcnRlcnNfY29uc29sZTogJ2NvbnNvbGUnLFxuICAgICAgcXVuaXRfY29uZmlnX3JlcG9ydGVyc190YXA6ICd0YXAnXG4gICAgfTtcbiAgICBmb3IgKHZhciBrZXkgaW4gcmVwb3J0ZXJLZXlzKSB7XG4gICAgICB2YXIgdmFsID0gb2JqW2tleV07XG4gICAgICAvLyBCYXNlZCBvbiByZWFkRmxhdFByZWNvbmZpZ0Jvb2xlYW5cbiAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnYm9vbGVhbicgfHwgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgJiYgdmFsICE9PSAnJykge1xuICAgICAgICB2YXIgZGVzdCA9IHJlcG9ydGVyS2V5c1trZXldO1xuICAgICAgICBjb25maWcucmVwb3J0ZXJzW2Rlc3RdID0gdmFsID09PSB0cnVlIHx8IHZhbCA9PT0gJ3RydWUnIHx8IHZhbCA9PT0gJzEnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAocHJvY2VzcyQxICYmICdlbnYnIGluIHByb2Nlc3MkMSkge1xuICAgIHJlYWRGbGF0UHJlY29uZmlnKHByb2Nlc3MkMS5lbnYpO1xuICB9XG4gIHJlYWRGbGF0UHJlY29uZmlnKGcpO1xuXG4gIC8vIEFwcGx5IGEgcHJlZGVmaW5lZCBRVW5pdC5jb25maWcgb2JqZWN0XG4gIC8vXG4gIC8vIElnbm9yZSBRVW5pdC5jb25maWcgaWYgaXQgaXMgYSBRVW5pdCBkaXN0cmlidXRpb24gaW5zdGVhZCBvZiBwcmVjb25maWcuXG4gIC8vIFRoYXQgbWVhbnMgUVVuaXQgd2FzIGxvYWRlZCB0d2ljZSEgKFVzZSB0aGUgc2FtZSBhcHByb2FjaCBhcyBleHBvcnQuanMpXG4gIHZhciBwcmVDb25maWcgPSBnICYmIGcuUVVuaXQgJiYgIWcuUVVuaXQudmVyc2lvbiAmJiBnLlFVbml0LmNvbmZpZztcbiAgaWYgKHByZUNvbmZpZykge1xuICAgIGV4dGVuZChjb25maWcsIHByZUNvbmZpZyk7XG4gIH1cblxuICAvLyBQdXNoIGEgbG9vc2UgdW5uYW1lZCBtb2R1bGUgdG8gdGhlIG1vZHVsZXMgY29sbGVjdGlvblxuICBjb25maWcubW9kdWxlcy5wdXNoKGNvbmZpZy5jdXJyZW50TW9kdWxlKTtcbiAgaWYgKGNvbmZpZy5zZWVkID09PSAndHJ1ZScgfHwgY29uZmlnLnNlZWQgPT09IHRydWUpIHtcbiAgICAvLyBHZW5lcmF0ZSBhIHJhbmRvbSBzZWVkXG4gICAgLy8gTGVuZ3RoIG9mIGBNYXRoLnJhbmRvbSgpYCBmcmFjdGlvbiwgaW4gYmFzZSAzNiwgbWF5IHZhcnkgZnJvbSA2LTE0LlxuICAgIC8vIFBhZCBhbmQgdGFrZSBzbGljZSB0byBhIGNvbnNpc3RlbnQgMTAtZGlnaXQgdmFsdWUuXG4gICAgY29uZmlnLnNlZWQgPSAoTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikgKyAnMDAwMDAwMDAwMCcpLnNsaWNlKDIsIDEyKTtcbiAgfVxuXG4gIHZhciBkdW1wID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBxdW90ZShzdHIpIHtcbiAgICAgIHJldHVybiAnXCInICsgc3RyLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxcXC9nLCAnXFxcXFxcXFwnKS5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykgKyAnXCInO1xuICAgIH1cbiAgICBmdW5jdGlvbiBsaXRlcmFsKG8pIHtcbiAgICAgIHJldHVybiBvICsgJyc7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGpvaW4ocHJlLCBhcnIsIHBvc3QpIHtcbiAgICAgIHZhciBzID0gZHVtcC5zZXBhcmF0b3IoKTtcbiAgICAgIHZhciBpbm5lciA9IGR1bXAuaW5kZW50KDEpO1xuICAgICAgaWYgKGFyci5qb2luKSB7XG4gICAgICAgIGFyciA9IGFyci5qb2luKCcsJyArIHMgKyBpbm5lcik7XG4gICAgICB9XG4gICAgICBpZiAoIWFycikge1xuICAgICAgICByZXR1cm4gcHJlICsgcG9zdDtcbiAgICAgIH1cbiAgICAgIHZhciBiYXNlID0gZHVtcC5pbmRlbnQoKTtcbiAgICAgIHJldHVybiBbcHJlLCBpbm5lciArIGFyciwgYmFzZSArIHBvc3RdLmpvaW4ocyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFycmF5KGFyciwgc3RhY2spIHtcbiAgICAgIGlmIChkdW1wLm1heERlcHRoICYmIGR1bXAuZGVwdGggPiBkdW1wLm1heERlcHRoKSB7XG4gICAgICAgIHJldHVybiAnW29iamVjdCBBcnJheV0nO1xuICAgICAgfVxuICAgICAgdGhpcy51cCgpO1xuICAgICAgdmFyIGkgPSBhcnIubGVuZ3RoO1xuICAgICAgdmFyIHJldCA9IG5ldyBBcnJheShpKTtcbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgcmV0W2ldID0gdGhpcy5wYXJzZShhcnJbaV0sIHVuZGVmaW5lZCwgc3RhY2spO1xuICAgICAgfVxuICAgICAgdGhpcy5kb3duKCk7XG4gICAgICByZXR1cm4gam9pbignWycsIHJldCwgJ10nKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNBcnJheShvYmopIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIC8vIE5hdGl2ZSBBcnJheXNcbiAgICAgICAgdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBBcnJheV0nIHx8XG4gICAgICAgIC8vIE5vZGVMaXN0IG9iamVjdHNcbiAgICAgICAgdHlwZW9mIG9iai5sZW5ndGggPT09ICdudW1iZXInICYmIG9iai5pdGVtICE9PSB1bmRlZmluZWQgJiYgKG9iai5sZW5ndGggPyBvYmouaXRlbSgwKSA9PT0gb2JqWzBdIDogb2JqLml0ZW0oMCkgPT09IG51bGwgJiYgb2JqWzBdID09PSB1bmRlZmluZWQpXG4gICAgICApO1xuICAgIH1cbiAgICB2YXIgcmVOYW1lID0gL15mdW5jdGlvbiAoXFx3KykvO1xuICAgIHZhciBkdW1wID0ge1xuICAgICAgLy8gVGhlIG9ialR5cGUgaXMgdXNlZCBtb3N0bHkgaW50ZXJuYWxseSwgeW91IGNhbiBmaXggYSAoY3VzdG9tKSB0eXBlIGluIGFkdmFuY2VcbiAgICAgIHBhcnNlOiBmdW5jdGlvbiBwYXJzZShvYmosIG9ialR5cGUsIHN0YWNrKSB7XG4gICAgICAgIHN0YWNrID0gc3RhY2sgfHwgW107XG4gICAgICAgIHZhciBvYmpJbmRleCA9IHN0YWNrLmluZGV4T2Yob2JqKTtcbiAgICAgICAgaWYgKG9iakluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiBcInJlY3Vyc2lvbihcIi5jb25jYXQob2JqSW5kZXggLSBzdGFjay5sZW5ndGgsIFwiKVwiKTtcbiAgICAgICAgfVxuICAgICAgICBvYmpUeXBlID0gb2JqVHlwZSB8fCB0aGlzLnR5cGVPZihvYmopO1xuICAgICAgICB2YXIgcGFyc2VyID0gdGhpcy5wYXJzZXJzW29ialR5cGVdO1xuICAgICAgICB2YXIgcGFyc2VyVHlwZSA9IF90eXBlb2YocGFyc2VyKTtcbiAgICAgICAgaWYgKHBhcnNlclR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBzdGFjay5wdXNoKG9iaik7XG4gICAgICAgICAgdmFyIHJlcyA9IHBhcnNlci5jYWxsKHRoaXMsIG9iaiwgc3RhY2spO1xuICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnNlclR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ1tFUlJPUjogTWlzc2luZyBRVW5pdC5kdW1wIGZvcm1hdHRlciBmb3IgdHlwZSAnICsgb2JqVHlwZSArICddJztcbiAgICAgIH0sXG4gICAgICB0eXBlT2Y6IGZ1bmN0aW9uIHR5cGVPZihvYmopIHtcbiAgICAgICAgdmFyIHR5cGU7XG4gICAgICAgIGlmIChvYmogPT09IG51bGwpIHtcbiAgICAgICAgICB0eXBlID0gJ251bGwnO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdHlwZSA9ICd1bmRlZmluZWQnO1xuICAgICAgICB9IGVsc2UgaWYgKGlzKCdyZWdleHAnLCBvYmopKSB7XG4gICAgICAgICAgdHlwZSA9ICdyZWdleHAnO1xuICAgICAgICB9IGVsc2UgaWYgKGlzKCdkYXRlJywgb2JqKSkge1xuICAgICAgICAgIHR5cGUgPSAnZGF0ZSc7XG4gICAgICAgIH0gZWxzZSBpZiAoaXMoJ2Z1bmN0aW9uJywgb2JqKSkge1xuICAgICAgICAgIHR5cGUgPSAnZnVuY3Rpb24nO1xuICAgICAgICB9IGVsc2UgaWYgKG9iai5zZXRJbnRlcnZhbCAhPT0gdW5kZWZpbmVkICYmIG9iai5kb2N1bWVudCAhPT0gdW5kZWZpbmVkICYmIG9iai5ub2RlVHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdHlwZSA9ICd3aW5kb3cnO1xuICAgICAgICB9IGVsc2UgaWYgKG9iai5ub2RlVHlwZSA9PT0gOSkge1xuICAgICAgICAgIHR5cGUgPSAnZG9jdW1lbnQnO1xuICAgICAgICB9IGVsc2UgaWYgKG9iai5ub2RlVHlwZSkge1xuICAgICAgICAgIHR5cGUgPSAnbm9kZSc7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgICAgdHlwZSA9ICdhcnJheSc7XG4gICAgICAgIH0gZWxzZSBpZiAob2JqLmNvbnN0cnVjdG9yID09PSBFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IpIHtcbiAgICAgICAgICB0eXBlID0gJ2Vycm9yJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0eXBlID0gX3R5cGVvZihvYmopO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfSxcbiAgICAgIHNlcGFyYXRvcjogZnVuY3Rpb24gc2VwYXJhdG9yKCkge1xuICAgICAgICBpZiAodGhpcy5tdWx0aWxpbmUpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5IVE1MID8gJzxiciAvPicgOiAnXFxuJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5IVE1MID8gJyYjMTYwOycgOiAnICc7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBFeHRyYSBjYW4gYmUgYSBudW1iZXIsIHNob3J0Y3V0IGZvciBpbmNyZWFzaW5nLWNhbGxpbmctZGVjcmVhc2luZ1xuICAgICAgaW5kZW50OiBmdW5jdGlvbiBpbmRlbnQoZXh0cmEpIHtcbiAgICAgICAgaWYgKCF0aGlzLm11bHRpbGluZSkge1xuICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2hyID0gdGhpcy5pbmRlbnRDaGFyO1xuICAgICAgICBpZiAodGhpcy5IVE1MKSB7XG4gICAgICAgICAgY2hyID0gY2hyLnJlcGxhY2UoL1xcdC9nLCAnICAgJykucmVwbGFjZSgvIC9nLCAnJiMxNjA7Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheSh0aGlzLmRlcHRoICsgKGV4dHJhIHx8IDApKS5qb2luKGNocik7XG4gICAgICB9LFxuICAgICAgdXA6IGZ1bmN0aW9uIHVwKGEpIHtcbiAgICAgICAgdGhpcy5kZXB0aCArPSBhIHx8IDE7XG4gICAgICB9LFxuICAgICAgZG93bjogZnVuY3Rpb24gZG93bihhKSB7XG4gICAgICAgIHRoaXMuZGVwdGggLT0gYSB8fCAxO1xuICAgICAgfSxcbiAgICAgIHNldFBhcnNlcjogZnVuY3Rpb24gc2V0UGFyc2VyKG5hbWUsIHBhcnNlcikge1xuICAgICAgICB0aGlzLnBhcnNlcnNbbmFtZV0gPSBwYXJzZXI7XG4gICAgICB9LFxuICAgICAgLy8gVGhlIG5leHQgMyBhcmUgZXhwb3NlZCBzbyB5b3UgY2FuIHVzZSB0aGVtXG4gICAgICBxdW90ZTogcXVvdGUsXG4gICAgICBsaXRlcmFsOiBsaXRlcmFsLFxuICAgICAgam9pbjogam9pbixcbiAgICAgIGRlcHRoOiAxLFxuICAgICAgbWF4RGVwdGg6IGNvbmZpZy5tYXhEZXB0aCxcbiAgICAgIC8vIFRoaXMgaXMgdGhlIGxpc3Qgb2YgcGFyc2VycywgdG8gbW9kaWZ5IHRoZW0sIHVzZSBkdW1wLnNldFBhcnNlclxuICAgICAgcGFyc2Vyczoge1xuICAgICAgICB3aW5kb3c6ICdbV2luZG93XScsXG4gICAgICAgIGRvY3VtZW50OiAnW0RvY3VtZW50XScsXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiBlcnJvcihfZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gJ0Vycm9yKFwiJyArIF9lcnJvci5tZXNzYWdlICsgJ1wiKSc7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIFRoaXMgaGFzIGJlZW4gdW51c2VkIHNpbmNlIFFVbml0IDEuMC4wLlxuICAgICAgICAvLyBAdG9kbyBEZXByZWNhdGUgYW5kIHJlbW92ZS5cbiAgICAgICAgdW5rbm93bjogJ1tVbmtub3duXScsXG4gICAgICAgIG51bGw6ICdudWxsJyxcbiAgICAgICAgdW5kZWZpbmVkOiAndW5kZWZpbmVkJyxcbiAgICAgICAgZnVuY3Rpb246IGZ1bmN0aW9uIF9mdW5jdGlvbihmbikge1xuICAgICAgICAgIHZhciByZXQgPSAnZnVuY3Rpb24nO1xuXG4gICAgICAgICAgLy8gRnVuY3Rpb25zIG5ldmVyIGhhdmUgbmFtZSBpbiBJRVxuICAgICAgICAgIHZhciBuYW1lID0gJ25hbWUnIGluIGZuID8gZm4ubmFtZSA6IChyZU5hbWUuZXhlYyhmbikgfHwgW10pWzFdO1xuICAgICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICByZXQgKz0gJyAnICsgbmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0ICs9ICcoJztcbiAgICAgICAgICByZXQgPSBbcmV0LCBkdW1wLnBhcnNlKGZuLCAnZnVuY3Rpb25BcmdzJyksICcpeyddLmpvaW4oJycpO1xuICAgICAgICAgIHJldHVybiBqb2luKHJldCwgZHVtcC5wYXJzZShmbiwgJ2Z1bmN0aW9uQ29kZScpLCAnfScpO1xuICAgICAgICB9LFxuICAgICAgICBhcnJheTogYXJyYXksXG4gICAgICAgIG5vZGVsaXN0OiBhcnJheSxcbiAgICAgICAgYXJndW1lbnRzOiBhcnJheSxcbiAgICAgICAgb2JqZWN0OiBmdW5jdGlvbiBvYmplY3QobWFwLCBzdGFjaykge1xuICAgICAgICAgIHZhciByZXQgPSBbXTtcbiAgICAgICAgICBpZiAoZHVtcC5tYXhEZXB0aCAmJiBkdW1wLmRlcHRoID4gZHVtcC5tYXhEZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuICdbb2JqZWN0IE9iamVjdF0nO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkdW1wLnVwKCk7XG4gICAgICAgICAgdmFyIGtleXMgPSBbXTtcbiAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gbWFwKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTb21lIHByb3BlcnRpZXMgYXJlIG5vdCBhbHdheXMgZW51bWVyYWJsZSBvbiBFcnJvciBvYmplY3RzLlxuICAgICAgICAgIHZhciBub25FbnVtZXJhYmxlUHJvcGVydGllcyA9IFsnbWVzc2FnZScsICduYW1lJ107XG4gICAgICAgICAgZm9yICh2YXIgaSBpbiBub25FbnVtZXJhYmxlUHJvcGVydGllcykge1xuICAgICAgICAgICAgdmFyIF9rZXkgPSBub25FbnVtZXJhYmxlUHJvcGVydGllc1tpXTtcbiAgICAgICAgICAgIGlmIChfa2V5IGluIG1hcCAmJiAhaW5BcnJheShfa2V5LCBrZXlzKSkge1xuICAgICAgICAgICAgICBrZXlzLnB1c2goX2tleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGtleXMuc29ydCgpO1xuICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBrZXlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIF9rZXkyID0ga2V5c1tfaV07XG4gICAgICAgICAgICB2YXIgdmFsID0gbWFwW19rZXkyXTtcbiAgICAgICAgICAgIHJldC5wdXNoKGR1bXAucGFyc2UoX2tleTIsICdrZXknKSArICc6ICcgKyBkdW1wLnBhcnNlKHZhbCwgdW5kZWZpbmVkLCBzdGFjaykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkdW1wLmRvd24oKTtcbiAgICAgICAgICByZXR1cm4gam9pbigneycsIHJldCwgJ30nKTtcbiAgICAgICAgfSxcbiAgICAgICAgbm9kZTogZnVuY3Rpb24gbm9kZShfbm9kZSkge1xuICAgICAgICAgIHZhciBvcGVuID0gZHVtcC5IVE1MID8gJyZsdDsnIDogJzwnO1xuICAgICAgICAgIHZhciBjbG9zZSA9IGR1bXAuSFRNTCA/ICcmZ3Q7JyA6ICc+JztcbiAgICAgICAgICB2YXIgdGFnID0gX25vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICB2YXIgcmV0ID0gb3BlbiArIHRhZztcbiAgICAgICAgICB2YXIgYXR0cnMgPSBfbm9kZS5hdHRyaWJ1dGVzO1xuICAgICAgICAgIGlmIChhdHRycykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhdHRycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YXIgdmFsID0gYXR0cnNbaV0ubm9kZVZhbHVlO1xuXG4gICAgICAgICAgICAgIC8vIElFNiBpbmNsdWRlcyBhbGwgYXR0cmlidXRlcyBpbiAuYXR0cmlidXRlcywgZXZlbiBvbmVzIG5vdCBleHBsaWNpdGx5XG4gICAgICAgICAgICAgIC8vIHNldC4gVGhvc2UgaGF2ZSB2YWx1ZXMgbGlrZSB1bmRlZmluZWQsIG51bGwsIDAsIGZhbHNlLCBcIlwiIG9yXG4gICAgICAgICAgICAgIC8vIFwiaW5oZXJpdFwiLlxuICAgICAgICAgICAgICBpZiAodmFsICYmIHZhbCAhPT0gJ2luaGVyaXQnKSB7XG4gICAgICAgICAgICAgICAgcmV0ICs9ICcgJyArIGF0dHJzW2ldLm5vZGVOYW1lICsgJz0nICsgZHVtcC5wYXJzZSh2YWwsICdhdHRyaWJ1dGUnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXQgKz0gY2xvc2U7XG5cbiAgICAgICAgICAvLyBTaG93IGNvbnRlbnQgb2YgVGV4dE5vZGUgb3IgQ0RBVEFTZWN0aW9uXG4gICAgICAgICAgaWYgKF9ub2RlLm5vZGVUeXBlID09PSAzIHx8IF9ub2RlLm5vZGVUeXBlID09PSA0KSB7XG4gICAgICAgICAgICByZXQgKz0gX25vZGUubm9kZVZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmV0ICsgb3BlbiArICcvJyArIHRhZyArIGNsb3NlO1xuICAgICAgICB9LFxuICAgICAgICAvLyBGdW5jdGlvbiBjYWxscyBpdCBpbnRlcm5hbGx5LCBpdCdzIHRoZSBhcmd1bWVudHMgcGFydCBvZiB0aGUgZnVuY3Rpb25cbiAgICAgICAgZnVuY3Rpb25BcmdzOiBmdW5jdGlvbiBmdW5jdGlvbkFyZ3MoZm4pIHtcbiAgICAgICAgICB2YXIgbCA9IGZuLmxlbmd0aDtcbiAgICAgICAgICBpZiAoIWwpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkobCk7XG4gICAgICAgICAgd2hpbGUgKGwtLSkge1xuICAgICAgICAgICAgLy8gOTcgaXMgJ2EnXG4gICAgICAgICAgICBhcmdzW2xdID0gU3RyaW5nLmZyb21DaGFyQ29kZSg5NyArIGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gJyAnICsgYXJncy5qb2luKCcsICcpICsgJyAnO1xuICAgICAgICB9LFxuICAgICAgICAvLyBPYmplY3QgY2FsbHMgaXQgaW50ZXJuYWxseSwgdGhlIGtleSBwYXJ0IG9mIGFuIGl0ZW0gaW4gYSBtYXBcbiAgICAgICAga2V5OiBxdW90ZSxcbiAgICAgICAgLy8gRnVuY3Rpb24gY2FsbHMgaXQgaW50ZXJuYWxseSwgaXQncyB0aGUgY29udGVudCBvZiB0aGUgZnVuY3Rpb25cbiAgICAgICAgZnVuY3Rpb25Db2RlOiAnW2NvZGVdJyxcbiAgICAgICAgLy8gTm9kZSBjYWxscyBpdCBpbnRlcm5hbGx5LCBpdCdzIGEgaHRtbCBhdHRyaWJ1dGUgdmFsdWVcbiAgICAgICAgYXR0cmlidXRlOiBxdW90ZSxcbiAgICAgICAgc3RyaW5nOiBxdW90ZSxcbiAgICAgICAgZGF0ZTogcXVvdGUsXG4gICAgICAgIHJlZ2V4cDogbGl0ZXJhbCxcbiAgICAgICAgbnVtYmVyOiBsaXRlcmFsLFxuICAgICAgICBib29sZWFuOiBsaXRlcmFsLFxuICAgICAgICBzeW1ib2w6IGZ1bmN0aW9uIHN5bWJvbChzeW0pIHtcbiAgICAgICAgICByZXR1cm4gc3ltLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBJZiB0cnVlLCBlbnRpdGllcyBhcmUgZXNjYXBlZCAoIDwsID4sIFxcdCwgc3BhY2UgYW5kIFxcbiApXG4gICAgICBIVE1MOiBmYWxzZSxcbiAgICAgIC8vIEluZGVudGF0aW9uIHVuaXRcbiAgICAgIGluZGVudENoYXI6ICcgICcsXG4gICAgICAvLyBJZiB0cnVlLCBpdGVtcyBpbiBhIGNvbGxlY3Rpb24sIGFyZSBzZXBhcmF0ZWQgYnkgYSBcXG4sIGVsc2UganVzdCBhIHNwYWNlLlxuICAgICAgbXVsdGlsaW5lOiB0cnVlXG4gICAgfTtcbiAgICByZXR1cm4gZHVtcDtcbiAgfSkoKTtcblxuICAvLyBTdXBwb3J0OiBJRSA5XG4gIC8vIERldGVjdCBpZiB0aGUgY29uc29sZSBvYmplY3QgZXhpc3RzIGFuZCBuby1vcCBvdGhlcndpc2UuXG4gIC8vIFRoaXMgYWxsb3dzIHN1cHBvcnQgZm9yIElFIDksIHdoaWNoIGRvZXNuJ3QgaGF2ZSBhIGNvbnNvbGVcbiAgLy8gb2JqZWN0IGlmIHRoZSBkZXZlbG9wZXIgdG9vbHMgYXJlIG5vdCBvcGVuLlxuXG4gIC8vIFN1cHBvcnQ6IElFIDlcbiAgLy8gRnVuY3Rpb24jYmluZCBpcyBzdXBwb3J0ZWQsIGJ1dCBubyBjb25zb2xlLmxvZy5iaW5kKCkuXG5cbiAgLy8gU3VwcG9ydDogU3BpZGVyTW9ua2V5IChtb3pqcyA2OCspXG4gIC8vIFRoZSBjb25zb2xlIG9iamVjdCBoYXMgYSBsb2cgbWV0aG9kLCBidXQgbm8gd2FybiBtZXRob2QuXG5cbiAgdmFyIExvZ2dlciA9IHtcbiAgICB3YXJuOiBjb25zb2xlJDEgPyBGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKGNvbnNvbGUkMS53YXJuIHx8IGNvbnNvbGUkMS5sb2csIGNvbnNvbGUkMSkgOiBmdW5jdGlvbiAoKSB7fVxuICB9O1xuXG4gIHZhciBTdWl0ZVJlcG9ydCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3VpdGVSZXBvcnQobmFtZSwgcGFyZW50U3VpdGUpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdWl0ZVJlcG9ydCk7XG4gICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgdGhpcy5mdWxsTmFtZSA9IHBhcmVudFN1aXRlID8gcGFyZW50U3VpdGUuZnVsbE5hbWUuY29uY2F0KG5hbWUpIDogW107XG5cbiAgICAgIC8vIFdoZW4gYW4gXCJlcnJvclwiIGV2ZW50IGlzIGVtaXR0ZWQgZnJvbSBvblVuY2F1Z2h0RXhjZXB0aW9uKCksIHRoZVxuICAgICAgLy8gXCJydW5FbmRcIiBldmVudCBzaG91bGQgcmVwb3J0IHRoZSBzdGF0dXMgYXMgZmFpbGVkLiBUaGUgXCJydW5FbmRcIiBldmVudCBkYXRhXG4gICAgICAvLyBpcyB0cmFja2VkIHRocm91Z2ggdGhpcyBwcm9wZXJ0eSAodmlhIHRoZSBcInJ1blN1aXRlXCIgaW5zdGFuY2UpLlxuICAgICAgdGhpcy5nbG9iYWxGYWlsdXJlQ291bnQgPSAwO1xuICAgICAgdGhpcy50ZXN0cyA9IFtdO1xuICAgICAgdGhpcy5jaGlsZFN1aXRlcyA9IFtdO1xuICAgICAgaWYgKHBhcmVudFN1aXRlKSB7XG4gICAgICAgIHBhcmVudFN1aXRlLnB1c2hDaGlsZFN1aXRlKHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gX2NyZWF0ZUNsYXNzKFN1aXRlUmVwb3J0LCBbe1xuICAgICAga2V5OiBcInN0YXJ0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQocmVjb3JkVGltZSkge1xuICAgICAgICBpZiAocmVjb3JkVGltZSkge1xuICAgICAgICAgIHRoaXMuX3N0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgIGZ1bGxOYW1lOiB0aGlzLmZ1bGxOYW1lLnNsaWNlKCksXG4gICAgICAgICAgdGVzdHM6IHRoaXMudGVzdHMubWFwKGZ1bmN0aW9uICh0ZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGVzdC5zdGFydCgpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNoaWxkU3VpdGVzOiB0aGlzLmNoaWxkU3VpdGVzLm1hcChmdW5jdGlvbiAoc3VpdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBzdWl0ZS5zdGFydCgpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRlc3RDb3VudHM6IHtcbiAgICAgICAgICAgIHRvdGFsOiB0aGlzLmdldFRlc3RDb3VudHMoKS50b3RhbFxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZW5kXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZW5kKHJlY29yZFRpbWUpIHtcbiAgICAgICAgaWYgKHJlY29yZFRpbWUpIHtcbiAgICAgICAgICB0aGlzLl9lbmRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgZnVsbE5hbWU6IHRoaXMuZnVsbE5hbWUuc2xpY2UoKSxcbiAgICAgICAgICB0ZXN0czogdGhpcy50ZXN0cy5tYXAoZnVuY3Rpb24gKHRlc3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZXN0LmVuZCgpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNoaWxkU3VpdGVzOiB0aGlzLmNoaWxkU3VpdGVzLm1hcChmdW5jdGlvbiAoc3VpdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBzdWl0ZS5lbmQoKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0ZXN0Q291bnRzOiB0aGlzLmdldFRlc3RDb3VudHMoKSxcbiAgICAgICAgICBydW50aW1lOiB0aGlzLmdldFJ1bnRpbWUoKSxcbiAgICAgICAgICBzdGF0dXM6IHRoaXMuZ2V0U3RhdHVzKClcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicHVzaENoaWxkU3VpdGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwdXNoQ2hpbGRTdWl0ZShzdWl0ZSkge1xuICAgICAgICB0aGlzLmNoaWxkU3VpdGVzLnB1c2goc3VpdGUpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJwdXNoVGVzdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHB1c2hUZXN0KHRlc3QpIHtcbiAgICAgICAgdGhpcy50ZXN0cy5wdXNoKHRlc3QpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRSdW50aW1lXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UnVudGltZSgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy5fZW5kVGltZSAtIHRoaXMuX3N0YXJ0VGltZSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImdldFRlc3RDb3VudHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUZXN0Q291bnRzKCkge1xuICAgICAgICB2YXIgY291bnRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7XG4gICAgICAgICAgcGFzc2VkOiAwLFxuICAgICAgICAgIGZhaWxlZDogMCxcbiAgICAgICAgICBza2lwcGVkOiAwLFxuICAgICAgICAgIHRvZG86IDAsXG4gICAgICAgICAgdG90YWw6IDBcbiAgICAgICAgfTtcbiAgICAgICAgY291bnRzLmZhaWxlZCArPSB0aGlzLmdsb2JhbEZhaWx1cmVDb3VudDtcbiAgICAgICAgY291bnRzLnRvdGFsICs9IHRoaXMuZ2xvYmFsRmFpbHVyZUNvdW50O1xuICAgICAgICBjb3VudHMgPSB0aGlzLnRlc3RzLnJlZHVjZShmdW5jdGlvbiAoY291bnRzLCB0ZXN0KSB7XG4gICAgICAgICAgaWYgKHRlc3QudmFsaWQpIHtcbiAgICAgICAgICAgIGNvdW50c1t0ZXN0LmdldFN0YXR1cygpXSsrO1xuICAgICAgICAgICAgY291bnRzLnRvdGFsKys7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjb3VudHM7XG4gICAgICAgIH0sIGNvdW50cyk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkU3VpdGVzLnJlZHVjZShmdW5jdGlvbiAoY291bnRzLCBzdWl0ZSkge1xuICAgICAgICAgIHJldHVybiBzdWl0ZS5nZXRUZXN0Q291bnRzKGNvdW50cyk7XG4gICAgICAgIH0sIGNvdW50cyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImdldFN0YXR1c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN0YXR1cygpIHtcbiAgICAgICAgdmFyIF90aGlzJGdldFRlc3RDb3VudHMgPSB0aGlzLmdldFRlc3RDb3VudHMoKSxcbiAgICAgICAgICB0b3RhbCA9IF90aGlzJGdldFRlc3RDb3VudHMudG90YWwsXG4gICAgICAgICAgZmFpbGVkID0gX3RoaXMkZ2V0VGVzdENvdW50cy5mYWlsZWQsXG4gICAgICAgICAgc2tpcHBlZCA9IF90aGlzJGdldFRlc3RDb3VudHMuc2tpcHBlZCxcbiAgICAgICAgICB0b2RvID0gX3RoaXMkZ2V0VGVzdENvdW50cy50b2RvO1xuICAgICAgICBpZiAoZmFpbGVkKSB7XG4gICAgICAgICAgcmV0dXJuICdmYWlsZWQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChza2lwcGVkID09PSB0b3RhbCkge1xuICAgICAgICAgICAgcmV0dXJuICdza2lwcGVkJztcbiAgICAgICAgICB9IGVsc2UgaWYgKHRvZG8gPT09IHRvdGFsKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3RvZG8nO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ3Bhc3NlZCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfV0pO1xuICB9KCk7XG5cbiAgdmFyIG1vZHVsZVN0YWNrID0gW107XG4gIHZhciBydW5TdWl0ZSA9IG5ldyBTdWl0ZVJlcG9ydCgpO1xuICBmdW5jdGlvbiBpc1BhcmVudE1vZHVsZUluUXVldWUoKSB7XG4gICAgdmFyIG1vZHVsZXNJblF1ZXVlID0gY29uZmlnLm1vZHVsZXMuZmlsdGVyKGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgICAgIHJldHVybiAhbW9kdWxlLmlnbm9yZWQ7XG4gICAgfSkubWFwKGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgICAgIHJldHVybiBtb2R1bGUubW9kdWxlSWQ7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1vZHVsZVN0YWNrLnNvbWUoZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgICAgcmV0dXJuIG1vZHVsZXNJblF1ZXVlLmluY2x1ZGVzKG1vZHVsZS5tb2R1bGVJZCk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlTW9kdWxlKG5hbWUsIHRlc3RFbnZpcm9ubWVudCwgbW9kaWZpZXJzKSB7XG4gICAgdmFyIHBhcmVudE1vZHVsZSA9IG1vZHVsZVN0YWNrLmxlbmd0aCA/IG1vZHVsZVN0YWNrLnNsaWNlKC0xKVswXSA6IG51bGw7XG4gICAgdmFyIG1vZHVsZU5hbWUgPSBwYXJlbnRNb2R1bGUgIT09IG51bGwgPyBbcGFyZW50TW9kdWxlLm5hbWUsIG5hbWVdLmpvaW4oJyA+ICcpIDogbmFtZTtcbiAgICB2YXIgcGFyZW50U3VpdGUgPSBwYXJlbnRNb2R1bGUgPyBwYXJlbnRNb2R1bGUuc3VpdGVSZXBvcnQgOiBydW5TdWl0ZTtcbiAgICB2YXIgc2tpcCA9IHBhcmVudE1vZHVsZSAhPT0gbnVsbCAmJiBwYXJlbnRNb2R1bGUuc2tpcCB8fCBtb2RpZmllcnMuc2tpcDtcbiAgICB2YXIgdG9kbyA9IHBhcmVudE1vZHVsZSAhPT0gbnVsbCAmJiBwYXJlbnRNb2R1bGUudG9kbyB8fCBtb2RpZmllcnMudG9kbztcbiAgICB2YXIgZW52ID0ge307XG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgZXh0ZW5kKGVudiwgcGFyZW50TW9kdWxlLnRlc3RFbnZpcm9ubWVudCk7XG4gICAgfVxuICAgIGV4dGVuZChlbnYsIHRlc3RFbnZpcm9ubWVudCk7XG4gICAgdmFyIG1vZHVsZSA9IHtcbiAgICAgIG5hbWU6IG1vZHVsZU5hbWUsXG4gICAgICBwYXJlbnRNb2R1bGU6IHBhcmVudE1vZHVsZSxcbiAgICAgIGhvb2tzOiB7XG4gICAgICAgIGJlZm9yZTogW10sXG4gICAgICAgIGJlZm9yZUVhY2g6IFtdLFxuICAgICAgICBhZnRlckVhY2g6IFtdLFxuICAgICAgICBhZnRlcjogW11cbiAgICAgIH0sXG4gICAgICB0ZXN0RW52aXJvbm1lbnQ6IGVudixcbiAgICAgIHRlc3RzOiBbXSxcbiAgICAgIG1vZHVsZUlkOiBnZW5lcmF0ZUhhc2gobW9kdWxlTmFtZSksXG4gICAgICB0ZXN0c1J1bjogMCxcbiAgICAgIHRlc3RzSWdub3JlZDogMCxcbiAgICAgIGNoaWxkTW9kdWxlczogW10sXG4gICAgICBzdWl0ZVJlcG9ydDogbmV3IFN1aXRlUmVwb3J0KG5hbWUsIHBhcmVudFN1aXRlKSxcbiAgICAgIC8vIEluaXRpYWxpc2VkIGJ5IHRlc3QuanMgd2hlbiB0aGUgbW9kdWxlIHN0YXJ0IGV4ZWN1dGluZyxcbiAgICAgIC8vIGkuZS4gYmVmb3JlIHRoZSBmaXJzdCB0ZXN0IGluIHRoaXMgbW9kdWxlIChvciBhIGNoaWxkKS5cbiAgICAgIHN0YXRzOiBudWxsLFxuICAgICAgLy8gUGFzcyBhbG9uZyBgc2tpcGAgYW5kIGB0b2RvYCBwcm9wZXJ0aWVzIGZyb20gcGFyZW50IG1vZHVsZSwgaW4gY2FzZVxuICAgICAgLy8gdGhlcmUgaXMgb25lLCB0byBjaGlsZHMuIEFuZCB1c2Ugb3duIG90aGVyd2lzZS5cbiAgICAgIC8vIFRoaXMgcHJvcGVydHkgd2lsbCBiZSB1c2VkIHRvIG1hcmsgb3duIHRlc3RzIGFuZCB0ZXN0cyBvZiBjaGlsZCBzdWl0ZXNcbiAgICAgIC8vIGFzIGVpdGhlciBgc2tpcHBlZGAgb3IgYHRvZG9gLlxuICAgICAgc2tpcDogc2tpcCxcbiAgICAgIHRvZG86IHNraXAgPyBmYWxzZSA6IHRvZG8sXG4gICAgICBpZ25vcmVkOiBtb2RpZmllcnMuaWdub3JlZCB8fCBmYWxzZVxuICAgIH07XG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgcGFyZW50TW9kdWxlLmNoaWxkTW9kdWxlcy5wdXNoKG1vZHVsZSk7XG4gICAgfVxuICAgIGNvbmZpZy5tb2R1bGVzLnB1c2gobW9kdWxlKTtcbiAgICByZXR1cm4gbW9kdWxlO1xuICB9XG4gIGZ1bmN0aW9uIHNldEhvb2tGcm9tRW52aXJvbm1lbnQoaG9va3MsIGVudmlyb25tZW50LCBuYW1lKSB7XG4gICAgdmFyIHBvdGVudGlhbEhvb2sgPSBlbnZpcm9ubWVudFtuYW1lXTtcbiAgICBpZiAodHlwZW9mIHBvdGVudGlhbEhvb2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGhvb2tzW25hbWVdLnB1c2gocG90ZW50aWFsSG9vayk7XG4gICAgfVxuICAgIGRlbGV0ZSBlbnZpcm9ubWVudFtuYW1lXTtcbiAgfVxuICBmdW5jdGlvbiBtYWtlU2V0SG9vayhtb2R1bGUsIGhvb2tOYW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHNldEhvb2soY2FsbGJhY2spIHtcbiAgICAgIGlmIChjb25maWcuY3VycmVudE1vZHVsZSAhPT0gbW9kdWxlKSB7XG4gICAgICAgIExvZ2dlci53YXJuKCdUaGUgYCcgKyBob29rTmFtZSArICdgIGhvb2sgd2FzIGNhbGxlZCBpbnNpZGUgdGhlIHdyb25nIG1vZHVsZSAoYCcgKyBjb25maWcuY3VycmVudE1vZHVsZS5uYW1lICsgJ2ApLiAnICsgJ0luc3RlYWQsIHVzZSBob29rcyBwcm92aWRlZCBieSB0aGUgY2FsbGJhY2sgdG8gdGhlIGNvbnRhaW5pbmcgbW9kdWxlIChgJyArIG1vZHVsZS5uYW1lICsgJ2ApLiAnICsgJ1RoaXMgd2lsbCBiZWNvbWUgYW4gZXJyb3IgaW4gUVVuaXQgMy4wLicpO1xuICAgICAgfVxuICAgICAgbW9kdWxlLmhvb2tzW2hvb2tOYW1lXS5wdXNoKGNhbGxiYWNrKTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIHByb2Nlc3NNb2R1bGUobmFtZSwgb3B0aW9ucywgc2NvcGUpIHtcbiAgICB2YXIgbW9kaWZpZXJzID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHNjb3BlID0gb3B0aW9ucztcbiAgICAgIG9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHZhciBtb2R1bGUgPSBjcmVhdGVNb2R1bGUobmFtZSwgb3B0aW9ucywgbW9kaWZpZXJzKTtcblxuICAgIC8vIFRyYW5zZmVyIGFueSBpbml0aWFsIGhvb2tzIGZyb20gdGhlIG9wdGlvbnMgb2JqZWN0IHRvIHRoZSAnaG9va3MnIG9iamVjdFxuICAgIHZhciB0ZXN0RW52aXJvbm1lbnQgPSBtb2R1bGUudGVzdEVudmlyb25tZW50O1xuICAgIHZhciBob29rcyA9IG1vZHVsZS5ob29rcztcbiAgICBzZXRIb29rRnJvbUVudmlyb25tZW50KGhvb2tzLCB0ZXN0RW52aXJvbm1lbnQsICdiZWZvcmUnKTtcbiAgICBzZXRIb29rRnJvbUVudmlyb25tZW50KGhvb2tzLCB0ZXN0RW52aXJvbm1lbnQsICdiZWZvcmVFYWNoJyk7XG4gICAgc2V0SG9va0Zyb21FbnZpcm9ubWVudChob29rcywgdGVzdEVudmlyb25tZW50LCAnYWZ0ZXJFYWNoJyk7XG4gICAgc2V0SG9va0Zyb21FbnZpcm9ubWVudChob29rcywgdGVzdEVudmlyb25tZW50LCAnYWZ0ZXInKTtcbiAgICB2YXIgbW9kdWxlRm5zID0ge1xuICAgICAgYmVmb3JlOiBtYWtlU2V0SG9vayhtb2R1bGUsICdiZWZvcmUnKSxcbiAgICAgIGJlZm9yZUVhY2g6IG1ha2VTZXRIb29rKG1vZHVsZSwgJ2JlZm9yZUVhY2gnKSxcbiAgICAgIGFmdGVyRWFjaDogbWFrZVNldEhvb2sobW9kdWxlLCAnYWZ0ZXJFYWNoJyksXG4gICAgICBhZnRlcjogbWFrZVNldEhvb2sobW9kdWxlLCAnYWZ0ZXInKVxuICAgIH07XG4gICAgdmFyIHByZXZNb2R1bGUgPSBjb25maWcuY3VycmVudE1vZHVsZTtcbiAgICBjb25maWcuY3VycmVudE1vZHVsZSA9IG1vZHVsZTtcbiAgICBpZiAodHlwZW9mIHNjb3BlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBtb2R1bGVTdGFjay5wdXNoKG1vZHVsZSk7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgY2JSZXR1cm5WYWx1ZSA9IHNjb3BlLmNhbGwobW9kdWxlLnRlc3RFbnZpcm9ubWVudCwgbW9kdWxlRm5zKTtcbiAgICAgICAgaWYgKGNiUmV0dXJuVmFsdWUgJiYgdHlwZW9mIGNiUmV0dXJuVmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIExvZ2dlci53YXJuKCdSZXR1cm5pbmcgYSBwcm9taXNlIGZyb20gYSBtb2R1bGUgY2FsbGJhY2sgaXMgbm90IHN1cHBvcnRlZC4gJyArICdJbnN0ZWFkLCB1c2UgaG9va3MgZm9yIGFzeW5jIGJlaGF2aW9yLiAnICsgJ1RoaXMgd2lsbCBiZWNvbWUgYW4gZXJyb3IgaW4gUVVuaXQgMy4wLicpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICAvLyBJZiB0aGUgbW9kdWxlIGNsb3N1cmUgdGhyZXcgYW4gdW5jYXVnaHQgZXJyb3IgZHVyaW5nIHRoZSBsb2FkIHBoYXNlLFxuICAgICAgICAvLyB3ZSBsZXQgdGhpcyBidWJibGUgdXAgdG8gZ2xvYmFsIGVycm9yIGhhbmRsZXJzLiBCdXQsIG5vdCB1bnRpbCBhZnRlclxuICAgICAgICAvLyB3ZSB0ZWFyZG93biBpbnRlcm5hbCBzdGF0ZSB0byBlbnN1cmUgY29ycmVjdCBtb2R1bGUgbmVzdGluZy5cbiAgICAgICAgLy8gUmVmIGh0dHBzOi8vZ2l0aHViLmNvbS9xdW5pdGpzL3F1bml0L2lzc3Vlcy8xNDc4LlxuICAgICAgICBtb2R1bGVTdGFjay5wb3AoKTtcbiAgICAgICAgY29uZmlnLmN1cnJlbnRNb2R1bGUgPSBtb2R1bGUucGFyZW50TW9kdWxlIHx8IHByZXZNb2R1bGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBTdWl0ZVJlcG9ydCB0cmVlIG9mIGFsbCB0ZXN0cyBhbmQgbGVhdmUgb25seSBjdXJyZW50IG1vZHVsZSBhcyBjaGlsZCBzdWl0ZVxuICAgKlxuICAgKiBUaGlzIHNob3VsZCBiZSBjYWxsZWQgYmVmb3JlIGRlZmluaW5nIHRoZSBmaXJzdCBtb2R1bGUub25seSgpIG9yIHRlc3Qub25seSgpXG4gICAqIGJlY2F1c2Ugb3RoZXJ3aXNlOlxuICAgKiAtIGBydW5FbmQudGVzdENvdW50c2AgaXMgdG9vIGhpZ2guXG4gICAqIC0gVUkgKEh0bWxSZXBvcnRlcikgYW5kIFRBUCAoVGFwUmVwb3J0ZXIpIGRpc3BsYXkgdG90YWxzIHRvbyBoaWdoLlxuICAgKiAtIFRlc3QgcnVubmVycyBsaWtlIFFUYXAgbWlnaHQgdGltZW91dCBiZWNhdXNlIHRoZSBUQVAgcGxhblxuICAgKiAgIHdvdWxkIGJlIHByaW50ZWQgYXMgXCIxLi45XCIgZXZlbiBpZiBvbmx5IDIgdGVzdHMgYXJlIHJ1bixcbiAgICogICB3aGljaCBtZWFucyB0YXAtZmluaXNoZWQgd2lsbCB3YWl0IGZvciAzLTkuXG4gICAqL1xuICBmdW5jdGlvbiBjbGVhclN1aXRlUmVwb3J0cyhjdXJyZW50TW9kdWxlKSB7XG4gICAgdmFyIGNoaWxkU3VpdGUgPSBudWxsO1xuICAgIHZhciBzdWl0ZVJlcG9ydCA9IGN1cnJlbnRNb2R1bGUuc3VpdGVSZXBvcnQ7XG4gICAgd2hpbGUgKHN1aXRlUmVwb3J0KSB7XG4gICAgICBzdWl0ZVJlcG9ydC50ZXN0cy5sZW5ndGggPSAwO1xuICAgICAgdmFyIGkgPSBzdWl0ZVJlcG9ydC5jaGlsZFN1aXRlcy5pbmRleE9mKGNoaWxkU3VpdGUpO1xuICAgICAgaWYgKGkgPT09IC0xKSB7XG4gICAgICAgIHN1aXRlUmVwb3J0LmNoaWxkU3VpdGVzLmxlbmd0aCA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZWR1Y2UgaW4tcGxhY2UgdG8ganVzdCBjdXJyZW50TW9kdWxlLnN1aXRlUmVwb3J0IG9yIGl0cyBpbnRlcm1lZGlhcnlcbiAgICAgICAgc3VpdGVSZXBvcnQuY2hpbGRTdWl0ZXMuc3BsaWNlKDAsIGkpO1xuICAgICAgICBzdWl0ZVJlcG9ydC5jaGlsZFN1aXRlcy5zcGxpY2UoMSk7XG4gICAgICB9XG4gICAgICBpZiAoc3VpdGVSZXBvcnQgPT09IHJ1blN1aXRlKSB7XG4gICAgICAgIHN1aXRlUmVwb3J0ID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkU3VpdGUgPSBzdWl0ZVJlcG9ydDtcbiAgICAgICAgY3VycmVudE1vZHVsZSA9IGN1cnJlbnRNb2R1bGUucGFyZW50TW9kdWxlO1xuICAgICAgICBzdWl0ZVJlcG9ydCA9IGN1cnJlbnRNb2R1bGUgJiYgY3VycmVudE1vZHVsZS5zdWl0ZVJlcG9ydCB8fCBydW5TdWl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdmFyIGZvY3VzZWQkMSA9IGZhbHNlOyAvLyBpbmRpY2F0ZXMgdGhhdCB0aGUgXCJvbmx5XCIgZmlsdGVyIHdhcyB1c2VkXG5cbiAgZnVuY3Rpb24gbW9kdWxlJDEobmFtZSwgb3B0aW9ucywgc2NvcGUpIHtcbiAgICB2YXIgaWdub3JlZCA9IGZvY3VzZWQkMSAmJiAhaXNQYXJlbnRNb2R1bGVJblF1ZXVlKCk7XG4gICAgcHJvY2Vzc01vZHVsZShuYW1lLCBvcHRpb25zLCBzY29wZSwge1xuICAgICAgaWdub3JlZDogaWdub3JlZFxuICAgIH0pO1xuICB9XG4gIG1vZHVsZSQxLm9ubHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFmb2N1c2VkJDEpIHtcbiAgICAgIC8vIFVwb24gdGhlIGZpcnN0IG1vZHVsZS5vbmx5KCkgY2FsbCxcbiAgICAgIC8vIGRlbGV0ZSBhbnkgYW5kIGFsbCBwcmV2aW91c2x5IHJlZ2lzdGVyZWQgbW9kdWxlcyBhbmQgdGVzdHMuXG4gICAgICBjb25maWcubW9kdWxlcy5sZW5ndGggPSAwO1xuICAgICAgY29uZmlnLnF1ZXVlLmxlbmd0aCA9IDA7XG4gICAgICBjbGVhclN1aXRlUmVwb3J0cyhjb25maWcuY3VycmVudE1vZHVsZSk7XG5cbiAgICAgIC8vIElnbm9yZSBhbnkgdGVzdHMgZGVjbGFyZWQgYWZ0ZXIgdGhpcyBibG9jayB3aXRoaW4gdGhlIHNhbWVcbiAgICAgIC8vIG1vZHVsZSBwYXJlbnQuIGh0dHBzOi8vZ2l0aHViLmNvbS9xdW5pdGpzL3F1bml0L2lzc3Vlcy8xNjQ1XG4gICAgICBjb25maWcuY3VycmVudE1vZHVsZS5pZ25vcmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZm9jdXNlZCQxID0gdHJ1ZTtcbiAgICBwcm9jZXNzTW9kdWxlLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgfTtcbiAgbW9kdWxlJDEuc2tpcCA9IGZ1bmN0aW9uIChuYW1lLCBvcHRpb25zLCBzY29wZSkge1xuICAgIGlmIChmb2N1c2VkJDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcHJvY2Vzc01vZHVsZShuYW1lLCBvcHRpb25zLCBzY29wZSwge1xuICAgICAgc2tpcDogdHJ1ZVxuICAgIH0pO1xuICB9O1xuICBtb2R1bGUkMS5pZiA9IGZ1bmN0aW9uIChuYW1lLCBjb25kaXRpb24sIG9wdGlvbnMsIHNjb3BlKSB7XG4gICAgaWYgKGZvY3VzZWQkMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwcm9jZXNzTW9kdWxlKG5hbWUsIG9wdGlvbnMsIHNjb3BlLCB7XG4gICAgICBza2lwOiAhY29uZGl0aW9uXG4gICAgfSk7XG4gIH07XG4gIG1vZHVsZSQxLnRvZG8gPSBmdW5jdGlvbiAobmFtZSwgb3B0aW9ucywgc2NvcGUpIHtcbiAgICBpZiAoZm9jdXNlZCQxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHByb2Nlc3NNb2R1bGUobmFtZSwgb3B0aW9ucywgc2NvcGUsIHtcbiAgICAgIHRvZG86IHRydWVcbiAgICB9KTtcbiAgfTtcblxuICAvLyBTdGFja3RyYWNlIGNsZWFuZXIgdG8gZm9jdXMgb24gdGhlIHBhdGggZnJvbSBlcnJvciBzb3VyY2UgdG8gdGVzdCBzdWl0ZS5cbiAgLy9cbiAgLy8gVGhpcyBzaG91bGQgcmVkdWNlIGEgcmF3IHN0YWNrIHRyYWNlIGxpa2UgdGhpczpcbiAgLy9cbiAgLy8gPiBmb28uYnJva2VuKClAL2V4YW1wbGUvZm9vLmpzXG4gIC8vID4gQmFyQC9leGFtcGxlL2Jhci5qc1xuICAvLyA+IEAvdGVzdC9iYXIudGVzdC5qc1xuICAvLyA+IEAvbGliL3F1bml0LmpzOjUwMDoxMlxuICAvLyA+IEAvbGliL3F1bml0LmpzOjEwMDoyOFxuICAvLyA+IEAvbGliL3F1bml0LmpzOjIwMDo1NlxuICAvLyA+IHNldFRpbWVvdXRAXG4gIC8vID4gQC9kaXN0L3ZlbmRvci5qc1xuICAvL1xuICAvLyBhbmQgc2hvcnRlbiBpdCB0byBzaG93IHVwIHVudGlsIHRoZSBlbmQgb2YgdGhlIHVzZXIncyBiYXIudGVzdC5qcyBjb2RlLlxuICAvL1xuICAvLyA+IGZvby5icm9rZW4oKUAvZXhhbXBsZS9mb28uanNcbiAgLy8gPiBCYXJAL2V4YW1wbGUvYmFyLmpzXG4gIC8vID4gQC90ZXN0L2Jhci50ZXN0LmpzXG4gIC8vXG4gIC8vIFFVbml0IHdpbGwgb2J0YWluIG9uZSBleGFtcGxlIHRyYWNlIChvbmNlIHBlciBwcm9jZXNzL3BhZ2Vsb2FkIHN1ZmZpY2VzKSxcbiAgLy8gc3RyaXAgb2ZmIGFueSA6PGxpbmU+IGFuZCA6PGxpbmU+Ojxjb2x1bW4+LCBhbmQgdXNlIHRoYXQgYXMgbWF0Y2ggbmVlZGxlLFxuICAvLyB0byB0aGUgZmlyc3QgUVVuaXQtaW50ZXJuYWwgZnJhbWVzLCBhbmQgdGhlbiBzdG9wIGF0IHRoYXQgcG9pbnQuXG4gIC8vIEFueSBsYXRlciBmcmFtZXMsIGluY2x1ZGluZyB0aG9zZSB0aGF0IGFyZSBvdXRzaWRlIFFVbml0IGFnYWluLCB3aWxsIGJlIG9tbWl0dGVkXG4gIC8vIGFzIGJlaW5nIHVuaW50ZXJlc3RpbmcgdG8gdGhlIHRlc3QsIHNpbmNlIFFVbml0IHdpbGwgaGF2ZSBlaXRoZXIgc3RhcnRlZCBvclxuICAvLyByZXN1bWVkIHRoZSB0ZXN0LiBUaGlzIHdlIGFsc28gY2xlYW4gYXdheSBicm93c2VyIGJ1aWx0LWlucywgb3Igb3RoZXJcbiAgLy8gdmVuZG9yL2J1bmRsZXIgdGhhdCBtYXkgYmUgaGlnaGVyIHVwIHRoZSBzdGFjay5cbiAgLy9cbiAgLy8gU3RyaXBwaW5nIDo8bGluZT46PGNvbHVtbj4gaXMgbm90IGZvciBwcmV0dHluZXNzLCBpdCBpcyBlc3NlbnRpYWwgZm9yIHRoZVxuICAvLyBtYXRjaCBuZWVkbGUgdG8gd29yaywgc2luY2UgdGhpcyBzYW1wbGUgdHJhY2Ugd2lsbCBieSBkZWZpbml0aW4gbm90IGJlIHRoZVxuICAvLyBzYW1lIGxpbmUgYXMgZS5nLiB0aGUgUVVuaXQudGVzdCgpIGNhbGwgd2UncmUgdHJ5aW5nIHRvIGlkZW50aWZ5LlxuICAvL1xuICAvLyBTZWUgYWxzbzpcbiAgLy8gLSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9FcnJvci9TdGFja1xuXG4gIGZ1bmN0aW9uIHF1bml0RmlsZU5hbWUoKSB7XG4gICAgdmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG4gICAgaWYgKCFlcnJvci5zdGFjaykge1xuICAgICAgLy8gQ29weSBvZiBzb3VyY2VGcm9tU3RhY2t0cmFjZSgpIHRvIGF2b2lkIGNpcmN1bGFyIGRlcGVuZGVuY3lcbiAgICAgIC8vIFN1cHBvcnQ6IElFIDktMTFcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGVycm9yID0gZXJyO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKGVycm9yLnN0YWNrIHx8ICcnXG4gICAgLy8gQ29weSBvZiBleHRyYWN0U3RhY2t0cmFjZSgpIHRvIGF2b2lkIGNpcmN1bGFyIGRlcGVuZGVuY3lcbiAgICAvLyBTdXBwb3J0OiBWOC9DaHJvbWVcbiAgICApLnJlcGxhY2UoL15lcnJvciRcXG4vaW0sICcnKS5zcGxpdCgnXFxuJylbMF1cbiAgICAvLyBHbG9iYWwgcmVwbGFjZSwgYmVjYXVzZSBhIGZyYW1lIGxpa2UgbG9jYWxob3N0OjQwMDAvbGliL3F1bml0LmpzOjEyMzQ6NTAsXG4gICAgLy8gd291bGQgb3RoZXJ3aXNlIChoYXJtbGVzc2x5LCBidXQgdXNlbGVzc2x5KSByZW1vdmUgb25seSB0aGUgcG9ydCAoZmlyc3QgbWF0Y2gpLlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9xdW5pdGpzL3F1bml0L2lzc3Vlcy8xNzY5XG4gICAgLnJlcGxhY2UoLyg6XFxkKykrXFwpPy9nLCAnJylcbiAgICAvLyBSZW1vdmUgYW55dGhpbmcgcHJpb3IgdG8gdGhlIGxhc3Qgc2xhc2ggKFVuaXgvV2luZG93cykgZnJvbSB0aGUgbGFzdCBmcmFtZSxcbiAgICAvLyBsZWF2aW5nIG9ubHkgXCJxdW5pdC5qc1wiLlxuICAgIC5yZXBsYWNlKC8uK1svXFxcXF0vLCAnJyk7XG4gIH1cbiAgdmFyIGZpbGVOYW1lID0gcXVuaXRGaWxlTmFtZSgpO1xuXG4gIC8qKlxuICAgKiBSZXNwb25zaWJpbGl0aWVzOlxuICAgKiAtIEZvciBpbnRlcm5hbCBlcnJvcnMgZnJvbSBRVW5pdCBpdHNlbGYsIHJlbW92ZSB0aGUgZmlyc3QgcXVuaXQuanMgZnJhbWVzLlxuICAgKiAtIEZvciBlcnJvcnMgaW4gTm9kZS5qcywgZm9ybWF0IGFueSByZW1haW5pbmcgcXVuaXQuanMgYW5kIG5vZGU6aW50ZXJuYWxcbiAgICogICBmcmFtZXMgYXMgaW50ZXJuYWwgKGkuZS4gZ3JleSBvdXQpLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RhY2sgRXJyb3Ijc3RhY2tcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm9ybWF0SW50ZXJuYWwgRm9ybWF0IGEgc3RyaW5nIGluIGFuIFwiaW50ZXJuYWxcIiBjb2xvclxuICAgKiBAcGFyYW0ge3N0cmluZ3xudWxsfSBbZVRvU3RyaW5nXSBFcnJvciN0b1N0cmluZygpIHRvIGhlbHAgcmVtb3ZlXG4gICAqICBub2lzZSBmcm9tIE5vZGUuanMvVjggc3RhY2sgdHJhY2VzLlxuICAgKi9cbiAgZnVuY3Rpb24gYW5ub3RhdGVTdGFja3RyYWNlKHN0YWNrLCBmb3JtYXRJbnRlcm5hbCkge1xuICAgIHZhciBlVG9TdHJpbmcgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IG51bGw7XG4gICAgdmFyIGZyYW1lcyA9IHN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICB2YXIgYW5ub3RhdGVkID0gW107XG4gICAgaWYgKGVUb1N0cmluZyAmJiBlVG9TdHJpbmcuaW5kZXhPZihmcmFtZXNbMF0pICE9PSAtMSkge1xuICAgICAgLy8gSW4gRmlyZWZveCBhbmQgU2FmYXJpIGUuc3RhY2sgc3RhcnRzIHdpdGggZnJhbWUgMCwgYnV0IGluIFY4IChDaHJvbWUvTm9kZS5qcyksXG4gICAgICAvLyBlLnN0YWNrIHN0YXJ0cyBmaXJzdCBzdHJpbmdpZmllZCBtZXNzYWdlLiBQcmVzZXJ2ZSB0aGlzIHNlcGFyYXRlbHksXG4gICAgICAvLyBzbyB0aGF0LCBiZWxvdywgd2UgY2FuIGRpc3Rpbmd1aXNoIGJldHdlZW4gaW50ZXJuYWwgZnJhbWVzIG9uIHRvcFxuICAgICAgLy8gKHRvIHJlbW92ZSkgdnMgbGF0ZXIgaW50ZXJuYWwgZnJhbWVzICh0byBmb3JtYXQgZGlmZmVyZW50bHkpLlxuICAgICAgYW5ub3RhdGVkLnB1c2goZnJhbWVzLnNoaWZ0KCkpO1xuICAgIH1cbiAgICB2YXIgaW5pdGlhbEludGVybmFsID0gdHJ1ZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZyYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGZyYW1lID0gZnJhbWVzW2ldO1xuICAgICAgdmFyIGlzSW50ZXJuYWwgPSBmaWxlTmFtZSAmJiBmcmFtZS5pbmRleE9mKGZpbGVOYW1lKSAhPT0gLTEgfHxcbiAgICAgIC8vIFN1cHBvcnQgTm9kZSAxNis6IEVTTS1zdHlsZVxuICAgICAgLy8gXCJhdCB3cmFwIChub2RlOmludGVybmFsL21vZHVsZXMvY2pzL2xvYWRlcjoxKVwiXG4gICAgICBmcmFtZS5pbmRleE9mKCdub2RlOmludGVybmFsLycpICE9PSAtMSB8fFxuICAgICAgLy8gU3VwcG9ydCBOb2RlIDEyLTE0IChDSlMtc3R5bGUpXG4gICAgICAvLyBcImF0IGxvYWQgKGludGVybmFsL21vZHVsZXMvY2pzL2xvYWRlci5qczo3KVwiXG4gICAgICBmcmFtZS5tYXRjaCgvXlxccythdCAuK1xcKGludGVybmFsW14pXSpcXCkkLykgfHxcbiAgICAgIC8vIFN1cHBvcnQgTm9kZSAxMFxuICAgICAgLy8gXCJhdCBsaXN0T25UaW1lb3V0ICh0aW1lcnMuanM6MjYzKVwiXG4gICAgICAvLyBBdm9pZCBtYXRjaGluZyBcIihDOilcIiBvbiBXaW5kb3dzXG4gICAgICAvLyBBdm9pZCBtYXRjaGluZyBcIihodHRwOilcIlxuICAgICAgZnJhbWUubWF0Y2goL15cXHMrYXQgLitcXChbYS16XStcXC5qc1s6XFxkXSpcXCkkLyk7XG4gICAgICBpZiAoIWlzSW50ZXJuYWwpIHtcbiAgICAgICAgaW5pdGlhbEludGVybmFsID0gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyBSZW1vdmUgaW5pdGlhbCBpbnRlcm5hbCBmcmFtZXMgZW50aXJlbHkuXG4gICAgICBpZiAoIWluaXRpYWxJbnRlcm5hbCkge1xuICAgICAgICBhbm5vdGF0ZWQucHVzaChpc0ludGVybmFsID8gZm9ybWF0SW50ZXJuYWwoZnJhbWUpIDogZnJhbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYW5ub3RhdGVkLmpvaW4oJ1xcbicpO1xuICB9XG4gIGZ1bmN0aW9uIGV4dHJhY3RTdGFja3RyYWNlKGUsIG9mZnNldCkge1xuICAgIG9mZnNldCA9IG9mZnNldCA9PT0gdW5kZWZpbmVkID8gNCA6IG9mZnNldDtcblxuICAgIC8vIFN1cHBvcnQ6IElFOSwgZS5zdGFjayBpcyBub3Qgc3VwcG9ydGVkLCB3ZSB3aWxsIHJldHVybiB1bmRlZmluZWRcbiAgICBpZiAoZSAmJiBlLnN0YWNrKSB7XG4gICAgICB2YXIgc3RhY2sgPSBlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIC8vIEluIEZpcmVmb3ggYW5kIFNhZmFyaSwgZS5zdGFjayBzdGFydHMgaW1tZWRpYXRlbHkgd2l0aCB0aGUgZmlyc3QgZnJhbWUuXG4gICAgICAvL1xuICAgICAgLy8gSW4gVjggKENocm9tZS9Ob2RlLmpzKSwgdGhlIHN0YWNrIHN0YXJ0cyBmaXJzdCB3aXRoIGEgc3RyaW5naWZpZWQgZXJyb3IgbWVzc2FnZSxcbiAgICAgIC8vIGFuZCB0aGUgcmVhbCBzdGFjayBzdGFydGluZyBvbiBsaW5lIDIuXG4gICAgICBpZiAoL15lcnJvciQvaS50ZXN0KHN0YWNrWzBdKSkge1xuICAgICAgICBzdGFjay5zaGlmdCgpO1xuICAgICAgfVxuICAgICAgaWYgKGZpbGVOYW1lKSB7XG4gICAgICAgIHZhciBpbmNsdWRlID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSBvZmZzZXQ7IGkgPCBzdGFjay5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChzdGFja1tpXS5pbmRleE9mKGZpbGVOYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbmNsdWRlLnB1c2goc3RhY2tbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmNsdWRlLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBpbmNsdWRlLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RhY2tbb2Zmc2V0XTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gc291cmNlRnJvbVN0YWNrdHJhY2Uob2Zmc2V0KSB7XG4gICAgdmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cbiAgICAvLyBTdXBwb3J0OiBJRSA5LTExLCBpT1MgN1xuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgZ2VuZXJhdGUgdGhlIGBzdGFja2AgcHJvcGVydHkgZm9yIGBuZXcgRXJyb3IoKWBcbiAgICAvLyBTZWUgYWxzbyBodHRwczovL2dpdGh1Yi5jb20vcXVuaXRqcy9xdW5pdC9pc3N1ZXMvNjM2XG4gICAgaWYgKCFlcnJvci5zdGFjaykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgZXJyb3IgPSBlcnI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBleHRyYWN0U3RhY2t0cmFjZShlcnJvciwgb2Zmc2V0KTtcbiAgfVxuXG4gIHZhciBBc3NlcnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFzc2VydCh0ZXN0Q29udGV4dCkge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFzc2VydCk7XG4gICAgICB0aGlzLnRlc3QgPSB0ZXN0Q29udGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIF9jcmVhdGVDbGFzcyhBc3NlcnQsIFt7XG4gICAgICBrZXk6IFwidGltZW91dFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRpbWVvdXQoZHVyYXRpb24pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkdXJhdGlvbiAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IHBhc3MgYSBudW1iZXIgYXMgdGhlIGR1cmF0aW9uIHRvIGFzc2VydC50aW1lb3V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ZXN0LnRpbWVvdXQgPSBkdXJhdGlvbjtcblxuICAgICAgICAvLyBJZiBhIHRpbWVvdXQgaGFzIGJlZW4gc2V0LCBjbGVhciBpdCBhbmQgcmVzZXQgd2l0aCB0aGUgbmV3IGR1cmF0aW9uXG4gICAgICAgIGlmIChjb25maWcudGltZW91dCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dChjb25maWcudGltZW91dCk7XG4gICAgICAgICAgY29uZmlnLnRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgIGlmIChjb25maWcudGltZW91dEhhbmRsZXIgJiYgdGhpcy50ZXN0LnRpbWVvdXQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnRlc3QuaW50ZXJuYWxSZXNldFRpbWVvdXQodGhpcy50ZXN0LnRpbWVvdXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBEb2N1bWVudHMgYSBcInN0ZXBcIiwgd2hpY2ggaXMgYSBzdHJpbmcgdmFsdWUsIGluIGEgdGVzdCBhcyBhIHBhc3NpbmcgYXNzZXJ0aW9uXG4gICAgfSwge1xuICAgICAga2V5OiBcInN0ZXBcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdGVwKG1lc3NhZ2UpIHtcbiAgICAgICAgdmFyIGFzc2VydGlvbk1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB2YXIgcmVzdWx0ID0gISFtZXNzYWdlO1xuICAgICAgICB0aGlzLnRlc3Quc3RlcHMucHVzaChtZXNzYWdlKTtcbiAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlID09PSAndW5kZWZpbmVkJyB8fCBtZXNzYWdlID09PSAnJykge1xuICAgICAgICAgIGFzc2VydGlvbk1lc3NhZ2UgPSAnWW91IG11c3QgcHJvdmlkZSBhIG1lc3NhZ2UgdG8gYXNzZXJ0LnN0ZXAnO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtZXNzYWdlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIGFzc2VydGlvbk1lc3NhZ2UgPSAnWW91IG11c3QgcHJvdmlkZSBhIHN0cmluZyB2YWx1ZSB0byBhc3NlcnQuc3RlcCc7XG4gICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wdXNoUmVzdWx0KHtcbiAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICBtZXNzYWdlOiBhc3NlcnRpb25NZXNzYWdlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBWZXJpZmllcyB0aGUgc3RlcHMgaW4gYSB0ZXN0IG1hdGNoIGEgZ2l2ZW4gYXJyYXkgb2Ygc3RyaW5nIHZhbHVlc1xuICAgIH0sIHtcbiAgICAgIGtleTogXCJ2ZXJpZnlTdGVwc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHZlcmlmeVN0ZXBzKHN0ZXBzLCBtZXNzYWdlKSB7XG4gICAgICAgIC8vIFNpbmNlIHRoZSBzdGVwcyBhcnJheSBpcyBqdXN0IHN0cmluZyB2YWx1ZXMsIHdlIGNhbiBjbG9uZSB3aXRoIHNsaWNlXG4gICAgICAgIHZhciBhY3R1YWxTdGVwc0Nsb25lID0gdGhpcy50ZXN0LnN0ZXBzLnNsaWNlKCk7XG4gICAgICAgIHRoaXMuZGVlcEVxdWFsKGFjdHVhbFN0ZXBzQ2xvbmUsIHN0ZXBzLCBtZXNzYWdlKTtcbiAgICAgICAgdGhpcy50ZXN0LnN0ZXBzQ291bnQgKz0gdGhpcy50ZXN0LnN0ZXBzLmxlbmd0aDtcbiAgICAgICAgdGhpcy50ZXN0LnN0ZXBzLmxlbmd0aCA9IDA7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImV4cGVjdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGV4cGVjdChhc3NlcnRzKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgdGhpcy50ZXN0LmV4cGVjdGVkID0gYXNzZXJ0cztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy50ZXN0LmV4cGVjdGVkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSBhIG5ldyBhc3luYyBwYXVzZSBhbmQgcmV0dXJuIGEgbmV3IGZ1bmN0aW9uIHRoYXQgY2FuIHJlbGVhc2UgdGhlIHBhdXNlLlxuICAgIH0sIHtcbiAgICAgIGtleTogXCJhc3luY1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFzeW5jKGNvdW50KSB7XG4gICAgICAgIGlmIChjb3VudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY291bnQgPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb3VudCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhc3luYyB0YWtlcyBudW1iZXIgYXMgYW4gaW5wdXQnKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVxdWlyZWRDYWxscyA9IGNvdW50O1xuICAgICAgICByZXR1cm4gdGhpcy50ZXN0LmludGVybmFsU3RvcChyZXF1aXJlZENhbGxzKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xvc2VUb1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlVG8oYWN0dWFsLCBleHBlY3RlZCwgZGVsdGEsIG1lc3NhZ2UpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkZWx0YSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdjbG9zZVRvKCkgcmVxdWlyZXMgYSBkZWx0YSBhcmd1bWVudCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHVzaFJlc3VsdCh7XG4gICAgICAgICAgcmVzdWx0OiBNYXRoLmFicyhhY3R1YWwgLSBleHBlY3RlZCkgPD0gZGVsdGEsXG4gICAgICAgICAgYWN0dWFsOiBhY3R1YWwsXG4gICAgICAgICAgZXhwZWN0ZWQ6IGV4cGVjdGVkLFxuICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UgfHwgXCJ2YWx1ZSBzaG91bGQgYmUgd2l0aGluIFwiLmNvbmNhdChkZWx0YSwgXCIgaW5jbHVzaXZlXCIpXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBBbGlhcyBvZiBwdXNoUmVzdWx0LlxuICAgIH0sIHtcbiAgICAgIGtleTogXCJwdXNoXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaChyZXN1bHQsIGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsIG5lZ2F0aXZlKSB7XG4gICAgICAgIHZhciBjdXJyZW50QXNzZXJ0ID0gdGhpcyBpbnN0YW5jZW9mIEFzc2VydCA/IHRoaXMgOiBjb25maWcuY3VycmVudC5hc3NlcnQ7XG4gICAgICAgIHJldHVybiBjdXJyZW50QXNzZXJ0LnB1c2hSZXN1bHQoe1xuICAgICAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgIGFjdHVhbDogYWN0dWFsLFxuICAgICAgICAgIGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICAgIG5lZ2F0aXZlOiBuZWdhdGl2ZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gUHVibGljIEFQSSB0byBpbnRlcm5hbCB0ZXN0LnB1c2hSZXN1bHQoKVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJwdXNoUmVzdWx0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaFJlc3VsdChyZXN1bHRJbmZvKSB7XG4gICAgICAgIC8vIERlc3RydWN0dXJlIG9mIHJlc3VsdEluZm8gPSB7IHJlc3VsdCwgYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgbmVnYXRpdmUgfVxuICAgICAgICB2YXIgYXNzZXJ0ID0gdGhpcztcbiAgICAgICAgdmFyIGN1cnJlbnRUZXN0ID0gYXNzZXJ0IGluc3RhbmNlb2YgQXNzZXJ0ICYmIGFzc2VydC50ZXN0IHx8IGNvbmZpZy5jdXJyZW50O1xuXG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGZpeC5cbiAgICAgICAgLy8gQWxsb3dzIHRoZSBkaXJlY3QgdXNlIG9mIGdsb2JhbCBleHBvcnRlZCBhc3NlcnRpb25zIGFuZCBRVW5pdC5hc3NlcnQuKlxuICAgICAgICAvLyBBbHRob3VnaCwgaXQncyB1c2UgaXMgbm90IHJlY29tbWVuZGVkIGFzIGl0IGNhbiBsZWFrIGFzc2VydGlvbnNcbiAgICAgICAgLy8gdG8gb3RoZXIgdGVzdHMgZnJvbSBhc3luYyB0ZXN0cywgYmVjYXVzZSB3ZSBvbmx5IGdldCBhIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCB0ZXN0LFxuICAgICAgICAvLyBub3QgZXhhY3RseSB0aGUgdGVzdCB3aGVyZSBhc3NlcnRpb24gd2VyZSBpbnRlbmRlZCB0byBiZSBjYWxsZWQuXG4gICAgICAgIGlmICghY3VycmVudFRlc3QpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Fzc2VydGlvbiBvdXRzaWRlIHRlc3QgY29udGV4dCwgaW4gJyArIHNvdXJjZUZyb21TdGFja3RyYWNlKDIpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShhc3NlcnQgaW5zdGFuY2VvZiBBc3NlcnQpKSB7XG4gICAgICAgICAgYXNzZXJ0ID0gY3VycmVudFRlc3QuYXNzZXJ0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhc3NlcnQudGVzdC5wdXNoUmVzdWx0KHJlc3VsdEluZm8pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJva1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9rKHJlc3VsdCwgbWVzc2FnZSkge1xuICAgICAgICBpZiAoIW1lc3NhZ2UpIHtcbiAgICAgICAgICBtZXNzYWdlID0gcmVzdWx0ID8gJ29rYXknIDogXCJmYWlsZWQsIGV4cGVjdGVkIGFyZ3VtZW50IHRvIGJlIHRydXRoeSwgd2FzOiBcIi5jb25jYXQoZHVtcC5wYXJzZShyZXN1bHQpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnB1c2hSZXN1bHQoe1xuICAgICAgICAgIHJlc3VsdDogISFyZXN1bHQsXG4gICAgICAgICAgYWN0dWFsOiByZXN1bHQsXG4gICAgICAgICAgZXhwZWN0ZWQ6IHRydWUsXG4gICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwibm90T2tcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBub3RPayhyZXN1bHQsIG1lc3NhZ2UpIHtcbiAgICAgICAgaWYgKCFtZXNzYWdlKSB7XG4gICAgICAgICAgbWVzc2FnZSA9ICFyZXN1bHQgPyAnb2theScgOiBcImZhaWxlZCwgZXhwZWN0ZWQgYXJndW1lbnQgdG8gYmUgZmFsc3ksIHdhczogXCIuY29uY2F0KGR1bXAucGFyc2UocmVzdWx0KSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wdXNoUmVzdWx0KHtcbiAgICAgICAgICByZXN1bHQ6ICFyZXN1bHQsXG4gICAgICAgICAgYWN0dWFsOiByZXN1bHQsXG4gICAgICAgICAgZXhwZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInRydWVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdHJ1ZShyZXN1bHQsIG1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5wdXNoUmVzdWx0KHtcbiAgICAgICAgICByZXN1bHQ6IHJlc3VsdCA9PT0gdHJ1ZSxcbiAgICAgICAgICBhY3R1YWw6IHJlc3VsdCxcbiAgICAgICAgICBleHBlY3RlZDogdHJ1ZSxcbiAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJmYWxzZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9mYWxzZShyZXN1bHQsIG1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5wdXNoUmVzdWx0KHtcbiAgICAgICAgICByZXN1bHQ6IHJlc3VsdCA9PT0gZmFsc2UsXG4gICAgICAgICAgYWN0dWFsOiByZXN1bHQsXG4gICAgICAgICAgZXhwZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImVxdWFsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICAgICAgICB0aGlzLnB1c2hSZXN1bHQoe1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcbiAgICAgICAgICByZXN1bHQ6IGV4cGVjdGVkID09IGFjdHVhbCxcbiAgICAgICAgICBhY3R1YWw6IGFjdHVhbCxcbiAgICAgICAgICBleHBlY3RlZDogZXhwZWN0ZWQsXG4gICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwibm90RXF1YWxcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBub3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMucHVzaFJlc3VsdCh7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuICAgICAgICAgIHJlc3VsdDogZXhwZWN0ZWQgIT0gYWN0dWFsLFxuICAgICAgICAgIGFjdHVhbDogYWN0dWFsLFxuICAgICAgICAgIGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICAgIG5lZ2F0aXZlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJwcm9wRXF1YWxcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcm9wRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICAgICAgICBhY3R1YWwgPSBvYmplY3RWYWx1ZXMoYWN0dWFsKTtcbiAgICAgICAgZXhwZWN0ZWQgPSBvYmplY3RWYWx1ZXMoZXhwZWN0ZWQpO1xuICAgICAgICB0aGlzLnB1c2hSZXN1bHQoe1xuICAgICAgICAgIHJlc3VsdDogZXF1aXYoYWN0dWFsLCBleHBlY3RlZCksXG4gICAgICAgICAgYWN0dWFsOiBhY3R1YWwsXG4gICAgICAgICAgZXhwZWN0ZWQ6IGV4cGVjdGVkLFxuICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIm5vdFByb3BFcXVhbFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG5vdFByb3BFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gICAgICAgIGFjdHVhbCA9IG9iamVjdFZhbHVlcyhhY3R1YWwpO1xuICAgICAgICBleHBlY3RlZCA9IG9iamVjdFZhbHVlcyhleHBlY3RlZCk7XG4gICAgICAgIHRoaXMucHVzaFJlc3VsdCh7XG4gICAgICAgICAgcmVzdWx0OiAhZXF1aXYoYWN0dWFsLCBleHBlY3RlZCksXG4gICAgICAgICAgYWN0dWFsOiBhY3R1YWwsXG4gICAgICAgICAgZXhwZWN0ZWQ6IGV4cGVjdGVkLFxuICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICAgICAgbmVnYXRpdmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInByb3BDb250YWluc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByb3BDb250YWlucyhhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gICAgICAgIGFjdHVhbCA9IG9iamVjdFZhbHVlc1N1YnNldChhY3R1YWwsIGV4cGVjdGVkKTtcblxuICAgICAgICAvLyBUaGUgZXhwZWN0ZWQgcGFyYW1ldGVyIGlzIHVzdWFsbHkgYSBwbGFpbiBvYmplY3QsIGJ1dCBjbG9uZSBpdCBmb3JcbiAgICAgICAgLy8gY29uc2lzdGVuY3kgd2l0aCBwcm9wRXF1YWwoKSwgYW5kIHRvIG1ha2UgaXQgZWFzeSB0byBleHBsYWluIHRoYXRcbiAgICAgICAgLy8gaW5oZXJpdGVuY2UgaXMgbm90IGNvbnNpZGVyZWQgKG9uIGVpdGhlciBzaWRlKSwgYW5kIHRvIHN1cHBvcnRcbiAgICAgICAgLy8gcmVjdXJzaXZlbHkgY2hlY2tpbmcgc3Vic2V0cyBvZiBuZXN0ZWQgb2JqZWN0cy5cbiAgICAgICAgZXhwZWN0ZWQgPSBvYmplY3RWYWx1ZXMoZXhwZWN0ZWQsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5wdXNoUmVzdWx0KHtcbiAgICAgICAgICByZXN1bHQ6IGVxdWl2KGFjdHVhbCwgZXhwZWN0ZWQpLFxuICAgICAgICAgIGFjdHVhbDogYWN0dWFsLFxuICAgICAgICAgIGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJub3RQcm9wQ29udGFpbnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBub3RQcm9wQ29udGFpbnMoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICAgICAgICBhY3R1YWwgPSBvYmplY3RWYWx1ZXNTdWJzZXQoYWN0dWFsLCBleHBlY3RlZCk7XG4gICAgICAgIGV4cGVjdGVkID0gb2JqZWN0VmFsdWVzKGV4cGVjdGVkKTtcbiAgICAgICAgdGhpcy5wdXNoUmVzdWx0KHtcbiAgICAgICAgICByZXN1bHQ6ICFlcXVpdihhY3R1YWwsIGV4cGVjdGVkKSxcbiAgICAgICAgICBhY3R1YWw6IGFjdHVhbCxcbiAgICAgICAgICBleHBlY3RlZDogZXhwZWN0ZWQsXG4gICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgICBuZWdhdGl2ZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZGVlcEVxdWFsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5wdXNoUmVzdWx0KHtcbiAgICAgICAgICByZXN1bHQ6IGVxdWl2KGFjdHVhbCwgZXhwZWN0ZWQpLFxuICAgICAgICAgIGFjdHVhbDogYWN0dWFsLFxuICAgICAgICAgIGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJub3REZWVwRXF1YWxcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBub3REZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICAgICAgICB0aGlzLnB1c2hSZXN1bHQoe1xuICAgICAgICAgIHJlc3VsdDogIWVxdWl2KGFjdHVhbCwgZXhwZWN0ZWQpLFxuICAgICAgICAgIGFjdHVhbDogYWN0dWFsLFxuICAgICAgICAgIGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICAgIG5lZ2F0aXZlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzdHJpY3RFcXVhbFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5wdXNoUmVzdWx0KHtcbiAgICAgICAgICByZXN1bHQ6IGV4cGVjdGVkID09PSBhY3R1YWwsXG4gICAgICAgICAgYWN0dWFsOiBhY3R1YWwsXG4gICAgICAgICAgZXhwZWN0ZWQ6IGV4cGVjdGVkLFxuICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIm5vdFN0cmljdEVxdWFsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gbm90U3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICAgICAgICB0aGlzLnB1c2hSZXN1bHQoe1xuICAgICAgICAgIHJlc3VsdDogZXhwZWN0ZWQgIT09IGFjdHVhbCxcbiAgICAgICAgICBhY3R1YWw6IGFjdHVhbCxcbiAgICAgICAgICBleHBlY3RlZDogZXhwZWN0ZWQsXG4gICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgICBuZWdhdGl2ZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICd0aHJvd3MnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRocm93cyhibG9jaywgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgICAgICAgdmFyIF92YWxpZGF0ZUV4cGVjdGVkRXhjZSA9IHZhbGlkYXRlRXhwZWN0ZWRFeGNlcHRpb25BcmdzKGV4cGVjdGVkLCBtZXNzYWdlLCAndGhyb3dzJyk7XG4gICAgICAgIHZhciBfdmFsaWRhdGVFeHBlY3RlZEV4Y2UyID0gX3NsaWNlZFRvQXJyYXkoX3ZhbGlkYXRlRXhwZWN0ZWRFeGNlLCAyKTtcbiAgICAgICAgZXhwZWN0ZWQgPSBfdmFsaWRhdGVFeHBlY3RlZEV4Y2UyWzBdO1xuICAgICAgICBtZXNzYWdlID0gX3ZhbGlkYXRlRXhwZWN0ZWRFeGNlMlsxXTtcbiAgICAgICAgdmFyIGN1cnJlbnRUZXN0ID0gdGhpcyBpbnN0YW5jZW9mIEFzc2VydCAmJiB0aGlzLnRlc3QgfHwgY29uZmlnLmN1cnJlbnQ7XG4gICAgICAgIGlmICh0eXBlb2YgYmxvY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjdXJyZW50VGVzdC5hc3NlcnQucHVzaFJlc3VsdCh7XG4gICAgICAgICAgICByZXN1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgYWN0dWFsOiBibG9jayxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGUgdmFsdWUgcHJvdmlkZWQgdG8gYGFzc2VydC50aHJvd3NgIGluICcgKyAnXCInICsgY3VycmVudFRlc3QudGVzdE5hbWUgKyAnXCIgd2FzIG5vdCBhIGZ1bmN0aW9uLidcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFjdHVhbDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBjdXJyZW50VGVzdC5pZ25vcmVHbG9iYWxFcnJvcnMgPSB0cnVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGJsb2NrLmNhbGwoY3VycmVudFRlc3QudGVzdEVudmlyb25tZW50KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGFjdHVhbCA9IGU7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFRlc3QuaWdub3JlR2xvYmFsRXJyb3JzID0gZmFsc2U7XG4gICAgICAgIGlmIChhY3R1YWwpIHtcbiAgICAgICAgICB2YXIgX3ZhbGlkYXRlRXhjZXB0aW9uID0gdmFsaWRhdGVFeGNlcHRpb24oYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSk7XG4gICAgICAgICAgdmFyIF92YWxpZGF0ZUV4Y2VwdGlvbjIgPSBfc2xpY2VkVG9BcnJheShfdmFsaWRhdGVFeGNlcHRpb24sIDMpO1xuICAgICAgICAgIHJlc3VsdCA9IF92YWxpZGF0ZUV4Y2VwdGlvbjJbMF07XG4gICAgICAgICAgZXhwZWN0ZWQgPSBfdmFsaWRhdGVFeGNlcHRpb24yWzFdO1xuICAgICAgICAgIG1lc3NhZ2UgPSBfdmFsaWRhdGVFeGNlcHRpb24yWzJdO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRUZXN0LmFzc2VydC5wdXNoUmVzdWx0KHtcbiAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAvLyB1bmRlZmluZWQgaWYgaXQgZGlkbid0IHRocm93XG4gICAgICAgICAgYWN0dWFsOiBhY3R1YWwgJiYgZXJyb3JTdHJpbmcoYWN0dWFsKSxcbiAgICAgICAgICBleHBlY3RlZDogZXhwZWN0ZWQsXG4gICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVqZWN0c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlamVjdHMocHJvbWlzZSwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgICAgICAgdmFyIF92YWxpZGF0ZUV4cGVjdGVkRXhjZTMgPSB2YWxpZGF0ZUV4cGVjdGVkRXhjZXB0aW9uQXJncyhleHBlY3RlZCwgbWVzc2FnZSwgJ3JlamVjdHMnKTtcbiAgICAgICAgdmFyIF92YWxpZGF0ZUV4cGVjdGVkRXhjZTQgPSBfc2xpY2VkVG9BcnJheShfdmFsaWRhdGVFeHBlY3RlZEV4Y2UzLCAyKTtcbiAgICAgICAgZXhwZWN0ZWQgPSBfdmFsaWRhdGVFeHBlY3RlZEV4Y2U0WzBdO1xuICAgICAgICBtZXNzYWdlID0gX3ZhbGlkYXRlRXhwZWN0ZWRFeGNlNFsxXTtcbiAgICAgICAgdmFyIGN1cnJlbnRUZXN0ID0gdGhpcyBpbnN0YW5jZW9mIEFzc2VydCAmJiB0aGlzLnRlc3QgfHwgY29uZmlnLmN1cnJlbnQ7XG4gICAgICAgIHZhciB0aGVuID0gcHJvbWlzZSAmJiBwcm9taXNlLnRoZW47XG4gICAgICAgIGlmICh0eXBlb2YgdGhlbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGN1cnJlbnRUZXN0LmFzc2VydC5wdXNoUmVzdWx0KHtcbiAgICAgICAgICAgIHJlc3VsdDogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiAnVGhlIHZhbHVlIHByb3ZpZGVkIHRvIGBhc3NlcnQucmVqZWN0c2AgaW4gJyArICdcIicgKyBjdXJyZW50VGVzdC50ZXN0TmFtZSArICdcIiB3YXMgbm90IGEgcHJvbWlzZS4nLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9taXNlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkb25lID0gdGhpcy5hc3luYygpO1xuICAgICAgICByZXR1cm4gdGhlbi5jYWxsKHByb21pc2UsIGZ1bmN0aW9uIGhhbmRsZUZ1bGZpbGxtZW50KCkge1xuICAgICAgICAgIGN1cnJlbnRUZXN0LmFzc2VydC5wdXNoUmVzdWx0KHtcbiAgICAgICAgICAgIHJlc3VsdDogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiAnVGhlIHByb21pc2UgcmV0dXJuZWQgYnkgdGhlIGBhc3NlcnQucmVqZWN0c2AgY2FsbGJhY2sgaW4gJyArICdcIicgKyBjdXJyZW50VGVzdC50ZXN0TmFtZSArICdcIiBkaWQgbm90IHJlamVjdC4nLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9taXNlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZG9uZSgpO1xuICAgICAgICB9LCBmdW5jdGlvbiBoYW5kbGVSZWplY3Rpb24oYWN0dWFsKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgICB2YXIgX3ZhbGlkYXRlRXhjZXB0aW9uMyA9IHZhbGlkYXRlRXhjZXB0aW9uKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpO1xuICAgICAgICAgIHZhciBfdmFsaWRhdGVFeGNlcHRpb240ID0gX3NsaWNlZFRvQXJyYXkoX3ZhbGlkYXRlRXhjZXB0aW9uMywgMyk7XG4gICAgICAgICAgcmVzdWx0ID0gX3ZhbGlkYXRlRXhjZXB0aW9uNFswXTtcbiAgICAgICAgICBleHBlY3RlZCA9IF92YWxpZGF0ZUV4Y2VwdGlvbjRbMV07XG4gICAgICAgICAgbWVzc2FnZSA9IF92YWxpZGF0ZUV4Y2VwdGlvbjRbMl07XG4gICAgICAgICAgY3VycmVudFRlc3QuYXNzZXJ0LnB1c2hSZXN1bHQoe1xuICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICAvLyBsZWF2ZSByZWplY3Rpb24gdmFsdWUgb2YgdW5kZWZpbmVkIGFzLWlzXG4gICAgICAgICAgICBhY3R1YWw6IGFjdHVhbCAmJiBlcnJvclN0cmluZyhhY3R1YWwpLFxuICAgICAgICAgICAgZXhwZWN0ZWQ6IGV4cGVjdGVkLFxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfV0pO1xuICB9KCk7XG4gIGZ1bmN0aW9uIHZhbGlkYXRlRXhwZWN0ZWRFeGNlcHRpb25BcmdzKGV4cGVjdGVkLCBtZXNzYWdlLCBhc3NlcnRpb25NZXRob2QpIHtcbiAgICB2YXIgZXhwZWN0ZWRUeXBlID0gb2JqZWN0VHlwZShleHBlY3RlZCk7XG5cbiAgICAvLyAnZXhwZWN0ZWQnIGlzIG9wdGlvbmFsIHVubGVzcyBkb2luZyBzdHJpbmcgY29tcGFyaXNvblxuICAgIGlmIChleHBlY3RlZFR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAobWVzc2FnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1lc3NhZ2UgPSBleHBlY3RlZDtcbiAgICAgICAgZXhwZWN0ZWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBbZXhwZWN0ZWQsIG1lc3NhZ2VdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhc3NlcnQuJyArIGFzc2VydGlvbk1ldGhvZCArICcgZG9lcyBub3QgYWNjZXB0IGEgc3RyaW5nIHZhbHVlIGZvciB0aGUgZXhwZWN0ZWQgYXJndW1lbnQuXFxuJyArICdVc2UgYSBub24tc3RyaW5nIG9iamVjdCB2YWx1ZSAoZS5nLiBSZWdFeHAgb3IgdmFsaWRhdG9yIGZ1bmN0aW9uKSAnICsgJ2luc3RlYWQgaWYgbmVjZXNzYXJ5LicpO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgdmFsaWQgPSAhZXhwZWN0ZWQgfHxcbiAgICAvLyBUT0RPOiBiZSBtb3JlIGV4cGxpY2l0IGhlcmVcbiAgICBleHBlY3RlZFR5cGUgPT09ICdyZWdleHAnIHx8IGV4cGVjdGVkVHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCBleHBlY3RlZFR5cGUgPT09ICdvYmplY3QnO1xuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBleHBlY3RlZCB2YWx1ZSB0eXBlICgnICsgZXhwZWN0ZWRUeXBlICsgJykgJyArICdwcm92aWRlZCB0byBhc3NlcnQuJyArIGFzc2VydGlvbk1ldGhvZCArICcuJyk7XG4gICAgfVxuICAgIHJldHVybiBbZXhwZWN0ZWQsIG1lc3NhZ2VdO1xuICB9XG4gIGZ1bmN0aW9uIHZhbGlkYXRlRXhjZXB0aW9uKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gICAgdmFyIGV4cGVjdGVkVHlwZSA9IG9iamVjdFR5cGUoZXhwZWN0ZWQpO1xuXG4gICAgLy8gVGhlc2UgYnJhbmNoZXMgc2hvdWxkIGJlIGV4aGF1c3RpdmUsIGJhc2VkIG9uIHZhbGlkYXRpb24gZG9uZSBpbiB2YWxpZGF0ZUV4cGVjdGVkRXhjZXB0aW9uXG5cbiAgICAvLyBXZSBkb24ndCB3YW50IHRvIHZhbGlkYXRlXG4gICAgaWYgKCFleHBlY3RlZCkge1xuICAgICAgcmVzdWx0ID0gdHJ1ZTtcblxuICAgICAgLy8gRXhwZWN0ZWQgaXMgYSByZWdleHBcbiAgICB9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gJ3JlZ2V4cCcpIHtcbiAgICAgIHJlc3VsdCA9IGV4cGVjdGVkLnRlc3QoZXJyb3JTdHJpbmcoYWN0dWFsKSk7XG5cbiAgICAgIC8vIExvZyB0aGUgc3RyaW5nIGZvcm0gb2YgdGhlIHJlZ2V4cFxuICAgICAgZXhwZWN0ZWQgPSBTdHJpbmcoZXhwZWN0ZWQpO1xuXG4gICAgICAvLyBFeHBlY3RlZCBpcyBhIGNvbnN0cnVjdG9yLCBtYXliZSBhbiBFcnJvciBjb25zdHJ1Y3Rvci5cbiAgICAgIC8vIE5vdGUgdGhlIGV4dHJhIGNoZWNrIG9uIGl0cyBwcm90b3R5cGUgLSB0aGlzIGlzIGFuIGltcGxpY2l0XG4gICAgICAvLyByZXF1aXJlbWVudCBvZiBcImluc3RhbmNlb2ZcIiwgZWxzZSBpdCB3aWxsIHRocm93IGEgVHlwZUVycm9yLlxuICAgIH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlID09PSAnZnVuY3Rpb24nICYmIGV4cGVjdGVkLnByb3RvdHlwZSAhPT0gdW5kZWZpbmVkICYmIGFjdHVhbCBpbnN0YW5jZW9mIGV4cGVjdGVkKSB7XG4gICAgICByZXN1bHQgPSB0cnVlO1xuXG4gICAgICAvLyBFeHBlY3RlZCBpcyBhbiBFcnJvciBvYmplY3RcbiAgICB9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdCA9IGFjdHVhbCBpbnN0YW5jZW9mIGV4cGVjdGVkLmNvbnN0cnVjdG9yICYmIGFjdHVhbC5uYW1lID09PSBleHBlY3RlZC5uYW1lICYmIGFjdHVhbC5tZXNzYWdlID09PSBleHBlY3RlZC5tZXNzYWdlO1xuXG4gICAgICAvLyBMb2cgdGhlIHN0cmluZyBmb3JtIG9mIHRoZSBFcnJvciBvYmplY3RcbiAgICAgIGV4cGVjdGVkID0gZXJyb3JTdHJpbmcoZXhwZWN0ZWQpO1xuXG4gICAgICAvLyBFeHBlY3RlZCBpcyBhIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggcmV0dXJucyB0cnVlIGlmIHZhbGlkYXRpb24gcGFzc2VkXG4gICAgfSBlbHNlIGlmIChleHBlY3RlZFR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIHByb3RlY3QgYWdhaW5zdCBhY2NpZGVudGFsIHNlbWFudGljcyB3aGljaCBjb3VsZCBoYXJkIGVycm9yIGluIHRoZSB0ZXN0XG4gICAgICB0cnkge1xuICAgICAgICByZXN1bHQgPSBleHBlY3RlZC5jYWxsKHt9LCBhY3R1YWwpID09PSB0cnVlO1xuICAgICAgICBleHBlY3RlZCA9IG51bGw7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGFzc2lnbiB0aGUgXCJleHBlY3RlZFwiIHRvIGEgbmljZSBlcnJvciBzdHJpbmcgdG8gY29tbXVuaWNhdGUgdGhlIGxvY2FsIGZhaWx1cmUgdG8gdGhlIHVzZXJcbiAgICAgICAgZXhwZWN0ZWQgPSBlcnJvclN0cmluZyhlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtyZXN1bHQsIGV4cGVjdGVkLCBtZXNzYWdlXTtcbiAgfVxuXG4gIC8vIFByb3ZpZGUgYW4gYWx0ZXJuYXRpdmUgdG8gYXNzZXJ0LnRocm93cygpLCBmb3IgZW52aXJvbm1lbnRzIHRoYXQgY29uc2lkZXIgdGhyb3dzIGEgcmVzZXJ2ZWQgd29yZFxuICAvLyBLbm93biB0byB1cyBhcmU6IENsb3N1cmUgQ29tcGlsZXIsIE5hcndoYWxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRvdC1ub3RhdGlvblxuICBBc3NlcnQucHJvdG90eXBlLnJhaXNlcyA9IEFzc2VydC5wcm90b3R5cGVbJ3Rocm93cyddO1xuXG4gIHZhciBTVVBQT1JURURfRVZFTlRTID0gWydlcnJvcicsICdydW5TdGFydCcsICdzdWl0ZVN0YXJ0JywgJ3Rlc3RTdGFydCcsICdhc3NlcnRpb24nLCAndGVzdEVuZCcsICdzdWl0ZUVuZCcsICdydW5FbmQnXTtcbiAgdmFyIE1FTU9SWV9FVkVOVFMgPSBbJ2Vycm9yJywgJ3J1bkVuZCddO1xuXG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aXRoIHRoZSBzcGVjaWZpZWQgZGF0YSB0byBhbGwgY3VycmVudGx5IHJlZ2lzdGVyZWQgbGlzdGVuZXJzLlxuICAgKiBDYWxsYmFja3Mgd2lsbCBmaXJlIGluIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IGFyZSByZWdpc3RlcmVkIChGSUZPKS4gVGhpc1xuICAgKiBmdW5jdGlvbiBpcyBub3QgZXhwb3NlZCBwdWJsaWNseTsgaXQgaXMgdXNlZCBieSBRVW5pdCBpbnRlcm5hbHMgdG8gZW1pdFxuICAgKiBsb2dnaW5nIGV2ZW50cy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1ldGhvZCBlbWl0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGZ1bmN0aW9uIGVtaXQoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgaWYgKHR5cGVvZiBldmVudE5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdldmVudE5hbWUgbXVzdCBiZSBhIHN0cmluZyB3aGVuIGVtaXR0aW5nIGFuIGV2ZW50Jyk7XG4gICAgfVxuXG4gICAgLy8gQ2xvbmUgdGhlIGNhbGxiYWNrcyBpbiBjYXNlIG9uZSBvZiB0aGVtIHJlZ2lzdGVycyBhIG5ldyBjYWxsYmFja1xuICAgIHZhciBvcmlnaW5hbENhbGxiYWNrcyA9IGNvbmZpZy5fZXZlbnRfbGlzdGVuZXJzW2V2ZW50TmFtZV07XG4gICAgdmFyIGNhbGxiYWNrcyA9IG9yaWdpbmFsQ2FsbGJhY2tzID8gX3RvQ29uc3VtYWJsZUFycmF5KG9yaWdpbmFsQ2FsbGJhY2tzKSA6IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjYWxsYmFja3NbaV0oZGF0YSk7XG4gICAgfVxuICAgIGlmIChpbkFycmF5KGV2ZW50TmFtZSwgTUVNT1JZX0VWRU5UUykpIHtcbiAgICAgIGNvbmZpZy5fZXZlbnRfbWVtb3J5W2V2ZW50TmFtZV0gPSBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBjYWxsYmFjayBhcyBhIGxpc3RlbmVyIHRvIHRoZSBzcGVjaWZpZWQgZXZlbnQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1ldGhvZCBvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBmdW5jdGlvbiBvbihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHR5cGVvZiBldmVudE5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdldmVudE5hbWUgbXVzdCBiZSBhIHN0cmluZyB3aGVuIHJlZ2lzdGVyaW5nIGEgbGlzdGVuZXInKTtcbiAgICB9IGVsc2UgaWYgKCFpbkFycmF5KGV2ZW50TmFtZSwgU1VQUE9SVEVEX0VWRU5UUykpIHtcbiAgICAgIHZhciBldmVudHMgPSBTVVBQT1JURURfRVZFTlRTLmpvaW4oJywgJyk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcXFwiXCIuY29uY2F0KGV2ZW50TmFtZSwgXCJcXFwiIGlzIG5vdCBhIHZhbGlkIGV2ZW50OyBtdXN0IGJlIG9uZSBvZjogXCIpLmNvbmNhdChldmVudHMsIFwiLlwiKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2NhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvbiB3aGVuIHJlZ2lzdGVyaW5nIGEgbGlzdGVuZXInKTtcbiAgICB9XG4gICAgdmFyIGxpc3RlbmVycyA9IGNvbmZpZy5fZXZlbnRfbGlzdGVuZXJzW2V2ZW50TmFtZV0gfHwgKGNvbmZpZy5fZXZlbnRfbGlzdGVuZXJzW2V2ZW50TmFtZV0gPSBbXSk7XG5cbiAgICAvLyBEb24ndCByZWdpc3RlciB0aGUgc2FtZSBjYWxsYmFjayBtb3JlIHRoYW4gb25jZVxuICAgIGlmICghaW5BcnJheShjYWxsYmFjaywgbGlzdGVuZXJzKSkge1xuICAgICAgbGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xuICAgICAgaWYgKGNvbmZpZy5fZXZlbnRfbWVtb3J5W2V2ZW50TmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjYWxsYmFjayhjb25maWcuX2V2ZW50X21lbW9yeVtldmVudE5hbWVdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgY29tbW9uanNHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB7fTtcblxuICBmdW5jdGlvbiBjb21tb25qc1JlcXVpcmUgKHBhdGgpIHtcbiAgXHR0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBkeW5hbWljYWxseSByZXF1aXJlIFwiJyArIHBhdGggKyAnXCIuIFBsZWFzZSBjb25maWd1cmUgdGhlIGR5bmFtaWNSZXF1aXJlVGFyZ2V0cyBvci9hbmQgaWdub3JlRHluYW1pY1JlcXVpcmVzIG9wdGlvbiBvZiBAcm9sbHVwL3BsdWdpbi1jb21tb25qcyBhcHByb3ByaWF0ZWx5IGZvciB0aGlzIHJlcXVpcmUgY2FsbCB0byB3b3JrLicpO1xuICB9XG5cbiAgdmFyIHByb21pc2VQb2x5ZmlsbCA9IHtleHBvcnRzOiB7fX07XG5cbiAgKGZ1bmN0aW9uICgpIHtcblxuICAgIC8qKiBAc3VwcHJlc3Mge3VuZGVmaW5lZFZhcnN9ICovXG4gICAgdmFyIGdsb2JhbE5TID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gdGhlIG9ubHkgcmVsaWFibGUgbWVhbnMgdG8gZ2V0IHRoZSBnbG9iYWwgb2JqZWN0IGlzXG4gICAgICAvLyBgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKWBcbiAgICAgIC8vIEhvd2V2ZXIsIHRoaXMgY2F1c2VzIENTUCB2aW9sYXRpb25zIGluIENocm9tZSBhcHBzLlxuICAgICAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gZ2xvYmFsVGhpcztcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgY29tbW9uanNHbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBjb21tb25qc0dsb2JhbDtcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcigndW5hYmxlIHRvIGxvY2F0ZSBnbG9iYWwgb2JqZWN0Jyk7XG4gICAgfSgpO1xuXG4gICAgLy8gRXhwb3NlIHRoZSBwb2x5ZmlsbCBpZiBQcm9taXNlIGlzIHVuZGVmaW5lZCBvciBzZXQgdG8gYVxuICAgIC8vIG5vbi1mdW5jdGlvbiB2YWx1ZS4gVGhlIGxhdHRlciBjYW4gYmUgZHVlIHRvIGEgbmFtZWQgSFRNTEVsZW1lbnRcbiAgICAvLyBiZWluZyBleHBvc2VkIGJ5IGJyb3dzZXJzIGZvciBsZWdhY3kgcmVhc29ucy5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdGF5bG9yaGFrZXMvcHJvbWlzZS1wb2x5ZmlsbC9pc3N1ZXMvMTE0XG4gICAgaWYgKHR5cGVvZiBnbG9iYWxOU1snUHJvbWlzZSddID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9taXNlUG9seWZpbGwuZXhwb3J0cyA9IGdsb2JhbE5TWydQcm9taXNlJ107XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHRoaXMge1Byb21pc2V9XG4gICAgICovXG4gICAgZnVuY3Rpb24gZmluYWxseUNvbnN0cnVjdG9yKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgY29uc3RydWN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3IucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3Rvci5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICByZXR1cm4gY29uc3RydWN0b3IucmVqZWN0KHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFsbFNldHRsZWQoYXJyKSB7XG4gICAgICB2YXIgUCA9IHRoaXM7XG4gICAgICByZXR1cm4gbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBpZiAoIShhcnIgJiYgdHlwZW9mIGFyci5sZW5ndGggIT09ICd1bmRlZmluZWQnKSkge1xuICAgICAgICAgIHJldHVybiByZWplY3QobmV3IFR5cGVFcnJvcihfdHlwZW9mKGFycikgKyAnICcgKyBhcnIgKyAnIGlzIG5vdCBpdGVyYWJsZShjYW5ub3QgcmVhZCBwcm9wZXJ0eSBTeW1ib2woU3ltYm9sLml0ZXJhdG9yKSknKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnIpO1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHJldHVybiByZXNvbHZlKFtdKTtcbiAgICAgICAgdmFyIHJlbWFpbmluZyA9IGFyZ3MubGVuZ3RoO1xuICAgICAgICBmdW5jdGlvbiByZXMoaSwgdmFsKSB7XG4gICAgICAgICAgaWYgKHZhbCAmJiAoX3R5cGVvZih2YWwpID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICAgICAgdmFyIHRoZW4gPSB2YWwudGhlbjtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICB0aGVuLmNhbGwodmFsLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgcmVzKGksIHZhbCk7XG4gICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgYXJnc1tpXSA9IHtcbiAgICAgICAgICAgICAgICAgIHN0YXR1czogJ3JlamVjdGVkJyxcbiAgICAgICAgICAgICAgICAgIHJlYXNvbjogZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKC0tcmVtYWluaW5nID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlKGFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYXJnc1tpXSA9IHtcbiAgICAgICAgICAgIHN0YXR1czogJ2Z1bGZpbGxlZCcsXG4gICAgICAgICAgICB2YWx1ZTogdmFsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoLS1yZW1haW5pbmcgPT09IDApIHtcbiAgICAgICAgICAgIHJlc29sdmUoYXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHJlcyhpLCBhcmdzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gU3RvcmUgc2V0VGltZW91dCByZWZlcmVuY2Ugc28gcHJvbWlzZS1wb2x5ZmlsbCB3aWxsIGJlIHVuYWZmZWN0ZWQgYnlcbiAgICAvLyBvdGhlciBjb2RlIG1vZGlmeWluZyBzZXRUaW1lb3V0IChsaWtlIHNpbm9uLnVzZUZha2VUaW1lcnMoKSlcbiAgICB2YXIgc2V0VGltZW91dEZ1bmMgPSBzZXRUaW1lb3V0O1xuICAgIGZ1bmN0aW9uIGlzQXJyYXkoeCkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4oeCAmJiB0eXBlb2YgeC5sZW5ndGggIT09ICd1bmRlZmluZWQnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbm9vcCgpIHt9XG5cbiAgICAvLyBQb2x5ZmlsbCBmb3IgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbiAgICBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBmbi5hcHBseSh0aGlzQXJnLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFByb21pc2UoZm4pIHtcbiAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBQcm9taXNlKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvbWlzZXMgbXVzdCBiZSBjb25zdHJ1Y3RlZCB2aWEgbmV3Jyk7XG4gICAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdub3QgYSBmdW5jdGlvbicpO1xuICAgICAgLyoqIEB0eXBlIHshbnVtYmVyfSAqL1xuICAgICAgdGhpcy5fc3RhdGUgPSAwO1xuICAgICAgLyoqIEB0eXBlIHshYm9vbGVhbn0gKi9cbiAgICAgIHRoaXMuX2hhbmRsZWQgPSBmYWxzZTtcbiAgICAgIC8qKiBAdHlwZSB7UHJvbWlzZXx1bmRlZmluZWR9ICovXG4gICAgICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIC8qKiBAdHlwZSB7IUFycmF5PCFGdW5jdGlvbj59ICovXG4gICAgICB0aGlzLl9kZWZlcnJlZHMgPSBbXTtcbiAgICAgIGRvUmVzb2x2ZShmbiwgdGhpcyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZShzZWxmLCBkZWZlcnJlZCkge1xuICAgICAgd2hpbGUgKHNlbGYuX3N0YXRlID09PSAzKSB7XG4gICAgICAgIHNlbGYgPSBzZWxmLl92YWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChzZWxmLl9zdGF0ZSA9PT0gMCkge1xuICAgICAgICBzZWxmLl9kZWZlcnJlZHMucHVzaChkZWZlcnJlZCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNlbGYuX2hhbmRsZWQgPSB0cnVlO1xuICAgICAgUHJvbWlzZS5faW1tZWRpYXRlRm4oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY2IgPSBzZWxmLl9zdGF0ZSA9PT0gMSA/IGRlZmVycmVkLm9uRnVsZmlsbGVkIDogZGVmZXJyZWQub25SZWplY3RlZDtcbiAgICAgICAgaWYgKGNiID09PSBudWxsKSB7XG4gICAgICAgICAgKHNlbGYuX3N0YXRlID09PSAxID8gcmVzb2x2ZSA6IHJlamVjdCkoZGVmZXJyZWQucHJvbWlzZSwgc2VsZi5fdmFsdWUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmV0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldCA9IGNiKHNlbGYuX3ZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJlamVjdChkZWZlcnJlZC5wcm9taXNlLCBlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShkZWZlcnJlZC5wcm9taXNlLCByZXQpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlc29sdmUoc2VsZiwgbmV3VmFsdWUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFByb21pc2UgUmVzb2x1dGlvbiBQcm9jZWR1cmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9wcm9taXNlcy1hcGx1cy9wcm9taXNlcy1zcGVjI3RoZS1wcm9taXNlLXJlc29sdXRpb24tcHJvY2VkdXJlXG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gc2VsZikgdGhyb3cgbmV3IFR5cGVFcnJvcignQSBwcm9taXNlIGNhbm5vdCBiZSByZXNvbHZlZCB3aXRoIGl0c2VsZi4nKTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlICYmIChfdHlwZW9mKG5ld1ZhbHVlKSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG5ld1ZhbHVlID09PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICAgIHZhciB0aGVuID0gbmV3VmFsdWUudGhlbjtcbiAgICAgICAgICBpZiAobmV3VmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICBzZWxmLl9zdGF0ZSA9IDM7XG4gICAgICAgICAgICBzZWxmLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgZmluYWxlKHNlbGYpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGRvUmVzb2x2ZShiaW5kKHRoZW4sIG5ld1ZhbHVlKSwgc2VsZik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNlbGYuX3N0YXRlID0gMTtcbiAgICAgICAgc2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgZmluYWxlKHNlbGYpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZWplY3Qoc2VsZiwgZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlamVjdChzZWxmLCBuZXdWYWx1ZSkge1xuICAgICAgc2VsZi5fc3RhdGUgPSAyO1xuICAgICAgc2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIGZpbmFsZShzZWxmKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmluYWxlKHNlbGYpIHtcbiAgICAgIGlmIChzZWxmLl9zdGF0ZSA9PT0gMiAmJiBzZWxmLl9kZWZlcnJlZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIFByb21pc2UuX2ltbWVkaWF0ZUZuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIXNlbGYuX2hhbmRsZWQpIHtcbiAgICAgICAgICAgIFByb21pc2UuX3VuaGFuZGxlZFJlamVjdGlvbkZuKHNlbGYuX3ZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNlbGYuX2RlZmVycmVkcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBoYW5kbGUoc2VsZiwgc2VsZi5fZGVmZXJyZWRzW2ldKTtcbiAgICAgIH1cbiAgICAgIHNlbGYuX2RlZmVycmVkcyA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgZnVuY3Rpb24gSGFuZGxlcihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgcHJvbWlzZSkge1xuICAgICAgdGhpcy5vbkZ1bGZpbGxlZCA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogbnVsbDtcbiAgICAgIHRoaXMub25SZWplY3RlZCA9IHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nID8gb25SZWplY3RlZCA6IG51bGw7XG4gICAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRha2UgYSBwb3RlbnRpYWxseSBtaXNiZWhhdmluZyByZXNvbHZlciBmdW5jdGlvbiBhbmQgbWFrZSBzdXJlXG4gICAgICogb25GdWxmaWxsZWQgYW5kIG9uUmVqZWN0ZWQgYXJlIG9ubHkgY2FsbGVkIG9uY2UuXG4gICAgICpcbiAgICAgKiBNYWtlcyBubyBndWFyYW50ZWVzIGFib3V0IGFzeW5jaHJvbnkuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZG9SZXNvbHZlKGZuLCBzZWxmKSB7XG4gICAgICB2YXIgZG9uZSA9IGZhbHNlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGRvbmUpIHJldHVybjtcbiAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICByZXNvbHZlKHNlbGYsIHZhbHVlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgcmVqZWN0KHNlbGYsIHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgaWYgKGRvbmUpIHJldHVybjtcbiAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgIHJlamVjdChzZWxmLCBleCk7XG4gICAgICB9XG4gICAgfVxuICAgIFByb21pc2UucHJvdG90eXBlWydjYXRjaCddID0gZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3RlZCk7XG4gICAgfTtcbiAgICBQcm9taXNlLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24gKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB2YXIgcHJvbSA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKG5vb3ApO1xuICAgICAgaGFuZGxlKHRoaXMsIG5ldyBIYW5kbGVyKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBwcm9tKSk7XG4gICAgICByZXR1cm4gcHJvbTtcbiAgICB9O1xuICAgIFByb21pc2UucHJvdG90eXBlWydmaW5hbGx5J10gPSBmaW5hbGx5Q29uc3RydWN0b3I7XG4gICAgUHJvbWlzZS5hbGwgPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBpZiAoIWlzQXJyYXkoYXJyKSkge1xuICAgICAgICAgIHJldHVybiByZWplY3QobmV3IFR5cGVFcnJvcignUHJvbWlzZS5hbGwgYWNjZXB0cyBhbiBhcnJheScpKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycik7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlc29sdmUoW10pO1xuICAgICAgICB2YXIgcmVtYWluaW5nID0gYXJncy5sZW5ndGg7XG4gICAgICAgIGZ1bmN0aW9uIHJlcyhpLCB2YWwpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHZhbCAmJiAoX3R5cGVvZih2YWwpID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICAgICAgICB2YXIgdGhlbiA9IHZhbC50aGVuO1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aGVuLmNhbGwodmFsLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgICByZXMoaSwgdmFsKTtcbiAgICAgICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJnc1tpXSA9IHZhbDtcbiAgICAgICAgICAgIGlmICgtLXJlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICAgICAgICByZXNvbHZlKGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICByZWplY3QoZXgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICByZXMoaSwgYXJnc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgUHJvbWlzZS5hbGxTZXR0bGVkID0gYWxsU2V0dGxlZDtcbiAgICBQcm9taXNlLnJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSAmJiBfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IFByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBQcm9taXNlLnJlamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgUHJvbWlzZS5yYWNlID0gZnVuY3Rpb24gKGFycikge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgaWYgKCFpc0FycmF5KGFycikpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ1Byb21pc2UucmFjZSBhY2NlcHRzIGFuIGFycmF5JykpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUoYXJyW2ldKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBVc2UgcG9seWZpbGwgZm9yIHNldEltbWVkaWF0ZSBmb3IgcGVyZm9ybWFuY2UgZ2FpbnNcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaWYgKHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHZhciBzZXRJbW1lZGlhdGVGdW5jID0gc2V0SW1tZWRpYXRlO1xuICAgICAgUHJvbWlzZS5faW1tZWRpYXRlRm4gPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgc2V0SW1tZWRpYXRlRnVuYyhmbik7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBQcm9taXNlLl9pbW1lZGlhdGVGbiA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICBzZXRUaW1lb3V0RnVuYyhmbiwgMCk7XG4gICAgICB9O1xuICAgIH1cbiAgICBQcm9taXNlLl91bmhhbmRsZWRSZWplY3Rpb25GbiA9IGZ1bmN0aW9uIF91bmhhbmRsZWRSZWplY3Rpb25GbihlcnIpIHtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1Bvc3NpYmxlIFVuaGFuZGxlZCBQcm9taXNlIFJlamVjdGlvbjonLCBlcnIpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgIH1cbiAgICB9O1xuICAgIHByb21pc2VQb2x5ZmlsbC5leHBvcnRzID0gUHJvbWlzZTtcbiAgfSkoKTtcbiAgdmFyIF9Qcm9taXNlID0gcHJvbWlzZVBvbHlmaWxsLmV4cG9ydHM7XG5cbiAgLy8gUmVnaXN0ZXIgbG9nZ2luZyBjYWxsYmFja3NcbiAgZnVuY3Rpb24gcmVnaXN0ZXJMb2dnaW5nQ2FsbGJhY2tzKG9iaikge1xuICAgIHZhciBjYWxsYmFja05hbWVzID0gWydiZWdpbicsICdkb25lJywgJ2xvZycsICd0ZXN0U3RhcnQnLCAndGVzdERvbmUnLCAnbW9kdWxlU3RhcnQnLCAnbW9kdWxlRG9uZSddO1xuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyTG9nZ2luZ0NhbGxiYWNrKGtleSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGxvZ2dpbmdDYWxsYmFjayhjYWxsYmFjaykge1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYWxsYmFjayBwYXJhbWV0ZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uZmlnLmNhbGxiYWNrc1trZXldLnB1c2goY2FsbGJhY2spO1xuICAgICAgfTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja05hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0gY2FsbGJhY2tOYW1lc1tpXTtcblxuICAgICAgLy8gSW5pdGlhbGl6ZSBrZXkgY29sbGVjdGlvbiBvZiBsb2dnaW5nIGNhbGxiYWNrXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy5jYWxsYmFja3Nba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uZmlnLmNhbGxiYWNrc1trZXldID0gW107XG4gICAgICB9XG4gICAgICBvYmpba2V5XSA9IHJlZ2lzdGVyTG9nZ2luZ0NhbGxiYWNrKGtleSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHJ1bkxvZ2dpbmdDYWxsYmFja3Moa2V5LCBhcmdzKSB7XG4gICAgdmFyIGNhbGxiYWNrcyA9IGNvbmZpZy5jYWxsYmFja3Nba2V5XTtcblxuICAgIC8vIEhhbmRsaW5nICdsb2cnIGNhbGxiYWNrcyBzZXBhcmF0ZWx5LiBVbmxpa2UgdGhlIG90aGVyIGNhbGxiYWNrcyxcbiAgICAvLyB0aGUgbG9nIGNhbGxiYWNrIGlzIG5vdCBjb250cm9sbGVkIGJ5IHRoZSBwcm9jZXNzaW5nIHF1ZXVlLFxuICAgIC8vIGJ1dCByYXRoZXIgdXNlZCBieSBhc3NlcnRzLiBIZW5jZSB0byBwcm9taXNmeSB0aGUgJ2xvZycgY2FsbGJhY2tcbiAgICAvLyB3b3VsZCBtZWFuIHByb21pc2Z5aW5nIGVhY2ggc3RlcCBvZiBhIHRlc3RcbiAgICBpZiAoa2V5ID09PSAnbG9nJykge1xuICAgICAgY2FsbGJhY2tzLm1hcChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGFyZ3MpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZW5zdXJlIHRoYXQgZWFjaCBjYWxsYmFjayBpcyBleGVjdXRlZCBzZXJpYWxseVxuICAgIHZhciBwcm9taXNlQ2hhaW4gPSBfUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgY2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICBwcm9taXNlQ2hhaW4gPSBwcm9taXNlQ2hhaW4udGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfUHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKGFyZ3MpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBwcm9taXNlQ2hhaW47XG4gIH1cblxuICB2YXIgVGVzdFJlcG9ydCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGVzdFJlcG9ydChuYW1lLCBzdWl0ZSwgb3B0aW9ucykge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRlc3RSZXBvcnQpO1xuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgIHRoaXMuc3VpdGVOYW1lID0gc3VpdGUubmFtZTtcbiAgICAgIHRoaXMuZnVsbE5hbWUgPSBzdWl0ZS5mdWxsTmFtZS5jb25jYXQobmFtZSk7XG4gICAgICB0aGlzLnJ1bnRpbWUgPSAwO1xuICAgICAgdGhpcy5hc3NlcnRpb25zID0gW107XG4gICAgICB0aGlzLnNraXBwZWQgPSAhIW9wdGlvbnMuc2tpcDtcbiAgICAgIHRoaXMudG9kbyA9ICEhb3B0aW9ucy50b2RvO1xuICAgICAgdGhpcy52YWxpZCA9IG9wdGlvbnMudmFsaWQ7XG4gICAgICB0aGlzLl9zdGFydFRpbWUgPSAwO1xuICAgICAgdGhpcy5fZW5kVGltZSA9IDA7XG4gICAgICBzdWl0ZS5wdXNoVGVzdCh0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIF9jcmVhdGVDbGFzcyhUZXN0UmVwb3J0LCBbe1xuICAgICAga2V5OiBcInN0YXJ0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQocmVjb3JkVGltZSkge1xuICAgICAgICBpZiAocmVjb3JkVGltZSkge1xuICAgICAgICAgIHRoaXMuX3N0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgIHN1aXRlTmFtZTogdGhpcy5zdWl0ZU5hbWUsXG4gICAgICAgICAgZnVsbE5hbWU6IHRoaXMuZnVsbE5hbWUuc2xpY2UoKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJlbmRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbmQocmVjb3JkVGltZSkge1xuICAgICAgICBpZiAocmVjb3JkVGltZSkge1xuICAgICAgICAgIHRoaXMuX2VuZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXh0ZW5kKHRoaXMuc3RhcnQoKSwge1xuICAgICAgICAgIHJ1bnRpbWU6IHRoaXMuZ2V0UnVudGltZSgpLFxuICAgICAgICAgIHN0YXR1czogdGhpcy5nZXRTdGF0dXMoKSxcbiAgICAgICAgICBlcnJvcnM6IHRoaXMuZ2V0RmFpbGVkQXNzZXJ0aW9ucygpLFxuICAgICAgICAgIGFzc2VydGlvbnM6IHRoaXMuZ2V0QXNzZXJ0aW9ucygpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJwdXNoQXNzZXJ0aW9uXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaEFzc2VydGlvbihhc3NlcnRpb24pIHtcbiAgICAgICAgdGhpcy5hc3NlcnRpb25zLnB1c2goYXNzZXJ0aW9uKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0UnVudGltZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJ1bnRpbWUoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMuX2VuZFRpbWUgLSB0aGlzLl9zdGFydFRpbWUpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRTdGF0dXNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdGF0dXMoKSB7XG4gICAgICAgIGlmICh0aGlzLnNraXBwZWQpIHtcbiAgICAgICAgICByZXR1cm4gJ3NraXBwZWQnO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0ZXN0UGFzc2VkID0gdGhpcy5nZXRGYWlsZWRBc3NlcnRpb25zKCkubGVuZ3RoID4gMCA/IHRoaXMudG9kbyA6ICF0aGlzLnRvZG87XG4gICAgICAgIGlmICghdGVzdFBhc3NlZCkge1xuICAgICAgICAgIHJldHVybiAnZmFpbGVkJztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvZG8pIHtcbiAgICAgICAgICByZXR1cm4gJ3RvZG8nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAncGFzc2VkJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRGYWlsZWRBc3NlcnRpb25zXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RmFpbGVkQXNzZXJ0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNzZXJ0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKGFzc2VydGlvbikge1xuICAgICAgICAgIHJldHVybiAhYXNzZXJ0aW9uLnBhc3NlZDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImdldEFzc2VydGlvbnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBc3NlcnRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc3NlcnRpb25zLnNsaWNlKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJlbW92ZSBhY3R1YWwgYW5kIGV4cGVjdGVkIHZhbHVlcyBmcm9tIGFzc2VydGlvbnMuIFRoaXMgaXMgdG8gcHJldmVudFxuICAgICAgLy8gbGVha2luZyBtZW1vcnkgdGhyb3VnaG91dCBhIHRlc3Qgc3VpdGUuXG4gICAgfSwge1xuICAgICAga2V5OiBcInNsaW1Bc3NlcnRpb25zXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2xpbUFzc2VydGlvbnMoKSB7XG4gICAgICAgIHRoaXMuYXNzZXJ0aW9ucyA9IHRoaXMuYXNzZXJ0aW9ucy5tYXAoZnVuY3Rpb24gKGFzc2VydGlvbikge1xuICAgICAgICAgIGRlbGV0ZSBhc3NlcnRpb24uYWN0dWFsO1xuICAgICAgICAgIGRlbGV0ZSBhc3NlcnRpb24uZXhwZWN0ZWQ7XG4gICAgICAgICAgcmV0dXJuIGFzc2VydGlvbjtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfV0pO1xuICB9KCk7XG5cbiAgZnVuY3Rpb24gVGVzdChzZXR0aW5ncykge1xuICAgIHRoaXMuZXhwZWN0ZWQgPSBudWxsO1xuICAgIHRoaXMuYXNzZXJ0aW9ucyA9IFtdO1xuICAgIHRoaXMubW9kdWxlID0gY29uZmlnLmN1cnJlbnRNb2R1bGU7XG4gICAgdGhpcy5zdGVwcyA9IFtdO1xuICAgIC8vIFRoaXMgcG93ZXJzIHRoZSBRVW5pdC5jb25maWcuY291bnRTdGVwc0FzT25lIGZlYXR1cmUuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3F1bml0anMvcXVuaXQvcHVsbC8xNzc1XG4gICAgdGhpcy5zdGVwc0NvdW50ID0gMDtcbiAgICB0aGlzLnRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kYXRhID0gdW5kZWZpbmVkO1xuICAgIHRoaXMud2l0aERhdGEgPSBmYWxzZTtcbiAgICB0aGlzLnBhdXNlcyA9IG5ldyBTdHJpbmdNYXAoKTtcbiAgICB0aGlzLm5leHRQYXVzZUlkID0gMTtcblxuICAgIC8vIEZvciB0aGUgbW9zdCBjb21tb24gY2FzZSwgd2UgaGF2ZTpcbiAgICAvLyAtIDA6IG5ldyBUZXN0XG4gICAgLy8gLSAxOiBhZGRUZXN0XG4gICAgLy8gLSAyOiBRVW5pdC50ZXN0XG4gICAgLy8gLSAzOiB1c2VyIGZpbGVcbiAgICAvL1xuICAgIC8vIFRoaXMgbmVlZHMgaXMgY3VzdG9taXNlZCBieSB0ZXN0LmVhY2goKVxuICAgIHRoaXMuc3RhY2tPZmZzZXQgPSAzO1xuICAgIGV4dGVuZCh0aGlzLCBzZXR0aW5ncyk7XG5cbiAgICAvLyBJZiBhIG1vZHVsZSBpcyBza2lwcGVkLCBhbGwgaXRzIHRlc3RzIGFuZCB0aGUgdGVzdHMgb2YgdGhlIGNoaWxkIHN1aXRlc1xuICAgIC8vIHNob3VsZCBiZSB0cmVhdGVkIGFzIHNraXBwZWQgZXZlbiBpZiB0aGV5IGFyZSBkZWZpbmVkIGFzIGBvbmx5YCBvciBgdG9kb2AuXG4gICAgLy8gQXMgZm9yIGB0b2RvYCBtb2R1bGUsIGFsbCBpdHMgdGVzdHMgd2lsbCBiZSB0cmVhdGVkIGFzIGB0b2RvYCBleGNlcHQgZm9yXG4gICAgLy8gdGVzdHMgZGVmaW5lZCBhcyBgc2tpcGAgd2hpY2ggd2lsbCBiZSBsZWZ0IGludGFjdC5cbiAgICAvL1xuICAgIC8vIFNvLCBpZiBhIHRlc3QgaXMgZGVmaW5lZCBhcyBgdG9kb2AgYW5kIGlzIGluc2lkZSBhIHNraXBwZWQgbW9kdWxlLCB3ZSBzaG91bGRcbiAgICAvLyB0aGVuIHRyZWF0IHRoYXQgdGVzdCBhcyBpZiB3YXMgZGVmaW5lZCBhcyBgc2tpcGAuXG4gICAgaWYgKHRoaXMubW9kdWxlLnNraXApIHtcbiAgICAgIHRoaXMuc2tpcCA9IHRydWU7XG4gICAgICB0aGlzLnRvZG8gPSBmYWxzZTtcblxuICAgICAgLy8gU2tpcHBlZCB0ZXN0cyBzaG91bGQgYmUgbGVmdCBpbnRhY3RcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kdWxlLnRvZG8gJiYgIXRoaXMuc2tpcCkge1xuICAgICAgdGhpcy50b2RvID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBRdWV1aW5nIGEgbGF0ZSB0ZXN0IGFmdGVyIHRoZSBydW4gaGFzIGVuZGVkIGlzIG5vdCBhbGxvd2VkLlxuICAgIC8vIFRoaXMgd2FzIG9uY2Ugc3VwcG9ydGVkIGZvciBpbnRlcm5hbCB1c2UgYnkgUVVuaXQub25FcnJvcigpLlxuICAgIC8vIFJlZiBodHRwczovL2dpdGh1Yi5jb20vcXVuaXRqcy9xdW5pdC9pc3N1ZXMvMTM3N1xuICAgIGlmIChjb25maWcucHEuZmluaXNoZWQpIHtcbiAgICAgIC8vIFVzaW5nIHRoaXMgZm9yIGFueXRoaW5nIG90aGVyIHRoYW4gb25FcnJvcigpLCBzdWNoIGFzIHRlc3RpbmcgaW4gUVVuaXQuZG9uZSgpLFxuICAgICAgLy8gaXMgdW5zdGFibGUgYW5kIHdpbGwgbGlrZWx5IHJlc3VsdCBpbiB0aGUgYWRkZWQgdGVzdHMgYmVpbmcgaWdub3JlZCBieSBDSS5cbiAgICAgIC8vIChNZWFuaW5nIHRoZSBDSSBwYXNzZXMgaXJyZWdhcmRsZXNzIG9mIHRoZSBhZGRlZCB0ZXN0cykuXG4gICAgICAvL1xuICAgICAgLy8gVE9ETzogTWFrZSB0aGlzIGFuIGVycm9yIGluIFFVbml0IDMuMFxuICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKCBcIlVuZXhwZWN0ZWQgdGVzdCBhZnRlciBydW5FbmRcIiApO1xuICAgICAgTG9nZ2VyLndhcm4oJ1VuZXhwZWN0ZWQgdGVzdCBhZnRlciBydW5FbmQuIFRoaXMgaXMgdW5zdGFibGUgYW5kIHdpbGwgZmFpbCBpbiBRVW5pdCAzLjAuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5za2lwICYmIHR5cGVvZiB0aGlzLmNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgbWV0aG9kID0gdGhpcy50b2RvID8gJ1FVbml0LnRvZG8nIDogJ1FVbml0LnRlc3QnO1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIllvdSBtdXN0IHByb3ZpZGUgYSBjYWxsYmFjayB0byBcIi5jb25jYXQobWV0aG9kLCBcIihcXFwiXCIpLmNvbmNhdCh0aGlzLnRlc3ROYW1lLCBcIlxcXCIpXCIpKTtcbiAgICB9XG5cbiAgICAvLyBSZWdpc3RlciB1bmlxdWUgc3RyaW5nc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5tb2R1bGUudGVzdHM7IGkgPCBsLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5tb2R1bGUudGVzdHNbaV0ubmFtZSA9PT0gdGhpcy50ZXN0TmFtZSkge1xuICAgICAgICB0aGlzLnRlc3ROYW1lICs9ICcgJztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy50ZXN0SWQgPSBnZW5lcmF0ZUhhc2godGhpcy5tb2R1bGUubmFtZSwgdGhpcy50ZXN0TmFtZSk7XG5cbiAgICAvLyBObyB2YWxpZGF0aW9uIGFmdGVyIHRoaXMuIEJleW9uZCB0aGlzIHBvaW50LCBmYWlsdXJlcyBtdXN0IGJlIHJlY29yZGVkIGFzXG4gICAgLy8gYSBjb21wbGV0ZWQgdGVzdCB3aXRoIGVycm9ycywgaW5zdGVhZCBvZiBlYXJseSBiYWlsIG91dC5cbiAgICAvLyBPdGhlcndpc2UsIGludGVybmFscyBtYXkgYmUgbGVmdCBpbiBhbiBpbmNvbnNpc3RlbnQgc3RhdGUuXG4gICAgLy8gUmVmIGh0dHBzOi8vZ2l0aHViLmNvbS9xdW5pdGpzL3F1bml0L2lzc3Vlcy8xNTE0XG5cbiAgICArK1Rlc3QuY291bnQ7XG4gICAgdGhpcy5lcnJvckZvclN0YWNrID0gbmV3IEVycm9yKCk7XG4gICAgaWYgKHRoaXMuY2FsbGJhY2sgJiYgdGhpcy5jYWxsYmFjay52YWxpZFRlc3QpIHtcbiAgICAgIC8vIE9taXQgdGhlIHRlc3QtbGV2ZWwgdHJhY2UgZm9yIHRoZSBpbnRlcm5hbCBcIk5vIHRlc3RzXCIgdGVzdCBmYWlsdXJlLFxuICAgICAgLy8gVGhlcmUgaXMgYWxyZWFkeSBhbiBhc3NlcnRpb24tbGV2ZWwgdHJhY2UsIGFuZCB0aGF0J3Mgbm9pc3kgZW5vdWdoXG4gICAgICAvLyBhcyBpdCBpcy5cbiAgICAgIHRoaXMuZXJyb3JGb3JTdGFjay5zdGFjayA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy50ZXN0UmVwb3J0ID0gbmV3IFRlc3RSZXBvcnQodGhpcy50ZXN0TmFtZSwgdGhpcy5tb2R1bGUuc3VpdGVSZXBvcnQsIHtcbiAgICAgIHRvZG86IHRoaXMudG9kbyxcbiAgICAgIHNraXA6IHRoaXMuc2tpcCxcbiAgICAgIHZhbGlkOiB0aGlzLnZhbGlkKClcbiAgICB9KTtcbiAgICB0aGlzLm1vZHVsZS50ZXN0cy5wdXNoKHtcbiAgICAgIG5hbWU6IHRoaXMudGVzdE5hbWUsXG4gICAgICB0ZXN0SWQ6IHRoaXMudGVzdElkLFxuICAgICAgc2tpcDogISF0aGlzLnNraXBcbiAgICB9KTtcbiAgICBpZiAodGhpcy5za2lwKSB7XG4gICAgICAvLyBTa2lwcGVkIHRlc3RzIHdpbGwgZnVsbHkgaWdub3JlIChhbmQgZGVyZWZlcmVuY2UgZm9yIGdhcmJhZ2UgY29sbGVjdCkgYW55IHNlbnQgY2FsbGJhY2tcbiAgICAgIHRoaXMuY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgIHRoaXMuYXN5bmMgPSBmYWxzZTtcbiAgICAgIHRoaXMuZXhwZWN0ZWQgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFzc2VydCA9IG5ldyBBc3NlcnQodGhpcyk7XG4gICAgfVxuICB9XG4gIFRlc3QuY291bnQgPSAwO1xuICBmdW5jdGlvbiBnZXROb3RTdGFydGVkTW9kdWxlcyhzdGFydE1vZHVsZSkge1xuICAgIHZhciBtb2R1bGUgPSBzdGFydE1vZHVsZTtcbiAgICB2YXIgbW9kdWxlcyA9IFtdO1xuICAgIHdoaWxlIChtb2R1bGUgJiYgbW9kdWxlLnRlc3RzUnVuID09PSAwKSB7XG4gICAgICBtb2R1bGVzLnB1c2gobW9kdWxlKTtcbiAgICAgIG1vZHVsZSA9IG1vZHVsZS5wYXJlbnRNb2R1bGU7XG4gICAgfVxuXG4gICAgLy8gVGhlIGFib3ZlIHB1c2ggbW9kdWxlcyBmcm9tIHRoZSBjaGlsZCB0byB0aGUgcGFyZW50XG4gICAgLy8gcmV0dXJuIGEgcmV2ZXJzZWQgb3JkZXIgd2l0aCB0aGUgdG9wIGJlaW5nIHRoZSB0b3AgbW9zdCBwYXJlbnQgbW9kdWxlXG4gICAgcmV0dXJuIG1vZHVsZXMucmV2ZXJzZSgpO1xuICB9XG4gIFRlc3QucHJvdG90eXBlID0ge1xuICAgIC8vIFVzZSBhIGdldHRlciB0byBhdm9pZCBjb21wdXRpbmcgYSBzdGFjayB0cmFjZSAod2hpY2ggY2FuIGJlIGV4cGVuc2l2ZSksXG4gICAgLy8gVGhpcyBpcyBkaXNwbGF5ZWQgYnkgdGhlIEhUTUwgUmVwb3J0ZXIsIGJ1dCBtb3N0IG90aGVyIGludGVncmF0aW9ucyBkb1xuICAgIC8vIG5vdCBhY2Nlc3MgaXQuXG4gICAgZ2V0IHN0YWNrKCkge1xuICAgICAgcmV0dXJuIGV4dHJhY3RTdGFja3RyYWNlKHRoaXMuZXJyb3JGb3JTdGFjaywgdGhpcy5zdGFja09mZnNldCk7XG4gICAgfSxcbiAgICBiZWZvcmU6IGZ1bmN0aW9uIGJlZm9yZSgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICB2YXIgbW9kdWxlID0gdGhpcy5tb2R1bGU7XG4gICAgICB2YXIgbm90U3RhcnRlZE1vZHVsZXMgPSBnZXROb3RTdGFydGVkTW9kdWxlcyhtb2R1bGUpO1xuXG4gICAgICAvLyBlbnN1cmUgdGhlIGNhbGxiYWNrcyBhcmUgZXhlY3V0ZWQgc2VyaWFsbHkgZm9yIGVhY2ggbW9kdWxlXG4gICAgICB2YXIgbW9kdWxlU3RhcnRDaGFpbiA9IF9Qcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIG5vdFN0YXJ0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKHN0YXJ0TW9kdWxlKSB7XG4gICAgICAgIG1vZHVsZVN0YXJ0Q2hhaW4gPSBtb2R1bGVTdGFydENoYWluLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHN0YXJ0TW9kdWxlLnN0YXRzID0ge1xuICAgICAgICAgICAgYWxsOiAwLFxuICAgICAgICAgICAgYmFkOiAwLFxuICAgICAgICAgICAgc3RhcnRlZDogcGVyZm9ybWFuY2Uubm93KClcbiAgICAgICAgICB9O1xuICAgICAgICAgIGVtaXQoJ3N1aXRlU3RhcnQnLCBzdGFydE1vZHVsZS5zdWl0ZVJlcG9ydC5zdGFydCh0cnVlKSk7XG4gICAgICAgICAgcmV0dXJuIHJ1bkxvZ2dpbmdDYWxsYmFja3MoJ21vZHVsZVN0YXJ0Jywge1xuICAgICAgICAgICAgbmFtZTogc3RhcnRNb2R1bGUubmFtZSxcbiAgICAgICAgICAgIHRlc3RzOiBzdGFydE1vZHVsZS50ZXN0c1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG1vZHVsZVN0YXJ0Q2hhaW4udGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbmZpZy5jdXJyZW50ID0gX3RoaXM7XG4gICAgICAgIF90aGlzLnRlc3RFbnZpcm9ubWVudCA9IGV4dGVuZCh7fSwgbW9kdWxlLnRlc3RFbnZpcm9ubWVudCk7XG4gICAgICAgIF90aGlzLnN0YXJ0ZWQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgZW1pdCgndGVzdFN0YXJ0JywgX3RoaXMudGVzdFJlcG9ydC5zdGFydCh0cnVlKSk7XG4gICAgICAgIHJldHVybiBydW5Mb2dnaW5nQ2FsbGJhY2tzKCd0ZXN0U3RhcnQnLCB7XG4gICAgICAgICAgbmFtZTogX3RoaXMudGVzdE5hbWUsXG4gICAgICAgICAgbW9kdWxlOiBtb2R1bGUubmFtZSxcbiAgICAgICAgICB0ZXN0SWQ6IF90aGlzLnRlc3RJZCxcbiAgICAgICAgICBwcmV2aW91c0ZhaWx1cmU6IF90aGlzLnByZXZpb3VzRmFpbHVyZVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWNvbmZpZy5wb2xsdXRpb24pIHtcbiAgICAgICAgICAgIHNhdmVHbG9iYWwoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBydW46IGZ1bmN0aW9uIHJ1bigpIHtcbiAgICAgIGNvbmZpZy5jdXJyZW50ID0gdGhpcztcbiAgICAgIGlmIChjb25maWcubm90cnljYXRjaCkge1xuICAgICAgICBydW5UZXN0KHRoaXMpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICBydW5UZXN0KHRoaXMpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aGlzLnB1c2hGYWlsdXJlKCdEaWVkIG9uIHRlc3QgIycgKyAodGhpcy5hc3NlcnRpb25zLmxlbmd0aCArIDEpICsgJzogJyArIChlLm1lc3NhZ2UgfHwgZSkgKyAnXFxuJyArIHRoaXMuc3RhY2ssIGV4dHJhY3RTdGFja3RyYWNlKGUsIDApKTtcblxuICAgICAgICAvLyBFbHNlIG5leHQgdGVzdCB3aWxsIGNhcnJ5IHRoZSByZXNwb25zaWJpbGl0eVxuICAgICAgICBzYXZlR2xvYmFsKCk7XG5cbiAgICAgICAgLy8gUmVzdGFydCB0aGUgdGVzdHMgaWYgdGhleSdyZSBibG9ja2luZ1xuICAgICAgICBpZiAoY29uZmlnLmJsb2NraW5nKSB7XG4gICAgICAgICAgaW50ZXJuYWxSZWNvdmVyKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBydW5UZXN0KHRlc3QpIHtcbiAgICAgICAgdmFyIHByb21pc2U7XG4gICAgICAgIGlmICh0ZXN0LndpdGhEYXRhKSB7XG4gICAgICAgICAgcHJvbWlzZSA9IHRlc3QuY2FsbGJhY2suY2FsbCh0ZXN0LnRlc3RFbnZpcm9ubWVudCwgdGVzdC5hc3NlcnQsIHRlc3QuZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvbWlzZSA9IHRlc3QuY2FsbGJhY2suY2FsbCh0ZXN0LnRlc3RFbnZpcm9ubWVudCwgdGVzdC5hc3NlcnQpO1xuICAgICAgICB9XG4gICAgICAgIHRlc3QucmVzb2x2ZVByb21pc2UocHJvbWlzZSk7XG5cbiAgICAgICAgLy8gSWYgdGhlIHRlc3QgaGFzIGFuIGFzeW5jIFwicGF1c2VcIiBvbiBpdCwgYnV0IHRoZSB0aW1lb3V0IGlzIDAsIHRoZW4gd2UgcHVzaCBhXG4gICAgICAgIC8vIGZhaWx1cmUgYXMgdGhlIHRlc3Qgc2hvdWxkIGJlIHN5bmNocm9ub3VzLlxuICAgICAgICBpZiAodGVzdC50aW1lb3V0ID09PSAwICYmIHRlc3QucGF1c2VzLnNpemUgPiAwKSB7XG4gICAgICAgICAgcHVzaEZhaWx1cmUoJ1Rlc3QgZGlkIG5vdCBmaW5pc2ggc3luY2hyb25vdXNseSBldmVuIHRob3VnaCBhc3NlcnQudGltZW91dCggMCApIHdhcyB1c2VkLicsIHNvdXJjZUZyb21TdGFja3RyYWNlKDIpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYWZ0ZXI6IGZ1bmN0aW9uIGFmdGVyKCkge1xuICAgICAgY2hlY2tQb2xsdXRpb24oKTtcbiAgICB9LFxuICAgIHF1ZXVlR2xvYmFsSG9vazogZnVuY3Rpb24gcXVldWVHbG9iYWxIb29rKGhvb2ssIGhvb2tOYW1lKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcbiAgICAgIHZhciBydW5Ib29rID0gZnVuY3Rpb24gcnVuSG9vaygpIHtcbiAgICAgICAgY29uZmlnLmN1cnJlbnQgPSBfdGhpczI7XG4gICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICBpZiAoY29uZmlnLm5vdHJ5Y2F0Y2gpIHtcbiAgICAgICAgICBwcm9taXNlID0gaG9vay5jYWxsKF90aGlzMi50ZXN0RW52aXJvbm1lbnQsIF90aGlzMi5hc3NlcnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwcm9taXNlID0gaG9vay5jYWxsKF90aGlzMi50ZXN0RW52aXJvbm1lbnQsIF90aGlzMi5hc3NlcnQpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBfdGhpczIucHVzaEZhaWx1cmUoJ0dsb2JhbCAnICsgaG9va05hbWUgKyAnIGZhaWxlZCBvbiAnICsgX3RoaXMyLnRlc3ROYW1lICsgJzogJyArIGVycm9yU3RyaW5nKGVycm9yKSwgZXh0cmFjdFN0YWNrdHJhY2UoZXJyb3IsIDApKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMyLnJlc29sdmVQcm9taXNlKHByb21pc2UsIGhvb2tOYW1lKTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gcnVuSG9vaztcbiAgICB9LFxuICAgIHF1ZXVlSG9vazogZnVuY3Rpb24gcXVldWVIb29rKGhvb2ssIGhvb2tOYW1lLCBob29rT3duZXIpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuICAgICAgdmFyIGNhbGxIb29rID0gZnVuY3Rpb24gY2FsbEhvb2soKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gaG9vay5jYWxsKF90aGlzMy50ZXN0RW52aXJvbm1lbnQsIF90aGlzMy5hc3NlcnQpO1xuICAgICAgICBfdGhpczMucmVzb2x2ZVByb21pc2UocHJvbWlzZSwgaG9va05hbWUpO1xuICAgICAgfTtcbiAgICAgIHZhciBydW5Ib29rID0gZnVuY3Rpb24gcnVuSG9vaygpIHtcbiAgICAgICAgaWYgKGhvb2tOYW1lID09PSAnYmVmb3JlJykge1xuICAgICAgICAgIGlmIChob29rT3duZXIudGVzdHNSdW4gIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgX3RoaXMzLnByZXNlcnZlRW52aXJvbm1lbnQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlICdhZnRlcicgaG9vayBzaG91bGQgb25seSBleGVjdXRlIHdoZW4gdGhlcmUgYXJlIG5vdCB0ZXN0cyBsZWZ0IGFuZFxuICAgICAgICAvLyB3aGVuIHRoZSAnYWZ0ZXInIGFuZCAnZmluaXNoJyB0YXNrcyBhcmUgdGhlIG9ubHkgdGFza3MgbGVmdCB0byBwcm9jZXNzXG4gICAgICAgIGlmIChob29rTmFtZSA9PT0gJ2FmdGVyJyAmJiAhbGFzdFRlc3RXaXRoaW5Nb2R1bGVFeGVjdXRlZChob29rT3duZXIpICYmIChjb25maWcucXVldWUubGVuZ3RoID4gMCB8fCBjb25maWcucHEudGFza0NvdW50KCkgPiAyKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25maWcuY3VycmVudCA9IF90aGlzMztcbiAgICAgICAgaWYgKGNvbmZpZy5ub3RyeWNhdGNoKSB7XG4gICAgICAgICAgY2FsbEhvb2soKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHRyeS1ibG9jayBpbmNsdWRlcyB0aGUgaW5kaXJlY3QgY2FsbCB0byByZXNvbHZlUHJvbWlzZSwgd2hpY2ggc2hvdWxkbid0XG4gICAgICAgICAgLy8gaGF2ZSB0byBiZSBpbnNpZGUgdHJ5LWNhdGNoLiBCdXQsIHNpbmNlIHdlIHN1cHBvcnQgYW55IHVzZXItcHJvdmlkZWQgdGhlbmFibGVcbiAgICAgICAgICAvLyBvYmplY3QsIHRoZSB0aGVuYWJsZSBtaWdodCB0aHJvdyBpbiBzb21lIHVuZXhwZWN0ZWQgd2F5LlxuICAgICAgICAgIC8vIFRoaXMgc3VidGxlIGJlaGF2aW91ciBpcyB1bmRvY3VtZW50ZWQuIFRvIGF2b2lkIG5ldyBmYWlsdXJlcyBpbiBtaW5vciByZWxlYXNlc1xuICAgICAgICAgIC8vIHdlIHdpbGwgbm90IGNoYW5nZSB0aGlzIHVudGlsIFFVbml0IDMuXG4gICAgICAgICAgLy8gVE9ETzogSW4gUVVuaXQgMywgcmVkdWNlIHRoaXMgdHJ5LWJsb2NrIHRvIGp1c3QgaG9vay5jYWxsKCksIG1hdGNoaW5nXG4gICAgICAgICAgLy8gdGhlIHNpbXBsaWNpdHkgb2YgcXVldWVHbG9iYWxIb29rLlxuICAgICAgICAgIGNhbGxIb29rKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgX3RoaXMzLnB1c2hGYWlsdXJlKGhvb2tOYW1lICsgJyBmYWlsZWQgb24gJyArIF90aGlzMy50ZXN0TmFtZSArICc6ICcgKyAoZXJyb3IubWVzc2FnZSB8fCBlcnJvciksIGV4dHJhY3RTdGFja3RyYWNlKGVycm9yLCAwKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZXR1cm4gcnVuSG9vaztcbiAgICB9LFxuICAgIC8vIEN1cnJlbnRseSBvbmx5IHVzZWQgZm9yIG1vZHVsZSBsZXZlbCBob29rcywgY2FuIGJlIHVzZWQgdG8gYWRkIGdsb2JhbCBsZXZlbCBvbmVzXG4gICAgaG9va3M6IGZ1bmN0aW9uIGhvb2tzKGhhbmRsZXIpIHtcbiAgICAgIHZhciBob29rcyA9IFtdO1xuICAgICAgZnVuY3Rpb24gcHJvY2Vzc0dsb2JhbGhvb2tzKHRlc3QpIHtcbiAgICAgICAgaWYgKChoYW5kbGVyID09PSAnYmVmb3JlRWFjaCcgfHwgaGFuZGxlciA9PT0gJ2FmdGVyRWFjaCcpICYmIGNvbmZpZy5nbG9iYWxIb29rc1toYW5kbGVyXSkge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29uZmlnLmdsb2JhbEhvb2tzW2hhbmRsZXJdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBob29rcy5wdXNoKHRlc3QucXVldWVHbG9iYWxIb29rKGNvbmZpZy5nbG9iYWxIb29rc1toYW5kbGVyXVtpXSwgaGFuZGxlcikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZnVuY3Rpb24gcHJvY2Vzc0hvb2tzKHRlc3QsIG1vZHVsZSkge1xuICAgICAgICBpZiAobW9kdWxlLnBhcmVudE1vZHVsZSkge1xuICAgICAgICAgIHByb2Nlc3NIb29rcyh0ZXN0LCBtb2R1bGUucGFyZW50TW9kdWxlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobW9kdWxlLmhvb2tzW2hhbmRsZXJdLmxlbmd0aCkge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLmhvb2tzW2hhbmRsZXJdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBob29rcy5wdXNoKHRlc3QucXVldWVIb29rKG1vZHVsZS5ob29rc1toYW5kbGVyXVtpXSwgaGFuZGxlciwgbW9kdWxlKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEhvb2tzIGFyZSBpZ25vcmVkIG9uIHNraXBwZWQgdGVzdHNcbiAgICAgIGlmICghdGhpcy5za2lwKSB7XG4gICAgICAgIHByb2Nlc3NHbG9iYWxob29rcyh0aGlzKTtcbiAgICAgICAgcHJvY2Vzc0hvb2tzKHRoaXMsIHRoaXMubW9kdWxlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBob29rcztcbiAgICB9LFxuICAgIGZpbmlzaDogZnVuY3Rpb24gZmluaXNoKCkge1xuICAgICAgY29uZmlnLmN1cnJlbnQgPSB0aGlzO1xuXG4gICAgICAvLyBSZWxlYXNlIHRoZSB0aW1lb3V0IGFuZCB0aW1lb3V0IGNhbGxiYWNrIHJlZmVyZW5jZXMgdG8gYmUgZ2FyYmFnZSBjb2xsZWN0ZWQuXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcXVuaXRqcy9xdW5pdC9wdWxsLzE3MDhcbiAgICAgIGlmIChzZXRUaW1lb3V0JDEpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICAgIGNvbmZpZy50aW1lb3V0SGFuZGxlciA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIFJlbGVhc2UgdGhlIHRlc3QgY2FsbGJhY2sgdG8gZW5zdXJlIHRoYXQgYW55dGhpbmcgcmVmZXJlbmNlZCBoYXMgYmVlblxuICAgICAgLy8gcmVsZWFzZWQgdG8gYmUgZ2FyYmFnZSBjb2xsZWN0ZWQuXG4gICAgICB0aGlzLmNhbGxiYWNrID0gdW5kZWZpbmVkO1xuICAgICAgaWYgKHRoaXMuc3RlcHMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBzdGVwc0xpc3QgPSB0aGlzLnN0ZXBzLmpvaW4oJywgJyk7XG4gICAgICAgIHRoaXMucHVzaEZhaWx1cmUoJ0V4cGVjdGVkIGFzc2VydC52ZXJpZnlTdGVwcygpIHRvIGJlIGNhbGxlZCBiZWZvcmUgZW5kIG9mIHRlc3QgJyArIFwiYWZ0ZXIgdXNpbmcgYXNzZXJ0LnN0ZXAoKS4gVW52ZXJpZmllZCBzdGVwczogXCIuY29uY2F0KHN0ZXBzTGlzdCksIHRoaXMuc3RhY2spO1xuICAgICAgfVxuICAgICAgaWYgKCFjb25maWcuX2RlcHJlY2F0ZWRfY291bnRFYWNoU3RlcF9zaG93biAmJiAhY29uZmlnLmNvdW50U3RlcHNBc09uZSAmJiB0aGlzLmV4cGVjdGVkICE9PSBudWxsICYmIHRoaXMuc3RlcHNDb3VudCkge1xuICAgICAgICBjb25maWcuX2RlcHJlY2F0ZWRfY291bnRFYWNoU3RlcF9zaG93biA9IHRydWU7XG4gICAgICAgIGlmIChjb25maWcucmVxdWlyZUV4cGVjdHMpIHtcbiAgICAgICAgICBMb2dnZXIud2FybignQ291bnRpbmcgZWFjaCBhc3NlcnQuc3RlcCgpIGZvciBhc3NlcnQuZXhwZWN0KCkgaXMgY2hhbmdpbmcgaW4gUVVuaXQgMy4wLiBZb3UgY2FuIGVuYWJsZSBRVW5pdC5jb25maWcuY291bnRTdGVwc0FzT25lIHRvIHByZXBhcmUgZm9yIHRoZSB1cGdyYWRlLiBodHRwczovL3F1bml0anMuY29tL2FwaS9hc3NlcnQvZXhwZWN0LycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIExvZ2dlci53YXJuKCdDb3VudGluZyBlYWNoIGFzc2VydC5zdGVwKCkgZm9yIGFzc2VydC5leHBlY3QoKSBpcyBjaGFuZ2luZyBpbiBRVW5pdCAzLjAuIE9taXQgYXNzZXJ0LmV4cGVjdCgpIGZyb20gdGVzdHMgdGhhdCB1c2UgYXNzZXJ0LnN0ZXAoKSwgb3IgZW5hYmxlIFFVbml0LmNvbmZpZy5jb3VudFN0ZXBzQXNPbmUgdG8gcHJlcGFyZSBmb3IgdGhlIHVwZ3JhZGUuIGh0dHBzOi8vcXVuaXRqcy5jb20vYXBpL2Fzc2VydC9leHBlY3QvJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBhY3R1YWxDb3VudEZvckV4cGVjdCA9IGNvbmZpZy5jb3VudFN0ZXBzQXNPbmUgPyB0aGlzLmFzc2VydGlvbnMubGVuZ3RoIC0gdGhpcy5zdGVwc0NvdW50IDogdGhpcy5hc3NlcnRpb25zLmxlbmd0aDtcbiAgICAgIGlmIChjb25maWcucmVxdWlyZUV4cGVjdHMgJiYgdGhpcy5leHBlY3RlZCA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnB1c2hGYWlsdXJlKCdFeHBlY3RlZCBudW1iZXIgb2YgYXNzZXJ0aW9ucyB0byBiZSBkZWZpbmVkLCBidXQgZXhwZWN0KCkgd2FzICcgKyAnbm90IGNhbGxlZC4nLCB0aGlzLnN0YWNrKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5leHBlY3RlZCAhPT0gbnVsbCAmJiB0aGlzLmV4cGVjdGVkICE9PSBhY3R1YWxDb3VudEZvckV4cGVjdCAmJiB0aGlzLnN0ZXBzQ291bnQgJiYgdGhpcy5leHBlY3RlZCA9PT0gdGhpcy5hc3NlcnRpb25zLmxlbmd0aCAtIHRoaXMuc3RlcHNDb3VudCAmJiAhY29uZmlnLmNvdW50U3RlcHNBc09uZSkge1xuICAgICAgICB0aGlzLnB1c2hGYWlsdXJlKCdFeHBlY3RlZCAnICsgdGhpcy5leHBlY3RlZCArICcgYXNzZXJ0aW9ucywgYnV0ICcgKyBhY3R1YWxDb3VudEZvckV4cGVjdCArICcgd2VyZSBydW5cXG5JdCBsb29rcyBsaWtlIHlvdSBtaWdodCBwcmVmZXIgdG8gZW5hYmxlIFFVbml0LmNvbmZpZy5jb3VudFN0ZXBzQXNPbmUsIHdoaWNoIHdpbGwgYmVjb21lIHRoZSBkZWZhdWx0IGluIFFVbml0IDMuMC4gaHR0cHM6Ly9xdW5pdGpzLmNvbS9hcGkvYXNzZXJ0L2V4cGVjdC8nLCB0aGlzLnN0YWNrKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5leHBlY3RlZCAhPT0gbnVsbCAmJiB0aGlzLmV4cGVjdGVkICE9PSBhY3R1YWxDb3VudEZvckV4cGVjdCAmJiB0aGlzLnN0ZXBzQ291bnQgJiYgdGhpcy5leHBlY3RlZCA9PT0gdGhpcy5hc3NlcnRpb25zLmxlbmd0aCAmJiBjb25maWcuY291bnRTdGVwc0FzT25lKSB7XG4gICAgICAgIHRoaXMucHVzaEZhaWx1cmUoJ0V4cGVjdGVkICcgKyB0aGlzLmV4cGVjdGVkICsgJyBhc3NlcnRpb25zLCBidXQgJyArIGFjdHVhbENvdW50Rm9yRXhwZWN0ICsgJyB3ZXJlIHJ1blxcblJlbWVtYmVyIHRoYXQgd2l0aCBRVW5pdC5jb25maWcuY291bnRTdGVwc0FzT25lIGFuZCBpbiBRVW5pdCAzLjAsIHN0ZXBzIG5vIGxvbmdlciBjb3VudCBhcyBzZXBhcmF0ZSBhc3NlcnRpb25zLiBodHRwczovL3F1bml0anMuY29tL2FwaS9hc3NlcnQvZXhwZWN0LycsIHRoaXMuc3RhY2spO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmV4cGVjdGVkICE9PSBudWxsICYmIHRoaXMuZXhwZWN0ZWQgIT09IGFjdHVhbENvdW50Rm9yRXhwZWN0KSB7XG4gICAgICAgIHRoaXMucHVzaEZhaWx1cmUoJ0V4cGVjdGVkICcgKyB0aGlzLmV4cGVjdGVkICsgJyBhc3NlcnRpb25zLCBidXQgJyArIGFjdHVhbENvdW50Rm9yRXhwZWN0ICsgJyB3ZXJlIHJ1bicsIHRoaXMuc3RhY2spO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmV4cGVjdGVkID09PSBudWxsICYmICFhY3R1YWxDb3VudEZvckV4cGVjdCkge1xuICAgICAgICB0aGlzLnB1c2hGYWlsdXJlKCdFeHBlY3RlZCBhdCBsZWFzdCBvbmUgYXNzZXJ0aW9uLCBidXQgbm9uZSB3ZXJlIHJ1biAtIGNhbGwgJyArICdleHBlY3QoMCkgdG8gYWNjZXB0IHplcm8gYXNzZXJ0aW9ucy4nLCB0aGlzLnN0YWNrKTtcbiAgICAgIH1cbiAgICAgIHZhciBtb2R1bGUgPSB0aGlzLm1vZHVsZTtcbiAgICAgIHZhciBtb2R1bGVOYW1lID0gbW9kdWxlLm5hbWU7XG4gICAgICB2YXIgdGVzdE5hbWUgPSB0aGlzLnRlc3ROYW1lO1xuICAgICAgdmFyIHNraXBwZWQgPSAhIXRoaXMuc2tpcDtcbiAgICAgIHZhciB0b2RvID0gISF0aGlzLnRvZG87XG4gICAgICB2YXIgYmFkID0gMDtcbiAgICAgIHZhciBzdG9yYWdlID0gY29uZmlnLnN0b3JhZ2U7XG4gICAgICB0aGlzLnJ1bnRpbWUgPSBNYXRoLnJvdW5kKHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5zdGFydGVkKTtcbiAgICAgIGNvbmZpZy5zdGF0cy5hbGwgKz0gdGhpcy5hc3NlcnRpb25zLmxlbmd0aDtcbiAgICAgIGNvbmZpZy5zdGF0cy50ZXN0Q291bnQgKz0gMTtcbiAgICAgIG1vZHVsZS5zdGF0cy5hbGwgKz0gdGhpcy5hc3NlcnRpb25zLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hc3NlcnRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIEEgZmFpbGluZyBhc3NlcnRpb24gd2lsbCBjb3VudHMgdG93YXJkIHRoZSBIVE1MIFJlcG9ydGVyJ3NcbiAgICAgICAgLy8gXCJYIGFzc2VydGlvbnMsIFkgZmFpbGVkXCIgbGluZSBldmVuIGlmIGl0IHdhcyBpbnNpZGUgYSB0b2RvLlxuICAgICAgICAvLyBJbnZlcnRpbmcgdGhpcyB3b3VsZCBiZSBzaW1pbGFybHkgY29uZnVzaW5nIHNpbmNlIGFsbCBidXQgdGhlIGxhc3RcbiAgICAgICAgLy8gcGFzc2luZyBhc3NlcnRpb24gaW5zaWRlIGEgdG9kbyB0ZXN0IHNob3VsZCBiZSBjb25zaWRlcmVkIGFzIGdvb2QuXG4gICAgICAgIC8vIFRoZXNlIHN0YXRzIGRvbid0IGRlY2lkZSB0aGUgb3V0Y29tZSBvZiBhbnl0aGluZywgc28gY291bnRpbmcgdGhlbVxuICAgICAgICAvLyBhcyBmYWlsaW5nIHNlZW1zIHRoZSBtb3N0IGludHVpdGl2ZS5cbiAgICAgICAgaWYgKCF0aGlzLmFzc2VydGlvbnNbaV0ucmVzdWx0KSB7XG4gICAgICAgICAgYmFkKys7XG4gICAgICAgICAgY29uZmlnLnN0YXRzLmJhZCsrO1xuICAgICAgICAgIG1vZHVsZS5zdGF0cy5iYWQrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHNraXBwZWQpIHtcbiAgICAgICAgaW5jcmVtZW50VGVzdHNJZ25vcmVkKG1vZHVsZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmNyZW1lbnRUZXN0c1J1bihtb2R1bGUpO1xuICAgICAgfVxuXG4gICAgICAvLyBTdG9yZSByZXN1bHQgd2hlbiBwb3NzaWJsZS5cbiAgICAgIC8vIE5vdGUgdGhhdCB0aGlzIGFsc28gbWFya3MgdG9kbyB0ZXN0cyBhcyBiYWQsIHRodXMgdGhleSBnZXQgaG9pc3RlZCxcbiAgICAgIC8vIGFuZCBhbHdheXMgcnVuIGZpcnN0IG9uIHJlZnJlc2guXG4gICAgICBpZiAoc3RvcmFnZSkge1xuICAgICAgICBpZiAoYmFkKSB7XG4gICAgICAgICAgc3RvcmFnZS5zZXRJdGVtKCdxdW5pdC10ZXN0LScgKyBtb2R1bGVOYW1lICsgJy0nICsgdGVzdE5hbWUsIGJhZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKCdxdW5pdC10ZXN0LScgKyBtb2R1bGVOYW1lICsgJy0nICsgdGVzdE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEFmdGVyIGVtaXR0aW5nIHRoZSBqcy1yZXBvcnRlcnMgZXZlbnQgd2UgY2xlYW51cCB0aGUgYXNzZXJ0aW9uIGRhdGEgdG9cbiAgICAgIC8vIGF2b2lkIGxlYWtpbmcgaXQuIEl0IGlzIG5vdCB1c2VkIGJ5IHRoZSBsZWdhY3kgdGVzdERvbmUgY2FsbGJhY2tzLlxuICAgICAgZW1pdCgndGVzdEVuZCcsIHRoaXMudGVzdFJlcG9ydC5lbmQodHJ1ZSkpO1xuICAgICAgdGhpcy50ZXN0UmVwb3J0LnNsaW1Bc3NlcnRpb25zKCk7XG4gICAgICB2YXIgdGVzdCA9IHRoaXM7XG4gICAgICByZXR1cm4gcnVuTG9nZ2luZ0NhbGxiYWNrcygndGVzdERvbmUnLCB7XG4gICAgICAgIG5hbWU6IHRlc3ROYW1lLFxuICAgICAgICBtb2R1bGU6IG1vZHVsZU5hbWUsXG4gICAgICAgIHNraXBwZWQ6IHNraXBwZWQsXG4gICAgICAgIHRvZG86IHRvZG8sXG4gICAgICAgIGZhaWxlZDogYmFkLFxuICAgICAgICBwYXNzZWQ6IHRoaXMuYXNzZXJ0aW9ucy5sZW5ndGggLSBiYWQsXG4gICAgICAgIHRvdGFsOiB0aGlzLmFzc2VydGlvbnMubGVuZ3RoLFxuICAgICAgICBydW50aW1lOiBza2lwcGVkID8gMCA6IHRoaXMucnVudGltZSxcbiAgICAgICAgLy8gSFRNTCBSZXBvcnRlciB1c2VcbiAgICAgICAgYXNzZXJ0aW9uczogdGhpcy5hc3NlcnRpb25zLFxuICAgICAgICB0ZXN0SWQ6IHRoaXMudGVzdElkLFxuICAgICAgICAvLyBTb3VyY2Ugb2YgVGVzdFxuICAgICAgICAvLyBnZW5lcmF0aW5nIHN0YWNrIHRyYWNlIGlzIGV4cGVuc2l2ZSwgc28gdXNpbmcgYSBnZXR0ZXIgd2lsbCBoZWxwIGRlZmVyIHRoaXMgdW50aWwgd2UgbmVlZCBpdFxuICAgICAgICBnZXQgc291cmNlKCkge1xuICAgICAgICAgIHJldHVybiB0ZXN0LnN0YWNrO1xuICAgICAgICB9XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGFsbFRlc3RzRXhlY3V0ZWQobW9kdWxlKSkge1xuICAgICAgICAgIHZhciBjb21wbGV0ZWRNb2R1bGVzID0gW21vZHVsZV07XG5cbiAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgcGFyZW50IG1vZHVsZXMsIGl0ZXJhdGl2ZWx5LCBhcmUgZG9uZS4gSWYgdGhhdCB0aGUgY2FzZSxcbiAgICAgICAgICAvLyB3ZSBlbWl0IHRoZSBgc3VpdGVFbmRgIGV2ZW50IGFuZCB0cmlnZ2VyIGBtb2R1bGVEb25lYCBjYWxsYmFjay5cbiAgICAgICAgICB2YXIgcGFyZW50ID0gbW9kdWxlLnBhcmVudE1vZHVsZTtcbiAgICAgICAgICB3aGlsZSAocGFyZW50ICYmIGFsbFRlc3RzRXhlY3V0ZWQocGFyZW50KSkge1xuICAgICAgICAgICAgY29tcGxldGVkTW9kdWxlcy5wdXNoKHBhcmVudCk7XG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50TW9kdWxlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgbW9kdWxlRG9uZUNoYWluID0gX1Byb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgIGNvbXBsZXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAoY29tcGxldGVkTW9kdWxlKSB7XG4gICAgICAgICAgICBtb2R1bGVEb25lQ2hhaW4gPSBtb2R1bGVEb25lQ2hhaW4udGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBsb2dTdWl0ZUVuZChjb21wbGV0ZWRNb2R1bGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIG1vZHVsZURvbmVDaGFpbjtcbiAgICAgICAgfVxuICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbmZpZy5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgfSk7XG4gICAgICBmdW5jdGlvbiBsb2dTdWl0ZUVuZChtb2R1bGUpIHtcbiAgICAgICAgLy8gUmVzZXQgYG1vZHVsZS5ob29rc2AgdG8gZW5zdXJlIHRoYXQgYW55dGhpbmcgcmVmZXJlbmNlZCBpbiB0aGVzZSBob29rc1xuICAgICAgICAvLyBoYXMgYmVlbiByZWxlYXNlZCB0byBiZSBnYXJiYWdlIGNvbGxlY3RlZC4gRGVzY2VuZGFudCBtb2R1bGVzIHRoYXQgd2VyZVxuICAgICAgICAvLyBlbnRpcmVseSBza2lwcGVkLCBlLmcuIGR1ZSB0byBmaWx0ZXJpbmcsIHdpbGwgbmV2ZXIgaGF2ZSB0aGlzIG1ldGhvZFxuICAgICAgICAvLyBjYWxsZWQgZm9yIHRoZW0sIGJ1dCBtaWdodCBoYXZlIGhvb2tzIHdpdGggcmVmZXJlbmNlcyBwaW5uaW5nIGRhdGEgaW5cbiAgICAgICAgLy8gbWVtb3J5IChldmVuIGlmIHRoZSBob29rcyB3ZXJlbid0IGFjdHVhbGx5IGV4ZWN1dGVkKSwgc28gd2UgcmVzZXQgdGhlXG4gICAgICAgIC8vIGhvb2tzIG9uIGFsbCBkZXNjZW5kYW50IG1vZHVsZXMgaGVyZSBhcyB3ZWxsLiBUaGlzIGlzIHNhZmUgYmVjYXVzZSB3ZVxuICAgICAgICAvLyB3aWxsIG5ldmVyIGNhbGwgdGhpcyBhcyBsb25nIGFzIGFueSBkZXNjZW5kYW50IG1vZHVsZXMgc3RpbGwgaGF2ZSB0ZXN0c1xuICAgICAgICAvLyB0byBydW4uIFRoaXMgYWxzbyBtZWFucyB0aGF0IGluIG11bHRpLXRpZXJlZCBuZXN0aW5nIHNjZW5hcmlvcyB3ZSBtaWdodFxuICAgICAgICAvLyByZXNldCB0aGUgaG9va3MgbXVsdGlwbGUgdGltZXMgb24gc29tZSBtb2R1bGVzLCBidXQgdGhhdCdzIGhhcm1sZXNzLlxuICAgICAgICB2YXIgbW9kdWxlcyA9IFttb2R1bGVdO1xuICAgICAgICB3aGlsZSAobW9kdWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICB2YXIgbmV4dE1vZHVsZSA9IG1vZHVsZXMuc2hpZnQoKTtcbiAgICAgICAgICBuZXh0TW9kdWxlLmhvb2tzID0ge307XG4gICAgICAgICAgbW9kdWxlcy5wdXNoLmFwcGx5KG1vZHVsZXMsIF90b0NvbnN1bWFibGVBcnJheShuZXh0TW9kdWxlLmNoaWxkTW9kdWxlcykpO1xuICAgICAgICB9XG4gICAgICAgIGVtaXQoJ3N1aXRlRW5kJywgbW9kdWxlLnN1aXRlUmVwb3J0LmVuZCh0cnVlKSk7XG4gICAgICAgIHJldHVybiBydW5Mb2dnaW5nQ2FsbGJhY2tzKCdtb2R1bGVEb25lJywge1xuICAgICAgICAgIG5hbWU6IG1vZHVsZS5uYW1lLFxuICAgICAgICAgIHRlc3RzOiBtb2R1bGUudGVzdHMsXG4gICAgICAgICAgZmFpbGVkOiBtb2R1bGUuc3RhdHMuYmFkLFxuICAgICAgICAgIHBhc3NlZDogbW9kdWxlLnN0YXRzLmFsbCAtIG1vZHVsZS5zdGF0cy5iYWQsXG4gICAgICAgICAgdG90YWw6IG1vZHVsZS5zdGF0cy5hbGwsXG4gICAgICAgICAgcnVudGltZTogTWF0aC5yb3VuZChwZXJmb3JtYW5jZS5ub3coKSAtIG1vZHVsZS5zdGF0cy5zdGFydGVkKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHByZXNlcnZlVGVzdEVudmlyb25tZW50OiBmdW5jdGlvbiBwcmVzZXJ2ZVRlc3RFbnZpcm9ubWVudCgpIHtcbiAgICAgIGlmICh0aGlzLnByZXNlcnZlRW52aXJvbm1lbnQpIHtcbiAgICAgICAgdGhpcy5tb2R1bGUudGVzdEVudmlyb25tZW50ID0gdGhpcy50ZXN0RW52aXJvbm1lbnQ7XG4gICAgICAgIHRoaXMudGVzdEVudmlyb25tZW50ID0gZXh0ZW5kKHt9LCB0aGlzLm1vZHVsZS50ZXN0RW52aXJvbm1lbnQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcXVldWU6IGZ1bmN0aW9uIHF1ZXVlKCkge1xuICAgICAgdmFyIHRlc3QgPSB0aGlzO1xuICAgICAgaWYgKCF0aGlzLnZhbGlkKCkpIHtcbiAgICAgICAgaW5jcmVtZW50VGVzdHNJZ25vcmVkKHRoaXMubW9kdWxlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gcnVuVGVzdCgpIHtcbiAgICAgICAgcmV0dXJuIFtmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHRlc3QuYmVmb3JlKCk7XG4gICAgICAgIH1dLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkodGVzdC5ob29rcygnYmVmb3JlJykpLCBbZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRlc3QucHJlc2VydmVUZXN0RW52aXJvbm1lbnQoKTtcbiAgICAgICAgfV0sIF90b0NvbnN1bWFibGVBcnJheSh0ZXN0Lmhvb2tzKCdiZWZvcmVFYWNoJykpLCBbZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRlc3QucnVuKCk7XG4gICAgICAgIH1dLCBfdG9Db25zdW1hYmxlQXJyYXkodGVzdC5ob29rcygnYWZ0ZXJFYWNoJykucmV2ZXJzZSgpKSwgX3RvQ29uc3VtYWJsZUFycmF5KHRlc3QuaG9va3MoJ2FmdGVyJykucmV2ZXJzZSgpKSwgW2Z1bmN0aW9uICgpIHtcbiAgICAgICAgICB0ZXN0LmFmdGVyKCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdGVzdC5maW5pc2goKTtcbiAgICAgICAgfV0pO1xuICAgICAgfVxuICAgICAgdmFyIHByZXZpb3VzRmFpbENvdW50ID0gY29uZmlnLnN0b3JhZ2UgJiYgK2NvbmZpZy5zdG9yYWdlLmdldEl0ZW0oJ3F1bml0LXRlc3QtJyArIHRoaXMubW9kdWxlLm5hbWUgKyAnLScgKyB0aGlzLnRlc3ROYW1lKTtcblxuICAgICAgLy8gUHJpb3JpdGl6ZSBwcmV2aW91c2x5IGZhaWxlZCB0ZXN0cywgZGV0ZWN0ZWQgZnJvbSBzdG9yYWdlXG4gICAgICB2YXIgcHJpb3JpdGl6ZSA9IGNvbmZpZy5yZW9yZGVyICYmICEhcHJldmlvdXNGYWlsQ291bnQ7XG4gICAgICB0aGlzLnByZXZpb3VzRmFpbHVyZSA9ICEhcHJldmlvdXNGYWlsQ291bnQ7XG4gICAgICBjb25maWcucHEuYWRkKHJ1blRlc3QsIHByaW9yaXRpemUpO1xuICAgIH0sXG4gICAgcHVzaFJlc3VsdDogZnVuY3Rpb24gcHVzaFJlc3VsdChyZXN1bHRJbmZvKSB7XG4gICAgICBpZiAodGhpcyAhPT0gY29uZmlnLmN1cnJlbnQpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSByZXN1bHRJbmZvICYmIHJlc3VsdEluZm8ubWVzc2FnZSB8fCAnJztcbiAgICAgICAgdmFyIHRlc3ROYW1lID0gdGhpcyAmJiB0aGlzLnRlc3ROYW1lIHx8ICcnO1xuICAgICAgICB2YXIgZXJyb3IgPSAnQXNzZXJ0aW9uIG9jY3VycmVkIGFmdGVyIHRlc3QgZmluaXNoZWQuXFxuJyArICc+IFRlc3Q6ICcgKyB0ZXN0TmFtZSArICdcXG4nICsgJz4gTWVzc2FnZTogJyArIG1lc3NhZ2UgKyAnXFxuJztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICAgIH1cblxuICAgICAgLy8gRGVzdHJ1Y3R1cmUgb2YgcmVzdWx0SW5mbyA9IHsgcmVzdWx0LCBhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCBuZWdhdGl2ZSB9XG4gICAgICB2YXIgZGV0YWlscyA9IHtcbiAgICAgICAgbW9kdWxlOiB0aGlzLm1vZHVsZS5uYW1lLFxuICAgICAgICBuYW1lOiB0aGlzLnRlc3ROYW1lLFxuICAgICAgICByZXN1bHQ6IHJlc3VsdEluZm8ucmVzdWx0LFxuICAgICAgICBtZXNzYWdlOiByZXN1bHRJbmZvLm1lc3NhZ2UsXG4gICAgICAgIGFjdHVhbDogcmVzdWx0SW5mby5hY3R1YWwsXG4gICAgICAgIHRlc3RJZDogdGhpcy50ZXN0SWQsXG4gICAgICAgIG5lZ2F0aXZlOiByZXN1bHRJbmZvLm5lZ2F0aXZlIHx8IGZhbHNlLFxuICAgICAgICBydW50aW1lOiBNYXRoLnJvdW5kKHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5zdGFydGVkKSxcbiAgICAgICAgdG9kbzogISF0aGlzLnRvZG9cbiAgICAgIH07XG4gICAgICBpZiAoaGFzT3duJDEuY2FsbChyZXN1bHRJbmZvLCAnZXhwZWN0ZWQnKSkge1xuICAgICAgICBkZXRhaWxzLmV4cGVjdGVkID0gcmVzdWx0SW5mby5leHBlY3RlZDtcbiAgICAgIH1cbiAgICAgIGlmICghcmVzdWx0SW5mby5yZXN1bHQpIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IHJlc3VsdEluZm8uc291cmNlIHx8IHNvdXJjZUZyb21TdGFja3RyYWNlKCk7XG4gICAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgICBkZXRhaWxzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5sb2dBc3NlcnRpb24oZGV0YWlscyk7XG4gICAgICB0aGlzLmFzc2VydGlvbnMucHVzaCh7XG4gICAgICAgIHJlc3VsdDogISFyZXN1bHRJbmZvLnJlc3VsdCxcbiAgICAgICAgbWVzc2FnZTogcmVzdWx0SW5mby5tZXNzYWdlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIHB1c2hGYWlsdXJlOiBmdW5jdGlvbiBwdXNoRmFpbHVyZShtZXNzYWdlLCBzb3VyY2UpIHtcbiAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBUZXN0KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3B1c2hGYWlsdXJlKCkgYXNzZXJ0aW9uIG91dHNpZGUgdGVzdCBjb250ZXh0LCB3YXMgJyArIHNvdXJjZUZyb21TdGFja3RyYWNlKDIpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHVzaFJlc3VsdCh7XG4gICAgICAgIHJlc3VsdDogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UgfHwgJ2Vycm9yJyxcbiAgICAgICAgc291cmNlOiBzb3VyY2VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogTG9nIGFzc2VydGlvbiBkZXRhaWxzIHVzaW5nIGJvdGggdGhlIG9sZCBRVW5pdC5sb2cgaW50ZXJmYWNlIGFuZFxuICAgICAqIFFVbml0Lm9uKCBcImFzc2VydGlvblwiICkgaW50ZXJmYWNlLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBsb2dBc3NlcnRpb246IGZ1bmN0aW9uIGxvZ0Fzc2VydGlvbihkZXRhaWxzKSB7XG4gICAgICBydW5Mb2dnaW5nQ2FsbGJhY2tzKCdsb2cnLCBkZXRhaWxzKTtcbiAgICAgIHZhciBhc3NlcnRpb24gPSB7XG4gICAgICAgIHBhc3NlZDogZGV0YWlscy5yZXN1bHQsXG4gICAgICAgIGFjdHVhbDogZGV0YWlscy5hY3R1YWwsXG4gICAgICAgIGV4cGVjdGVkOiBkZXRhaWxzLmV4cGVjdGVkLFxuICAgICAgICBtZXNzYWdlOiBkZXRhaWxzLm1lc3NhZ2UsXG4gICAgICAgIHN0YWNrOiBkZXRhaWxzLnNvdXJjZSxcbiAgICAgICAgdG9kbzogZGV0YWlscy50b2RvXG4gICAgICB9O1xuICAgICAgdGhpcy50ZXN0UmVwb3J0LnB1c2hBc3NlcnRpb24oYXNzZXJ0aW9uKTtcbiAgICAgIGVtaXQoJ2Fzc2VydGlvbicsIGFzc2VydGlvbik7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZXNldCBjb25maWcudGltZW91dCB3aXRoIGEgbmV3IHRpbWVvdXQgZHVyYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZW91dER1cmF0aW9uXG4gICAgICovXG4gICAgaW50ZXJuYWxSZXNldFRpbWVvdXQ6IGZ1bmN0aW9uIGludGVybmFsUmVzZXRUaW1lb3V0KHRpbWVvdXREdXJhdGlvbikge1xuICAgICAgY2xlYXJUaW1lb3V0KGNvbmZpZy50aW1lb3V0KTtcbiAgICAgIGNvbmZpZy50aW1lb3V0ID0gc2V0VGltZW91dCQxKGNvbmZpZy50aW1lb3V0SGFuZGxlcih0aW1lb3V0RHVyYXRpb24pLCB0aW1lb3V0RHVyYXRpb24pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGFzeW5jIHBhdXNlIGFuZCByZXR1cm4gYSBuZXcgZnVuY3Rpb24gdGhhdCBjYW4gcmVsZWFzZSB0aGUgcGF1c2UuXG4gICAgICpcbiAgICAgKiBUaGlzIG1lY2hhbmlzbSBpcyBpbnRlcm5hbGx5IHVzZWQgYnk6XG4gICAgICpcbiAgICAgKiAtIGV4cGxpY2l0IGFzeW5jIHBhdXNlcywgY3JlYXRlZCBieSBjYWxsaW5nIGBhc3NlcnQuYXN5bmMoKWAsXG4gICAgICogLSBpbXBsaWNpdCBhc3luYyBwYXVzZXMsIGNyZWF0ZWQgd2hlbiBgUVVuaXQudGVzdCgpYCBvciBtb2R1bGUgaG9vayBjYWxsYmFja3NcbiAgICAgKiAgIHVzZSBhc3luYy1hd2FpdCBvciBvdGhlcndpc2UgcmV0dXJuIGEgUHJvbWlzZS5cbiAgICAgKlxuICAgICAqIEhhcHB5IHNjZW5hcmlvOlxuICAgICAqXG4gICAgICogLSBQYXVzZSBpcyBjcmVhdGVkIGJ5IGNhbGxpbmcgaW50ZXJuYWxTdG9wKCkuXG4gICAgICpcbiAgICAgKiAgIFBhdXNlIGlzIHJlbGVhc2VkIG5vcm1hbGx5IGJ5IGludm9raW5nIHJlbGVhc2UoKSBkdXJpbmcgdGhlIHNhbWUgdGVzdC5cbiAgICAgKlxuICAgICAqICAgVGhlIHJlbGVhc2UoKSBjYWxsYmFjayBsZXRzIGludGVybmFsIHByb2Nlc3NpbmcgcmVzdW1lLlxuICAgICAqXG4gICAgICogRmFpbHVyZSBzY2VuYXJpb3M6XG4gICAgICpcbiAgICAgKiAtIFRoZSB0ZXN0IGZhaWxzIGR1ZSB0byBhbiB1bmNhdWdodCBleGNlcHRpb24uXG4gICAgICpcbiAgICAgKiAgIEluIHRoaXMgY2FzZSwgVGVzdC5ydW4oKSB3aWxsIGNhbGwgaW50ZXJuYWxSZWNvdmVyKCkgd2hpY2ggZW1wdGllcyB0aGUgY2xlYXJzIGFsbFxuICAgICAqICAgYXN5bmMgcGF1c2VzIGFuZCBzZXRzIHRoZSBjYW5jZWxsZWQgZmxhZywgd2hpY2ggbWVhbnMgd2Ugc2lsZW50bHkgaWdub3JlIGFueVxuICAgICAqICAgbGF0ZSBjYWxscyB0byB0aGUgcmVzdW1lKCkgY2FsbGJhY2ssIGFzIHdlIHdpbGwgaGF2ZSBtb3ZlZCBvbiB0byBhIGRpZmZlcmVudFxuICAgICAqICAgdGVzdCBieSB0aGVuLCBhbmQgd2UgZG9uJ3Qgd2FudCB0byBjYXVzZSBhbiBleHRyYSBcInJlbGVhc2UgZHVyaW5nIGEgZGlmZmVyZW50IHRlc3RcIlxuICAgICAqICAgZXJyb3JzIHRoYXQgdGhlIGRldmVsb3BlciBpc24ndCByZWFsbHkgcmVzcG9uc2libGUgZm9yLiBUaGlzIGNhbiBoYXBwZW4gd2hlbiBhIHRlc3RcbiAgICAgKiAgIGNvcnJlY3RseSBzY2hlZHVsZXMgYSBjYWxsIHRvIHJlbGVhc2UoKSwgYnV0IGFsc28gY2F1c2VzIGFuIHVuY2F1Z2h0IGVycm9yLiBUaGVcbiAgICAgKiAgIHVuY2F1Z2h0IGVycm9yIG1lYW5zIHdlIHdpbGwgbm8gbG9uZ2VyIHdhaXQgZm9yIHRoZSByZWxlYXNlIChhcyBpdCBtaWdodCBub3QgYXJyaXZlKS5cbiAgICAgKlxuICAgICAqIC0gUGF1c2UgaXMgbmV2ZXIgcmVsZWFzZWQsIG9yIGNhbGxlZCBhbiBpbnN1ZmZpY2llbnQgbnVtYmVyIG9mIHRpbWVzLlxuICAgICAqXG4gICAgICogICBPdXIgdGltZW91dCBoYW5kbGVyIHdpbGwga2lsbCB0aGUgcGF1c2UgYW5kIHJlc3VtZSB0ZXN0IHByb2Nlc3NpbmcsIGJhc2ljYWxseVxuICAgICAqICAgbGlrZSBpbnRlcm5hbFJlY292ZXIoKSwgYnV0IGZvciBvbmUgcGF1c2UgaW5zdGVhZCBvZiBhbnkvYWxsLlxuICAgICAqXG4gICAgICogICBIZXJlLCB0b28sIGFueSBsYXRlIGNhbGxzIHRvIHJlc3VtZSgpIHdpbGwgYmUgc2lsZW50bHkgaWdub3JlZCB0byBhdm9pZFxuICAgICAqICAgZXh0cmEgZXJyb3JzLiBXZSB0b2xlcmF0ZSB0aGlzIHNpbmNlIHRoZSBvcmlnaW5hbCB0ZXN0IHdpbGwgaGF2ZSBhbHJlYWR5IGJlZW5cbiAgICAgKiAgIG1hcmtlZCBhcyBmYWlsdXJlLlxuICAgICAqXG4gICAgICogICBUT0RPOiBRVW5pdCAzIHdpbGwgZW5hYmxlIHRpbWVvdXRzIGJ5IGRlZmF1bHQgPGh0dHBzOi8vZ2l0aHViLmNvbS9xdW5pdGpzL3F1bml0L2lzc3Vlcy8xNDgzPixcbiAgICAgKiAgIGJ1dCByaWdodCBub3cgYSB0ZXN0IHdpbGwgaGFuZyBpbmRlZmluaXRlbHkgaWYgYXN5bmMgcGF1c2VzIGFyZSBub3QgcmVsZWFzZWQsXG4gICAgICogICB1bmxlc3MgUVVuaXQuY29uZmlnLnRlc3RUaW1lb3V0IG9yIGFzc2VydC50aW1lb3V0KCkgaXMgdXNlZC5cbiAgICAgKlxuICAgICAqIC0gUGF1c2UgaXMgc3BvbnRhbmVvdXNseSByZWxlYXNlZCBkdXJpbmcgYSBkaWZmZXJlbnQgdGVzdCxcbiAgICAgKiAgIG9yIHdoZW4gbm8gdGVzdCBpcyBjdXJyZW50bHkgcnVubmluZy5cbiAgICAgKlxuICAgICAqICAgVGhpcyBpcyBjbG9zZSB0byBpbXBvc3NpYmxlIGJlY2F1c2UgdGhpcyBlcnJvciBvbmx5IGhhcHBlbnMgaWYgdGhlIG9yaWdpbmFsIHRlc3RcbiAgICAgKiAgIHN1Y2Nlc2Z1bGx5IGZpbmlzaGVkIGZpcnN0IChzaW5jZSBvdGhlciBmYWlsdXJlIHNjZW5hcmlvcyBraWxsIHBhdXNlcyBhbmQgaWdub3JlXG4gICAgICogICBsYXRlIGNhbGxzKS4gSXQgY2FuIGhhcHBlbiBpZiBhIHRlc3QgZW5kZWQgZXhhY3RseSBhcyBleHBlY3RlZCwgYnV0IGhhcyBzb21lXG4gICAgICogICBleHRlcm5hbCBvciBzaGFyZWQgc3RhdGUgY29udGludWluZyB0byBob2xkIGEgcmVmZXJlbmNlIHRvIHRoZSByZWxlYXNlIGNhbGxiYWNrLFxuICAgICAqICAgYW5kIGVpdGhlciB0aGUgc2FtZSB0ZXN0IHNjaGVkdWxlZCBhbm90aGVyIGNhbGwgdG8gaXQgaW4gdGhlIGZ1dHVyZSwgb3IgYSBsYXRlciB0ZXN0XG4gICAgICogICBjYXVzZXMgaXQgdG8gYmUgY2FsbGVkIHRocm91Z2ggc29tZSBzaGFyZWQgc3RhdGUuXG4gICAgICpcbiAgICAgKiAtIFBhdXNlIHJlbGVhc2UoKSBpcyBjYWxsZWQgdG9vIG9mdGVuLCBkdXJpbmcgdGhlIHNhbWUgdGVzdC5cbiAgICAgKlxuICAgICAqICAgVGhpcyBzaW1wbHkgdGhyb3dzIGFuIGVycm9yLCBhZnRlciB3aGljaCB1bmNhdWdodCBlcnJvciBoYW5kbGluZyBwaWNrcyBpdCB1cFxuICAgICAqICAgYW5kIHByb2Nlc3NpbmcgcmVzdW1lcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbcmVxdWlyZWRDYWxscz0xXVxuICAgICAqL1xuICAgIGludGVybmFsU3RvcDogZnVuY3Rpb24gaW50ZXJuYWxTdG9wKCkge1xuICAgICAgdmFyIHJlcXVpcmVkQ2FsbHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDE7XG4gICAgICBjb25maWcuYmxvY2tpbmcgPSB0cnVlO1xuICAgICAgdmFyIHRlc3QgPSB0aGlzO1xuICAgICAgdmFyIHBhdXNlSWQgPSB0aGlzLm5leHRQYXVzZUlkKys7XG4gICAgICB2YXIgcGF1c2UgPSB7XG4gICAgICAgIGNhbmNlbGxlZDogZmFsc2UsXG4gICAgICAgIHJlbWFpbmluZzogcmVxdWlyZWRDYWxsc1xuICAgICAgfTtcbiAgICAgIHRlc3QucGF1c2VzLnNldChwYXVzZUlkLCBwYXVzZSk7XG4gICAgICBmdW5jdGlvbiByZWxlYXNlKCkge1xuICAgICAgICBpZiAocGF1c2UuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWcuY3VycmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIHJlbGVhc2Ugb2YgYXN5bmMgcGF1c2UgYWZ0ZXIgdGVzdHMgZmluaXNoZWQuXFxuJyArIFwiPiBUZXN0OiBcIi5jb25jYXQodGVzdC50ZXN0TmFtZSwgXCIgW2FzeW5jICNcIikuY29uY2F0KHBhdXNlSWQsIFwiXVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZy5jdXJyZW50ICE9PSB0ZXN0KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIHJlbGVhc2Ugb2YgYXN5bmMgcGF1c2UgZHVyaW5nIGEgZGlmZmVyZW50IHRlc3QuXFxuJyArIFwiPiBUZXN0OiBcIi5jb25jYXQodGVzdC50ZXN0TmFtZSwgXCIgW2FzeW5jICNcIikuY29uY2F0KHBhdXNlSWQsIFwiXVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdXNlLnJlbWFpbmluZyA8PSAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcmllZCB0byByZWxlYXNlIGFzeW5jIHBhdXNlIHRoYXQgd2FzIGFscmVhZHkgcmVsZWFzZWQuXFxuJyArIFwiPiBUZXN0OiBcIi5jb25jYXQodGVzdC50ZXN0TmFtZSwgXCIgW2FzeW5jICNcIikuY29uY2F0KHBhdXNlSWQsIFwiXVwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgYHJlcXVpcmVkQ2FsbHNgIHBhcmFtZXRlciBleGlzdHMgdG8gc3VwcG9ydCBgYXNzZXJ0LmFzeW5jKGNvdW50KWBcbiAgICAgICAgcGF1c2UucmVtYWluaW5nLS07XG4gICAgICAgIGlmIChwYXVzZS5yZW1haW5pbmcgPT09IDApIHtcbiAgICAgICAgICB0ZXN0LnBhdXNlcy5kZWxldGUocGF1c2VJZCk7XG4gICAgICAgIH1cbiAgICAgICAgaW50ZXJuYWxTdGFydCh0ZXN0KTtcbiAgICAgIH1cblxuICAgICAgLy8gU2V0IGEgcmVjb3ZlcnkgdGltZW91dCwgaWYgc28gY29uZmlndXJlZC5cbiAgICAgIGlmIChzZXRUaW1lb3V0JDEpIHtcbiAgICAgICAgdmFyIHRpbWVvdXREdXJhdGlvbjtcbiAgICAgICAgaWYgKHR5cGVvZiB0ZXN0LnRpbWVvdXQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgdGltZW91dER1cmF0aW9uID0gdGVzdC50aW1lb3V0O1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcudGVzdFRpbWVvdXQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgdGltZW91dER1cmF0aW9uID0gY29uZmlnLnRlc3RUaW1lb3V0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGltZW91dER1cmF0aW9uID09PSAnbnVtYmVyJyAmJiB0aW1lb3V0RHVyYXRpb24gPiAwKSB7XG4gICAgICAgICAgY29uZmlnLnRpbWVvdXRIYW5kbGVyID0gZnVuY3Rpb24gKHRpbWVvdXQpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGNvbmZpZy50aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgcGF1c2UuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGVzdC5wYXVzZXMuZGVsZXRlKHBhdXNlSWQpO1xuICAgICAgICAgICAgICB0ZXN0LnB1c2hGYWlsdXJlKFwiVGVzdCB0b29rIGxvbmdlciB0aGFuIFwiLmNvbmNhdCh0aW1lb3V0LCBcIm1zOyB0ZXN0IHRpbWVkIG91dC5cIiksIHNvdXJjZUZyb21TdGFja3RyYWNlKDIpKTtcbiAgICAgICAgICAgICAgaW50ZXJuYWxSZWNvdmVyKHRlc3QpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGNsZWFyVGltZW91dChjb25maWcudGltZW91dCk7XG4gICAgICAgICAgY29uZmlnLnRpbWVvdXQgPSBzZXRUaW1lb3V0JDEoY29uZmlnLnRpbWVvdXRIYW5kbGVyKHRpbWVvdXREdXJhdGlvbiksIHRpbWVvdXREdXJhdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KGNvbmZpZy50aW1lb3V0KTtcbiAgICAgICAgICBjb25maWcudGltZW91dCA9IHNldFRpbWVvdXQkMShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25maWcudGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5fZGVwcmVjYXRlZF90aW1lb3V0X3Nob3duKSB7XG4gICAgICAgICAgICAgIGNvbmZpZy5fZGVwcmVjYXRlZF90aW1lb3V0X3Nob3duID0gdHJ1ZTtcbiAgICAgICAgICAgICAgTG9nZ2VyLndhcm4oXCJUZXN0IFxcXCJcIi5jb25jYXQodGVzdC50ZXN0TmFtZSwgXCJcXFwiIHRvb2sgbG9uZ2VyIHRoYW4gMzAwMG1zLCBidXQgbm8gdGltZW91dCB3YXMgc2V0LiBTZXQgUVVuaXQuY29uZmlnLnRlc3RUaW1lb3V0IG9yIGNhbGwgYXNzZXJ0LnRpbWVvdXQoKSB0byBhdm9pZCBhIHRpbWVvdXQgaW4gUVVuaXQgMy4gaHR0cHM6Ly9xdW5pdGpzLmNvbS9hcGkvY29uZmlnL3Rlc3RUaW1lb3V0L1wiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZWxlYXNlO1xuICAgIH0sXG4gICAgcmVzb2x2ZVByb21pc2U6IGZ1bmN0aW9uIHJlc29sdmVQcm9taXNlKHByb21pc2UsIHBoYXNlKSB7XG4gICAgICBpZiAocHJvbWlzZSAhPSBudWxsKSB7XG4gICAgICAgIHZhciBfdGVzdCA9IHRoaXM7XG4gICAgICAgIHZhciB0aGVuID0gcHJvbWlzZS50aGVuO1xuICAgICAgICBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YXIgcmVzdW1lID0gX3Rlc3QuaW50ZXJuYWxTdG9wKCk7XG4gICAgICAgICAgdmFyIHJlc29sdmUgPSBmdW5jdGlvbiByZXNvbHZlKCkge1xuICAgICAgICAgICAgcmVzdW1lKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoY29uZmlnLm5vdHJ5Y2F0Y2gpIHtcbiAgICAgICAgICAgIHRoZW4uY2FsbChwcm9taXNlLCByZXNvbHZlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHJlamVjdCA9IGZ1bmN0aW9uIHJlamVjdChlcnJvcikge1xuICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9ICdQcm9taXNlIHJlamVjdGVkICcgKyAoIXBoYXNlID8gJ2R1cmluZycgOiBwaGFzZS5yZXBsYWNlKC9FYWNoJC8sICcnKSkgKyAnIFwiJyArIF90ZXN0LnRlc3ROYW1lICsgJ1wiOiAnICsgKGVycm9yICYmIGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xuICAgICAgICAgICAgICBfdGVzdC5wdXNoRmFpbHVyZShtZXNzYWdlLCBleHRyYWN0U3RhY2t0cmFjZShlcnJvciwgMCkpO1xuXG4gICAgICAgICAgICAgIC8vIEVsc2UgbmV4dCB0ZXN0IHdpbGwgY2FycnkgdGhlIHJlc3BvbnNpYmlsaXR5XG4gICAgICAgICAgICAgIHNhdmVHbG9iYWwoKTtcblxuICAgICAgICAgICAgICAvLyBVbmJsb2NrXG4gICAgICAgICAgICAgIGludGVybmFsUmVjb3ZlcihfdGVzdCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhlbi5jYWxsKHByb21pc2UsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB2YWxpZDogZnVuY3Rpb24gdmFsaWQoKSB7XG4gICAgICAvLyBJbnRlcm5hbGx5LWdlbmVyYXRlZCB0ZXN0cyBhcmUgYWx3YXlzIHZhbGlkXG4gICAgICBpZiAodGhpcy5jYWxsYmFjayAmJiB0aGlzLmNhbGxiYWNrLnZhbGlkVGVzdCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIG1vZHVsZUNoYWluSWRNYXRjaCh0ZXN0TW9kdWxlLCBzZWxlY3RlZElkKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgLy8gdW5kZWZpbmVkIG9yIGVtcHR5IGFycmF5XG4gICAgICAgICAgIXNlbGVjdGVkSWQgfHwgIXNlbGVjdGVkSWQubGVuZ3RoIHx8IGluQXJyYXkodGVzdE1vZHVsZS5tb2R1bGVJZCwgc2VsZWN0ZWRJZCkgfHwgdGVzdE1vZHVsZS5wYXJlbnRNb2R1bGUgJiYgbW9kdWxlQ2hhaW5JZE1hdGNoKHRlc3RNb2R1bGUucGFyZW50TW9kdWxlLCBzZWxlY3RlZElkKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKCFtb2R1bGVDaGFpbklkTWF0Y2godGhpcy5tb2R1bGUsIGNvbmZpZy5tb2R1bGVJZCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGNvbmZpZy50ZXN0SWQgJiYgY29uZmlnLnRlc3RJZC5sZW5ndGggJiYgIWluQXJyYXkodGhpcy50ZXN0SWQsIGNvbmZpZy50ZXN0SWQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIG1vZHVsZUNoYWluTmFtZU1hdGNoKHRlc3RNb2R1bGUsIHNlbGVjdGVkTW9kdWxlKSB7XG4gICAgICAgIGlmICghc2VsZWN0ZWRNb2R1bGUpIHtcbiAgICAgICAgICAvLyB1bmRlZmluZWQgb3IgZW1wdHkgc3RyaW5nXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRlc3RNb2R1bGVOYW1lID0gdGVzdE1vZHVsZS5uYW1lID8gdGVzdE1vZHVsZS5uYW1lLnRvTG93ZXJDYXNlKCkgOiBudWxsO1xuICAgICAgICBpZiAodGVzdE1vZHVsZU5hbWUgPT09IHNlbGVjdGVkTW9kdWxlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodGVzdE1vZHVsZS5wYXJlbnRNb2R1bGUpIHtcbiAgICAgICAgICByZXR1cm4gbW9kdWxlQ2hhaW5OYW1lTWF0Y2godGVzdE1vZHVsZS5wYXJlbnRNb2R1bGUsIHNlbGVjdGVkTW9kdWxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBzZWxlY3RlZE1vZHVsZSA9IGNvbmZpZy5tb2R1bGUgJiYgY29uZmlnLm1vZHVsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKCFtb2R1bGVDaGFpbk5hbWVNYXRjaCh0aGlzLm1vZHVsZSwgc2VsZWN0ZWRNb2R1bGUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHZhciBmaWx0ZXIgPSBjb25maWcuZmlsdGVyO1xuICAgICAgaWYgKGZpbHRlcikge1xuICAgICAgICB2YXIgcmVnZXhGaWx0ZXIgPSAvXighPylcXC8oW1xcd1xcV10qKVxcLyhpPyQpLy5leGVjKGZpbHRlcik7XG4gICAgICAgIHZhciBmdWxsTmFtZSA9IHRoaXMubW9kdWxlLm5hbWUgKyAnOiAnICsgdGhpcy50ZXN0TmFtZTtcbiAgICAgICAgaWYgKHJlZ2V4RmlsdGVyKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLnJlZ2V4RmlsdGVyKCEhcmVnZXhGaWx0ZXJbMV0sIHJlZ2V4RmlsdGVyWzJdLCByZWdleEZpbHRlclszXSwgZnVsbE5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnN0cmluZ0ZpbHRlcihmaWx0ZXIsIGZ1bGxOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBjb25maWcudGVzdEZpbHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgdGVzdEluZm8gPSB7XG4gICAgICAgICAgdGVzdElkOiB0aGlzLnRlc3RJZCxcbiAgICAgICAgICB0ZXN0TmFtZTogdGhpcy50ZXN0TmFtZSxcbiAgICAgICAgICBtb2R1bGU6IHRoaXMubW9kdWxlLm5hbWUsXG4gICAgICAgICAgc2tpcDogISF0aGlzLnNraXBcbiAgICAgICAgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gISFjb25maWcudGVzdEZpbHRlcih0ZXN0SW5mbyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgTG9nZ2VyLndhcm4oJ0Vycm9yIGluIFFVbml0LmNvbmZpZy50ZXN0RmlsdGVyIGNhbGxiYWNrOiAnLCBlcnJvcik7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIHJlZ2V4RmlsdGVyOiBmdW5jdGlvbiByZWdleEZpbHRlcihleGNsdWRlLCBwYXR0ZXJuLCBmbGFncywgZnVsbE5hbWUpIHtcbiAgICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAocGF0dGVybiwgZmxhZ3MpO1xuICAgICAgdmFyIG1hdGNoID0gcmVnZXgudGVzdChmdWxsTmFtZSk7XG4gICAgICByZXR1cm4gbWF0Y2ggIT09IGV4Y2x1ZGU7XG4gICAgfSxcbiAgICBzdHJpbmdGaWx0ZXI6IGZ1bmN0aW9uIHN0cmluZ0ZpbHRlcihmaWx0ZXIsIGZ1bGxOYW1lKSB7XG4gICAgICBmaWx0ZXIgPSBmaWx0ZXIudG9Mb3dlckNhc2UoKTtcbiAgICAgIGZ1bGxOYW1lID0gZnVsbE5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIHZhciBpbmNsdWRlID0gZmlsdGVyLmNoYXJBdCgwKSAhPT0gJyEnO1xuICAgICAgaWYgKCFpbmNsdWRlKSB7XG4gICAgICAgIGZpbHRlciA9IGZpbHRlci5zbGljZSgxKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlIGZpbHRlciBtYXRjaGVzLCB3ZSBuZWVkIHRvIGhvbm91ciBpbmNsdWRlXG4gICAgICBpZiAoZnVsbE5hbWUuaW5kZXhPZihmaWx0ZXIpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gaW5jbHVkZTtcbiAgICAgIH1cblxuICAgICAgLy8gT3RoZXJ3aXNlLCBkbyB0aGUgb3Bwb3NpdGVcbiAgICAgIHJldHVybiAhaW5jbHVkZTtcbiAgICB9XG4gIH07XG4gIGZ1bmN0aW9uIHB1c2hGYWlsdXJlKCkge1xuICAgIGlmICghY29uZmlnLmN1cnJlbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigncHVzaEZhaWx1cmUoKSBhc3NlcnRpb24gb3V0c2lkZSB0ZXN0IGNvbnRleHQsIGluICcgKyBzb3VyY2VGcm9tU3RhY2t0cmFjZSgyKSk7XG4gICAgfVxuXG4gICAgLy8gR2V0cyBjdXJyZW50IHRlc3Qgb2JqXG4gICAgdmFyIGN1cnJlbnRUZXN0ID0gY29uZmlnLmN1cnJlbnQ7XG4gICAgcmV0dXJuIGN1cnJlbnRUZXN0LnB1c2hGYWlsdXJlLmFwcGx5KGN1cnJlbnRUZXN0LCBhcmd1bWVudHMpO1xuICB9XG4gIGZ1bmN0aW9uIHNhdmVHbG9iYWwoKSB7XG4gICAgY29uZmlnLnBvbGx1dGlvbiA9IFtdO1xuICAgIGlmIChjb25maWcubm9nbG9iYWxzKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gZykge1xuICAgICAgICBpZiAoaGFzT3duJDEuY2FsbChnLCBrZXkpKSB7XG4gICAgICAgICAgLy8gSW4gT3BlcmEgc29tZXRpbWVzIERPTSBlbGVtZW50IGlkcyBzaG93IHVwIGhlcmUsIGlnbm9yZSB0aGVtXG4gICAgICAgICAgaWYgKC9ecXVuaXQtdGVzdC1vdXRwdXQvLnRlc3Qoa2V5KSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbmZpZy5wb2xsdXRpb24ucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGNoZWNrUG9sbHV0aW9uKCkge1xuICAgIHZhciBvbGQgPSBjb25maWcucG9sbHV0aW9uO1xuICAgIHNhdmVHbG9iYWwoKTtcbiAgICB2YXIgbmV3R2xvYmFscyA9IGRpZmYkMShjb25maWcucG9sbHV0aW9uLCBvbGQpO1xuICAgIGlmIChuZXdHbG9iYWxzLmxlbmd0aCA+IDApIHtcbiAgICAgIHB1c2hGYWlsdXJlKCdJbnRyb2R1Y2VkIGdsb2JhbCB2YXJpYWJsZShzKTogJyArIG5ld0dsb2JhbHMuam9pbignLCAnKSk7XG4gICAgfVxuICAgIHZhciBkZWxldGVkR2xvYmFscyA9IGRpZmYkMShvbGQsIGNvbmZpZy5wb2xsdXRpb24pO1xuICAgIGlmIChkZWxldGVkR2xvYmFscy5sZW5ndGggPiAwKSB7XG4gICAgICBwdXNoRmFpbHVyZSgnRGVsZXRlZCBnbG9iYWwgdmFyaWFibGUocyk6ICcgKyBkZWxldGVkR2xvYmFscy5qb2luKCcsICcpKTtcbiAgICB9XG4gIH1cbiAgdmFyIGZvY3VzZWQgPSBmYWxzZTsgLy8gaW5kaWNhdGVzIHRoYXQgdGhlIFwib25seVwiIGZpbHRlciB3YXMgdXNlZFxuXG4gIGZ1bmN0aW9uIGFkZFRlc3Qoc2V0dGluZ3MpIHtcbiAgICBpZiAoZm9jdXNlZCB8fCBjb25maWcuY3VycmVudE1vZHVsZS5pZ25vcmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBuZXdUZXN0ID0gbmV3IFRlc3Qoc2V0dGluZ3MpO1xuICAgIG5ld1Rlc3QucXVldWUoKTtcbiAgfVxuICBmdW5jdGlvbiBhZGRPbmx5VGVzdChzZXR0aW5ncykge1xuICAgIGlmIChjb25maWcuY3VycmVudE1vZHVsZS5pZ25vcmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghZm9jdXNlZCkge1xuICAgICAgY29uZmlnLnF1ZXVlLmxlbmd0aCA9IDA7XG4gICAgICBjbGVhclN1aXRlUmVwb3J0cyhjb25maWcuY3VycmVudE1vZHVsZSk7XG4gICAgICBmb2N1c2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIG5ld1Rlc3QgPSBuZXcgVGVzdChzZXR0aW5ncyk7XG4gICAgbmV3VGVzdC5xdWV1ZSgpO1xuICB9XG5cbiAgLy8gV2lsbCBiZSBleHBvc2VkIGFzIFFVbml0LnRlc3RcbiAgZnVuY3Rpb24gdGVzdCh0ZXN0TmFtZSwgY2FsbGJhY2spIHtcbiAgICBhZGRUZXN0KHtcbiAgICAgIHRlc3ROYW1lOiB0ZXN0TmFtZSxcbiAgICAgIGNhbGxiYWNrOiBjYWxsYmFja1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIG1ha2VFYWNoVGVzdE5hbWUodGVzdE5hbWUsIGFyZ3VtZW50KSB7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KHRlc3ROYW1lLCBcIiBbXCIpLmNvbmNhdChhcmd1bWVudCwgXCJdXCIpO1xuICB9XG5cbiAgLy8gQ2hhcmFjdGVycyB0byBhdm9pZCBpbiB0ZXN0IG5hbWVzIGVzcGVjaWFsbHkgQ0xJL0FQIG91dHB1dDpcbiAgLy8gKiB4MDAtMUY6IGUuZy4gTlVMTCwgYmFja3NwYWNlIChcXGIpLCBsaW5lIGJyZWFrcyAoXFxyXFxuKSwgRVNDLlxuICAvLyAqIHg3NDogREVMLlxuICAvLyAqIHhBMDogbm9uLWJyZWFraW5nIHNwYWNlLlxuICAvL1xuICAvLyBTZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQVNDSUkjQ2hhcmFjdGVyX29yZGVyXG4gIC8vXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250cm9sLXJlZ2V4XG4gIHZhciByTm9uT2J2aW91c1N0ciA9IC9bXFx4MDAtXFx4MUZcXHg3RlxceEEwXS87XG4gIGZ1bmN0aW9uIHJ1bkVhY2goZGF0YSwgZWFjaEZuKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdmFsdWUgPSBkYXRhW2ldO1xuXG4gICAgICAgIC8vIENyZWF0ZSBhdXRvbWF0aWMgbGFiZWxzIGZvciBwcmltaXRpdmUgZGF0YSBpbiBhcnJheXMgcGFzc2VkIHRvIHRlc3QuZWFjaCgpLlxuICAgICAgICAvLyBXZSB3YW50IHRvIGF2b2lkIHRoZSBkZWZhdWx0IFwiZXhhbXBsZSBbMF0sIGV4YW1wbGUgWzFdXCIgd2hlcmUgcG9zc2libGUgc2luY2VcbiAgICAgICAgLy8gdGhlc2UgYXJlIG5vdCBzZWxmLWV4cGxhbmF0b3J5IGluIHJlc3VsdHMsIGFuZCBhcmUgYWxzbyB0ZWRpb3VzIHRvIGxvY2F0ZVxuICAgICAgICAvLyB0aGUgc291cmNlIG9mIHNpbmNlIHRoZSBudW1lcmljYWwga2V5IG9mIGFuIGFycmF5IGlzbid0IGxpdGVyYWxseSBpbiB0aGVcbiAgICAgICAgLy8gY29kZSAoeW91IGhhdmUgdG8gY291bnQpLlxuICAgICAgICAvL1xuICAgICAgICAvLyBEZXNpZ24gcmVxdWlyZW1lbnRzOlxuICAgICAgICAvLyAqIFVuaXF1ZS4gRWFjaCBsYWJlbCBtdXN0IGJlIHVuaXF1ZSBhbmQgY29ycmVzcG9uZCAxOjEgd2l0aCBhIGRhdGEgdmFsdWUuXG4gICAgICAgIC8vICAgVGhpcyB3YXkgZWFjaCB0ZXN0IG5hbWUgd2lsbCBoYXNoIHRvIGEgdW5pcXVlIHRlc3RJZCB3aXRoIFJlcnVuIGxpbmssXG4gICAgICAgIC8vICAgd2l0aG91dCBoYXZpbmcgdG8gcmVseSBvbiBUZXN0IGNsYXNzIGVuZm9yY2luZyB1bmlxdWVuZXNzIHdpdGggaW52aXNpYmxlXG4gICAgICAgIC8vICAgc3BhY2UgaGFjay5cbiAgICAgICAgLy8gKiBVbmFtYmlnaW91cy4gV2hpbGUgdGVjaG5pY2FsIHVuaXF1ZW5lc3MgaXMgYSBoYXJkIHJlcXVpcmVtZW50IGFib3ZlLFxuICAgICAgICAvLyAgIHdlIGFsc28gd2FudCB0aGUgbGFiZWxzIHRvIGJlIG9idmlvdXMgYW5kIHVuYW1iaWd1b3VzIHRvIGh1bWFucy5cbiAgICAgICAgLy8gICBGb3IgZXhhbXBsZSwgYWJicmViYXRpbmcgXCJmb29iYXJcIiBhbmQgXCJmb29iYXpcIiB0byBcImZcIiBhbmQgXCJmb1wiIGlzXG4gICAgICAgIC8vICAgdGVjaG5pY2FsbHkgdW5pcXVlLCBidXQgYW1iaWdpb3VzIHRvIGh1bWFucyB3aGljaCBvbmUgaXMgd2hpY2guXG4gICAgICAgIC8vICogU2hvcnQgYW5kIHJlYWRhYmxlLiBXaGVyZSBwb3NzaWJsZSB3ZSBvbWl0IHRoZSBhcnJheSBpbmRleCBudW1iZXJzXG4gICAgICAgIC8vICAgc28gdGhhdCBpbiBtb3N0IGNhc2VzLCB0aGUgdmFsdWUgaXMgc2ltcGx5IHNob3duIGFzLWlzLlxuICAgICAgICAvLyAgIFdlIHByZWZlciBcImV4YW1wbGUgW2Zvb10sIGV4YW1wbGUgW2Jhcl1cIlxuICAgICAgICAvLyAgIG92ZXIgXCJleGFtcGxlIFswOiBmb29dLCBleGFtcGxlIFsyOiBiYXJdXCIuXG4gICAgICAgIC8vICAgVGhpcyBhbHNvIGhhcyB0aGUgYmVuZWZpdCBvZiBiZWluZyBzdGFibGUgYW5kIHJvYnVzdCBhZ2FpbnN0IGUuZy5cbiAgICAgICAgLy8gICByZS1vcmRlcmluZyBkYXRhIG9yIGFkZGluZyBuZXcgaXRlbXMgZHVyaW5nIGRldmVsb3BtZW50LCB3aXRob3V0XG4gICAgICAgIC8vICAgaW52YWxpZGF0aW5nIGEgcHJldmlvdXMgZmlsdGVyIG9yIHJlcnVuIGxpbmsgaW1tZWRpYXRlbHkuXG4gICAgICAgIHZhciB2YWx1ZVR5cGUgPSBfdHlwZW9mKHZhbHVlKTtcbiAgICAgICAgdmFyIHRlc3RLZXkgPSBpO1xuICAgICAgICBpZiAodmFsdWVUeXBlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5sZW5ndGggPD0gNDAgJiYgIXJOb25PYnZpb3VzU3RyLnRlc3QodmFsdWUpICYmICEvXFxzKlxcZCs6IC8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICB0ZXN0S2V5ID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnc3RyaW5nJyB8fCB2YWx1ZVR5cGUgPT09ICdudW1iZXInIHx8IHZhbHVlVHlwZSA9PT0gJ2Jvb2xlYW4nIHx8IHZhbHVlVHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICB2YXIgdmFsdWVGb3JOYW1lID0gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgICBpZiAoIXJOb25PYnZpb3VzU3RyLnRlc3QodmFsdWVGb3JOYW1lKSkge1xuICAgICAgICAgICAgdGVzdEtleSA9IGkgKyAnOiAnICsgKHZhbHVlRm9yTmFtZS5sZW5ndGggPD0gMzAgPyB2YWx1ZUZvck5hbWUgOiB2YWx1ZUZvck5hbWUuc2xpY2UoMCwgMjkpICsgJ1x1MjAyNicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlYWNoRm4odmFsdWUsIHRlc3RLZXkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoX3R5cGVvZihkYXRhKSA9PT0gJ29iamVjdCcgJiYgZGF0YSAhPT0gbnVsbCkge1xuICAgICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgICAgZWFjaEZuKGRhdGFba2V5XSwga2V5KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwidGVzdC5lYWNoKCkgZXhwZWN0cyBhbiBhcnJheSBvciBvYmplY3QgYXMgaW5wdXQsIGJ1dFxcbmZvdW5kIFwiLmNvbmNhdChfdHlwZW9mKGRhdGEpLCBcIiBpbnN0ZWFkLlwiKSk7XG4gICAgfVxuICB9XG4gIGV4dGVuZCh0ZXN0LCB7XG4gICAgdG9kbzogZnVuY3Rpb24gdG9kbyh0ZXN0TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgIGFkZFRlc3Qoe1xuICAgICAgICB0ZXN0TmFtZTogdGVzdE5hbWUsXG4gICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgICAgdG9kbzogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBza2lwOiBmdW5jdGlvbiBza2lwKHRlc3ROYW1lKSB7XG4gICAgICBhZGRUZXN0KHtcbiAgICAgICAgdGVzdE5hbWU6IHRlc3ROYW1lLFxuICAgICAgICBza2lwOiB0cnVlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGlmOiBmdW5jdGlvbiBfaWYodGVzdE5hbWUsIGNvbmRpdGlvbiwgY2FsbGJhY2spIHtcbiAgICAgIGFkZFRlc3Qoe1xuICAgICAgICB0ZXN0TmFtZTogdGVzdE5hbWUsXG4gICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgICAgc2tpcDogIWNvbmRpdGlvblxuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbmx5OiBmdW5jdGlvbiBvbmx5KHRlc3ROYW1lLCBjYWxsYmFjaykge1xuICAgICAgYWRkT25seVRlc3Qoe1xuICAgICAgICB0ZXN0TmFtZTogdGVzdE5hbWUsXG4gICAgICAgIGNhbGxiYWNrOiBjYWxsYmFja1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBlYWNoOiBmdW5jdGlvbiBlYWNoKHRlc3ROYW1lLCBkYXRhc2V0LCBjYWxsYmFjaykge1xuICAgICAgcnVuRWFjaChkYXRhc2V0LCBmdW5jdGlvbiAoZGF0YSwgdGVzdEtleSkge1xuICAgICAgICBhZGRUZXN0KHtcbiAgICAgICAgICB0ZXN0TmFtZTogbWFrZUVhY2hUZXN0TmFtZSh0ZXN0TmFtZSwgdGVzdEtleSksXG4gICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgICAgIHdpdGhEYXRhOiB0cnVlLFxuICAgICAgICAgIHN0YWNrT2Zmc2V0OiA1LFxuICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICB0ZXN0LnRvZG8uZWFjaCA9IGZ1bmN0aW9uICh0ZXN0TmFtZSwgZGF0YXNldCwgY2FsbGJhY2spIHtcbiAgICBydW5FYWNoKGRhdGFzZXQsIGZ1bmN0aW9uIChkYXRhLCB0ZXN0S2V5KSB7XG4gICAgICBhZGRUZXN0KHtcbiAgICAgICAgdGVzdE5hbWU6IG1ha2VFYWNoVGVzdE5hbWUodGVzdE5hbWUsIHRlc3RLZXkpLFxuICAgICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICAgIHRvZG86IHRydWUsXG4gICAgICAgIHdpdGhEYXRhOiB0cnVlLFxuICAgICAgICBzdGFja09mZnNldDogNSxcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIHRlc3Quc2tpcC5lYWNoID0gZnVuY3Rpb24gKHRlc3ROYW1lLCBkYXRhc2V0KSB7XG4gICAgcnVuRWFjaChkYXRhc2V0LCBmdW5jdGlvbiAoXywgdGVzdEtleSkge1xuICAgICAgYWRkVGVzdCh7XG4gICAgICAgIHRlc3ROYW1lOiBtYWtlRWFjaFRlc3ROYW1lKHRlc3ROYW1lLCB0ZXN0S2V5KSxcbiAgICAgICAgc3RhY2tPZmZzZXQ6IDUsXG4gICAgICAgIHNraXA6IHRydWVcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICB0ZXN0LmlmLmVhY2ggPSBmdW5jdGlvbiAodGVzdE5hbWUsIGNvbmRpdGlvbiwgZGF0YXNldCwgY2FsbGJhY2spIHtcbiAgICBydW5FYWNoKGRhdGFzZXQsIGZ1bmN0aW9uIChkYXRhLCB0ZXN0S2V5KSB7XG4gICAgICBhZGRUZXN0KHtcbiAgICAgICAgdGVzdE5hbWU6IG1ha2VFYWNoVGVzdE5hbWUodGVzdE5hbWUsIHRlc3RLZXkpLFxuICAgICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICAgIHdpdGhEYXRhOiB0cnVlLFxuICAgICAgICBzdGFja09mZnNldDogNSxcbiAgICAgICAgc2tpcDogIWNvbmRpdGlvbixcbiAgICAgICAgZGF0YTogY29uZGl0aW9uID8gZGF0YSA6IHVuZGVmaW5lZFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIHRlc3Qub25seS5lYWNoID0gZnVuY3Rpb24gKHRlc3ROYW1lLCBkYXRhc2V0LCBjYWxsYmFjaykge1xuICAgIHJ1bkVhY2goZGF0YXNldCwgZnVuY3Rpb24gKGRhdGEsIHRlc3RLZXkpIHtcbiAgICAgIGFkZE9ubHlUZXN0KHtcbiAgICAgICAgdGVzdE5hbWU6IG1ha2VFYWNoVGVzdE5hbWUodGVzdE5hbWUsIHRlc3RLZXkpLFxuICAgICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICAgIHdpdGhEYXRhOiB0cnVlLFxuICAgICAgICBzdGFja09mZnNldDogNSxcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gRm9yY2VmdWxseSByZWxlYXNlIGFsbCBwcm9jZXNzaW5nIGhvbGRzLlxuICBmdW5jdGlvbiBpbnRlcm5hbFJlY292ZXIodGVzdCkge1xuICAgIHRlc3QucGF1c2VzLmZvckVhY2goZnVuY3Rpb24gKHBhdXNlKSB7XG4gICAgICBwYXVzZS5jYW5jZWxsZWQgPSB0cnVlO1xuICAgIH0pO1xuICAgIHRlc3QucGF1c2VzLmNsZWFyKCk7XG4gICAgaW50ZXJuYWxTdGFydCh0ZXN0KTtcbiAgfVxuXG4gIC8vIFJlbGVhc2UgYSBwcm9jZXNzaW5nIGhvbGQsIHNjaGVkdWxpbmcgYSByZXN1bXB0aW9uIGF0dGVtcHQgaWYgbm8gaG9sZHMgcmVtYWluLlxuICBmdW5jdGlvbiBpbnRlcm5hbFN0YXJ0KHRlc3QpIHtcbiAgICAvLyBJZ25vcmUgaWYgb3RoZXIgYXN5bmMgcGF1c2VzIHN0aWxsIGV4aXN0LlxuICAgIGlmICh0ZXN0LnBhdXNlcy5zaXplID4gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEFkZCBhIHNsaWdodCBkZWxheSB0byBhbGxvdyBtb3JlIGFzc2VydGlvbnMgZXRjLlxuICAgIGlmIChzZXRUaW1lb3V0JDEpIHtcbiAgICAgIGNsZWFyVGltZW91dChjb25maWcudGltZW91dCk7XG4gICAgICBjb25maWcudGltZW91dCA9IHNldFRpbWVvdXQkMShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0ZXN0LnBhdXNlcy5zaXplID4gMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjbGVhclRpbWVvdXQoY29uZmlnLnRpbWVvdXQpO1xuICAgICAgICBjb25maWcudGltZW91dCA9IG51bGw7XG4gICAgICAgIGNvbmZpZy5ibG9ja2luZyA9IGZhbHNlO1xuICAgICAgICBjb25maWcucHEuYWR2YW5jZSgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpZy5ibG9ja2luZyA9IGZhbHNlO1xuICAgICAgY29uZmlnLnBxLmFkdmFuY2UoKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gY29sbGVjdFRlc3RzKG1vZHVsZSkge1xuICAgIHZhciB0ZXN0cyA9IFtdLmNvbmNhdChtb2R1bGUudGVzdHMpO1xuICAgIHZhciBtb2R1bGVzID0gX3RvQ29uc3VtYWJsZUFycmF5KG1vZHVsZS5jaGlsZE1vZHVsZXMpO1xuXG4gICAgLy8gRG8gYSBicmVhZHRoLWZpcnN0IHRyYXZlcnNhbCBvZiB0aGUgY2hpbGQgbW9kdWxlc1xuICAgIHdoaWxlIChtb2R1bGVzLmxlbmd0aCkge1xuICAgICAgdmFyIG5leHRNb2R1bGUgPSBtb2R1bGVzLnNoaWZ0KCk7XG4gICAgICB0ZXN0cy5wdXNoLmFwcGx5KHRlc3RzLCBuZXh0TW9kdWxlLnRlc3RzKTtcbiAgICAgIG1vZHVsZXMucHVzaC5hcHBseShtb2R1bGVzLCBfdG9Db25zdW1hYmxlQXJyYXkobmV4dE1vZHVsZS5jaGlsZE1vZHVsZXMpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRlc3RzO1xuICB9XG5cbiAgLy8gVGhpcyByZXR1cm5zIHRydWUgYWZ0ZXIgYWxsIGV4ZWN1dGFibGUgYW5kIHNraXBwYWJsZSB0ZXN0c1xuICAvLyBpbiBhIG1vZHVsZSBoYXZlIGJlZW4gcHJvY2Nlc3NlZCwgYW5kIGluZm9ybXMgJ3N1aXRlRW5kJ1xuICAvLyBhbmQgbW9kdWxlRG9uZSgpLlxuICBmdW5jdGlvbiBhbGxUZXN0c0V4ZWN1dGVkKG1vZHVsZSkge1xuICAgIHJldHVybiBtb2R1bGUudGVzdHNSdW4gKyBtb2R1bGUudGVzdHNJZ25vcmVkID09PSBjb2xsZWN0VGVzdHMobW9kdWxlKS5sZW5ndGg7XG4gIH1cblxuICAvLyBUaGlzIHJldHVybnMgdHJ1ZSBkdXJpbmcgdGhlIGxhc3QgZXhlY3V0YWJsZSBub24tc2tpcHBlZCB0ZXN0XG4gIC8vIHdpdGhpbiBhIG1vZHVsZSwgYW5kIGluZm9ybXMgdGhlIHJ1bm5pbmcgb2YgdGhlICdhZnRlcicgaG9va1xuICAvLyBmb3IgYSBnaXZlbiBtb2R1bGUuIFRoaXMgcnVucyBvbmx5IG9uY2UgZm9yIGEgZ2l2ZW4gbW9kdWxlLFxuICAvLyBidXQgbXVzdCBydW4gZHVyaW5nIHRoZSBsYXN0IG5vbi1za2lwcGVkIHRlc3QuIFdoZW4gaXQgcnVucyxcbiAgLy8gdGhlcmUgbWF5IGJlIG5vbi16ZXJvIHNraXBwZWQgdGVzdHMgbGVmdC5cbiAgZnVuY3Rpb24gbGFzdFRlc3RXaXRoaW5Nb2R1bGVFeGVjdXRlZChtb2R1bGUpIHtcbiAgICByZXR1cm4gbW9kdWxlLnRlc3RzUnVuID09PSBjb2xsZWN0VGVzdHMobW9kdWxlKS5maWx0ZXIoZnVuY3Rpb24gKHRlc3QpIHtcbiAgICAgIHJldHVybiAhdGVzdC5za2lwO1xuICAgIH0pLmxlbmd0aCAtIDE7XG4gIH1cbiAgZnVuY3Rpb24gaW5jcmVtZW50VGVzdHNSdW4obW9kdWxlKSB7XG4gICAgbW9kdWxlLnRlc3RzUnVuKys7XG4gICAgd2hpbGUgKG1vZHVsZSA9IG1vZHVsZS5wYXJlbnRNb2R1bGUpIHtcbiAgICAgIG1vZHVsZS50ZXN0c1J1bisrO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBpbmNyZW1lbnRUZXN0c0lnbm9yZWQobW9kdWxlKSB7XG4gICAgbW9kdWxlLnRlc3RzSWdub3JlZCsrO1xuICAgIHdoaWxlIChtb2R1bGUgPSBtb2R1bGUucGFyZW50TW9kdWxlKSB7XG4gICAgICBtb2R1bGUudGVzdHNJZ25vcmVkKys7XG4gICAgfVxuICB9XG5cbiAgLyogZ2xvYmFsIG1vZHVsZSwgZXhwb3J0cywgZGVmaW5lICovXG4gIGZ1bmN0aW9uIGV4cG9ydFFVbml0KFFVbml0KSB7XG4gICAgdmFyIGV4cG9ydGVkTW9kdWxlID0gZmFsc2U7XG4gICAgaWYgKHdpbmRvdyQxICYmIGRvY3VtZW50KSB7XG4gICAgICAvLyBRVW5pdCBtYXkgYmUgZGVmaW5lZCB3aGVuIGl0IGlzIHByZWNvbmZpZ3VyZWQgYnV0IHRoZW4gb25seSBRVW5pdCBhbmQgUVVuaXQuY29uZmlnIG1heSBiZSBkZWZpbmVkLlxuICAgICAgaWYgKHdpbmRvdyQxLlFVbml0ICYmIHdpbmRvdyQxLlFVbml0LnZlcnNpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdRVW5pdCBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQuJyk7XG4gICAgICB9XG4gICAgICB3aW5kb3ckMS5RVW5pdCA9IFFVbml0O1xuICAgICAgZXhwb3J0ZWRNb2R1bGUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZvciBOb2RlLmpzXG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBRVW5pdDtcblxuICAgICAgLy8gRm9yIGNvbnNpc3RlbmN5IHdpdGggQ29tbW9uSlMgZW52aXJvbm1lbnRzJyBleHBvcnRzXG4gICAgICBtb2R1bGUuZXhwb3J0cy5RVW5pdCA9IFFVbml0O1xuICAgICAgZXhwb3J0ZWRNb2R1bGUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZvciBDb21tb25KUyB3aXRoIGV4cG9ydHMsIGJ1dCB3aXRob3V0IG1vZHVsZS5leHBvcnRzLCBsaWtlIFJoaW5vXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJyAmJiBleHBvcnRzKSB7XG4gICAgICBleHBvcnRzLlFVbml0ID0gUVVuaXQ7XG4gICAgICBleHBvcnRlZE1vZHVsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gRm9yIEFNRFxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgIGRlZmluZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBRVW5pdDtcbiAgICAgIH0pO1xuICAgICAgUVVuaXQuY29uZmlnLmF1dG9zdGFydCA9IGZhbHNlO1xuICAgICAgZXhwb3J0ZWRNb2R1bGUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZvciBvdGhlciBlbnZpcm9ubWVudHMsIGluY2x1ZGluZyBXZWIgV29ya2VycyAoZ2xvYmFsVGhpcyA9PT0gc2VsZiksXG4gICAgLy8gU3BpZGVyTW9ua2V5IChtb3pqcyksIGFuZCBvdGhlciBlbWJlZGRlZCBKYXZhU2NyaXB0IGVuZ2luZXNcbiAgICBpZiAoIWV4cG9ydGVkTW9kdWxlKSB7XG4gICAgICBnLlFVbml0ID0gUVVuaXQ7XG4gICAgfVxuICB9XG5cbiAgdmFyIENvbnNvbGVSZXBvcnRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29uc29sZVJlcG9ydGVyKHJ1bm5lcikge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnNvbGVSZXBvcnRlcik7XG4gICAgICAvLyBDYWNoZSByZWZlcmVuY2VzIHRvIGNvbnNvbGUgbWV0aG9kcyB0byBlbnN1cmUgd2UgY2FuIHJlcG9ydCBmYWlsdXJlc1xuICAgICAgLy8gZnJvbSB0ZXN0cyB0ZXN0cyB0aGF0IG1vY2sgdGhlIGNvbnNvbGUgb2JqZWN0IGl0c2VsZi5cbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9xdW5pdGpzL3F1bml0L2lzc3Vlcy8xMzQwXG4gICAgICAvLyBTdXBwb3J0IElFIDk6IEZ1bmN0aW9uI2JpbmQgaXMgc3VwcG9ydGVkLCBidXQgbm8gY29uc29sZS5sb2cuYmluZCgpLlxuICAgICAgdGhpcy5sb2cgPSBvcHRpb25zLmxvZyB8fCBGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKGNvbnNvbGUkMS5sb2csIGNvbnNvbGUkMSk7XG4gICAgICBydW5uZXIub24oJ2Vycm9yJywgdGhpcy5vbkVycm9yLmJpbmQodGhpcykpO1xuICAgICAgcnVubmVyLm9uKCdydW5TdGFydCcsIHRoaXMub25SdW5TdGFydC5iaW5kKHRoaXMpKTtcbiAgICAgIHJ1bm5lci5vbigndGVzdFN0YXJ0JywgdGhpcy5vblRlc3RTdGFydC5iaW5kKHRoaXMpKTtcbiAgICAgIHJ1bm5lci5vbigndGVzdEVuZCcsIHRoaXMub25UZXN0RW5kLmJpbmQodGhpcykpO1xuICAgICAgcnVubmVyLm9uKCdydW5FbmQnLCB0aGlzLm9uUnVuRW5kLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICByZXR1cm4gX2NyZWF0ZUNsYXNzKENvbnNvbGVSZXBvcnRlciwgW3tcbiAgICAgIGtleTogXCJvbkVycm9yXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gb25FcnJvcihlcnJvcikge1xuICAgICAgICB0aGlzLmxvZygnZXJyb3InLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIm9uUnVuU3RhcnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvblJ1blN0YXJ0KHJ1blN0YXJ0KSB7XG4gICAgICAgIHRoaXMubG9nKCdydW5TdGFydCcsIHJ1blN0YXJ0KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwib25UZXN0U3RhcnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvblRlc3RTdGFydCh0ZXN0KSB7XG4gICAgICAgIHRoaXMubG9nKCd0ZXN0U3RhcnQnLCB0ZXN0KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwib25UZXN0RW5kXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gb25UZXN0RW5kKHRlc3QpIHtcbiAgICAgICAgdGhpcy5sb2coJ3Rlc3RFbmQnLCB0ZXN0KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwib25SdW5FbmRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvblJ1bkVuZChydW5FbmQpIHtcbiAgICAgICAgdGhpcy5sb2coJ3J1bkVuZCcsIHJ1bkVuZCk7XG4gICAgICB9XG4gICAgfV0sIFt7XG4gICAgICBrZXk6IFwiaW5pdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQocnVubmVyLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29uc29sZVJlcG9ydGVyKHJ1bm5lciwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfV0pO1xuICB9KCk7XG5cbiAgLy8gVE9ETzogQ29uc2lkZXIgdXNpbmcgZ2xvYmFsVGhpcyBpbnN0ZWFkIG9mIHdpbmRvdywgc28gdGhhdCB0aGUgcmVwb3J0ZXJcbiAgLy8gd29ya3MgZm9yIE5vZGUuanMgYXMgd2VsbC4gQXMgdGhpcyBjYW4gYWRkIG92ZXJoZWFkLCB3ZSBzaG91bGQgbWFrZVxuICAvLyB0aGlzIG9wdC1pbiBiZWZvcmUgd2UgZW5hYmxlIGl0IGZvciBDTEkuXG4gIC8vXG4gIC8vIFFVbml0IDMgd2lsbCBzd2l0Y2ggZnJvbSBgd2luZG93YCB0byBgZ2xvYmFsVGhpc2AgYW5kIHRoZW4gbWFrZSBpdFxuICAvLyBubyBsb25nZXIgYW4gaW1wbGljaXQgZmVhdHVyZSBvZiB0aGUgSFRNTCBSZXBvcnRlciwgYnV0IHJhdGhlciBsZXRcbiAgLy8gaXQgYmUgb3B0LWluIHZpYSBgUVVuaXQuY29uZmlnLnJlcG9ydGVycyA9IFsncGVyZiddYCBvciBzb21ldGhpbmdcbiAgLy8gbGlrZSB0aGF0LlxuICB2YXIgbmF0aXZlUGVyZiA9IHdpbmRvdyQxICYmIHR5cGVvZiB3aW5kb3ckMS5wZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBhdC9jb21wYXQgLS0gQ2hlY2tlZFxuICB0eXBlb2Ygd2luZG93JDEucGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGF0L2NvbXBhdCAtLSBDaGVja2VkXG4gIHR5cGVvZiB3aW5kb3ckMS5wZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nID8gd2luZG93JDEucGVyZm9ybWFuY2UgOiB1bmRlZmluZWQ7XG4gIHZhciBwZXJmID0ge1xuICAgIG1lYXN1cmU6IG5hdGl2ZVBlcmYgPyBmdW5jdGlvbiAoY29tbWVudCwgc3RhcnRNYXJrLCBlbmRNYXJrKSB7XG4gICAgICAvLyBgcGVyZm9ybWFuY2UubWVhc3VyZWAgbWF5IGZhaWwgaWYgdGhlIG1hcmsgY291bGQgbm90IGJlIGZvdW5kLlxuICAgICAgLy8gcmVhc29ucyBhIHNwZWNpZmljIG1hcmsgY291bGQgbm90IGJlIGZvdW5kIGluY2x1ZGU6IG91dHNpZGUgY29kZSBpbnZva2luZyBgcGVyZm9ybWFuY2UuY2xlYXJNYXJrcygpYFxuICAgICAgdHJ5IHtcbiAgICAgICAgbmF0aXZlUGVyZi5tZWFzdXJlKGNvbW1lbnQsIHN0YXJ0TWFyaywgZW5kTWFyayk7XG4gICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICBMb2dnZXIud2FybigncGVyZm9ybWFuY2UubWVhc3VyZSBjb3VsZCBub3QgYmUgZXhlY3V0ZWQgYmVjYXVzZSBvZiAnLCBleC5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9IDogZnVuY3Rpb24gKCkge30sXG4gICAgbWFyazogbmF0aXZlUGVyZiA/IG5hdGl2ZVBlcmYubWFyay5iaW5kKG5hdGl2ZVBlcmYpIDogZnVuY3Rpb24gKCkge31cbiAgfTtcbiAgdmFyIFBlcmZSZXBvcnRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUGVyZlJlcG9ydGVyKHJ1bm5lcikge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBlcmZSZXBvcnRlcik7XG4gICAgICB0aGlzLnBlcmYgPSBvcHRpb25zLnBlcmYgfHwgcGVyZjtcbiAgICAgIHJ1bm5lci5vbigncnVuU3RhcnQnLCB0aGlzLm9uUnVuU3RhcnQuYmluZCh0aGlzKSk7XG4gICAgICBydW5uZXIub24oJ3J1bkVuZCcsIHRoaXMub25SdW5FbmQuYmluZCh0aGlzKSk7XG4gICAgICBydW5uZXIub24oJ3N1aXRlU3RhcnQnLCB0aGlzLm9uU3VpdGVTdGFydC5iaW5kKHRoaXMpKTtcbiAgICAgIHJ1bm5lci5vbignc3VpdGVFbmQnLCB0aGlzLm9uU3VpdGVFbmQuYmluZCh0aGlzKSk7XG4gICAgICBydW5uZXIub24oJ3Rlc3RTdGFydCcsIHRoaXMub25UZXN0U3RhcnQuYmluZCh0aGlzKSk7XG4gICAgICBydW5uZXIub24oJ3Rlc3RFbmQnLCB0aGlzLm9uVGVzdEVuZC5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgcmV0dXJuIF9jcmVhdGVDbGFzcyhQZXJmUmVwb3J0ZXIsIFt7XG4gICAgICBrZXk6IFwib25SdW5TdGFydFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uUnVuU3RhcnQoKSB7XG4gICAgICAgIHRoaXMucGVyZi5tYXJrKCdxdW5pdF9zdWl0ZV8wX3N0YXJ0Jyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIm9uU3VpdGVTdGFydFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uU3VpdGVTdGFydChzdWl0ZVN0YXJ0KSB7XG4gICAgICAgIHZhciBzdWl0ZUxldmVsID0gc3VpdGVTdGFydC5mdWxsTmFtZS5sZW5ndGg7XG4gICAgICAgIHRoaXMucGVyZi5tYXJrKFwicXVuaXRfc3VpdGVfXCIuY29uY2F0KHN1aXRlTGV2ZWwsIFwiX3N0YXJ0XCIpKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwib25TdWl0ZUVuZFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uU3VpdGVFbmQoc3VpdGVFbmQpIHtcbiAgICAgICAgdmFyIHN1aXRlTGV2ZWwgPSBzdWl0ZUVuZC5mdWxsTmFtZS5sZW5ndGg7XG4gICAgICAgIHZhciBzdWl0ZU5hbWUgPSBzdWl0ZUVuZC5mdWxsTmFtZS5qb2luKCcgXHUyMDEzICcpO1xuICAgICAgICB0aGlzLnBlcmYubWFyayhcInF1bml0X3N1aXRlX1wiLmNvbmNhdChzdWl0ZUxldmVsLCBcIl9lbmRcIikpO1xuICAgICAgICB0aGlzLnBlcmYubWVhc3VyZShcIlFVbml0IFRlc3QgU3VpdGU6IFwiLmNvbmNhdChzdWl0ZU5hbWUpLCBcInF1bml0X3N1aXRlX1wiLmNvbmNhdChzdWl0ZUxldmVsLCBcIl9zdGFydFwiKSwgXCJxdW5pdF9zdWl0ZV9cIi5jb25jYXQoc3VpdGVMZXZlbCwgXCJfZW5kXCIpKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwib25UZXN0U3RhcnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvblRlc3RTdGFydCgpIHtcbiAgICAgICAgdGhpcy5wZXJmLm1hcmsoJ3F1bml0X3Rlc3Rfc3RhcnQnKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwib25UZXN0RW5kXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gb25UZXN0RW5kKHRlc3RFbmQpIHtcbiAgICAgICAgdGhpcy5wZXJmLm1hcmsoJ3F1bml0X3Rlc3RfZW5kJyk7XG4gICAgICAgIHZhciB0ZXN0TmFtZSA9IHRlc3RFbmQuZnVsbE5hbWUuam9pbignIFx1MjAxMyAnKTtcbiAgICAgICAgdGhpcy5wZXJmLm1lYXN1cmUoXCJRVW5pdCBUZXN0OiBcIi5jb25jYXQodGVzdE5hbWUpLCAncXVuaXRfdGVzdF9zdGFydCcsICdxdW5pdF90ZXN0X2VuZCcpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJvblJ1bkVuZFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uUnVuRW5kKCkge1xuICAgICAgICB0aGlzLnBlcmYubWFyaygncXVuaXRfc3VpdGVfMF9lbmQnKTtcbiAgICAgICAgdGhpcy5wZXJmLm1lYXN1cmUoJ1FVbml0IFRlc3QgUnVuJywgJ3F1bml0X3N1aXRlXzBfc3RhcnQnLCAncXVuaXRfc3VpdGVfMF9lbmQnKTtcbiAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgIGtleTogXCJpbml0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdChydW5uZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQZXJmUmVwb3J0ZXIocnVubmVyLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XSk7XG4gIH0oKTtcblxuICB2YXIgRk9SQ0VfQ09MT1IsXG4gICAgTk9ERV9ESVNBQkxFX0NPTE9SUyxcbiAgICBOT19DT0xPUixcbiAgICBURVJNLFxuICAgIGlzVFRZID0gdHJ1ZTtcbiAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBfcmVmID0gcHJvY2Vzcy5lbnYgfHwge307XG4gICAgRk9SQ0VfQ09MT1IgPSBfcmVmLkZPUkNFX0NPTE9SO1xuICAgIE5PREVfRElTQUJMRV9DT0xPUlMgPSBfcmVmLk5PREVfRElTQUJMRV9DT0xPUlM7XG4gICAgTk9fQ09MT1IgPSBfcmVmLk5PX0NPTE9SO1xuICAgIFRFUk0gPSBfcmVmLlRFUk07XG4gICAgaXNUVFkgPSBwcm9jZXNzLnN0ZG91dCAmJiBwcm9jZXNzLnN0ZG91dC5pc1RUWTtcbiAgfVxuICB2YXIgJCA9IHtcbiAgICBlbmFibGVkOiAhTk9ERV9ESVNBQkxFX0NPTE9SUyAmJiBOT19DT0xPUiA9PSBudWxsICYmIFRFUk0gIT09ICdkdW1iJyAmJiAoRk9SQ0VfQ09MT1IgIT0gbnVsbCAmJiBGT1JDRV9DT0xPUiAhPT0gJzAnIHx8IGlzVFRZKSxcbiAgICAvLyBtb2RpZmllcnNcbiAgICByZXNldDogaW5pdCgwLCAwKSxcbiAgICBib2xkOiBpbml0KDEsIDIyKSxcbiAgICBkaW06IGluaXQoMiwgMjIpLFxuICAgIGl0YWxpYzogaW5pdCgzLCAyMyksXG4gICAgdW5kZXJsaW5lOiBpbml0KDQsIDI0KSxcbiAgICBpbnZlcnNlOiBpbml0KDcsIDI3KSxcbiAgICBoaWRkZW46IGluaXQoOCwgMjgpLFxuICAgIHN0cmlrZXRocm91Z2g6IGluaXQoOSwgMjkpLFxuICAgIC8vIGNvbG9yc1xuICAgIGJsYWNrOiBpbml0KDMwLCAzOSksXG4gICAgcmVkOiBpbml0KDMxLCAzOSksXG4gICAgZ3JlZW46IGluaXQoMzIsIDM5KSxcbiAgICB5ZWxsb3c6IGluaXQoMzMsIDM5KSxcbiAgICBibHVlOiBpbml0KDM0LCAzOSksXG4gICAgbWFnZW50YTogaW5pdCgzNSwgMzkpLFxuICAgIGN5YW46IGluaXQoMzYsIDM5KSxcbiAgICB3aGl0ZTogaW5pdCgzNywgMzkpLFxuICAgIGdyYXk6IGluaXQoOTAsIDM5KSxcbiAgICBncmV5OiBpbml0KDkwLCAzOSksXG4gICAgLy8gYmFja2dyb3VuZCBjb2xvcnNcbiAgICBiZ0JsYWNrOiBpbml0KDQwLCA0OSksXG4gICAgYmdSZWQ6IGluaXQoNDEsIDQ5KSxcbiAgICBiZ0dyZWVuOiBpbml0KDQyLCA0OSksXG4gICAgYmdZZWxsb3c6IGluaXQoNDMsIDQ5KSxcbiAgICBiZ0JsdWU6IGluaXQoNDQsIDQ5KSxcbiAgICBiZ01hZ2VudGE6IGluaXQoNDUsIDQ5KSxcbiAgICBiZ0N5YW46IGluaXQoNDYsIDQ5KSxcbiAgICBiZ1doaXRlOiBpbml0KDQ3LCA0OSlcbiAgfTtcbiAgZnVuY3Rpb24gcnVuKGFyciwgc3RyKSB7XG4gICAgdmFyIGkgPSAwLFxuICAgICAgdG1wLFxuICAgICAgYmVnID0gJycsXG4gICAgICBlbmQgPSAnJztcbiAgICBmb3IgKDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgdG1wID0gYXJyW2ldO1xuICAgICAgYmVnICs9IHRtcC5vcGVuO1xuICAgICAgZW5kICs9IHRtcC5jbG9zZTtcbiAgICAgIGlmICghIX5zdHIuaW5kZXhPZih0bXAuY2xvc2UpKSB7XG4gICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKHRtcC5yZ3gsIHRtcC5jbG9zZSArIHRtcC5vcGVuKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJlZyArIHN0ciArIGVuZDtcbiAgfVxuICBmdW5jdGlvbiBjaGFpbihoYXMsIGtleXMpIHtcbiAgICB2YXIgY3R4ID0ge1xuICAgICAgaGFzOiBoYXMsXG4gICAgICBrZXlzOiBrZXlzXG4gICAgfTtcbiAgICBjdHgucmVzZXQgPSAkLnJlc2V0LmJpbmQoY3R4KTtcbiAgICBjdHguYm9sZCA9ICQuYm9sZC5iaW5kKGN0eCk7XG4gICAgY3R4LmRpbSA9ICQuZGltLmJpbmQoY3R4KTtcbiAgICBjdHguaXRhbGljID0gJC5pdGFsaWMuYmluZChjdHgpO1xuICAgIGN0eC51bmRlcmxpbmUgPSAkLnVuZGVybGluZS5iaW5kKGN0eCk7XG4gICAgY3R4LmludmVyc2UgPSAkLmludmVyc2UuYmluZChjdHgpO1xuICAgIGN0eC5oaWRkZW4gPSAkLmhpZGRlbi5iaW5kKGN0eCk7XG4gICAgY3R4LnN0cmlrZXRocm91Z2ggPSAkLnN0cmlrZXRocm91Z2guYmluZChjdHgpO1xuICAgIGN0eC5ibGFjayA9ICQuYmxhY2suYmluZChjdHgpO1xuICAgIGN0eC5yZWQgPSAkLnJlZC5iaW5kKGN0eCk7XG4gICAgY3R4LmdyZWVuID0gJC5ncmVlbi5iaW5kKGN0eCk7XG4gICAgY3R4LnllbGxvdyA9ICQueWVsbG93LmJpbmQoY3R4KTtcbiAgICBjdHguYmx1ZSA9ICQuYmx1ZS5iaW5kKGN0eCk7XG4gICAgY3R4Lm1hZ2VudGEgPSAkLm1hZ2VudGEuYmluZChjdHgpO1xuICAgIGN0eC5jeWFuID0gJC5jeWFuLmJpbmQoY3R4KTtcbiAgICBjdHgud2hpdGUgPSAkLndoaXRlLmJpbmQoY3R4KTtcbiAgICBjdHguZ3JheSA9ICQuZ3JheS5iaW5kKGN0eCk7XG4gICAgY3R4LmdyZXkgPSAkLmdyZXkuYmluZChjdHgpO1xuICAgIGN0eC5iZ0JsYWNrID0gJC5iZ0JsYWNrLmJpbmQoY3R4KTtcbiAgICBjdHguYmdSZWQgPSAkLmJnUmVkLmJpbmQoY3R4KTtcbiAgICBjdHguYmdHcmVlbiA9ICQuYmdHcmVlbi5iaW5kKGN0eCk7XG4gICAgY3R4LmJnWWVsbG93ID0gJC5iZ1llbGxvdy5iaW5kKGN0eCk7XG4gICAgY3R4LmJnQmx1ZSA9ICQuYmdCbHVlLmJpbmQoY3R4KTtcbiAgICBjdHguYmdNYWdlbnRhID0gJC5iZ01hZ2VudGEuYmluZChjdHgpO1xuICAgIGN0eC5iZ0N5YW4gPSAkLmJnQ3lhbi5iaW5kKGN0eCk7XG4gICAgY3R4LmJnV2hpdGUgPSAkLmJnV2hpdGUuYmluZChjdHgpO1xuICAgIHJldHVybiBjdHg7XG4gIH1cbiAgZnVuY3Rpb24gaW5pdChvcGVuLCBjbG9zZSkge1xuICAgIHZhciBibGsgPSB7XG4gICAgICBvcGVuOiBcIlxceDFCW1wiLmNvbmNhdChvcGVuLCBcIm1cIiksXG4gICAgICBjbG9zZTogXCJcXHgxQltcIi5jb25jYXQoY2xvc2UsIFwibVwiKSxcbiAgICAgIHJneDogbmV3IFJlZ0V4cChcIlxcXFx4MWJcXFxcW1wiLmNvbmNhdChjbG9zZSwgXCJtXCIpLCAnZycpXG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHR4dCkge1xuICAgICAgaWYgKHRoaXMgIT09IHZvaWQgMCAmJiB0aGlzLmhhcyAhPT0gdm9pZCAwKSB7XG4gICAgICAgICEhfnRoaXMuaGFzLmluZGV4T2Yob3BlbikgfHwgKHRoaXMuaGFzLnB1c2gob3BlbiksIHRoaXMua2V5cy5wdXNoKGJsaykpO1xuICAgICAgICByZXR1cm4gdHh0ID09PSB2b2lkIDAgPyB0aGlzIDogJC5lbmFibGVkID8gcnVuKHRoaXMua2V5cywgdHh0ICsgJycpIDogdHh0ICsgJyc7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHh0ID09PSB2b2lkIDAgPyBjaGFpbihbb3Blbl0sIFtibGtdKSA6ICQuZW5hYmxlZCA/IHJ1bihbYmxrXSwgdHh0ICsgJycpIDogdHh0ICsgJyc7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtYXQgYSBnaXZlbiB2YWx1ZSBpbnRvIFlBTUwuXG4gICAqXG4gICAqIFlBTUwgaXMgYSBzdXBlcnNldCBvZiBKU09OIHRoYXQgc3VwcG9ydHMgYWxsIHRoZSBzYW1lIGRhdGFcbiAgICogdHlwZXMgYW5kIHN5bnRheCwgYW5kIG1vcmUuIEFzIHN1Y2gsIGl0IGlzIGFsd2F5cyBwb3NzaWJsZVxuICAgKiB0byBmYWxsYmFjayB0byBKU09OLnN0cmluZ2ZpZnksIGJ1dCB3ZSBnZW5lcmFsbHkgYXZvaWRcbiAgICogdGhhdCB0byBtYWtlIG91dHB1dCBlYXNpZXIgdG8gcmVhZCBmb3IgaHVtYW5zLlxuICAgKlxuICAgKiBTdXBwb3J0ZWQgZGF0YSB0eXBlczpcbiAgICpcbiAgICogLSBudWxsXG4gICAqIC0gYm9vbGVhblxuICAgKiAtIG51bWJlclxuICAgKiAtIHN0cmluZ1xuICAgKiAtIGFycmF5XG4gICAqIC0gb2JqZWN0XG4gICAqXG4gICAqIEFueXRoaW5nIGVsc2UgKGluY2x1ZGluZyBOYU4sIEluZmluaXR5LCBhbmQgdW5kZWZpbmVkKVxuICAgKiBtdXN0IGJlIGRlc2NyaWJlZCBpbiBzdHJpbmdzLCBmb3IgZGlzcGxheSBwdXJwb3Nlcy5cbiAgICpcbiAgICogTm90ZSB0aGF0IHF1b3RlcyBhcmUgb3B0aW9uYWwgaW4gWUFNTCBzdHJpbmdzIGlmIHRoZVxuICAgKiBzdHJpbmdzIGFyZSBcInNpbXBsZVwiLCBhbmQgYXMgc3VjaCB3ZSBnZW5lcmFsbHkgcHJlZmVyXG4gICAqIHRoYXQgZm9yIGltcHJvdmVkIHJlYWRhYmlsaXR5LiBXZSBvdXRwdXQgc3RyaW5ncyBpblxuICAgKiBvbmUgb2YgdGhyZWUgd2F5czpcbiAgICpcbiAgICogLSBiYXJlIHVucXVvdGVkIHRleHQsIGZvciBzaW1wbGUgb25lLWxpbmUgc3RyaW5ncy5cbiAgICogLSBKU09OIChxdW90ZWQgdGV4dCksIGZvciBjb21wbGV4IG9uZS1saW5lIHN0cmluZ3MuXG4gICAqIC0gWUFNTCBCbG9jaywgZm9yIGNvbXBsZXggbXVsdGktbGluZSBzdHJpbmdzLlxuICAgKlxuICAgKiBPYmplY3RzIHdpdGggY3ljbGljYWwgcmVmZXJlbmNlcyB3aWxsIGJlIHN0cmluZ2lmZWQgYXNcbiAgICogXCJbQ2lyY3VsYXJdXCIgYXMgdGhleSBjYW5ub3Qgb3RoZXJ3aXNlIGJlIHJlcHJlc2VudGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gcHJldHR5WWFtbFZhbHVlKHZhbHVlKSB7XG4gICAgdmFyIGluZGVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMjtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gTm90IHN1cHBvcnRlZCBpbiBKU09OL1lBTUwsIHR1cm4gaW50byBzdHJpbmdcbiAgICAgIC8vIGFuZCBsZXQgdGhlIGJlbG93IG91dHB1dCBpdCBhcyBiYXJlIHN0cmluZy5cbiAgICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBTdXBwb3J0IElFIDktMTE6IFVzZSBpc0Zpbml0ZSBpbnN0ZWFkIG9mIEVTNiBOdW1iZXIuaXNGaW5pdGVcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiAhaXNGaW5pdGUodmFsdWUpKSB7XG4gICAgICAvLyBUdXJuIE5hTiBhbmQgSW5maW5pdHkgaW50byBzaW1wbGUgc3RyaW5ncy5cbiAgICAgIC8vIFBhcmFub2lhOiBEb24ndCByZXR1cm4gZGlyZWN0bHkganVzdCBpbiBjYXNlIHRoZXJlJ3NcbiAgICAgIC8vIGEgd2F5IHRvIGFkZCBzcGVjaWFsIGNoYXJhY3RlcnMgaGVyZS5cbiAgICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIC8vIFNpbXBsZSBudW1iZXJzXG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gSWYgYW55IG9mIHRoZXNlIG1hdGNoLCB0aGVuIHdlIGNhbid0IG91dHB1dCBpdFxuICAgICAgLy8gYXMgYmFyZSB1bnF1b3RlZCB0ZXh0LCBiZWNhdXNlIHRoYXQgd291bGQgZWl0aGVyXG4gICAgICAvLyBjYXVzZSBkYXRhIGxvc3Mgb3IgaW52YWxpZCBZQU1MIHN5bnRheC5cbiAgICAgIC8vXG4gICAgICAvLyAtIFF1b3RlcywgZXNjYXBlcywgbGluZSBicmVha3MsIG9yIEpTT04tbGlrZSBzdHVmZi5cbiAgICAgIC8vIC0gTm90IGFsbG93ZWQgaW4gWUFNTCB1bnF1b3RlZCBzdHJpbmdzIHBlciBodHRwczovL3lhbWwub3JnL3NwZWMvMS4yLjIvIzczMy1wbGFpbi1zdHlsZVxuICAgICAgLy8gICAqIFwiOiBcIiAoY29sb24gZm9sbG93ZWQgYnkgc3BhY2UpXG4gICAgICAvLyAgICogXCIgI1wiIChzcGFjZSBmb2xsb3dlZCBieSBoYXNoKVxuICAgICAgdmFyIHJTcGVjaWFsSnNvbiA9IC9bJ1wiXFxcXC9be31cXF1cXHJcXG58OiNdLztcblxuICAgICAgLy8gLSBDaGFyYWN0ZXJzIHRoYXQgYXJlIHNwZWNpYWwgYXQgdGhlIHN0YXJ0IG9mIGEgWUFNTCB2YWx1ZVxuICAgICAgdmFyIHJTcGVjaWFsWWFtbCA9IC9bLT86LFtcXF17fSMmKiF8PT4nXCIlQGBdLztcblxuICAgICAgLy8gLSBMZWFkaW5nIG9yIHRyYWlsaW5nIHdoaXRlc3BhY2UuXG4gICAgICB2YXIgclVudHJpbW1lZCA9IC8oXlxcc3xcXHMkKS87XG5cbiAgICAgIC8vIC0gQW1iaWd1b3VzIGFzIFlBTUwgbnVtYmVyLCBlLmcuICcyJywgJy0xLjInLCAnLjInLCBvciAnMl8wMDAnXG4gICAgICB2YXIgck51bWVyaWNhbCA9IC9eW1xcZC5fLV0rJC87XG5cbiAgICAgIC8vIC0gQW1iaWd1b3VzIGFzIFlBTUwgYm9vbC5cbiAgICAgIC8vICAgVXNlIGNhc2UtaW5zZW5zaXRpdmUgbWF0Y2gsIGFsdGhvdWdoIHRlY2huaWNhbGx5IG9ubHlcbiAgICAgIC8vICAgZnVsbHktbG93ZXIsIGZ1bGx5LXVwcGVyLCBvciB1cHBlcmNhc2UtZmlyc3Qgd291bGQgYmUgYW1iaWd1b3VzLlxuICAgICAgLy8gICBlLmcuIHRydWUvVHJ1ZS9UUlVFLCBidXQgbm90IHRSVWUuXG4gICAgICB2YXIgckJvb2wgPSAvXih0cnVlfGZhbHNlfHl8bnx5ZXN8bm98b258b2ZmKSQvaTtcblxuICAgICAgLy8gSXMgdGhpcyBhIGNvbXBsZXggc3RyaW5nP1xuICAgICAgaWYgKHZhbHVlID09PSAnJyB8fCByU3BlY2lhbEpzb24udGVzdCh2YWx1ZSkgfHwgclNwZWNpYWxZYW1sLnRlc3QodmFsdWVbMF0pIHx8IHJVbnRyaW1tZWQudGVzdCh2YWx1ZSkgfHwgck51bWVyaWNhbC50ZXN0KHZhbHVlKSB8fCByQm9vbC50ZXN0KHZhbHVlKSkge1xuICAgICAgICBpZiAoIS9cXG4vLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgLy8gQ29tcGxleCBvbmUtbGluZSBzdHJpbmcsIHVzZSBKU09OIChxdW90ZWQgc3RyaW5nKVxuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZWUgYWxzbyA8aHR0cHM6Ly95YW1sLW11bHRpbGluZS5pbmZvLz5cbiAgICAgICAgLy8gU3VwcG9ydCBJRSA5LTExOiBBdm9pZCBFUzYgU3RyaW5nI3JlcGVhdFxuICAgICAgICB2YXIgX3ByZWZpeCA9IG5ldyBBcnJheShpbmRlbnQgKiAyICsgMSkuam9pbignICcpO1xuICAgICAgICB2YXIgdHJhaWxpbmdMaW5lYnJlYWtNYXRjaCA9IHZhbHVlLm1hdGNoKC9cXG4rJC8pO1xuICAgICAgICB2YXIgdHJhaWxpbmdMaW5lYnJlYWtzID0gdHJhaWxpbmdMaW5lYnJlYWtNYXRjaCA/IHRyYWlsaW5nTGluZWJyZWFrTWF0Y2hbMF0ubGVuZ3RoIDogMDtcbiAgICAgICAgaWYgKHRyYWlsaW5nTGluZWJyZWFrcyA9PT0gMSkge1xuICAgICAgICAgIC8vIFVzZSB0aGUgbW9zdCBzdHJhaWdodC1mb3J3YXJkIFwiQmxvY2tcIiBzdHJpbmcgaW4gWUFNTFxuICAgICAgICAgIC8vIHdpdGhvdXQgYW55IFwiQ2hvbXBpbmdcIiBpbmRpY2F0b3JzLlxuICAgICAgICAgIHZhciBsaW5lcyA9IHZhbHVlXG5cbiAgICAgICAgICAvLyBJZ25vcmUgdGhlIGxhc3QgbmV3IGxpbmUsIHNpbmNlIHdlJ2xsIGdldCB0aGF0IG9uZSBmb3IgZnJlZVxuICAgICAgICAgIC8vIHdpdGggdGhlIHN0cmFpZ2h0LWZvcndhcmQgQmxvY2sgc3ludGF4LlxuICAgICAgICAgIC5yZXBsYWNlKC9cXG4kLywgJycpLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24gKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiBfcHJlZml4ICsgbGluZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gJ3xcXG4nICsgbGluZXMuam9pbignXFxuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gVGhpcyBoYXMgZWl0aGVyIG5vIHRyYWlsaW5nIG5ldyBsaW5lcywgb3IgbW9yZSB0aGFuIDEuXG4gICAgICAgICAgLy8gVXNlIHwrIHNvIHRoYXQgWUFNTCBwYXJzZXJzIHdpbGwgcHJlc2VydmUgaXQgZXhhY3RseS5cbiAgICAgICAgICB2YXIgX2xpbmVzID0gdmFsdWUuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbiAobGluZSkge1xuICAgICAgICAgICAgcmV0dXJuIF9wcmVmaXggKyBsaW5lO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiAnfCtcXG4nICsgX2xpbmVzLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTaW1wbGUgc3RyaW5nLCB1c2UgYmFyZSB1bnF1b3RlZCB0ZXh0XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHByZWZpeCA9IG5ldyBBcnJheShpbmRlbnQgKyAxKS5qb2luKCcgJyk7XG5cbiAgICAvLyBIYW5kbGUgbnVsbCwgYm9vbGVhbiwgYXJyYXksIGFuZCBvYmplY3RcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGVjeWNsZWRTaGFsbG93Q2xvbmUodmFsdWUpLCBudWxsLCAyKS5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uIChsaW5lLCBpKSB7XG4gICAgICByZXR1cm4gaSA9PT0gMCA/IGxpbmUgOiBwcmVmaXggKyBsaW5lO1xuICAgIH0pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBzaGFsbG93IGNsb25lIG9mIGFuIG9iamVjdCB3aGVyZSBjeWNsZXMgaGF2ZVxuICAgKiBiZWVuIHJlcGxhY2VkIHdpdGggXCJbQ2lyY3VsYXJdXCIuXG4gICAqL1xuICBmdW5jdGlvbiBkZWN5Y2xlZFNoYWxsb3dDbG9uZShvYmplY3QpIHtcbiAgICB2YXIgYW5jZXN0b3JzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBbXTtcbiAgICBpZiAoYW5jZXN0b3JzLmluZGV4T2Yob2JqZWN0KSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiAnW0NpcmN1bGFyXSc7XG4gICAgfVxuICAgIHZhciB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkucmVwbGFjZSgvXlxcWy4rXFxzKC4rPyldJC8sICckMScpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFyIGNsb25lO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICBhbmNlc3RvcnMucHVzaChvYmplY3QpO1xuICAgICAgICBjbG9uZSA9IG9iamVjdC5tYXAoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gZGVjeWNsZWRTaGFsbG93Q2xvbmUoZWxlbWVudCwgYW5jZXN0b3JzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGFuY2VzdG9ycy5wb3AoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBhbmNlc3RvcnMucHVzaChvYmplY3QpO1xuICAgICAgICBjbG9uZSA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhvYmplY3QpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIGNsb25lW2tleV0gPSBkZWN5Y2xlZFNoYWxsb3dDbG9uZShvYmplY3Rba2V5XSwgYW5jZXN0b3JzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGFuY2VzdG9ycy5wb3AoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjbG9uZSA9IG9iamVjdDtcbiAgICB9XG4gICAgcmV0dXJuIGNsb25lO1xuICB9XG4gIHZhciBUYXBSZXBvcnRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGFwUmVwb3J0ZXIocnVubmVyKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGFwUmVwb3J0ZXIpO1xuICAgICAgLy8gQ2FjaGUgcmVmZXJlbmNlcyB0byBjb25zb2xlIG1ldGhvZHMgdG8gZW5zdXJlIHdlIGNhbiByZXBvcnQgZmFpbHVyZXNcbiAgICAgIC8vIGZyb20gdGVzdHMgdGVzdHMgdGhhdCBtb2NrIHRoZSBjb25zb2xlIG9iamVjdCBpdHNlbGYuXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcXVuaXRqcy9xdW5pdC9pc3N1ZXMvMTM0MFxuICAgICAgLy8gU3VwcG9ydCBJRSA5OiBGdW5jdGlvbiNiaW5kIGlzIHN1cHBvcnRlZCwgYnV0IG5vIGNvbnNvbGUubG9nLmJpbmQoKS5cbiAgICAgIHRoaXMubG9nID0gb3B0aW9ucy5sb2cgfHwgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbChjb25zb2xlJDEubG9nLCBjb25zb2xlJDEpO1xuICAgICAgdGhpcy50ZXN0Q291bnQgPSAwO1xuICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmVuZGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmJhaWxlZCA9IGZhbHNlO1xuICAgICAgcnVubmVyLm9uKCdlcnJvcicsIHRoaXMub25FcnJvci5iaW5kKHRoaXMpKTtcbiAgICAgIHJ1bm5lci5vbigncnVuU3RhcnQnLCB0aGlzLm9uUnVuU3RhcnQuYmluZCh0aGlzKSk7XG4gICAgICBydW5uZXIub24oJ3Rlc3RFbmQnLCB0aGlzLm9uVGVzdEVuZC5iaW5kKHRoaXMpKTtcbiAgICAgIHJ1bm5lci5vbigncnVuRW5kJywgdGhpcy5vblJ1bkVuZC5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgcmV0dXJuIF9jcmVhdGVDbGFzcyhUYXBSZXBvcnRlciwgW3tcbiAgICAgIGtleTogXCJvblJ1blN0YXJ0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gb25SdW5TdGFydChfcnVuU3VpdGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgICB0aGlzLmxvZygnVEFQIHZlcnNpb24gMTMnKTtcbiAgICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIm9uRXJyb3JcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkVycm9yKGVycm9yKSB7XG4gICAgICAgIGlmICh0aGlzLmJhaWxlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJhaWxlZCA9IHRydWU7XG5cbiAgICAgICAgLy8gSW1pdGF0ZSBvblRlc3RFbmRcbiAgICAgICAgLy8gU2tpcCB0aGlzIGlmIHdlJ3JlIHBhc3QgXCJydW5FbmRcIiBhcyBpdCB3b3VsZCBsb29rIG9kZFxuICAgICAgICBpZiAoIXRoaXMuZW5kZWQpIHtcbiAgICAgICAgICB0aGlzLm9uUnVuU3RhcnQoKTtcbiAgICAgICAgICB0aGlzLnRlc3RDb3VudCA9IHRoaXMudGVzdENvdW50ICsgMTtcbiAgICAgICAgICB0aGlzLmxvZyhcIm5vdCBvayBcIi5jb25jYXQodGhpcy50ZXN0Q291bnQsIFwiIFwiKS5jb25jYXQoJC5yZWQoJ2dsb2JhbCBmYWlsdXJlJykpKTtcbiAgICAgICAgICB0aGlzLmxvZ0Vycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvZygnQmFpbCBvdXQhICcgKyBlcnJvclN0cmluZyhlcnJvcikuc3BsaXQoJ1xcbicpWzBdKTtcbiAgICAgICAgaWYgKHRoaXMuZW5kZWQpIHtcbiAgICAgICAgICB0aGlzLmxvZ0Vycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJvblRlc3RFbmRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvblRlc3RFbmQodGVzdCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnRlc3RDb3VudCA9IHRoaXMudGVzdENvdW50ICsgMTtcbiAgICAgICAgaWYgKHRlc3Quc3RhdHVzID09PSAncGFzc2VkJykge1xuICAgICAgICAgIHRoaXMubG9nKFwib2sgXCIuY29uY2F0KHRoaXMudGVzdENvdW50LCBcIiBcIikuY29uY2F0KHRlc3QuZnVsbE5hbWUuam9pbignID4gJykpKTtcbiAgICAgICAgfSBlbHNlIGlmICh0ZXN0LnN0YXR1cyA9PT0gJ3NraXBwZWQnKSB7XG4gICAgICAgICAgdGhpcy5sb2coXCJvayBcIi5jb25jYXQodGhpcy50ZXN0Q291bnQsIFwiIFwiKS5jb25jYXQoJC55ZWxsb3codGVzdC5mdWxsTmFtZS5qb2luKCcgPiAnKSksIFwiICMgU0tJUFwiKSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGVzdC5zdGF0dXMgPT09ICd0b2RvJykge1xuICAgICAgICAgIHRoaXMubG9nKFwibm90IG9rIFwiLmNvbmNhdCh0aGlzLnRlc3RDb3VudCwgXCIgXCIpLmNvbmNhdCgkLmN5YW4odGVzdC5mdWxsTmFtZS5qb2luKCcgPiAnKSksIFwiICMgVE9ET1wiKSk7XG4gICAgICAgICAgdGVzdC5lcnJvcnMuZm9yRWFjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5sb2dBc3NlcnRpb24oZXJyb3IsICd0b2RvJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5sb2coXCJub3Qgb2sgXCIuY29uY2F0KHRoaXMudGVzdENvdW50LCBcIiBcIikuY29uY2F0KCQucmVkKHRlc3QuZnVsbE5hbWUuam9pbignID4gJykpKSk7XG4gICAgICAgICAgdGVzdC5lcnJvcnMuZm9yRWFjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5sb2dBc3NlcnRpb24oZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIm9uUnVuRW5kXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gb25SdW5FbmQocnVuRW5kKSB7XG4gICAgICAgIHRoaXMuZW5kZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmxvZyhcIjEuLlwiLmNvbmNhdChydW5FbmQudGVzdENvdW50cy50b3RhbCkpO1xuICAgICAgICB0aGlzLmxvZyhcIiMgcGFzcyBcIi5jb25jYXQocnVuRW5kLnRlc3RDb3VudHMucGFzc2VkKSk7XG4gICAgICAgIHRoaXMubG9nKFwiIyBcIi5jb25jYXQoJC55ZWxsb3coXCJza2lwIFwiLmNvbmNhdChydW5FbmQudGVzdENvdW50cy5za2lwcGVkKSkpKTtcbiAgICAgICAgdGhpcy5sb2coXCIjIFwiLmNvbmNhdCgkLmN5YW4oXCJ0b2RvIFwiLmNvbmNhdChydW5FbmQudGVzdENvdW50cy50b2RvKSkpKTtcbiAgICAgICAgdGhpcy5sb2coXCIjIFwiLmNvbmNhdCgkLnJlZChcImZhaWwgXCIuY29uY2F0KHJ1bkVuZC50ZXN0Q291bnRzLmZhaWxlZCkpKSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImxvZ0Fzc2VydGlvblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxvZ0Fzc2VydGlvbihlcnJvciwgc2V2ZXJpdHkpIHtcbiAgICAgICAgdmFyIG91dCA9ICcgIC0tLSc7XG4gICAgICAgIG91dCArPSBcIlxcbiAgbWVzc2FnZTogXCIuY29uY2F0KHByZXR0eVlhbWxWYWx1ZShlcnJvci5tZXNzYWdlIHx8ICdmYWlsZWQnKSk7XG4gICAgICAgIG91dCArPSBcIlxcbiAgc2V2ZXJpdHk6IFwiLmNvbmNhdChwcmV0dHlZYW1sVmFsdWUoc2V2ZXJpdHkgfHwgJ2ZhaWxlZCcpKTtcblxuICAgICAgICAvLyBXaGVuIHB1c2hGYWlsdXJlKCkgaXMgdXNlZCwgYWN0dWFsL2V4cGVjdGVkIGFyZSBpbml0aWFsbHkgdW5zZXQgYnV0XG4gICAgICAgIC8vIGV2ZW50dWFsbHkgaW4gVGVzdCNsb2dBc3NlcnRpb24sIGZvciB0ZXN0UmVwb3J0I3B1c2hBc3NlcnRpb24sIHRoZXNlIGFyZVxuICAgICAgICAvLyBmb3JnZWQgaW50byBleGlzdGVuY2UgYXMgdW5kZWZpbmVkLlxuICAgICAgICB2YXIgaGFzQW55ID0gZXJyb3IuZXhwZWN0ZWQgIT09IHVuZGVmaW5lZCB8fCBlcnJvci5hY3R1YWwgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGhhc0FueSkge1xuICAgICAgICAgIG91dCArPSBcIlxcbiAgYWN0dWFsICA6IFwiLmNvbmNhdChwcmV0dHlZYW1sVmFsdWUoZXJyb3IuYWN0dWFsKSk7XG4gICAgICAgICAgb3V0ICs9IFwiXFxuICBleHBlY3RlZDogXCIuY29uY2F0KHByZXR0eVlhbWxWYWx1ZShlcnJvci5leHBlY3RlZCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvci5zdGFjaykge1xuICAgICAgICAgIC8vIFNpbmNlIHN0YWNrcyBhcmVuJ3QgdXNlciBnZW5lcmF0ZWQsIHRha2UgYSBiaXQgb2YgbGliZXJ0eSBieVxuICAgICAgICAgIC8vIGFkZGluZyBhIHRyYWlsaW5nIG5ldyBsaW5lIHRvIGFsbG93IGEgc3RyYWlnaHQtZm9yd2FyZCBZQU1MIEJsb2Nrcy5cbiAgICAgICAgICB2YXIgZm10U3RhY2sgPSBhbm5vdGF0ZVN0YWNrdHJhY2UoZXJyb3Iuc3RhY2ssICQuZ3JleSk7XG4gICAgICAgICAgaWYgKGZtdFN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgb3V0ICs9IFwiXFxuICBzdGFjazogXCIuY29uY2F0KHByZXR0eVlhbWxWYWx1ZShmbXRTdGFjayArICdcXG4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG91dCArPSAnXFxuICAuLi4nO1xuICAgICAgICB0aGlzLmxvZyhvdXQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJsb2dFcnJvclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxvZ0Vycm9yKGVycm9yKSB7XG4gICAgICAgIHZhciBvdXQgPSAnICAtLS0nO1xuICAgICAgICBvdXQgKz0gXCJcXG4gIG1lc3NhZ2U6IFwiLmNvbmNhdChwcmV0dHlZYW1sVmFsdWUoZXJyb3JTdHJpbmcoZXJyb3IpKSk7XG4gICAgICAgIG91dCArPSBcIlxcbiAgc2V2ZXJpdHk6IFwiLmNvbmNhdChwcmV0dHlZYW1sVmFsdWUoJ2ZhaWxlZCcpKTtcbiAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLnN0YWNrKSB7XG4gICAgICAgICAgdmFyIGZtdFN0YWNrID0gYW5ub3RhdGVTdGFja3RyYWNlKGVycm9yLnN0YWNrLCAkLmdyZXksIGVycm9yLnRvU3RyaW5nKCkpO1xuICAgICAgICAgIGlmIChmbXRTdGFjay5sZW5ndGgpIHtcbiAgICAgICAgICAgIG91dCArPSBcIlxcbiAgc3RhY2s6IFwiLmNvbmNhdChwcmV0dHlZYW1sVmFsdWUoZm10U3RhY2sgKyAnXFxuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvdXQgKz0gJ1xcbiAgLi4uJztcbiAgICAgICAgdGhpcy5sb2cob3V0KTtcbiAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgIGtleTogXCJpbml0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdChydW5uZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUYXBSZXBvcnRlcihydW5uZXIsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1dKTtcbiAgfSgpO1xuXG4gIHZhciByZXBvcnRlcnMgPSB7XG4gICAgY29uc29sZTogQ29uc29sZVJlcG9ydGVyLFxuICAgIHBlcmY6IFBlcmZSZXBvcnRlcixcbiAgICB0YXA6IFRhcFJlcG9ydGVyXG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUFkZEdsb2JhbEhvb2soaG9va05hbWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gYWRkR2xvYmFsSG9vayhjYWxsYmFjaykge1xuICAgICAgaWYgKCFjb25maWcuZ2xvYmFsSG9va3NbaG9va05hbWVdKSB7XG4gICAgICAgIGNvbmZpZy5nbG9iYWxIb29rc1tob29rTmFtZV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGNvbmZpZy5nbG9iYWxIb29rc1tob29rTmFtZV0ucHVzaChjYWxsYmFjayk7XG4gICAgfTtcbiAgfVxuICB2YXIgaG9va3MgPSB7XG4gICAgYmVmb3JlRWFjaDogbWFrZUFkZEdsb2JhbEhvb2soJ2JlZm9yZUVhY2gnKSxcbiAgICBhZnRlckVhY2g6IG1ha2VBZGRHbG9iYWxIb29rKCdhZnRlckVhY2gnKVxuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgc2VlZGVkIFwic2FtcGxlXCIgZ2VuZXJhdG9yIHdoaWNoIGlzIHVzZWQgZm9yIHJhbmRvbWl6aW5nIHRlc3RzLlxuICAgKi9cbiAgZnVuY3Rpb24gdW5pdFNhbXBsZXJHZW5lcmF0b3Ioc2VlZCkge1xuICAgIC8vIDMyLWJpdCB4b3JzaGlmdCwgcmVxdWlyZXMgb25seSBhIG5vbnplcm8gc2VlZFxuICAgIC8vIGh0dHBzOi8vZXhjYW1lcmEuY29tL3NwaGlueC9hcnRpY2xlLXhvcnNoaWZ0Lmh0bWxcbiAgICB2YXIgc2FtcGxlID0gcGFyc2VJbnQoZ2VuZXJhdGVIYXNoKHNlZWQpLCAxNikgfHwgLTE7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNhbXBsZSBePSBzYW1wbGUgPDwgMTM7XG4gICAgICBzYW1wbGUgXj0gc2FtcGxlID4+PiAxNztcbiAgICAgIHNhbXBsZSBePSBzYW1wbGUgPDwgNTtcblxuICAgICAgLy8gRUNNQVNjcmlwdCBoYXMgbm8gdW5zaWduZWQgbnVtYmVyIHR5cGVcbiAgICAgIGlmIChzYW1wbGUgPCAwKSB7XG4gICAgICAgIHNhbXBsZSArPSAweDEwMDAwMDAwMDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzYW1wbGUgLyAweDEwMDAwMDAwMDtcbiAgICB9O1xuICB9XG4gIHZhciBQcm9jZXNzaW5nUXVldWUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHRlc3QgUmVmZXJlbmNlIHRvIHRoZSBRVW5pdC50ZXN0KCkgbWV0aG9kXG4gICAgICovXG4gICAgZnVuY3Rpb24gUHJvY2Vzc2luZ1F1ZXVlKHRlc3QpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcm9jZXNzaW5nUXVldWUpO1xuICAgICAgdGhpcy50ZXN0ID0gdGVzdDtcbiAgICAgIHRoaXMucHJpb3JpdHlDb3VudCA9IDA7XG4gICAgICB0aGlzLnVuaXRTYW1wbGVyID0gbnVsbDtcblxuICAgICAgLy8gVGhpcyBpcyBhIHF1ZXVlIG9mIGZ1bmN0aW9ucyB0aGF0IGFyZSB0YXNrcyB3aXRoaW4gYSBzaW5nbGUgdGVzdC5cbiAgICAgIC8vIEFmdGVyIHRlc3RzIGFyZSBkZXF1ZXVlZCBmcm9tIGNvbmZpZy5xdWV1ZSB0aGV5IGFyZSBleHBhbmRlZCBpbnRvXG4gICAgICAvLyBhIHNldCBvZiB0YXNrcyBpbiB0aGlzIHF1ZXVlLlxuICAgICAgdGhpcy50YXNrUXVldWUgPSBbXTtcbiAgICAgIHRoaXMuZmluaXNoZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZHZhbmNlcyB0aGUgdGFza1F1ZXVlIHRvIHRoZSBuZXh0IHRhc2suIElmIHRoZSB0YXNrUXVldWUgaXMgZW1wdHksXG4gICAgICogcHJvY2VzcyB0aGUgdGVzdFF1ZXVlXG4gICAgICovXG4gICAgcmV0dXJuIF9jcmVhdGVDbGFzcyhQcm9jZXNzaW5nUXVldWUsIFt7XG4gICAgICBrZXk6IFwiYWR2YW5jZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkdmFuY2UoKSB7XG4gICAgICAgIHRoaXMuYWR2YW5jZVRhc2tRdWV1ZSgpO1xuICAgICAgICBpZiAoIXRoaXMudGFza1F1ZXVlLmxlbmd0aCAmJiAhY29uZmlnLmJsb2NraW5nICYmICFjb25maWcuY3VycmVudCkge1xuICAgICAgICAgIHRoaXMuYWR2YW5jZVRlc3RRdWV1ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQWR2YW5jZXMgdGhlIHRhc2tRdWV1ZSB3aXRoIGFuIGluY3JlYXNlZCBkZXB0aFxuICAgICAgICovXG4gICAgfSwge1xuICAgICAga2V5OiBcImFkdmFuY2VUYXNrUXVldWVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZHZhbmNlVGFza1F1ZXVlKCkge1xuICAgICAgICB2YXIgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgY29uZmlnLmRlcHRoID0gKGNvbmZpZy5kZXB0aCB8fCAwKSArIDE7XG4gICAgICAgIHRoaXMucHJvY2Vzc1Rhc2tRdWV1ZShzdGFydCk7XG4gICAgICAgIGNvbmZpZy5kZXB0aC0tO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFByb2Nlc3MgdGhlIGZpcnN0IHRhc2sgb24gdGhlIHRhc2tRdWV1ZSBhcyBhIHByb21pc2UuXG4gICAgICAgKiBFYWNoIHRhc2sgaXMgYSBmdW5jdGlvbiBhZGRlZCBieSBUZXN0I3F1ZXVlKCkgaW4gL3NyYy90ZXN0LmpzXG4gICAgICAgKi9cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicHJvY2Vzc1Rhc2tRdWV1ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByb2Nlc3NUYXNrUXVldWUoc3RhcnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMudGFza1F1ZXVlLmxlbmd0aCAmJiAhY29uZmlnLmJsb2NraW5nKSB7XG4gICAgICAgICAgdmFyIGVsYXBzZWRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydDtcbiAgICAgICAgICBpZiAoIXNldFRpbWVvdXQkMSB8fCBjb25maWcudXBkYXRlUmF0ZSA8PSAwIHx8IGVsYXBzZWRUaW1lIDwgY29uZmlnLnVwZGF0ZVJhdGUpIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdGhpcy50YXNrUXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgIF9Qcm9taXNlLnJlc29sdmUodGFzaygpKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgaWYgKCFfdGhpcy50YXNrUXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWR2YW5jZSgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLnByb2Nlc3NUYXNrUXVldWUoc3RhcnQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dCQxKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgX3RoaXMuYWR2YW5jZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQWR2YW5jZSB0aGUgdGVzdFF1ZXVlIHRvIHRoZSBuZXh0IHRlc3QgdG8gcHJvY2Vzcy4gQ2FsbCBkb25lKCkgaWYgdGVzdFF1ZXVlIGNvbXBsZXRlcy5cbiAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgIGtleTogXCJhZHZhbmNlVGVzdFF1ZXVlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYWR2YW5jZVRlc3RRdWV1ZSgpIHtcbiAgICAgICAgaWYgKCFjb25maWcuYmxvY2tpbmcgJiYgIWNvbmZpZy5xdWV1ZS5sZW5ndGggJiYgY29uZmlnLmRlcHRoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5kb25lKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0ZXN0VGFza3MgPSBjb25maWcucXVldWUuc2hpZnQoKTtcbiAgICAgICAgdGhpcy5hZGRUb1Rhc2tRdWV1ZSh0ZXN0VGFza3MoKSk7XG4gICAgICAgIGlmICh0aGlzLnByaW9yaXR5Q291bnQgPiAwKSB7XG4gICAgICAgICAgdGhpcy5wcmlvcml0eUNvdW50LS07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogRW5xdWV1ZSB0aGUgdGFza3MgZm9yIGEgdGVzdCBpbnRvIHRoZSB0YXNrIHF1ZXVlLlxuICAgICAgICogQHBhcmFtIHtBcnJheX0gdGFza3NBcnJheVxuICAgICAgICovXG4gICAgfSwge1xuICAgICAga2V5OiBcImFkZFRvVGFza1F1ZXVlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkVG9UYXNrUXVldWUodGFza3NBcnJheSkge1xuICAgICAgICB2YXIgX3RoaXMkdGFza1F1ZXVlO1xuICAgICAgICAoX3RoaXMkdGFza1F1ZXVlID0gdGhpcy50YXNrUXVldWUpLnB1c2guYXBwbHkoX3RoaXMkdGFza1F1ZXVlLCBfdG9Db25zdW1hYmxlQXJyYXkodGFza3NBcnJheSkpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybiB0aGUgbnVtYmVyIG9mIHRhc2tzIHJlbWFpbmluZyBpbiB0aGUgdGFzayBxdWV1ZSB0byBiZSBwcm9jZXNzZWQuXG4gICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICAgKi9cbiAgICB9LCB7XG4gICAgICBrZXk6IFwidGFza0NvdW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdGFza0NvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrUXVldWUubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEFkZHMgYSB0ZXN0IHRvIHRoZSBUZXN0UXVldWUgZm9yIGV4ZWN1dGlvbi5cbiAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHRlc3RUYXNrc0Z1bmNcbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJpb3JpdGl6ZVxuICAgICAgICovXG4gICAgfSwge1xuICAgICAga2V5OiBcImFkZFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZCh0ZXN0VGFza3NGdW5jLCBwcmlvcml0aXplKSB7XG4gICAgICAgIGlmIChwcmlvcml0aXplKSB7XG4gICAgICAgICAgY29uZmlnLnF1ZXVlLnNwbGljZSh0aGlzLnByaW9yaXR5Q291bnQrKywgMCwgdGVzdFRhc2tzRnVuYyk7XG4gICAgICAgIH0gZWxzZSBpZiAoY29uZmlnLnNlZWQpIHtcbiAgICAgICAgICBpZiAoIXRoaXMudW5pdFNhbXBsZXIpIHtcbiAgICAgICAgICAgIHRoaXMudW5pdFNhbXBsZXIgPSB1bml0U2FtcGxlckdlbmVyYXRvcihjb25maWcuc2VlZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSW5zZXJ0IGludG8gYSByYW5kb20gcG9zaXRpb24gYWZ0ZXIgYWxsIHByaW9yaXRpemVkIGl0ZW1zXG4gICAgICAgICAgdmFyIGluZGV4ID0gTWF0aC5mbG9vcih0aGlzLnVuaXRTYW1wbGVyKCkgKiAoY29uZmlnLnF1ZXVlLmxlbmd0aCAtIHRoaXMucHJpb3JpdHlDb3VudCArIDEpKTtcbiAgICAgICAgICBjb25maWcucXVldWUuc3BsaWNlKHRoaXMucHJpb3JpdHlDb3VudCArIGluZGV4LCAwLCB0ZXN0VGFza3NGdW5jKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25maWcucXVldWUucHVzaCh0ZXN0VGFza3NGdW5jKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gdGhlIFByb2Nlc3NpbmdRdWV1ZSBpcyBkb25lIHByb2Nlc3NpbmcgYWxsXG4gICAgICAgKiBpdGVtcy4gSXQgaGFuZGxlcyBlbWl0dGluZyB0aGUgZmluYWwgcnVuIGV2ZW50cy5cbiAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgIGtleTogXCJkb25lXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZG9uZSgpIHtcbiAgICAgICAgLy8gV2UgaGF2ZSByZWFjaGVkIHRoZSBlbmQgb2YgdGhlIHByb2Nlc3NpbmcgcXVldWUgYW5kIGFyZSBhYm91dCB0byBlbWl0IHRoZVxuICAgICAgICAvLyBcInJ1bkVuZFwiIGV2ZW50IGFmdGVyIHdoaWNoIHJlcG9ydGVycyB0eXBpY2FsbHkgc3RvcCBsaXN0ZW5pbmcgYW5kIGV4aXRcbiAgICAgICAgLy8gdGhlIHByb2Nlc3MuIEZpcnN0LCBjaGVjayBpZiB3ZSBuZWVkIHRvIGVtaXQgb25lIGZpbmFsIHRlc3QuXG4gICAgICAgIGlmIChjb25maWcuc3RhdHMudGVzdENvdW50ID09PSAwICYmIGNvbmZpZy5mYWlsT25aZXJvVGVzdHMgPT09IHRydWUpIHtcbiAgICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgICAgaWYgKGNvbmZpZy5maWx0ZXIgJiYgY29uZmlnLmZpbHRlci5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVycm9yID0gbmV3IEVycm9yKFwiTm8gdGVzdHMgbWF0Y2hlZCB0aGUgZmlsdGVyIFxcXCJcIi5jb25jYXQoY29uZmlnLmZpbHRlciwgXCJcXFwiLlwiKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChjb25maWcubW9kdWxlICYmIGNvbmZpZy5tb2R1bGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBlcnJvciA9IG5ldyBFcnJvcihcIk5vIHRlc3RzIG1hdGNoZWQgdGhlIG1vZHVsZSBcXFwiXCIuY29uY2F0KGNvbmZpZy5tb2R1bGUsIFwiXFxcIi5cIikpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29uZmlnLm1vZHVsZUlkICYmIGNvbmZpZy5tb2R1bGVJZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVycm9yID0gbmV3IEVycm9yKFwiTm8gdGVzdHMgbWF0Y2hlZCB0aGUgbW9kdWxlSWQgXFxcIlwiLmNvbmNhdChjb25maWcubW9kdWxlSWQsIFwiXFxcIi5cIikpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29uZmlnLnRlc3RJZCAmJiBjb25maWcudGVzdElkLmxlbmd0aCkge1xuICAgICAgICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXCJObyB0ZXN0cyBtYXRjaGVkIHRoZSB0ZXN0SWQgXFxcIlwiLmNvbmNhdChjb25maWcudGVzdElkLCBcIlxcXCIuXCIpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ05vIHRlc3RzIHdlcmUgcnVuLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnRlc3QoJ2dsb2JhbCBmYWlsdXJlJywgZXh0ZW5kKGZ1bmN0aW9uIChhc3NlcnQpIHtcbiAgICAgICAgICAgIGFzc2VydC5wdXNoUmVzdWx0KHtcbiAgICAgICAgICAgICAgcmVzdWx0OiBmYWxzZSxcbiAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgICAgc291cmNlOiBlcnJvci5zdGFja1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgdmFsaWRUZXN0OiB0cnVlXG4gICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgLy8gV2UgZG8gbmVlZCB0byBjYWxsIGBhZHZhbmNlKClgIGluIG9yZGVyIHRvIHJlc3VtZSB0aGUgcHJvY2Vzc2luZyBxdWV1ZS5cbiAgICAgICAgICAvLyBPbmNlIHRoaXMgbmV3IHRlc3QgaXMgZmluaXNoZWQgcHJvY2Vzc2luZywgd2UnbGwgcmVhY2ggYGRvbmVgIGFnYWluLCBhbmRcbiAgICAgICAgICAvLyB0aGF0IHRpbWUgdGhlIGFib3ZlIGNvbmRpdGlvbiB3aWxsIGV2YWx1YXRlIHRvIGZhbHNlLlxuICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RvcmFnZSA9IGNvbmZpZy5zdG9yYWdlO1xuICAgICAgICB2YXIgcnVudGltZSA9IE1hdGgucm91bmQocGVyZm9ybWFuY2Uubm93KCkgLSBjb25maWcuc3RhcnRlZCk7XG4gICAgICAgIHZhciBwYXNzZWQgPSBjb25maWcuc3RhdHMuYWxsIC0gY29uZmlnLnN0YXRzLmJhZDtcbiAgICAgICAgdGhpcy5maW5pc2hlZCA9IHRydWU7XG4gICAgICAgIGVtaXQoJ3J1bkVuZCcsIHJ1blN1aXRlLmVuZCh0cnVlKSk7XG4gICAgICAgIHJ1bkxvZ2dpbmdDYWxsYmFja3MoJ2RvbmUnLCB7XG4gICAgICAgICAgLy8gQGRlcHJlY2F0ZWQgc2luY2UgMi4xOS4wIFVzZSBkb25lKCkgd2l0aG91dCBgZGV0YWlsc2AgcGFyYW1ldGVyLFxuICAgICAgICAgIC8vIG9yIHVzZSBgUVVuaXQub24oJ3J1bkVuZCcpYCBpbnN0ZWFkLiBQYXJhbWV0ZXIgdG8gYmUgcmVwbGFjZWQgaW5cbiAgICAgICAgICAvLyBRVW5pdCAzLjAgd2l0aCB0ZXN0IGNvdW50cy5cbiAgICAgICAgICBwYXNzZWQ6IHBhc3NlZCxcbiAgICAgICAgICBmYWlsZWQ6IGNvbmZpZy5zdGF0cy5iYWQsXG4gICAgICAgICAgdG90YWw6IGNvbmZpZy5zdGF0cy5hbGwsXG4gICAgICAgICAgcnVudGltZTogcnVudGltZVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBDbGVhciBvd24gc3RvcmFnZSBpdGVtcyBpZiBhbGwgdGVzdHMgcGFzc2VkXG4gICAgICAgICAgaWYgKHN0b3JhZ2UgJiYgY29uZmlnLnN0YXRzLmJhZCA9PT0gMCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHN0b3JhZ2UubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgdmFyIGtleSA9IHN0b3JhZ2Uua2V5KGkpO1xuICAgICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ3F1bml0LXRlc3QtJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfV0pO1xuICB9KCk7XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBhIGdsb2JhbCBlcnJvciB0aGF0IHNob3VsZCByZXN1bHQgaW4gYSBmYWlsZWQgdGVzdCBydW4uXG4gICAqXG4gICAqIFN1bW1hcnk6XG4gICAqXG4gICAqIC0gSWYgd2UncmUgc3RyaWN0bHkgaW5zaWRlIGEgdGVzdCAob3Igb25lIGlmIGl0cyBtb2R1bGUgaG9va3MpLCB0aGUgZXhjZXB0aW9uXG4gICAqICAgYmVjb21lcyBhIGZhaWxlZCBhc3NlcnRpb24uXG4gICAqXG4gICAqICAgVGhpcyBoYXMgdGhlIGltcG9ydGFudCBzaWRlLWVmZmVjdCB0aGF0IHVuY2F1Z2h0IGV4Y2VwdGlvbnMgKHN1Y2ggYXNcbiAgICogICBjYWxsaW5nIGFuIHVuZGVmaW5lZCBmdW5jdGlvbikgZHVyaW5nIGEgXCJ0b2RvXCIgdGVzdCBkbyBOT1QgcmVzdWx0IGluXG4gICAqICAgYSBmYWlsZWQgdGVzdCBydW4uXG4gICAqXG4gICAqIC0gSWYgd2UncmUgYW55d2hlcmUgb3V0c2lkZSBhIHRlc3QgKGJlIGl0IGluIGVhcmx5IGV2ZW50IGNhbGxiYWNrcywgb3JcbiAgICogICBpbnRlcm5hbGx5IGJldHdlZW4gdGVzdHMsIG9yIHNvbWV3aGVyZSBhZnRlciBcInJ1bkVuZFwiIGlmIHRoZSBwcm9jZXNzIGlzXG4gICAqICAgc3RpbGwgYWxpdmUgZm9yIHNvbWUgcmVhc29uKSwgdGhlbiBzZW5kIGFuIFwiZXJyb3JcIiBldmVudCB0byB0aGUgcmVwb3J0ZXJzLlxuICAgKlxuICAgKiBAc2luY2UgMi4xNy4wXG4gICAqIEBwYXJhbSB7RXJyb3J8YW55fSBlcnJvclxuICAgKi9cbiAgZnVuY3Rpb24gb25VbmNhdWdodEV4Y2VwdGlvbihlcnJvcikge1xuICAgIGlmIChjb25maWcuY3VycmVudCkge1xuICAgICAgLy8gVGhpcyBvbWl0cyAnYWN0dWFsJyBhbmQgJ2V4cGVjdGVkJyAodW5kZWZpbmVkKVxuICAgICAgY29uZmlnLmN1cnJlbnQuYXNzZXJ0LnB1c2hSZXN1bHQoe1xuICAgICAgICByZXN1bHQ6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcImdsb2JhbCBmYWlsdXJlOiBcIi5jb25jYXQoZXJyb3JTdHJpbmcoZXJyb3IpKSxcbiAgICAgICAgLy8gV2UgY291bGQgbGV0IGNhbGxlcnMgc3BlY2lmeSBhbiBvZmZzZXQgdG8gc3VidHJhY3QgYSBudW1iZXIgb2YgZnJhbWVzIHZpYVxuICAgICAgICAvLyBzb3VyY2VGcm9tU3RhY2t0cmFjZSwgaW4gY2FzZSB0aGV5IGFyZSBhIHdyYXBwZXIgZnVydGhlciBhd2F5IGZyb20gdGhlIGVycm9yXG4gICAgICAgIC8vIGhhbmRsZXIsIGFuZCB0aHVzIHJlZHVjZSBzb21lIG5vaXNlIGluIHRoZSBzdGFjayB0cmFjZS4gSG93ZXZlciwgd2UncmUgbm90XG4gICAgICAgIC8vIGRvaW5nIHRoaXMgcmlnaHQgbm93IGJlY2F1c2UgaXQgd291bGQgYWxtb3N0IG5ldmVyIGJlIHVzZWQgaW4gcHJhY3RpY2UgZ2l2ZW5cbiAgICAgICAgLy8gdGhlIHZhc3QgbWFqb3JpdHkgb2YgZXJyb3IgdmFsdWVzIHdpbGwgYmUgRXJyb3Igb2JqZWN0cywgYW5kIHRodXMgaGF2ZSB0aGVpclxuICAgICAgICAvLyBvd24gc3RhY2sgdHJhY2UgYWxyZWFkeS5cbiAgICAgICAgc291cmNlOiBlcnJvciAmJiBlcnJvci5zdGFjayB8fCBzb3VyY2VGcm9tU3RhY2t0cmFjZSgyKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSBcImVycm9yXCIgZXZlbnQgd2FzIGFkZGVkIGluIFFVbml0IDIuMTcuXG4gICAgICAvLyBJbmNyZWFzZSBcImJhZCBhc3NlcnRpb25cIiBzdGF0cyBkZXNwaXRlIG5vIGxvbmdlciBwdXNoaW5nIGFuIGFzc2VydGlvbiBpbiB0aGlzIGNhc2UuXG4gICAgICAvLyBUaGlzIGVuc3VyZXMgXCJydW5FbmRcIiBhbmQgXCJRVW5pdC5kb25lKClcIiBoYW5kbGVycyBiZWhhdmUgYXMgZXhwZWN0ZWQsIHNpbmNlIHRoZSBcImJhZFwiXG4gICAgICAvLyBjb3VudCBpcyB0eXBpY2FsbHkgaG93IHJlcG9ydGVycyBkZWNpZGUgb24gdGhlIGJvb2xlYW4gb3V0Y29tZSBvZiB0aGUgdGVzdCBydW4uXG4gICAgICBydW5TdWl0ZS5nbG9iYWxGYWlsdXJlQ291bnQrKztcbiAgICAgIGNvbmZpZy5zdGF0cy5iYWQrKztcbiAgICAgIGNvbmZpZy5zdGF0cy5hbGwrKztcbiAgICAgIGVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgYSB3aW5kb3cub25lcnJvciBlcnJvci5cbiAgICpcbiAgICogSWYgdGhlcmUgaXMgYSBjdXJyZW50IHRlc3QgdGhhdCBzZXRzIHRoZSBpbnRlcm5hbCBgaWdub3JlR2xvYmFsRXJyb3JzYCBmaWVsZFxuICAgKiAoc3VjaCBhcyBkdXJpbmcgYGFzc2VydC50aHJvd3MoKWApLCB0aGVuIHRoZSBlcnJvciBpcyBpZ25vcmVkIGFuZCBuYXRpdmVcbiAgICogZXJyb3IgcmVwb3J0aW5nIGlzIHN1cHByZXNzZWQgYXMgd2VsbC4gVGhpcyBpcyBiZWNhdXNlIGluIGJyb3dzZXJzLCBhbiBlcnJvclxuICAgKiBjYW4gc29tZXRpbWVzIGVuZCB1cCBpbiBgd2luZG93Lm9uZXJyb3JgIGluc3RlYWQgb2YgaW4gdGhlIGxvY2FsIHRyeS9jYXRjaC5cbiAgICogVGhpcyBpZ25vcmluZyBvZiBlcnJvcnMgZG9lcyBub3QgYXBwbHkgdG8gb3VyIGdlbmVyYWwgb25VbmNhdWdodEV4Y2VwdGlvblxuICAgKiBtZXRob2QsIG5vciB0byBvdXIgYHVuaGFuZGxlZFJlamVjdGlvbmAgaGFuZGxlcnMsIGFzIHRob3NlIGFyZSBub3QgbWVhbnRcbiAgICogdG8gcmVjZWl2ZSBhbiBcImV4cGVjdGVkXCIgZXJyb3IgZHVyaW5nIGBhc3NlcnQudGhyb3dzKClgLlxuICAgKlxuICAgKiBAc2VlIDxodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvR2xvYmFsRXZlbnRIYW5kbGVycy9vbmVycm9yPlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSAyLjE3LjAgVXNlIFFVbml0Lm9uVW5jYXVnaHRFeGNlcHRpb24gaW5zdGVhZC5cbiAgICogQHBhcmFtIHtPYmplY3R9IGRldGFpbHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRldGFpbHMubWVzc2FnZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGV0YWlscy5maWxlTmFtZVxuICAgKiBAcGFyYW0ge251bWJlcn0gZGV0YWlscy5saW5lTnVtYmVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfHVuZGVmaW5lZH0gW2RldGFpbHMuc3RhY2t0cmFjZV1cbiAgICogQHJldHVybiB7Ym9vbH0gVHJ1ZSBpZiBuYXRpdmUgZXJyb3IgcmVwb3J0aW5nIHNob3VsZCBiZSBzdXBwcmVzc2VkLlxuICAgKi9cbiAgZnVuY3Rpb24gb25XaW5kb3dFcnJvcihkZXRhaWxzKSB7XG4gICAgTG9nZ2VyLndhcm4oJ1FVbml0Lm9uRXJyb3IgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIFFVbml0IDMuMC4nICsgJyBQbGVhc2UgdXNlIFFVbml0Lm9uVW5jYXVnaHRFeGNlcHRpb24gaW5zdGVhZC4nKTtcbiAgICBpZiAoY29uZmlnLmN1cnJlbnQgJiYgY29uZmlnLmN1cnJlbnQuaWdub3JlR2xvYmFsRXJyb3JzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcihkZXRhaWxzLm1lc3NhZ2UpO1xuICAgIGVyci5zdGFjayA9IGRldGFpbHMuc3RhY2t0cmFjZSB8fCBkZXRhaWxzLmZpbGVOYW1lICsgJzonICsgZGV0YWlscy5saW5lTnVtYmVyO1xuICAgIG9uVW5jYXVnaHRFeGNlcHRpb24oZXJyKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBpbmRlbnQgKi9cblxuICAvKlxuICAgKiBUaGlzIGZpbGUgaXMgYSBtb2RpZmllZCB2ZXJzaW9uIG9mIGdvb2dsZS1kaWZmLW1hdGNoLXBhdGNoJ3MgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvblxuICAgKiAoaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9nb29nbGUtZGlmZi1tYXRjaC1wYXRjaC9zb3VyY2UvYnJvd3NlL3RydW5rL2phdmFzY3JpcHQvZGlmZl9tYXRjaF9wYXRjaF91bmNvbXByZXNzZWQuanMpLFxuICAgKiBtb2RpZmljYXRpb25zIGFyZSBsaWNlbnNlZCBhcyBtb3JlIGZ1bGx5IHNldCBmb3J0aCBpbiBMSUNFTlNFLnR4dC5cbiAgICpcbiAgICogVGhlIG9yaWdpbmFsIHNvdXJjZSBvZiBnb29nbGUtZGlmZi1tYXRjaC1wYXRjaCBpcyBhdHRyaWJ1dGFibGUgYW5kIGxpY2Vuc2VkIGFzIGZvbGxvd3M6XG4gICAqXG4gICAqIENvcHlyaWdodCAyMDA2IEdvb2dsZSBJbmMuXG4gICAqIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvZ29vZ2xlLWRpZmYtbWF0Y2gtcGF0Y2gvXG4gICAqXG4gICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gICAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gICAqXG4gICAqIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAgICpcbiAgICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICAgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gICAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICAgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gICAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICAgKlxuICAgKiBNb3JlIEluZm86XG4gICAqICBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2dvb2dsZS1kaWZmLW1hdGNoLXBhdGNoL1xuICAgKlxuICAgKiBVc2FnZTogUVVuaXQuZGlmZihleHBlY3RlZCwgYWN0dWFsKVxuICAgKlxuICAgKi9cbiAgZnVuY3Rpb24gRGlmZk1hdGNoUGF0Y2goKSB7fVxuXG4gIC8vICBESUZGIEZVTkNUSU9OU1xuXG4gIC8qKlxuICAgKiBUaGUgZGF0YSBzdHJ1Y3R1cmUgcmVwcmVzZW50aW5nIGEgZGlmZiBpcyBhbiBhcnJheSBvZiB0dXBsZXM6XG4gICAqIFtbRElGRl9ERUxFVEUsICdIZWxsbyddLCBbRElGRl9JTlNFUlQsICdHb29kYnllJ10sIFtESUZGX0VRVUFMLCAnIHdvcmxkLiddXVxuICAgKiB3aGljaCBtZWFuczogZGVsZXRlICdIZWxsbycsIGFkZCAnR29vZGJ5ZScgYW5kIGtlZXAgJyB3b3JsZC4nXG4gICAqL1xuICB2YXIgRElGRl9ERUxFVEUgPSAtMTtcbiAgdmFyIERJRkZfSU5TRVJUID0gMTtcbiAgdmFyIERJRkZfRVFVQUwgPSAwO1xuICB2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuICAvKipcbiAgICogRmluZCB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiB0d28gdGV4dHMuICBTaW1wbGlmaWVzIHRoZSBwcm9ibGVtIGJ5IHN0cmlwcGluZ1xuICAgKiBhbnkgY29tbW9uIHByZWZpeCBvciBzdWZmaXggb2ZmIHRoZSB0ZXh0cyBiZWZvcmUgZGlmZmluZy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQxIE9sZCBzdHJpbmcgdG8gYmUgZGlmZmVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dDIgTmV3IHN0cmluZyB0byBiZSBkaWZmZWQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdENoZWNrbGluZXMgT3B0aW9uYWwgc3BlZWR1cCBmbGFnLiBJZiBwcmVzZW50IGFuZCBmYWxzZSxcbiAgICogICAgIHRoZW4gZG9uJ3QgcnVuIGEgbGluZS1sZXZlbCBkaWZmIGZpcnN0IHRvIGlkZW50aWZ5IHRoZSBjaGFuZ2VkIGFyZWFzLlxuICAgKiAgICAgRGVmYXVsdHMgdG8gdHJ1ZSwgd2hpY2ggZG9lcyBhIGZhc3Rlciwgc2xpZ2h0bHkgbGVzcyBvcHRpbWFsIGRpZmYuXG4gICAqIEByZXR1cm4geyFBcnJheS48IURpZmZNYXRjaFBhdGNoLkRpZmY+fSBBcnJheSBvZiBkaWZmIHR1cGxlcy5cbiAgICovXG4gIERpZmZNYXRjaFBhdGNoLnByb3RvdHlwZS5EaWZmTWFpbiA9IGZ1bmN0aW9uICh0ZXh0MSwgdGV4dDIsIG9wdENoZWNrbGluZXMpIHtcbiAgICAvLyBUaGUgZGlmZiBtdXN0IGJlIGNvbXBsZXRlIGluIHVwIHRvIDEgc2Vjb25kLlxuICAgIHZhciBkZWFkbGluZSA9IERhdGUubm93KCkgKyAxMDAwO1xuXG4gICAgLy8gQ2hlY2sgZm9yIG51bGwgaW5wdXRzLlxuICAgIGlmICh0ZXh0MSA9PT0gbnVsbCB8fCB0ZXh0MiA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZGlmZiBudWxsIGlucHV0LicpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBlcXVhbGl0eSAoc3BlZWR1cCkuXG4gICAgaWYgKHRleHQxID09PSB0ZXh0Mikge1xuICAgICAgaWYgKHRleHQxKSB7XG4gICAgICAgIHJldHVybiBbW0RJRkZfRVFVQUwsIHRleHQxXV07XG4gICAgICB9XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0Q2hlY2tsaW5lcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG9wdENoZWNrbGluZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIFRyaW0gb2ZmIGNvbW1vbiBwcmVmaXggKHNwZWVkdXApLlxuICAgIHZhciBjb21tb25sZW5ndGggPSB0aGlzLmRpZmZDb21tb25QcmVmaXgodGV4dDEsIHRleHQyKTtcbiAgICB2YXIgY29tbW9ucHJlZml4ID0gdGV4dDEuc3Vic3RyaW5nKDAsIGNvbW1vbmxlbmd0aCk7XG4gICAgdGV4dDEgPSB0ZXh0MS5zdWJzdHJpbmcoY29tbW9ubGVuZ3RoKTtcbiAgICB0ZXh0MiA9IHRleHQyLnN1YnN0cmluZyhjb21tb25sZW5ndGgpO1xuXG4gICAgLy8gVHJpbSBvZmYgY29tbW9uIHN1ZmZpeCAoc3BlZWR1cCkuXG4gICAgY29tbW9ubGVuZ3RoID0gdGhpcy5kaWZmQ29tbW9uU3VmZml4KHRleHQxLCB0ZXh0Mik7XG4gICAgdmFyIGNvbW1vbnN1ZmZpeCA9IHRleHQxLnN1YnN0cmluZyh0ZXh0MS5sZW5ndGggLSBjb21tb25sZW5ndGgpO1xuICAgIHRleHQxID0gdGV4dDEuc3Vic3RyaW5nKDAsIHRleHQxLmxlbmd0aCAtIGNvbW1vbmxlbmd0aCk7XG4gICAgdGV4dDIgPSB0ZXh0Mi5zdWJzdHJpbmcoMCwgdGV4dDIubGVuZ3RoIC0gY29tbW9ubGVuZ3RoKTtcblxuICAgIC8vIENvbXB1dGUgdGhlIGRpZmYgb24gdGhlIG1pZGRsZSBibG9jay5cbiAgICB2YXIgZGlmZnMgPSB0aGlzLmRpZmZDb21wdXRlKHRleHQxLCB0ZXh0Miwgb3B0Q2hlY2tsaW5lcywgZGVhZGxpbmUpO1xuXG4gICAgLy8gUmVzdG9yZSB0aGUgcHJlZml4IGFuZCBzdWZmaXguXG4gICAgaWYgKGNvbW1vbnByZWZpeCkge1xuICAgICAgZGlmZnMudW5zaGlmdChbRElGRl9FUVVBTCwgY29tbW9ucHJlZml4XSk7XG4gICAgfVxuICAgIGlmIChjb21tb25zdWZmaXgpIHtcbiAgICAgIGRpZmZzLnB1c2goW0RJRkZfRVFVQUwsIGNvbW1vbnN1ZmZpeF0pO1xuICAgIH1cbiAgICB0aGlzLmRpZmZDbGVhbnVwTWVyZ2UoZGlmZnMpO1xuICAgIHJldHVybiBkaWZmcztcbiAgfTtcblxuICAvKipcbiAgICogUmVkdWNlIHRoZSBudW1iZXIgb2YgZWRpdHMgYnkgZWxpbWluYXRpbmcgb3BlcmF0aW9uYWxseSB0cml2aWFsIGVxdWFsaXRpZXMuXG4gICAqIEBwYXJhbSB7IUFycmF5LjwhRGlmZk1hdGNoUGF0Y2guRGlmZj59IGRpZmZzIEFycmF5IG9mIGRpZmYgdHVwbGVzLlxuICAgKi9cbiAgRGlmZk1hdGNoUGF0Y2gucHJvdG90eXBlLmRpZmZDbGVhbnVwRWZmaWNpZW5jeSA9IGZ1bmN0aW9uIChkaWZmcykge1xuICAgIHZhciBjaGFuZ2VzLCBlcXVhbGl0aWVzLCBlcXVhbGl0aWVzTGVuZ3RoLCBsYXN0ZXF1YWxpdHksIHBvaW50ZXIsIHByZUlucywgcHJlRGVsLCBwb3N0SW5zLCBwb3N0RGVsO1xuICAgIGNoYW5nZXMgPSBmYWxzZTtcbiAgICBlcXVhbGl0aWVzID0gW107IC8vIFN0YWNrIG9mIGluZGljZXMgd2hlcmUgZXF1YWxpdGllcyBhcmUgZm91bmQuXG4gICAgZXF1YWxpdGllc0xlbmd0aCA9IDA7IC8vIEtlZXBpbmcgb3VyIG93biBsZW5ndGggdmFyIGlzIGZhc3RlciBpbiBKUy5cbiAgICAvKiogQHR5cGUgez9zdHJpbmd9ICovXG4gICAgbGFzdGVxdWFsaXR5ID0gbnVsbDtcblxuICAgIC8vIEFsd2F5cyBlcXVhbCB0byBkaWZmc1tlcXVhbGl0aWVzW2VxdWFsaXRpZXNMZW5ndGggLSAxXV1bMV1cbiAgICBwb2ludGVyID0gMDsgLy8gSW5kZXggb2YgY3VycmVudCBwb3NpdGlvbi5cblxuICAgIC8vIElzIHRoZXJlIGFuIGluc2VydGlvbiBvcGVyYXRpb24gYmVmb3JlIHRoZSBsYXN0IGVxdWFsaXR5LlxuICAgIHByZUlucyA9IGZhbHNlO1xuXG4gICAgLy8gSXMgdGhlcmUgYSBkZWxldGlvbiBvcGVyYXRpb24gYmVmb3JlIHRoZSBsYXN0IGVxdWFsaXR5LlxuICAgIHByZURlbCA9IGZhbHNlO1xuXG4gICAgLy8gSXMgdGhlcmUgYW4gaW5zZXJ0aW9uIG9wZXJhdGlvbiBhZnRlciB0aGUgbGFzdCBlcXVhbGl0eS5cbiAgICBwb3N0SW5zID0gZmFsc2U7XG5cbiAgICAvLyBJcyB0aGVyZSBhIGRlbGV0aW9uIG9wZXJhdGlvbiBhZnRlciB0aGUgbGFzdCBlcXVhbGl0eS5cbiAgICBwb3N0RGVsID0gZmFsc2U7XG4gICAgd2hpbGUgKHBvaW50ZXIgPCBkaWZmcy5sZW5ndGgpIHtcbiAgICAgIC8vIEVxdWFsaXR5IGZvdW5kLlxuICAgICAgaWYgKGRpZmZzW3BvaW50ZXJdWzBdID09PSBESUZGX0VRVUFMKSB7XG4gICAgICAgIGlmIChkaWZmc1twb2ludGVyXVsxXS5sZW5ndGggPCA0ICYmIChwb3N0SW5zIHx8IHBvc3REZWwpKSB7XG4gICAgICAgICAgLy8gQ2FuZGlkYXRlIGZvdW5kLlxuICAgICAgICAgIGVxdWFsaXRpZXNbZXF1YWxpdGllc0xlbmd0aCsrXSA9IHBvaW50ZXI7XG4gICAgICAgICAgcHJlSW5zID0gcG9zdElucztcbiAgICAgICAgICBwcmVEZWwgPSBwb3N0RGVsO1xuICAgICAgICAgIGxhc3RlcXVhbGl0eSA9IGRpZmZzW3BvaW50ZXJdWzFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE5vdCBhIGNhbmRpZGF0ZSwgYW5kIGNhbiBuZXZlciBiZWNvbWUgb25lLlxuICAgICAgICAgIGVxdWFsaXRpZXNMZW5ndGggPSAwO1xuICAgICAgICAgIGxhc3RlcXVhbGl0eSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcG9zdElucyA9IHBvc3REZWwgPSBmYWxzZTtcblxuICAgICAgICAvLyBBbiBpbnNlcnRpb24gb3IgZGVsZXRpb24uXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZGlmZnNbcG9pbnRlcl1bMF0gPT09IERJRkZfREVMRVRFKSB7XG4gICAgICAgICAgcG9zdERlbCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcG9zdElucyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAgKiBGaXZlIHR5cGVzIHRvIGJlIHNwbGl0OlxuICAgICAgICAgKiA8aW5zPkE8L2lucz48ZGVsPkI8L2RlbD5YWTxpbnM+QzwvaW5zPjxkZWw+RDwvZGVsPlxuICAgICAgICAgKiA8aW5zPkE8L2lucz5YPGlucz5DPC9pbnM+PGRlbD5EPC9kZWw+XG4gICAgICAgICAqIDxpbnM+QTwvaW5zPjxkZWw+QjwvZGVsPlg8aW5zPkM8L2lucz5cbiAgICAgICAgICogPGlucz5BPC9kZWw+WDxpbnM+QzwvaW5zPjxkZWw+RDwvZGVsPlxuICAgICAgICAgKiA8aW5zPkE8L2lucz48ZGVsPkI8L2RlbD5YPGRlbD5DPC9kZWw+XG4gICAgICAgICAqL1xuICAgICAgICBpZiAobGFzdGVxdWFsaXR5ICYmIChwcmVJbnMgJiYgcHJlRGVsICYmIHBvc3RJbnMgJiYgcG9zdERlbCB8fCBsYXN0ZXF1YWxpdHkubGVuZ3RoIDwgMiAmJiBwcmVJbnMgKyBwcmVEZWwgKyBwb3N0SW5zICsgcG9zdERlbCA9PT0gMykpIHtcbiAgICAgICAgICAvLyBEdXBsaWNhdGUgcmVjb3JkLlxuICAgICAgICAgIGRpZmZzLnNwbGljZShlcXVhbGl0aWVzW2VxdWFsaXRpZXNMZW5ndGggLSAxXSwgMCwgW0RJRkZfREVMRVRFLCBsYXN0ZXF1YWxpdHldKTtcblxuICAgICAgICAgIC8vIENoYW5nZSBzZWNvbmQgY29weSB0byBpbnNlcnQuXG4gICAgICAgICAgZGlmZnNbZXF1YWxpdGllc1tlcXVhbGl0aWVzTGVuZ3RoIC0gMV0gKyAxXVswXSA9IERJRkZfSU5TRVJUO1xuICAgICAgICAgIGVxdWFsaXRpZXNMZW5ndGgtLTsgLy8gVGhyb3cgYXdheSB0aGUgZXF1YWxpdHkgd2UganVzdCBkZWxldGVkO1xuICAgICAgICAgIGxhc3RlcXVhbGl0eSA9IG51bGw7XG4gICAgICAgICAgaWYgKHByZUlucyAmJiBwcmVEZWwpIHtcbiAgICAgICAgICAgIC8vIE5vIGNoYW5nZXMgbWFkZSB3aGljaCBjb3VsZCBhZmZlY3QgcHJldmlvdXMgZW50cnksIGtlZXAgZ29pbmcuXG4gICAgICAgICAgICBwb3N0SW5zID0gcG9zdERlbCA9IHRydWU7XG4gICAgICAgICAgICBlcXVhbGl0aWVzTGVuZ3RoID0gMDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXF1YWxpdGllc0xlbmd0aC0tOyAvLyBUaHJvdyBhd2F5IHRoZSBwcmV2aW91cyBlcXVhbGl0eS5cbiAgICAgICAgICAgIHBvaW50ZXIgPSBlcXVhbGl0aWVzTGVuZ3RoID4gMCA/IGVxdWFsaXRpZXNbZXF1YWxpdGllc0xlbmd0aCAtIDFdIDogLTE7XG4gICAgICAgICAgICBwb3N0SW5zID0gcG9zdERlbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjaGFuZ2VzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcG9pbnRlcisrO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcykge1xuICAgICAgdGhpcy5kaWZmQ2xlYW51cE1lcmdlKGRpZmZzKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgYSBkaWZmIGFycmF5IGludG8gYSBwcmV0dHkgSFRNTCByZXBvcnQuXG4gICAqIEBwYXJhbSB7IUFycmF5LjwhRGlmZk1hdGNoUGF0Y2guRGlmZj59IGRpZmZzIEFycmF5IG9mIGRpZmYgdHVwbGVzLlxuICAgKiBAcGFyYW0ge2ludGVnZXJ9IHN0cmluZyB0byBiZSBiZWF1dGlmaWVkLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IEhUTUwgcmVwcmVzZW50YXRpb24uXG4gICAqL1xuICBEaWZmTWF0Y2hQYXRjaC5wcm90b3R5cGUuZGlmZlByZXR0eUh0bWwgPSBmdW5jdGlvbiAoZGlmZnMpIHtcbiAgICB2YXIgaHRtbCA9IFtdO1xuICAgIGZvciAodmFyIHggPSAwOyB4IDwgZGlmZnMubGVuZ3RoOyB4KyspIHtcbiAgICAgIHZhciBvcCA9IGRpZmZzW3hdWzBdOyAvLyBPcGVyYXRpb24gKGluc2VydCwgZGVsZXRlLCBlcXVhbClcbiAgICAgIHZhciBkYXRhID0gZGlmZnNbeF1bMV07IC8vIFRleHQgb2YgY2hhbmdlLlxuICAgICAgc3dpdGNoIChvcCkge1xuICAgICAgICBjYXNlIERJRkZfSU5TRVJUOlxuICAgICAgICAgIGh0bWxbeF0gPSAnPGlucz4nICsgZXNjYXBlVGV4dChkYXRhKSArICc8L2lucz4nO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIERJRkZfREVMRVRFOlxuICAgICAgICAgIGh0bWxbeF0gPSAnPGRlbD4nICsgZXNjYXBlVGV4dChkYXRhKSArICc8L2RlbD4nO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIERJRkZfRVFVQUw6XG4gICAgICAgICAgaHRtbFt4XSA9ICc8c3Bhbj4nICsgZXNjYXBlVGV4dChkYXRhKSArICc8L3NwYW4+JztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGh0bWwuam9pbignJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIERldGVybWluZSB0aGUgY29tbW9uIHByZWZpeCBvZiB0d28gc3RyaW5ncy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQxIEZpcnN0IHN0cmluZy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQyIFNlY29uZCBzdHJpbmcuXG4gICAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIGNvbW1vbiB0byB0aGUgc3RhcnQgb2YgZWFjaFxuICAgKiAgICAgc3RyaW5nLlxuICAgKi9cbiAgRGlmZk1hdGNoUGF0Y2gucHJvdG90eXBlLmRpZmZDb21tb25QcmVmaXggPSBmdW5jdGlvbiAodGV4dDEsIHRleHQyKSB7XG4gICAgdmFyIHBvaW50ZXJtaWQsIHBvaW50ZXJtYXgsIHBvaW50ZXJtaW4sIHBvaW50ZXJzdGFydDtcblxuICAgIC8vIFF1aWNrIGNoZWNrIGZvciBjb21tb24gbnVsbCBjYXNlcy5cbiAgICBpZiAoIXRleHQxIHx8ICF0ZXh0MiB8fCB0ZXh0MS5jaGFyQXQoMCkgIT09IHRleHQyLmNoYXJBdCgwKSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLy8gQmluYXJ5IHNlYXJjaC5cbiAgICAvLyBQZXJmb3JtYW5jZSBhbmFseXNpczogaHR0cHM6Ly9uZWlsLmZyYXNlci5uYW1lL25ld3MvMjAwNy8xMC8wOS9cbiAgICBwb2ludGVybWluID0gMDtcbiAgICBwb2ludGVybWF4ID0gTWF0aC5taW4odGV4dDEubGVuZ3RoLCB0ZXh0Mi5sZW5ndGgpO1xuICAgIHBvaW50ZXJtaWQgPSBwb2ludGVybWF4O1xuICAgIHBvaW50ZXJzdGFydCA9IDA7XG4gICAgd2hpbGUgKHBvaW50ZXJtaW4gPCBwb2ludGVybWlkKSB7XG4gICAgICBpZiAodGV4dDEuc3Vic3RyaW5nKHBvaW50ZXJzdGFydCwgcG9pbnRlcm1pZCkgPT09IHRleHQyLnN1YnN0cmluZyhwb2ludGVyc3RhcnQsIHBvaW50ZXJtaWQpKSB7XG4gICAgICAgIHBvaW50ZXJtaW4gPSBwb2ludGVybWlkO1xuICAgICAgICBwb2ludGVyc3RhcnQgPSBwb2ludGVybWluO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9pbnRlcm1heCA9IHBvaW50ZXJtaWQ7XG4gICAgICB9XG4gICAgICBwb2ludGVybWlkID0gTWF0aC5mbG9vcigocG9pbnRlcm1heCAtIHBvaW50ZXJtaW4pIC8gMiArIHBvaW50ZXJtaW4pO1xuICAgIH1cbiAgICByZXR1cm4gcG9pbnRlcm1pZDtcbiAgfTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lIHRoZSBjb21tb24gc3VmZml4IG9mIHR3byBzdHJpbmdzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dDEgRmlyc3Qgc3RyaW5nLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dDIgU2Vjb25kIHN0cmluZy5cbiAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgY29tbW9uIHRvIHRoZSBlbmQgb2YgZWFjaCBzdHJpbmcuXG4gICAqL1xuICBEaWZmTWF0Y2hQYXRjaC5wcm90b3R5cGUuZGlmZkNvbW1vblN1ZmZpeCA9IGZ1bmN0aW9uICh0ZXh0MSwgdGV4dDIpIHtcbiAgICB2YXIgcG9pbnRlcm1pZCwgcG9pbnRlcm1heCwgcG9pbnRlcm1pbiwgcG9pbnRlcmVuZDtcblxuICAgIC8vIFF1aWNrIGNoZWNrIGZvciBjb21tb24gbnVsbCBjYXNlcy5cbiAgICBpZiAoIXRleHQxIHx8ICF0ZXh0MiB8fCB0ZXh0MS5jaGFyQXQodGV4dDEubGVuZ3RoIC0gMSkgIT09IHRleHQyLmNoYXJBdCh0ZXh0Mi5sZW5ndGggLSAxKSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLy8gQmluYXJ5IHNlYXJjaC5cbiAgICAvLyBQZXJmb3JtYW5jZSBhbmFseXNpczogaHR0cHM6Ly9uZWlsLmZyYXNlci5uYW1lL25ld3MvMjAwNy8xMC8wOS9cbiAgICBwb2ludGVybWluID0gMDtcbiAgICBwb2ludGVybWF4ID0gTWF0aC5taW4odGV4dDEubGVuZ3RoLCB0ZXh0Mi5sZW5ndGgpO1xuICAgIHBvaW50ZXJtaWQgPSBwb2ludGVybWF4O1xuICAgIHBvaW50ZXJlbmQgPSAwO1xuICAgIHdoaWxlIChwb2ludGVybWluIDwgcG9pbnRlcm1pZCkge1xuICAgICAgaWYgKHRleHQxLnN1YnN0cmluZyh0ZXh0MS5sZW5ndGggLSBwb2ludGVybWlkLCB0ZXh0MS5sZW5ndGggLSBwb2ludGVyZW5kKSA9PT0gdGV4dDIuc3Vic3RyaW5nKHRleHQyLmxlbmd0aCAtIHBvaW50ZXJtaWQsIHRleHQyLmxlbmd0aCAtIHBvaW50ZXJlbmQpKSB7XG4gICAgICAgIHBvaW50ZXJtaW4gPSBwb2ludGVybWlkO1xuICAgICAgICBwb2ludGVyZW5kID0gcG9pbnRlcm1pbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvaW50ZXJtYXggPSBwb2ludGVybWlkO1xuICAgICAgfVxuICAgICAgcG9pbnRlcm1pZCA9IE1hdGguZmxvb3IoKHBvaW50ZXJtYXggLSBwb2ludGVybWluKSAvIDIgKyBwb2ludGVybWluKTtcbiAgICB9XG4gICAgcmV0dXJuIHBvaW50ZXJtaWQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZpbmQgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gdHdvIHRleHRzLiAgQXNzdW1lcyB0aGF0IHRoZSB0ZXh0cyBkbyBub3RcbiAgICogaGF2ZSBhbnkgY29tbW9uIHByZWZpeCBvciBzdWZmaXguXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0MSBPbGQgc3RyaW5nIHRvIGJlIGRpZmZlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQyIE5ldyBzdHJpbmcgdG8gYmUgZGlmZmVkLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNoZWNrbGluZXMgU3BlZWR1cCBmbGFnLiAgSWYgZmFsc2UsIHRoZW4gZG9uJ3QgcnVuIGFcbiAgICogICAgIGxpbmUtbGV2ZWwgZGlmZiBmaXJzdCB0byBpZGVudGlmeSB0aGUgY2hhbmdlZCBhcmVhcy5cbiAgICogICAgIElmIHRydWUsIHRoZW4gcnVuIGEgZmFzdGVyLCBzbGlnaHRseSBsZXNzIG9wdGltYWwgZGlmZi5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGRlYWRsaW5lIFRpbWUgd2hlbiB0aGUgZGlmZiBzaG91bGQgYmUgY29tcGxldGUgYnkuXG4gICAqIEByZXR1cm4geyFBcnJheS48IURpZmZNYXRjaFBhdGNoLkRpZmY+fSBBcnJheSBvZiBkaWZmIHR1cGxlcy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIERpZmZNYXRjaFBhdGNoLnByb3RvdHlwZS5kaWZmQ29tcHV0ZSA9IGZ1bmN0aW9uICh0ZXh0MSwgdGV4dDIsIGNoZWNrbGluZXMsIGRlYWRsaW5lKSB7XG4gICAgdmFyIGRpZmZzLCBsb25ndGV4dCwgc2hvcnR0ZXh0LCBpLCBobSwgdGV4dDFBLCB0ZXh0MkEsIHRleHQxQiwgdGV4dDJCLCBtaWRDb21tb24sIGRpZmZzQSwgZGlmZnNCO1xuICAgIGlmICghdGV4dDEpIHtcbiAgICAgIC8vIEp1c3QgYWRkIHNvbWUgdGV4dCAoc3BlZWR1cCkuXG4gICAgICByZXR1cm4gW1tESUZGX0lOU0VSVCwgdGV4dDJdXTtcbiAgICB9XG4gICAgaWYgKCF0ZXh0Mikge1xuICAgICAgLy8gSnVzdCBkZWxldGUgc29tZSB0ZXh0IChzcGVlZHVwKS5cbiAgICAgIHJldHVybiBbW0RJRkZfREVMRVRFLCB0ZXh0MV1dO1xuICAgIH1cbiAgICBsb25ndGV4dCA9IHRleHQxLmxlbmd0aCA+IHRleHQyLmxlbmd0aCA/IHRleHQxIDogdGV4dDI7XG4gICAgc2hvcnR0ZXh0ID0gdGV4dDEubGVuZ3RoID4gdGV4dDIubGVuZ3RoID8gdGV4dDIgOiB0ZXh0MTtcbiAgICBpID0gbG9uZ3RleHQuaW5kZXhPZihzaG9ydHRleHQpO1xuICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgLy8gU2hvcnRlciB0ZXh0IGlzIGluc2lkZSB0aGUgbG9uZ2VyIHRleHQgKHNwZWVkdXApLlxuICAgICAgZGlmZnMgPSBbW0RJRkZfSU5TRVJULCBsb25ndGV4dC5zdWJzdHJpbmcoMCwgaSldLCBbRElGRl9FUVVBTCwgc2hvcnR0ZXh0XSwgW0RJRkZfSU5TRVJULCBsb25ndGV4dC5zdWJzdHJpbmcoaSArIHNob3J0dGV4dC5sZW5ndGgpXV07XG5cbiAgICAgIC8vIFN3YXAgaW5zZXJ0aW9ucyBmb3IgZGVsZXRpb25zIGlmIGRpZmYgaXMgcmV2ZXJzZWQuXG4gICAgICBpZiAodGV4dDEubGVuZ3RoID4gdGV4dDIubGVuZ3RoKSB7XG4gICAgICAgIGRpZmZzWzBdWzBdID0gZGlmZnNbMl1bMF0gPSBESUZGX0RFTEVURTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkaWZmcztcbiAgICB9XG4gICAgaWYgKHNob3J0dGV4dC5sZW5ndGggPT09IDEpIHtcbiAgICAgIC8vIFNpbmdsZSBjaGFyYWN0ZXIgc3RyaW5nLlxuICAgICAgLy8gQWZ0ZXIgdGhlIHByZXZpb3VzIHNwZWVkdXAsIHRoZSBjaGFyYWN0ZXIgY2FuJ3QgYmUgYW4gZXF1YWxpdHkuXG4gICAgICByZXR1cm4gW1tESUZGX0RFTEVURSwgdGV4dDFdLCBbRElGRl9JTlNFUlQsIHRleHQyXV07XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHRoZSBwcm9ibGVtIGNhbiBiZSBzcGxpdCBpbiB0d28uXG4gICAgaG0gPSB0aGlzLmRpZmZIYWxmTWF0Y2godGV4dDEsIHRleHQyKTtcbiAgICBpZiAoaG0pIHtcbiAgICAgIC8vIEEgaGFsZi1tYXRjaCB3YXMgZm91bmQsIHNvcnQgb3V0IHRoZSByZXR1cm4gZGF0YS5cbiAgICAgIHRleHQxQSA9IGhtWzBdO1xuICAgICAgdGV4dDFCID0gaG1bMV07XG4gICAgICB0ZXh0MkEgPSBobVsyXTtcbiAgICAgIHRleHQyQiA9IGhtWzNdO1xuICAgICAgbWlkQ29tbW9uID0gaG1bNF07XG5cbiAgICAgIC8vIFNlbmQgYm90aCBwYWlycyBvZmYgZm9yIHNlcGFyYXRlIHByb2Nlc3NpbmcuXG4gICAgICBkaWZmc0EgPSB0aGlzLkRpZmZNYWluKHRleHQxQSwgdGV4dDJBLCBjaGVja2xpbmVzLCBkZWFkbGluZSk7XG4gICAgICBkaWZmc0IgPSB0aGlzLkRpZmZNYWluKHRleHQxQiwgdGV4dDJCLCBjaGVja2xpbmVzLCBkZWFkbGluZSk7XG5cbiAgICAgIC8vIE1lcmdlIHRoZSByZXN1bHRzLlxuICAgICAgcmV0dXJuIGRpZmZzQS5jb25jYXQoW1tESUZGX0VRVUFMLCBtaWRDb21tb25dXSwgZGlmZnNCKTtcbiAgICB9XG4gICAgaWYgKGNoZWNrbGluZXMgJiYgdGV4dDEubGVuZ3RoID4gMTAwICYmIHRleHQyLmxlbmd0aCA+IDEwMCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGlmZkxpbmVNb2RlKHRleHQxLCB0ZXh0MiwgZGVhZGxpbmUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5kaWZmQmlzZWN0KHRleHQxLCB0ZXh0MiwgZGVhZGxpbmUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEbyB0aGUgdHdvIHRleHRzIHNoYXJlIGEgc3Vic3RyaW5nIHdoaWNoIGlzIGF0IGxlYXN0IGhhbGYgdGhlIGxlbmd0aCBvZiB0aGVcbiAgICogbG9uZ2VyIHRleHQ/XG4gICAqIFRoaXMgc3BlZWR1cCBjYW4gcHJvZHVjZSBub24tbWluaW1hbCBkaWZmcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQxIEZpcnN0IHN0cmluZy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQyIFNlY29uZCBzdHJpbmcuXG4gICAqIEByZXR1cm4ge0FycmF5LjxzdHJpbmc+fSBGaXZlIGVsZW1lbnQgQXJyYXksIGNvbnRhaW5pbmcgdGhlIHByZWZpeCBvZlxuICAgKiAgICAgdGV4dDEsIHRoZSBzdWZmaXggb2YgdGV4dDEsIHRoZSBwcmVmaXggb2YgdGV4dDIsIHRoZSBzdWZmaXggb2ZcbiAgICogICAgIHRleHQyIGFuZCB0aGUgY29tbW9uIG1pZGRsZS4gIE9yIG51bGwgaWYgdGhlcmUgd2FzIG5vIG1hdGNoLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgRGlmZk1hdGNoUGF0Y2gucHJvdG90eXBlLmRpZmZIYWxmTWF0Y2ggPSBmdW5jdGlvbiAodGV4dDEsIHRleHQyKSB7XG4gICAgdmFyIGxvbmd0ZXh0LCBzaG9ydHRleHQsIGRtcCwgdGV4dDFBLCB0ZXh0MkIsIHRleHQyQSwgdGV4dDFCLCBtaWRDb21tb24sIGhtMSwgaG0yLCBobTtcbiAgICBsb25ndGV4dCA9IHRleHQxLmxlbmd0aCA+IHRleHQyLmxlbmd0aCA/IHRleHQxIDogdGV4dDI7XG4gICAgc2hvcnR0ZXh0ID0gdGV4dDEubGVuZ3RoID4gdGV4dDIubGVuZ3RoID8gdGV4dDIgOiB0ZXh0MTtcbiAgICBpZiAobG9uZ3RleHQubGVuZ3RoIDwgNCB8fCBzaG9ydHRleHQubGVuZ3RoICogMiA8IGxvbmd0ZXh0Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7IC8vIFBvaW50bGVzcy5cbiAgICB9XG4gICAgZG1wID0gdGhpczsgLy8gJ3RoaXMnIGJlY29tZXMgJ3dpbmRvdycgaW4gYSBjbG9zdXJlLlxuXG4gICAgLyoqXG4gICAgICogRG9lcyBhIHN1YnN0cmluZyBvZiBzaG9ydHRleHQgZXhpc3Qgd2l0aGluIGxvbmd0ZXh0IHN1Y2ggdGhhdCB0aGUgc3Vic3RyaW5nXG4gICAgICogaXMgYXQgbGVhc3QgaGFsZiB0aGUgbGVuZ3RoIG9mIGxvbmd0ZXh0P1xuICAgICAqIENsb3N1cmUsIGJ1dCBkb2VzIG5vdCByZWZlcmVuY2UgYW55IGV4dGVybmFsIHZhcmlhYmxlcy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbG9uZ3RleHQgTG9uZ2VyIHN0cmluZy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2hvcnR0ZXh0IFNob3J0ZXIgc3RyaW5nLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpIFN0YXJ0IGluZGV4IG9mIHF1YXJ0ZXIgbGVuZ3RoIHN1YnN0cmluZyB3aXRoaW4gbG9uZ3RleHQuXG4gICAgICogQHJldHVybiB7QXJyYXkuPHN0cmluZz59IEZpdmUgZWxlbWVudCBBcnJheSwgY29udGFpbmluZyB0aGUgcHJlZml4IG9mXG4gICAgICogICAgIGxvbmd0ZXh0LCB0aGUgc3VmZml4IG9mIGxvbmd0ZXh0LCB0aGUgcHJlZml4IG9mIHNob3J0dGV4dCwgdGhlIHN1ZmZpeFxuICAgICAqICAgICBvZiBzaG9ydHRleHQgYW5kIHRoZSBjb21tb24gbWlkZGxlLiAgT3IgbnVsbCBpZiB0aGVyZSB3YXMgbm8gbWF0Y2guXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkaWZmSGFsZk1hdGNoSShsb25ndGV4dCwgc2hvcnR0ZXh0LCBpKSB7XG4gICAgICB2YXIgc2VlZCwgaiwgYmVzdENvbW1vbiwgcHJlZml4TGVuZ3RoLCBzdWZmaXhMZW5ndGgsIGJlc3RMb25ndGV4dEEsIGJlc3RMb25ndGV4dEIsIGJlc3RTaG9ydHRleHRBLCBiZXN0U2hvcnR0ZXh0QjtcblxuICAgICAgLy8gU3RhcnQgd2l0aCBhIDEvNCBsZW5ndGggc3Vic3RyaW5nIGF0IHBvc2l0aW9uIGkgYXMgYSBzZWVkLlxuICAgICAgc2VlZCA9IGxvbmd0ZXh0LnN1YnN0cmluZyhpLCBpICsgTWF0aC5mbG9vcihsb25ndGV4dC5sZW5ndGggLyA0KSk7XG4gICAgICBqID0gLTE7XG4gICAgICBiZXN0Q29tbW9uID0gJyc7XG4gICAgICB3aGlsZSAoKGogPSBzaG9ydHRleHQuaW5kZXhPZihzZWVkLCBqICsgMSkpICE9PSAtMSkge1xuICAgICAgICBwcmVmaXhMZW5ndGggPSBkbXAuZGlmZkNvbW1vblByZWZpeChsb25ndGV4dC5zdWJzdHJpbmcoaSksIHNob3J0dGV4dC5zdWJzdHJpbmcoaikpO1xuICAgICAgICBzdWZmaXhMZW5ndGggPSBkbXAuZGlmZkNvbW1vblN1ZmZpeChsb25ndGV4dC5zdWJzdHJpbmcoMCwgaSksIHNob3J0dGV4dC5zdWJzdHJpbmcoMCwgaikpO1xuICAgICAgICBpZiAoYmVzdENvbW1vbi5sZW5ndGggPCBzdWZmaXhMZW5ndGggKyBwcmVmaXhMZW5ndGgpIHtcbiAgICAgICAgICBiZXN0Q29tbW9uID0gc2hvcnR0ZXh0LnN1YnN0cmluZyhqIC0gc3VmZml4TGVuZ3RoLCBqKSArIHNob3J0dGV4dC5zdWJzdHJpbmcoaiwgaiArIHByZWZpeExlbmd0aCk7XG4gICAgICAgICAgYmVzdExvbmd0ZXh0QSA9IGxvbmd0ZXh0LnN1YnN0cmluZygwLCBpIC0gc3VmZml4TGVuZ3RoKTtcbiAgICAgICAgICBiZXN0TG9uZ3RleHRCID0gbG9uZ3RleHQuc3Vic3RyaW5nKGkgKyBwcmVmaXhMZW5ndGgpO1xuICAgICAgICAgIGJlc3RTaG9ydHRleHRBID0gc2hvcnR0ZXh0LnN1YnN0cmluZygwLCBqIC0gc3VmZml4TGVuZ3RoKTtcbiAgICAgICAgICBiZXN0U2hvcnR0ZXh0QiA9IHNob3J0dGV4dC5zdWJzdHJpbmcoaiArIHByZWZpeExlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChiZXN0Q29tbW9uLmxlbmd0aCAqIDIgPj0gbG9uZ3RleHQubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBbYmVzdExvbmd0ZXh0QSwgYmVzdExvbmd0ZXh0QiwgYmVzdFNob3J0dGV4dEEsIGJlc3RTaG9ydHRleHRCLCBiZXN0Q29tbW9uXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZpcnN0IGNoZWNrIGlmIHRoZSBzZWNvbmQgcXVhcnRlciBpcyB0aGUgc2VlZCBmb3IgYSBoYWxmLW1hdGNoLlxuICAgIGhtMSA9IGRpZmZIYWxmTWF0Y2hJKGxvbmd0ZXh0LCBzaG9ydHRleHQsIE1hdGguY2VpbChsb25ndGV4dC5sZW5ndGggLyA0KSk7XG5cbiAgICAvLyBDaGVjayBhZ2FpbiBiYXNlZCBvbiB0aGUgdGhpcmQgcXVhcnRlci5cbiAgICBobTIgPSBkaWZmSGFsZk1hdGNoSShsb25ndGV4dCwgc2hvcnR0ZXh0LCBNYXRoLmNlaWwobG9uZ3RleHQubGVuZ3RoIC8gMikpO1xuICAgIGlmICghaG0xICYmICFobTIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSBpZiAoIWhtMikge1xuICAgICAgaG0gPSBobTE7XG4gICAgfSBlbHNlIGlmICghaG0xKSB7XG4gICAgICBobSA9IGhtMjtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQm90aCBtYXRjaGVkLiAgU2VsZWN0IHRoZSBsb25nZXN0LlxuICAgICAgaG0gPSBobTFbNF0ubGVuZ3RoID4gaG0yWzRdLmxlbmd0aCA/IGhtMSA6IGhtMjtcbiAgICB9XG5cbiAgICAvLyBBIGhhbGYtbWF0Y2ggd2FzIGZvdW5kLCBzb3J0IG91dCB0aGUgcmV0dXJuIGRhdGEuXG4gICAgaWYgKHRleHQxLmxlbmd0aCA+IHRleHQyLmxlbmd0aCkge1xuICAgICAgdGV4dDFBID0gaG1bMF07XG4gICAgICB0ZXh0MUIgPSBobVsxXTtcbiAgICAgIHRleHQyQSA9IGhtWzJdO1xuICAgICAgdGV4dDJCID0gaG1bM107XG4gICAgfSBlbHNlIHtcbiAgICAgIHRleHQyQSA9IGhtWzBdO1xuICAgICAgdGV4dDJCID0gaG1bMV07XG4gICAgICB0ZXh0MUEgPSBobVsyXTtcbiAgICAgIHRleHQxQiA9IGhtWzNdO1xuICAgIH1cbiAgICBtaWRDb21tb24gPSBobVs0XTtcbiAgICByZXR1cm4gW3RleHQxQSwgdGV4dDFCLCB0ZXh0MkEsIHRleHQyQiwgbWlkQ29tbW9uXTtcbiAgfTtcblxuICAvKipcbiAgICogRG8gYSBxdWljayBsaW5lLWxldmVsIGRpZmYgb24gYm90aCBzdHJpbmdzLCB0aGVuIHJlZGlmZiB0aGUgcGFydHMgZm9yXG4gICAqIGdyZWF0ZXIgYWNjdXJhY3kuXG4gICAqIFRoaXMgc3BlZWR1cCBjYW4gcHJvZHVjZSBub24tbWluaW1hbCBkaWZmcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQxIE9sZCBzdHJpbmcgdG8gYmUgZGlmZmVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dDIgTmV3IHN0cmluZyB0byBiZSBkaWZmZWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkZWFkbGluZSBUaW1lIHdoZW4gdGhlIGRpZmYgc2hvdWxkIGJlIGNvbXBsZXRlIGJ5LlxuICAgKiBAcmV0dXJuIHshQXJyYXkuPCFEaWZmTWF0Y2hQYXRjaC5EaWZmPn0gQXJyYXkgb2YgZGlmZiB0dXBsZXMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBEaWZmTWF0Y2hQYXRjaC5wcm90b3R5cGUuZGlmZkxpbmVNb2RlID0gZnVuY3Rpb24gKHRleHQxLCB0ZXh0MiwgZGVhZGxpbmUpIHtcbiAgICB2YXIgYSwgZGlmZnMsIGxpbmVhcnJheSwgcG9pbnRlciwgY291bnRJbnNlcnQsIGNvdW50RGVsZXRlLCB0ZXh0SW5zZXJ0LCB0ZXh0RGVsZXRlLCBqO1xuXG4gICAgLy8gU2NhbiB0aGUgdGV4dCBvbiBhIGxpbmUtYnktbGluZSBiYXNpcyBmaXJzdC5cbiAgICBhID0gdGhpcy5kaWZmTGluZXNUb0NoYXJzKHRleHQxLCB0ZXh0Mik7XG4gICAgdGV4dDEgPSBhLmNoYXJzMTtcbiAgICB0ZXh0MiA9IGEuY2hhcnMyO1xuICAgIGxpbmVhcnJheSA9IGEubGluZUFycmF5O1xuICAgIGRpZmZzID0gdGhpcy5EaWZmTWFpbih0ZXh0MSwgdGV4dDIsIGZhbHNlLCBkZWFkbGluZSk7XG5cbiAgICAvLyBDb252ZXJ0IHRoZSBkaWZmIGJhY2sgdG8gb3JpZ2luYWwgdGV4dC5cbiAgICB0aGlzLmRpZmZDaGFyc1RvTGluZXMoZGlmZnMsIGxpbmVhcnJheSk7XG5cbiAgICAvLyBFbGltaW5hdGUgZnJlYWsgbWF0Y2hlcyAoZS5nLiBibGFuayBsaW5lcylcbiAgICB0aGlzLmRpZmZDbGVhbnVwU2VtYW50aWMoZGlmZnMpO1xuXG4gICAgLy8gUmVkaWZmIGFueSByZXBsYWNlbWVudCBibG9ja3MsIHRoaXMgdGltZSBjaGFyYWN0ZXItYnktY2hhcmFjdGVyLlxuICAgIC8vIEFkZCBhIGR1bW15IGVudHJ5IGF0IHRoZSBlbmQuXG4gICAgZGlmZnMucHVzaChbRElGRl9FUVVBTCwgJyddKTtcbiAgICBwb2ludGVyID0gMDtcbiAgICBjb3VudERlbGV0ZSA9IDA7XG4gICAgY291bnRJbnNlcnQgPSAwO1xuICAgIHRleHREZWxldGUgPSAnJztcbiAgICB0ZXh0SW5zZXJ0ID0gJyc7XG4gICAgd2hpbGUgKHBvaW50ZXIgPCBkaWZmcy5sZW5ndGgpIHtcbiAgICAgIHN3aXRjaCAoZGlmZnNbcG9pbnRlcl1bMF0pIHtcbiAgICAgICAgY2FzZSBESUZGX0lOU0VSVDpcbiAgICAgICAgICBjb3VudEluc2VydCsrO1xuICAgICAgICAgIHRleHRJbnNlcnQgKz0gZGlmZnNbcG9pbnRlcl1bMV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgRElGRl9ERUxFVEU6XG4gICAgICAgICAgY291bnREZWxldGUrKztcbiAgICAgICAgICB0ZXh0RGVsZXRlICs9IGRpZmZzW3BvaW50ZXJdWzFdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIERJRkZfRVFVQUw6XG4gICAgICAgICAgLy8gVXBvbiByZWFjaGluZyBhbiBlcXVhbGl0eSwgY2hlY2sgZm9yIHByaW9yIHJlZHVuZGFuY2llcy5cbiAgICAgICAgICBpZiAoY291bnREZWxldGUgPj0gMSAmJiBjb3VudEluc2VydCA+PSAxKSB7XG4gICAgICAgICAgICAvLyBEZWxldGUgdGhlIG9mZmVuZGluZyByZWNvcmRzIGFuZCBhZGQgdGhlIG1lcmdlZCBvbmVzLlxuICAgICAgICAgICAgZGlmZnMuc3BsaWNlKHBvaW50ZXIgLSBjb3VudERlbGV0ZSAtIGNvdW50SW5zZXJ0LCBjb3VudERlbGV0ZSArIGNvdW50SW5zZXJ0KTtcbiAgICAgICAgICAgIHBvaW50ZXIgPSBwb2ludGVyIC0gY291bnREZWxldGUgLSBjb3VudEluc2VydDtcbiAgICAgICAgICAgIGEgPSB0aGlzLkRpZmZNYWluKHRleHREZWxldGUsIHRleHRJbnNlcnQsIGZhbHNlLCBkZWFkbGluZSk7XG4gICAgICAgICAgICBmb3IgKGogPSBhLmxlbmd0aCAtIDE7IGogPj0gMDsgai0tKSB7XG4gICAgICAgICAgICAgIGRpZmZzLnNwbGljZShwb2ludGVyLCAwLCBhW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvaW50ZXIgPSBwb2ludGVyICsgYS5sZW5ndGg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvdW50SW5zZXJ0ID0gMDtcbiAgICAgICAgICBjb3VudERlbGV0ZSA9IDA7XG4gICAgICAgICAgdGV4dERlbGV0ZSA9ICcnO1xuICAgICAgICAgIHRleHRJbnNlcnQgPSAnJztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHBvaW50ZXIrKztcbiAgICB9XG4gICAgZGlmZnMucG9wKCk7IC8vIFJlbW92ZSB0aGUgZHVtbXkgZW50cnkgYXQgdGhlIGVuZC5cblxuICAgIHJldHVybiBkaWZmcztcbiAgfTtcblxuICAvKipcbiAgICogRmluZCB0aGUgJ21pZGRsZSBzbmFrZScgb2YgYSBkaWZmLCBzcGxpdCB0aGUgcHJvYmxlbSBpbiB0d29cbiAgICogYW5kIHJldHVybiB0aGUgcmVjdXJzaXZlbHkgY29uc3RydWN0ZWQgZGlmZi5cbiAgICogU2VlIE15ZXJzIDE5ODYgcGFwZXI6IEFuIE8oTkQpIERpZmZlcmVuY2UgQWxnb3JpdGhtIGFuZCBJdHMgVmFyaWF0aW9ucy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQxIE9sZCBzdHJpbmcgdG8gYmUgZGlmZmVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dDIgTmV3IHN0cmluZyB0byBiZSBkaWZmZWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkZWFkbGluZSBUaW1lIGF0IHdoaWNoIHRvIGJhaWwgaWYgbm90IHlldCBjb21wbGV0ZS5cbiAgICogQHJldHVybiB7IUFycmF5LjwhRGlmZk1hdGNoUGF0Y2guRGlmZj59IEFycmF5IG9mIGRpZmYgdHVwbGVzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgRGlmZk1hdGNoUGF0Y2gucHJvdG90eXBlLmRpZmZCaXNlY3QgPSBmdW5jdGlvbiAodGV4dDEsIHRleHQyLCBkZWFkbGluZSkge1xuICAgIHZhciB0ZXh0MUxlbmd0aCwgdGV4dDJMZW5ndGgsIG1heEQsIHZPZmZzZXQsIHZMZW5ndGgsIHYxLCB2MiwgeCwgZGVsdGEsIGZyb250LCBrMXN0YXJ0LCBrMWVuZCwgazJzdGFydCwgazJlbmQsIGsyT2Zmc2V0LCBrMU9mZnNldCwgeDEsIHgyLCB5MSwgeTIsIGQsIGsxLCBrMjtcblxuICAgIC8vIENhY2hlIHRoZSB0ZXh0IGxlbmd0aHMgdG8gcHJldmVudCBtdWx0aXBsZSBjYWxscy5cbiAgICB0ZXh0MUxlbmd0aCA9IHRleHQxLmxlbmd0aDtcbiAgICB0ZXh0Mkxlbmd0aCA9IHRleHQyLmxlbmd0aDtcbiAgICBtYXhEID0gTWF0aC5jZWlsKCh0ZXh0MUxlbmd0aCArIHRleHQyTGVuZ3RoKSAvIDIpO1xuICAgIHZPZmZzZXQgPSBtYXhEO1xuICAgIHZMZW5ndGggPSAyICogbWF4RDtcbiAgICB2MSA9IG5ldyBBcnJheSh2TGVuZ3RoKTtcbiAgICB2MiA9IG5ldyBBcnJheSh2TGVuZ3RoKTtcblxuICAgIC8vIFNldHRpbmcgYWxsIGVsZW1lbnRzIHRvIC0xIGlzIGZhc3RlciBpbiBDaHJvbWUgJiBGaXJlZm94IHRoYW4gbWl4aW5nXG4gICAgLy8gaW50ZWdlcnMgYW5kIHVuZGVmaW5lZC5cbiAgICBmb3IgKHggPSAwOyB4IDwgdkxlbmd0aDsgeCsrKSB7XG4gICAgICB2MVt4XSA9IC0xO1xuICAgICAgdjJbeF0gPSAtMTtcbiAgICB9XG4gICAgdjFbdk9mZnNldCArIDFdID0gMDtcbiAgICB2Mlt2T2Zmc2V0ICsgMV0gPSAwO1xuICAgIGRlbHRhID0gdGV4dDFMZW5ndGggLSB0ZXh0Mkxlbmd0aDtcblxuICAgIC8vIElmIHRoZSB0b3RhbCBudW1iZXIgb2YgY2hhcmFjdGVycyBpcyBvZGQsIHRoZW4gdGhlIGZyb250IHBhdGggd2lsbCBjb2xsaWRlXG4gICAgLy8gd2l0aCB0aGUgcmV2ZXJzZSBwYXRoLlxuICAgIGZyb250ID0gZGVsdGEgJSAyICE9PSAwO1xuXG4gICAgLy8gT2Zmc2V0cyBmb3Igc3RhcnQgYW5kIGVuZCBvZiBrIGxvb3AuXG4gICAgLy8gUHJldmVudHMgbWFwcGluZyBvZiBzcGFjZSBiZXlvbmQgdGhlIGdyaWQuXG4gICAgazFzdGFydCA9IDA7XG4gICAgazFlbmQgPSAwO1xuICAgIGsyc3RhcnQgPSAwO1xuICAgIGsyZW5kID0gMDtcbiAgICBmb3IgKGQgPSAwOyBkIDwgbWF4RDsgZCsrKSB7XG4gICAgICAvLyBCYWlsIG91dCBpZiBkZWFkbGluZSBpcyByZWFjaGVkLlxuICAgICAgaWYgKERhdGUubm93KCkgPiBkZWFkbGluZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gV2FsayB0aGUgZnJvbnQgcGF0aCBvbmUgc3RlcC5cbiAgICAgIGZvciAoazEgPSAtZCArIGsxc3RhcnQ7IGsxIDw9IGQgLSBrMWVuZDsgazEgKz0gMikge1xuICAgICAgICBrMU9mZnNldCA9IHZPZmZzZXQgKyBrMTtcbiAgICAgICAgaWYgKGsxID09PSAtZCB8fCBrMSAhPT0gZCAmJiB2MVtrMU9mZnNldCAtIDFdIDwgdjFbazFPZmZzZXQgKyAxXSkge1xuICAgICAgICAgIHgxID0gdjFbazFPZmZzZXQgKyAxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB4MSA9IHYxW2sxT2Zmc2V0IC0gMV0gKyAxO1xuICAgICAgICB9XG4gICAgICAgIHkxID0geDEgLSBrMTtcbiAgICAgICAgd2hpbGUgKHgxIDwgdGV4dDFMZW5ndGggJiYgeTEgPCB0ZXh0Mkxlbmd0aCAmJiB0ZXh0MS5jaGFyQXQoeDEpID09PSB0ZXh0Mi5jaGFyQXQoeTEpKSB7XG4gICAgICAgICAgeDErKztcbiAgICAgICAgICB5MSsrO1xuICAgICAgICB9XG4gICAgICAgIHYxW2sxT2Zmc2V0XSA9IHgxO1xuICAgICAgICBpZiAoeDEgPiB0ZXh0MUxlbmd0aCkge1xuICAgICAgICAgIC8vIFJhbiBvZmYgdGhlIHJpZ2h0IG9mIHRoZSBncmFwaC5cbiAgICAgICAgICBrMWVuZCArPSAyO1xuICAgICAgICB9IGVsc2UgaWYgKHkxID4gdGV4dDJMZW5ndGgpIHtcbiAgICAgICAgICAvLyBSYW4gb2ZmIHRoZSBib3R0b20gb2YgdGhlIGdyYXBoLlxuICAgICAgICAgIGsxc3RhcnQgKz0gMjtcbiAgICAgICAgfSBlbHNlIGlmIChmcm9udCkge1xuICAgICAgICAgIGsyT2Zmc2V0ID0gdk9mZnNldCArIGRlbHRhIC0gazE7XG4gICAgICAgICAgaWYgKGsyT2Zmc2V0ID49IDAgJiYgazJPZmZzZXQgPCB2TGVuZ3RoICYmIHYyW2syT2Zmc2V0XSAhPT0gLTEpIHtcbiAgICAgICAgICAgIC8vIE1pcnJvciB4MiBvbnRvIHRvcC1sZWZ0IGNvb3JkaW5hdGUgc3lzdGVtLlxuICAgICAgICAgICAgeDIgPSB0ZXh0MUxlbmd0aCAtIHYyW2syT2Zmc2V0XTtcbiAgICAgICAgICAgIGlmICh4MSA+PSB4Mikge1xuICAgICAgICAgICAgICAvLyBPdmVybGFwIGRldGVjdGVkLlxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kaWZmQmlzZWN0U3BsaXQodGV4dDEsIHRleHQyLCB4MSwgeTEsIGRlYWRsaW5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gV2FsayB0aGUgcmV2ZXJzZSBwYXRoIG9uZSBzdGVwLlxuICAgICAgZm9yIChrMiA9IC1kICsgazJzdGFydDsgazIgPD0gZCAtIGsyZW5kOyBrMiArPSAyKSB7XG4gICAgICAgIGsyT2Zmc2V0ID0gdk9mZnNldCArIGsyO1xuICAgICAgICBpZiAoazIgPT09IC1kIHx8IGsyICE9PSBkICYmIHYyW2syT2Zmc2V0IC0gMV0gPCB2MltrMk9mZnNldCArIDFdKSB7XG4gICAgICAgICAgeDIgPSB2MltrMk9mZnNldCArIDFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHgyID0gdjJbazJPZmZzZXQgLSAxXSArIDE7XG4gICAgICAgIH1cbiAgICAgICAgeTIgPSB4MiAtIGsyO1xuICAgICAgICB3aGlsZSAoeDIgPCB0ZXh0MUxlbmd0aCAmJiB5MiA8IHRleHQyTGVuZ3RoICYmIHRleHQxLmNoYXJBdCh0ZXh0MUxlbmd0aCAtIHgyIC0gMSkgPT09IHRleHQyLmNoYXJBdCh0ZXh0Mkxlbmd0aCAtIHkyIC0gMSkpIHtcbiAgICAgICAgICB4MisrO1xuICAgICAgICAgIHkyKys7XG4gICAgICAgIH1cbiAgICAgICAgdjJbazJPZmZzZXRdID0geDI7XG4gICAgICAgIGlmICh4MiA+IHRleHQxTGVuZ3RoKSB7XG4gICAgICAgICAgLy8gUmFuIG9mZiB0aGUgbGVmdCBvZiB0aGUgZ3JhcGguXG4gICAgICAgICAgazJlbmQgKz0gMjtcbiAgICAgICAgfSBlbHNlIGlmICh5MiA+IHRleHQyTGVuZ3RoKSB7XG4gICAgICAgICAgLy8gUmFuIG9mZiB0aGUgdG9wIG9mIHRoZSBncmFwaC5cbiAgICAgICAgICBrMnN0YXJ0ICs9IDI7XG4gICAgICAgIH0gZWxzZSBpZiAoIWZyb250KSB7XG4gICAgICAgICAgazFPZmZzZXQgPSB2T2Zmc2V0ICsgZGVsdGEgLSBrMjtcbiAgICAgICAgICBpZiAoazFPZmZzZXQgPj0gMCAmJiBrMU9mZnNldCA8IHZMZW5ndGggJiYgdjFbazFPZmZzZXRdICE9PSAtMSkge1xuICAgICAgICAgICAgeDEgPSB2MVtrMU9mZnNldF07XG4gICAgICAgICAgICB5MSA9IHZPZmZzZXQgKyB4MSAtIGsxT2Zmc2V0O1xuXG4gICAgICAgICAgICAvLyBNaXJyb3IgeDIgb250byB0b3AtbGVmdCBjb29yZGluYXRlIHN5c3RlbS5cbiAgICAgICAgICAgIHgyID0gdGV4dDFMZW5ndGggLSB4MjtcbiAgICAgICAgICAgIGlmICh4MSA+PSB4Mikge1xuICAgICAgICAgICAgICAvLyBPdmVybGFwIGRldGVjdGVkLlxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kaWZmQmlzZWN0U3BsaXQodGV4dDEsIHRleHQyLCB4MSwgeTEsIGRlYWRsaW5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEaWZmIHRvb2sgdG9vIGxvbmcgYW5kIGhpdCB0aGUgZGVhZGxpbmUgb3JcbiAgICAvLyBudW1iZXIgb2YgZGlmZnMgZXF1YWxzIG51bWJlciBvZiBjaGFyYWN0ZXJzLCBubyBjb21tb25hbGl0eSBhdCBhbGwuXG4gICAgcmV0dXJuIFtbRElGRl9ERUxFVEUsIHRleHQxXSwgW0RJRkZfSU5TRVJULCB0ZXh0Ml1dO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHaXZlbiB0aGUgbG9jYXRpb24gb2YgdGhlICdtaWRkbGUgc25ha2UnLCBzcGxpdCB0aGUgZGlmZiBpbiB0d28gcGFydHNcbiAgICogYW5kIHJlY3Vyc2UuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0MSBPbGQgc3RyaW5nIHRvIGJlIGRpZmZlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQyIE5ldyBzdHJpbmcgdG8gYmUgZGlmZmVkLlxuICAgKiBAcGFyYW0ge251bWJlcn0geCBJbmRleCBvZiBzcGxpdCBwb2ludCBpbiB0ZXh0MS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHkgSW5kZXggb2Ygc3BsaXQgcG9pbnQgaW4gdGV4dDIuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkZWFkbGluZSBUaW1lIGF0IHdoaWNoIHRvIGJhaWwgaWYgbm90IHlldCBjb21wbGV0ZS5cbiAgICogQHJldHVybiB7IUFycmF5LjwhRGlmZk1hdGNoUGF0Y2guRGlmZj59IEFycmF5IG9mIGRpZmYgdHVwbGVzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgRGlmZk1hdGNoUGF0Y2gucHJvdG90eXBlLmRpZmZCaXNlY3RTcGxpdCA9IGZ1bmN0aW9uICh0ZXh0MSwgdGV4dDIsIHgsIHksIGRlYWRsaW5lKSB7XG4gICAgdmFyIHRleHQxYSwgdGV4dDFiLCB0ZXh0MmEsIHRleHQyYiwgZGlmZnMsIGRpZmZzYjtcbiAgICB0ZXh0MWEgPSB0ZXh0MS5zdWJzdHJpbmcoMCwgeCk7XG4gICAgdGV4dDJhID0gdGV4dDIuc3Vic3RyaW5nKDAsIHkpO1xuICAgIHRleHQxYiA9IHRleHQxLnN1YnN0cmluZyh4KTtcbiAgICB0ZXh0MmIgPSB0ZXh0Mi5zdWJzdHJpbmcoeSk7XG5cbiAgICAvLyBDb21wdXRlIGJvdGggZGlmZnMgc2VyaWFsbHkuXG4gICAgZGlmZnMgPSB0aGlzLkRpZmZNYWluKHRleHQxYSwgdGV4dDJhLCBmYWxzZSwgZGVhZGxpbmUpO1xuICAgIGRpZmZzYiA9IHRoaXMuRGlmZk1haW4odGV4dDFiLCB0ZXh0MmIsIGZhbHNlLCBkZWFkbGluZSk7XG4gICAgcmV0dXJuIGRpZmZzLmNvbmNhdChkaWZmc2IpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZWR1Y2UgdGhlIG51bWJlciBvZiBlZGl0cyBieSBlbGltaW5hdGluZyBzZW1hbnRpY2FsbHkgdHJpdmlhbCBlcXVhbGl0aWVzLlxuICAgKiBAcGFyYW0geyFBcnJheS48IURpZmZNYXRjaFBhdGNoLkRpZmY+fSBkaWZmcyBBcnJheSBvZiBkaWZmIHR1cGxlcy5cbiAgICovXG4gIERpZmZNYXRjaFBhdGNoLnByb3RvdHlwZS5kaWZmQ2xlYW51cFNlbWFudGljID0gZnVuY3Rpb24gKGRpZmZzKSB7XG4gICAgdmFyIGNoYW5nZXMgPSBmYWxzZTtcbiAgICB2YXIgZXF1YWxpdGllcyA9IFtdOyAvLyBTdGFjayBvZiBpbmRpY2VzIHdoZXJlIGVxdWFsaXRpZXMgYXJlIGZvdW5kLlxuICAgIHZhciBlcXVhbGl0aWVzTGVuZ3RoID0gMDsgLy8gS2VlcGluZyBvdXIgb3duIGxlbmd0aCB2YXIgaXMgZmFzdGVyIGluIEpTLlxuICAgIC8qKiBAdHlwZSB7P3N0cmluZ30gKi9cbiAgICB2YXIgbGFzdGVxdWFsaXR5ID0gbnVsbDtcblxuICAgIC8vIEFsd2F5cyBlcXVhbCB0byBkaWZmc1tlcXVhbGl0aWVzW2VxdWFsaXRpZXNMZW5ndGggLSAxXV1bMV1cbiAgICB2YXIgcG9pbnRlciA9IDA7IC8vIEluZGV4IG9mIGN1cnJlbnQgcG9zaXRpb24uXG5cbiAgICAvLyBOdW1iZXIgb2YgY2hhcmFjdGVycyB0aGF0IGNoYW5nZWQgcHJpb3IgdG8gdGhlIGVxdWFsaXR5LlxuICAgIHZhciBsZW5ndGhJbnNlcnRpb25zMSA9IDA7XG4gICAgdmFyIGxlbmd0aERlbGV0aW9uczEgPSAwO1xuXG4gICAgLy8gTnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCBjaGFuZ2VkIGFmdGVyIHRoZSBlcXVhbGl0eS5cbiAgICB2YXIgbGVuZ3RoSW5zZXJ0aW9uczIgPSAwO1xuICAgIHZhciBsZW5ndGhEZWxldGlvbnMyID0gMDtcbiAgICB3aGlsZSAocG9pbnRlciA8IGRpZmZzLmxlbmd0aCkge1xuICAgICAgaWYgKGRpZmZzW3BvaW50ZXJdWzBdID09PSBESUZGX0VRVUFMKSB7XG4gICAgICAgIC8vIEVxdWFsaXR5IGZvdW5kLlxuICAgICAgICBlcXVhbGl0aWVzW2VxdWFsaXRpZXNMZW5ndGgrK10gPSBwb2ludGVyO1xuICAgICAgICBsZW5ndGhJbnNlcnRpb25zMSA9IGxlbmd0aEluc2VydGlvbnMyO1xuICAgICAgICBsZW5ndGhEZWxldGlvbnMxID0gbGVuZ3RoRGVsZXRpb25zMjtcbiAgICAgICAgbGVuZ3RoSW5zZXJ0aW9uczIgPSAwO1xuICAgICAgICBsZW5ndGhEZWxldGlvbnMyID0gMDtcbiAgICAgICAgbGFzdGVxdWFsaXR5ID0gZGlmZnNbcG9pbnRlcl1bMV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBBbiBpbnNlcnRpb24gb3IgZGVsZXRpb24uXG4gICAgICAgIGlmIChkaWZmc1twb2ludGVyXVswXSA9PT0gRElGRl9JTlNFUlQpIHtcbiAgICAgICAgICBsZW5ndGhJbnNlcnRpb25zMiArPSBkaWZmc1twb2ludGVyXVsxXS5sZW5ndGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGVuZ3RoRGVsZXRpb25zMiArPSBkaWZmc1twb2ludGVyXVsxXS5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFbGltaW5hdGUgYW4gZXF1YWxpdHkgdGhhdCBpcyBzbWFsbGVyIG9yIGVxdWFsIHRvIHRoZSBlZGl0cyBvbiBib3RoXG4gICAgICAgIC8vIHNpZGVzIG9mIGl0LlxuICAgICAgICBpZiAobGFzdGVxdWFsaXR5ICYmIGxhc3RlcXVhbGl0eS5sZW5ndGggPD0gTWF0aC5tYXgobGVuZ3RoSW5zZXJ0aW9uczEsIGxlbmd0aERlbGV0aW9uczEpICYmIGxhc3RlcXVhbGl0eS5sZW5ndGggPD0gTWF0aC5tYXgobGVuZ3RoSW5zZXJ0aW9uczIsIGxlbmd0aERlbGV0aW9uczIpKSB7XG4gICAgICAgICAgLy8gRHVwbGljYXRlIHJlY29yZC5cbiAgICAgICAgICBkaWZmcy5zcGxpY2UoZXF1YWxpdGllc1tlcXVhbGl0aWVzTGVuZ3RoIC0gMV0sIDAsIFtESUZGX0RFTEVURSwgbGFzdGVxdWFsaXR5XSk7XG5cbiAgICAgICAgICAvLyBDaGFuZ2Ugc2Vjb25kIGNvcHkgdG8gaW5zZXJ0LlxuICAgICAgICAgIGRpZmZzW2VxdWFsaXRpZXNbZXF1YWxpdGllc0xlbmd0aCAtIDFdICsgMV1bMF0gPSBESUZGX0lOU0VSVDtcblxuICAgICAgICAgIC8vIFRocm93IGF3YXkgdGhlIGVxdWFsaXR5IHdlIGp1c3QgZGVsZXRlZC5cbiAgICAgICAgICBlcXVhbGl0aWVzTGVuZ3RoLS07XG5cbiAgICAgICAgICAvLyBUaHJvdyBhd2F5IHRoZSBwcmV2aW91cyBlcXVhbGl0eSAoaXQgbmVlZHMgdG8gYmUgcmVldmFsdWF0ZWQpLlxuICAgICAgICAgIGVxdWFsaXRpZXNMZW5ndGgtLTtcbiAgICAgICAgICBwb2ludGVyID0gZXF1YWxpdGllc0xlbmd0aCA+IDAgPyBlcXVhbGl0aWVzW2VxdWFsaXRpZXNMZW5ndGggLSAxXSA6IC0xO1xuXG4gICAgICAgICAgLy8gUmVzZXQgdGhlIGNvdW50ZXJzLlxuICAgICAgICAgIGxlbmd0aEluc2VydGlvbnMxID0gMDtcbiAgICAgICAgICBsZW5ndGhEZWxldGlvbnMxID0gMDtcbiAgICAgICAgICBsZW5ndGhJbnNlcnRpb25zMiA9IDA7XG4gICAgICAgICAgbGVuZ3RoRGVsZXRpb25zMiA9IDA7XG4gICAgICAgICAgbGFzdGVxdWFsaXR5ID0gbnVsbDtcbiAgICAgICAgICBjaGFuZ2VzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcG9pbnRlcisrO1xuICAgIH1cblxuICAgIC8vIE5vcm1hbGl6ZSB0aGUgZGlmZi5cbiAgICBpZiAoY2hhbmdlcykge1xuICAgICAgdGhpcy5kaWZmQ2xlYW51cE1lcmdlKGRpZmZzKTtcbiAgICB9XG4gICAgdmFyIGRlbGV0aW9uLCBpbnNlcnRpb24sIG92ZXJsYXBMZW5ndGgxLCBvdmVybGFwTGVuZ3RoMjtcblxuICAgIC8vIEZpbmQgYW55IG92ZXJsYXBzIGJldHdlZW4gZGVsZXRpb25zIGFuZCBpbnNlcnRpb25zLlxuICAgIC8vIGUuZzogPGRlbD5hYmN4eHg8L2RlbD48aW5zPnh4eGRlZjwvaW5zPlxuICAgIC8vICAgLT4gPGRlbD5hYmM8L2RlbD54eHg8aW5zPmRlZjwvaW5zPlxuICAgIC8vIGUuZzogPGRlbD54eHhhYmM8L2RlbD48aW5zPmRlZnh4eDwvaW5zPlxuICAgIC8vICAgLT4gPGlucz5kZWY8L2lucz54eHg8ZGVsPmFiYzwvZGVsPlxuICAgIC8vIE9ubHkgZXh0cmFjdCBhbiBvdmVybGFwIGlmIGl0IGlzIGFzIGJpZyBhcyB0aGUgZWRpdCBhaGVhZCBvciBiZWhpbmQgaXQuXG4gICAgcG9pbnRlciA9IDE7XG4gICAgd2hpbGUgKHBvaW50ZXIgPCBkaWZmcy5sZW5ndGgpIHtcbiAgICAgIGlmIChkaWZmc1twb2ludGVyIC0gMV1bMF0gPT09IERJRkZfREVMRVRFICYmIGRpZmZzW3BvaW50ZXJdWzBdID09PSBESUZGX0lOU0VSVCkge1xuICAgICAgICBkZWxldGlvbiA9IGRpZmZzW3BvaW50ZXIgLSAxXVsxXTtcbiAgICAgICAgaW5zZXJ0aW9uID0gZGlmZnNbcG9pbnRlcl1bMV07XG4gICAgICAgIG92ZXJsYXBMZW5ndGgxID0gdGhpcy5kaWZmQ29tbW9uT3ZlcmxhcChkZWxldGlvbiwgaW5zZXJ0aW9uKTtcbiAgICAgICAgb3ZlcmxhcExlbmd0aDIgPSB0aGlzLmRpZmZDb21tb25PdmVybGFwKGluc2VydGlvbiwgZGVsZXRpb24pO1xuICAgICAgICBpZiAob3ZlcmxhcExlbmd0aDEgPj0gb3ZlcmxhcExlbmd0aDIpIHtcbiAgICAgICAgICBpZiAob3ZlcmxhcExlbmd0aDEgPj0gZGVsZXRpb24ubGVuZ3RoIC8gMiB8fCBvdmVybGFwTGVuZ3RoMSA+PSBpbnNlcnRpb24ubGVuZ3RoIC8gMikge1xuICAgICAgICAgICAgLy8gT3ZlcmxhcCBmb3VuZC4gIEluc2VydCBhbiBlcXVhbGl0eSBhbmQgdHJpbSB0aGUgc3Vycm91bmRpbmcgZWRpdHMuXG4gICAgICAgICAgICBkaWZmcy5zcGxpY2UocG9pbnRlciwgMCwgW0RJRkZfRVFVQUwsIGluc2VydGlvbi5zdWJzdHJpbmcoMCwgb3ZlcmxhcExlbmd0aDEpXSk7XG4gICAgICAgICAgICBkaWZmc1twb2ludGVyIC0gMV1bMV0gPSBkZWxldGlvbi5zdWJzdHJpbmcoMCwgZGVsZXRpb24ubGVuZ3RoIC0gb3ZlcmxhcExlbmd0aDEpO1xuICAgICAgICAgICAgZGlmZnNbcG9pbnRlciArIDFdWzFdID0gaW5zZXJ0aW9uLnN1YnN0cmluZyhvdmVybGFwTGVuZ3RoMSk7XG4gICAgICAgICAgICBwb2ludGVyKys7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChvdmVybGFwTGVuZ3RoMiA+PSBkZWxldGlvbi5sZW5ndGggLyAyIHx8IG92ZXJsYXBMZW5ndGgyID49IGluc2VydGlvbi5sZW5ndGggLyAyKSB7XG4gICAgICAgICAgICAvLyBSZXZlcnNlIG92ZXJsYXAgZm91bmQuXG4gICAgICAgICAgICAvLyBJbnNlcnQgYW4gZXF1YWxpdHkgYW5kIHN3YXAgYW5kIHRyaW0gdGhlIHN1cnJvdW5kaW5nIGVkaXRzLlxuICAgICAgICAgICAgZGlmZnMuc3BsaWNlKHBvaW50ZXIsIDAsIFtESUZGX0VRVUFMLCBkZWxldGlvbi5zdWJzdHJpbmcoMCwgb3ZlcmxhcExlbmd0aDIpXSk7XG4gICAgICAgICAgICBkaWZmc1twb2ludGVyIC0gMV1bMF0gPSBESUZGX0lOU0VSVDtcbiAgICAgICAgICAgIGRpZmZzW3BvaW50ZXIgLSAxXVsxXSA9IGluc2VydGlvbi5zdWJzdHJpbmcoMCwgaW5zZXJ0aW9uLmxlbmd0aCAtIG92ZXJsYXBMZW5ndGgyKTtcbiAgICAgICAgICAgIGRpZmZzW3BvaW50ZXIgKyAxXVswXSA9IERJRkZfREVMRVRFO1xuICAgICAgICAgICAgZGlmZnNbcG9pbnRlciArIDFdWzFdID0gZGVsZXRpb24uc3Vic3RyaW5nKG92ZXJsYXBMZW5ndGgyKTtcbiAgICAgICAgICAgIHBvaW50ZXIrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcG9pbnRlcisrO1xuICAgICAgfVxuICAgICAgcG9pbnRlcisrO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHRoZSBzdWZmaXggb2Ygb25lIHN0cmluZyBpcyB0aGUgcHJlZml4IG9mIGFub3RoZXIuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0MSBGaXJzdCBzdHJpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0MiBTZWNvbmQgc3RyaW5nLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyBjb21tb24gdG8gdGhlIGVuZCBvZiB0aGUgZmlyc3RcbiAgICogICAgIHN0cmluZyBhbmQgdGhlIHN0YXJ0IG9mIHRoZSBzZWNvbmQgc3RyaW5nLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgRGlmZk1hdGNoUGF0Y2gucHJvdG90eXBlLmRpZmZDb21tb25PdmVybGFwID0gZnVuY3Rpb24gKHRleHQxLCB0ZXh0Mikge1xuICAgIC8vIENhY2hlIHRoZSB0ZXh0IGxlbmd0aHMgdG8gcHJldmVudCBtdWx0aXBsZSBjYWxscy5cbiAgICB2YXIgdGV4dDFMZW5ndGggPSB0ZXh0MS5sZW5ndGg7XG4gICAgdmFyIHRleHQyTGVuZ3RoID0gdGV4dDIubGVuZ3RoO1xuXG4gICAgLy8gRWxpbWluYXRlIHRoZSBudWxsIGNhc2UuXG4gICAgaWYgKHRleHQxTGVuZ3RoID09PSAwIHx8IHRleHQyTGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvLyBUcnVuY2F0ZSB0aGUgbG9uZ2VyIHN0cmluZy5cbiAgICBpZiAodGV4dDFMZW5ndGggPiB0ZXh0Mkxlbmd0aCkge1xuICAgICAgdGV4dDEgPSB0ZXh0MS5zdWJzdHJpbmcodGV4dDFMZW5ndGggLSB0ZXh0Mkxlbmd0aCk7XG4gICAgfSBlbHNlIGlmICh0ZXh0MUxlbmd0aCA8IHRleHQyTGVuZ3RoKSB7XG4gICAgICB0ZXh0MiA9IHRleHQyLnN1YnN0cmluZygwLCB0ZXh0MUxlbmd0aCk7XG4gICAgfVxuICAgIHZhciB0ZXh0TGVuZ3RoID0gTWF0aC5taW4odGV4dDFMZW5ndGgsIHRleHQyTGVuZ3RoKTtcblxuICAgIC8vIFF1aWNrIGNoZWNrIGZvciB0aGUgd29yc3QgY2FzZS5cbiAgICBpZiAodGV4dDEgPT09IHRleHQyKSB7XG4gICAgICByZXR1cm4gdGV4dExlbmd0aDtcbiAgICB9XG5cbiAgICAvLyBTdGFydCBieSBsb29raW5nIGZvciBhIHNpbmdsZSBjaGFyYWN0ZXIgbWF0Y2hcbiAgICAvLyBhbmQgaW5jcmVhc2UgbGVuZ3RoIHVudGlsIG5vIG1hdGNoIGlzIGZvdW5kLlxuICAgIC8vIFBlcmZvcm1hbmNlIGFuYWx5c2lzOiBodHRwczovL25laWwuZnJhc2VyLm5hbWUvbmV3cy8yMDEwLzExLzA0L1xuICAgIHZhciBiZXN0ID0gMDtcbiAgICB2YXIgbGVuZ3RoID0gMTtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdmFyIHBhdHRlcm4gPSB0ZXh0MS5zdWJzdHJpbmcodGV4dExlbmd0aCAtIGxlbmd0aCk7XG4gICAgICB2YXIgZm91bmQgPSB0ZXh0Mi5pbmRleE9mKHBhdHRlcm4pO1xuICAgICAgaWYgKGZvdW5kID09PSAtMSkge1xuICAgICAgICByZXR1cm4gYmVzdDtcbiAgICAgIH1cbiAgICAgIGxlbmd0aCArPSBmb3VuZDtcbiAgICAgIGlmIChmb3VuZCA9PT0gMCB8fCB0ZXh0MS5zdWJzdHJpbmcodGV4dExlbmd0aCAtIGxlbmd0aCkgPT09IHRleHQyLnN1YnN0cmluZygwLCBsZW5ndGgpKSB7XG4gICAgICAgIGJlc3QgPSBsZW5ndGg7XG4gICAgICAgIGxlbmd0aCsrO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogU3BsaXQgdHdvIHRleHRzIGludG8gYW4gYXJyYXkgb2Ygc3RyaW5ncy4gIFJlZHVjZSB0aGUgdGV4dHMgdG8gYSBzdHJpbmcgb2ZcbiAgICogaGFzaGVzIHdoZXJlIGVhY2ggVW5pY29kZSBjaGFyYWN0ZXIgcmVwcmVzZW50cyBvbmUgbGluZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQxIEZpcnN0IHN0cmluZy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQyIFNlY29uZCBzdHJpbmcuXG4gICAqIEByZXR1cm4ge3tjaGFyczE6IHN0cmluZywgY2hhcnMyOiBzdHJpbmcsIGxpbmVBcnJheTogIUFycmF5LjxzdHJpbmc+fX1cbiAgICogICAgIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBlbmNvZGVkIHRleHQxLCB0aGUgZW5jb2RlZCB0ZXh0MiBhbmRcbiAgICogICAgIHRoZSBhcnJheSBvZiB1bmlxdWUgc3RyaW5ncy5cbiAgICogICAgIFRoZSB6ZXJvdGggZWxlbWVudCBvZiB0aGUgYXJyYXkgb2YgdW5pcXVlIHN0cmluZ3MgaXMgaW50ZW50aW9uYWxseSBibGFuay5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIERpZmZNYXRjaFBhdGNoLnByb3RvdHlwZS5kaWZmTGluZXNUb0NoYXJzID0gZnVuY3Rpb24gKHRleHQxLCB0ZXh0Mikge1xuICAgIHZhciBsaW5lQXJyYXkgPSBbXTsgLy8gRS5nLiBsaW5lQXJyYXlbNF0gPT09ICdIZWxsb1xcbidcbiAgICB2YXIgbGluZUhhc2ggPSB7fTsgLy8gRS5nLiBsaW5lSGFzaFsnSGVsbG9cXG4nXSA9PT0gNFxuXG4gICAgLy8gJ1xceDAwJyBpcyBhIHZhbGlkIGNoYXJhY3RlciwgYnV0IHZhcmlvdXMgZGVidWdnZXJzIGRvbid0IGxpa2UgaXQuXG4gICAgLy8gU28gd2UnbGwgaW5zZXJ0IGEganVuayBlbnRyeSB0byBhdm9pZCBnZW5lcmF0aW5nIGEgbnVsbCBjaGFyYWN0ZXIuXG4gICAgbGluZUFycmF5WzBdID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBTcGxpdCBhIHRleHQgaW50byBhbiBhcnJheSBvZiBzdHJpbmdzLiAgUmVkdWNlIHRoZSB0ZXh0cyB0byBhIHN0cmluZyBvZlxuICAgICAqIGhhc2hlcyB3aGVyZSBlYWNoIFVuaWNvZGUgY2hhcmFjdGVyIHJlcHJlc2VudHMgb25lIGxpbmUuXG4gICAgICogTW9kaWZpZXMgbGluZWFycmF5IGFuZCBsaW5laGFzaCB0aHJvdWdoIGJlaW5nIGEgY2xvc3VyZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBTdHJpbmcgdG8gZW5jb2RlLlxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gRW5jb2RlZCBzdHJpbmcuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkaWZmTGluZXNUb0NoYXJzTXVuZ2UodGV4dCkge1xuICAgICAgdmFyIGNoYXJzID0gJyc7XG5cbiAgICAgIC8vIFdhbGsgdGhlIHRleHQsIHB1bGxpbmcgb3V0IGEgc3Vic3RyaW5nIGZvciBlYWNoIGxpbmUuXG4gICAgICAvLyB0ZXh0LnNwbGl0KCdcXG4nKSB3b3VsZCB3b3VsZCB0ZW1wb3JhcmlseSBkb3VibGUgb3VyIG1lbW9yeSBmb290cHJpbnQuXG4gICAgICAvLyBNb2RpZnlpbmcgdGV4dCB3b3VsZCBjcmVhdGUgbWFueSBsYXJnZSBzdHJpbmdzIHRvIGdhcmJhZ2UgY29sbGVjdC5cbiAgICAgIHZhciBsaW5lU3RhcnQgPSAwO1xuICAgICAgdmFyIGxpbmVFbmQgPSAtMTtcblxuICAgICAgLy8gS2VlcGluZyBvdXIgb3duIGxlbmd0aCB2YXJpYWJsZSBpcyBmYXN0ZXIgdGhhbiBsb29raW5nIGl0IHVwLlxuICAgICAgdmFyIGxpbmVBcnJheUxlbmd0aCA9IGxpbmVBcnJheS5sZW5ndGg7XG4gICAgICB3aGlsZSAobGluZUVuZCA8IHRleHQubGVuZ3RoIC0gMSkge1xuICAgICAgICBsaW5lRW5kID0gdGV4dC5pbmRleE9mKCdcXG4nLCBsaW5lU3RhcnQpO1xuICAgICAgICBpZiAobGluZUVuZCA9PT0gLTEpIHtcbiAgICAgICAgICBsaW5lRW5kID0gdGV4dC5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsaW5lID0gdGV4dC5zdWJzdHJpbmcobGluZVN0YXJ0LCBsaW5lRW5kICsgMSk7XG4gICAgICAgIGxpbmVTdGFydCA9IGxpbmVFbmQgKyAxO1xuICAgICAgICBpZiAoaGFzT3duLmNhbGwobGluZUhhc2gsIGxpbmUpKSB7XG4gICAgICAgICAgY2hhcnMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShsaW5lSGFzaFtsaW5lXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hhcnMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShsaW5lQXJyYXlMZW5ndGgpO1xuICAgICAgICAgIGxpbmVIYXNoW2xpbmVdID0gbGluZUFycmF5TGVuZ3RoO1xuICAgICAgICAgIGxpbmVBcnJheVtsaW5lQXJyYXlMZW5ndGgrK10gPSBsaW5lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gY2hhcnM7XG4gICAgfVxuICAgIHZhciBjaGFyczEgPSBkaWZmTGluZXNUb0NoYXJzTXVuZ2UodGV4dDEpO1xuICAgIHZhciBjaGFyczIgPSBkaWZmTGluZXNUb0NoYXJzTXVuZ2UodGV4dDIpO1xuICAgIHJldHVybiB7XG4gICAgICBjaGFyczE6IGNoYXJzMSxcbiAgICAgIGNoYXJzMjogY2hhcnMyLFxuICAgICAgbGluZUFycmF5OiBsaW5lQXJyYXlcbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZWh5ZHJhdGUgdGhlIHRleHQgaW4gYSBkaWZmIGZyb20gYSBzdHJpbmcgb2YgbGluZSBoYXNoZXMgdG8gcmVhbCBsaW5lcyBvZlxuICAgKiB0ZXh0LlxuICAgKiBAcGFyYW0geyFBcnJheS48IURpZmZNYXRjaFBhdGNoLkRpZmY+fSBkaWZmcyBBcnJheSBvZiBkaWZmIHR1cGxlcy5cbiAgICogQHBhcmFtIHshQXJyYXkuPHN0cmluZz59IGxpbmVBcnJheSBBcnJheSBvZiB1bmlxdWUgc3RyaW5ncy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIERpZmZNYXRjaFBhdGNoLnByb3RvdHlwZS5kaWZmQ2hhcnNUb0xpbmVzID0gZnVuY3Rpb24gKGRpZmZzLCBsaW5lQXJyYXkpIHtcbiAgICBmb3IgKHZhciB4ID0gMDsgeCA8IGRpZmZzLmxlbmd0aDsgeCsrKSB7XG4gICAgICB2YXIgY2hhcnMgPSBkaWZmc1t4XVsxXTtcbiAgICAgIHZhciB0ZXh0ID0gW107XG4gICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IGNoYXJzLmxlbmd0aDsgeSsrKSB7XG4gICAgICAgIHRleHRbeV0gPSBsaW5lQXJyYXlbY2hhcnMuY2hhckNvZGVBdCh5KV07XG4gICAgICB9XG4gICAgICBkaWZmc1t4XVsxXSA9IHRleHQuam9pbignJyk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZW9yZGVyIGFuZCBtZXJnZSBsaWtlIGVkaXQgc2VjdGlvbnMuICBNZXJnZSBlcXVhbGl0aWVzLlxuICAgKiBBbnkgZWRpdCBzZWN0aW9uIGNhbiBtb3ZlIGFzIGxvbmcgYXMgaXQgZG9lc24ndCBjcm9zcyBhbiBlcXVhbGl0eS5cbiAgICogQHBhcmFtIHshQXJyYXkuPCFEaWZmTWF0Y2hQYXRjaC5EaWZmPn0gZGlmZnMgQXJyYXkgb2YgZGlmZiB0dXBsZXMuXG4gICAqL1xuICBEaWZmTWF0Y2hQYXRjaC5wcm90b3R5cGUuZGlmZkNsZWFudXBNZXJnZSA9IGZ1bmN0aW9uIChkaWZmcykge1xuICAgIGRpZmZzLnB1c2goW0RJRkZfRVFVQUwsICcnXSk7IC8vIEFkZCBhIGR1bW15IGVudHJ5IGF0IHRoZSBlbmQuXG4gICAgdmFyIHBvaW50ZXIgPSAwO1xuICAgIHZhciBjb3VudERlbGV0ZSA9IDA7XG4gICAgdmFyIGNvdW50SW5zZXJ0ID0gMDtcbiAgICB2YXIgdGV4dERlbGV0ZSA9ICcnO1xuICAgIHZhciB0ZXh0SW5zZXJ0ID0gJyc7XG4gICAgd2hpbGUgKHBvaW50ZXIgPCBkaWZmcy5sZW5ndGgpIHtcbiAgICAgIHN3aXRjaCAoZGlmZnNbcG9pbnRlcl1bMF0pIHtcbiAgICAgICAgY2FzZSBESUZGX0lOU0VSVDpcbiAgICAgICAgICBjb3VudEluc2VydCsrO1xuICAgICAgICAgIHRleHRJbnNlcnQgKz0gZGlmZnNbcG9pbnRlcl1bMV07XG4gICAgICAgICAgcG9pbnRlcisrO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIERJRkZfREVMRVRFOlxuICAgICAgICAgIGNvdW50RGVsZXRlKys7XG4gICAgICAgICAgdGV4dERlbGV0ZSArPSBkaWZmc1twb2ludGVyXVsxXTtcbiAgICAgICAgICBwb2ludGVyKys7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgRElGRl9FUVVBTDpcbiAgICAgICAgICAvLyBVcG9uIHJlYWNoaW5nIGFuIGVxdWFsaXR5LCBjaGVjayBmb3IgcHJpb3IgcmVkdW5kYW5jaWVzLlxuICAgICAgICAgIGlmIChjb3VudERlbGV0ZSArIGNvdW50SW5zZXJ0ID4gMSkge1xuICAgICAgICAgICAgaWYgKGNvdW50RGVsZXRlICE9PSAwICYmIGNvdW50SW5zZXJ0ICE9PSAwKSB7XG4gICAgICAgICAgICAgIC8vIEZhY3RvciBvdXQgYW55IGNvbW1vbiBwcmVmaXhlcy5cbiAgICAgICAgICAgICAgdmFyIGNvbW1vbmxlbmd0aCA9IHRoaXMuZGlmZkNvbW1vblByZWZpeCh0ZXh0SW5zZXJ0LCB0ZXh0RGVsZXRlKTtcbiAgICAgICAgICAgICAgaWYgKGNvbW1vbmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChwb2ludGVyIC0gY291bnREZWxldGUgLSBjb3VudEluc2VydCA+IDAgJiYgZGlmZnNbcG9pbnRlciAtIGNvdW50RGVsZXRlIC0gY291bnRJbnNlcnQgLSAxXVswXSA9PT0gRElGRl9FUVVBTCkge1xuICAgICAgICAgICAgICAgICAgZGlmZnNbcG9pbnRlciAtIGNvdW50RGVsZXRlIC0gY291bnRJbnNlcnQgLSAxXVsxXSArPSB0ZXh0SW5zZXJ0LnN1YnN0cmluZygwLCBjb21tb25sZW5ndGgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBkaWZmcy5zcGxpY2UoMCwgMCwgW0RJRkZfRVFVQUwsIHRleHRJbnNlcnQuc3Vic3RyaW5nKDAsIGNvbW1vbmxlbmd0aCldKTtcbiAgICAgICAgICAgICAgICAgIHBvaW50ZXIrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGV4dEluc2VydCA9IHRleHRJbnNlcnQuc3Vic3RyaW5nKGNvbW1vbmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgdGV4dERlbGV0ZSA9IHRleHREZWxldGUuc3Vic3RyaW5nKGNvbW1vbmxlbmd0aCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBGYWN0b3Igb3V0IGFueSBjb21tb24gc3VmZml4aWVzLlxuICAgICAgICAgICAgICBjb21tb25sZW5ndGggPSB0aGlzLmRpZmZDb21tb25TdWZmaXgodGV4dEluc2VydCwgdGV4dERlbGV0ZSk7XG4gICAgICAgICAgICAgIGlmIChjb21tb25sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICBkaWZmc1twb2ludGVyXVsxXSA9IHRleHRJbnNlcnQuc3Vic3RyaW5nKHRleHRJbnNlcnQubGVuZ3RoIC0gY29tbW9ubGVuZ3RoKSArIGRpZmZzW3BvaW50ZXJdWzFdO1xuICAgICAgICAgICAgICAgIHRleHRJbnNlcnQgPSB0ZXh0SW5zZXJ0LnN1YnN0cmluZygwLCB0ZXh0SW5zZXJ0Lmxlbmd0aCAtIGNvbW1vbmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgdGV4dERlbGV0ZSA9IHRleHREZWxldGUuc3Vic3RyaW5nKDAsIHRleHREZWxldGUubGVuZ3RoIC0gY29tbW9ubGVuZ3RoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEZWxldGUgdGhlIG9mZmVuZGluZyByZWNvcmRzIGFuZCBhZGQgdGhlIG1lcmdlZCBvbmVzLlxuICAgICAgICAgICAgaWYgKGNvdW50RGVsZXRlID09PSAwKSB7XG4gICAgICAgICAgICAgIGRpZmZzLnNwbGljZShwb2ludGVyIC0gY291bnRJbnNlcnQsIGNvdW50RGVsZXRlICsgY291bnRJbnNlcnQsIFtESUZGX0lOU0VSVCwgdGV4dEluc2VydF0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudEluc2VydCA9PT0gMCkge1xuICAgICAgICAgICAgICBkaWZmcy5zcGxpY2UocG9pbnRlciAtIGNvdW50RGVsZXRlLCBjb3VudERlbGV0ZSArIGNvdW50SW5zZXJ0LCBbRElGRl9ERUxFVEUsIHRleHREZWxldGVdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRpZmZzLnNwbGljZShwb2ludGVyIC0gY291bnREZWxldGUgLSBjb3VudEluc2VydCwgY291bnREZWxldGUgKyBjb3VudEluc2VydCwgW0RJRkZfREVMRVRFLCB0ZXh0RGVsZXRlXSwgW0RJRkZfSU5TRVJULCB0ZXh0SW5zZXJ0XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb2ludGVyID0gcG9pbnRlciAtIGNvdW50RGVsZXRlIC0gY291bnRJbnNlcnQgKyAoY291bnREZWxldGUgPyAxIDogMCkgKyAoY291bnRJbnNlcnQgPyAxIDogMCkgKyAxO1xuICAgICAgICAgIH0gZWxzZSBpZiAocG9pbnRlciAhPT0gMCAmJiBkaWZmc1twb2ludGVyIC0gMV1bMF0gPT09IERJRkZfRVFVQUwpIHtcbiAgICAgICAgICAgIC8vIE1lcmdlIHRoaXMgZXF1YWxpdHkgd2l0aCB0aGUgcHJldmlvdXMgb25lLlxuICAgICAgICAgICAgZGlmZnNbcG9pbnRlciAtIDFdWzFdICs9IGRpZmZzW3BvaW50ZXJdWzFdO1xuICAgICAgICAgICAgZGlmZnMuc3BsaWNlKHBvaW50ZXIsIDEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb2ludGVyKys7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvdW50SW5zZXJ0ID0gMDtcbiAgICAgICAgICBjb3VudERlbGV0ZSA9IDA7XG4gICAgICAgICAgdGV4dERlbGV0ZSA9ICcnO1xuICAgICAgICAgIHRleHRJbnNlcnQgPSAnJztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRpZmZzW2RpZmZzLmxlbmd0aCAtIDFdWzFdID09PSAnJykge1xuICAgICAgZGlmZnMucG9wKCk7IC8vIFJlbW92ZSB0aGUgZHVtbXkgZW50cnkgYXQgdGhlIGVuZC5cbiAgICB9XG5cbiAgICAvLyBTZWNvbmQgcGFzczogbG9vayBmb3Igc2luZ2xlIGVkaXRzIHN1cnJvdW5kZWQgb24gYm90aCBzaWRlcyBieSBlcXVhbGl0aWVzXG4gICAgLy8gd2hpY2ggY2FuIGJlIHNoaWZ0ZWQgc2lkZXdheXMgdG8gZWxpbWluYXRlIGFuIGVxdWFsaXR5LlxuICAgIC8vIGUuZzogQTxpbnM+QkE8L2lucz5DIC0+IDxpbnM+QUI8L2lucz5BQ1xuICAgIHZhciBjaGFuZ2VzID0gZmFsc2U7XG4gICAgcG9pbnRlciA9IDE7XG5cbiAgICAvLyBJbnRlbnRpb25hbGx5IGlnbm9yZSB0aGUgZmlyc3QgYW5kIGxhc3QgZWxlbWVudCAoZG9uJ3QgbmVlZCBjaGVja2luZykuXG4gICAgd2hpbGUgKHBvaW50ZXIgPCBkaWZmcy5sZW5ndGggLSAxKSB7XG4gICAgICBpZiAoZGlmZnNbcG9pbnRlciAtIDFdWzBdID09PSBESUZGX0VRVUFMICYmIGRpZmZzW3BvaW50ZXIgKyAxXVswXSA9PT0gRElGRl9FUVVBTCkge1xuICAgICAgICB2YXIgZGlmZlBvaW50ZXIgPSBkaWZmc1twb2ludGVyXVsxXTtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gZGlmZlBvaW50ZXIuc3Vic3RyaW5nKGRpZmZQb2ludGVyLmxlbmd0aCAtIGRpZmZzW3BvaW50ZXIgLSAxXVsxXS5sZW5ndGgpO1xuXG4gICAgICAgIC8vIFRoaXMgaXMgYSBzaW5nbGUgZWRpdCBzdXJyb3VuZGVkIGJ5IGVxdWFsaXRpZXMuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gZGlmZnNbcG9pbnRlciAtIDFdWzFdKSB7XG4gICAgICAgICAgLy8gU2hpZnQgdGhlIGVkaXQgb3ZlciB0aGUgcHJldmlvdXMgZXF1YWxpdHkuXG4gICAgICAgICAgZGlmZnNbcG9pbnRlcl1bMV0gPSBkaWZmc1twb2ludGVyIC0gMV1bMV0gKyBkaWZmc1twb2ludGVyXVsxXS5zdWJzdHJpbmcoMCwgZGlmZnNbcG9pbnRlcl1bMV0ubGVuZ3RoIC0gZGlmZnNbcG9pbnRlciAtIDFdWzFdLmxlbmd0aCk7XG4gICAgICAgICAgZGlmZnNbcG9pbnRlciArIDFdWzFdID0gZGlmZnNbcG9pbnRlciAtIDFdWzFdICsgZGlmZnNbcG9pbnRlciArIDFdWzFdO1xuICAgICAgICAgIGRpZmZzLnNwbGljZShwb2ludGVyIC0gMSwgMSk7XG4gICAgICAgICAgY2hhbmdlcyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoZGlmZlBvaW50ZXIuc3Vic3RyaW5nKDAsIGRpZmZzW3BvaW50ZXIgKyAxXVsxXS5sZW5ndGgpID09PSBkaWZmc1twb2ludGVyICsgMV1bMV0pIHtcbiAgICAgICAgICAvLyBTaGlmdCB0aGUgZWRpdCBvdmVyIHRoZSBuZXh0IGVxdWFsaXR5LlxuICAgICAgICAgIGRpZmZzW3BvaW50ZXIgLSAxXVsxXSArPSBkaWZmc1twb2ludGVyICsgMV1bMV07XG4gICAgICAgICAgZGlmZnNbcG9pbnRlcl1bMV0gPSBkaWZmc1twb2ludGVyXVsxXS5zdWJzdHJpbmcoZGlmZnNbcG9pbnRlciArIDFdWzFdLmxlbmd0aCkgKyBkaWZmc1twb2ludGVyICsgMV1bMV07XG4gICAgICAgICAgZGlmZnMuc3BsaWNlKHBvaW50ZXIgKyAxLCAxKTtcbiAgICAgICAgICBjaGFuZ2VzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcG9pbnRlcisrO1xuICAgIH1cblxuICAgIC8vIElmIHNoaWZ0cyB3ZXJlIG1hZGUsIHRoZSBkaWZmIG5lZWRzIHJlb3JkZXJpbmcgYW5kIGFub3RoZXIgc2hpZnQgc3dlZXAuXG4gICAgaWYgKGNoYW5nZXMpIHtcbiAgICAgIHRoaXMuZGlmZkNsZWFudXBNZXJnZShkaWZmcyk7XG4gICAgfVxuICB9O1xuICBmdW5jdGlvbiBkaWZmKG8sIG4pIHtcbiAgICB2YXIgZGlmZiwgb3V0cHV0LCB0ZXh0O1xuICAgIGRpZmYgPSBuZXcgRGlmZk1hdGNoUGF0Y2goKTtcbiAgICBvdXRwdXQgPSBkaWZmLkRpZmZNYWluKG8sIG4pO1xuICAgIGRpZmYuZGlmZkNsZWFudXBFZmZpY2llbmN5KG91dHB1dCk7XG4gICAgdGV4dCA9IGRpZmYuZGlmZlByZXR0eUh0bWwob3V0cHV0KTtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHZhciBRVW5pdCA9IHt9O1xuXG4gIC8vIFRoZSBcImN1cnJlbnRNb2R1bGVcIiBvYmplY3Qgd291bGQgaWRlYWxseSBiZSBkZWZpbmVkIHVzaW5nIHRoZSBjcmVhdGVNb2R1bGUoKVxuICAvLyBmdW5jdGlvbi4gU2luY2UgaXQgaXNuJ3QsIGFkZCB0aGUgbWlzc2luZyBzdWl0ZVJlcG9ydCBwcm9wZXJ0eSB0byBpdCBub3cgdGhhdFxuICAvLyB3ZSBoYXZlIGxvYWRlZCBhbGwgc291cmNlIGNvZGUgcmVxdWlyZWQgdG8gZG8gc28uXG4gIC8vXG4gIC8vIFRPRE86IENvbnNpZGVyIGRlZmluaW5nIGN1cnJlbnRNb2R1bGUgaW4gY29yZS5qcyBvciBtb2R1bGUuanMgaW4gaXRzIGVudGlyZWx5XG4gIC8vIHJhdGhlciB0aGFuIHBhcnRseSBpbiBjb25maWcuanMgYW5kIHBhcnRseSBoZXJlLlxuICBjb25maWcuY3VycmVudE1vZHVsZS5zdWl0ZVJlcG9ydCA9IHJ1blN1aXRlO1xuICBjb25maWcucHEgPSBuZXcgUHJvY2Vzc2luZ1F1ZXVlKHRlc3QpO1xuICB2YXIgZ2xvYmFsU3RhcnRDYWxsZWQgPSBmYWxzZTtcbiAgdmFyIHJ1blN0YXJ0ZWQgPSBmYWxzZTtcblxuICAvLyBGaWd1cmUgb3V0IGlmIHdlJ3JlIHJ1bm5pbmcgdGhlIHRlc3RzIGZyb20gYSBzZXJ2ZXIgb3Igbm90XG4gIFFVbml0LmlzTG9jYWwgPSB3aW5kb3ckMSAmJiB3aW5kb3ckMS5sb2NhdGlvbiAmJiB3aW5kb3ckMS5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2ZpbGU6JztcblxuICAvLyBFeHBvc2UgdGhlIGN1cnJlbnQgUVVuaXQgdmVyc2lvblxuICBRVW5pdC52ZXJzaW9uID0gJzIuMjUuMCc7XG4gIGV4dGVuZChRVW5pdCwge1xuICAgIGNvbmZpZzogY29uZmlnLFxuICAgIGRpZmY6IGRpZmYsXG4gICAgZHVtcDogZHVtcCxcbiAgICBlcXVpdjogZXF1aXYsXG4gICAgcmVwb3J0ZXJzOiByZXBvcnRlcnMsXG4gICAgaG9va3M6IGhvb2tzLFxuICAgIGlzOiBpcyxcbiAgICBvYmplY3RUeXBlOiBvYmplY3RUeXBlLFxuICAgIG9uOiBvbixcbiAgICBvbkVycm9yOiBvbldpbmRvd0Vycm9yLFxuICAgIG9uVW5jYXVnaHRFeGNlcHRpb246IG9uVW5jYXVnaHRFeGNlcHRpb24sXG4gICAgcHVzaEZhaWx1cmU6IHB1c2hGYWlsdXJlLFxuICAgIGFzc2VydDogQXNzZXJ0LnByb3RvdHlwZSxcbiAgICBtb2R1bGU6IG1vZHVsZSQxLFxuICAgIHRlc3Q6IHRlc3QsXG4gICAgLy8gYWxpYXMgb3RoZXIgdGVzdCBmbGF2b3JzIGZvciBlYXN5IGFjY2Vzc1xuICAgIHRvZG86IHRlc3QudG9kbyxcbiAgICBza2lwOiB0ZXN0LnNraXAsXG4gICAgb25seTogdGVzdC5vbmx5LFxuICAgIHJlc2V0OiBmdW5jdGlvbigpIHtcblx0XHRQcm9jZXNzaW5nUXVldWUuZmluaXNoZWQgPSBmYWxzZTtcblx0XHRnbG9iYWxTdGFydENhbGxlZCA9IGZhbHNlO1xuXHRcdHJ1blN0YXJ0ZWQgPSBmYWxzZTtcblxuXHRcdGNvbmZpZy5xdWV1ZS5sZW5ndGggPSAwO1xuXHRcdGNvbmZpZy5tb2R1bGVzLmxlbmd0aCA9IDA7XG5cdFx0Y29uZmlnLmF1dG9zdGFydCA9IGZhbHNlO1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb25maWcuc3RhdHMsIHsgdG90YWw6IDAsIHBhc3NlZDogMCwgZmFpbGVkOiAwLCBza2lwcGVkOiAwLCB0b2RvOiAwIH0pO1xuXG5cdFx0W1xuXHRcdFx0XCJzdGFydGVkXCIsIFwidXBkYXRlUmF0ZVwiLCBcImZpbHRlclwiLCBcImRlcHRoXCIsIFwiY3VycmVudFwiLFxuXHRcdFx0XCJwYWdlTG9hZGVkXCIsIFwidGltZW91dEhhbmRsZXJcIiwgXCJ0aW1lb3V0XCIsIFwicG9sbHV0aW9uXCJcblx0XHRdLmZvckVhY2goICgga2V5ICkgPT4gZGVsZXRlIGNvbmZpZ1sga2V5IF0gKTtcblxuXHRcdGNvbnN0IHN1aXRlUmVwb3J0ID0gY29uZmlnLmN1cnJlbnRNb2R1bGUuc3VpdGVSZXBvcnQ7XG5cblx0XHRzdWl0ZVJlcG9ydC5jaGlsZFN1aXRlcy5sZW5ndGggPSAwO1xuXHRcdGRlbGV0ZSBzdWl0ZVJlcG9ydC5fc3RhcnRUaW1lO1xuXHRcdGRlbGV0ZSBzdWl0ZVJlcG9ydC5fZW5kVGltZTtcblxuXHRcdGNvbmZpZy5tb2R1bGVzLnB1c2goIGNvbmZpZy5jdXJyZW50TW9kdWxlICk7XG4gIH0sXG4gIHN0YXJ0OiBmdW5jdGlvbiBzdGFydChjb3VudCkge1xuICAgICAgaWYgKGNvbmZpZy5jdXJyZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUVVuaXQuc3RhcnQgY2Fubm90IGJlIGNhbGxlZCBpbnNpZGUgYSB0ZXN0IGNvbnRleHQuJyk7XG4gICAgICB9XG4gICAgICB2YXIgZ2xvYmFsU3RhcnRBbHJlYWR5Q2FsbGVkID0gZ2xvYmFsU3RhcnRDYWxsZWQ7XG4gICAgICBnbG9iYWxTdGFydENhbGxlZCA9IHRydWU7XG4gICAgICBpZiAocnVuU3RhcnRlZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbGxlZCBzdGFydCgpIHdoaWxlIHRlc3QgYWxyZWFkeSBzdGFydGVkIHJ1bm5pbmcnKTtcbiAgICAgIH1cbiAgICAgIGlmIChnbG9iYWxTdGFydEFscmVhZHlDYWxsZWQgfHwgY291bnQgPiAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2FsbGVkIHN0YXJ0KCkgb3V0c2lkZSBvZiBhIHRlc3QgY29udGV4dCB0b28gbWFueSB0aW1lcycpO1xuICAgICAgfVxuICAgICAgaWYgKGNvbmZpZy5hdXRvc3RhcnQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYWxsZWQgc3RhcnQoKSBvdXRzaWRlIG9mIGEgdGVzdCBjb250ZXh0IHdoZW4gJyArICdRVW5pdC5jb25maWcuYXV0b3N0YXJ0IHdhcyB0cnVlJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIFVudGlsIHdlIHJlbW92ZSBRVW5pdC5sb2FkKCkgaW4gUVVuaXQgMywgd2Uga2VlcCBgcGFnZUxvYWRlZGAuXG4gICAgICAvLyBJdCBubyBsb25nZXIgc2VydmVzIGFueSBwdXJwb3NlIG90aGVyIHRoYW4gdG8gc3VwcG9ydCBvbGQgdGVzdCBydW5uZXJzXG4gICAgICAvLyB0aGF0IHN0aWxsIGNhbGwgb25seSBRVW5pdC5sb2FkKCksIG9yIHRoYXQgY2FsbCBib3RoIGl0IGFuZCBRVW5pdC5zdGFydCgpLlxuICAgICAgaWYgKCFjb25maWcucGFnZUxvYWRlZCkge1xuICAgICAgICAvLyBJZiB0aGUgdGVzdCBydW5uZXIgdXNlZCBgYXV0b3N0YXJ0ID0gZmFsc2VgIGFuZCBpcyBjYWxsaW5nIFFVbml0LnN0YXJ0KClcbiAgICAgICAgLy8gdG8gdGVsbCBpcyB0aGVpciByZXNvdXJjZXMgYXJlIHJlYWR5LCBidXQgdGhlIGJyb3dzZXIgaXNuJ3QgcmVhZHkgeWV0LFxuICAgICAgICAvLyB0aGVuIGVuYWJsZSBhdXRvc3RhcnQgbm93LCBhbmQgd2UnbGwgbGV0IHRoZSB0ZXN0cyByZWFsbHkgc3RhcnQgYWZ0ZXJcbiAgICAgICAgLy8gdGhlIGJyb3dzZXIncyBcImxvYWRcIiBldmVudCBoYW5kbGVyIGNhbGxzIGF1dG9zdGFydCgpLlxuICAgICAgICBjb25maWcuYXV0b3N0YXJ0ID0gdHJ1ZTtcblxuICAgICAgICAvLyBJZiB3ZSdyZSBpbiBOb2RlIG9yIGFub3RoZXIgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQsIHdlIHN0YXJ0IG5vdyBhcyB0aGVyZVxuICAgICAgICAvLyB3b24ndCBiZSBhbnkgXCJsb2FkXCIgZXZlbnQuIFdlIHJldHVybiBlYXJseSBlaXRoZXIgd2F5IHNpbmNlIGF1dG9zdGFydFxuICAgICAgICAvLyBpcyByZXNwb25zaWJsZSBmb3IgY2FsbGluZyBzY2hlZHVsZUJlZ2luIChhdm9pZCBcImJlZ2lubmluZ1wiIHR3aWNlKS5cbiAgICAgICAgaWYgKCFkb2N1bWVudCkge1xuICAgICAgICAgIFFVbml0LmF1dG9zdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNjaGVkdWxlQmVnaW4oKTtcbiAgICB9LFxuICAgIG9uVW5oYW5kbGVkUmVqZWN0aW9uOiBmdW5jdGlvbiBvblVuaGFuZGxlZFJlamVjdGlvbihyZWFzb24pIHtcbiAgICAgIExvZ2dlci53YXJuKCdRVW5pdC5vblVuaGFuZGxlZFJlamVjdGlvbiBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUVVuaXQgMy4wLicgKyAnIFBsZWFzZSB1c2UgUVVuaXQub25VbmNhdWdodEV4Y2VwdGlvbiBpbnN0ZWFkLicpO1xuICAgICAgb25VbmNhdWdodEV4Y2VwdGlvbihyZWFzb24pO1xuICAgIH0sXG4gICAgZXh0ZW5kOiBmdW5jdGlvbiBleHRlbmQkMSgpIHtcbiAgICAgIExvZ2dlci53YXJuKCdRVW5pdC5leHRlbmQgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIFFVbml0IDMuMC4nICsgJyBQbGVhc2UgdXNlIE9iamVjdC5hc3NpZ24gaW5zdGVhZC4nKTtcblxuICAgICAgLy8gZGVsZWdhdGUgdG8gdXRpbGl0eSBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggZG9lcyBub3Qgd2FybiBhbmQgY2FuIGJlIHVzZWQgZWxzZXdoZXJlIGludGVybmFsbHlcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGV4dGVuZC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9LFxuICAgIGxvYWQ6IGZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgICBMb2dnZXIud2FybignUVVuaXQubG9hZCBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUVVuaXQgMy4wLicgKyAnIGh0dHBzOi8vcXVuaXRqcy5jb20vYXBpL1FVbml0L2xvYWQvJyk7XG4gICAgICBRVW5pdC5hdXRvc3RhcnQoKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIGF1dG9zdGFydDogZnVuY3Rpb24gYXV0b3N0YXJ0KCkge1xuICAgICAgY29uZmlnLnBhZ2VMb2FkZWQgPSB0cnVlO1xuXG4gICAgICAvLyBJbml0aWFsaXplIHRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnNcbiAgICAgIC8vIFRPRE86IE1vdmUgdGhpcyB0byBjb25maWcuanMgaW4gUVVuaXQgMy5cbiAgICAgIGV4dGVuZChjb25maWcsIHtcbiAgICAgICAgc3RhcnRlZDogMCxcbiAgICAgICAgdXBkYXRlUmF0ZTogMTAwMCxcbiAgICAgICAgYXV0b3N0YXJ0OiB0cnVlLFxuICAgICAgICBmaWx0ZXI6ICcnXG4gICAgICB9LCB0cnVlKTtcbiAgICAgIGlmICghcnVuU3RhcnRlZCkge1xuICAgICAgICBjb25maWcuYmxvY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKGNvbmZpZy5hdXRvc3RhcnQpIHtcbiAgICAgICAgICBzY2hlZHVsZUJlZ2luKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHN0YWNrOiBmdW5jdGlvbiBzdGFjayhvZmZzZXQpIHtcbiAgICAgIG9mZnNldCA9IChvZmZzZXQgfHwgMCkgKyAyO1xuICAgICAgLy8gU3VwcG9ydCBTYWZhcmk6IFVzZSB0ZW1wIHZhcmlhYmxlIHRvIGF2b2lkIFRDTyBmb3IgY29uc2lzdGVudCBjcm9zcy1icm93c2VyIHJlc3VsdFxuICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI3NjE4N1xuICAgICAgdmFyIHNvdXJjZSA9IHNvdXJjZUZyb21TdGFja3RyYWNlKG9mZnNldCk7XG4gICAgICByZXR1cm4gc291cmNlO1xuICAgIH1cbiAgfSk7XG4gIHJlZ2lzdGVyTG9nZ2luZ0NhbGxiYWNrcyhRVW5pdCk7XG4gIGZ1bmN0aW9uIHNjaGVkdWxlQmVnaW4oKSB7XG4gICAgcnVuU3RhcnRlZCA9IHRydWU7XG5cbiAgICAvLyBBZGQgYSBzbGlnaHQgZGVsYXkgdG8gYWxsb3cgZGVmaW5pdGlvbiBvZiBtb3JlIG1vZHVsZXMgYW5kIHRlc3RzLlxuICAgIGlmIChzZXRUaW1lb3V0JDEpIHtcbiAgICAgIHNldFRpbWVvdXQkMShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJlZ2luKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmVnaW4oKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdW5ibG9ja0FuZEFkdmFuY2VRdWV1ZSgpIHtcbiAgICBjb25maWcuYmxvY2tpbmcgPSBmYWxzZTtcbiAgICBjb25maWcucHEuYWR2YW5jZSgpO1xuICB9XG4gIGZ1bmN0aW9uIGJlZ2luKCkge1xuICAgIGlmIChjb25maWcuc3RhcnRlZCkge1xuICAgICAgdW5ibG9ja0FuZEFkdmFuY2VRdWV1ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFFVbml0LmNvbmZpZy5yZXBvcnRlcnMgaXMgY29uc2lkZXJlZCB3cml0YWJsZSBiZXR3ZWVuIHF1bml0LmpzIGFuZCBRVW5pdC5zdGFydCgpLlxuICAgIC8vIE5vdyB0aGF0IFFVbml0LnN0YXJ0KCkgaGFzIGJlZW4gY2FsbGVkLCBpdCBpcyB0aW1lIHRvIGRlY2lkZSB3aGljaCBidWlsdC1pbiByZXBvcnRlcnNcbiAgICAvLyB0byBsb2FkLlxuICAgIGlmIChjb25maWcucmVwb3J0ZXJzLmNvbnNvbGUpIHtcbiAgICAgIHJlcG9ydGVycy5jb25zb2xlLmluaXQoUVVuaXQpO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLnJlcG9ydGVycy50YXApIHtcbiAgICAgIHJlcG9ydGVycy50YXAuaW5pdChRVW5pdCk7XG4gICAgfVxuXG4gICAgLy8gVGhlIHRlc3QgcnVuIGhhc24ndCBvZmZpY2lhbGx5IGJlZ3VuIHlldFxuICAgIC8vIFJlY29yZCB0aGUgdGltZSBvZiB0aGUgdGVzdCBydW4ncyBiZWdpbm5pbmdcbiAgICBjb25maWcuc3RhcnRlZCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG4gICAgLy8gRGVsZXRlIHRoZSBsb29zZSB1bm5hbWVkIG1vZHVsZSBpZiB1bnVzZWQuXG4gICAgaWYgKGNvbmZpZy5tb2R1bGVzWzBdLm5hbWUgPT09ICcnICYmIGNvbmZpZy5tb2R1bGVzWzBdLnRlc3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uZmlnLm1vZHVsZXMuc2hpZnQoKTtcbiAgICB9XG4gICAgdmFyIG1vZHVsZXNMb2cgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbmZpZy5tb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBEb24ndCBleHBvc2UgdGhlIHVubmFtZWQgZ2xvYmFsIHRlc3QgbW9kdWxlIHRvIHBsdWdpbnMuXG4gICAgICBpZiAoY29uZmlnLm1vZHVsZXNbaV0ubmFtZSAhPT0gJycpIHtcbiAgICAgICAgbW9kdWxlc0xvZy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBjb25maWcubW9kdWxlc1tpXS5uYW1lLFxuICAgICAgICAgIG1vZHVsZUlkOiBjb25maWcubW9kdWxlc1tpXS5tb2R1bGVJZCxcbiAgICAgICAgICAvLyBBZGRlZCBpbiBRVW5pdCAxLjE2LjAgZm9yIGludGVybmFsIHVzZSBieSBodG1sLXJlcG9ydGVyLFxuICAgICAgICAgIC8vIGJ1dCBubyBsb25nZXIgdXNlZCBzaW5jZSBRVW5pdCAyLjcuMC5cbiAgICAgICAgICAvLyBAZGVwcmVjYXRlZCBLZXB0IHVub2ZmaWNpYWxseSB0byBiZSByZW1vdmVkIGluIFFVbml0IDMuMC5cbiAgICAgICAgICB0ZXN0czogY29uZmlnLm1vZHVsZXNbaV0udGVzdHNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhlIHRlc3QgcnVuIGlzIG9mZmljaWFsbHkgYmVnaW5uaW5nIG5vd1xuICAgIGVtaXQoJ3J1blN0YXJ0JywgcnVuU3VpdGUuc3RhcnQodHJ1ZSkpO1xuICAgIHJ1bkxvZ2dpbmdDYWxsYmFja3MoJ2JlZ2luJywge1xuICAgICAgdG90YWxUZXN0czogVGVzdC5jb3VudCxcbiAgICAgIG1vZHVsZXM6IG1vZHVsZXNMb2dcbiAgICB9KS50aGVuKHVuYmxvY2tBbmRBZHZhbmNlUXVldWUpO1xuICB9XG4gIGV4cG9ydFFVbml0KFFVbml0KTtcblxuICAoZnVuY3Rpb24gKCkge1xuICAgIGlmICghd2luZG93JDEgfHwgIWRvY3VtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBjb25maWcgPSBRVW5pdC5jb25maWc7XG4gICAgdmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbiAgICAvLyBTdG9yZXMgZml4dHVyZSBIVE1MIGZvciByZXNldHRpbmcgbGF0ZXJcbiAgICBmdW5jdGlvbiBzdG9yZUZpeHR1cmUoKSB7XG4gICAgICAvLyBBdm9pZCBvdmVyd3JpdGluZyB1c2VyLWRlZmluZWQgdmFsdWVzXG4gICAgICAvLyBUT0RPOiBDaGFuZ2UgdG8gbmVnYXRpdmUgbnVsbC91bmRlZmluZWQgY2hlY2sgb25jZSBkZWNsYXJlZCBpbiAvc3JjL2NvbmZpZy5qc1xuICAgICAgaWYgKGhhc093bi5jYWxsKGNvbmZpZywgJ2ZpeHR1cmUnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgZml4dHVyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdW5pdC1maXh0dXJlJyk7XG4gICAgICBpZiAoZml4dHVyZSkge1xuICAgICAgICBjb25maWcuZml4dHVyZSA9IGZpeHR1cmUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBRVW5pdC5iZWdpbihzdG9yZUZpeHR1cmUpO1xuXG4gICAgLy8gUmVzZXRzIHRoZSBmaXh0dXJlIERPTSBlbGVtZW50IGlmIGF2YWlsYWJsZS5cbiAgICBmdW5jdGlvbiByZXNldEZpeHR1cmUoKSB7XG4gICAgICBpZiAoY29uZmlnLmZpeHR1cmUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgZml4dHVyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdW5pdC1maXh0dXJlJyk7XG4gICAgICB2YXIgcmVzZXRGaXh0dXJlVHlwZSA9IF90eXBlb2YoY29uZmlnLmZpeHR1cmUpO1xuICAgICAgaWYgKHJlc2V0Rml4dHVyZVR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIHN1cHBvcnQgdXNlciBkZWZpbmVkIHZhbHVlcyBmb3IgYGNvbmZpZy5maXh0dXJlYFxuICAgICAgICB2YXIgbmV3Rml4dHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdGaXh0dXJlLnNldEF0dHJpYnV0ZSgnaWQnLCAncXVuaXQtZml4dHVyZScpO1xuICAgICAgICBuZXdGaXh0dXJlLmlubmVySFRNTCA9IGNvbmZpZy5maXh0dXJlO1xuICAgICAgICBmaXh0dXJlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld0ZpeHR1cmUsIGZpeHR1cmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGNsb25lZEZpeHR1cmUgPSBjb25maWcuZml4dHVyZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGZpeHR1cmUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY2xvbmVkRml4dHVyZSwgZml4dHVyZSk7XG4gICAgICB9XG4gICAgfVxuICAgIFFVbml0LnRlc3RTdGFydChyZXNldEZpeHR1cmUpO1xuICB9KSgpO1xuXG4gIChmdW5jdGlvbiAoKSB7XG4gICAgLy8gT25seSBpbnRlcmFjdCB3aXRoIFVSTHMgdmlhIHdpbmRvdy5sb2NhdGlvblxuICAgIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3ckMSAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93JDEubG9jYXRpb247XG4gICAgaWYgKCFsb2NhdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdXJsUGFyYW1zID0gZ2V0VXJsUGFyYW1zKCk7XG5cbiAgICAvLyBUT0RPOiBNb3ZlIHRvIC9zcmMvY29yZS8gaW4gUVVuaXQgM1xuICAgIC8vIFRPRE86IERvY3VtZW50IHRoaXMgYXMgcHVibGljIEFQSSAocmVhZC1vbmx5KVxuICAgIFFVbml0LnVybFBhcmFtcyA9IHVybFBhcmFtcztcblxuICAgIC8vIFRPRE86IE1vdmUgdG8gL3NyYy9jb3JlL2NvbmZpZy5qcyBpbiBRVW5pdCAzLFxuICAgIC8vIGluIGFjY29yZGFuY2Ugd2l0aCAvZG9jcy9hcGkvY29uZmlnLmluZGV4Lm1kI29yZGVyXG4gICAgUVVuaXQuY29uZmlnLmZpbHRlciA9IHVybFBhcmFtcy5maWx0ZXI7XG4gICAgLy8gTk9URTogQmFzZWQgb24gcmVhZEZsYXRQcmVjb25maWdOdW1iZXIgZnJvbSBRVW5pdCAzLlxuICAgIGlmICgvXlswLTldKyQvLnRlc3QodXJsUGFyYW1zLm1heERlcHRoKSkge1xuICAgICAgUVVuaXQuY29uZmlnLm1heERlcHRoID0gUVVuaXQuZHVtcC5tYXhEZXB0aCA9ICt1cmxQYXJhbXMubWF4RGVwdGg7XG4gICAgfVxuICAgIFFVbml0LmNvbmZpZy5tb2R1bGUgPSB1cmxQYXJhbXMubW9kdWxlO1xuICAgIFFVbml0LmNvbmZpZy5tb2R1bGVJZCA9IFtdLmNvbmNhdCh1cmxQYXJhbXMubW9kdWxlSWQgfHwgW10pO1xuICAgIFFVbml0LmNvbmZpZy50ZXN0SWQgPSBbXS5jb25jYXQodXJsUGFyYW1zLnRlc3RJZCB8fCBbXSk7XG5cbiAgICAvLyBUZXN0IG9yZGVyIHJhbmRvbWl6YXRpb25cbiAgICAvLyBHZW5lcmF0ZSBhIHJhbmRvbSBzZWVkIGlmIGA/c2VlZGAgaXMgc3BlY2lmaWVkIHdpdGhvdXQgYSB2YWx1ZSAoYm9vbGVhbiB0cnVlKSxcbiAgICAvLyBvciB3aGVuIHNldCB0byB0aGUgc3RyaW5nIFwidHJ1ZVwiLlxuICAgIGlmICh1cmxQYXJhbXMuc2VlZCA9PT0gJ3RydWUnIHx8IHVybFBhcmFtcy5zZWVkID09PSB0cnVlKSB7XG4gICAgICAvLyBOT1RFOiBUaGlzIGR1cGxpY2F0ZXMgbG9naWMgZnJvbSAvc3JjL2NvcmUvY29uZmlnLmpzLiBDb25zb2xpZGF0ZWQgaW4gUVVuaXQgMy5cbiAgICAgIFFVbml0LmNvbmZpZy5zZWVkID0gKE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpICsgJzAwMDAwMDAwMDAnKS5zbGljZSgyLCAxMik7XG4gICAgfSBlbHNlIGlmICh1cmxQYXJhbXMuc2VlZCkge1xuICAgICAgUVVuaXQuY29uZmlnLnNlZWQgPSB1cmxQYXJhbXMuc2VlZDtcbiAgICB9XG5cbiAgICAvLyBBZGQgVVJMLXBhcmFtZXRlci1tYXBwZWQgY29uZmlnIHZhbHVlcyB3aXRoIFVJIGZvcm0gcmVuZGVyaW5nIGRhdGFcbiAgICBRVW5pdC5jb25maWcudXJsQ29uZmlnLnB1c2goe1xuICAgICAgaWQ6ICdoaWRlcGFzc2VkJyxcbiAgICAgIGxhYmVsOiAnSGlkZSBwYXNzZWQgdGVzdHMnLFxuICAgICAgdG9vbHRpcDogJ09ubHkgc2hvdyB0ZXN0cyBhbmQgYXNzZXJ0aW9ucyB0aGF0IGZhaWwuIFN0b3JlZCBhcyBxdWVyeS1zdHJpbmdzLidcbiAgICB9LCB7XG4gICAgICBpZDogJ25vZ2xvYmFscycsXG4gICAgICBsYWJlbDogJ0NoZWNrIGZvciBHbG9iYWxzJyxcbiAgICAgIHRvb2x0aXA6ICdFbmFibGluZyB0aGlzIHdpbGwgdGVzdCBpZiBhbnkgdGVzdCBpbnRyb2R1Y2VzIG5ldyBwcm9wZXJ0aWVzIG9uIHRoZSAnICsgJ2dsb2JhbCBvYmplY3QgKGB3aW5kb3dgIGluIEJyb3dzZXJzKS4gU3RvcmVkIGFzIHF1ZXJ5LXN0cmluZ3MuJ1xuICAgIH0sIHtcbiAgICAgIGlkOiAnbm90cnljYXRjaCcsXG4gICAgICBsYWJlbDogJ05vIHRyeS1jYXRjaCcsXG4gICAgICB0b29sdGlwOiAnRW5hYmxpbmcgdGhpcyB3aWxsIHJ1biB0ZXN0cyBvdXRzaWRlIG9mIGEgdHJ5LWNhdGNoIGJsb2NrLiBNYWtlcyBkZWJ1Z2dpbmcgJyArICdleGNlcHRpb25zIGluIElFIHJlYXNvbmFibGUuIFN0b3JlZCBhcyBxdWVyeS1zdHJpbmdzLidcbiAgICB9KTtcbiAgICBRVW5pdC5iZWdpbihmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdXJsQ29uZmlnID0gUVVuaXQuY29uZmlnLnVybENvbmZpZztcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdXJsQ29uZmlnLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIE9wdGlvbnMgY2FuIGJlIGVpdGhlciBzdHJpbmdzIG9yIG9iamVjdHMgd2l0aCBub25lbXB0eSBcImlkXCIgcHJvcGVydGllc1xuICAgICAgICB2YXIgb3B0aW9uID0gUVVuaXQuY29uZmlnLnVybENvbmZpZ1tpXTtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgb3B0aW9uID0gb3B0aW9uLmlkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChRVW5pdC5jb25maWdbb3B0aW9uXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgUVVuaXQuY29uZmlnW29wdGlvbl0gPSB1cmxQYXJhbXNbb3B0aW9uXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGZ1bmN0aW9uIGdldFVybFBhcmFtcygpIHtcbiAgICAgIHZhciB1cmxQYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgdmFyIHBhcmFtcyA9IGxvY2F0aW9uLnNlYXJjaC5zbGljZSgxKS5zcGxpdCgnJicpO1xuICAgICAgdmFyIGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChwYXJhbXNbaV0pIHtcbiAgICAgICAgICB2YXIgcGFyYW0gPSBwYXJhbXNbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgICB2YXIgbmFtZSA9IGRlY29kZVF1ZXJ5UGFyYW0ocGFyYW1bMF0pO1xuXG4gICAgICAgICAgLy8gQWxsb3cganVzdCBhIGtleSB0byB0dXJuIG9uIGEgZmxhZywgZS5nLiwgdGVzdC5odG1sP25vZ2xvYmFsc1xuICAgICAgICAgIHZhciB2YWx1ZSA9IHBhcmFtLmxlbmd0aCA9PT0gMSB8fCBkZWNvZGVRdWVyeVBhcmFtKHBhcmFtLnNsaWNlKDEpLmpvaW4oJz0nKSk7XG4gICAgICAgICAgaWYgKG5hbWUgaW4gdXJsUGFyYW1zKSB7XG4gICAgICAgICAgICB1cmxQYXJhbXNbbmFtZV0gPSBbXS5jb25jYXQodXJsUGFyYW1zW25hbWVdLCB2YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVybFBhcmFtc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHVybFBhcmFtcztcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVjb2RlUXVlcnlQYXJhbShwYXJhbSkge1xuICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbS5yZXBsYWNlKC9cXCsvZywgJyUyMCcpKTtcbiAgICB9XG4gIH0pKCk7XG5cbiAgdmFyIGZ1enp5c29ydCQxID0ge2V4cG9ydHM6IHt9fTtcblxuICAoZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgIChmdW5jdGlvbiAocm9vdCwgVU1EKSB7XG4gICAgICBpZiAobW9kdWxlLmV4cG9ydHMpIG1vZHVsZS5leHBvcnRzID0gVU1EKCk7ZWxzZSByb290LmZ1enp5c29ydCA9IFVNRCgpO1xuICAgIH0pKGNvbW1vbmpzR2xvYmFsLCBmdW5jdGlvbiBVTUQoKSB7XG4gICAgICBmdW5jdGlvbiBmdXp6eXNvcnROZXcoaW5zdGFuY2VPcHRpb25zKSB7XG4gICAgICAgIHZhciBmdXp6eXNvcnQgPSB7XG4gICAgICAgICAgc2luZ2xlOiBmdW5jdGlvbiBzaW5nbGUoc2VhcmNoLCB0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChzZWFyY2ggPT0gJ2ZhcnpoZXInKSByZXR1cm4ge1xuICAgICAgICAgICAgICB0YXJnZXQ6IFwiZmFyemhlciB3YXMgaGVyZSAoXi1eKikvXCIsXG4gICAgICAgICAgICAgIHNjb3JlOiAwLFxuICAgICAgICAgICAgICBpbmRleGVzOiBbMCwgMSwgMiwgMywgNCwgNSwgNl1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXNlYXJjaCkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBpZiAoIWlzT2JqKHNlYXJjaCkpIHNlYXJjaCA9IGZ1enp5c29ydC5nZXRQcmVwYXJlZFNlYXJjaChzZWFyY2gpO1xuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgaWYgKCFpc09iaih0YXJnZXQpKSB0YXJnZXQgPSBmdXp6eXNvcnQuZ2V0UHJlcGFyZWQodGFyZ2V0KTtcbiAgICAgICAgICAgIHZhciBhbGxvd1R5cG8gPSBvcHRpb25zICYmIG9wdGlvbnMuYWxsb3dUeXBvICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmFsbG93VHlwbyA6IGluc3RhbmNlT3B0aW9ucyAmJiBpbnN0YW5jZU9wdGlvbnMuYWxsb3dUeXBvICE9PSB1bmRlZmluZWQgPyBpbnN0YW5jZU9wdGlvbnMuYWxsb3dUeXBvIDogdHJ1ZTtcbiAgICAgICAgICAgIHZhciBhbGdvcml0aG0gPSBhbGxvd1R5cG8gPyBmdXp6eXNvcnQuYWxnb3JpdGhtIDogZnV6enlzb3J0LmFsZ29yaXRobU5vVHlwbztcbiAgICAgICAgICAgIHJldHVybiBhbGdvcml0aG0oc2VhcmNoLCB0YXJnZXQsIHNlYXJjaFswXSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBnbzogZnVuY3Rpb24gZ28oc2VhcmNoLCB0YXJnZXRzLCBvcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAoc2VhcmNoID09ICdmYXJ6aGVyJykgcmV0dXJuIFt7XG4gICAgICAgICAgICAgIHRhcmdldDogXCJmYXJ6aGVyIHdhcyBoZXJlICheLV4qKS9cIixcbiAgICAgICAgICAgICAgc2NvcmU6IDAsXG4gICAgICAgICAgICAgIGluZGV4ZXM6IFswLCAxLCAyLCAzLCA0LCA1LCA2XSxcbiAgICAgICAgICAgICAgb2JqOiB0YXJnZXRzID8gdGFyZ2V0c1swXSA6IG51bGxcbiAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgaWYgKCFzZWFyY2gpIHJldHVybiBub1Jlc3VsdHM7XG4gICAgICAgICAgICBzZWFyY2ggPSBmdXp6eXNvcnQucHJlcGFyZVNlYXJjaChzZWFyY2gpO1xuICAgICAgICAgICAgdmFyIHNlYXJjaExvd2VyQ29kZSA9IHNlYXJjaFswXTtcbiAgICAgICAgICAgIHZhciB0aHJlc2hvbGQgPSBvcHRpb25zICYmIG9wdGlvbnMudGhyZXNob2xkIHx8IGluc3RhbmNlT3B0aW9ucyAmJiBpbnN0YW5jZU9wdGlvbnMudGhyZXNob2xkIHx8IC05MDA3MTk5MjU0NzQwOTkxO1xuICAgICAgICAgICAgdmFyIGxpbWl0ID0gb3B0aW9ucyAmJiBvcHRpb25zLmxpbWl0IHx8IGluc3RhbmNlT3B0aW9ucyAmJiBpbnN0YW5jZU9wdGlvbnMubGltaXQgfHwgOTAwNzE5OTI1NDc0MDk5MTtcbiAgICAgICAgICAgIHZhciBhbGxvd1R5cG8gPSBvcHRpb25zICYmIG9wdGlvbnMuYWxsb3dUeXBvICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmFsbG93VHlwbyA6IGluc3RhbmNlT3B0aW9ucyAmJiBpbnN0YW5jZU9wdGlvbnMuYWxsb3dUeXBvICE9PSB1bmRlZmluZWQgPyBpbnN0YW5jZU9wdGlvbnMuYWxsb3dUeXBvIDogdHJ1ZTtcbiAgICAgICAgICAgIHZhciBhbGdvcml0aG0gPSBhbGxvd1R5cG8gPyBmdXp6eXNvcnQuYWxnb3JpdGhtIDogZnV6enlzb3J0LmFsZ29yaXRobU5vVHlwbztcbiAgICAgICAgICAgIHZhciByZXN1bHRzTGVuID0gMDtcbiAgICAgICAgICAgIHZhciBsaW1pdGVkQ291bnQgPSAwO1xuICAgICAgICAgICAgdmFyIHRhcmdldHNMZW4gPSB0YXJnZXRzLmxlbmd0aDtcblxuICAgICAgICAgICAgLy8gVGhpcyBjb2RlIGlzIGNvcHkvcGFzdGVkIDMgdGltZXMgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMgW29wdGlvbnMua2V5cywgb3B0aW9ucy5rZXksIG5vIGtleXNdXG5cbiAgICAgICAgICAgIC8vIG9wdGlvbnMua2V5c1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5rZXlzKSB7XG4gICAgICAgICAgICAgIHZhciBzY29yZUZuID0gb3B0aW9ucy5zY29yZUZuIHx8IGRlZmF1bHRTY29yZUZuO1xuICAgICAgICAgICAgICB2YXIga2V5cyA9IG9wdGlvbnMua2V5cztcbiAgICAgICAgICAgICAgdmFyIGtleXNMZW4gPSBrZXlzLmxlbmd0aDtcbiAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IHRhcmdldHNMZW4gLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgICAgIHZhciBvYmogPSB0YXJnZXRzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBvYmpSZXN1bHRzID0gbmV3IEFycmF5KGtleXNMZW4pO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleUkgPSBrZXlzTGVuIC0gMTsga2V5SSA+PSAwOyAtLWtleUkpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2tleUldO1xuICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGdldFZhbHVlKG9iaiwga2V5KTtcbiAgICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIG9ialJlc3VsdHNba2V5SV0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmICghaXNPYmoodGFyZ2V0KSkgdGFyZ2V0ID0gZnV6enlzb3J0LmdldFByZXBhcmVkKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICBvYmpSZXN1bHRzW2tleUldID0gYWxnb3JpdGhtKHNlYXJjaCwgdGFyZ2V0LCBzZWFyY2hMb3dlckNvZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvYmpSZXN1bHRzLm9iaiA9IG9iajsgLy8gYmVmb3JlIHNjb3JlRm4gc28gc2NvcmVGbiBjYW4gdXNlIGl0XG4gICAgICAgICAgICAgICAgdmFyIHNjb3JlID0gc2NvcmVGbihvYmpSZXN1bHRzKTtcbiAgICAgICAgICAgICAgICBpZiAoc2NvcmUgPT09IG51bGwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGlmIChzY29yZSA8IHRocmVzaG9sZCkgY29udGludWU7XG4gICAgICAgICAgICAgICAgb2JqUmVzdWx0cy5zY29yZSA9IHNjb3JlO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRzTGVuIDwgbGltaXQpIHtcbiAgICAgICAgICAgICAgICAgIHEuYWRkKG9ialJlc3VsdHMpO1xuICAgICAgICAgICAgICAgICAgKytyZXN1bHRzTGVuO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICArK2xpbWl0ZWRDb3VudDtcbiAgICAgICAgICAgICAgICAgIGlmIChzY29yZSA+IHEucGVlaygpLnNjb3JlKSBxLnJlcGxhY2VUb3Aob2JqUmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gb3B0aW9ucy5rZXlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmtleSkge1xuICAgICAgICAgICAgICB2YXIga2V5ID0gb3B0aW9ucy5rZXk7XG4gICAgICAgICAgICAgIGZvciAodmFyIGkgPSB0YXJnZXRzTGVuIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgICAgICB2YXIgb2JqID0gdGFyZ2V0c1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZ2V0VmFsdWUob2JqLCBrZXkpO1xuICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0KSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzT2JqKHRhcmdldCkpIHRhcmdldCA9IGZ1enp5c29ydC5nZXRQcmVwYXJlZCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBhbGdvcml0aG0oc2VhcmNoLCB0YXJnZXQsIHNlYXJjaExvd2VyQ29kZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkgY29udGludWU7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zY29yZSA8IHRocmVzaG9sZCkgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICAvLyBoYXZlIHRvIGNsb25lIHJlc3VsdCBzbyBkdXBsaWNhdGUgdGFyZ2V0cyBmcm9tIGRpZmZlcmVudCBvYmogY2FuIGVhY2ggcmVmZXJlbmNlIHRoZSBjb3JyZWN0IG9ialxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldDogcmVzdWx0LnRhcmdldCxcbiAgICAgICAgICAgICAgICAgIF90YXJnZXRMb3dlckNvZGVzOiBudWxsLFxuICAgICAgICAgICAgICAgICAgX25leHRCZWdpbm5pbmdJbmRleGVzOiBudWxsLFxuICAgICAgICAgICAgICAgICAgc2NvcmU6IHJlc3VsdC5zY29yZSxcbiAgICAgICAgICAgICAgICAgIGluZGV4ZXM6IHJlc3VsdC5pbmRleGVzLFxuICAgICAgICAgICAgICAgICAgb2JqOiBvYmpcbiAgICAgICAgICAgICAgICB9OyAvLyBoaWRkZW5cblxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRzTGVuIDwgbGltaXQpIHtcbiAgICAgICAgICAgICAgICAgIHEuYWRkKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICArK3Jlc3VsdHNMZW47XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICsrbGltaXRlZENvdW50O1xuICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zY29yZSA+IHEucGVlaygpLnNjb3JlKSBxLnJlcGxhY2VUb3AocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBubyBrZXlzXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBmb3IgKHZhciBpID0gdGFyZ2V0c0xlbiAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IHRhcmdldHNbaV07XG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGlmICghaXNPYmoodGFyZ2V0KSkgdGFyZ2V0ID0gZnV6enlzb3J0LmdldFByZXBhcmVkKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGFsZ29yaXRobShzZWFyY2gsIHRhcmdldCwgc2VhcmNoTG93ZXJDb2RlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnNjb3JlIDwgdGhyZXNob2xkKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0c0xlbiA8IGxpbWl0KSB7XG4gICAgICAgICAgICAgICAgICBxLmFkZChyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgKytyZXN1bHRzTGVuO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICArK2xpbWl0ZWRDb3VudDtcbiAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc2NvcmUgPiBxLnBlZWsoKS5zY29yZSkgcS5yZXBsYWNlVG9wKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzdWx0c0xlbiA9PT0gMCkgcmV0dXJuIG5vUmVzdWx0cztcbiAgICAgICAgICAgIHZhciByZXN1bHRzID0gbmV3IEFycmF5KHJlc3VsdHNMZW4pO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHJlc3VsdHNMZW4gLSAxOyBpID49IDA7IC0taSkgcmVzdWx0c1tpXSA9IHEucG9sbCgpO1xuICAgICAgICAgICAgcmVzdWx0cy50b3RhbCA9IHJlc3VsdHNMZW4gKyBsaW1pdGVkQ291bnQ7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdvQXN5bmM6IGZ1bmN0aW9uIGdvQXN5bmMoc2VhcmNoLCB0YXJnZXRzLCBvcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgY2FuY2VsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBwID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICBpZiAoc2VhcmNoID09ICdmYXJ6aGVyJykgcmV0dXJuIHJlc29sdmUoW3tcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiZmFyemhlciB3YXMgaGVyZSAoXi1eKikvXCIsXG4gICAgICAgICAgICAgICAgc2NvcmU6IDAsXG4gICAgICAgICAgICAgICAgaW5kZXhlczogWzAsIDEsIDIsIDMsIDQsIDUsIDZdLFxuICAgICAgICAgICAgICAgIG9iajogdGFyZ2V0cyA/IHRhcmdldHNbMF0gOiBudWxsXG4gICAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgICAgaWYgKCFzZWFyY2gpIHJldHVybiByZXNvbHZlKG5vUmVzdWx0cyk7XG4gICAgICAgICAgICAgIHNlYXJjaCA9IGZ1enp5c29ydC5wcmVwYXJlU2VhcmNoKHNlYXJjaCk7XG4gICAgICAgICAgICAgIHZhciBzZWFyY2hMb3dlckNvZGUgPSBzZWFyY2hbMF07XG4gICAgICAgICAgICAgIHZhciBxID0gZmFzdHByaW9yaXR5cXVldWUoKTtcbiAgICAgICAgICAgICAgdmFyIGlDdXJyZW50ID0gdGFyZ2V0cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICB2YXIgdGhyZXNob2xkID0gb3B0aW9ucyAmJiBvcHRpb25zLnRocmVzaG9sZCB8fCBpbnN0YW5jZU9wdGlvbnMgJiYgaW5zdGFuY2VPcHRpb25zLnRocmVzaG9sZCB8fCAtOTAwNzE5OTI1NDc0MDk5MTtcbiAgICAgICAgICAgICAgdmFyIGxpbWl0ID0gb3B0aW9ucyAmJiBvcHRpb25zLmxpbWl0IHx8IGluc3RhbmNlT3B0aW9ucyAmJiBpbnN0YW5jZU9wdGlvbnMubGltaXQgfHwgOTAwNzE5OTI1NDc0MDk5MTtcbiAgICAgICAgICAgICAgdmFyIGFsbG93VHlwbyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5hbGxvd1R5cG8gIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuYWxsb3dUeXBvIDogaW5zdGFuY2VPcHRpb25zICYmIGluc3RhbmNlT3B0aW9ucy5hbGxvd1R5cG8gIT09IHVuZGVmaW5lZCA/IGluc3RhbmNlT3B0aW9ucy5hbGxvd1R5cG8gOiB0cnVlO1xuICAgICAgICAgICAgICB2YXIgYWxnb3JpdGhtID0gYWxsb3dUeXBvID8gZnV6enlzb3J0LmFsZ29yaXRobSA6IGZ1enp5c29ydC5hbGdvcml0aG1Ob1R5cG87XG4gICAgICAgICAgICAgIHZhciByZXN1bHRzTGVuID0gMDtcbiAgICAgICAgICAgICAgdmFyIGxpbWl0ZWRDb3VudCA9IDA7XG4gICAgICAgICAgICAgIGZ1bmN0aW9uIHN0ZXAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbmNlbGVkKSByZXR1cm4gcmVqZWN0KCdjYW5jZWxlZCcpO1xuICAgICAgICAgICAgICAgIHZhciBzdGFydE1zID0gRGF0ZS5ub3coKTtcblxuICAgICAgICAgICAgICAgIC8vIFRoaXMgY29kZSBpcyBjb3B5L3Bhc3RlZCAzIHRpbWVzIGZvciBwZXJmb3JtYW5jZSByZWFzb25zIFtvcHRpb25zLmtleXMsIG9wdGlvbnMua2V5LCBubyBrZXlzXVxuXG4gICAgICAgICAgICAgICAgLy8gb3B0aW9ucy5rZXlzXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5rZXlzKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgc2NvcmVGbiA9IG9wdGlvbnMuc2NvcmVGbiB8fCBkZWZhdWx0U2NvcmVGbjtcbiAgICAgICAgICAgICAgICAgIHZhciBrZXlzID0gb3B0aW9ucy5rZXlzO1xuICAgICAgICAgICAgICAgICAgdmFyIGtleXNMZW4gPSBrZXlzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgIGZvciAoOyBpQ3VycmVudCA+PSAwOyAtLWlDdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpQ3VycmVudCAlIDEwMDAgLyppdGVtc1BlckNoZWNrKi8gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHN0YXJ0TXMgPj0gMTAgLyphc3luY0ludGVydmFsKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTm9kZSA/IHNldEltbWVkaWF0ZShzdGVwKSA6IHNldFRpbWVvdXQoc3RlcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBvYmogPSB0YXJnZXRzW2lDdXJyZW50XTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9ialJlc3VsdHMgPSBuZXcgQXJyYXkoa2V5c0xlbik7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleUkgPSBrZXlzTGVuIC0gMTsga2V5SSA+PSAwOyAtLWtleUkpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0ga2V5c1trZXlJXTtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZ2V0VmFsdWUob2JqLCBrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpSZXN1bHRzW2tleUldID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzT2JqKHRhcmdldCkpIHRhcmdldCA9IGZ1enp5c29ydC5nZXRQcmVwYXJlZCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAgIG9ialJlc3VsdHNba2V5SV0gPSBhbGdvcml0aG0oc2VhcmNoLCB0YXJnZXQsIHNlYXJjaExvd2VyQ29kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb2JqUmVzdWx0cy5vYmogPSBvYmo7IC8vIGJlZm9yZSBzY29yZUZuIHNvIHNjb3JlRm4gY2FuIHVzZSBpdFxuICAgICAgICAgICAgICAgICAgICB2YXIgc2NvcmUgPSBzY29yZUZuKG9ialJlc3VsdHMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2NvcmUgPT09IG51bGwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2NvcmUgPCB0aHJlc2hvbGQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICBvYmpSZXN1bHRzLnNjb3JlID0gc2NvcmU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRzTGVuIDwgbGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBxLmFkZChvYmpSZXN1bHRzKTtcbiAgICAgICAgICAgICAgICAgICAgICArK3Jlc3VsdHNMZW47XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgKytsaW1pdGVkQ291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHNjb3JlID4gcS5wZWVrKCkuc2NvcmUpIHEucmVwbGFjZVRvcChvYmpSZXN1bHRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAvLyBvcHRpb25zLmtleVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmtleSkge1xuICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IG9wdGlvbnMua2V5O1xuICAgICAgICAgICAgICAgICAgZm9yICg7IGlDdXJyZW50ID49IDA7IC0taUN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlDdXJyZW50ICUgMTAwMCAvKml0ZW1zUGVyQ2hlY2sqLyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChEYXRlLm5vdygpIC0gc3RhcnRNcyA+PSAxMCAvKmFzeW5jSW50ZXJ2YWwqLykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNOb2RlID8gc2V0SW1tZWRpYXRlKHN0ZXApIDogc2V0VGltZW91dChzdGVwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIG9iaiA9IHRhcmdldHNbaUN1cnJlbnRdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZ2V0VmFsdWUob2JqLCBrZXkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRhcmdldCkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNPYmoodGFyZ2V0KSkgdGFyZ2V0ID0gZnV6enlzb3J0LmdldFByZXBhcmVkKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBhbGdvcml0aG0oc2VhcmNoLCB0YXJnZXQsIHNlYXJjaExvd2VyQ29kZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnNjb3JlIDwgdGhyZXNob2xkKSBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBoYXZlIHRvIGNsb25lIHJlc3VsdCBzbyBkdXBsaWNhdGUgdGFyZ2V0cyBmcm9tIGRpZmZlcmVudCBvYmogY2FuIGVhY2ggcmVmZXJlbmNlIHRoZSBjb3JyZWN0IG9ialxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiByZXN1bHQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgIF90YXJnZXRMb3dlckNvZGVzOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgIF9uZXh0QmVnaW5uaW5nSW5kZXhlczogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICBzY29yZTogcmVzdWx0LnNjb3JlLFxuICAgICAgICAgICAgICAgICAgICAgIGluZGV4ZXM6IHJlc3VsdC5pbmRleGVzLFxuICAgICAgICAgICAgICAgICAgICAgIG9iajogb2JqXG4gICAgICAgICAgICAgICAgICAgIH07IC8vIGhpZGRlblxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRzTGVuIDwgbGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBxLmFkZChyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICsrcmVzdWx0c0xlbjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICArK2xpbWl0ZWRDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnNjb3JlID4gcS5wZWVrKCkuc2NvcmUpIHEucmVwbGFjZVRvcChyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC8vIG5vIGtleXNcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZm9yICg7IGlDdXJyZW50ID49IDA7IC0taUN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlDdXJyZW50ICUgMTAwMCAvKml0ZW1zUGVyQ2hlY2sqLyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChEYXRlLm5vdygpIC0gc3RhcnRNcyA+PSAxMCAvKmFzeW5jSW50ZXJ2YWwqLykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNOb2RlID8gc2V0SW1tZWRpYXRlKHN0ZXApIDogc2V0VGltZW91dChzdGVwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IHRhcmdldHNbaUN1cnJlbnRdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRhcmdldCkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNPYmoodGFyZ2V0KSkgdGFyZ2V0ID0gZnV6enlzb3J0LmdldFByZXBhcmVkKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBhbGdvcml0aG0oc2VhcmNoLCB0YXJnZXQsIHNlYXJjaExvd2VyQ29kZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnNjb3JlIDwgdGhyZXNob2xkKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdHNMZW4gPCBsaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICAgIHEuYWRkKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgKytyZXN1bHRzTGVuO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICsrbGltaXRlZENvdW50O1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc2NvcmUgPiBxLnBlZWsoKS5zY29yZSkgcS5yZXBsYWNlVG9wKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdHNMZW4gPT09IDApIHJldHVybiByZXNvbHZlKG5vUmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdHMgPSBuZXcgQXJyYXkocmVzdWx0c0xlbik7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IHJlc3VsdHNMZW4gLSAxOyBpID49IDA7IC0taSkgcmVzdWx0c1tpXSA9IHEucG9sbCgpO1xuICAgICAgICAgICAgICAgIHJlc3VsdHMudG90YWwgPSByZXN1bHRzTGVuICsgbGltaXRlZENvdW50O1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaXNOb2RlID8gc2V0SW1tZWRpYXRlKHN0ZXApIDogc3RlcCgpOyAvL3NldFRpbWVvdXQgaGVyZSBpcyB0b28gc2xvd1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgY2FuY2VsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaGlnaGxpZ2h0OiBmdW5jdGlvbiBoaWdobGlnaHQocmVzdWx0LCBoT3BlbiwgaENsb3NlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGhPcGVuID09ICdmdW5jdGlvbicpIHJldHVybiBmdXp6eXNvcnQuaGlnaGxpZ2h0Q2FsbGJhY2socmVzdWx0LCBoT3Blbik7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGlmIChoT3BlbiA9PT0gdW5kZWZpbmVkKSBoT3BlbiA9ICc8Yj4nO1xuICAgICAgICAgICAgaWYgKGhDbG9zZSA9PT0gdW5kZWZpbmVkKSBoQ2xvc2UgPSAnPC9iPic7XG4gICAgICAgICAgICB2YXIgaGlnaGxpZ2h0ZWQgPSAnJztcbiAgICAgICAgICAgIHZhciBtYXRjaGVzSW5kZXggPSAwO1xuICAgICAgICAgICAgdmFyIG9wZW5lZCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IHJlc3VsdC50YXJnZXQ7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0TGVuID0gdGFyZ2V0Lmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBtYXRjaGVzQmVzdCA9IHJlc3VsdC5pbmRleGVzO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YXJnZXRMZW47ICsraSkge1xuICAgICAgICAgICAgICB2YXIgY2hhciA9IHRhcmdldFtpXTtcbiAgICAgICAgICAgICAgaWYgKG1hdGNoZXNCZXN0W21hdGNoZXNJbmRleF0gPT09IGkpIHtcbiAgICAgICAgICAgICAgICArK21hdGNoZXNJbmRleDtcbiAgICAgICAgICAgICAgICBpZiAoIW9wZW5lZCkge1xuICAgICAgICAgICAgICAgICAgb3BlbmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodGVkICs9IGhPcGVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hlc0luZGV4ID09PSBtYXRjaGVzQmVzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodGVkICs9IGNoYXIgKyBoQ2xvc2UgKyB0YXJnZXQuc3Vic3RyKGkgKyAxKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAob3BlbmVkKSB7XG4gICAgICAgICAgICAgICAgICBvcGVuZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodGVkICs9IGhDbG9zZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaGlnaGxpZ2h0ZWQgKz0gY2hhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBoaWdobGlnaHRlZDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhpZ2hsaWdodENhbGxiYWNrOiBmdW5jdGlvbiBoaWdobGlnaHRDYWxsYmFjayhyZXN1bHQsIGNiKSB7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSByZXN1bHQudGFyZ2V0O1xuICAgICAgICAgICAgdmFyIHRhcmdldExlbiA9IHRhcmdldC5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgaW5kZXhlcyA9IHJlc3VsdC5pbmRleGVzO1xuICAgICAgICAgICAgdmFyIGhpZ2hsaWdodGVkID0gJyc7XG4gICAgICAgICAgICB2YXIgbWF0Y2hJID0gMDtcbiAgICAgICAgICAgIHZhciBpbmRleGVzSSA9IDA7XG4gICAgICAgICAgICB2YXIgb3BlbmVkID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhcmdldExlbjsgKytpKSB7XG4gICAgICAgICAgICAgIHZhciBjaGFyID0gdGFyZ2V0W2ldO1xuICAgICAgICAgICAgICBpZiAoaW5kZXhlc1tpbmRleGVzSV0gPT09IGkpIHtcbiAgICAgICAgICAgICAgICArK2luZGV4ZXNJO1xuICAgICAgICAgICAgICAgIGlmICghb3BlbmVkKSB7XG4gICAgICAgICAgICAgICAgICBvcGVuZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaGlnaGxpZ2h0ZWQpO1xuICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0ZWQgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ZXNJID09PSBpbmRleGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0ZWQgKz0gY2hhcjtcbiAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNiKGhpZ2hsaWdodGVkLCBtYXRjaEkrKykpO1xuICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0ZWQgPSAnJztcbiAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRhcmdldC5zdWJzdHIoaSArIDEpKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAob3BlbmVkKSB7XG4gICAgICAgICAgICAgICAgICBvcGVuZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNiKGhpZ2hsaWdodGVkLCBtYXRjaEkrKykpO1xuICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0ZWQgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaGlnaGxpZ2h0ZWQgKz0gY2hhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcmVwYXJlOiBmdW5jdGlvbiBwcmVwYXJlKHRhcmdldCkge1xuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHJldHVybiB7XG4gICAgICAgICAgICAgIHRhcmdldDogJycsXG4gICAgICAgICAgICAgIF90YXJnZXRMb3dlckNvZGVzOiBbMCAvKnRoaXMgMCBkb2Vzbid0IG1ha2Ugc2Vuc2UuIGhlcmUgYmVjYXVzZSBhbiBlbXB0eSBhcnJheSBjYXVzZXMgdGhlIGFsZ29yaXRobSB0byBkZW9wdGltaXplIGFuZCBydW4gNTAlIHNsb3dlciEqL10sXG4gICAgICAgICAgICAgIF9uZXh0QmVnaW5uaW5nSW5kZXhlczogbnVsbCxcbiAgICAgICAgICAgICAgc2NvcmU6IG51bGwsXG4gICAgICAgICAgICAgIGluZGV4ZXM6IG51bGwsXG4gICAgICAgICAgICAgIG9iajogbnVsbFxuICAgICAgICAgICAgfTsgLy8gaGlkZGVuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgX3RhcmdldExvd2VyQ29kZXM6IGZ1enp5c29ydC5wcmVwYXJlTG93ZXJDb2Rlcyh0YXJnZXQpLFxuICAgICAgICAgICAgICBfbmV4dEJlZ2lubmluZ0luZGV4ZXM6IG51bGwsXG4gICAgICAgICAgICAgIHNjb3JlOiBudWxsLFxuICAgICAgICAgICAgICBpbmRleGVzOiBudWxsLFxuICAgICAgICAgICAgICBvYmo6IG51bGxcbiAgICAgICAgICAgIH07IC8vIGhpZGRlblxuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJlcGFyZVNsb3c6IGZ1bmN0aW9uIHByZXBhcmVTbG93KHRhcmdldCkge1xuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHJldHVybiB7XG4gICAgICAgICAgICAgIHRhcmdldDogJycsXG4gICAgICAgICAgICAgIF90YXJnZXRMb3dlckNvZGVzOiBbMCAvKnRoaXMgMCBkb2Vzbid0IG1ha2Ugc2Vuc2UuIGhlcmUgYmVjYXVzZSBhbiBlbXB0eSBhcnJheSBjYXVzZXMgdGhlIGFsZ29yaXRobSB0byBkZW9wdGltaXplIGFuZCBydW4gNTAlIHNsb3dlciEqL10sXG4gICAgICAgICAgICAgIF9uZXh0QmVnaW5uaW5nSW5kZXhlczogbnVsbCxcbiAgICAgICAgICAgICAgc2NvcmU6IG51bGwsXG4gICAgICAgICAgICAgIGluZGV4ZXM6IG51bGwsXG4gICAgICAgICAgICAgIG9iajogbnVsbFxuICAgICAgICAgICAgfTsgLy8gaGlkZGVuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgX3RhcmdldExvd2VyQ29kZXM6IGZ1enp5c29ydC5wcmVwYXJlTG93ZXJDb2Rlcyh0YXJnZXQpLFxuICAgICAgICAgICAgICBfbmV4dEJlZ2lubmluZ0luZGV4ZXM6IGZ1enp5c29ydC5wcmVwYXJlTmV4dEJlZ2lubmluZ0luZGV4ZXModGFyZ2V0KSxcbiAgICAgICAgICAgICAgc2NvcmU6IG51bGwsXG4gICAgICAgICAgICAgIGluZGV4ZXM6IG51bGwsXG4gICAgICAgICAgICAgIG9iajogbnVsbFxuICAgICAgICAgICAgfTsgLy8gaGlkZGVuXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcmVwYXJlU2VhcmNoOiBmdW5jdGlvbiBwcmVwYXJlU2VhcmNoKHNlYXJjaCkge1xuICAgICAgICAgICAgaWYgKCFzZWFyY2gpIHNlYXJjaCA9ICcnO1xuICAgICAgICAgICAgcmV0dXJuIGZ1enp5c29ydC5wcmVwYXJlTG93ZXJDb2RlcyhzZWFyY2gpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8gQmVsb3cgdGhpcyBwb2ludCBpcyBvbmx5IGludGVybmFsIGNvZGVcbiAgICAgICAgICAvLyBCZWxvdyB0aGlzIHBvaW50IGlzIG9ubHkgaW50ZXJuYWwgY29kZVxuICAgICAgICAgIC8vIEJlbG93IHRoaXMgcG9pbnQgaXMgb25seSBpbnRlcm5hbCBjb2RlXG4gICAgICAgICAgLy8gQmVsb3cgdGhpcyBwb2ludCBpcyBvbmx5IGludGVybmFsIGNvZGVcblxuICAgICAgICAgIGdldFByZXBhcmVkOiBmdW5jdGlvbiBnZXRQcmVwYXJlZCh0YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQubGVuZ3RoID4gOTk5KSByZXR1cm4gZnV6enlzb3J0LnByZXBhcmUodGFyZ2V0KTsgLy8gZG9uJ3QgY2FjaGUgaHVnZSB0YXJnZXRzXG4gICAgICAgICAgICB2YXIgdGFyZ2V0UHJlcGFyZWQgPSBwcmVwYXJlZENhY2hlLmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgaWYgKHRhcmdldFByZXBhcmVkICE9PSB1bmRlZmluZWQpIHJldHVybiB0YXJnZXRQcmVwYXJlZDtcbiAgICAgICAgICAgIHRhcmdldFByZXBhcmVkID0gZnV6enlzb3J0LnByZXBhcmUodGFyZ2V0KTtcbiAgICAgICAgICAgIHByZXBhcmVkQ2FjaGUuc2V0KHRhcmdldCwgdGFyZ2V0UHJlcGFyZWQpO1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldFByZXBhcmVkO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0UHJlcGFyZWRTZWFyY2g6IGZ1bmN0aW9uIGdldFByZXBhcmVkU2VhcmNoKHNlYXJjaCkge1xuICAgICAgICAgICAgaWYgKHNlYXJjaC5sZW5ndGggPiA5OTkpIHJldHVybiBmdXp6eXNvcnQucHJlcGFyZVNlYXJjaChzZWFyY2gpOyAvLyBkb24ndCBjYWNoZSBodWdlIHNlYXJjaGVzXG4gICAgICAgICAgICB2YXIgc2VhcmNoUHJlcGFyZWQgPSBwcmVwYXJlZFNlYXJjaENhY2hlLmdldChzZWFyY2gpO1xuICAgICAgICAgICAgaWYgKHNlYXJjaFByZXBhcmVkICE9PSB1bmRlZmluZWQpIHJldHVybiBzZWFyY2hQcmVwYXJlZDtcbiAgICAgICAgICAgIHNlYXJjaFByZXBhcmVkID0gZnV6enlzb3J0LnByZXBhcmVTZWFyY2goc2VhcmNoKTtcbiAgICAgICAgICAgIHByZXBhcmVkU2VhcmNoQ2FjaGUuc2V0KHNlYXJjaCwgc2VhcmNoUHJlcGFyZWQpO1xuICAgICAgICAgICAgcmV0dXJuIHNlYXJjaFByZXBhcmVkO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYWxnb3JpdGhtOiBmdW5jdGlvbiBhbGdvcml0aG0oc2VhcmNoTG93ZXJDb2RlcywgcHJlcGFyZWQsIHNlYXJjaExvd2VyQ29kZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldExvd2VyQ29kZXMgPSBwcmVwYXJlZC5fdGFyZ2V0TG93ZXJDb2RlcztcbiAgICAgICAgICAgIHZhciBzZWFyY2hMZW4gPSBzZWFyY2hMb3dlckNvZGVzLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciB0YXJnZXRMZW4gPSB0YXJnZXRMb3dlckNvZGVzLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBzZWFyY2hJID0gMDsgLy8gd2hlcmUgd2UgYXRcbiAgICAgICAgICAgIHZhciB0YXJnZXRJID0gMDsgLy8gd2hlcmUgeW91IGF0XG4gICAgICAgICAgICB2YXIgdHlwb1NpbXBsZUkgPSAwO1xuICAgICAgICAgICAgdmFyIG1hdGNoZXNTaW1wbGVMZW4gPSAwO1xuXG4gICAgICAgICAgICAvLyB2ZXJ5IGJhc2ljIGZ1enp5IG1hdGNoOyB0byByZW1vdmUgbm9uLW1hdGNoaW5nIHRhcmdldHMgQVNBUCFcbiAgICAgICAgICAgIC8vIHdhbGsgdGhyb3VnaCB0YXJnZXQuIGZpbmQgc2VxdWVudGlhbCBtYXRjaGVzLlxuICAgICAgICAgICAgLy8gaWYgYWxsIGNoYXJzIGFyZW4ndCBmb3VuZCB0aGVuIGV4aXRcbiAgICAgICAgICAgIGZvciAoOzspIHtcbiAgICAgICAgICAgICAgdmFyIGlzTWF0Y2ggPSBzZWFyY2hMb3dlckNvZGUgPT09IHRhcmdldExvd2VyQ29kZXNbdGFyZ2V0SV07XG4gICAgICAgICAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2hlc1NpbXBsZVttYXRjaGVzU2ltcGxlTGVuKytdID0gdGFyZ2V0STtcbiAgICAgICAgICAgICAgICArK3NlYXJjaEk7XG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaEkgPT09IHNlYXJjaExlbikgYnJlYWs7XG4gICAgICAgICAgICAgICAgc2VhcmNoTG93ZXJDb2RlID0gc2VhcmNoTG93ZXJDb2Rlc1t0eXBvU2ltcGxlSSA9PT0gMCA/IHNlYXJjaEkgOiB0eXBvU2ltcGxlSSA9PT0gc2VhcmNoSSA/IHNlYXJjaEkgKyAxIDogdHlwb1NpbXBsZUkgPT09IHNlYXJjaEkgLSAxID8gc2VhcmNoSSAtIDEgOiBzZWFyY2hJXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICArK3RhcmdldEk7XG4gICAgICAgICAgICAgIGlmICh0YXJnZXRJID49IHRhcmdldExlbikge1xuICAgICAgICAgICAgICAgIC8vIEZhaWxlZCB0byBmaW5kIHNlYXJjaElcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgdHlwbyBvciBleGl0XG4gICAgICAgICAgICAgICAgLy8gd2UgZ28gYXMgZmFyIGFzIHBvc3NpYmxlIGJlZm9yZSB0cnlpbmcgdG8gdHJhbnNwb3NlXG4gICAgICAgICAgICAgICAgLy8gdGhlbiB3ZSB0cmFuc3Bvc2UgYmFja3dhcmRzIHVudGlsIHdlIHJlYWNoIHRoZSBiZWdpbm5pbmdcbiAgICAgICAgICAgICAgICBmb3IgKDs7KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoSSA8PSAxKSByZXR1cm4gbnVsbDsgLy8gbm90IGFsbG93ZWQgdG8gdHJhbnNwb3NlIGZpcnN0IGNoYXJcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBvU2ltcGxlSSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlbid0IHRyaWVkIHRvIHRyYW5zcG9zZSB5ZXRcbiAgICAgICAgICAgICAgICAgICAgLS1zZWFyY2hJO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VhcmNoTG93ZXJDb2RlTmV3ID0gc2VhcmNoTG93ZXJDb2Rlc1tzZWFyY2hJXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaExvd2VyQ29kZSA9PT0gc2VhcmNoTG93ZXJDb2RlTmV3KSBjb250aW51ZTsgLy8gZG9lc24ndCBtYWtlIHNlbnNlIHRvIHRyYW5zcG9zZSBhIHJlcGVhdCBjaGFyXG4gICAgICAgICAgICAgICAgICAgIHR5cG9TaW1wbGVJID0gc2VhcmNoSTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBvU2ltcGxlSSA9PT0gMSkgcmV0dXJuIG51bGw7IC8vIHJlYWNoZWQgdGhlIGVuZCBvZiB0aGUgbGluZSBmb3IgdHJhbnNwb3NpbmdcbiAgICAgICAgICAgICAgICAgICAgLS10eXBvU2ltcGxlSTtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoSSA9IHR5cG9TaW1wbGVJO1xuICAgICAgICAgICAgICAgICAgICBzZWFyY2hMb3dlckNvZGUgPSBzZWFyY2hMb3dlckNvZGVzW3NlYXJjaEkgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlYXJjaExvd2VyQ29kZU5ldyA9IHNlYXJjaExvd2VyQ29kZXNbc2VhcmNoSV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2hMb3dlckNvZGUgPT09IHNlYXJjaExvd2VyQ29kZU5ldykgY29udGludWU7IC8vIGRvZXNuJ3QgbWFrZSBzZW5zZSB0byB0cmFuc3Bvc2UgYSByZXBlYXQgY2hhclxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgbWF0Y2hlc1NpbXBsZUxlbiA9IHNlYXJjaEk7XG4gICAgICAgICAgICAgICAgICB0YXJnZXRJID0gbWF0Y2hlc1NpbXBsZVttYXRjaGVzU2ltcGxlTGVuIC0gMV0gKyAxO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc2VhcmNoSSA9IDA7XG4gICAgICAgICAgICB2YXIgdHlwb1N0cmljdEkgPSAwO1xuICAgICAgICAgICAgdmFyIHN1Y2Nlc3NTdHJpY3QgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBtYXRjaGVzU3RyaWN0TGVuID0gMDtcbiAgICAgICAgICAgIHZhciBuZXh0QmVnaW5uaW5nSW5kZXhlcyA9IHByZXBhcmVkLl9uZXh0QmVnaW5uaW5nSW5kZXhlcztcbiAgICAgICAgICAgIGlmIChuZXh0QmVnaW5uaW5nSW5kZXhlcyA9PT0gbnVsbCkgbmV4dEJlZ2lubmluZ0luZGV4ZXMgPSBwcmVwYXJlZC5fbmV4dEJlZ2lubmluZ0luZGV4ZXMgPSBmdXp6eXNvcnQucHJlcGFyZU5leHRCZWdpbm5pbmdJbmRleGVzKHByZXBhcmVkLnRhcmdldCk7XG4gICAgICAgICAgICB2YXIgZmlyc3RQb3NzaWJsZUkgPSB0YXJnZXRJID0gbWF0Y2hlc1NpbXBsZVswXSA9PT0gMCA/IDAgOiBuZXh0QmVnaW5uaW5nSW5kZXhlc1ttYXRjaGVzU2ltcGxlWzBdIC0gMV07XG5cbiAgICAgICAgICAgIC8vIE91ciB0YXJnZXQgc3RyaW5nIHN1Y2Nlc3NmdWxseSBtYXRjaGVkIGFsbCBjaGFyYWN0ZXJzIGluIHNlcXVlbmNlIVxuICAgICAgICAgICAgLy8gTGV0J3MgdHJ5IGEgbW9yZSBhZHZhbmNlZCBhbmQgc3RyaWN0IHRlc3QgdG8gaW1wcm92ZSB0aGUgc2NvcmVcbiAgICAgICAgICAgIC8vIG9ubHkgY291bnQgaXQgYXMgYSBtYXRjaCBpZiBpdCdzIGNvbnNlY3V0aXZlIG9yIGEgYmVnaW5uaW5nIGNoYXJhY3RlciFcbiAgICAgICAgICAgIGlmICh0YXJnZXRJICE9PSB0YXJnZXRMZW4pIGZvciAoOzspIHtcbiAgICAgICAgICAgICAgaWYgKHRhcmdldEkgPj0gdGFyZ2V0TGVuKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZmFpbGVkIHRvIGZpbmQgYSBnb29kIHNwb3QgZm9yIHRoaXMgc2VhcmNoIGNoYXIsIGdvIGJhY2sgdG8gdGhlIHByZXZpb3VzIHNlYXJjaCBjaGFyIGFuZCBmb3JjZSBpdCBmb3J3YXJkXG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaEkgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgLy8gV2UgZmFpbGVkIHRvIHB1c2ggY2hhcnMgZm9yd2FyZCBmb3IgYSBiZXR0ZXIgbWF0Y2hcbiAgICAgICAgICAgICAgICAgIC8vIHRyYW5zcG9zZSwgc3RhcnRpbmcgZnJvbSB0aGUgYmVnaW5uaW5nXG4gICAgICAgICAgICAgICAgICArK3R5cG9TdHJpY3RJO1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cG9TdHJpY3RJID4gc2VhcmNoTGVuIC0gMikgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoTG93ZXJDb2Rlc1t0eXBvU3RyaWN0SV0gPT09IHNlYXJjaExvd2VyQ29kZXNbdHlwb1N0cmljdEkgKyAxXSkgY29udGludWU7IC8vIGRvZXNuJ3QgbWFrZSBzZW5zZSB0byB0cmFuc3Bvc2UgYSByZXBlYXQgY2hhclxuICAgICAgICAgICAgICAgICAgdGFyZ2V0SSA9IGZpcnN0UG9zc2libGVJO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC0tc2VhcmNoSTtcbiAgICAgICAgICAgICAgICB2YXIgbGFzdE1hdGNoID0gbWF0Y2hlc1N0cmljdFstLW1hdGNoZXNTdHJpY3RMZW5dO1xuICAgICAgICAgICAgICAgIHRhcmdldEkgPSBuZXh0QmVnaW5uaW5nSW5kZXhlc1tsYXN0TWF0Y2hdO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBpc01hdGNoID0gc2VhcmNoTG93ZXJDb2Rlc1t0eXBvU3RyaWN0SSA9PT0gMCA/IHNlYXJjaEkgOiB0eXBvU3RyaWN0SSA9PT0gc2VhcmNoSSA/IHNlYXJjaEkgKyAxIDogdHlwb1N0cmljdEkgPT09IHNlYXJjaEkgLSAxID8gc2VhcmNoSSAtIDEgOiBzZWFyY2hJXSA9PT0gdGFyZ2V0TG93ZXJDb2Rlc1t0YXJnZXRJXTtcbiAgICAgICAgICAgICAgICBpZiAoaXNNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgbWF0Y2hlc1N0cmljdFttYXRjaGVzU3RyaWN0TGVuKytdID0gdGFyZ2V0STtcbiAgICAgICAgICAgICAgICAgICsrc2VhcmNoSTtcbiAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2hJID09PSBzZWFyY2hMZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc1N0cmljdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgKyt0YXJnZXRJO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB0YXJnZXRJID0gbmV4dEJlZ2lubmluZ0luZGV4ZXNbdGFyZ2V0SV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC8vIHRhbGx5IHVwIHRoZSBzY29yZSAmIGtlZXAgdHJhY2sgb2YgbWF0Y2hlcyBmb3IgaGlnaGxpZ2h0aW5nIGxhdGVyXG4gICAgICAgICAgICAgIGlmIChzdWNjZXNzU3RyaWN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoZXNCZXN0ID0gbWF0Y2hlc1N0cmljdDtcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2hlc0Jlc3RMZW4gPSBtYXRjaGVzU3RyaWN0TGVuO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaGVzQmVzdCA9IG1hdGNoZXNTaW1wbGU7XG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoZXNCZXN0TGVuID0gbWF0Y2hlc1NpbXBsZUxlbjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXIgc2NvcmUgPSAwO1xuICAgICAgICAgICAgICB2YXIgbGFzdFRhcmdldEkgPSAtMTtcbiAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWFyY2hMZW47ICsraSkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXRJID0gbWF0Y2hlc0Jlc3RbaV07XG4gICAgICAgICAgICAgICAgLy8gc2NvcmUgb25seSBnb2VzIGRvd24gaWYgdGhleSdyZSBub3QgY29uc2VjdXRpdmVcbiAgICAgICAgICAgICAgICBpZiAobGFzdFRhcmdldEkgIT09IHRhcmdldEkgLSAxKSBzY29yZSAtPSB0YXJnZXRJO1xuICAgICAgICAgICAgICAgIGxhc3RUYXJnZXRJID0gdGFyZ2V0STtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3NTdHJpY3QpIHtcbiAgICAgICAgICAgICAgICBzY29yZSAqPSAxMDAwO1xuICAgICAgICAgICAgICAgIGlmICh0eXBvU2ltcGxlSSAhPT0gMCkgc2NvcmUgKz0gLTIwOyAvKnR5cG9QZW5hbHR5Ki9cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwb1N0cmljdEkgIT09IDApIHNjb3JlICs9IC0yMDsgLyp0eXBvUGVuYWx0eSovXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2NvcmUgLT0gdGFyZ2V0TGVuIC0gc2VhcmNoTGVuO1xuICAgICAgICAgICAgICBwcmVwYXJlZC5zY29yZSA9IHNjb3JlO1xuICAgICAgICAgICAgICBwcmVwYXJlZC5pbmRleGVzID0gbmV3IEFycmF5KG1hdGNoZXNCZXN0TGVuKTtcbiAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IG1hdGNoZXNCZXN0TGVuIC0gMTsgaSA+PSAwOyAtLWkpIHByZXBhcmVkLmluZGV4ZXNbaV0gPSBtYXRjaGVzQmVzdFtpXTtcbiAgICAgICAgICAgICAgcmV0dXJuIHByZXBhcmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgYWxnb3JpdGhtTm9UeXBvOiBmdW5jdGlvbiBhbGdvcml0aG1Ob1R5cG8oc2VhcmNoTG93ZXJDb2RlcywgcHJlcGFyZWQsIHNlYXJjaExvd2VyQ29kZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldExvd2VyQ29kZXMgPSBwcmVwYXJlZC5fdGFyZ2V0TG93ZXJDb2RlcztcbiAgICAgICAgICAgIHZhciBzZWFyY2hMZW4gPSBzZWFyY2hMb3dlckNvZGVzLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciB0YXJnZXRMZW4gPSB0YXJnZXRMb3dlckNvZGVzLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBzZWFyY2hJID0gMDsgLy8gd2hlcmUgd2UgYXRcbiAgICAgICAgICAgIHZhciB0YXJnZXRJID0gMDsgLy8gd2hlcmUgeW91IGF0XG4gICAgICAgICAgICB2YXIgbWF0Y2hlc1NpbXBsZUxlbiA9IDA7XG5cbiAgICAgICAgICAgIC8vIHZlcnkgYmFzaWMgZnV6enkgbWF0Y2g7IHRvIHJlbW92ZSBub24tbWF0Y2hpbmcgdGFyZ2V0cyBBU0FQIVxuICAgICAgICAgICAgLy8gd2FsayB0aHJvdWdoIHRhcmdldC4gZmluZCBzZXF1ZW50aWFsIG1hdGNoZXMuXG4gICAgICAgICAgICAvLyBpZiBhbGwgY2hhcnMgYXJlbid0IGZvdW5kIHRoZW4gZXhpdFxuICAgICAgICAgICAgZm9yICg7Oykge1xuICAgICAgICAgICAgICB2YXIgaXNNYXRjaCA9IHNlYXJjaExvd2VyQ29kZSA9PT0gdGFyZ2V0TG93ZXJDb2Rlc1t0YXJnZXRJXTtcbiAgICAgICAgICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBtYXRjaGVzU2ltcGxlW21hdGNoZXNTaW1wbGVMZW4rK10gPSB0YXJnZXRJO1xuICAgICAgICAgICAgICAgICsrc2VhcmNoSTtcbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoSSA9PT0gc2VhcmNoTGVuKSBicmVhaztcbiAgICAgICAgICAgICAgICBzZWFyY2hMb3dlckNvZGUgPSBzZWFyY2hMb3dlckNvZGVzW3NlYXJjaEldO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICsrdGFyZ2V0STtcbiAgICAgICAgICAgICAgaWYgKHRhcmdldEkgPj0gdGFyZ2V0TGVuKSByZXR1cm4gbnVsbDsgLy8gRmFpbGVkIHRvIGZpbmQgc2VhcmNoSVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHNlYXJjaEkgPSAwO1xuICAgICAgICAgICAgdmFyIHN1Y2Nlc3NTdHJpY3QgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBtYXRjaGVzU3RyaWN0TGVuID0gMDtcbiAgICAgICAgICAgIHZhciBuZXh0QmVnaW5uaW5nSW5kZXhlcyA9IHByZXBhcmVkLl9uZXh0QmVnaW5uaW5nSW5kZXhlcztcbiAgICAgICAgICAgIGlmIChuZXh0QmVnaW5uaW5nSW5kZXhlcyA9PT0gbnVsbCkgbmV4dEJlZ2lubmluZ0luZGV4ZXMgPSBwcmVwYXJlZC5fbmV4dEJlZ2lubmluZ0luZGV4ZXMgPSBmdXp6eXNvcnQucHJlcGFyZU5leHRCZWdpbm5pbmdJbmRleGVzKHByZXBhcmVkLnRhcmdldCk7XG4gICAgICAgICAgICB0YXJnZXRJID0gbWF0Y2hlc1NpbXBsZVswXSA9PT0gMCA/IDAgOiBuZXh0QmVnaW5uaW5nSW5kZXhlc1ttYXRjaGVzU2ltcGxlWzBdIC0gMV07XG5cbiAgICAgICAgICAgIC8vIE91ciB0YXJnZXQgc3RyaW5nIHN1Y2Nlc3NmdWxseSBtYXRjaGVkIGFsbCBjaGFyYWN0ZXJzIGluIHNlcXVlbmNlIVxuICAgICAgICAgICAgLy8gTGV0J3MgdHJ5IGEgbW9yZSBhZHZhbmNlZCBhbmQgc3RyaWN0IHRlc3QgdG8gaW1wcm92ZSB0aGUgc2NvcmVcbiAgICAgICAgICAgIC8vIG9ubHkgY291bnQgaXQgYXMgYSBtYXRjaCBpZiBpdCdzIGNvbnNlY3V0aXZlIG9yIGEgYmVnaW5uaW5nIGNoYXJhY3RlciFcbiAgICAgICAgICAgIGlmICh0YXJnZXRJICE9PSB0YXJnZXRMZW4pIGZvciAoOzspIHtcbiAgICAgICAgICAgICAgaWYgKHRhcmdldEkgPj0gdGFyZ2V0TGVuKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZmFpbGVkIHRvIGZpbmQgYSBnb29kIHNwb3QgZm9yIHRoaXMgc2VhcmNoIGNoYXIsIGdvIGJhY2sgdG8gdGhlIHByZXZpb3VzIHNlYXJjaCBjaGFyIGFuZCBmb3JjZSBpdCBmb3J3YXJkXG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaEkgPD0gMCkgYnJlYWs7IC8vIFdlIGZhaWxlZCB0byBwdXNoIGNoYXJzIGZvcndhcmQgZm9yIGEgYmV0dGVyIG1hdGNoXG5cbiAgICAgICAgICAgICAgICAtLXNlYXJjaEk7XG4gICAgICAgICAgICAgICAgdmFyIGxhc3RNYXRjaCA9IG1hdGNoZXNTdHJpY3RbLS1tYXRjaGVzU3RyaWN0TGVuXTtcbiAgICAgICAgICAgICAgICB0YXJnZXRJID0gbmV4dEJlZ2lubmluZ0luZGV4ZXNbbGFzdE1hdGNoXTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgaXNNYXRjaCA9IHNlYXJjaExvd2VyQ29kZXNbc2VhcmNoSV0gPT09IHRhcmdldExvd2VyQ29kZXNbdGFyZ2V0SV07XG4gICAgICAgICAgICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgIG1hdGNoZXNTdHJpY3RbbWF0Y2hlc1N0cmljdExlbisrXSA9IHRhcmdldEk7XG4gICAgICAgICAgICAgICAgICArK3NlYXJjaEk7XG4gICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoSSA9PT0gc2VhcmNoTGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NTdHJpY3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICsrdGFyZ2V0STtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0SSA9IG5leHRCZWdpbm5pbmdJbmRleGVzW3RhcmdldEldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAvLyB0YWxseSB1cCB0aGUgc2NvcmUgJiBrZWVwIHRyYWNrIG9mIG1hdGNoZXMgZm9yIGhpZ2hsaWdodGluZyBsYXRlclxuICAgICAgICAgICAgICBpZiAoc3VjY2Vzc1N0cmljdCkge1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaGVzQmVzdCA9IG1hdGNoZXNTdHJpY3Q7XG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoZXNCZXN0TGVuID0gbWF0Y2hlc1N0cmljdExlbjtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2hlc0Jlc3QgPSBtYXRjaGVzU2ltcGxlO1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaGVzQmVzdExlbiA9IG1hdGNoZXNTaW1wbGVMZW47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFyIHNjb3JlID0gMDtcbiAgICAgICAgICAgICAgdmFyIGxhc3RUYXJnZXRJID0gLTE7XG4gICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VhcmNoTGVuOyArK2kpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0SSA9IG1hdGNoZXNCZXN0W2ldO1xuICAgICAgICAgICAgICAgIC8vIHNjb3JlIG9ubHkgZ29lcyBkb3duIGlmIHRoZXkncmUgbm90IGNvbnNlY3V0aXZlXG4gICAgICAgICAgICAgICAgaWYgKGxhc3RUYXJnZXRJICE9PSB0YXJnZXRJIC0gMSkgc2NvcmUgLT0gdGFyZ2V0STtcbiAgICAgICAgICAgICAgICBsYXN0VGFyZ2V0SSA9IHRhcmdldEk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzU3RyaWN0KSBzY29yZSAqPSAxMDAwO1xuICAgICAgICAgICAgICBzY29yZSAtPSB0YXJnZXRMZW4gLSBzZWFyY2hMZW47XG4gICAgICAgICAgICAgIHByZXBhcmVkLnNjb3JlID0gc2NvcmU7XG4gICAgICAgICAgICAgIHByZXBhcmVkLmluZGV4ZXMgPSBuZXcgQXJyYXkobWF0Y2hlc0Jlc3RMZW4pO1xuICAgICAgICAgICAgICBmb3IgKHZhciBpID0gbWF0Y2hlc0Jlc3RMZW4gLSAxOyBpID49IDA7IC0taSkgcHJlcGFyZWQuaW5kZXhlc1tpXSA9IG1hdGNoZXNCZXN0W2ldO1xuICAgICAgICAgICAgICByZXR1cm4gcHJlcGFyZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcmVwYXJlTG93ZXJDb2RlczogZnVuY3Rpb24gcHJlcGFyZUxvd2VyQ29kZXMoc3RyKSB7XG4gICAgICAgICAgICB2YXIgc3RyTGVuID0gc3RyLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBsb3dlckNvZGVzID0gW107IC8vIG5ldyBBcnJheShzdHJMZW4pICAgIHNwYXJzZSBhcnJheSBpcyB0b28gc2xvd1xuICAgICAgICAgICAgdmFyIGxvd2VyID0gc3RyLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ckxlbjsgKytpKSBsb3dlckNvZGVzW2ldID0gbG93ZXIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgICAgIHJldHVybiBsb3dlckNvZGVzO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJlcGFyZUJlZ2lubmluZ0luZGV4ZXM6IGZ1bmN0aW9uIHByZXBhcmVCZWdpbm5pbmdJbmRleGVzKHRhcmdldCkge1xuICAgICAgICAgICAgdmFyIHRhcmdldExlbiA9IHRhcmdldC5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgYmVnaW5uaW5nSW5kZXhlcyA9IFtdO1xuICAgICAgICAgICAgdmFyIGJlZ2lubmluZ0luZGV4ZXNMZW4gPSAwO1xuICAgICAgICAgICAgdmFyIHdhc1VwcGVyID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgd2FzQWxwaGFudW0gPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFyZ2V0TGVuOyArK2kpIHtcbiAgICAgICAgICAgICAgdmFyIHRhcmdldENvZGUgPSB0YXJnZXQuY2hhckNvZGVBdChpKTtcbiAgICAgICAgICAgICAgdmFyIGlzVXBwZXIgPSB0YXJnZXRDb2RlID49IDY1ICYmIHRhcmdldENvZGUgPD0gOTA7XG4gICAgICAgICAgICAgIHZhciBpc0FscGhhbnVtID0gaXNVcHBlciB8fCB0YXJnZXRDb2RlID49IDk3ICYmIHRhcmdldENvZGUgPD0gMTIyIHx8IHRhcmdldENvZGUgPj0gNDggJiYgdGFyZ2V0Q29kZSA8PSA1NztcbiAgICAgICAgICAgICAgdmFyIGlzQmVnaW5uaW5nID0gaXNVcHBlciAmJiAhd2FzVXBwZXIgfHwgIXdhc0FscGhhbnVtIHx8ICFpc0FscGhhbnVtO1xuICAgICAgICAgICAgICB3YXNVcHBlciA9IGlzVXBwZXI7XG4gICAgICAgICAgICAgIHdhc0FscGhhbnVtID0gaXNBbHBoYW51bTtcbiAgICAgICAgICAgICAgaWYgKGlzQmVnaW5uaW5nKSBiZWdpbm5pbmdJbmRleGVzW2JlZ2lubmluZ0luZGV4ZXNMZW4rK10gPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGJlZ2lubmluZ0luZGV4ZXM7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcmVwYXJlTmV4dEJlZ2lubmluZ0luZGV4ZXM6IGZ1bmN0aW9uIHByZXBhcmVOZXh0QmVnaW5uaW5nSW5kZXhlcyh0YXJnZXQpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXRMZW4gPSB0YXJnZXQubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGJlZ2lubmluZ0luZGV4ZXMgPSBmdXp6eXNvcnQucHJlcGFyZUJlZ2lubmluZ0luZGV4ZXModGFyZ2V0KTtcbiAgICAgICAgICAgIHZhciBuZXh0QmVnaW5uaW5nSW5kZXhlcyA9IFtdOyAvLyBuZXcgQXJyYXkodGFyZ2V0TGVuKSAgICAgc3BhcnNlIGFycmF5IGlzIHRvbyBzbG93XG4gICAgICAgICAgICB2YXIgbGFzdElzQmVnaW5uaW5nID0gYmVnaW5uaW5nSW5kZXhlc1swXTtcbiAgICAgICAgICAgIHZhciBsYXN0SXNCZWdpbm5pbmdJID0gMDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFyZ2V0TGVuOyArK2kpIHtcbiAgICAgICAgICAgICAgaWYgKGxhc3RJc0JlZ2lubmluZyA+IGkpIHtcbiAgICAgICAgICAgICAgICBuZXh0QmVnaW5uaW5nSW5kZXhlc1tpXSA9IGxhc3RJc0JlZ2lubmluZztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsYXN0SXNCZWdpbm5pbmcgPSBiZWdpbm5pbmdJbmRleGVzWysrbGFzdElzQmVnaW5uaW5nSV07XG4gICAgICAgICAgICAgICAgbmV4dEJlZ2lubmluZ0luZGV4ZXNbaV0gPSBsYXN0SXNCZWdpbm5pbmcgPT09IHVuZGVmaW5lZCA/IHRhcmdldExlbiA6IGxhc3RJc0JlZ2lubmluZztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5leHRCZWdpbm5pbmdJbmRleGVzO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY2xlYW51cDogY2xlYW51cCxcbiAgICAgICAgICBuZXc6IGZ1enp5c29ydE5ld1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gZnV6enlzb3J0O1xuICAgICAgfSAvLyBmdXp6eXNvcnROZXdcblxuICAgICAgLy8gVGhpcyBzdHVmZiBpcyBvdXRzaWRlIGZ1enp5c29ydE5ldywgYmVjYXVzZSBpdCdzIHNoYXJlZCB3aXRoIGluc3RhbmNlcyBvZiBmdXp6eXNvcnQubmV3KClcbiAgICAgIHZhciBpc05vZGUgPSB0eXBlb2YgY29tbW9uanNSZXF1aXJlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcbiAgICAgIHZhciBNeU1hcCA9IHR5cGVvZiBNYXAgPT09ICdmdW5jdGlvbicgPyBNYXAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5nZXQgPSBmdW5jdGlvbiAoaykge1xuICAgICAgICAgIHJldHVybiBzW2tdO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldCA9IGZ1bmN0aW9uIChrLCB2YWwpIHtcbiAgICAgICAgICBzW2tdID0gdmFsO1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIHZhciBwcmVwYXJlZENhY2hlID0gbmV3IE15TWFwKCk7XG4gICAgICB2YXIgcHJlcGFyZWRTZWFyY2hDYWNoZSA9IG5ldyBNeU1hcCgpO1xuICAgICAgdmFyIG5vUmVzdWx0cyA9IFtdO1xuICAgICAgbm9SZXN1bHRzLnRvdGFsID0gMDtcbiAgICAgIHZhciBtYXRjaGVzU2ltcGxlID0gW107XG4gICAgICB2YXIgbWF0Y2hlc1N0cmljdCA9IFtdO1xuICAgICAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgICAgcHJlcGFyZWRDYWNoZS5jbGVhcigpO1xuICAgICAgICBwcmVwYXJlZFNlYXJjaENhY2hlLmNsZWFyKCk7XG4gICAgICAgIG1hdGNoZXNTaW1wbGUgPSBbXTtcbiAgICAgICAgbWF0Y2hlc1N0cmljdCA9IFtdO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gZGVmYXVsdFNjb3JlRm4oYSkge1xuICAgICAgICB2YXIgbWF4ID0gLTkwMDcxOTkyNTQ3NDA5OTE7XG4gICAgICAgIGZvciAodmFyIGkgPSBhLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IGFbaV07XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkgY29udGludWU7XG4gICAgICAgICAgdmFyIHNjb3JlID0gcmVzdWx0LnNjb3JlO1xuICAgICAgICAgIGlmIChzY29yZSA+IG1heCkgbWF4ID0gc2NvcmU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1heCA9PT0gLTkwMDcxOTkyNTQ3NDA5OTEpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gbWF4O1xuICAgICAgfVxuXG4gICAgICAvLyBwcm9wID0gJ2tleScgICAgICAgICAgICAgIDIuNW1zIG9wdGltaXplZCBmb3IgdGhpcyBjYXNlLCBzZWVtcyB0byBiZSBhYm91dCBhcyBmYXN0IGFzIGRpcmVjdCBvYmpbcHJvcF1cbiAgICAgIC8vIHByb3AgPSAna2V5MS5rZXkyJyAgICAgICAgMTBtc1xuICAgICAgLy8gcHJvcCA9IFsna2V5MScsICdrZXkyJ10gICAyN21zXG4gICAgICBmdW5jdGlvbiBnZXRWYWx1ZShvYmosIHByb3ApIHtcbiAgICAgICAgdmFyIHRtcCA9IG9ialtwcm9wXTtcbiAgICAgICAgaWYgKHRtcCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdG1wO1xuICAgICAgICB2YXIgc2VncyA9IHByb3A7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wKSkgc2VncyA9IHByb3Auc3BsaXQoJy4nKTtcbiAgICAgICAgdmFyIGxlbiA9IHNlZ3MubGVuZ3RoO1xuICAgICAgICB2YXIgaSA9IC0xO1xuICAgICAgICB3aGlsZSAob2JqICYmICsraSA8IGxlbikgb2JqID0gb2JqW3NlZ3NbaV1dO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gaXNPYmooeCkge1xuICAgICAgICByZXR1cm4gX3R5cGVvZih4KSA9PT0gJ29iamVjdCc7XG4gICAgICB9IC8vIGZhc3RlciBhcyBhIGZ1bmN0aW9uXG5cbiAgICAgIC8vIEhhY2tlZCB2ZXJzaW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9sZW1pcmUvRmFzdFByaW9yaXR5UXVldWUuanNcbiAgICAgIHZhciBmYXN0cHJpb3JpdHlxdWV1ZSA9IGZ1bmN0aW9uIGZhc3Rwcmlvcml0eXF1ZXVlKCkge1xuICAgICAgICB2YXIgciA9IFtdLFxuICAgICAgICAgIG8gPSAwLFxuICAgICAgICAgIGUgPSB7fTtcbiAgICAgICAgZnVuY3Rpb24gbigpIHtcbiAgICAgICAgICBmb3IgKHZhciBlID0gMCwgbiA9IHJbZV0sIGMgPSAxOyBjIDwgbzspIHtcbiAgICAgICAgICAgIHZhciBmID0gYyArIDE7XG4gICAgICAgICAgICBlID0gYywgZiA8IG8gJiYgcltmXS5zY29yZSA8IHJbY10uc2NvcmUgJiYgKGUgPSBmKSwgcltlIC0gMSA+PiAxXSA9IHJbZV0sIGMgPSAxICsgKGUgPDwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAodmFyIGEgPSBlIC0gMSA+PiAxOyBlID4gMCAmJiBuLnNjb3JlIDwgclthXS5zY29yZTsgYSA9IChlID0gYSkgLSAxID4+IDEpIHJbZV0gPSByW2FdO1xuICAgICAgICAgIHJbZV0gPSBuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlLmFkZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgdmFyIG4gPSBvO1xuICAgICAgICAgIHJbbysrXSA9IGU7XG4gICAgICAgICAgZm9yICh2YXIgYyA9IG4gLSAxID4+IDE7IG4gPiAwICYmIGUuc2NvcmUgPCByW2NdLnNjb3JlOyBjID0gKG4gPSBjKSAtIDEgPj4gMSkgcltuXSA9IHJbY107XG4gICAgICAgICAgcltuXSA9IGU7XG4gICAgICAgIH0sIGUucG9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoMCAhPT0gbykge1xuICAgICAgICAgICAgdmFyIGUgPSByWzBdO1xuICAgICAgICAgICAgcmV0dXJuIHJbMF0gPSByWy0tb10sIG4oKSwgZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGUucGVlayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgaWYgKDAgIT09IG8pIHJldHVybiByWzBdO1xuICAgICAgICB9LCBlLnJlcGxhY2VUb3AgPSBmdW5jdGlvbiAobykge1xuICAgICAgICAgIHJbMF0gPSBvLCBuKCk7XG4gICAgICAgIH0sIGU7XG4gICAgICB9O1xuICAgICAgdmFyIHEgPSBmYXN0cHJpb3JpdHlxdWV1ZSgpOyAvLyByZXVzZSB0aGlzLCBleGNlcHQgZm9yIGFzeW5jLCBpdCBuZWVkcyB0byBtYWtlIGl0cyBvd25cblxuICAgICAgcmV0dXJuIGZ1enp5c29ydE5ldygpO1xuICAgIH0pOyAvLyBVTURcblxuICAgIC8vIFRPRE86IChwZXJmb3JtYW5jZSkgd2FzbSB2ZXJzaW9uIT9cbiAgICAvLyBUT0RPOiAocGVyZm9ybWFuY2UpIHRocmVhZHM/XG4gICAgLy8gVE9ETzogKHBlcmZvcm1hbmNlKSBhdm9pZCBjYWNoZSBtaXNzZXNcbiAgICAvLyBUT0RPOiAocGVyZm9ybWFuY2UpIHByZXBhcmVkQ2FjaGUgaXMgYSBtZW1vcnkgbGVha1xuICAgIC8vIFRPRE86IChsaWtlIHN1YmxpbWUpIGJhY2tzbGFzaCA9PT0gZm9yd2FyZHNsYXNoXG4gICAgLy8gVE9ETzogKGxpa2Ugc3VibGltZSkgc3BhY2VzOiBcImEgYlwiIHNob3VsZCBkbyAyIHNlYXJjaGVzIDEgZm9yIGEgYW5kIDEgZm9yIGJcbiAgICAvLyBUT0RPOiAoc2NvcmluZykgZ2FyYmFnZSBpbiB0YXJnZXRzIHRoYXQgYWxsb3dzIG1vc3Qgc2VhcmNoZXMgdG8gc3RyaWN0IG1hdGNoIG5lZWQgYSBwZW5hbGl0eVxuICAgIC8vIFRPRE86IChwZXJmb3JtYW5jZSkgaWRrIGlmIGFsbG93VHlwbyBpcyBvcHRpbWl6ZWRcbiAgfSkoZnV6enlzb3J0JDEpO1xuICB2YXIgZnV6enlzb3J0ID0gZnV6enlzb3J0JDEuZXhwb3J0cztcblxuICB2YXIgc3RhdHMgPSB7XG4gICAgZmFpbGVkVGVzdHM6IFtdLFxuICAgIGRlZmluZWQ6IDAsXG4gICAgY29tcGxldGVkOiAwXG4gIH07XG4gIChmdW5jdGlvbiAoKSB7XG4gICAgLy8gRG9uJ3QgbG9hZCB0aGUgSFRNTCBSZXBvcnRlciBvbiBub24tYnJvd3NlciBlbnZpcm9ubWVudHNcbiAgICBpZiAoIXdpbmRvdyQxIHx8ICFkb2N1bWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBRVW5pdC5yZXBvcnRlcnMucGVyZi5pbml0KFFVbml0KTtcbiAgICB2YXIgY29uZmlnID0gUVVuaXQuY29uZmlnO1xuICAgIHZhciBoaWRkZW5UZXN0cyA9IFtdO1xuICAgIHZhciBjb2xsYXBzZU5leHQgPSBmYWxzZTtcbiAgICB2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgICB2YXIgdW5maWx0ZXJlZFVybCA9IHNldFVybCh7XG4gICAgICBmaWx0ZXI6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlSWQ6IHVuZGVmaW5lZCxcbiAgICAgIHRlc3RJZDogdW5kZWZpbmVkXG4gICAgfSk7XG4gICAgdmFyIGRyb3Bkb3duRGF0YSA9IG51bGw7XG4gICAgZnVuY3Rpb24gdHJpbShzdHJpbmcpIHtcbiAgICAgIGlmICh0eXBlb2Ygc3RyaW5nLnRyaW0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy50cmltKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkRXZlbnQoZWxlbSwgdHlwZSwgZm4pIHtcbiAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgZmFsc2UpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVFdmVudChlbGVtLCB0eXBlLCBmbikge1xuICAgICAgZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZuLCBmYWxzZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZEV2ZW50cyhlbGVtcywgdHlwZSwgZm4pIHtcbiAgICAgIHZhciBpID0gZWxlbXMubGVuZ3RoO1xuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBhZGRFdmVudChlbGVtc1tpXSwgdHlwZSwgZm4pO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBoYXNDbGFzcyhlbGVtLCBuYW1lKSB7XG4gICAgICByZXR1cm4gKCcgJyArIGVsZW0uY2xhc3NOYW1lICsgJyAnKS5pbmRleE9mKCcgJyArIG5hbWUgKyAnICcpID49IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZENsYXNzKGVsZW0sIG5hbWUpIHtcbiAgICAgIGlmICghaGFzQ2xhc3MoZWxlbSwgbmFtZSkpIHtcbiAgICAgICAgZWxlbS5jbGFzc05hbWUgKz0gKGVsZW0uY2xhc3NOYW1lID8gJyAnIDogJycpICsgbmFtZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZWxlbSwgbmFtZSwgZm9yY2UpIHtcbiAgICAgIGlmIChmb3JjZSB8fCB0eXBlb2YgZm9yY2UgPT09ICd1bmRlZmluZWQnICYmICFoYXNDbGFzcyhlbGVtLCBuYW1lKSkge1xuICAgICAgICBhZGRDbGFzcyhlbGVtLCBuYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKGVsZW0sIG5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtLCBuYW1lKSB7XG4gICAgICB2YXIgc2V0ID0gJyAnICsgZWxlbS5jbGFzc05hbWUgKyAnICc7XG5cbiAgICAgIC8vIENsYXNzIG5hbWUgbWF5IGFwcGVhciBtdWx0aXBsZSB0aW1lc1xuICAgICAgd2hpbGUgKHNldC5pbmRleE9mKCcgJyArIG5hbWUgKyAnICcpID49IDApIHtcbiAgICAgICAgc2V0ID0gc2V0LnJlcGxhY2UoJyAnICsgbmFtZSArICcgJywgJyAnKTtcbiAgICAgIH1cblxuICAgICAgLy8gVHJpbSBmb3IgcHJldHRpbmVzc1xuICAgICAgZWxlbS5jbGFzc05hbWUgPSB0cmltKHNldCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlkKG5hbWUpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWJvcnRUZXN0cygpIHtcbiAgICAgIHZhciBhYm9ydEJ1dHRvbiA9IGlkKCdxdW5pdC1hYm9ydC10ZXN0cy1idXR0b24nKTtcbiAgICAgIGlmIChhYm9ydEJ1dHRvbikge1xuICAgICAgICBhYm9ydEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGFib3J0QnV0dG9uLmlubmVySFRNTCA9ICdBYm9ydGluZy4uLic7XG4gICAgICB9XG4gICAgICBRVW5pdC5jb25maWcucXVldWUubGVuZ3RoID0gMDtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaW50ZXJjZXB0TmF2aWdhdGlvbihldikge1xuICAgICAgLy8gVHJpbSBwb3RlbnRpYWwgYWNjaWRlbnRhbCB3aGl0ZXNwYWNlIHNvIHRoYXQgUVVuaXQgZG9lc24ndCB0aHJvdyBhbiBlcnJvciBhYm91dCBubyB0ZXN0cyBtYXRjaGluZyB0aGUgZmlsdGVyLlxuICAgICAgdmFyIGZpbHRlcklucHV0RWxlbSA9IGlkKCdxdW5pdC1maWx0ZXItaW5wdXQnKTtcbiAgICAgIGZpbHRlcklucHV0RWxlbS52YWx1ZSA9IHRyaW0oZmlsdGVySW5wdXRFbGVtLnZhbHVlKTtcbiAgICAgIGFwcGx5VXJsUGFyYW1zKCk7XG4gICAgICBpZiAoZXYgJiYgZXYucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0VXJsQ29uZmlnSHRtbCgpIHtcbiAgICAgIHZhciBzZWxlY3Rpb24gPSBmYWxzZTtcbiAgICAgIHZhciB1cmxDb25maWcgPSBjb25maWcudXJsQ29uZmlnO1xuICAgICAgdmFyIHVybENvbmZpZ0h0bWwgPSAnJztcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdXJsQ29uZmlnLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIE9wdGlvbnMgY2FuIGJlIGVpdGhlciBzdHJpbmdzIG9yIG9iamVjdHMgd2l0aCBub25lbXB0eSBcImlkXCIgcHJvcGVydGllc1xuICAgICAgICB2YXIgdmFsID0gY29uZmlnLnVybENvbmZpZ1tpXTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdmFsID0ge1xuICAgICAgICAgICAgaWQ6IHZhbCxcbiAgICAgICAgICAgIGxhYmVsOiB2YWxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHZhciBlc2NhcGVkID0gZXNjYXBlVGV4dCh2YWwuaWQpO1xuICAgICAgICB2YXIgZXNjYXBlZFRvb2x0aXAgPSBlc2NhcGVUZXh0KHZhbC50b29sdGlwKTtcbiAgICAgICAgaWYgKCF2YWwudmFsdWUgfHwgdHlwZW9mIHZhbC52YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB1cmxDb25maWdIdG1sICs9IFwiPGxhYmVsIGZvcj0ncXVuaXQtdXJsY29uZmlnLVwiICsgZXNjYXBlZCArIFwiJyB0aXRsZT0nXCIgKyBlc2NhcGVkVG9vbHRpcCArIFwiJz48aW5wdXQgaWQ9J3F1bml0LXVybGNvbmZpZy1cIiArIGVzY2FwZWQgKyBcIicgbmFtZT0nXCIgKyBlc2NhcGVkICsgXCInIHR5cGU9J2NoZWNrYm94J1wiICsgKHZhbC52YWx1ZSA/IFwiIHZhbHVlPSdcIiArIGVzY2FwZVRleHQodmFsLnZhbHVlKSArIFwiJ1wiIDogJycpICsgKGNvbmZpZ1t2YWwuaWRdID8gXCIgY2hlY2tlZD0nY2hlY2tlZCdcIiA6ICcnKSArIFwiIHRpdGxlPSdcIiArIGVzY2FwZWRUb29sdGlwICsgXCInIC8+XCIgKyBlc2NhcGVUZXh0KHZhbC5sYWJlbCkgKyAnPC9sYWJlbD4nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVybENvbmZpZ0h0bWwgKz0gXCI8bGFiZWwgZm9yPSdxdW5pdC11cmxjb25maWctXCIgKyBlc2NhcGVkICsgXCInIHRpdGxlPSdcIiArIGVzY2FwZWRUb29sdGlwICsgXCInPlwiICsgZXNjYXBlVGV4dCh2YWwubGFiZWwpICsgXCI6IDxzZWxlY3QgaWQ9J3F1bml0LXVybGNvbmZpZy1cIiArIGVzY2FwZWQgKyBcIicgbmFtZT0nXCIgKyBlc2NhcGVkICsgXCInIHRpdGxlPSdcIiArIGVzY2FwZWRUb29sdGlwICsgXCInPjxvcHRpb24+PC9vcHRpb24+XCI7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsLnZhbHVlKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWwudmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgZXNjYXBlZCA9IGVzY2FwZVRleHQodmFsLnZhbHVlW2pdKTtcbiAgICAgICAgICAgICAgdXJsQ29uZmlnSHRtbCArPSBcIjxvcHRpb24gdmFsdWU9J1wiICsgZXNjYXBlZCArIFwiJ1wiICsgKGNvbmZpZ1t2YWwuaWRdID09PSB2YWwudmFsdWVbal0gPyAoc2VsZWN0aW9uID0gdHJ1ZSkgJiYgXCIgc2VsZWN0ZWQ9J3NlbGVjdGVkJ1wiIDogJycpICsgJz4nICsgZXNjYXBlZCArICc8L29wdGlvbj4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfaiBpbiB2YWwudmFsdWUpIHtcbiAgICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKHZhbC52YWx1ZSwgX2opKSB7XG4gICAgICAgICAgICAgICAgdXJsQ29uZmlnSHRtbCArPSBcIjxvcHRpb24gdmFsdWU9J1wiICsgZXNjYXBlVGV4dChfaikgKyBcIidcIiArIChjb25maWdbdmFsLmlkXSA9PT0gX2ogPyAoc2VsZWN0aW9uID0gdHJ1ZSkgJiYgXCIgc2VsZWN0ZWQ9J3NlbGVjdGVkJ1wiIDogJycpICsgJz4nICsgZXNjYXBlVGV4dCh2YWwudmFsdWVbX2pdKSArICc8L29wdGlvbj4nO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjb25maWdbdmFsLmlkXSAmJiAhc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICBlc2NhcGVkID0gZXNjYXBlVGV4dChjb25maWdbdmFsLmlkXSk7XG4gICAgICAgICAgICB1cmxDb25maWdIdG1sICs9IFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBlc2NhcGVkICsgXCInIHNlbGVjdGVkPSdzZWxlY3RlZCcgZGlzYWJsZWQ9J2Rpc2FibGVkJz5cIiArIGVzY2FwZWQgKyAnPC9vcHRpb24+JztcbiAgICAgICAgICB9XG4gICAgICAgICAgdXJsQ29uZmlnSHRtbCArPSAnPC9zZWxlY3Q+PC9sYWJlbD4nO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdXJsQ29uZmlnSHRtbDtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgXCJjbGlja1wiIGV2ZW50cyBvbiB0b29sYmFyIGNoZWNrYm94ZXMgYW5kIFwiY2hhbmdlXCIgZm9yIHNlbGVjdCBtZW51cy5cbiAgICAvLyBVcGRhdGVzIHRoZSBVUkwgd2l0aCB0aGUgbmV3IHN0YXRlIG9mIGBjb25maWcudXJsQ29uZmlnYCB2YWx1ZXMuXG4gICAgZnVuY3Rpb24gdG9vbGJhckNoYW5nZWQoKSB7XG4gICAgICB2YXIgZmllbGQgPSB0aGlzO1xuICAgICAgdmFyIHBhcmFtcyA9IHt9O1xuXG4gICAgICAvLyBEZXRlY3QgaWYgZmllbGQgaXMgYSBzZWxlY3QgbWVudSBvciBhIGNoZWNrYm94XG4gICAgICB2YXIgdmFsdWU7XG4gICAgICBpZiAoJ3NlbGVjdGVkSW5kZXgnIGluIGZpZWxkKSB7XG4gICAgICAgIHZhbHVlID0gZmllbGQub3B0aW9uc1tmaWVsZC5zZWxlY3RlZEluZGV4XS52YWx1ZSB8fCB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IGZpZWxkLmNoZWNrZWQgPyBmaWVsZC5kZWZhdWx0VmFsdWUgfHwgdHJ1ZSA6IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHBhcmFtc1tmaWVsZC5uYW1lXSA9IHZhbHVlO1xuICAgICAgdmFyIHVwZGF0ZWRVcmwgPSBzZXRVcmwocGFyYW1zKTtcblxuICAgICAgLy8gQ2hlY2sgaWYgd2UgY2FuIGFwcGx5IHRoZSBjaGFuZ2Ugd2l0aG91dCBhIHBhZ2UgcmVmcmVzaFxuICAgICAgaWYgKGZpZWxkLm5hbWUgPT09ICdoaWRlcGFzc2VkJyAmJiAncmVwbGFjZVN0YXRlJyBpbiB3aW5kb3ckMS5oaXN0b3J5KSB7XG4gICAgICAgIFFVbml0LnVybFBhcmFtc1tmaWVsZC5uYW1lXSA9IHZhbHVlO1xuICAgICAgICBjb25maWdbZmllbGQubmFtZV0gPSB2YWx1ZSB8fCBmYWxzZTtcbiAgICAgICAgdmFyIHRlc3RzID0gaWQoJ3F1bml0LXRlc3RzJyk7XG4gICAgICAgIGlmICh0ZXN0cykge1xuICAgICAgICAgIGlmIChmaWVsZC5jaGVja2VkKSB7XG4gICAgICAgICAgICB2YXIgbGVuZ3RoID0gdGVzdHMuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gdGVzdHMuY2hpbGRyZW47XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhciB0ZXN0ID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgIHZhciBjbGFzc05hbWUgPSB0ZXN0ID8gdGVzdC5jbGFzc05hbWUgOiAnJztcbiAgICAgICAgICAgICAgdmFyIGNsYXNzTmFtZUhhc1Bhc3MgPSBjbGFzc05hbWUuaW5kZXhPZigncGFzcycpID4gLTE7XG4gICAgICAgICAgICAgIHZhciBjbGFzc05hbWVIYXNTa2lwcGVkID0gY2xhc3NOYW1lLmluZGV4T2YoJ3NraXBwZWQnKSA+IC0xO1xuICAgICAgICAgICAgICBpZiAoY2xhc3NOYW1lSGFzUGFzcyB8fCBjbGFzc05hbWVIYXNTa2lwcGVkKSB7XG4gICAgICAgICAgICAgICAgaGlkZGVuVGVzdHMucHVzaCh0ZXN0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBPcHRpbWl6YXRpb246IEF2b2lkIGBmb3Itb2ZgIGl0ZXJhdG9yIG92ZXJoZWFkLlxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGhpZGRlblRlc3RzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICB0ZXN0cy5yZW1vdmVDaGlsZChoaWRkZW5UZXN0c1tfaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBPcHRpbWl6YXRpb246IEF2b2lkIGB3aGlsZSAoYXJyLmxlbmd0aCkgYXJyLnNoaWZ0KClgIHdoaWNoIHdvdWxkIG11dGF0ZSB0aGUgYXJyYXkgbWFueSB0aW1lcy5cbiAgICAgICAgICAgIC8vIEFzIG9mIENocm9tZSAxMjYsIEhUTUxFbGVtZW50LmFwcGVuZCguLi5oaWRkZW5UZXN0cykgaXMgc3RpbGwgc2xvd2VyIHRoYW5cbiAgICAgICAgICAgIC8vIGNhbGxpbmcgYXBwZW5kQ2hpbGQgaW4gYSBsb29wLlxuICAgICAgICAgICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgaGlkZGVuVGVzdHMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgICAgICAgICB0ZXN0cy5hcHBlbmRDaGlsZChoaWRkZW5UZXN0c1tfaTJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhpZGRlblRlc3RzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdpbmRvdyQxLmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsICcnLCB1cGRhdGVkVXJsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdyQxLmxvY2F0aW9uID0gdXBkYXRlZFVybDtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0VXJsKHBhcmFtcykge1xuICAgICAgdmFyIHF1ZXJ5c3RyaW5nID0gJz8nO1xuICAgICAgdmFyIGxvY2F0aW9uID0gd2luZG93JDEubG9jYXRpb247XG4gICAgICBwYXJhbXMgPSBleHRlbmQoZXh0ZW5kKHt9LCBRVW5pdC51cmxQYXJhbXMpLCBwYXJhbXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIHBhcmFtcykge1xuICAgICAgICAvLyBTa2lwIGluaGVyaXRlZCBvciB1bmRlZmluZWQgcHJvcGVydGllc1xuICAgICAgICBpZiAoaGFzT3duLmNhbGwocGFyYW1zLCBrZXkpICYmIHBhcmFtc1trZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBPdXRwdXQgYSBwYXJhbWV0ZXIgZm9yIGVhY2ggdmFsdWUgb2YgdGhpcyBrZXlcbiAgICAgICAgICAvLyAoYnV0IHVzdWFsbHkganVzdCBvbmUpXG4gICAgICAgICAgdmFyIGFyclZhbHVlID0gW10uY29uY2F0KHBhcmFtc1trZXldKTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyclZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBxdWVyeXN0cmluZyArPSBlbmNvZGVVUklDb21wb25lbnQoa2V5KTtcbiAgICAgICAgICAgIGlmIChhcnJWYWx1ZVtpXSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBxdWVyeXN0cmluZyArPSAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoYXJyVmFsdWVbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcXVlcnlzdHJpbmcgKz0gJyYnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3QgKyBsb2NhdGlvbi5wYXRobmFtZSArIHF1ZXJ5c3RyaW5nLnNsaWNlKDAsIC0xKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXBwbHlVcmxQYXJhbXMoKSB7XG4gICAgICB2YXIgZmlsdGVyID0gaWQoJ3F1bml0LWZpbHRlci1pbnB1dCcpLnZhbHVlO1xuICAgICAgd2luZG93JDEubG9jYXRpb24gPSBzZXRVcmwoe1xuICAgICAgICBmaWx0ZXI6IGZpbHRlciA9PT0gJycgPyB1bmRlZmluZWQgOiBmaWx0ZXIsXG4gICAgICAgIG1vZHVsZUlkOiBfdG9Db25zdW1hYmxlQXJyYXkoZHJvcGRvd25EYXRhLnNlbGVjdGVkTWFwLmtleXMoKSksXG4gICAgICAgIC8vIFJlbW92ZSBtb2R1bGUgYW5kIHRlc3RJZCBmaWx0ZXJcbiAgICAgICAgbW9kdWxlOiB1bmRlZmluZWQsXG4gICAgICAgIHRlc3RJZDogdW5kZWZpbmVkXG4gICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdG9vbGJhclVybENvbmZpZ0NvbnRhaW5lcigpIHtcbiAgICAgIHZhciB1cmxDb25maWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICB1cmxDb25maWdDb250YWluZXIuaW5uZXJIVE1MID0gZ2V0VXJsQ29uZmlnSHRtbCgpO1xuICAgICAgYWRkQ2xhc3ModXJsQ29uZmlnQ29udGFpbmVyLCAncXVuaXQtdXJsLWNvbmZpZycpO1xuICAgICAgYWRkRXZlbnRzKHVybENvbmZpZ0NvbnRhaW5lci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKSwgJ2NoYW5nZScsIHRvb2xiYXJDaGFuZ2VkKTtcbiAgICAgIGFkZEV2ZW50cyh1cmxDb25maWdDb250YWluZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NlbGVjdCcpLCAnY2hhbmdlJywgdG9vbGJhckNoYW5nZWQpO1xuICAgICAgcmV0dXJuIHVybENvbmZpZ0NvbnRhaW5lcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWJvcnRUZXN0c0J1dHRvbigpIHtcbiAgICAgIHZhciBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGJ1dHRvbi5pZCA9ICdxdW5pdC1hYm9ydC10ZXN0cy1idXR0b24nO1xuICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdBYm9ydCc7XG4gICAgICBhZGRFdmVudChidXR0b24sICdjbGljaycsIGFib3J0VGVzdHMpO1xuICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG4gICAgZnVuY3Rpb24gdG9vbGJhckxvb3NlRmlsdGVyKCkge1xuICAgICAgdmFyIGZpbHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgIHZhciBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgYWRkQ2xhc3MoZmlsdGVyLCAncXVuaXQtZmlsdGVyJyk7XG4gICAgICBsYWJlbC5pbm5lckhUTUwgPSAnRmlsdGVyOiAnO1xuICAgICAgaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgIGlucHV0LnZhbHVlID0gY29uZmlnLmZpbHRlciB8fCAnJztcbiAgICAgIGlucHV0Lm5hbWUgPSAnZmlsdGVyJztcbiAgICAgIGlucHV0LmlkID0gJ3F1bml0LWZpbHRlci1pbnB1dCc7XG4gICAgICBidXR0b24uaW5uZXJIVE1MID0gJ0dvJztcbiAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgIGZpbHRlci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJyAnKSk7XG4gICAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgIGFkZEV2ZW50KGZpbHRlciwgJ3N1Ym1pdCcsIGludGVyY2VwdE5hdmlnYXRpb24pO1xuICAgICAgcmV0dXJuIGZpbHRlcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlTW9kdWxlTGlzdEl0ZW0obW9kdWxlSWQsIG5hbWUsIGNoZWNrZWQpIHtcbiAgICAgIHJldHVybiAnPGxpPjxsYWJlbCBjbGFzcz1cImNsaWNrYWJsZScgKyAoY2hlY2tlZCA/ICcgY2hlY2tlZCcgOiAnJykgKyAnXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiICcgKyAndmFsdWU9XCInICsgZXNjYXBlVGV4dChtb2R1bGVJZCkgKyAnXCInICsgKGNoZWNrZWQgPyAnIGNoZWNrZWQ9XCJjaGVja2VkXCInIDogJycpICsgJyAvPicgKyBlc2NhcGVUZXh0KG5hbWUpICsgJzwvbGFiZWw+PC9saT4nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IFJlc3VsdHMgZnJvbSBmdXp6eXNvcnRcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IEhUTUxcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBtb2R1bGVMaXN0SHRtbChyZXN1bHRzKSB7XG4gICAgICB2YXIgaHRtbCA9ICcnO1xuXG4gICAgICAvLyBIb2lzdCB0aGUgYWxyZWFkeSBzZWxlY3RlZCBpdGVtcywgYW5kIHNob3cgdGhlbSBhbHdheXNcbiAgICAgIC8vIGV2ZW4gaWYgbm90IG1hdGNoZWQgYnkgdGhlIGN1cnJlbnQgc2VhcmNoLlxuICAgICAgZHJvcGRvd25EYXRhLnNlbGVjdGVkTWFwLmZvckVhY2goZnVuY3Rpb24gKG5hbWUsIG1vZHVsZUlkKSB7XG4gICAgICAgIGh0bWwgKz0gY3JlYXRlTW9kdWxlTGlzdEl0ZW0obW9kdWxlSWQsIG5hbWUsIHRydWUpO1xuICAgICAgfSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG1vZCA9IHJlc3VsdHNbaV0ub2JqO1xuICAgICAgICBpZiAoIWRyb3Bkb3duRGF0YS5zZWxlY3RlZE1hcC5oYXMobW9kLm1vZHVsZUlkKSkge1xuICAgICAgICAgIGh0bWwgKz0gY3JlYXRlTW9kdWxlTGlzdEl0ZW0obW9kLm1vZHVsZUlkLCBtb2QubmFtZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gICAgZnVuY3Rpb24gdG9vbGJhck1vZHVsZUZpbHRlcihiZWdpbkRldGFpbHMpIHtcbiAgICAgIHZhciBpbml0aWFsU2VsZWN0ZWQgPSBudWxsO1xuICAgICAgZHJvcGRvd25EYXRhID0ge1xuICAgICAgICBvcHRpb25zOiBiZWdpbkRldGFpbHMubW9kdWxlcy5zbGljZSgpLFxuICAgICAgICBzZWxlY3RlZE1hcDogbmV3IFN0cmluZ01hcCgpLFxuICAgICAgICBpc0RpcnR5OiBmdW5jdGlvbiBpc0RpcnR5KCkge1xuICAgICAgICAgIHJldHVybiBfdG9Db25zdW1hYmxlQXJyYXkoZHJvcGRvd25EYXRhLnNlbGVjdGVkTWFwLmtleXMoKSkuc29ydCgpLmpvaW4oJywnKSAhPT0gX3RvQ29uc3VtYWJsZUFycmF5KGluaXRpYWxTZWxlY3RlZC5rZXlzKCkpLnNvcnQoKS5qb2luKCcsJyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBpZiAoY29uZmlnLm1vZHVsZUlkLmxlbmd0aCkge1xuICAgICAgICAvLyBUaGUgbW9kdWxlIGRyb3Bkb3duIGlzIHNlZWRlZCB3aXRoIHRoZSBydW50aW1lIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGxhc3QgcnVuLlxuICAgICAgICAvL1xuICAgICAgICAvLyBXZSBkb24ndCByZWZlcmVuY2UgYGNvbmZpZy5tb2R1bGVJZGAgZGlyZWN0bHkgYWZ0ZXIgdGhpcyBhbmQga2VlcCBvdXIgb3duXG4gICAgICAgIC8vIGNvcHkgYmVjYXVzZTpcbiAgICAgICAgLy8gMS4gVGhpcyBuYXR1cmFsbHkgZmlsdGVycyBvdXQgdW5rbm93biBtb2R1bGVJZHMuXG4gICAgICAgIC8vIDIuIEdpdmVzIHVzIGEgcGxhY2UgdG8gbWFuYWdlIGFuZCByZW1lbWJlciB1bnN1Ym1pdHRlZCBjaGVja2JveCBjaGFuZ2VzLlxuICAgICAgICAvLyAzLiBHaXZlcyB1cyBhbiBlZmZpY2llbnQgd2F5IHRvIG1hcCBhIHNlbGVjdGVkIG1vZHVsZUlkIHRvIG1vZHVsZSBuYW1lXG4gICAgICAgIC8vICAgIGR1cmluZyByZW5kZXJpbmcuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmVnaW5EZXRhaWxzLm1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgbW9kID0gYmVnaW5EZXRhaWxzLm1vZHVsZXNbaV07XG4gICAgICAgICAgaWYgKGNvbmZpZy5tb2R1bGVJZC5pbmRleE9mKG1vZC5tb2R1bGVJZCkgIT09IC0xKSB7XG4gICAgICAgICAgICBkcm9wZG93bkRhdGEuc2VsZWN0ZWRNYXAuc2V0KG1vZC5tb2R1bGVJZCwgbW9kLm5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaW5pdGlhbFNlbGVjdGVkID0gbmV3IFN0cmluZ01hcChkcm9wZG93bkRhdGEuc2VsZWN0ZWRNYXApO1xuICAgICAgdmFyIG1vZHVsZVNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBtb2R1bGVTZWFyY2guaWQgPSAncXVuaXQtbW9kdWxlZmlsdGVyLXNlYXJjaCc7XG4gICAgICBtb2R1bGVTZWFyY2guYXV0b2NvbXBsZXRlID0gJ29mZic7XG4gICAgICBhZGRFdmVudChtb2R1bGVTZWFyY2gsICdpbnB1dCcsIHNlYXJjaElucHV0KTtcbiAgICAgIGFkZEV2ZW50KG1vZHVsZVNlYXJjaCwgJ2lucHV0Jywgc2VhcmNoRm9jdXMpO1xuICAgICAgYWRkRXZlbnQobW9kdWxlU2VhcmNoLCAnZm9jdXMnLCBzZWFyY2hGb2N1cyk7XG4gICAgICBhZGRFdmVudChtb2R1bGVTZWFyY2gsICdjbGljaycsIHNlYXJjaEZvY3VzKTtcbiAgICAgIHZhciBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICBsYWJlbC5odG1sRm9yID0gJ3F1bml0LW1vZHVsZWZpbHRlci1zZWFyY2gnO1xuICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSAnTW9kdWxlOic7XG4gICAgICB2YXIgc2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgc2VhcmNoQ29udGFpbmVyLmlkID0gJ3F1bml0LW1vZHVsZWZpbHRlci1zZWFyY2gtY29udGFpbmVyJztcbiAgICAgIHNlYXJjaENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2R1bGVTZWFyY2gpO1xuICAgICAgdmFyIGFwcGx5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBhcHBseUJ1dHRvbi50ZXh0Q29udGVudCA9ICdBcHBseSc7XG4gICAgICBhcHBseUJ1dHRvbi50aXRsZSA9ICdSZS1ydW4gdGhlIHNlbGVjdGVkIHRlc3QgbW9kdWxlcyc7XG4gICAgICBhZGRFdmVudChhcHBseUJ1dHRvbiwgJ2NsaWNrJywgYXBwbHlVcmxQYXJhbXMpO1xuICAgICAgdmFyIHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICByZXNldEJ1dHRvbi50ZXh0Q29udGVudCA9ICdSZXNldCc7XG4gICAgICByZXNldEJ1dHRvbi50eXBlID0gJ3Jlc2V0JztcbiAgICAgIHJlc2V0QnV0dG9uLnRpdGxlID0gJ1Jlc3RvcmUgdGhlIHByZXZpb3VzIG1vZHVsZSBzZWxlY3Rpb24nO1xuICAgICAgdmFyIGNsZWFyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBjbGVhckJ1dHRvbi50ZXh0Q29udGVudCA9ICdTZWxlY3Qgbm9uZSc7XG4gICAgICBjbGVhckJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICBjbGVhckJ1dHRvbi50aXRsZSA9ICdDbGVhciB0aGUgY3VycmVudCBtb2R1bGUgc2VsZWN0aW9uJztcbiAgICAgIGFkZEV2ZW50KGNsZWFyQnV0dG9uLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRyb3Bkb3duRGF0YS5zZWxlY3RlZE1hcC5jbGVhcigpO1xuICAgICAgICBzZWxlY3Rpb25DaGFuZ2UoKTtcbiAgICAgICAgc2VhcmNoSW5wdXQoKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGFjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBhY3Rpb25zLmlkID0gJ3F1bml0LW1vZHVsZWZpbHRlci1hY3Rpb25zJztcbiAgICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXBwbHlCdXR0b24pO1xuICAgICAgYWN0aW9ucy5hcHBlbmRDaGlsZChyZXNldEJ1dHRvbik7XG4gICAgICBpZiAoaW5pdGlhbFNlbGVjdGVkLnNpemUpIHtcbiAgICAgICAgLy8gT25seSBzaG93IGNsZWFyIGJ1dHRvbiBpZiBmdW5jdGlvbmFsbHkgZGlmZmVyZW50IGZyb20gcmVzZXRcbiAgICAgICAgYWN0aW9ucy5hcHBlbmRDaGlsZChjbGVhckJ1dHRvbik7XG4gICAgICB9XG4gICAgICB2YXIgZHJvcERvd25MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgIGRyb3BEb3duTGlzdC5pZCA9ICdxdW5pdC1tb2R1bGVmaWx0ZXItZHJvcGRvd24tbGlzdCc7XG4gICAgICB2YXIgZHJvcERvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRyb3BEb3duLmlkID0gJ3F1bml0LW1vZHVsZWZpbHRlci1kcm9wZG93bic7XG4gICAgICBkcm9wRG93bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgZHJvcERvd24uYXBwZW5kQ2hpbGQoYWN0aW9ucyk7XG4gICAgICBkcm9wRG93bi5hcHBlbmRDaGlsZChkcm9wRG93bkxpc3QpO1xuICAgICAgYWRkRXZlbnQoZHJvcERvd24sICdjaGFuZ2UnLCBzZWxlY3Rpb25DaGFuZ2UpO1xuICAgICAgc2VhcmNoQ29udGFpbmVyLmFwcGVuZENoaWxkKGRyb3BEb3duKTtcbiAgICAgIC8vIFNldCBpbml0aWFsIG1vZHVsZVNlYXJjaC5wbGFjZWhvbGRlciBhbmQgY2xlYXJCdXR0b24vcmVzZXRCdXR0b24uXG4gICAgICBzZWxlY3Rpb25DaGFuZ2UoKTtcbiAgICAgIHZhciBtb2R1bGVGaWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICBtb2R1bGVGaWx0ZXIuaWQgPSAncXVuaXQtbW9kdWxlZmlsdGVyJztcbiAgICAgIG1vZHVsZUZpbHRlci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICBtb2R1bGVGaWx0ZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJyAnKSk7XG4gICAgICBtb2R1bGVGaWx0ZXIuYXBwZW5kQ2hpbGQoc2VhcmNoQ29udGFpbmVyKTtcbiAgICAgIGFkZEV2ZW50KG1vZHVsZUZpbHRlciwgJ3N1Ym1pdCcsIGludGVyY2VwdE5hdmlnYXRpb24pO1xuICAgICAgYWRkRXZlbnQobW9kdWxlRmlsdGVyLCAncmVzZXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRyb3Bkb3duRGF0YS5zZWxlY3RlZE1hcCA9IG5ldyBTdHJpbmdNYXAoaW5pdGlhbFNlbGVjdGVkKTtcbiAgICAgICAgLy8gU2V0IG1vZHVsZVNlYXJjaC5wbGFjZWhvbGRlciBhbmQgcmVmbGVjdCBub24tZGlydHkgc3RhdGVcbiAgICAgICAgc2VsZWN0aW9uQ2hhbmdlKCk7XG4gICAgICAgIHNlYXJjaElucHV0KCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gRW5hYmxlcyBzaG93L2hpZGUgZm9yIHRoZSBkcm9wZG93blxuICAgICAgZnVuY3Rpb24gc2VhcmNoRm9jdXMoKSB7XG4gICAgICAgIGlmIChkcm9wRG93bi5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPcHRpbWl6YXRpb246IERlZmVyIHJlbmRlcmluZyBvcHRpb25zIHVudGlsIGZvY3Vzc2VkLlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcXVuaXRqcy9xdW5pdC9pc3N1ZXMvMTY2NFxuICAgICAgICBzZWFyY2hJbnB1dCgpO1xuICAgICAgICBkcm9wRG93bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgICAgICAvLyBIaWRlIG9uIEVzY2FwZSBrZXlkb3duIG9yIG9uIGNsaWNrIG91dHNpZGUgdGhlIGNvbnRhaW5lclxuICAgICAgICBhZGRFdmVudChkb2N1bWVudCwgJ2NsaWNrJywgaGlkZUhhbmRsZXIpO1xuICAgICAgICBhZGRFdmVudChkb2N1bWVudCwgJ2tleWRvd24nLCBoaWRlSGFuZGxlcik7XG4gICAgICAgIGZ1bmN0aW9uIGhpZGVIYW5kbGVyKGUpIHtcbiAgICAgICAgICB2YXIgaW5Db250YWluZXIgPSBtb2R1bGVGaWx0ZXIuY29udGFpbnMoZS50YXJnZXQpO1xuICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDI3IHx8ICFpbkNvbnRhaW5lcikge1xuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMjcgJiYgaW5Db250YWluZXIpIHtcbiAgICAgICAgICAgICAgbW9kdWxlU2VhcmNoLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkcm9wRG93bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgcmVtb3ZlRXZlbnQoZG9jdW1lbnQsICdjbGljaycsIGhpZGVIYW5kbGVyKTtcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50KGRvY3VtZW50LCAna2V5ZG93bicsIGhpZGVIYW5kbGVyKTtcbiAgICAgICAgICAgIG1vZHVsZVNlYXJjaC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgc2VhcmNoSW5wdXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VhcmNoVGV4dFxuICAgICAgICogQHJldHVybiB7c3RyaW5nfSBIVE1MXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGZpbHRlck1vZHVsZXMoc2VhcmNoVGV4dCkge1xuICAgICAgICB2YXIgcmVzdWx0cztcbiAgICAgICAgaWYgKHNlYXJjaFRleHQgPT09ICcnKSB7XG4gICAgICAgICAgLy8gSW1wcm92ZSBvbi1ib2FyZGluZyBleHBlcmllbmNlIGJ5IGhhdmluZyBhbiBpbW1lZGlhdGUgZGlzcGxheSBvZlxuICAgICAgICAgIC8vIG1vZHVsZSBuYW1lcywgaW5kaWNhdGluZyBob3cgdGhlIGludGVyZmFjZSB3b3Jrcy4gVGhpcyBhbHNvIG1ha2VzXG4gICAgICAgICAgLy8gZm9yIGEgcXVpY2tlciBpbnRlcmFjdGlvbiBpbiB0aGUgY29tbW9uIGNhc2Ugb2Ygc21hbGwgcHJvamVjdHMuXG4gICAgICAgICAgLy8gRG9uJ3QgbWFuZGF0ZSB0eXBpbmcganVzdCB0byBnZXQgdGhlIG1lbnUuXG4gICAgICAgICAgcmVzdWx0cyA9IGRyb3Bkb3duRGF0YS5vcHRpb25zLnNsaWNlKDAsIDIwKS5tYXAoZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgLy8gRmFrZSBlbXB0eSByZXN1bHRzLiBodHRwczovL2dpdGh1Yi5jb20vZmFyemhlci9mdXp6eXNvcnQvaXNzdWVzLzQxXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBvYmo6IG9ialxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRzID0gZnV6enlzb3J0LmdvKHNlYXJjaFRleHQsIGRyb3Bkb3duRGF0YS5vcHRpb25zLCB7XG4gICAgICAgICAgICBsaW1pdDogMjAsXG4gICAgICAgICAgICBrZXk6ICduYW1lJyxcbiAgICAgICAgICAgIGFsbG93VHlwbzogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb2R1bGVMaXN0SHRtbChyZXN1bHRzKTtcbiAgICAgIH1cblxuICAgICAgLy8gUHJvY2Vzc2VzIG1vZHVsZSBzZWFyY2ggYm94IGlucHV0XG4gICAgICB2YXIgc2VhcmNoSW5wdXRUaW1lb3V0O1xuICAgICAgZnVuY3Rpb24gc2VhcmNoSW5wdXQoKSB7XG4gICAgICAgIC8vIFVzZSBhIGRlYm91bmNlIHdpdGggYSB+MG1zIHRpbWVvdXQuIFRoaXMgaXMgZWZmZWN0aXZlbHkgaW5zdGFudGFuZW91cyxcbiAgICAgICAgLy8gYnV0IGlzIGJldHRlciB0aGFuIHVuZGVib3VuY2VkIGJlY2F1c2UgaXQgYXZvaWRzIGFuIGV2ZXItZ3Jvd2luZ1xuICAgICAgICAvLyBiYWNrbG9nIG9mIHVucHJvY2Vzc2VkIG5vdy1vdXRkYXRlZCBpbnB1dCBldmVudHMgaWYgZnV6enlzZWFyY2ggb3JcbiAgICAgICAgLy8gZHJvZG93biBET00gaXMgc2xvdyAoZS5nLiB2ZXJ5IGxhcmdlIHRlc3Qgc3VpdGUpLlxuICAgICAgICB3aW5kb3ckMS5jbGVhclRpbWVvdXQoc2VhcmNoSW5wdXRUaW1lb3V0KTtcbiAgICAgICAgc2VhcmNoSW5wdXRUaW1lb3V0ID0gd2luZG93JDEuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZHJvcERvd25MaXN0LmlubmVySFRNTCA9IGZpbHRlck1vZHVsZXMobW9kdWxlU2VhcmNoLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFByb2Nlc3NlcyBjaGVja2JveCBjaGFuZ2UsIG9yIGEgZ2VuZXJpYyByZW5kZXIgKGluaXRpYWwgcmVuZGVyLCBvciBhZnRlciByZXNldCBldmVudClcbiAgICAgIC8vIEF2b2lkIGFueSBkcm9wZG93biByZW5kZXJpbmcgaGVyZSBhcyB0aGlzIGlzIHVzZWQgYnkgdG9vbGJhck1vZHVsZUZpbHRlcigpXG4gICAgICAvLyBkdXJpbmcgdGhlIGluaXRpYWwgcmVuZGVyLCB3aGljaCBzaG91bGQgbm90IGRlbGF5IHRlc3QgZXhlY3V0aW9uLlxuICAgICAgZnVuY3Rpb24gc2VsZWN0aW9uQ2hhbmdlKGV2dCkge1xuICAgICAgICB2YXIgY2hlY2tib3ggPSBldnQgJiYgZXZ0LnRhcmdldCB8fCBudWxsO1xuICAgICAgICBpZiAoY2hlY2tib3gpIHtcbiAgICAgICAgICAvLyBVcGRhdGUgaW50ZXJuYWwgc3RhdGVcbiAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgZHJvcGRvd25EYXRhLnNlbGVjdGVkTWFwLnNldChjaGVja2JveC52YWx1ZSwgY2hlY2tib3gucGFyZW50Tm9kZS50ZXh0Q29udGVudCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRyb3Bkb3duRGF0YS5zZWxlY3RlZE1hcC5kZWxldGUoY2hlY2tib3gudmFsdWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFVwZGF0ZSBVSSBzdGF0ZVxuICAgICAgICAgIHRvZ2dsZUNsYXNzKGNoZWNrYm94LnBhcmVudE5vZGUsICdjaGVja2VkJywgY2hlY2tib3guY2hlY2tlZCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRleHRGb3JtID0gZHJvcGRvd25EYXRhLnNlbGVjdGVkTWFwLnNpemUgPyBkcm9wZG93bkRhdGEuc2VsZWN0ZWRNYXAuc2l6ZSArICcgJyArIChkcm9wZG93bkRhdGEuc2VsZWN0ZWRNYXAuc2l6ZSA9PT0gMSA/ICdtb2R1bGUnIDogJ21vZHVsZXMnKSA6ICdBbGwgbW9kdWxlcyc7XG4gICAgICAgIG1vZHVsZVNlYXJjaC5wbGFjZWhvbGRlciA9IHRleHRGb3JtO1xuICAgICAgICBtb2R1bGVTZWFyY2gudGl0bGUgPSAnVHlwZSB0byBzZWFyY2ggdGhyb3VnaCBhbmQgcmVkdWNlIHRoZSBsaXN0Lic7XG4gICAgICAgIHJlc2V0QnV0dG9uLmRpc2FibGVkID0gIWRyb3Bkb3duRGF0YS5pc0RpcnR5KCk7XG4gICAgICAgIGNsZWFyQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBkcm9wZG93bkRhdGEuc2VsZWN0ZWRNYXAuc2l6ZSA/ICcnIDogJ25vbmUnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1vZHVsZUZpbHRlcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXBwZW5kVG9vbGJhcihiZWdpbkRldGFpbHMpIHtcbiAgICAgIHZhciB0b29sYmFyID0gaWQoJ3F1bml0LXRlc3RydW5uZXItdG9vbGJhcicpO1xuICAgICAgaWYgKHRvb2xiYXIpIHtcbiAgICAgICAgdG9vbGJhci5hcHBlbmRDaGlsZCh0b29sYmFyVXJsQ29uZmlnQ29udGFpbmVyKCkpO1xuICAgICAgICB2YXIgdG9vbGJhckZpbHRlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHRvb2xiYXJGaWx0ZXJzLmlkID0gJ3F1bml0LXRvb2xiYXItZmlsdGVycyc7XG4gICAgICAgIHRvb2xiYXJGaWx0ZXJzLmFwcGVuZENoaWxkKHRvb2xiYXJMb29zZUZpbHRlcigpKTtcbiAgICAgICAgdG9vbGJhckZpbHRlcnMuYXBwZW5kQ2hpbGQodG9vbGJhck1vZHVsZUZpbHRlcihiZWdpbkRldGFpbHMpKTtcbiAgICAgICAgdmFyIGNsZWFyZml4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNsZWFyZml4LmNsYXNzTmFtZSA9ICdjbGVhcmZpeCc7XG4gICAgICAgIHRvb2xiYXIuYXBwZW5kQ2hpbGQodG9vbGJhckZpbHRlcnMpO1xuICAgICAgICB0b29sYmFyLmFwcGVuZENoaWxkKGNsZWFyZml4KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYXBwZW5kSGVhZGVyKCkge1xuICAgICAgdmFyIGhlYWRlciA9IGlkKCdxdW5pdC1oZWFkZXInKTtcbiAgICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgaGVhZGVyLmlubmVySFRNTCA9IFwiPGEgaHJlZj0nXCIgKyBlc2NhcGVUZXh0KHVuZmlsdGVyZWRVcmwpICsgXCInPlwiICsgaGVhZGVyLmlubmVySFRNTCArICc8L2E+ICc7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFwcGVuZEJhbm5lcigpIHtcbiAgICAgIHZhciBiYW5uZXIgPSBpZCgncXVuaXQtYmFubmVyJyk7XG4gICAgICBpZiAoYmFubmVyKSB7XG4gICAgICAgIGJhbm5lci5jbGFzc05hbWUgPSAnJztcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYXBwZW5kVGVzdFJlc3VsdHMoKSB7XG4gICAgICB2YXIgdGVzdHMgPSBpZCgncXVuaXQtdGVzdHMnKTtcbiAgICAgIHZhciByZXN1bHQgPSBpZCgncXVuaXQtdGVzdHJlc3VsdCcpO1xuICAgICAgdmFyIGNvbnRyb2xzO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXN1bHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyZXN1bHQpO1xuICAgICAgfVxuICAgICAgaWYgKHRlc3RzKSB7XG4gICAgICAgIHRlc3RzLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHJlc3VsdC5pZCA9ICdxdW5pdC10ZXN0cmVzdWx0JztcbiAgICAgICAgcmVzdWx0LmNsYXNzTmFtZSA9ICdyZXN1bHQnO1xuICAgICAgICB0ZXN0cy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShyZXN1bHQsIHRlc3RzKTtcbiAgICAgICAgcmVzdWx0LmlubmVySFRNTCA9ICc8ZGl2IGlkPVwicXVuaXQtdGVzdHJlc3VsdC1kaXNwbGF5XCI+UnVubmluZy4uLjxiciAvPiYjMTYwOzwvZGl2PicgKyAnPGRpdiBpZD1cInF1bml0LXRlc3RyZXN1bHQtY29udHJvbHNcIj48L2Rpdj4nICsgJzxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPjwvZGl2Pic7XG4gICAgICAgIGNvbnRyb2xzID0gaWQoJ3F1bml0LXRlc3RyZXN1bHQtY29udHJvbHMnKTtcbiAgICAgIH1cbiAgICAgIGlmIChjb250cm9scykge1xuICAgICAgICBjb250cm9scy5hcHBlbmRDaGlsZChhYm9ydFRlc3RzQnV0dG9uKCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhcHBlbmRGaWx0ZXJlZFRlc3QoKSB7XG4gICAgICB2YXIgdGVzdElkID0gUVVuaXQuY29uZmlnLnRlc3RJZDtcbiAgICAgIGlmICghdGVzdElkIHx8IHRlc3RJZC5sZW5ndGggPD0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICByZXR1cm4gXCI8ZGl2IGlkPSdxdW5pdC1maWx0ZXJlZFRlc3QnPlJlcnVubmluZyBzZWxlY3RlZCB0ZXN0czogXCIgKyBlc2NhcGVUZXh0KHRlc3RJZC5qb2luKCcsICcpKSArIFwiIDxhIGlkPSdxdW5pdC1jbGVhckZpbHRlcicgaHJlZj0nXCIgKyBlc2NhcGVUZXh0KHVuZmlsdGVyZWRVcmwpICsgXCInPlJ1biBhbGwgdGVzdHM8L2E+PC9kaXY+XCI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFwcGVuZFVzZXJBZ2VudCgpIHtcbiAgICAgIHZhciB1c2VyQWdlbnQgPSBpZCgncXVuaXQtdXNlckFnZW50Jyk7XG4gICAgICBpZiAodXNlckFnZW50KSB7XG4gICAgICAgIHVzZXJBZ2VudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdXNlckFnZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdRVW5pdCAnICsgUVVuaXQudmVyc2lvbiArICc7ICcgKyBuYXZpZ2F0b3IudXNlckFnZW50KSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFwcGVuZEludGVyZmFjZShiZWdpbkRldGFpbHMpIHtcbiAgICAgIHZhciBxdW5pdCA9IGlkKCdxdW5pdCcpO1xuXG4gICAgICAvLyBGb3IgY29tcGF0IHdpdGggUVVuaXQgMS4yLCBhbmQgdG8gc3VwcG9ydCBmdWxseSBjdXN0b20gdGhlbWUgSFRNTCxcbiAgICAgIC8vIHdlIHdpbGwgdXNlIGFueSBleGlzdGluZyBlbGVtZW50cyBpZiBubyBpZD1cInF1bml0XCIgZWxlbWVudCBleGlzdHMuXG4gICAgICAvL1xuICAgICAgLy8gTm90ZSB0aGF0IHdlIGRvbid0IGZhaWwgb3IgZmFsbGJhY2sgdG8gY3JlYXRpbmcgaXQgb3Vyc2VsdmVzLFxuICAgICAgLy8gYmVjYXVzZSBub3QgaGF2aW5nIGlkPVwicXVuaXRcIiAoYW5kIG5vdCBoYXZpbmcgdGhlIGJlbG93IGVsZW1lbnRzKVxuICAgICAgLy8gc2ltcGx5IG1lYW5zIFFVbml0IGFjdHMgaGVhZGxlc3MsIGFsbG93aW5nIHVzZXJzIHRvIHVzZSB0aGVpciBvd25cbiAgICAgIC8vIHJlcG9ydGVycywgb3IgZm9yIGEgdGVzdCBydW5uZXIgdG8gbGlzdGVuIGZvciBldmVudHMgZGlyZWN0bHkgd2l0aG91dFxuICAgICAgLy8gaGF2aW5nIHRoZSBIVE1MIHJlcG9ydGVyIGFjdGl2ZWx5IHJlbmRlciBhbnl0aGluZy5cbiAgICAgIGlmIChxdW5pdCkge1xuICAgICAgICBxdW5pdC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnbWFpbicpO1xuXG4gICAgICAgIC8vIFNpbmNlIFFVbml0IDEuMywgdGhlc2UgYXJlIGNyZWF0ZWQgYXV0b21hdGljYWxseSBpZiB0aGUgcGFnZVxuICAgICAgICAvLyBjb250YWlucyBpZD1cInF1bml0XCIuXG4gICAgICAgIHF1bml0LmlubmVySFRNTCA9IFwiPGgxIGlkPSdxdW5pdC1oZWFkZXInPlwiICsgZXNjYXBlVGV4dChkb2N1bWVudC50aXRsZSkgKyAnPC9oMT4nICsgXCI8aDIgaWQ9J3F1bml0LWJhbm5lcic+PC9oMj5cIiArIFwiPGRpdiBpZD0ncXVuaXQtdGVzdHJ1bm5lci10b29sYmFyJyByb2xlPSduYXZpZ2F0aW9uJz48L2Rpdj5cIiArIGFwcGVuZEZpbHRlcmVkVGVzdCgpICsgXCI8aDIgaWQ9J3F1bml0LXVzZXJBZ2VudCc+PC9oMj5cIiArIFwiPG9sIGlkPSdxdW5pdC10ZXN0cyc+PC9vbD5cIjtcbiAgICAgIH1cbiAgICAgIGFwcGVuZEhlYWRlcigpO1xuICAgICAgYXBwZW5kQmFubmVyKCk7XG4gICAgICBhcHBlbmRUZXN0UmVzdWx0cygpO1xuICAgICAgYXBwZW5kVXNlckFnZW50KCk7XG4gICAgICBhcHBlbmRUb29sYmFyKGJlZ2luRGV0YWlscyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFwcGVuZFRlc3QobmFtZSwgdGVzdElkLCBtb2R1bGVOYW1lKSB7XG4gICAgICB2YXIgdGVzdHMgPSBpZCgncXVuaXQtdGVzdHMnKTtcbiAgICAgIGlmICghdGVzdHMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3Ryb25nJyk7XG4gICAgICB0aXRsZS5jbGFzc05hbWUgPSAncXVuaXQtdGVzdC1uYW1lJztcbiAgICAgIHRpdGxlLmlubmVySFRNTCA9IGdldE5hbWVIdG1sKG5hbWUsIG1vZHVsZU5hbWUpO1xuICAgICAgdmFyIHRlc3RCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICB0ZXN0QmxvY2suYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAvLyBObyBJRCBvciByZXJ1biBsaW5rIGZvciBcImdsb2JhbCBmYWlsdXJlXCIgYmxvY2tzXG4gICAgICBpZiAodGVzdElkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIHJlcnVuVHJpZ2dlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgcmVydW5UcmlnZ2VyLmlubmVySFRNTCA9ICdSZXJ1bic7XG4gICAgICAgIHJlcnVuVHJpZ2dlci5ocmVmID0gc2V0VXJsKHtcbiAgICAgICAgICB0ZXN0SWQ6IHRlc3RJZFxuICAgICAgICB9KTtcbiAgICAgICAgdGVzdEJsb2NrLmlkID0gJ3F1bml0LXRlc3Qtb3V0cHV0LScgKyB0ZXN0SWQ7XG4gICAgICAgIHRlc3RCbG9jay5hcHBlbmRDaGlsZChyZXJ1blRyaWdnZXIpO1xuICAgICAgfVxuICAgICAgdmFyIGFzc2VydExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvbCcpO1xuICAgICAgYXNzZXJ0TGlzdC5jbGFzc05hbWUgPSAncXVuaXQtYXNzZXJ0LWxpc3QnO1xuICAgICAgdGVzdEJsb2NrLmFwcGVuZENoaWxkKGFzc2VydExpc3QpO1xuICAgICAgdGVzdHMuYXBwZW5kQ2hpbGQodGVzdEJsb2NrKTtcbiAgICAgIHJldHVybiB0ZXN0QmxvY2s7XG4gICAgfVxuXG4gICAgLy8gSFRNTCBSZXBvcnRlciBpbml0aWFsaXphdGlvbiBhbmQgbG9hZFxuICAgIFFVbml0Lm9uKCdydW5TdGFydCcsIGZ1bmN0aW9uIChydW5TdGFydCkge1xuICAgICAgc3RhdHMuZGVmaW5lZCA9IHJ1blN0YXJ0LnRlc3RDb3VudHMudG90YWw7XG4gICAgfSk7XG4gICAgUVVuaXQuYmVnaW4oZnVuY3Rpb24gKGJlZ2luRGV0YWlscykge1xuICAgICAgLy8gSW5pdGlhbGl6ZSBRVW5pdCBlbGVtZW50c1xuICAgICAgLy8gVGhpcyBpcyBkb25lIGZyb20gYmVnaW4oKSBpbnN0ZWFkIG9mIHJ1blN0YXJ0LCBiZWNhdXNlXG4gICAgICAvLyB1cmxwYXJhbXMuanMgdXNlcyBiZWdpbigpLCB3aGljaCB3ZSBuZWVkIHRvIHdhaXQgZm9yLlxuICAgICAgLy8gdXJscGFyYW1zLmpzIGluIHR1cm4gdXNlcyBiZWdpbigpIHRvIGFsbG93IHBsdWdpbnMgdG9cbiAgICAgIC8vIGFkZCBlbnRyaWVzIHRvIFFVbml0LmNvbmZpZy51cmxDb25maWcsIHdoaWNoIG1heSBiZSBkb25lXG4gICAgICAvLyBhc3luY2hyb25vdXNseS5cbiAgICAgIC8vIDxodHRwczovL2dpdGh1Yi5jb20vcXVuaXRqcy9xdW5pdC9pc3N1ZXMvMTY1Nz5cbiAgICAgIGFwcGVuZEludGVyZmFjZShiZWdpbkRldGFpbHMpO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIGdldFJlcnVuRmFpbGVkSHRtbChmYWlsZWRUZXN0cykge1xuICAgICAgaWYgKGZhaWxlZFRlc3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICB2YXIgaHJlZiA9IHNldFVybCh7XG4gICAgICAgIHRlc3RJZDogZmFpbGVkVGVzdHNcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFtcIjxiciAvPjxhIGhyZWY9J1wiICsgZXNjYXBlVGV4dChocmVmKSArIFwiJz5cIiwgZmFpbGVkVGVzdHMubGVuZ3RoID09PSAxID8gJ1JlcnVuIDEgZmFpbGVkIHRlc3QnIDogJ1JlcnVuICcgKyBmYWlsZWRUZXN0cy5sZW5ndGggKyAnIGZhaWxlZCB0ZXN0cycsICc8L2E+J10uam9pbignJyk7XG4gICAgfVxuICAgIFFVbml0Lm9uKCdydW5FbmQnLCBmdW5jdGlvbiAocnVuRW5kKSB7XG4gICAgICB2YXIgYmFubmVyID0gaWQoJ3F1bml0LWJhbm5lcicpO1xuICAgICAgdmFyIHRlc3RzID0gaWQoJ3F1bml0LXRlc3RzJyk7XG4gICAgICB2YXIgYWJvcnRCdXR0b24gPSBpZCgncXVuaXQtYWJvcnQtdGVzdHMtYnV0dG9uJyk7XG4gICAgICB2YXIgYXNzZXJ0UGFzc2VkID0gY29uZmlnLnN0YXRzLmFsbCAtIGNvbmZpZy5zdGF0cy5iYWQ7XG4gICAgICB2YXIgaHRtbCA9IFtydW5FbmQudGVzdENvdW50cy50b3RhbCwgJyB0ZXN0cyBjb21wbGV0ZWQgaW4gJywgcnVuRW5kLnJ1bnRpbWUsICcgbWlsbGlzZWNvbmRzLCB3aXRoICcsIHJ1bkVuZC50ZXN0Q291bnRzLmZhaWxlZCwgJyBmYWlsZWQsICcsIHJ1bkVuZC50ZXN0Q291bnRzLnNraXBwZWQsICcgc2tpcHBlZCwgYW5kICcsIHJ1bkVuZC50ZXN0Q291bnRzLnRvZG8sICcgdG9kby48YnIgLz4nLCBcIjxzcGFuIGNsYXNzPSdwYXNzZWQnPlwiLCBhc3NlcnRQYXNzZWQsIFwiPC9zcGFuPiBhc3NlcnRpb25zIG9mIDxzcGFuIGNsYXNzPSd0b3RhbCc+XCIsIGNvbmZpZy5zdGF0cy5hbGwsIFwiPC9zcGFuPiBwYXNzZWQsIDxzcGFuIGNsYXNzPSdmYWlsZWQnPlwiLCBjb25maWcuc3RhdHMuYmFkLCAnPC9zcGFuPiBmYWlsZWQuJywgZ2V0UmVydW5GYWlsZWRIdG1sKHN0YXRzLmZhaWxlZFRlc3RzKV0uam9pbignJyk7XG4gICAgICB2YXIgdGVzdDtcbiAgICAgIHZhciBhc3NlcnRMaTtcbiAgICAgIHZhciBhc3NlcnRMaXN0O1xuXG4gICAgICAvLyBVcGRhdGUgcmVtYWluaW5nIHRlc3RzIHRvIGFib3J0ZWRcbiAgICAgIGlmIChhYm9ydEJ1dHRvbiAmJiBhYm9ydEJ1dHRvbi5kaXNhYmxlZCkge1xuICAgICAgICBodG1sID0gJ1Rlc3RzIGFib3J0ZWQgYWZ0ZXIgJyArIHJ1bkVuZC5ydW50aW1lICsgJyBtaWxsaXNlY29uZHMuJztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXN0cy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRlc3QgPSB0ZXN0cy5jaGlsZHJlbltpXTtcbiAgICAgICAgICBpZiAodGVzdC5jbGFzc05hbWUgPT09ICcnIHx8IHRlc3QuY2xhc3NOYW1lID09PSAncnVubmluZycpIHtcbiAgICAgICAgICAgIHRlc3QuY2xhc3NOYW1lID0gJ2Fib3J0ZWQnO1xuICAgICAgICAgICAgYXNzZXJ0TGlzdCA9IHRlc3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ29sJylbMF07XG4gICAgICAgICAgICBhc3NlcnRMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBhc3NlcnRMaS5jbGFzc05hbWUgPSAnZmFpbCc7XG4gICAgICAgICAgICBhc3NlcnRMaS5pbm5lckhUTUwgPSAnVGVzdCBhYm9ydGVkLic7XG4gICAgICAgICAgICBhc3NlcnRMaXN0LmFwcGVuZENoaWxkKGFzc2VydExpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChiYW5uZXIgJiYgKCFhYm9ydEJ1dHRvbiB8fCBhYm9ydEJ1dHRvbi5kaXNhYmxlZCA9PT0gZmFsc2UpKSB7XG4gICAgICAgIGJhbm5lci5jbGFzc05hbWUgPSBydW5FbmQuc3RhdHVzID09PSAnZmFpbGVkJyA/ICdxdW5pdC1mYWlsJyA6ICdxdW5pdC1wYXNzJztcbiAgICAgIH1cbiAgICAgIGlmIChhYm9ydEJ1dHRvbikge1xuICAgICAgICBhYm9ydEJ1dHRvbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGFib3J0QnV0dG9uKTtcbiAgICAgIH1cbiAgICAgIGlmICh0ZXN0cykge1xuICAgICAgICBpZCgncXVuaXQtdGVzdHJlc3VsdC1kaXNwbGF5JykuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgIH1cbiAgICAgIGlmIChjb25maWcuYWx0ZXJ0aXRsZSAmJiBkb2N1bWVudC50aXRsZSkge1xuICAgICAgICAvLyBTaG93IFx1MjcxNiBmb3IgZ29vZCwgXHUyNzE0IGZvciBiYWQgc3VpdGUgcmVzdWx0IGluIHRpdGxlXG4gICAgICAgIC8vIHVzZSBlc2NhcGUgc2VxdWVuY2VzIGluIGNhc2UgZmlsZSBnZXRzIGxvYWRlZCB3aXRoIG5vbi11dGYtOFxuICAgICAgICAvLyBjaGFyc2V0XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gW3J1bkVuZC5zdGF0dXMgPT09ICdmYWlsZWQnID8gXCJcXHUyNzE2XCIgOiBcIlxcdTI3MTRcIiwgZG9jdW1lbnQudGl0bGUucmVwbGFjZSgvXltcXHUyNzE0XFx1MjcxNl0gL2ksICcnKV0uam9pbignICcpO1xuICAgICAgfVxuXG4gICAgICAvLyBTY3JvbGwgYmFjayB0byB0b3AgdG8gc2hvdyByZXN1bHRzXG4gICAgICBpZiAoY29uZmlnLnNjcm9sbHRvcCAmJiB3aW5kb3ckMS5zY3JvbGxUbykge1xuICAgICAgICB3aW5kb3ckMS5zY3JvbGxUbygwLCAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBmdW5jdGlvbiBnZXROYW1lSHRtbChuYW1lLCBtb2R1bGUpIHtcbiAgICAgIHZhciBuYW1lSHRtbCA9ICcnO1xuICAgICAgaWYgKG1vZHVsZSkge1xuICAgICAgICBuYW1lSHRtbCA9IFwiPHNwYW4gY2xhc3M9J21vZHVsZS1uYW1lJz5cIiArIGVzY2FwZVRleHQobW9kdWxlKSArICc8L3NwYW4+OiAnO1xuICAgICAgfVxuICAgICAgbmFtZUh0bWwgKz0gXCI8c3BhbiBjbGFzcz0ndGVzdC1uYW1lJz5cIiArIGVzY2FwZVRleHQobmFtZSkgKyAnPC9zcGFuPic7XG4gICAgICByZXR1cm4gbmFtZUh0bWw7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFByb2dyZXNzSHRtbChzdGF0cykge1xuICAgICAgcmV0dXJuIFtzdGF0cy5jb21wbGV0ZWQsICcgLyAnLCBzdGF0cy5kZWZpbmVkLCAnIHRlc3RzIGNvbXBsZXRlZC48YnIgLz4nXS5qb2luKCcnKTtcbiAgICB9XG4gICAgUVVuaXQudGVzdFN0YXJ0KGZ1bmN0aW9uIChkZXRhaWxzKSB7XG4gICAgICB2YXIgcnVubmluZywgYmFkO1xuICAgICAgYXBwZW5kVGVzdChkZXRhaWxzLm5hbWUsIGRldGFpbHMudGVzdElkLCBkZXRhaWxzLm1vZHVsZSk7XG4gICAgICBydW5uaW5nID0gaWQoJ3F1bml0LXRlc3RyZXN1bHQtZGlzcGxheScpO1xuICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgYWRkQ2xhc3MocnVubmluZywgJ3J1bm5pbmcnKTtcbiAgICAgICAgYmFkID0gUVVuaXQuY29uZmlnLnJlb3JkZXIgJiYgZGV0YWlscy5wcmV2aW91c0ZhaWx1cmU7XG4gICAgICAgIHJ1bm5pbmcuaW5uZXJIVE1MID0gW2dldFByb2dyZXNzSHRtbChzdGF0cyksIGJhZCA/ICdSZXJ1bm5pbmcgcHJldmlvdXNseSBmYWlsZWQgdGVzdDogPGJyIC8+JyA6ICdSdW5uaW5nOiAnLCBnZXROYW1lSHRtbChkZXRhaWxzLm5hbWUsIGRldGFpbHMubW9kdWxlKSwgZ2V0UmVydW5GYWlsZWRIdG1sKHN0YXRzLmZhaWxlZFRlc3RzKV0uam9pbignJyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gc3RyaXBIdG1sKHN0cmluZykge1xuICAgICAgLy8gU3RyaXAgdGFncywgaHRtbCBlbnRpdHkgYW5kIHdoaXRlc3BhY2VzXG4gICAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLzxcXC8/W14+XSsoPnwkKS9nLCAnJykucmVwbGFjZSgvJnF1b3Q7L2csICcnKS5yZXBsYWNlKC9cXHMrL2csICcnKTtcbiAgICB9XG4gICAgUVVuaXQubG9nKGZ1bmN0aW9uIChkZXRhaWxzKSB7XG4gICAgICB2YXIgdGVzdEl0ZW0gPSBpZCgncXVuaXQtdGVzdC1vdXRwdXQtJyArIGRldGFpbHMudGVzdElkKTtcbiAgICAgIGlmICghdGVzdEl0ZW0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIG1lc3NhZ2UgPSBlc2NhcGVUZXh0KGRldGFpbHMubWVzc2FnZSkgfHwgKGRldGFpbHMucmVzdWx0ID8gJ29rYXknIDogJ2ZhaWxlZCcpO1xuICAgICAgbWVzc2FnZSA9IFwiPHNwYW4gY2xhc3M9J3Rlc3QtbWVzc2FnZSc+XCIgKyBtZXNzYWdlICsgJzwvc3Bhbj4nO1xuICAgICAgbWVzc2FnZSArPSBcIjxzcGFuIGNsYXNzPSdydW50aW1lJz5AIFwiICsgZGV0YWlscy5ydW50aW1lICsgJyBtczwvc3Bhbj4nO1xuICAgICAgdmFyIGV4cGVjdGVkO1xuICAgICAgdmFyIGFjdHVhbDtcbiAgICAgIHZhciBkaWZmO1xuICAgICAgdmFyIHNob3dEaWZmID0gZmFsc2U7XG5cbiAgICAgIC8vIFdoZW4gcHVzaEZhaWx1cmUoKSBpcyBjYWxsZWQsIGl0IGlzIGltcGxpZWQgdGhhdCBubyBleHBlY3RlZCB2YWx1ZVxuICAgICAgLy8gb3IgZGlmZiBzaG91bGQgYmUgc2hvd24sIGJlY2F1c2UgYm90aCBleHBlY3RlZCBhbmQgYWN0dWFsIGFzIHVuZGVmaW5lZC5cbiAgICAgIC8vXG4gICAgICAvLyBUaGlzIG11c3QgY2hlY2sgZGV0YWlscy5leHBlY3RlZCBleGlzdGVuY2UuIElmIGl0IGV4aXN0cyBhcyB1bmRlZmluZWQsXG4gICAgICAvLyB0aGF0J3MgYSByZWd1bGFyIGFzc2VydGlvbiBmb3Igd2hpY2ggdG8gcmVuZGVyIGFjdHVhbC9leHBlY3RlZCBhbmQgYSBkaWZmLlxuICAgICAgdmFyIHNob3dBbnlWYWx1ZXMgPSAhZGV0YWlscy5yZXN1bHQgJiYgKGRldGFpbHMuZXhwZWN0ZWQgIT09IHVuZGVmaW5lZCB8fCBkZXRhaWxzLmFjdHVhbCAhPT0gdW5kZWZpbmVkKTtcbiAgICAgIGlmIChzaG93QW55VmFsdWVzKSB7XG4gICAgICAgIGlmIChkZXRhaWxzLm5lZ2F0aXZlKSB7XG4gICAgICAgICAgZXhwZWN0ZWQgPSAnTk9UICcgKyBRVW5pdC5kdW1wLnBhcnNlKGRldGFpbHMuZXhwZWN0ZWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGV4cGVjdGVkID0gUVVuaXQuZHVtcC5wYXJzZShkZXRhaWxzLmV4cGVjdGVkKTtcbiAgICAgICAgfVxuICAgICAgICBhY3R1YWwgPSBRVW5pdC5kdW1wLnBhcnNlKGRldGFpbHMuYWN0dWFsKTtcbiAgICAgICAgbWVzc2FnZSArPSBcIjx0YWJsZT48dHIgY2xhc3M9J3Rlc3QtZXhwZWN0ZWQnPjx0aD5FeHBlY3RlZDogPC90aD48dGQ+PHByZT5cIiArIGVzY2FwZVRleHQoZXhwZWN0ZWQpICsgJzwvcHJlPjwvdGQ+PC90cj4nO1xuICAgICAgICBpZiAoYWN0dWFsICE9PSBleHBlY3RlZCkge1xuICAgICAgICAgIG1lc3NhZ2UgKz0gXCI8dHIgY2xhc3M9J3Rlc3QtYWN0dWFsJz48dGg+UmVzdWx0OiA8L3RoPjx0ZD48cHJlPlwiICsgZXNjYXBlVGV4dChhY3R1YWwpICsgJzwvcHJlPjwvdGQ+PC90cj4nO1xuICAgICAgICAgIGlmICh0eXBlb2YgZGV0YWlscy5hY3R1YWwgPT09ICdudW1iZXInICYmIHR5cGVvZiBkZXRhaWxzLmV4cGVjdGVkID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaWYgKCFpc05hTihkZXRhaWxzLmFjdHVhbCkgJiYgIWlzTmFOKGRldGFpbHMuZXhwZWN0ZWQpKSB7XG4gICAgICAgICAgICAgIHNob3dEaWZmID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZGlmZiA9IGRldGFpbHMuYWN0dWFsIC0gZGV0YWlscy5leHBlY3RlZDtcbiAgICAgICAgICAgICAgZGlmZiA9IChkaWZmID4gMCA/ICcrJyA6ICcnKSArIGRpZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGV0YWlscy5hY3R1YWwgIT09ICdib29sZWFuJyAmJiB0eXBlb2YgZGV0YWlscy5leHBlY3RlZCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICBkaWZmID0gUVVuaXQuZGlmZihleHBlY3RlZCwgYWN0dWFsKTtcblxuICAgICAgICAgICAgLy8gZG9uJ3Qgc2hvdyBkaWZmIGlmIHRoZXJlIGlzIHplcm8gb3ZlcmxhcFxuICAgICAgICAgICAgc2hvd0RpZmYgPSBzdHJpcEh0bWwoZGlmZikubGVuZ3RoICE9PSBzdHJpcEh0bWwoZXhwZWN0ZWQpLmxlbmd0aCArIHN0cmlwSHRtbChhY3R1YWwpLmxlbmd0aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNob3dEaWZmKSB7XG4gICAgICAgICAgICBtZXNzYWdlICs9IFwiPHRyIGNsYXNzPSd0ZXN0LWRpZmYnPjx0aD5EaWZmOiA8L3RoPjx0ZD48cHJlPlwiICsgZGlmZiArICc8L3ByZT48L3RkPjwvdHI+JztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZXhwZWN0ZWQuaW5kZXhPZignW29iamVjdCBBcnJheV0nKSAhPT0gLTEgfHwgZXhwZWN0ZWQuaW5kZXhPZignW29iamVjdCBPYmplY3RdJykgIT09IC0xKSB7XG4gICAgICAgICAgbWVzc2FnZSArPSBcIjx0ciBjbGFzcz0ndGVzdC1tZXNzYWdlJz48dGg+TWVzc2FnZTogPC90aD48dGQ+XCIgKyAnRGlmZiBzdXBwcmVzc2VkIGFzIHRoZSBkZXB0aCBvZiBvYmplY3QgaXMgbW9yZSB0aGFuIGN1cnJlbnQgbWF4IGRlcHRoICgnICsgUVVuaXQuZHVtcC5tYXhEZXB0aCArICcpLjxwPkhpbnQ6IFVzZSA8Y29kZT5RVW5pdC5kdW1wLm1heERlcHRoPC9jb2RlPiB0byAnICsgXCIgcnVuIHdpdGggYSBoaWdoZXIgbWF4IGRlcHRoIG9yIDxhIGhyZWY9J1wiICsgZXNjYXBlVGV4dChzZXRVcmwoe1xuICAgICAgICAgICAgbWF4RGVwdGg6IDBcbiAgICAgICAgICB9KSkgKyBcIic+XCIgKyAnUmVydW4gd2l0aG91dCBtYXggZGVwdGg8L2E+LjwvcD48L3RkPjwvdHI+JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtZXNzYWdlICs9IFwiPHRyIGNsYXNzPSd0ZXN0LW1lc3NhZ2UnPjx0aD5NZXNzYWdlOiA8L3RoPjx0ZD5cIiArICdEaWZmIHN1cHByZXNzZWQgYXMgdGhlIGV4cGVjdGVkIGFuZCBhY3R1YWwgcmVzdWx0cyBoYXZlIGFuIGVxdWl2YWxlbnQnICsgJyBzZXJpYWxpemF0aW9uPC90ZD48L3RyPic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRldGFpbHMuc291cmNlKSB7XG4gICAgICAgICAgbWVzc2FnZSArPSBcIjx0ciBjbGFzcz0ndGVzdC1zb3VyY2UnPjx0aD5Tb3VyY2U6IDwvdGg+PHRkPjxwcmU+XCIgKyBlc2NhcGVUZXh0KGRldGFpbHMuc291cmNlKSArICc8L3ByZT48L3RkPjwvdHI+JztcbiAgICAgICAgfVxuICAgICAgICBtZXNzYWdlICs9ICc8L3RhYmxlPic7XG5cbiAgICAgICAgLy8gVGhpcyBvY2N1cnMgd2hlbiBwdXNoRmFpbHVyZSBpcyBzZXQgYW5kIHdlIGhhdmUgYW4gZXh0cmFjdGVkIHN0YWNrIHRyYWNlXG4gICAgICB9IGVsc2UgaWYgKCFkZXRhaWxzLnJlc3VsdCAmJiBkZXRhaWxzLnNvdXJjZSkge1xuICAgICAgICBtZXNzYWdlICs9ICc8dGFibGU+JyArIFwiPHRyIGNsYXNzPSd0ZXN0LXNvdXJjZSc+PHRoPlNvdXJjZTogPC90aD48dGQ+PHByZT5cIiArIGVzY2FwZVRleHQoZGV0YWlscy5zb3VyY2UpICsgJzwvcHJlPjwvdGQ+PC90cj4nICsgJzwvdGFibGU+JztcbiAgICAgIH1cbiAgICAgIHZhciBhc3NlcnRMaXN0ID0gdGVzdEl0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ29sJylbMF07XG4gICAgICB2YXIgYXNzZXJ0TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgYXNzZXJ0TGkuY2xhc3NOYW1lID0gZGV0YWlscy5yZXN1bHQgPyAncGFzcycgOiAnZmFpbCc7XG4gICAgICBhc3NlcnRMaS5pbm5lckhUTUwgPSBtZXNzYWdlO1xuICAgICAgYXNzZXJ0TGlzdC5hcHBlbmRDaGlsZChhc3NlcnRMaSk7XG4gICAgfSk7XG4gICAgUVVuaXQudGVzdERvbmUoZnVuY3Rpb24gKGRldGFpbHMpIHtcbiAgICAgIHZhciB0ZXN0cyA9IGlkKCdxdW5pdC10ZXN0cycpO1xuICAgICAgdmFyIHRlc3RJdGVtID0gaWQoJ3F1bml0LXRlc3Qtb3V0cHV0LScgKyBkZXRhaWxzLnRlc3RJZCk7XG4gICAgICBpZiAoIXRlc3RzIHx8ICF0ZXN0SXRlbSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZW1vdmVDbGFzcyh0ZXN0SXRlbSwgJ3J1bm5pbmcnKTtcbiAgICAgIHZhciBzdGF0dXM7XG4gICAgICBpZiAoZGV0YWlscy5mYWlsZWQgPiAwKSB7XG4gICAgICAgIHN0YXR1cyA9ICdmYWlsZWQnO1xuICAgICAgfSBlbHNlIGlmIChkZXRhaWxzLnRvZG8pIHtcbiAgICAgICAgc3RhdHVzID0gJ3RvZG8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdHVzID0gZGV0YWlscy5za2lwcGVkID8gJ3NraXBwZWQnIDogJ3Bhc3NlZCc7XG4gICAgICB9XG4gICAgICB2YXIgYXNzZXJ0TGlzdCA9IHRlc3RJdGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdvbCcpWzBdO1xuICAgICAgdmFyIGdvb2QgPSBkZXRhaWxzLnBhc3NlZDtcbiAgICAgIHZhciBiYWQgPSBkZXRhaWxzLmZhaWxlZDtcblxuICAgICAgLy8gVGhpcyB0ZXN0IHBhc3NlZCBpZiBpdCBoYXMgbm8gdW5leHBlY3RlZCBmYWlsZWQgYXNzZXJ0aW9uc1xuICAgICAgdmFyIHRlc3RQYXNzZWQgPSBkZXRhaWxzLmZhaWxlZCA+IDAgPyBkZXRhaWxzLnRvZG8gOiAhZGV0YWlscy50b2RvO1xuICAgICAgaWYgKHRlc3RQYXNzZWQpIHtcbiAgICAgICAgLy8gQ29sbGFwc2UgdGhlIHBhc3NpbmcgdGVzdHNcbiAgICAgICAgYWRkQ2xhc3MoYXNzZXJ0TGlzdCwgJ3F1bml0LWNvbGxhcHNlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdHMuZmFpbGVkVGVzdHMucHVzaChkZXRhaWxzLnRlc3RJZCk7XG4gICAgICAgIGlmIChjb25maWcuY29sbGFwc2UpIHtcbiAgICAgICAgICBpZiAoIWNvbGxhcHNlTmV4dCkge1xuICAgICAgICAgICAgLy8gU2tpcCBjb2xsYXBzaW5nIHRoZSBmaXJzdCBmYWlsaW5nIHRlc3RcbiAgICAgICAgICAgIGNvbGxhcHNlTmV4dCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIENvbGxhcHNlIHJlbWFpbmluZyB0ZXN0c1xuICAgICAgICAgICAgYWRkQ2xhc3MoYXNzZXJ0TGlzdCwgJ3F1bml0LWNvbGxhcHNlZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgdGVzdEl0ZW0uZmlyc3RDaGlsZCBpcyB0aGUgdGVzdCBuYW1lXG4gICAgICB2YXIgdGVzdFRpdGxlID0gdGVzdEl0ZW0uZmlyc3RDaGlsZDtcbiAgICAgIHZhciB0ZXN0Q291bnRzID0gYmFkID8gXCI8YiBjbGFzcz0nZmFpbGVkJz5cIiArIGJhZCArICc8L2I+LCAnICsgXCI8YiBjbGFzcz0ncGFzc2VkJz5cIiArIGdvb2QgKyAnPC9iPiwgJyA6ICcnO1xuICAgICAgdGVzdFRpdGxlLmlubmVySFRNTCArPSBcIiA8YiBjbGFzcz0nY291bnRzJz4oXCIgKyB0ZXN0Q291bnRzICsgZGV0YWlscy5hc3NlcnRpb25zLmxlbmd0aCArICcpPC9iPic7XG4gICAgICBzdGF0cy5jb21wbGV0ZWQrKztcbiAgICAgIGlmIChkZXRhaWxzLnNraXBwZWQpIHtcbiAgICAgICAgdGVzdEl0ZW0uY2xhc3NOYW1lID0gJ3NraXBwZWQnO1xuICAgICAgICB2YXIgc2tpcHBlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2VtJyk7XG4gICAgICAgIHNraXBwZWQuY2xhc3NOYW1lID0gJ3F1bml0LXNraXBwZWQtbGFiZWwnO1xuICAgICAgICBza2lwcGVkLmlubmVySFRNTCA9ICdza2lwcGVkJztcbiAgICAgICAgdGVzdEl0ZW0uaW5zZXJ0QmVmb3JlKHNraXBwZWQsIHRlc3RUaXRsZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRFdmVudCh0ZXN0VGl0bGUsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0b2dnbGVDbGFzcyhhc3NlcnRMaXN0LCAncXVuaXQtY29sbGFwc2VkJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0ZXN0SXRlbS5jbGFzc05hbWUgPSB0ZXN0UGFzc2VkID8gJ3Bhc3MnIDogJ2ZhaWwnO1xuICAgICAgICBpZiAoZGV0YWlscy50b2RvKSB7XG4gICAgICAgICAgdmFyIHRvZG9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2VtJyk7XG4gICAgICAgICAgdG9kb0xhYmVsLmNsYXNzTmFtZSA9ICdxdW5pdC10b2RvLWxhYmVsJztcbiAgICAgICAgICB0b2RvTGFiZWwuaW5uZXJIVE1MID0gJ3RvZG8nO1xuICAgICAgICAgIHRlc3RJdGVtLmNsYXNzTmFtZSArPSAnIHRvZG8nO1xuICAgICAgICAgIHRlc3RJdGVtLmluc2VydEJlZm9yZSh0b2RvTGFiZWwsIHRlc3RUaXRsZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHRpbWUuY2xhc3NOYW1lID0gJ3J1bnRpbWUnO1xuICAgICAgICB0aW1lLmlubmVySFRNTCA9IGRldGFpbHMucnVudGltZSArICcgbXMnO1xuICAgICAgICB0ZXN0SXRlbS5pbnNlcnRCZWZvcmUodGltZSwgYXNzZXJ0TGlzdCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNob3cgdGhlIHNvdXJjZSBvZiB0aGUgdGVzdCB3aGVuIHNob3dpbmcgYXNzZXJ0aW9uc1xuICAgICAgaWYgKGRldGFpbHMuc291cmNlKSB7XG4gICAgICAgIHZhciBzb3VyY2VOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBzb3VyY2VOYW1lLmlubmVySFRNTCA9ICc8c3Ryb25nPlNvdXJjZTogPC9zdHJvbmc+JyArIGVzY2FwZVRleHQoZGV0YWlscy5zb3VyY2UpO1xuICAgICAgICBhZGRDbGFzcyhzb3VyY2VOYW1lLCAncXVuaXQtc291cmNlJyk7XG4gICAgICAgIGlmICh0ZXN0UGFzc2VkKSB7XG4gICAgICAgICAgYWRkQ2xhc3Moc291cmNlTmFtZSwgJ3F1bml0LWNvbGxhcHNlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGFkZEV2ZW50KHRlc3RUaXRsZSwgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRvZ2dsZUNsYXNzKHNvdXJjZU5hbWUsICdxdW5pdC1jb2xsYXBzZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRlc3RJdGVtLmFwcGVuZENoaWxkKHNvdXJjZU5hbWUpO1xuICAgICAgfVxuICAgICAgaWYgKGNvbmZpZy5oaWRlcGFzc2VkICYmIChzdGF0dXMgPT09ICdwYXNzZWQnIHx8IGRldGFpbHMuc2tpcHBlZCkpIHtcbiAgICAgICAgLy8gdXNlIHJlbW92ZUNoaWxkIGluc3RlYWQgb2YgcmVtb3ZlIGJlY2F1c2Ugb2Ygc3VwcG9ydFxuICAgICAgICBoaWRkZW5UZXN0cy5wdXNoKHRlc3RJdGVtKTtcbiAgICAgICAgdGVzdHMucmVtb3ZlQ2hpbGQodGVzdEl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIFFVbml0Lm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgdmFyIHRlc3RJdGVtID0gYXBwZW5kVGVzdCgnZ2xvYmFsIGZhaWx1cmUnKTtcbiAgICAgIGlmICghdGVzdEl0ZW0pIHtcbiAgICAgICAgLy8gSFRNTCBSZXBvcnRlciBpcyBwcm9iYWJseSBkaXNhYmxlZCBvciBub3QgeWV0IGluaXRpYWxpemVkLlxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFJlbmRlciBzaW1pbGFyIHRvIGEgZmFpbGVkIGFzc2VydGlvbiAoc2VlIGFib3ZlIFFVbml0LmxvZyBjYWxsYmFjaylcbiAgICAgIHZhciBtZXNzYWdlID0gZXNjYXBlVGV4dChlcnJvclN0cmluZyhlcnJvcikpO1xuICAgICAgbWVzc2FnZSA9IFwiPHNwYW4gY2xhc3M9J3Rlc3QtbWVzc2FnZSc+XCIgKyBtZXNzYWdlICsgJzwvc3Bhbj4nO1xuICAgICAgaWYgKGVycm9yICYmIGVycm9yLnN0YWNrKSB7XG4gICAgICAgIG1lc3NhZ2UgKz0gJzx0YWJsZT4nICsgXCI8dHIgY2xhc3M9J3Rlc3Qtc291cmNlJz48dGg+U291cmNlOiA8L3RoPjx0ZD48cHJlPlwiICsgZXNjYXBlVGV4dChlcnJvci5zdGFjaykgKyAnPC9wcmU+PC90ZD48L3RyPicgKyAnPC90YWJsZT4nO1xuICAgICAgfVxuICAgICAgdmFyIGFzc2VydExpc3QgPSB0ZXN0SXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnb2wnKVswXTtcbiAgICAgIHZhciBhc3NlcnRMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBhc3NlcnRMaS5jbGFzc05hbWUgPSAnZmFpbCc7XG4gICAgICBhc3NlcnRMaS5pbm5lckhUTUwgPSBtZXNzYWdlO1xuICAgICAgYXNzZXJ0TGlzdC5hcHBlbmRDaGlsZChhc3NlcnRMaSk7XG5cbiAgICAgIC8vIE1ha2UgaXQgdmlzaWJsZVxuICAgICAgdGVzdEl0ZW0uY2xhc3NOYW1lID0gJ2ZhaWwnO1xuICAgIH0pO1xuXG4gICAgLy8gQXZvaWQgcmVhZHlTdGF0ZSBpc3N1ZSB3aXRoIHBoYW50b21qc1xuICAgIC8vIFJlZjogIzgxOFxuICAgIHZhciB1c2luZ1BoYW50b20gPSBmdW5jdGlvbiAocCkge1xuICAgICAgcmV0dXJuIHAgJiYgcC52ZXJzaW9uICYmIHAudmVyc2lvbi5tYWpvciA+IDA7XG4gICAgfSh3aW5kb3ckMS5waGFudG9tKTtcbiAgICBpZiAodXNpbmdQaGFudG9tKSB7XG4gICAgICBjb25zb2xlJDEud2FybignU3VwcG9ydCBmb3IgUGhhbnRvbUpTIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBRVW5pdCAzLjAuJyk7XG4gICAgfVxuICAgIGlmICghdXNpbmdQaGFudG9tICYmIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgIFFVbml0LmF1dG9zdGFydCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGRFdmVudCh3aW5kb3ckMSwgJ2xvYWQnLCBRVW5pdC5hdXRvc3RhcnQpO1xuICAgIH1cblxuICAgIC8vIFdyYXAgd2luZG93Lm9uZXJyb3IuIFdlIHdpbGwgY2FsbCB0aGUgb3JpZ2luYWwgd2luZG93Lm9uZXJyb3IgdG8gc2VlIGlmXG4gICAgLy8gdGhlIGV4aXN0aW5nIGhhbmRsZXIgZnVsbHkgaGFuZGxlcyB0aGUgZXJyb3I7IGlmIG5vdCwgd2Ugd2lsbCBjYWxsIHRoZVxuICAgIC8vIFFVbml0Lm9uRXJyb3IgZnVuY3Rpb24uXG4gICAgdmFyIG9yaWdpbmFsV2luZG93T25FcnJvciA9IHdpbmRvdyQxLm9uZXJyb3I7XG5cbiAgICAvLyBDb3ZlciB1bmNhdWdodCBleGNlcHRpb25zXG4gICAgLy8gUmV0dXJuaW5nIHRydWUgd2lsbCBzdXBwcmVzcyB0aGUgZGVmYXVsdCBicm93c2VyIGhhbmRsZXIsXG4gICAgLy8gcmV0dXJuaW5nIGZhbHNlIHdpbGwgbGV0IGl0IHJ1bi5cbiAgICB3aW5kb3ckMS5vbmVycm9yID0gZnVuY3Rpb24gKG1lc3NhZ2UsIGZpbGVOYW1lLCBsaW5lTnVtYmVyLCBjb2x1bW5OdW1iZXIsIGVycm9yT2JqKSB7XG4gICAgICB2YXIgcmV0ID0gZmFsc2U7XG4gICAgICBpZiAob3JpZ2luYWxXaW5kb3dPbkVycm9yKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiA1ID8gX2xlbiAtIDUgOiAwKSwgX2tleSA9IDU7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICBhcmdzW19rZXkgLSA1XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXQgPSBvcmlnaW5hbFdpbmRvd09uRXJyb3IuY2FsbC5hcHBseShvcmlnaW5hbFdpbmRvd09uRXJyb3IsIFt0aGlzLCBtZXNzYWdlLCBmaWxlTmFtZSwgbGluZU51bWJlciwgY29sdW1uTnVtYmVyLCBlcnJvck9ial0uY29uY2F0KGFyZ3MpKTtcbiAgICAgIH1cblxuICAgICAgLy8gVHJlYXQgcmV0dXJuIHZhbHVlIGFzIHdpbmRvdy5vbmVycm9yIGl0c2VsZiBkb2VzLFxuICAgICAgLy8gT25seSBkbyBvdXIgaGFuZGxpbmcgaWYgbm90IHN1cHByZXNzZWQuXG4gICAgICBpZiAocmV0ICE9PSB0cnVlKSB7XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgY3VycmVudCB0ZXN0IHRoYXQgc2V0cyB0aGUgaW50ZXJuYWwgYGlnbm9yZUdsb2JhbEVycm9yc2AgZmllbGRcbiAgICAgICAgLy8gKHN1Y2ggYXMgZHVyaW5nIGBhc3NlcnQudGhyb3dzKClgKSwgdGhlbiB0aGUgZXJyb3IgaXMgaWdub3JlZCBhbmQgbmF0aXZlXG4gICAgICAgIC8vIGVycm9yIHJlcG9ydGluZyBpcyBzdXBwcmVzc2VkIGFzIHdlbGwuIFRoaXMgaXMgYmVjYXVzZSBpbiBicm93c2VycywgYW4gZXJyb3JcbiAgICAgICAgLy8gY2FuIHNvbWV0aW1lcyBlbmQgdXAgaW4gYHdpbmRvdy5vbmVycm9yYCBpbnN0ZWFkIG9mIGluIHRoZSBsb2NhbCB0cnkvY2F0Y2guXG4gICAgICAgIC8vIFRoaXMgaWdub3Jpbmcgb2YgZXJyb3JzIGRvZXMgbm90IGFwcGx5IHRvIG91ciBnZW5lcmFsIG9uVW5jYXVnaHRFeGNlcHRpb25cbiAgICAgICAgLy8gbWV0aG9kLCBub3IgdG8gb3VyIGB1bmhhbmRsZWRSZWplY3Rpb25gIGhhbmRsZXJzLCBhcyB0aG9zZSBhcmUgbm90IG1lYW50XG4gICAgICAgIC8vIHRvIHJlY2VpdmUgYW4gXCJleHBlY3RlZFwiIGVycm9yIGR1cmluZyBgYXNzZXJ0LnRocm93cygpYC5cbiAgICAgICAgaWYgKGNvbmZpZy5jdXJyZW50ICYmIGNvbmZpZy5jdXJyZW50Lmlnbm9yZUdsb2JhbEVycm9ycykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWNjb3JkaW5nIHRvXG4gICAgICAgIC8vIGh0dHBzOi8vYmxvZy5zZW50cnkuaW8vMjAxNi8wMS8wNC9jbGllbnQtamF2YXNjcmlwdC1yZXBvcnRpbmctd2luZG93LW9uZXJyb3IsXG4gICAgICAgIC8vIG1vc3QgbW9kZXJuIGJyb3dzZXJzIHN1cHBvcnQgYW4gZXJyb3JPYmogYXJndW1lbnQ7IHVzZSB0aGF0IHRvXG4gICAgICAgIC8vIGdldCBhIGZ1bGwgc3RhY2sgdHJhY2UgaWYgaXQncyBhdmFpbGFibGUuXG4gICAgICAgIHZhciBlcnJvciA9IGVycm9yT2JqIHx8IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgaWYgKCFlcnJvci5zdGFjayAmJiBmaWxlTmFtZSAmJiBsaW5lTnVtYmVyKSB7XG4gICAgICAgICAgZXJyb3Iuc3RhY2sgPSBcIlwiLmNvbmNhdChmaWxlTmFtZSwgXCI6XCIpLmNvbmNhdChsaW5lTnVtYmVyKTtcbiAgICAgICAgfVxuICAgICAgICBRVW5pdC5vblVuY2F1Z2h0RXhjZXB0aW9uKGVycm9yKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcbiAgICB3aW5kb3ckMS5hZGRFdmVudExpc3RlbmVyKCd1bmhhbmRsZWRyZWplY3Rpb24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIFFVbml0Lm9uVW5jYXVnaHRFeGNlcHRpb24oZXZlbnQucmVhc29uKTtcbiAgICB9KTtcbiAgfSkoKTtcblxufSkoKTtcbiIsICJpbXBvcnQgUVVuaXQgZnJvbSAnLi4vLi4vdmVuZG9yL3F1bml0LmpzJztcblxuUVVuaXQuY29uZmlnLmF1dG9zdGFydCA9IGZhbHNlO1xuXG5leHBvcnQgY29uc3QgaXNMb2NhbCA9IFFVbml0LmlzTG9jYWw7XG5leHBvcnQgY29uc3Qgb24gPSBRVW5pdC5vbjtcbmV4cG9ydCBjb25zdCB0ZXN0ID0gUVVuaXQudGVzdDtcbmV4cG9ydCBjb25zdCBza2lwID0gUVVuaXQuc2tpcDtcbmV4cG9ydCBjb25zdCBzdGFydCA9IFFVbml0LnN0YXJ0O1xuZXhwb3J0IGNvbnN0IGlzID0gUVVuaXQuaXM7XG5leHBvcnQgY29uc3QgZXh0ZW5kID0gUVVuaXQuZXh0ZW5kO1xuZXhwb3J0IGNvbnN0IHN0YWNrID0gUVVuaXQuc3RhY2s7XG5leHBvcnQgY29uc3Qgb25VbmhhbmRsZWRSZWplY3Rpb24gPSBRVW5pdC5vblVuaGFuZGxlZFJlamVjdGlvbjtcbmV4cG9ydCBjb25zdCBhc3NlcnQgPSBRVW5pdC5hc3NlcnQ7XG5leHBvcnQgY29uc3QgZHVtcCA9IFFVbml0LmR1bXA7XG5leHBvcnQgY29uc3QgZG9uZSA9IFFVbml0LmRvbmU7XG5leHBvcnQgY29uc3QgdGVzdFN0YXJ0ID0gUVVuaXQudGVzdFN0YXJ0O1xuZXhwb3J0IGNvbnN0IG1vZHVsZVN0YXJ0ID0gUVVuaXQubW9kdWxlU3RhcnQ7XG5leHBvcnQgY29uc3QgdmVyc2lvbiA9IFFVbml0LnZlcnNpb247XG5leHBvcnQgY29uc3QgbW9kdWxlID0gUVVuaXQubW9kdWxlO1xuZXhwb3J0IGNvbnN0IHRvZG8gPSBRVW5pdC50b2RvO1xuZXhwb3J0IGNvbnN0IG9ubHkgPSBRVW5pdC5vbmx5O1xuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IFFVbml0LmNvbmZpZztcbmV4cG9ydCBjb25zdCBvYmplY3RUeXBlID0gUVVuaXQub2JqZWN0VHlwZTtcbmV4cG9ydCBjb25zdCBsb2FkID0gUVVuaXQubG9hZDtcbmV4cG9ydCBjb25zdCBvbkVycm9yID0gUVVuaXQub25FcnJvcjtcbmV4cG9ydCBjb25zdCBwdXNoRmFpbHVyZSA9IFFVbml0LnB1c2hGYWlsdXJlO1xuZXhwb3J0IGNvbnN0IGVxdWl2ID0gUVVuaXQuZXF1aXY7XG5leHBvcnQgY29uc3QgYmVnaW4gPSBRVW5pdC5iZWdpbjtcbmV4cG9ydCBjb25zdCBsb2cgPSBRVW5pdC5sb2c7XG5leHBvcnQgY29uc3QgdGVzdERvbmUgPSBRVW5pdC50ZXN0RG9uZTtcbmV4cG9ydCBjb25zdCBtb2R1bGVEb25lID0gUVVuaXQubW9kdWxlRG9uZTtcbmV4cG9ydCBjb25zdCBkaWZmID0gUVVuaXQuZGlmZjtcblxuZXhwb3J0IGRlZmF1bHQgUVVuaXQ7XG4iLCAiZXhwb3J0IGludGVyZmFjZSBCb29rIHtcbiAgaWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgYXV0aG9yOiBzdHJpbmc7XG4gIHByaWNlOiBudW1iZXI7XG4gIGdlbnJlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBCb29rQ2F0YWxvZyB7XG4gIHByaXZhdGUgYm9va3M6IE1hcDxzdHJpbmcsIEJvb2s+ID0gbmV3IE1hcCgpO1xuXG4gIGFkZEJvb2soYm9vazogQm9vayk6IHZvaWQge1xuICAgIHRoaXMuYm9va3Muc2V0KGJvb2suaWQsIGJvb2spO1xuICB9XG5cbiAgZmluZEJvb2soaWQ6IHN0cmluZyk6IEJvb2sgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLmJvb2tzLmdldChpZCk7XG4gIH1cblxuICBmaW5kQnlBdXRob3IoYXV0aG9yOiBzdHJpbmcpOiBCb29rW10ge1xuICAgIHJldHVybiBbLi4udGhpcy5ib29rcy52YWx1ZXMoKV0uZmlsdGVyKChiKSA9PiBiLmF1dGhvciA9PT0gYXV0aG9yKTtcbiAgfVxuXG4gIGZpbmRCeUdlbnJlKGdlbnJlOiBzdHJpbmcpOiBCb29rW10ge1xuICAgIHJldHVybiBbLi4udGhpcy5ib29rcy52YWx1ZXMoKV0uZmlsdGVyKChiKSA9PiBiLmdlbnJlID09PSBnZW5yZSk7XG4gIH1cblxuICByZW1vdmVCb29rKGlkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5ib29rcy5kZWxldGUoaWQpO1xuICB9XG5cbiAgZ2V0QWxsKCk6IEJvb2tbXSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLmJvb2tzLnZhbHVlcygpXTtcbiAgfVxuXG4gIGdldCBzaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuYm9va3Muc2l6ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW52ZW50b3J5IHtcbiAgcHJpdmF0ZSBzdG9jazogTWFwPHN0cmluZywgbnVtYmVyPiA9IG5ldyBNYXAoKTtcblxuICBhZGRTdG9jayhib29rSWQ6IHN0cmluZywgcXVhbnRpdHk6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLnN0b2NrLmdldChib29rSWQpID8/IDA7XG4gICAgdGhpcy5zdG9jay5zZXQoYm9va0lkLCBjdXJyZW50ICsgcXVhbnRpdHkpO1xuICB9XG5cbiAgcmVtb3ZlU3RvY2soYm9va0lkOiBzdHJpbmcsIHF1YW50aXR5OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5zdG9jay5nZXQoYm9va0lkKSA/PyAwO1xuICAgIGlmIChjdXJyZW50IDwgcXVhbnRpdHkpIHJldHVybiBmYWxzZTtcbiAgICB0aGlzLnN0b2NrLnNldChib29rSWQsIGN1cnJlbnQgLSBxdWFudGl0eSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXRTdG9jayhib29rSWQ6IHN0cmluZyk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc3RvY2suZ2V0KGJvb2tJZCkgPz8gMDtcbiAgfVxuXG4gIGlzQXZhaWxhYmxlKGJvb2tJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RvY2soYm9va0lkKSA+IDA7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENoZWNrb3V0IHtcbiAgcHJpdmF0ZSBjYXRhbG9nOiBCb29rQ2F0YWxvZztcbiAgcHJpdmF0ZSBpbnZlbnRvcnk6IEludmVudG9yeTtcblxuICBjb25zdHJ1Y3RvcihjYXRhbG9nOiBCb29rQ2F0YWxvZywgaW52ZW50b3J5OiBJbnZlbnRvcnkpIHtcbiAgICB0aGlzLmNhdGFsb2cgPSBjYXRhbG9nO1xuICAgIHRoaXMuaW52ZW50b3J5ID0gaW52ZW50b3J5O1xuICB9XG5cbiAgcHVyY2hhc2UoXG4gICAgYm9va0lkOiBzdHJpbmcsXG4gICAgcXVhbnRpdHk6IG51bWJlciA9IDFcbiAgKTogeyBzdWNjZXNzOiBib29sZWFuOyB0b3RhbDogbnVtYmVyOyBtZXNzYWdlOiBzdHJpbmcgfSB7XG4gICAgY29uc3QgYm9vayA9IHRoaXMuY2F0YWxvZy5maW5kQm9vayhib29rSWQpO1xuICAgIGlmICghYm9vaykge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIHRvdGFsOiAwLCBtZXNzYWdlOiAnQm9vayBub3QgZm91bmQnIH07XG4gICAgfVxuICAgIGlmICghdGhpcy5pbnZlbnRvcnkucmVtb3ZlU3RvY2soYm9va0lkLCBxdWFudGl0eSkpIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCB0b3RhbDogMCwgbWVzc2FnZTogJ0luc3VmZmljaWVudCBzdG9jaycgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdG90YWw6IGJvb2sucHJpY2UgKiBxdWFudGl0eSwgbWVzc2FnZTogJ1B1cmNoYXNlIHN1Y2Nlc3NmdWwnIH07XG4gIH1cblxuICBhcHBseURpc2NvdW50KHByaWNlOiBudW1iZXIsIGRpc2NvdW50UGVyY2VudDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gcHJpY2UgKiAoMSAtIGRpc2NvdW50UGVyY2VudCAvIDEwMCk7XG4gIH1cblxuICBjYWxjdWxhdGVUb3RhbChpdGVtczogQXJyYXk8eyBib29rSWQ6IHN0cmluZzsgcXVhbnRpdHk6IG51bWJlciB9Pik6IG51bWJlciB7XG4gICAgcmV0dXJuIGl0ZW1zLnJlZHVjZSgodG90YWwsIGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGJvb2sgPSB0aGlzLmNhdGFsb2cuZmluZEJvb2soaXRlbS5ib29rSWQpO1xuICAgICAgcmV0dXJuIHRvdGFsICsgKGJvb2sgPyBib29rLnByaWNlICogaXRlbS5xdWFudGl0eSA6IDApO1xuICAgIH0sIDApO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgbW9kdWxlLCB0ZXN0IH0gZnJvbSAncXVuaXR4JztcbmltcG9ydCB7IEJvb2tDYXRhbG9nIH0gZnJvbSAnLi4vc3JjL2Jvb2tzdG9yZS50cyc7XG5cbm1vZHVsZSgnQm9va0NhdGFsb2cnLCBmdW5jdGlvbiAoKSB7XG4gIHRlc3QoJ2FkZHMgYW5kIHJldHJpZXZlcyBhIGJvb2sgYnkgaWQnLCBmdW5jdGlvbiAoYXNzZXJ0KSB7XG4gICAgY29uc3QgY2F0YWxvZyA9IG5ldyBCb29rQ2F0YWxvZygpO1xuICAgIGNhdGFsb2cuYWRkQm9vayh7IGlkOiAnMScsIHRpdGxlOiAnRHVuZScsIGF1dGhvcjogJ0ZyYW5rIEhlcmJlcnQnLCBwcmljZTogMTQuOTksIGdlbnJlOiAnU2NpLUZpJyB9KTtcblxuICAgIGNvbnN0IGJvb2sgPSBjYXRhbG9nLmZpbmRCb29rKCcxJyk7XG4gICAgYXNzZXJ0LmVxdWFsKGJvb2s/LnRpdGxlLCAnRHVuZScpO1xuICAgIGFzc2VydC5lcXVhbChib29rPy5hdXRob3IsICdGcmFuayBIZXJiZXJ0Jyk7XG4gIH0pO1xuXG4gIHRlc3QoJ3JldHVybnMgdW5kZWZpbmVkIGZvciBhIG1pc3NpbmcgYm9vaycsIGZ1bmN0aW9uIChhc3NlcnQpIHtcbiAgICBjb25zdCBjYXRhbG9nID0gbmV3IEJvb2tDYXRhbG9nKCk7XG4gICAgYXNzZXJ0LmVxdWFsKGNhdGFsb2cuZmluZEJvb2soJ25vbmV4aXN0ZW50JyksIHVuZGVmaW5lZCk7XG4gIH0pO1xuXG4gIHRlc3QoJ2ZpbmRzIGFsbCBib29rcyBieSBhIGdpdmVuIGF1dGhvcicsIGZ1bmN0aW9uIChhc3NlcnQpIHtcbiAgICBjb25zdCBjYXRhbG9nID0gbmV3IEJvb2tDYXRhbG9nKCk7XG4gICAgY2F0YWxvZy5hZGRCb29rKHsgaWQ6ICcxJywgdGl0bGU6ICdEdW5lJywgYXV0aG9yOiAnRnJhbmsgSGVyYmVydCcsIHByaWNlOiAxNC45OSwgZ2VucmU6ICdTY2ktRmknIH0pO1xuICAgIGNhdGFsb2cuYWRkQm9vayh7IGlkOiAnMicsIHRpdGxlOiAnRHVuZSBNZXNzaWFoJywgYXV0aG9yOiAnRnJhbmsgSGVyYmVydCcsIHByaWNlOiAxMi45OSwgZ2VucmU6ICdTY2ktRmknIH0pO1xuICAgIGNhdGFsb2cuYWRkQm9vayh7IGlkOiAnMycsIHRpdGxlOiAnMTk4NCcsIGF1dGhvcjogJ0dlb3JnZSBPcndlbGwnLCBwcmljZTogOS45OSwgZ2VucmU6ICdEeXN0b3BpYScgfSk7XG5cbiAgICBjb25zdCByZXN1bHRzID0gY2F0YWxvZy5maW5kQnlBdXRob3IoJ0ZyYW5rIEhlcmJlcnQnKTtcbiAgICBhc3NlcnQuZXF1YWwocmVzdWx0cy5sZW5ndGgsIDIpO1xuICAgIGFzc2VydC5vayhyZXN1bHRzLmV2ZXJ5KChiKSA9PiBiLmF1dGhvciA9PT0gJ0ZyYW5rIEhlcmJlcnQnKSk7XG4gIH0pO1xuXG4gIHRlc3QoJ3JlbW92ZXMgYSBib29rIGZyb20gdGhlIGNhdGFsb2cnLCBmdW5jdGlvbiAoYXNzZXJ0KSB7XG4gICAgY29uc3QgY2F0YWxvZyA9IG5ldyBCb29rQ2F0YWxvZygpO1xuICAgIGNhdGFsb2cuYWRkQm9vayh7IGlkOiAnMScsIHRpdGxlOiAnRHVuZScsIGF1dGhvcjogJ0ZyYW5rIEhlcmJlcnQnLCBwcmljZTogMTQuOTksIGdlbnJlOiAnU2NpLUZpJyB9KTtcbiAgICBhc3NlcnQuZXF1YWwoY2F0YWxvZy5zaXplLCAxKTtcblxuICAgIGNvbnN0IHJlbW92ZWQgPSBjYXRhbG9nLnJlbW92ZUJvb2soJzEnKTtcbiAgICBhc3NlcnQub2socmVtb3ZlZCk7XG4gICAgYXNzZXJ0LmVxdWFsKGNhdGFsb2cuc2l6ZSwgMCk7XG4gICAgYXNzZXJ0LmVxdWFsKGNhdGFsb2cuZmluZEJvb2soJzEnKSwgdW5kZWZpbmVkKTtcbiAgfSk7XG59KTtcbiIsICJpbXBvcnQgeyBtb2R1bGUsIHRlc3QgfSBmcm9tICdxdW5pdHgnO1xuaW1wb3J0IHsgSW52ZW50b3J5IH0gZnJvbSAnLi4vc3JjL2Jvb2tzdG9yZS50cyc7XG5cbm1vZHVsZSgnSW52ZW50b3J5JywgZnVuY3Rpb24gKCkge1xuICB0ZXN0KCd0cmFja3Mgc3RvY2sgY29ycmVjdGx5IGFmdGVyIGFkZGluZycsIGZ1bmN0aW9uIChhc3NlcnQpIHtcbiAgICBjb25zdCBpbnZlbnRvcnkgPSBuZXcgSW52ZW50b3J5KCk7XG4gICAgaW52ZW50b3J5LmFkZFN0b2NrKCdib29rLTEnLCA1KTtcbiAgICBpbnZlbnRvcnkuYWRkU3RvY2soJ2Jvb2stMScsIDMpO1xuXG4gICAgYXNzZXJ0LmVxdWFsKGludmVudG9yeS5nZXRTdG9jaygnYm9vay0xJyksIDgpO1xuICB9KTtcblxuICB0ZXN0KCdpc0F2YWlsYWJsZSByZWZsZWN0cyBzdG9jayBsZXZlbHMnLCBmdW5jdGlvbiAoYXNzZXJ0KSB7XG4gICAgY29uc3QgaW52ZW50b3J5ID0gbmV3IEludmVudG9yeSgpO1xuXG4gICAgYXNzZXJ0Lm5vdE9rKGludmVudG9yeS5pc0F2YWlsYWJsZSgnYm9vay0yJyksICd1bmF2YWlsYWJsZSB3aGVuIG5vIHN0b2NrJyk7XG4gICAgaW52ZW50b3J5LmFkZFN0b2NrKCdib29rLTInLCAxKTtcbiAgICBhc3NlcnQub2soaW52ZW50b3J5LmlzQXZhaWxhYmxlKCdib29rLTInKSwgJ2F2YWlsYWJsZSB3aGVuIHN0b2NrIGV4aXN0cycpO1xuICB9KTtcblxuICB0ZXN0KCdyZW1vdmVTdG9jayBwcmV2ZW50cyBnb2luZyBiZWxvdyB6ZXJvJywgZnVuY3Rpb24gKGFzc2VydCkge1xuICAgIGNvbnN0IGludmVudG9yeSA9IG5ldyBJbnZlbnRvcnkoKTtcbiAgICBpbnZlbnRvcnkuYWRkU3RvY2soJ2Jvb2stMycsIDIpO1xuXG4gICAgY29uc3Qgc3VjY2VzcyA9IGludmVudG9yeS5yZW1vdmVTdG9jaygnYm9vay0zJywgNSk7XG4gICAgYXNzZXJ0Lm5vdE9rKHN1Y2Nlc3MsICdyZXR1cm5zIGZhbHNlIHdoZW4gc3RvY2sgaXMgaW5zdWZmaWNpZW50Jyk7XG4gICAgYXNzZXJ0LmVxdWFsKGludmVudG9yeS5nZXRTdG9jaygnYm9vay0zJyksIDIsICdzdG9jayB1bmNoYW5nZWQgYWZ0ZXIgZmFpbGVkIHJlbW92YWwnKTtcbiAgfSk7XG59KTtcbiIsICJpbXBvcnQgeyBtb2R1bGUsIHRlc3QgfSBmcm9tICdxdW5pdHgnO1xuaW1wb3J0IHsgQm9va0NhdGFsb2csIEludmVudG9yeSwgQ2hlY2tvdXQgfSBmcm9tICcuLi9zcmMvYm9va3N0b3JlLnRzJztcblxuZnVuY3Rpb24gc2V0dXAoKSB7XG4gIGNvbnN0IGNhdGFsb2cgPSBuZXcgQm9va0NhdGFsb2coKTtcbiAgY29uc3QgaW52ZW50b3J5ID0gbmV3IEludmVudG9yeSgpO1xuICBjb25zdCBjaGVja291dCA9IG5ldyBDaGVja291dChjYXRhbG9nLCBpbnZlbnRvcnkpO1xuXG4gIGNhdGFsb2cuYWRkQm9vayh7IGlkOiAnYjEnLCB0aXRsZTogJ1RoZSBIb2JiaXQnLCBhdXRob3I6ICdKLlIuUi4gVG9sa2llbicsIHByaWNlOiAxMS45OSwgZ2VucmU6ICdGYW50YXN5JyB9KTtcbiAgY2F0YWxvZy5hZGRCb29rKHsgaWQ6ICdiMicsIHRpdGxlOiAnRm91bmRhdGlvbicsIGF1dGhvcjogJ0lzYWFjIEFzaW1vdicsIHByaWNlOiAxMy40OSwgZ2VucmU6ICdTY2ktRmknIH0pO1xuICBpbnZlbnRvcnkuYWRkU3RvY2soJ2IxJywgMTApO1xuICBpbnZlbnRvcnkuYWRkU3RvY2soJ2IyJywgMyk7XG5cbiAgcmV0dXJuIHsgY2F0YWxvZywgaW52ZW50b3J5LCBjaGVja291dCB9O1xufVxuXG5tb2R1bGUoJ0NoZWNrb3V0JywgZnVuY3Rpb24gKCkge1xuICB0ZXN0KCdwdXJjaGFzZSBzdWNjZWVkcyB3aGVuIGJvb2sgaXMgaW4gc3RvY2snLCBmdW5jdGlvbiAoYXNzZXJ0KSB7XG4gICAgY29uc3QgeyBjaGVja291dCwgaW52ZW50b3J5IH0gPSBzZXR1cCgpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gY2hlY2tvdXQucHVyY2hhc2UoJ2IxJywgMik7XG4gICAgYXNzZXJ0Lm9rKHJlc3VsdC5zdWNjZXNzKTtcbiAgICBhc3NlcnQuZXF1YWwocmVzdWx0LnRvdGFsLCAyMy45OCk7XG4gICAgYXNzZXJ0LmVxdWFsKHJlc3VsdC5tZXNzYWdlLCAnUHVyY2hhc2Ugc3VjY2Vzc2Z1bCcpO1xuICAgIGFzc2VydC5lcXVhbChpbnZlbnRvcnkuZ2V0U3RvY2soJ2IxJyksIDgsICdzdG9jayBkZWNyZW1lbnRlZCBhZnRlciBwdXJjaGFzZScpO1xuICB9KTtcblxuICB0ZXN0KCdwdXJjaGFzZSBmYWlscyB3aGVuIGJvb2sgZG9lcyBub3QgZXhpc3QnLCBmdW5jdGlvbiAoYXNzZXJ0KSB7XG4gICAgY29uc3QgeyBjaGVja291dCB9ID0gc2V0dXAoKTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGNoZWNrb3V0LnB1cmNoYXNlKCd1bmtub3duLWlkJyk7XG4gICAgYXNzZXJ0Lm5vdE9rKHJlc3VsdC5zdWNjZXNzKTtcbiAgICBhc3NlcnQuZXF1YWwocmVzdWx0Lm1lc3NhZ2UsICdCb29rIG5vdCBmb3VuZCcpO1xuICB9KTtcblxuICB0ZXN0KCdjYWxjdWxhdGVUb3RhbCBzdW1zIHByaWNlcyBmb3IgbXVsdGlwbGUgaXRlbXMgY29ycmVjdGx5JywgZnVuY3Rpb24gKGFzc2VydCkge1xuICAgIGNvbnN0IHsgY2hlY2tvdXQgfSA9IHNldHVwKCk7XG5cbiAgICBjb25zdCB0b3RhbCA9IGNoZWNrb3V0LmNhbGN1bGF0ZVRvdGFsKFtcbiAgICAgIHsgYm9va0lkOiAnYjEnLCBxdWFudGl0eTogMiB9LFxuICAgICAgeyBib29rSWQ6ICdiMicsIHF1YW50aXR5OiAxIH0sXG4gICAgXSk7XG5cbiAgICAvLyBJbnRlbnRpb25hbCBmYWlsaW5nIGFzc2VydGlvbjogYWN0dWFsIHRvdGFsIGlzIDExLjk5KjIgKyAxMy40OSA9IDM3LjQ3XG4gICAgLy8gYnV0IHdlIGFzc2VydCA0MC4wMCB0byBkZW1vbnN0cmF0ZSBhIGZhaWxpbmcgdGVzdCBjYXNlXG4gICAgYXNzZXJ0LmVxdWFsKHRvdGFsLCAzNy40NywgJ2V4cGVjdGVkIHdyb25nIHRvdGFsIHRvIHNob3cgYSBmYWlsaW5nIHRlc3QnKTtcbiAgfSk7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUEsbURBQUFBLFNBQUE7QUFRQSxPQUFDLFdBQVk7QUFDWDtBQUVBLGlCQUFTLGtCQUFrQixHQUFHLEdBQUc7QUFDL0IsV0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFLFlBQVksSUFBSSxFQUFFO0FBQ3RDLG1CQUFTLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFLLEdBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNwRCxpQkFBTztBQUFBLFFBQ1Q7QUFKUztBQUtULGlCQUFTLGdCQUFnQixHQUFHO0FBQzFCLGNBQUksTUFBTSxRQUFRLENBQUMsRUFBRyxRQUFPO0FBQUEsUUFDL0I7QUFGUztBQUdULGlCQUFTLG1CQUFtQixHQUFHO0FBQzdCLGNBQUksTUFBTSxRQUFRLENBQUMsRUFBRyxRQUFPLGtCQUFrQixDQUFDO0FBQUEsUUFDbEQ7QUFGUztBQUdULGlCQUFTLGdCQUFnQixHQUFHLEdBQUc7QUFDN0IsY0FBSSxFQUFFLGFBQWEsR0FBSSxPQUFNLElBQUksVUFBVSxtQ0FBbUM7QUFBQSxRQUNoRjtBQUZTO0FBR1QsaUJBQVMsa0JBQWtCLEdBQUcsR0FBRztBQUMvQixtQkFBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsS0FBSztBQUNqQyxnQkFBSSxJQUFJLEVBQUUsQ0FB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QUM7QUFJRCxNQUFBQSxRQUFPLE1BQU0sT0FBTyxPQUFPLDZDQUE2QztBQUFBLElBQzFFLENBQUM7QUFBQSxFQUNILENBQUM7IiwKICAibmFtZXMiOiBbIm1vZHVsZSIsICJyIiwgIm8iLCAiU3RyaW5nTWFwIiwgImhhc093biIsICJhIiwgImlzIiwgImV4dGVuZCIsICJvYmplY3RUeXBlIiwgImVxdWl2IiwgImNvbmZpZyIsICJkdW1wIiwgInN0YWNrIiwgIlN1aXRlUmVwb3J0IiwgInN0YXJ0IiwgInRlc3QiLCAiY291bnRzIiwgInRvZG8iLCAic2tpcCIsICJob29rcyIsICJBc3NlcnQiLCAiYXNzZXJ0IiwgImRvbmUiLCAib24iLCAicmVzb2x2ZSIsICJyZWplY3QiLCAiaSIsICJ2YWwiLCAiUHJvbWlzZSIsICJzZWxmIiwgImtleSIsICJUZXN0UmVwb3J0IiwgInJ1biIsICJwdXNoRmFpbHVyZSIsICJydW5Ib29rIiwgImNhbGxIb29rIiwgInNlbGVjdGVkTW9kdWxlIiwgIm9ubHkiLCAiUVVuaXQiLCAiQ29uc29sZVJlcG9ydGVyIiwgIm9uRXJyb3IiLCAiaW5pdCIsICJQZXJmUmVwb3J0ZXIiLCAiVGFwUmVwb3J0ZXIiLCAiUHJvY2Vzc2luZ1F1ZXVlIiwgImxvbmd0ZXh0IiwgInNob3J0dGV4dCIsICJkaWZmIiwgIm9uVW5oYW5kbGVkUmVqZWN0aW9uIiwgImxvYWQiLCAiYmVnaW4iLCAidXJsUGFyYW1zIiwgImZ1enp5c29ydCIsICJxIiwgImZhc3Rwcmlvcml0eXF1ZXVlIiwgImUiLCAibiIsICJzdGF0cyIsICJmaWxlTmFtZSIsICJRVW5pdCIsICJhc3NlcnQiLCAiYXNzZXJ0IiwgImFzc2VydCJdCn0K
