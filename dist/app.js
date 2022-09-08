"use strict";
require("./prebundle/vendors-node_modules_taro_lark_prebundle_react-dom_js.js");
require("./prebundle/vendors-node_modules_taro_lark_prebundle_chunk-2KE226GT_js.js");
require("./prebundle/vendors-node_modules_taro_lark_prebundle_chunk-NRS6FBN4_js.js");
require("./prebundle/vendors-node_modules_taro_lark_prebundle_tarojs_plugin-framework-react_dist_runtime_js.js");
require("./prebundle/vendors-node_modules_taro_lark_prebundle_tarojs_taro_js.js");
require("./prebundle/vendors-node_modules_taro_lark_prebundle_chunk-5EASSBLT_js.js");
require("./prebundle/vendors-node_modules_taro_lark_prebundle_tarojs_plugin-html_dist_runtime_js.js");
require("./prebundle/remoteEntry.js");
require("./prebundle/node_modules_taro_lark_prebundle_tarojs_runtime_js.js");
require("./prebundle/node_modules_taro_lark_prebundle_react_jsx-runtime_js.js");
require("./prebundle/node_modules_taro_lark_prebundle_tarojs_plugin-platform-lark_dist_runtime_js.js");
require("./prebundle/node_modules_taro_lark_prebundle_react_js.js");

require("./taro");
require("./runtime");

(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/.pnpm/babel-loader@8.2.1_v3lbwypw6w3zvdnxbnh5gj673y/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/app.tsx":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/babel-loader@8.2.1_v3lbwypw6w3zvdnxbnh5gj673y/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/app.tsx ***!
  \***********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);


 // class App extends Component{
//   componentDidMount() {
//     console.log('app componentDidMount')
//     Taro.onAppShow((res) => {
//       console.log(1);
//       console.log(res);
//     });
//   }
//   componentDidShow() {
//       console.log('app componentDidShow')
//   }
//   onLaunch() {
//     console.log('onLaunch')
//    }
//     componentDidHide() { }
//   render () {
//     // this.props.children 是将要会渲染的页面
//     return this.props.children
//   }
// }

function App(props) {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().onAppShow(function (res) {
    console.log('app onAppShow');
    console.log(res);
  });
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useLaunch)(function (res) {
    console.log(res);
  });
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useDidShow)(function () {
    console.log('app useDidShow');
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    console.log('app useEffect');
  }, []);
  return props.children;
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_plugin_platform_lark_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-lark/dist/runtime */ "webpack/container/remote/@tarojs/plugin-platform-lark/dist/runtime");
/* harmony import */ var _tarojs_plugin_platform_lark_dist_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_plugin_platform_lark_dist_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_plugin_html_dist_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/plugin-html/dist/runtime */ "webpack/container/remote/@tarojs/plugin-html/dist/runtime");
/* harmony import */ var _tarojs_plugin_html_dist_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_plugin_html_dist_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/plugin-framework-react/dist/runtime */ "webpack/container/remote/@tarojs/plugin-framework-react/dist/runtime");
/* harmony import */ var _tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_babel_loader_8_2_1_v3lbwypw6w3zvdnxbnh5gj673y_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_app_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../node_modules/.pnpm/babel-loader@8.2.1_v3lbwypw6w3zvdnxbnh5gj673y/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./app.tsx */ "./node_modules/.pnpm/babel-loader@8.2.1_v3lbwypw6w3zvdnxbnh5gj673y/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/app.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "webpack/container/remote/react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);












var config = {"pages":["pages/index/index"],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"WeChat","navigationBarTextStyle":"black"}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_2__.window.__taroAppConfig = config
var inst = App((0,_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_3__.createReactApp)(_node_modules_pnpm_babel_loader_8_2_1_v3lbwypw6w3zvdnxbnh5gj673y_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_app_tsx__WEBPACK_IMPORTED_MODULE_5__["default"], react__WEBPACK_IMPORTED_MODULE_6__, (react_dom__WEBPACK_IMPORTED_MODULE_7___default()), config))

;(0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__.initPxTransform)({
  designWidth: 750,
  deviceRatio: {"640":1.17,"750":1,"828":0.905}
})


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["common"], function() { return __webpack_exec__("./src/app.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);;;
//# sourceMappingURL=app.js.map