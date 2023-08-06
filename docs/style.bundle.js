"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["style"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background.jpg */ "./src/images/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::before,\r\n*::after {\r\n  padding: 0;\r\n  border: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\r\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  /* outline: 1px solid red;  */\r\n}\r\n\r\nbody {\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none !important;\r\n  -ms-user-select: none;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\n.background-image {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") 100% center no-repeat;\r\n  background-size: cover;\r\n  position: absolute;\r\n  min-width: 100vw;\r\n  min-height: 100vh;\r\n  z-index: 0;\r\n}\r\n\r\n.search-section,\r\n.result-section,\r\n#search,\r\n#submit {\r\n  color: #fff;\r\n  font-size: clamp(0.5rem, 4vw, 1.5rem);\r\n  font-weight: 200;\r\n  background: linear-gradient(\r\n    135deg,\r\n    rgba(255, 255, 255, 0.1),\r\n    rgba(255, 255, 255, 0)\r\n  );\r\n  backdrop-filter: blur(30px);\r\n  -webkit-backdrop-filter: blur(30px);\r\n  border: 1px solid rgba(255, 255, 255, 0.5);\r\n  border-radius: 1em;\r\n}\r\n\r\n.search-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 30svw;\r\n  height: fit-content;\r\n  margin: 4em auto;\r\n  position: relative;\r\n  z-index: 20;\r\n}\r\n\r\n#search-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#logo {\r\n  width: 70%;\r\n  max-width: 70%;\r\n  margin: 0 auto;\r\n}\r\n\r\n#symbol {\r\n  height: 3.5em;\r\n  border: 1px solid #fff;\r\n  border-radius: 2em;\r\n  margin: 1em auto;\r\n}\r\n\r\n.caret {\r\n  width: 0;\r\n  height: 0;\r\n  position: relative;\r\n  left: -0.45em;\r\n  top: 0.3em;\r\n  border-top: 0.45em solid transparent;\r\n  border-bottom: 0.45em solid transparent;\r\n  border-left: 0.45em solid #fff;\r\n}\r\n\r\n.instruction {\r\n  display: flex;\r\n}\r\n\r\n.instruction,\r\n#search,\r\n#submit {\r\n  font-size: clamp(1rem, 5vw, 1.5rem);\r\n  padding: 0.1em 0.5em;\r\n  margin: 0.5em 1em;\r\n}\r\n\r\n#submit {\r\n  margin-bottom: 1em;\r\n}\r\n\r\n#search:hover,\r\n#submit:hover {\r\n  background: linear-gradient(\r\n    135deg,\r\n    rgba(255, 255, 255, 0.5),\r\n    rgba(255, 255, 255, 0.3)\r\n  );\r\n}\r\n\r\n#submit:active,\r\n#close:active {\r\n  transform: scale(1.05);\r\n}\r\n\r\n#search::placeholder {\r\n  color: rgb(255,0,0);\r\n}\r\n\r\n@keyframes layerSwipe {\r\n  0% {\r\n    transform: translateX(-100px);\r\n    opacity: 0;\r\n  }\r\n\r\n  80% {\r\n    transform: translateX(-80px);\r\n    opacity: 0.2;\r\n  }\r\n\r\n  100% {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.result-section {\r\n  font-size: clamp(1rem, 5vw, 1.5rem);\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  width: max-content;\r\n  height: max-content;\r\n  animation: layerSwipe 1s ease-out;\r\n  -webkit-animation: layerSwipe 1s ease-out;\r\n  position: relative;\r\n  z-index: 20;\r\n}\r\n\r\n.result-bar {\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n#close {\r\n  color: #fff;\r\n  background-color: red;\r\n  font-size: 1em;\r\n  font-weight: 500;\r\n  height: 102%;\r\n  position: relative;\r\n  bottom: 2%;\r\n  right: -0.2%;\r\n  padding: 0 0.5em;\r\n}\r\n\r\n#close:hover {\r\n  background-color: rgb(250, 100, 0);\r\n}\r\n\r\n.result-panel {\r\n  text-shadow: 1px 1px 2px black;\r\n  margin: 1em;\r\n}\r\n\r\n.temp {\r\n  font-weight: 400;\r\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,\r\n    1px 1px 0 #000;\r\n  display: grid;\r\n  grid-template-columns: 3fr 3fr 1fr 1fr;\r\n  padding-left: 0.5em;\r\n  border: 1px solid rgba(255, 255, 255, 0.5);\r\n  border-radius: 1em;\r\n  margin-top: 0.5em;\r\n}\r\n\r\n@keyframes tempSwitch {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.celsius {\r\n  grid-column: 1;\r\n  color: #2196f3;\r\n  animation: tempSwitch 0.3s ease-in;\r\n}\r\n\r\n.fahrenheit {\r\n  grid-column: 1;\r\n  color: red;\r\n  animation: tempSwitch 0.3s ease-in;\r\n}\r\n\r\n.temp-switch {\r\n  grid-column: 4;\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 2.2em;\r\n  height: 1.2em;\r\n  margin-top: 0.15em;\r\n}\r\n\r\n.temp-switch input {\r\n  position: absolute;\r\n  opacity: 0;\r\n}\r\n\r\n.slider {\r\n  background-color: #2196f3;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  transition: 0.3s;\r\n  -webkit-transition: 0.3s;\r\n  cursor: pointer;\r\n}\r\n\r\n.slider:before {\r\n  background-color: #fff;\r\n  position: absolute;\r\n  content: '';\r\n  height: 1.1em;\r\n  width: 1.1em;\r\n  left: 0.05em;\r\n  bottom: 0.05em;\r\n  transition: 0.3s;\r\n  -webkit-transition: 0.3s;\r\n}\r\n\r\n#switch:checked + .slider {\r\n  background-color: red;\r\n}\r\n\r\n#switch:focus + .slider {\r\n  box-shadow: 0 0 1px red;\r\n}\r\n\r\n#switch:checked + .slider:before {\r\n  transform: translateX(26px);\r\n  -webkit-transform: translateX(26px);\r\n  -ms-transform: translateX(26px);\r\n}\r\n\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\n\r\n.gif {\r\n  height: 250px;\r\n  border: 1px solid rgba(255, 255, 255, 0.5);\r\n  border-radius: 1em;\r\n  margin: 1em auto 0;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n  visibility: hidden;\r\n}\r\n\r\n@media only screen and (min-width: 960px) {\r\n  .background-image {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n\r\n  .search-section {\r\n    grid-column: 2;\r\n  }\r\n\r\n  .result-section {\r\n    margin: 4em 1em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 960px) {\r\n  body {\r\n    overflow: hidden;\r\n  }\r\n\r\n  .background-image {\r\n    display: flex;\r\n    justify-content: start;\r\n  }\r\n  \r\n  .search-section {\r\n    width: 50svw;\r\n    height: 100svh;\r\n    margin: 0;\r\n  }\r\n  \r\n  .result-section {\r\n    width: 47svw;\r\n    margin: 0.5em 0.5em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  body {\r\n    overflow: hidden;\r\n  }\r\n\r\n  .background-image {\r\n    display: grid;\r\n    padding-top: env(safe-area-inset-top);\r\n    transform: translateY(-32.7%);\r\n  }\r\n\r\n  .search-section {\r\n    grid-row: 2;\r\n    width: 100vw;\r\n    height: 120vh;\r\n  }\r\n\r\n  #logo {\r\n    margin-top: -22em;\r\n  }\r\n\r\n  #search-form {\r\n    padding-top: 5em;\r\n  }\r\n\r\n  .result-section {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n    animation: none;\r\n    -webkit-animation: none;\r\n  }\r\n\r\n  .slide-down {\r\n    transform: translateY(0);\r\n    transition: transform 1s ease-in;\r\n  }\r\n\r\n  .slide-up {\r\n    transform: translateY(-32.7%);\r\n    transition: transform 1s ease-out;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\r\n*::before,\r\n*::after {\r\n  padding: 0;\r\n  border: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\r\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  /* outline: 1px solid red;  */\r\n}\r\n\r\nbody {\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none !important;\r\n  -ms-user-select: none;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\n.background-image {\r\n  background: url(./images/background.jpg) 100% center no-repeat;\r\n  background-size: cover;\r\n  position: absolute;\r\n  min-width: 100vw;\r\n  min-height: 100vh;\r\n  z-index: 0;\r\n}\r\n\r\n.search-section,\r\n.result-section,\r\n#search,\r\n#submit {\r\n  color: #fff;\r\n  font-size: clamp(0.5rem, 4vw, 1.5rem);\r\n  font-weight: 200;\r\n  background: linear-gradient(\r\n    135deg,\r\n    rgba(255, 255, 255, 0.1),\r\n    rgba(255, 255, 255, 0)\r\n  );\r\n  backdrop-filter: blur(30px);\r\n  -webkit-backdrop-filter: blur(30px);\r\n  border: 1px solid rgba(255, 255, 255, 0.5);\r\n  border-radius: 1em;\r\n}\r\n\r\n.search-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 30svw;\r\n  height: fit-content;\r\n  margin: 4em auto;\r\n  position: relative;\r\n  z-index: 20;\r\n}\r\n\r\n#search-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#logo {\r\n  width: 70%;\r\n  max-width: 70%;\r\n  margin: 0 auto;\r\n}\r\n\r\n#symbol {\r\n  height: 3.5em;\r\n  border: 1px solid #fff;\r\n  border-radius: 2em;\r\n  margin: 1em auto;\r\n}\r\n\r\n.caret {\r\n  width: 0;\r\n  height: 0;\r\n  position: relative;\r\n  left: -0.45em;\r\n  top: 0.3em;\r\n  border-top: 0.45em solid transparent;\r\n  border-bottom: 0.45em solid transparent;\r\n  border-left: 0.45em solid #fff;\r\n}\r\n\r\n.instruction {\r\n  display: flex;\r\n}\r\n\r\n.instruction,\r\n#search,\r\n#submit {\r\n  font-size: clamp(1rem, 5vw, 1.5rem);\r\n  padding: 0.1em 0.5em;\r\n  margin: 0.5em 1em;\r\n}\r\n\r\n#submit {\r\n  margin-bottom: 1em;\r\n}\r\n\r\n#search:hover,\r\n#submit:hover {\r\n  background: linear-gradient(\r\n    135deg,\r\n    rgba(255, 255, 255, 0.5),\r\n    rgba(255, 255, 255, 0.3)\r\n  );\r\n}\r\n\r\n#submit:active,\r\n#close:active {\r\n  transform: scale(1.05);\r\n}\r\n\r\n#search::placeholder {\r\n  color: rgb(255,0,0);\r\n}\r\n\r\n@keyframes layerSwipe {\r\n  0% {\r\n    transform: translateX(-100px);\r\n    opacity: 0;\r\n  }\r\n\r\n  80% {\r\n    transform: translateX(-80px);\r\n    opacity: 0.2;\r\n  }\r\n\r\n  100% {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.result-section {\r\n  font-size: clamp(1rem, 5vw, 1.5rem);\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  width: max-content;\r\n  height: max-content;\r\n  animation: layerSwipe 1s ease-out;\r\n  -webkit-animation: layerSwipe 1s ease-out;\r\n  position: relative;\r\n  z-index: 20;\r\n}\r\n\r\n.result-bar {\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n#close {\r\n  color: #fff;\r\n  background-color: red;\r\n  font-size: 1em;\r\n  font-weight: 500;\r\n  height: 102%;\r\n  position: relative;\r\n  bottom: 2%;\r\n  right: -0.2%;\r\n  padding: 0 0.5em;\r\n}\r\n\r\n#close:hover {\r\n  background-color: rgb(250, 100, 0);\r\n}\r\n\r\n.result-panel {\r\n  text-shadow: 1px 1px 2px black;\r\n  margin: 1em;\r\n}\r\n\r\n.temp {\r\n  font-weight: 400;\r\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,\r\n    1px 1px 0 #000;\r\n  display: grid;\r\n  grid-template-columns: 3fr 3fr 1fr 1fr;\r\n  padding-left: 0.5em;\r\n  border: 1px solid rgba(255, 255, 255, 0.5);\r\n  border-radius: 1em;\r\n  margin-top: 0.5em;\r\n}\r\n\r\n@keyframes tempSwitch {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.celsius {\r\n  grid-column: 1;\r\n  color: #2196f3;\r\n  animation: tempSwitch 0.3s ease-in;\r\n}\r\n\r\n.fahrenheit {\r\n  grid-column: 1;\r\n  color: red;\r\n  animation: tempSwitch 0.3s ease-in;\r\n}\r\n\r\n.temp-switch {\r\n  grid-column: 4;\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 2.2em;\r\n  height: 1.2em;\r\n  margin-top: 0.15em;\r\n}\r\n\r\n.temp-switch input {\r\n  position: absolute;\r\n  opacity: 0;\r\n}\r\n\r\n.slider {\r\n  background-color: #2196f3;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  transition: 0.3s;\r\n  -webkit-transition: 0.3s;\r\n  cursor: pointer;\r\n}\r\n\r\n.slider:before {\r\n  background-color: #fff;\r\n  position: absolute;\r\n  content: '';\r\n  height: 1.1em;\r\n  width: 1.1em;\r\n  left: 0.05em;\r\n  bottom: 0.05em;\r\n  transition: 0.3s;\r\n  -webkit-transition: 0.3s;\r\n}\r\n\r\n#switch:checked + .slider {\r\n  background-color: red;\r\n}\r\n\r\n#switch:focus + .slider {\r\n  box-shadow: 0 0 1px red;\r\n}\r\n\r\n#switch:checked + .slider:before {\r\n  transform: translateX(26px);\r\n  -webkit-transform: translateX(26px);\r\n  -ms-transform: translateX(26px);\r\n}\r\n\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\n\r\n.gif {\r\n  height: 250px;\r\n  border: 1px solid rgba(255, 255, 255, 0.5);\r\n  border-radius: 1em;\r\n  margin: 1em auto 0;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n  visibility: hidden;\r\n}\r\n\r\n@media only screen and (min-width: 960px) {\r\n  .background-image {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n\r\n  .search-section {\r\n    grid-column: 2;\r\n  }\r\n\r\n  .result-section {\r\n    margin: 4em 1em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 960px) {\r\n  body {\r\n    overflow: hidden;\r\n  }\r\n\r\n  .background-image {\r\n    display: flex;\r\n    justify-content: start;\r\n  }\r\n  \r\n  .search-section {\r\n    width: 50svw;\r\n    height: 100svh;\r\n    margin: 0;\r\n  }\r\n  \r\n  .result-section {\r\n    width: 47svw;\r\n    margin: 0.5em 0.5em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  body {\r\n    overflow: hidden;\r\n  }\r\n\r\n  .background-image {\r\n    display: grid;\r\n    padding-top: env(safe-area-inset-top);\r\n    transform: translateY(-32.7%);\r\n  }\r\n\r\n  .search-section {\r\n    grid-row: 2;\r\n    width: 100vw;\r\n    height: 120vh;\r\n  }\r\n\r\n  #logo {\r\n    margin-top: -22em;\r\n  }\r\n\r\n  #search-form {\r\n    padding-top: 5em;\r\n  }\r\n\r\n  .result-section {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n    animation: none;\r\n    -webkit-animation: none;\r\n  }\r\n\r\n  .slide-down {\r\n    transform: translateY(0);\r\n    transition: transform 1s ease-in;\r\n  }\r\n\r\n  .slide-up {\r\n    transform: translateY(-32.7%);\r\n    transition: transform 1s ease-out;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "018883d505e7d56975f4.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/style.css"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sT0FBTyxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sdURBQXVELGlCQUFp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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90byxcXHJcXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxyXFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgcmVkOyAgKi9cXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5iYWNrZ3JvdW5kLWltYWdlIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgMTAwJSBjZW50ZXIgbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIG1pbi13aWR0aDogMTAwdnc7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHotaW5kZXg6IDA7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtc2VjdGlvbixcXHJcXG4ucmVzdWx0LXNlY3Rpb24sXFxyXFxuI3NlYXJjaCxcXHJcXG4jc3VibWl0IHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1zaXplOiBjbGFtcCgwLjVyZW0sIDR2dywgMS41cmVtKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIDEzNWRlZyxcXHJcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpLFxcclxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApXFxyXFxuICApO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMwcHgpO1xcclxcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzBweCk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDMwc3Z3O1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gIG1hcmdpbjogNGVtIGF1dG87XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiAyMDtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nbyB7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgbWF4LXdpZHRoOiA3MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI3N5bWJvbCB7XFxyXFxuICBoZWlnaHQ6IDMuNWVtO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJlbTtcXHJcXG4gIG1hcmdpbjogMWVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jYXJldCB7XFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGxlZnQ6IC0wLjQ1ZW07XFxyXFxuICB0b3A6IDAuM2VtO1xcclxcbiAgYm9yZGVyLXRvcDogMC40NWVtIHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMC40NWVtIHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLWxlZnQ6IDAuNDVlbSBzb2xpZCAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5zdHJ1Y3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmluc3RydWN0aW9uLFxcclxcbiNzZWFyY2gsXFxyXFxuI3N1Ym1pdCB7XFxyXFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDV2dywgMS41cmVtKTtcXHJcXG4gIHBhZGRpbmc6IDAuMWVtIDAuNWVtO1xcclxcbiAgbWFyZ2luOiAwLjVlbSAxZW07XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoOmhvdmVyLFxcclxcbiNzdWJtaXQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAxMzVkZWcsXFxyXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcXHJcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpXFxyXFxuICApO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0OmFjdGl2ZSxcXHJcXG4jY2xvc2U6YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2g6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGNvbG9yOiByZ2IoMjU1LDAsMCk7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbGF5ZXJTd2lwZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgODAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04MHB4KTtcXHJcXG4gICAgb3BhY2l0eTogMC4yO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnJlc3VsdC1zZWN0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgNXZ3LCAxLjVyZW0pO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbiAgYW5pbWF0aW9uOiBsYXllclN3aXBlIDFzIGVhc2Utb3V0O1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IGxheWVyU3dpcGUgMXMgZWFzZS1vdXQ7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiAyMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3VsdC1iYXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuI2Nsb3NlIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgZm9udC1zaXplOiAxZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgaGVpZ2h0OiAxMDIlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm90dG9tOiAyJTtcXHJcXG4gIHJpZ2h0OiAtMC4yJTtcXHJcXG4gIHBhZGRpbmc6IDAgMC41ZW07XFxyXFxufVxcclxcblxcclxcbiNjbG9zZTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAxMDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdWx0LXBhbmVsIHtcXHJcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcXHJcXG4gIG1hcmdpbjogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcCB7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAwICMwMDAsIDFweCAtMXB4IDAgIzAwMCwgLTFweCAxcHggMCAjMDAwLFxcclxcbiAgICAxcHggMXB4IDAgIzAwMDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAzZnIgMWZyIDFmcjtcXHJcXG4gIHBhZGRpbmctbGVmdDogMC41ZW07XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxyXFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyB0ZW1wU3dpdGNoIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY2Vsc2l1cyB7XFxyXFxuICBncmlkLWNvbHVtbjogMTtcXHJcXG4gIGNvbG9yOiAjMjE5NmYzO1xcclxcbiAgYW5pbWF0aW9uOiB0ZW1wU3dpdGNoIDAuM3MgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZhaHJlbmhlaXQge1xcclxcbiAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgYW5pbWF0aW9uOiB0ZW1wU3dpdGNoIDAuM3MgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXAtc3dpdGNoIHtcXHJcXG4gIGdyaWQtY29sdW1uOiA0O1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDIuMmVtO1xcclxcbiAgaGVpZ2h0OiAxLjJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDAuMTVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXAtc3dpdGNoIGlucHV0IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXI6YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIGhlaWdodDogMS4xZW07XFxyXFxuICB3aWR0aDogMS4xZW07XFxyXFxuICBsZWZ0OiAwLjA1ZW07XFxyXFxuICBib3R0b206IDAuMDVlbTtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XFxyXFxufVxcclxcblxcclxcbiNzd2l0Y2g6Y2hlY2tlZCArIC5zbGlkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4jc3dpdGNoOmZvY3VzICsgLnNsaWRlciB7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMXB4IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuI3N3aXRjaDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxyXFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLnJvdW5kIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZiB7XFxyXFxuICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcclxcbiAgbWFyZ2luOiAxZW0gYXV0byAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcXHJcXG4gIC5iYWNrZ3JvdW5kLWltYWdlIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWFyY2gtc2VjdGlvbiB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJlc3VsdC1zZWN0aW9uIHtcXHJcXG4gICAgbWFyZ2luOiA0ZW0gMWVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5iYWNrZ3JvdW5kLWltYWdlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnNlYXJjaC1zZWN0aW9uIHtcXHJcXG4gICAgd2lkdGg6IDUwc3Z3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHN2aDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAucmVzdWx0LXNlY3Rpb24ge1xcclxcbiAgICB3aWR0aDogNDdzdnc7XFxyXFxuICAgIG1hcmdpbjogMC41ZW0gMC41ZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gIGJvZHkge1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJhY2tncm91bmQtaW1hZ2Uge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwYWRkaW5nLXRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMyLjclKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWFyY2gtc2VjdGlvbiB7XFxyXFxuICAgIGdyaWQtcm93OiAyO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTIwdmg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjbG9nbyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0yMmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3NlYXJjaC1mb3JtIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDVlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZXN1bHQtc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGFuaW1hdGlvbjogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2xpZGUtZG93biB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2xpZGUtdXAge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMyLjclKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2Utb3V0O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRSxVQUFVO0VBQ1YsU0FBUztFQUNULFNBQVM7RUFDVCxzQkFBc0I7RUFDdEI7d0VBQ3NFO0VBQ3RFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsaUNBQWlDO0VBQ2pDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5RUFBOEQ7RUFDOUQsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQTs7OztFQUlFLFdBQVc7RUFDWCxxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCOzs7O0dBSUM7RUFDRCwyQkFBMkI7RUFDM0IsbUNBQW1DO0VBQ25DLDBDQUEwQztFQUMxQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixVQUFVO0VBQ1Ysb0NBQW9DO0VBQ3BDLHVDQUF1QztFQUN2Qyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7OztFQUdFLG1DQUFtQztFQUNuQyxvQkFBb0I7RUFD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QUNsQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxlQUFlO0lBQ2YsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLDZCQUE2QjtJQUM3QixpQ0FBaUM7RUFDbkM7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLFxcclxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXHJcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7ICAqL1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tncm91bmQtaW1hZ2Uge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKC4vaW1hZ2VzL2JhY2tncm91bmQuanBnKSAxMDAlIGNlbnRlciBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbWluLXdpZHRoOiAxMDB2dztcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgei1pbmRleDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1zZWN0aW9uLFxcclxcbi5yZXN1bHQtc2VjdGlvbixcXHJcXG4jc2VhcmNoLFxcclxcbiNzdWJtaXQge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXNpemU6IGNsYW1wKDAuNXJlbSwgNHZ3LCAxLjVyZW0pO1xcclxcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgMTM1ZGVnLFxcclxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSksXFxyXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMClcXHJcXG4gICk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzBweCk7XFxyXFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigzMHB4KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMzBzdnc7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgbWFyZ2luOiA0ZW0gYXV0bztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IDIwO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbiNsb2dvIHtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBtYXgtd2lkdGg6IDcwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jc3ltYm9sIHtcXHJcXG4gIGhlaWdodDogMy41ZW07XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMmVtO1xcclxcbiAgbWFyZ2luOiAxZW0gYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmV0IHtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGVmdDogLTAuNDVlbTtcXHJcXG4gIHRvcDogMC4zZW07XFxyXFxuICBib3JkZXItdG9wOiAwLjQ1ZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItYm90dG9tOiAwLjQ1ZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItbGVmdDogMC40NWVtIHNvbGlkICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5pbnN0cnVjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5zdHJ1Y3Rpb24sXFxyXFxuI3NlYXJjaCxcXHJcXG4jc3VibWl0IHtcXHJcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgNXZ3LCAxLjVyZW0pO1xcclxcbiAgcGFkZGluZzogMC4xZW0gMC41ZW07XFxyXFxuICBtYXJnaW46IDAuNWVtIDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2g6aG92ZXIsXFxyXFxuI3N1Ym1pdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIDEzNWRlZyxcXHJcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxcclxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMylcXHJcXG4gICk7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQ6YWN0aXZlLFxcclxcbiNjbG9zZTphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaDo6cGxhY2Vob2xkZXIge1xcclxcbiAgY29sb3I6IHJnYigyNTUsMCwwKTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBsYXllclN3aXBlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA4MCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTgwcHgpO1xcclxcbiAgICBvcGFjaXR5OiAwLjI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucmVzdWx0LXNlY3Rpb24ge1xcclxcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCA1dncsIDEuNXJlbSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxyXFxuICBhbmltYXRpb246IGxheWVyU3dpcGUgMXMgZWFzZS1vdXQ7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogbGF5ZXJTd2lwZSAxcyBlYXNlLW91dDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IDIwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdWx0LWJhciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xvc2Uge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBoZWlnaHQ6IDEwMiU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3R0b206IDIlO1xcclxcbiAgcmlnaHQ6IC0wLjIlO1xcclxcbiAgcGFkZGluZzogMCAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2Nsb3NlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDEwMCwgMCk7XFxyXFxufVxcclxcblxcclxcbi5yZXN1bHQtcGFuZWwge1xcclxcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xcclxcbiAgbWFyZ2luOiAxZW07XFxyXFxufVxcclxcblxcclxcbi50ZW1wIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgIzAwMCwgMXB4IC0xcHggMCAjMDAwLCAtMXB4IDFweCAwICMwMDAsXFxyXFxuICAgIDFweCAxcHggMCAjMDAwO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDNmciAxZnIgMWZyO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHRlbXBTd2l0Y2gge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jZWxzaXVzIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgY29sb3I6ICMyMTk2ZjM7XFxyXFxuICBhbmltYXRpb246IHRlbXBTd2l0Y2ggMC4zcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4uZmFocmVuaGVpdCB7XFxyXFxuICBncmlkLWNvbHVtbjogMTtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICBhbmltYXRpb246IHRlbXBTd2l0Y2ggMC4zcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcC1zd2l0Y2gge1xcclxcbiAgZ3JpZC1jb2x1bW46IDQ7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogMi4yZW07XFxyXFxuICBoZWlnaHQ6IDEuMmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMC4xNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcC1zd2l0Y2ggaW5wdXQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlcjpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgaGVpZ2h0OiAxLjFlbTtcXHJcXG4gIHdpZHRoOiAxLjFlbTtcXHJcXG4gIGxlZnQ6IDAuMDVlbTtcXHJcXG4gIGJvdHRvbTogMC4wNWVtO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuI3N3aXRjaDpjaGVja2VkICsgLnNsaWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbiNzd2l0Y2g6Zm9jdXMgKyAuc2xpZGVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4jc3dpdGNoOmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXHJcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXIucm91bmQge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lmIHtcXHJcXG4gIGhlaWdodDogMjUwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxyXFxuICBtYXJnaW46IDFlbSBhdXRvIDA7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xcclxcbiAgLmJhY2tncm91bmQtaW1hZ2Uge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlYXJjaC1zZWN0aW9uIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVzdWx0LXNlY3Rpb24ge1xcclxcbiAgICBtYXJnaW46IDRlbSAxZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcXHJcXG4gIGJvZHkge1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJhY2tncm91bmQtaW1hZ2Uge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2VhcmNoLXNlY3Rpb24ge1xcclxcbiAgICB3aWR0aDogNTBzdnc7XFxyXFxuICAgIGhlaWdodDogMTAwc3ZoO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5yZXN1bHQtc2VjdGlvbiB7XFxyXFxuICAgIHdpZHRoOiA0N3N2dztcXHJcXG4gICAgbWFyZ2luOiAwLjVlbSAwLjVlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYmFja2dyb3VuZC1pbWFnZSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHBhZGRpbmctdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzIuNyUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlYXJjaC1zZWN0aW9uIHtcXHJcXG4gICAgZ3JpZC1yb3c6IDI7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMjB2aDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNsb2dvIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTIyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjc2VhcmNoLWZvcm0ge1xcclxcbiAgICBwYWRkaW5nLXRvcDogNWVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJlc3VsdC1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYW5pbWF0aW9uOiBub25lO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zbGlkZS1kb3duIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1pbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zbGlkZS11cCB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzIuNyUpO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1vdXQ7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9