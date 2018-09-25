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
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
/******/ })
/************************************************************************/
/******/ ({

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),

/***/ 7:
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

/***/ })

/******/ });