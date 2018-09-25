module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeContainer", function() { return HomeContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return Canvas; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);

var HomeContainer = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: "style__HomeContainer",
  componentId: "s5q7lve-0"
})(["width:100%;height:100%;h1{margin-right:-8px;font-size:150px;line-height:0.77em;text-transform:uppercase;background:#5fe4e2;background:-moz-linear-gradient(8deg,#5fe4e2 0%,#5fe4e2 30%,#e45fc0 80%,#e45fc0 100%);background:-webkit-linear-gradient(8deg,#5fe4e2 0%,#5fe4e2 30%,#e45fc0 80%,#e45fc0 100%);background:linear-gradient(8deg,#5fe4e2 0%,#5fe4e2 30%,#e45fc0 80%,#e45fc0 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#5fe4e2',endColorstr='#e45fc0',GradientType=1 );-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;@keyframes gradientLoop{0%{background-position:100% 0%}100%{background-position:25% 100%}}}h2{margin-right:-3px;font-size:50px;white-space:nowrap;line-height:0.9em;text-transform:uppercase;color:#fff;}h3{font-size:30px;line-height:0.9em;text-transform:uppercase;color:#fff;}.intro{text-align:right;position:absolute;top:50%;right:4%;margin-top:-88px;z-index:1;h1,h2,h3{opacity:0;}small{font-weight:inherit;}}}"]);
var Canvas = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.canvas.withConfig({
  displayName: "style__Canvas",
  componentId: "s5q7lve-1"
})(["position:absolute;bottom:0;left:0;"]);

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

module.exports = require("gsap");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Particle = function Particle(canvas, ctx, ctx2, color) {
  var _this = this;

  _classCallCheck(this, Particle);

  this.pos = {
    x: Math.random() * canvas.width * 0.8 + canvas.width * 0.1,
    y: Math.random() * canvas.height * 0.8 + canvas.height * 0.1
  };
  this.r = 1;
  this.speed = 0.1;
  this.step = Math.random() * 400;
  this.vx = Math.random() * this.speed / 4 - this.speed / 8;
  this.vy = Math.random() * this.speed / 4 - this.speed / 8; // this.colIndex = Math.floor(Math.random() * cols.length)

  this.alpha = Math.random() * 1;
  this.alphaStep = Math.random() * 0.02;
  this.alphaType = 'fadein';
  this.history = [];
  this.historyMaxLen = 5;
  this.windowOffset = 50;

  this.update = function () {
    /// ///////////////////////////////////
    _this.step++;
    _this.step %= 400;

    if (_this.history.length > _this.historyMaxLen) {
      _this.history.shift();
    }

    _this.pos.x += _this.vx;
    _this.pos.y += _this.vy;
    _this.vx = _this.vx * 0.98 + (Math.random() * _this.speed * 2 - _this.speed);
    _this.vy = _this.vy * 0.98 + (Math.random() * _this.speed * 2 - _this.speed); // var dx = mouse.x - this.pos.x
    // var dy = mouse.y - this.pos.y
    // if(this.step > 365) {
    // mouse
    // this.vx = this.vx * 0.9 + dx * 0.004
    // this.vy = this.vy * 0.9 + dy * 0.004
    // this.vx = Math.min(this.vx,  4.0)
    // this.vx = Math.max(this.vx, -4.0)
    // this.vy = Math.min(this.vy,  4.0)
    // this.vy = Math.max(this.vy, -4.0)
    // center
    // this.vx = this.vx * 0.9 + (canvas.width/2 - this.pos.x ) * 0.002
    // this.vy = this.vy * 0.9 + (canvas.height/2 - this.pos.y ) * 0.002
    // }
    // if(this.step > 100 && this.step < 110) {
    // mouse
    // var d = dx * dx + dy * dy
    // if (d < (canvas.height/8 * canvas.height/8)){
    //   this.vx = this.vx * 0.9 - (mouse.x - this.pos.x ) * 0.002
    //   this.vy = this.vy * 0.9 - (mouse.y - this.pos.y ) * 0.002
    // }
    // center
    // this.vx = this.vx * 0.9 + (canvas.width/2 - this.pos.x ) * 0.002
    // this.vy = this.vy * 0.9 + (canvas.height/2 - this.pos.y ) * 0.002
    // }

    if (_this.alpha >= 1) {
      _this.alphaType = 'fadeout';
    } else if (_this.alpha <= 0) {
      _this.alphaType = 'fadein';
    }

    if (_this.alphaType === 'fadeout') {
      _this.alpha = Math.max(_this.alpha -= _this.alphaStep, 0);
    } else if (_this.alphaType === 'fadein') {
      _this.alpha = Math.min(_this.alpha += _this.alphaStep, 1);
    } /// ///////////////////////////////////


    if (_this.history.length > _this.historyMaxLen - 1) {
      ctx.beginPath();
      ctx.moveTo(_this.pos.x, _this.pos.y);

      for (var i = _this.history.length - 1; i >= 0; i--) {
        ctx.lineTo(_this.history[i].x, _this.history[i].y);
      } // ctx.fillStyle = `hsla(${Math.sin( this.step / 300) * 70 + 70},${99}%,${50}%,1)`
      // ctx.strokeStyle = `hsla(${Math.sin( this.step / 300) * 70 + 70},${99}%,${50}%,0.5)`
      // ctx.fillStyle = cols[this.colIndex]
      // ctx.strokeStyle = cols[this.colIndex]


      ctx.fillStyle = 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + _this.alpha + ')';
      ctx.strokeStyle = 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + _this.alpha + ')';
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.lineJoin = 'round'; // ctx.closePath()

      ctx.stroke(); // orb

      ctx2.beginPath(); // ctx2.fillStyle = `rgba(250,250,250,0.05)`
      // ctx2.fillStyle = cols[this.colIndex]

      ctx2.fillStyle = 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + _this.alpha + ')';
      ctx2.arc(_this.history[_this.historyMaxLen - 1].x, _this.history[_this.historyMaxLen - 1].y, 8 * _this.alpha, 0, 2 * Math.PI);
      ctx2.shadowColor = 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + _this.alpha + ')';
      ctx2.shadowBlur = 10;
      ctx2.shadowOffsetX = 0;
      ctx2.shadowOffsetY = 0;
      ctx2.fill();
    } /// ///////////////////////////////////


    if (_this.pos.x > canvas.width + _this.windowOffset || _this.pos.x < -_this.windowOffset || _this.pos.y > canvas.height + _this.windowOffset || _this.pos.y < -_this.windowOffset) {
      delete _this.pos;
      delete _this.history;
      _this.alpha = 0;
      _this.alphaType = 'fadein';
      return false;
    }

    _this.history.push({
      x: _this.pos.x,
      y: _this.pos.y
    });

    return true;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Particle);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var i18n = __webpack_require__(10);

var XHR = __webpack_require__(11);

var LanguageDetector = __webpack_require__(12);

var lang = ['en', 'de'];
var options = {
  fallbackLng: lang[0],
  preload: lang,
  // preload all langages
  load: 'languageOnly',
  // we only provide en, de -> no region specific locals like en-US, de-DE
  // have a common namespace used around the full app
  ns: ['common'],
  defaultNS: 'common',
  debug: false,
  // process.env.NODE_ENV !== 'production',
  saveMissing: true,
  interpolation: {
    escapeValue: false,
    // not needed for react!!
    formatSeparator: ',',
    format: function format(value, _format, lng) {
      if (_format === 'uppercase') return value.toUpperCase();
      return value;
    }
  },
  detection: {
    order: ['path', 'querystring', 'session', 'cookie', 'header'],
    lookupQuerystring: 'lng',
    lookupCookie: 'i18n',
    lookupSession: 'lng',
    lookupPath: 'lng',
    lookupFromPathIndex: 0,
    caches: false
  } // for browser use xhr backend to load translations and browser lng detector

};

if (process.browser) {
  i18n.use(XHR) // .use(Cache)
  .use(LanguageDetector);
} // initialize if not already initialized


if (!i18n.isInitialized) i18n.init(options); // a simple helper to getInitialProps passed on loaded i18n data

i18n.getInitialProps = function (req, namespaces) {
  if (!namespaces) namespaces = i18n.options.defaultNS;
  if (typeof namespaces === 'string') namespaces = [namespaces];

  req.i18n.toJSON = function () {
    return null;
  }; // do not serialize i18next instance and send to client


  var initialI18nStore = {};
  req.i18n.languages.forEach(function (l) {
    initialI18nStore[l] = {};
    namespaces.forEach(function (ns) {
      initialI18nStore[l][ns] = (req.i18n.services.resourceStore.data[l] || {})[ns] || {};
    });
  });
  return {
    i18n: req.i18n,
    // use the instance on req - fixed language on request (avoid issues in race conditions with lngs of different users)
    initialI18nStore: initialI18nStore,
    initialLanguage: req.i18n.language
  };
};

module.exports = i18n;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("i18next");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("i18next-xhr-backend");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("i18next-browser-languagedetector");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withI18next; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_i18next__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_i18next___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_i18next__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__i18n__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__i18n___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__i18n__);


function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _next(value) {
        step("next", value);
      }

      function _throw(err) {
        step("throw", err);
      }

      _next();
    });
  };
}



var withI18next = function withI18next() {
  var namespaces = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['common'];
  return function (ComposedComponent) {
    var Extended = Object(__WEBPACK_IMPORTED_MODULE_1_react_i18next__["translate"])(namespaces, {
      wait: process.browser
    })(ComposedComponent);

    Extended.getInitialProps =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
        var composedInitialProps, i18nInitialProps;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!ComposedComponent.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 3;
                return ComposedComponent.getInitialProps(ctx);

              case 3:
                _context.t0 = _context.sent;
                _context.next = 7;
                break;

              case 6:
                _context.t0 = {};

              case 7:
                composedInitialProps = _context.t0;
                i18nInitialProps = ctx.req ? __WEBPACK_IMPORTED_MODULE_2__i18n___default.a.getInitialProps(ctx.req, namespaces) : {};
                return _context.abrupt("return", _objectSpread({}, composedInitialProps, i18nInitialProps));

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    return Extended;
  };
};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Particle__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_js__ = __webpack_require__(4);
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}





var Fireflies =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Fireflies, _React$Component);

  function Fireflies(props) {
    var _this;

    _classCallCheck(this, Fireflies);

    _this = _possibleConstructorReturn(this, (Fireflies.__proto__ || Object.getPrototypeOf(Fireflies)).call(this, props));
    _this.init = _this.init.bind(_assertThisInitialized(_this));
    _this.animate = _this.animate.bind(_assertThisInitialized(_this));
    _this.setup = _this.setup.bind(_assertThisInitialized(_this));
    _this.fade = _this.fade.bind(_assertThisInitialized(_this));
    _this.draw = _this.draw.bind(_assertThisInitialized(_this));
    _this.hexToRgb = _this.hexToRgb.bind(_assertThisInitialized(_this));
    _this.numParticles = 20;
    _this.bg = [26, 29, 36]; // this.cols = ['#FF9800']
    // this.cols = ['#5fe4e2']

    _this.cols = _this.hexToRgb('#5fe4e2');
    return _this;
  }

  _createClass(Fireflies, [{
    key: "init",
    value: function init() {
      window.requestAnimFrame = function (callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
          window.setTimeout(callback, 1000 / 60);
        };
      }();

      this.canvas = document.getElementById('canvas');
      this.canvas2 = document.getElementById('canvas2'); // this.canvas = document.createElement('canvas');
      // this.canvas2 = document.createElement('canvas')
      // document.getElementsByTagName('body')[0].appendChild(this.canvas)
      // document.getElementsByTagName('body')[0].appendChild(this.canvas2)

      this.ctx = this.canvas.getContext('2d');
      this.ctx2 = this.canvas2.getContext('2d');
      this.setup();
      window.addEventListener('resize', this.setup);
      this.particles = [new __WEBPACK_IMPORTED_MODULE_1__Particle__["default"](this.canvas, this.ctx, this.ctx2, this.cols)];
      this.animate(); // setInterval(animate, 1000/29.9)
    }
  }, {
    key: "animate",
    value: function animate() {
      this.fade(0.6);
      this.draw();
      window.requestAnimFrame(this.animate);
    }
  }, {
    key: "setup",
    value: function setup() {
      this.canvas.width = this.canvas2.width = window.innerWidth;
      this.canvas.height = this.canvas2.height = window.innerHeight;
      this.ctx.beginPath();
      this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = "rgba(".concat(this.bg[0], ", ").concat(this.bg[1], ", ").concat(this.bg[2], ", ", 1, ")");
      this.ctx.fill();
    }
  }, {
    key: "fade",
    value: function fade(amt) {
      this.ctx.beginPath();
      this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = "rgba(".concat(this.bg[0], ", ").concat(this.bg[1], ", ").concat(this.bg[2], ", ").concat(amt, ")");
      this.ctx.fill();
    }
  }, {
    key: "draw",
    value: function draw() {
      if (this.particles.length < this.numParticles) {
        this.particles.push(new __WEBPACK_IMPORTED_MODULE_1__Particle__["default"](this.canvas, this.ctx, this.ctx2, this.cols));
      }

      this.ctx2.clearRect(0, 0, this.canvas.width, this.canvas.height); // ctx2.shadowBlur = 1;
      // ctx2.shadowColor = '#000';

      this.ctx2.globalAlpha = 0.1;
      this.particles = this.particles.filter(function (p) {
        return p.update();
      });
    }
  }, {
    key: "hexToRgb",
    value: function hexToRgb(hex) {
      // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
      });
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__style_js__["Canvas"], {
        id: "canvas"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__style_js__["Canvas"], {
        id: "canvas2"
      }));
    }
  }]);

  return Fireflies;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Fireflies);

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gsap__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_gsap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_withI18next__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Fireflies__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_js__ = __webpack_require__(4);
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}








var Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      __WEBPACK_IMPORTED_MODULE_2_gsap__["TweenMax"].set('.intro h1, .intro h2, .intro h3', {
        x: 20,
        rotationY: 5,
        scale: 0.85,
        autoAlpha: 0,
        transformPerspective: 200,
        transformOrigin: '40% 50%'
      });
      __WEBPACK_IMPORTED_MODULE_2_gsap__["TweenMax"].staggerTo('.intro h1, .intro h2, .intro h3', 1, {
        x: 0,
        rotationY: 0,
        scale: 1,
        autoAlpha: 1,
        ease: __WEBPACK_IMPORTED_MODULE_2_gsap__["Power2"].easeOut,
        delay: 1
      }, 0.2);
    }
  }, {
    key: "render",
    value: function render() {
      var t = this.props.t;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__style_js__["HomeContainer"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Fireflies__["default"], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "intro"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "font-raleway"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", null, t('welcome'))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "font-ralewayBold"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", null, "My name is D", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("small", null, "arren"), " C", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("small", null, "han"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "font-ralewayBold"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", null, "A Front-End Web Developer"))));
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_3__lib_withI18next__["a" /* withI18next */])(['home', 'common'])(Home));

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ })
/******/ ]);