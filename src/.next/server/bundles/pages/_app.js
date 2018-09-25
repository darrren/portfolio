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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
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
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("gsap");

/***/ }),
/* 7 */,
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
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
/* harmony export (immutable) */ __webpack_exports__["b"] = failure;
/* unused harmony export increment */
/* unused harmony export decrement */
/* unused harmony export reset */
/* harmony export (immutable) */ __webpack_exports__["c"] = loadData;
/* harmony export (immutable) */ __webpack_exports__["d"] = loadDataSuccess;
/* harmony export (immutable) */ __webpack_exports__["e"] = startClock;
/* harmony export (immutable) */ __webpack_exports__["f"] = tickClock;
var actionTypes = {
  FAILURE: 'FAILURE',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  START_CLOCK: 'START_CLOCK',
  TICK_CLOCK: 'TICK_CLOCK'
};
function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error: error
  };
}
function increment() {
  return {
    type: actionTypes.INCREMENT
  };
}
function decrement() {
  return {
    type: actionTypes.DECREMENT
  };
}
function reset() {
  return {
    type: actionTypes.RESET
  };
}
function loadData() {
  return {
    type: actionTypes.LOAD_DATA
  };
}
function loadDataSuccess(data) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data: data
  };
}
function startClock() {
  return {
    type: actionTypes.START_CLOCK
  };
}
function tickClock(isServer) {
  return {
    type: actionTypes.TICK_CLOCK,
    light: !isServer,
    ts: Date.now()
  };
}

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var nextRoutes = __webpack_require__(26);

var routes = module.exports = nextRoutes();
routes.add('blog', '/blog');
routes.add('about', ':lng/about');

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(2);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "next/app"
var app_ = __webpack_require__(22);
var app__default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(5);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: external "next-redux-wrapper"
var external__next_redux_wrapper_ = __webpack_require__(23);
var external__next_redux_wrapper__default = /*#__PURE__*/__webpack_require__.n(external__next_redux_wrapper_);

// EXTERNAL MODULE: external "next-redux-saga"
var external__next_redux_saga_ = __webpack_require__(24);
var external__next_redux_saga__default = /*#__PURE__*/__webpack_require__.n(external__next_redux_saga_);

// EXTERNAL MODULE: external "react-i18next"
var external__react_i18next_ = __webpack_require__(8);
var external__react_i18next__default = /*#__PURE__*/__webpack_require__.n(external__react_i18next_);

// EXTERNAL MODULE: ../i18n.js
var i18n_0 = __webpack_require__(9);
var i18n_default = /*#__PURE__*/__webpack_require__.n(i18n_0);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(25);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(3);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// CONCATENATED MODULE: ./components/head.js



var defaultDescription = '';
var defaultOGURL = '';
var defaultOGImage = '';

var head_Head = function Head(props) {
  return external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("meta", {
    charSet: "UTF-8"
  }), external__react__default.a.createElement("title", null, props.title || ''), external__react__default.a.createElement("meta", {
    name: "description",
    content: props.description || defaultDescription
  }), external__react__default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), external__react__default.a.createElement("link", {
    rel: "icon",
    sizes: "192x192",
    href: "/static/touch-icon.png"
  }), external__react__default.a.createElement("link", {
    rel: "apple-touch-icon",
    href: "/static/touch-icon.png"
  }), external__react__default.a.createElement("link", {
    rel: "mask-icon",
    href: "/static/favicon-mask.svg",
    color: "#49B882"
  }), external__react__default.a.createElement("link", {
    rel: "icon",
    href: "/static/favicon.ico"
  }), external__react__default.a.createElement("meta", {
    property: "og:url",
    content: props.url || defaultOGURL
  }), external__react__default.a.createElement("meta", {
    property: "og:title",
    content: props.title || ''
  }), external__react__default.a.createElement("meta", {
    property: "og:description",
    content: props.description || defaultDescription
  }), external__react__default.a.createElement("meta", {
    name: "twitter:site",
    content: props.url || defaultOGURL
  }), external__react__default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), external__react__default.a.createElement("meta", {
    name: "twitter:image",
    content: props.ogImage || defaultOGImage
  }), external__react__default.a.createElement("meta", {
    property: "og:image",
    content: props.ogImage || defaultOGImage
  }), external__react__default.a.createElement("meta", {
    property: "og:image:width",
    content: "1200"
  }), external__react__default.a.createElement("meta", {
    property: "og:image:height",
    content: "630"
  }));
};

/* harmony default export */ var head = (head_Head);
// EXTERNAL MODULE: ../routes.js
var routes = __webpack_require__(18);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// EXTERNAL MODULE: external "styled-components"
var external__styled_components_ = __webpack_require__(1);
var external__styled_components__default = /*#__PURE__*/__webpack_require__.n(external__styled_components_);

// EXTERNAL MODULE: ./lib/withI18next.js
var withI18next = __webpack_require__(13);

// EXTERNAL MODULE: ./static/ico-home.png
var ico_home = __webpack_require__(27);
var ico_home_default = /*#__PURE__*/__webpack_require__.n(ico_home);

// EXTERNAL MODULE: ./static/ico-about.png
var ico_about = __webpack_require__(28);
var ico_about_default = /*#__PURE__*/__webpack_require__.n(ico_about);

// EXTERNAL MODULE: ./static/ico-work.png
var ico_work = __webpack_require__(29);
var ico_work_default = /*#__PURE__*/__webpack_require__.n(ico_work);

// EXTERNAL MODULE: ./static/ico-contact.png
var ico_contact = __webpack_require__(30);
var ico_contact_default = /*#__PURE__*/__webpack_require__.n(ico_contact);

// CONCATENATED MODULE: ./components/nav.js
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


 // import { Link, Router } from '../../routes'



 // import { Button } from 'reactstrap'




 // import icoFullscreen from '../static/ico-fullscreen.png'

var nav_Nav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav() {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
  }

  _createClass(Nav, [{
    key: "render",
    value: function render() {
      var i18n = this.props.i18n;
      return external__react__default.a.createElement(Navigation, null, external__react__default.a.createElement("div", {
        className: "menuContainer font-muli px-2 px-md-4"
      }, external__react__default.a.createElement("div", {
        className: "menuContent"
      }, external__react__default.a.createElement(routes["Link"], {
        prefetch: true,
        href: "/"
      }, external__react__default.a.createElement("a", null, external__react__default.a.createElement("span", null, external__react__default.a.createElement("img", {
        src: ico_home_default.a
      }), "HOME"))), ' / ', external__react__default.a.createElement(routes["Link"], {
        prefetch: true,
        route: i18n.language + '/about'
      }, external__react__default.a.createElement("a", null, external__react__default.a.createElement("span", null, external__react__default.a.createElement("img", {
        src: ico_about_default.a
      }), "ABOUT"))), ' / ', external__react__default.a.createElement(routes["Link"], {
        prefetch: true,
        route: "blog",
        params: {
          slug: 'hello-world'
        }
      }, external__react__default.a.createElement("a", null, external__react__default.a.createElement("span", null, external__react__default.a.createElement("img", {
        src: ico_work_default.a
      }), "WORKS"))), ' / ', external__react__default.a.createElement(routes["Link"], {
        prefetch: true,
        route: "counter"
      }, external__react__default.a.createElement("a", null, external__react__default.a.createElement("span", null, external__react__default.a.createElement("img", {
        src: ico_contact_default.a
      }), "CONTACT")))), external__react__default.a.createElement("div", {
        className: "copyright"
      }, "\xA9 Copyright 2017 Darren Chan. All Rights Reserved.")));
    }
  }]);

  return Nav;
}(external__react__default.a.Component);

var Navigation = external__styled_components__default.a.nav.withConfig({
  displayName: "nav__Navigation",
  componentId: "mu7291-0"
})([".menuContainer{position:fixed;bottom:0;left:0;width:100%;min-height:46px;background-color:rgba(0,0,0,0.5);z-index:1;font-size:12px;.menuContent{float:right;color:#9d9d9d;a{position:relative;display:inline-block;color:#9d9d9d;text-decoration:none;padding:14px 20px;transition:0.5s;&:hover{color:#fff;span{img{opacity:1;}}}&.page-layout__nav-item--active{color:#fff;font-weight:bold;&:before{content:'';position:absolute;top:0;left:20px;width:calc(100% - 40px);border-top:3px solid #5fe4e2;}span{img{opacity:1;}}}span{position:relative;display:block;padding:0 0 0 20px;img{opacity:0.5;position:absolute;top:50%;left:0;-webkit-transform:translate(0,-50%);-moz-transform:translate(0,-50%);-o-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);transition:0.5s;}}}}.copyright{float:left;color:#fff;padding:14px 0;}}@media (max-width:768px){.menuContainer{text-align:center;.menuContent{float:none;}.copyright{float:none;padding-top:0;}}}"]);
/* harmony default export */ var nav = (Object(withI18next["a" /* withI18next */])(['common'])(nav_Nav));
// EXTERNAL MODULE: external "nprogress"
var external__nprogress_ = __webpack_require__(31);
var external__nprogress__default = /*#__PURE__*/__webpack_require__.n(external__nprogress_);

// EXTERNAL MODULE: external "gsap"
var external__gsap_ = __webpack_require__(6);
var external__gsap__default = /*#__PURE__*/__webpack_require__.n(external__gsap_);

// CONCATENATED MODULE: ./components/loading.js
function loading__typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { loading__typeof2 = function _typeof2(obj) { return typeof obj; }; } else { loading__typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return loading__typeof2(obj); }

function loading__typeof(obj) {
  if (typeof Symbol === "function" && loading__typeof2(Symbol.iterator) === "symbol") {
    loading__typeof = function _typeof(obj) {
      return loading__typeof2(obj);
    };
  } else {
    loading__typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : loading__typeof2(obj);
    };
  }

  return loading__typeof(obj);
}

function loading__classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function loading__defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function loading__createClass(Constructor, protoProps, staticProps) {
  if (protoProps) loading__defineProperties(Constructor.prototype, protoProps);
  if (staticProps) loading__defineProperties(Constructor, staticProps);
  return Constructor;
}

function loading__possibleConstructorReturn(self, call) {
  if (call && (loading__typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return loading__assertThisInitialized(self);
}

function loading__assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function loading__inherits(subClass, superClass) {
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







var loading_Loading =
/*#__PURE__*/
function (_React$Component) {
  loading__inherits(Loading, _React$Component);

  function Loading(props) {
    var _this;

    loading__classCallCheck(this, Loading);

    _this = loading__possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).call(this, props));
    external__nprogress__default.a.configure({
      showSpinner: false
    });

    routes["Router"].onRouteChangeStart = function (url) {
      console.log("Loading: ".concat(url));
      external__nprogress__default.a.start();
      external__gsap_["TweenMax"].to(_this.l._reactInternalFiber.child.stateNode, 0.3, {
        autoAlpha: 1
      });
    };

    routes["Router"].onRouteChangeComplete = function () {
      external__nprogress__default.a.done();
      external__gsap_["TweenMax"].to(_this.l._reactInternalFiber.child.stateNode, 0.3, {
        autoAlpha: 0
      });
    };

    routes["Router"].onRouteChangeError = function () {
      external__nprogress__default.a.done();
    };

    return _this;
  }

  loading__createClass(Loading, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // console.log(this.l._reactInternalFiber.child.stateNode);
      external__gsap_["TweenMax"].to(this.l._reactInternalFiber.child.stateNode, 0.3, {
        autoAlpha: 0
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return external__react__default.a.createElement(L, {
        className: "loading",
        ref: function ref(e) {
          _this2.l = e;
        }
      }, external__react__default.a.createElement("div", {
        className: "imgBox"
      }, external__react__default.a.createElement("div", {
        className: "uil-ring-css",
        style: {
          transform: 'scale(1)'
        }
      }, external__react__default.a.createElement("div", null))));
    }
  }]);

  return Loading;
}(external__react__default.a.Component);

var L = external__styled_components__default.a.div.withConfig({
  displayName: "loading__L",
  componentId: "s1gvrpyo-0"
})(["position:fixed;width:100%;height:100%;background-color:#1a1d24;z-index:999;.imgBox{position:absolute;top:50%;left:50%;margin:-50px 0 0 -50px;width:100px;img{display:none;.desktop &{display:block;}}}@-webkit-keyframes uil-ring-anim{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}@-moz-keyframes uil-ring-anim{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}@-webkit-keyframes uil-ring-anim{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}@-o-keyframes uil-ring-anim{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes uil-ring-anim{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}.uil-ring-css{background:none;position:relative;width:100px;height:100px;& > div{position:absolute;display:block;width:100px;height:100px;top:0px;left:0px;border-radius:80px;box-shadow:0 3px 0 0 #5fe4e2;-webkit-transform-origin:50px 51.5px;transform-origin:50px 51.5px;-webkit-animation:uil-ring-anim 1s linear infinite;animation:uil-ring-anim 1s linear infinite;}}"]);
/* harmony default export */ var loading = (loading_Loading);
// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(32);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// EXTERNAL MODULE: external "redux-saga"
var external__redux_saga_ = __webpack_require__(19);
var external__redux_saga__default = /*#__PURE__*/__webpack_require__.n(external__redux_saga_);

// EXTERNAL MODULE: ../actions.js
var actions = __webpack_require__(15);

// CONCATENATED MODULE: ../reducer.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var exampleInitialState = {
  count: 0,
  error: false,
  lastUpdate: 0,
  light: false,
  placeholderData: null
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actions["a" /* actionTypes */].FAILURE:
      return _objectSpread({}, state, {
        error: action.error
      });

    case actions["a" /* actionTypes */].INCREMENT:
      return _objectSpread({}, state, {
        count: state.count + 1
      });

    case actions["a" /* actionTypes */].DECREMENT:
      return _objectSpread({}, state, {
        count: state.count - 1
      });

    case actions["a" /* actionTypes */].RESET:
      return _objectSpread({}, state, {
        count: exampleInitialState.count
      });

    case actions["a" /* actionTypes */].LOAD_DATA_SUCCESS:
      return _objectSpread({}, state, {
        placeholderData: action.data
      });

    case actions["a" /* actionTypes */].TICK_CLOCK:
      return _objectSpread({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      });

    default:
      return state;
  }
}

/* harmony default export */ var reducer_0 = (reducer);
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(33);
var effects__default = /*#__PURE__*/__webpack_require__.n(effects_);

// EXTERNAL MODULE: external "es6-promise"
var external__es6_promise_ = __webpack_require__(34);
var external__es6_promise__default = /*#__PURE__*/__webpack_require__.n(external__es6_promise_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external__isomorphic_unfetch_ = __webpack_require__(35);
var external__isomorphic_unfetch__default = /*#__PURE__*/__webpack_require__.n(external__isomorphic_unfetch_);

// CONCATENATED MODULE: ../saga.js


var _marked =
/*#__PURE__*/
regenerator__default.a.mark(runClockSaga),
    _marked2 =
/*#__PURE__*/
regenerator__default.a.mark(loadDataSaga),
    _marked3 =
/*#__PURE__*/
regenerator__default.a.mark(rootSaga);

/* global fetch */





external__es6_promise__default.a.polyfill();

function runClockSaga() {
  return regenerator__default.a.wrap(function runClockSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(effects_["take"])(actions["a" /* actionTypes */].START_CLOCK);

        case 2:
          if (false) {
            _context.next = 9;
            break;
          }

          _context.next = 5;
          return Object(effects_["put"])(Object(actions["f" /* tickClock */])(false));

        case 5:
          _context.next = 7;
          return Object(effects_["call"])(external__redux_saga_["delay"], 1000);

        case 7:
          _context.next = 2;
          break;

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

function loadDataSaga() {
  var res, data;
  return regenerator__default.a.wrap(function loadDataSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return fetch('https://jsonplaceholder.typicode.com/users');

        case 3:
          res = _context2.sent;
          _context2.next = 6;
          return res.json();

        case 6:
          data = _context2.sent;
          _context2.next = 9;
          return Object(effects_["put"])(Object(actions["d" /* loadDataSuccess */])(data));

        case 9:
          _context2.next = 15;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 15;
          return Object(effects_["put"])(Object(actions["b" /* failure */])(_context2.t0));

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this, [[0, 11]]);
}

function rootSaga() {
  return regenerator__default.a.wrap(function rootSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(effects_["all"])([Object(effects_["call"])(runClockSaga), Object(effects_["takeLatest"])(actions["a" /* actionTypes */].LOAD_DATA, loadDataSaga)]);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

/* harmony default export */ var saga = (rootSaga);
// CONCATENATED MODULE: ../store.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }





var sagaMiddleware = external__redux_saga__default()();

var store_bindMiddleware = function bindMiddleware(middleware) {
  if (false) {
    var _require = require('redux-devtools-extension'),
        composeWithDevTools = _require.composeWithDevTools;

    return composeWithDevTools(applyMiddleware.apply(void 0, _toConsumableArray(middleware)));
  }

  return external__redux_["applyMiddleware"].apply(void 0, _toConsumableArray(middleware));
};

function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  var store = Object(external__redux_["createStore"])(reducer_0, initialState, store_bindMiddleware([sagaMiddleware]));

  store.runSagaTask = function () {
    store.sagaTask = sagaMiddleware.run(saga);
  };

  store.runSagaTask();
  return store;
}

/* harmony default export */ var store_0 = (configureStore);
// CONCATENATED MODULE: ./pages/_app.js
function _app__typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _app__typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _app__typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _app__typeof2(obj); }



function _app__typeof(obj) {
  if (typeof Symbol === "function" && _app__typeof2(Symbol.iterator) === "symbol") {
    _app__typeof = function _typeof(obj) {
      return _app__typeof2(obj);
    };
  } else {
    _app__typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _app__typeof2(obj);
    };
  }

  return _app__typeof(obj);
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

function _app__classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _app__possibleConstructorReturn(self, call) {
  if (call && (_app__typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _app__assertThisInitialized(self);
}

function _app__assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _app__defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _app__createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _app__defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _app__defineProperties(Constructor, staticProps);
  return Constructor;
}

function _app__inherits(subClass, superClass) {
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













var _app_MyApp =
/*#__PURE__*/
function (_App) {
  _app__inherits(MyApp, _App);

  _app__createClass(MyApp, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps({
                  ctx: ctx
                });

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
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

  function MyApp(props) {
    var _this;

    _app__classCallCheck(this, MyApp);

    _this = _app__possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).call(this, props));
    _this.state = {
      loaded: false
    };
    return _this;
  }

  _app__createClass(MyApp, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          pageProps = _props.pageProps,
          store = _props.store;

      var _ref2 = pageProps || {},
          i18n = _ref2.i18n,
          initialI18nStore = _ref2.initialI18nStore,
          initialLanguage = _ref2.initialLanguage;

      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(loading, null), external__react__default.a.createElement(app_["Container"], null, external__react__default.a.createElement(external__react_i18next_["I18nextProvider"], {
        i18n: i18n || i18n_default.a,
        initialI18nStore: initialI18nStore,
        initialLanguage: initialLanguage
      }, external__react__default.a.createElement(external__react__default.a.Fragment, null, external__react__default.a.createElement(external__react_redux_["Provider"], {
        store: store
      }, external__react__default.a.createElement("div", null, external__react__default.a.createElement(nav, null), external__react__default.a.createElement(head, {
        title: "Darren's Portfolio"
      }), external__react__default.a.createElement(Component, pageProps)))))));
    }
  }]);

  return MyApp;
}(app__default.a);

/* harmony default export */ var _app = __webpack_exports__["default"] = (external__next_redux_wrapper__default()(store_0)(external__next_redux_saga__default()({
  async: true
})(_app_MyApp)));

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAFM0aXcAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7ppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Rjc3RjExNzQwNzIwNjgxMTgwODNFQjgzQzYyQkQ3QzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0NENzVFRkUwM0ZDMTFFODhCNzZDQTEwOTczOEE4ODUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0NENzVFRkQwM0ZDMTFFODhCNzZDQTEwOTczOEE4ODUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzNlMTJjNGUtMzEyNy05YTRiLWEyOTMtODU4NmU0ZTYwYjE0IiBzdFJlZjpkb2N1bWVudElEPSJ1dWlkOjA3NENBMTU0NjU1Q0UxMTE4NjU0QTdFMUNFMTFBQ0EwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+SlfsmQAAASpJREFUeNpi/P//PwMIMIGIx0+e/AcIIEa4CJB3EcQACCAGkMijx49zgPg/iA1WCwQJQHwWxAAIILgeGICbBsJwASi4BBeQlZFhBFK/QWyAAEIxA6iNDargF1wQ6ozDQPwcxIbyn4PEwJqRBP/DaBgbhDGciQ4AAgivAmQvgBzIgVUSKPEHSG0F0UAM9isj0BESQPo5EJsDMQ8QfwHik0AsCbYTqHIFkOMDxNxA/BWItwD9HgEzVgskAQ0tbiifgQUqeQ2IYaEEio47BL0CEGAEAwIfYMEmCPSAB5BaCsRCQPwOiKOBeDsQXwa6Ww9bOLEB8XxoAlkHxMVQDxZD+SAgA0sJOJ0NVMAJpKZB0+MCIM4CGvQdr5+hMaOLx5vYnY0OQE6GOps2oQ0APvm6Nw/XqNAAAAAASUVORK5CYII="

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAFM0aXcAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7ppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Rjc3RjExNzQwNzIwNjgxMTgwODNFQjgzQzYyQkQ3QzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0NENzVGMDIwM0ZDMTFFODhCNzZDQTEwOTczOEE4ODUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0NENzVGMDEwM0ZDMTFFODhCNzZDQTEwOTczOEE4ODUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzNlMTJjNGUtMzEyNy05YTRiLWEyOTMtODU4NmU0ZTYwYjE0IiBzdFJlZjpkb2N1bWVudElEPSJ1dWlkOjA3NENBMTU0NjU1Q0UxMTE4NjU0QTdFMUNFMTFBQ0EwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+iem8sQAAAM1JREFUeNpi/P//PwMIMDFAwBaAAGJEF2EACCC4CBCAGIwwARAxBYgNAAIIWQWK3v/oAluRBbYA8QWYKoAAwjADHTCh8f8jmw8CLGiSs5DdTJQVAAGEVwETsY7LhNqZg02SDUq/w2Un3LXIOhuRJEB0L7JOmHZGZDYLkiADOhsgwAgGBCnxAAOcQLwd6oTVUD4mANmMBU/7jwrmYFOHSzMbEJ+HajyIQw1WZ9sD8Rwg/gDl/wPiRVBxnM7egubUO0DMBMQv0MQPw/RQFNoAHUHVtqo2fUgAAAAASUVORK5CYII="

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAFM0aXcAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7ppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Rjc3RjExNzQwNzIwNjgxMTgwODNFQjgzQzYyQkQ3QzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0NGM0M1N0IwM0ZDMTFFODhCNzZDQTEwOTczOEE4ODUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0NGM0M1N0EwM0ZDMTFFODhCNzZDQTEwOTczOEE4ODUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzNlMTJjNGUtMzEyNy05YTRiLWEyOTMtODU4NmU0ZTYwYjE0IiBzdFJlZjpkb2N1bWVudElEPSJ1dWlkOjA3NENBMTU0NjU1Q0UxMTE4NjU0QTdFMUNFMTFBQ0EwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bcGwuAAAAPpJREFUeNpi/P//PwMIMDFAwBSAAGJEFvkJYgAEEANI5D8EXAWxYWpBgBlEAAQQXA8MgFRwgnQCcT7MjA9AfB2IFcGqoQL/oYYzAAQQhhnoAGbrB6i5IFwHdyOSO2HGfgZiaZjxRFkBEEB4FTAR47hLSI4DBUApegDCQAVyQIDwbyD+DsQqQPwF5mJ0nTxAnAqTRHfQZyC+DOOwwLyEzbUAAUYwIPABFjS+IhBXoIn1AfFNrLqR4wMPBnn0LRDPQRZHVgCK5BwgVgBiNqiYPlTjK3SNIIzu7N9A/AOIf0G9AGI/AeJMIF5OKO7/AfFfKPs+lL8AiDuoHtoAviUcU8vMSSQAAAAASUVORK5CYII="

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAFM0aXcAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7ppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Rjc3RjExNzQwNzIwNjgxMTgwODNFQjgzQzYyQkQ3QzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0NGM0M1N0YwM0ZDMTFFODhCNzZDQTEwOTczOEE4ODUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0NGM0M1N0UwM0ZDMTFFODhCNzZDQTEwOTczOEE4ODUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzNlMTJjNGUtMzEyNy05YTRiLWEyOTMtODU4NmU0ZTYwYjE0IiBzdFJlZjpkb2N1bWVudElEPSJ1dWlkOjA3NENBMTU0NjU1Q0UxMTE4NjU0QTdFMUNFMTFBQ0EwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+XDhDbgAAAQZJREFUeNpi/P//PwMIMDFAgCtAADEii7wCMQACCCbyH6rkNboAM0AAwfXAAEjvZagKiAxIBRAnAPFPEBvdDEaAAMIwAx2wIKnmBWJ1KPs+EL8F4s8gBYxQwf9obJDcXxYk0xixsQECCK8bmPA5DiQ5HcnDyHgVyOMgwATEz4HYGEqD+P9hIcMDxH+g7M9ALApiw+w8D8THoeyVQHwJW7wgA0YWLP6EA4AAIxjWhOIBBsSA2BiIzYFYEovaq0B8A4jfA/FpWDoogQbHByBmhvr4IVJIoPOfQ9VnM6ApAuGW/9jBInS16BpzoAq3o4n3QsWr8WlGBnXQGM2EJu3/SLHNgJzUyQIA/cJGnsRgwkkAAAAASUVORK5CYII="

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("es6-promise");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ })
/******/ ]);