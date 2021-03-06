module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _quill = __webpack_require__(2);

	var _quill2 = _interopRequireDefault(_quill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ReactQuill = function (_React$Component) {
	  _inherits(ReactQuill, _React$Component);

	  function ReactQuill(props) {
	    _classCallCheck(this, ReactQuill);

	    var _this = _possibleConstructorReturn(this, (ReactQuill.__proto__ || Object.getPrototypeOf(ReactQuill)).call(this, props));

	    _this.init = _this.__init.bind(_this);

	    _this.$quill = false;
	    _this.$el = false;

	    _this.getHTML = function () {
	      if (_this.$el) {
	        return _this.$el.querySelector('.ql-editor').innerHTML;
	      }
	    };
	    return _this;
	  }

	  _createClass(ReactQuill, [{
	    key: '__init',
	    value: function __init(el) {
	      var _this2 = this;

	      if (el) {
	        var options = _extends({}, this.props.options);

	        // init Quill
	        this.$quill = new _quill2.default(el, options);

	        // registry event handlers
	        for (var name in this.props.events) {
	          var handler = this.props.events[name];
	          this.$quill.on(name, handler);
	        }

	        // registry onChange
	        this.$quill.on('text-change', function () {
	          if (_this2.props.onChange) {
	            _this2.props.onChange(_this2.getHTML());
	          }
	        });

	        this.$el = el;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('div', { ref: this.init })
	      );
	    }
	  }]);

	  return ReactQuill;
	}(_react2.default.Component);

	ReactQuill.propTypes = {
	  options: _react2.default.PropTypes.object,
	  events: _react2.default.PropTypes.object,
	  onChange: _react2.default.PropTypes.func
	};

	exports.default = ReactQuill;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("quill");

/***/ }
/******/ ]);