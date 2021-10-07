module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+wlD":
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./styles/global.scss
var global = __webpack_require__("6Fm8");

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__("+wlD");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: ./store/reducers/test/test.js
var test = __webpack_require__("CfJG");

// CONCATENATED MODULE: ./store/reducers/index.js


/* harmony default export */ var reducers = (Object(external_redux_["combineReducers"])({
  testReducer: test["a" /* default */]
}));
// EXTERNAL MODULE: external "lodash/fp"
var fp_ = __webpack_require__("5psM");
var fp_default = /*#__PURE__*/__webpack_require__.n(fp_);

// EXTERNAL MODULE: external "react-redux-loading-bar"
var external_react_redux_loading_bar_ = __webpack_require__("hVbP");

// CONCATENATED MODULE: ./middleware/progress.js



const progressMiddleware = store => next => action => {
  const cond = fp_default.a.cond([[fp_default.a.equals(`pending`), () => store.dispatch(Object(external_react_redux_loading_bar_["showLoading"])())], [fp_default.a.equals(`fulfilled`), () => store.dispatch(Object(external_react_redux_loading_bar_["hideLoading"])())], [fp_default.a.equals(`rejected`), () => store.dispatch(Object(external_react_redux_loading_bar_["hideLoading"])())]]);
  const composer = fp_default.a.pipe(fp_default.a.get(`type`), fp_default.a.split(`/`), fp_default.a.last, fp_default.a.toLower, cond);
  composer(action);
  return next(action);
};

/* harmony default export */ var progress = (progressMiddleware);
// EXTERNAL MODULE: ./plugins/axios.js
var axios = __webpack_require__("3M6h");

// EXTERNAL MODULE: external "i18next"
var external_i18next_ = __webpack_require__("fnYr");
var external_i18next_default = /*#__PURE__*/__webpack_require__.n(external_i18next_);

// CONCATENATED MODULE: ./middleware/interceptors.js




const interceptor = () => {
  axios["a" /* default */].interceptors.request.use(response => fp_default.a.set(`headers.common.Accept-Language`, external_i18next_default.a.language, response));
};

/* harmony default export */ var interceptors = (interceptor);
// EXTERNAL MODULE: external "i18next-browser-languagedetector"
var external_i18next_browser_languagedetector_ = __webpack_require__("fhoN");
var external_i18next_browser_languagedetector_default = /*#__PURE__*/__webpack_require__.n(external_i18next_browser_languagedetector_);

// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__("MQhX");

// EXTERNAL MODULE: ./locales/en.json
var en = __webpack_require__("cCmO");

// EXTERNAL MODULE: ./locales/ko.json
var ko = __webpack_require__("Pcgs");

// CONCATENATED MODULE: ./plugins/i18n.js





external_i18next_default.a.use(external_i18next_browser_languagedetector_default.a).use(external_react_i18next_["initReactI18next"]).init({
  resources: {
    "en-US": {
      translations: en
    },
    "ko-KR": {
      translations: ko
    }
  },
  // fallbackLng: ['en', 'ko'],
  fallbackLng: [`en-US`, `ko-KR`],
  ns: [`translations`],
  defaultNS: `translations`,
  interpolation: {
    escapeValue: false
  },
  debug: false,
  react: {
    useSuspense: false
  },
  lng: "ko-KR"
});
/* harmony default export */ var i18n = (external_i18next_default.a);
// CONCATENATED MODULE: ./pages/_app.js

var __jsx = external_react_default.a.createElement;
 //import { Provider as AuthProvider } from "next-auth/client";






 //import Routes from "../routers";

const _app_store = Object(toolkit_["configureStore"])({
  reducer: reducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    immutableCheck: false
  }).concat(progress),
  devTools: false
});
interceptors(_app_store);

const MyApp = ({
  Component,
  pageProps
}) => {
  return __jsx(external_react_redux_["Provider"], {
    store: _app_store
  }, __jsx(Component, pageProps));
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "3M6h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const $axios = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  headers: {
    Pragma: "no-cache"
  },
  baseURL:  false ? undefined : "http://localhost:8081",
  withCredentials: true
});
/* harmony default export */ __webpack_exports__["a"] = ($axios);

/***/ }),

/***/ "5psM":
/***/ (function(module, exports) {

module.exports = require("lodash/fp");

/***/ }),

/***/ "6Fm8":
/***/ (function(module, exports) {



/***/ }),

/***/ "CfJG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTest; });
/* unused harmony export resetError */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+wlD");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plugins_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3M6h");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const getTest = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])(`test/getTest`, async query => {
  const response = await _plugins_axios__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get( false ? undefined : query !== undefined ? '/cart?page=' + query.page : '/cart');
  return response.data;
});
const slice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: `test`,
  initialState: {
    isLoading: false,
    error: null,
    carts: {},
    totalPrice: 0
  },
  reducers: {
    resetError: state => {
      return _objectSpread(_objectSpread({}, state), {}, {
        error: null
      });
    }
  },
  extraReducers: {
    [getTest.pending]: state => {
      state.isLoading = true;
    },
    [getTest.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.carts = action.payload.data;
    },
    [getTest.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    }
  }
});
const reducer = slice.reducer;
/* harmony default export */ __webpack_exports__["a"] = (reducer);
const {
  resetError
} = slice.actions;

/***/ }),

/***/ "MQhX":
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),

/***/ "Pcgs":
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ "cCmO":
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fhoN":
/***/ (function(module, exports) {

module.exports = require("i18next-browser-languagedetector");

/***/ }),

/***/ "fnYr":
/***/ (function(module, exports) {

module.exports = require("i18next");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hVbP":
/***/ (function(module, exports) {

module.exports = require("react-redux-loading-bar");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });