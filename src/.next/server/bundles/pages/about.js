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
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutContainer", function() { return AboutContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);

var AboutContainer = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: "style__AboutContainer",
  componentId: "s1ufwzq3-0"
})(["min-height:100%;background-color:#1a1d24;h2{text-transform:uppercase;color:#fff;}h3{color:#fff;}.intro{text-align:justify;}.technicalSkills{.progress{position:relative;height:1px;background-color:rgba(255,255,255,0.3);overflow:visible;.progress-bar{width:0;transition:0.5s;box-shadow:0 0 10px 1px rgba(95,228,226,0.15);background:#5fe4e2;background:-moz-linear-gradient(8deg,#5fe4e2 0%,#5fe4e2 30%,#e45fc0 80%,#e45fc0 100%);background:-webkit-linear-gradient(8deg,#5fe4e2 0%,#5fe4e2 30%,#e45fc0 80%,#e45fc0 100%);background:linear-gradient(8deg,#5fe4e2 0%,#5fe4e2 30%,#e45fc0 80%,#e45fc0 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#5fe4e2',endColorstr='#e45fc0',GradientType=1 );&:hover{}span{position:absolute;bottom:3px;right:0;color:#5b5b5b;}}}}.experience{ul{li{border-top:1px solid rgba(255,255,255,0.3);;&:first-child{border-top:0;}&:last-child{border-bottom:0;}&.current{p{opacity:1;}}p{opacity:0.4;}.highlight{animation:glow 1s forwards infinite;text-shadow:0 0 0 rgba(95,228,226,1);@keyframes glow{0%{text-shadow:0 0 0px rgba(95,228,226,1);}50%{text-shadow:0 0 10px rgba(95,228,226,1);}100%{text-shadow:0 0 0px rgba(95,228,226,1);}}}}}}"]);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(40);


/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_gsap__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_gsap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_js__ = __webpack_require__(16);
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

 // import PropTypes from 'prop-types'





var About =
/*#__PURE__*/
function (_React$Component) {
  _inherits(About, _React$Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
  }

  _createClass(About, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      this.list = document.querySelectorAll('.progress-bar');
      this.arrList = [].slice.call(this.list);
      this.startParcent = {};
      this.parcent = [];

      for (var i = 0; i < this.arrList.length; i++) {
        this.startParcent[i] = {
          value: 0
        };
        this.parcent[i] = this.arrList[i].getAttribute('aria-valuenow');
      }

      __WEBPACK_IMPORTED_MODULE_3_gsap__["TweenMax"].set(this.arrList, {
        width: 0
      });
      setTimeout(function () {
        __WEBPACK_IMPORTED_MODULE_3_gsap__["TweenMax"].staggerTo(_this.arrList, 0.3, {
          cycle: {
            width: function width(i) {
              var w = _this.arrList[i].getAttribute('aria-valuenow') + '%';
              return w;
            }
          },
          ease: __WEBPACK_IMPORTED_MODULE_3_gsap__["Power4"].easeOut
        }, 0.1);

        var _loop = function _loop(_i) {
          __WEBPACK_IMPORTED_MODULE_3_gsap__["TweenMax"].to(_this.startParcent[_i], 0.3, {
            value: _this.parcent[_i],
            onUpdate: function onUpdate() {
              _this.arrList[_i].innerHTML = "<span className='font-muli'><small><strong>" + Math.floor(_this.startParcent[_i].value) + '%</strong></small></span>';
            },
            ease: 'linear',
            delay: _i * 0.15
          });
        };

        for (var _i = 0; _i < _this.arrList.length; _i++) {
          _loop(_i);
        }
      }, 800);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__style_js__["AboutContainer"], null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row pb-5"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-12 col-md-12"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        className: "pt-3 pt-sm-5 title font-nixieone"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", null, "About Me")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "intro"
      }, "My name is Darren Chan, a Front-End Developer, has worked for over 7 years in web development. I\u2019m an open-mind fast learner. I could pick up a latest technology in a short time. I am a proficient in Frontend technologies with compatible cross browsers and different platforms. I has better to resolving problem for various projects with my web knowledge.", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", null), "My job duty is using a html, jquery and css to development a Campaign site and corporate site. I interesting in web development and develop some interactive website to the end user."))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row pb-5"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "technicalSkills col-12",
        ref: function ref(e) {
          _this2.skills = e;
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        className: "mb-2 title font-nixieone"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", null, "Technical Skills")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-12 col-md-5"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "mb-0 label font-muli"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("small", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", null, "HTML / HTML5"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "progress mb-4"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "progress-bar rounded",
        role: "progressbar",
        style: {
          'width': '0%'
        },
        "aria-valuenow": "90",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        className: "font-muli"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("small", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", null, "0%")))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-12 col-md-5 offset-md-1"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "mb-0 label font-muli"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("small", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", null, "CSS / CSS3"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "progress mb-4"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "progress-bar rounded",
        role: "progressbar",
        style: {
          'width': '0%'
        },
        "aria-valuenow": "90",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        className: "font-muli"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("small", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", null, "0%"))))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-12 col-md-5"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "mb-0 label font-muli"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("small", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", null, "Javascript / jQuery"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "progress mb-4"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "progress-bar rounded",
        role: "progressbar",
        style: {
          'width': '0%'
        },
        "aria-valuenow": "80",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        className: "font-muli"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("small", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", null, "0%")))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-12 col-md-5 offset-md-1"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "mb-0 label font-muli"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("small", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", null, "Ajax"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "progress mb-4"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "progress-bar rounded",
        role: "progressbar",
        style: {
          'width': '0%'
        },
        "aria-valuenow": "70",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        className: "font-muli"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("small", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", null, "0%"))))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-12 col-md-5"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "mb-0 label font-muli"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("small", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", null, "Bootstrap"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "progress mb-4"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "progress-bar rounded",
        role: "progressbar",
        style: {
          'width': '0%'
        },
        "aria-valuenow": "30",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        className: "font-muli"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("small", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", null, "0%")))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-12 col-md-5 offset-md-1"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "mb-0 label font-muli"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("small", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", null, "TweenMax"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "progress mb-4"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "progress-bar rounded",
        role: "progressbar",
        style: {
          'width': '0%'
        },
        "aria-valuenow": "60",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        className: "font-muli"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("small", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", null, "0%"))))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-12 col-md-5"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "mb-0 label font-muli"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("small", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", null, "ReactJS"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "progress mb-4"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "progress-bar rounded",
        role: "progressbar",
        style: {
          'width': '0%'
        },
        "aria-valuenow": "40",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        className: "font-muli"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("small", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", null, "0%")))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-12 col-md-5 offset-md-1"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "mb-0 label font-muli"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("small", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", null, "AngularJS"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "progress mb-4"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "progress-bar rounded",
        role: "progressbar",
        style: {
          'width': '0%'
        },
        "aria-valuenow": "10",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        className: "font-muli"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("small", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", null, "0%"))))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-12 col-md-5"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "mb-0 label font-muli"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("small", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", null, "Gulp"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "progress mb-4"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "progress-bar rounded",
        role: "progressbar",
        style: {
          'width': '0%'
        },
        "aria-valuenow": "40",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        className: "font-muli"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("small", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", null, "0%")))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-12 col-md-5 offset-md-1"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "mb-0 label font-muli"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("small", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", null, "Photoshop"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "progress mb-4"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "progress-bar rounded",
        role: "progressbar",
        style: {
          'width': '0%'
        },
        "aria-valuenow": "50",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        className: "font-muli"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("small", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", null, "0%"))))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-12 col-md-5"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "mb-0 label font-muli"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("small", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", null, "AI"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "progress mb-4"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "progress-bar rounded",
        role: "progressbar",
        style: {
          'width': '0%'
        },
        "aria-valuenow": "10",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        className: "font-muli"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("small", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", null, "0%")))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-12 col-md-5 offset-md-1"
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row pb-5"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "experience pb-5 col-12 col-md-6 col-lg-5"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        className: "mb-2 title font-nixieone"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", null, "Experience")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        className: "list-unstyled"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        className: "pb-3 current"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "mb-0"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("small", null, "December 2016"), " - ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        className: "highlight"
      }, "Present")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "mb-0 font-nixieone"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", null, "Accenture Ltd. - Senior Web Developer"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        className: "pt-3 pb-3"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "mb-0"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("small", null, "April 2013 - December 2016")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "mb-0 font-nixieone"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", null, "Pixo Punch Ltd. - Web Developer"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
        className: "pt-3 pb-3"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "mb-0"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("small", null, "October 2011 - April 2013")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "mb-0 font-nixieone"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", null, "Pixo Punch Ltd. - Junior Web Developer"))))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(props) {
        var store, state;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // const { query, res, store } = props.ctx
                store = props.ctx.store;
                state = store.getState();
                _context.next = 4;
                return new Promise(function (resolve) {
                  setTimeout(resolve, 700);
                });

              case 4:
                return _context.abrupt("return", {
                  state: state
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return About;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])()(About));

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("gsap");

/***/ })

/******/ });