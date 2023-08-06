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
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::before,\r\n*::after {\r\n  padding: 0;\r\n  border: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\r\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  /* outline: 1px solid red;  */\r\n}\r\n\r\nbody {\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none !important;\r\n  -ms-user-select: none;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\n.background-image {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") 100% center no-repeat;\r\n  background-size: cover;\r\n  position: absolute;\r\n  min-width: 100vw;\r\n  min-height: 100vh;\r\n  z-index: 0;\r\n}\r\n\r\n.search-section,\r\n.result-section,\r\n#search,\r\n#submit {\r\n  color: #fff;\r\n  font-size: clamp(0.5rem, 4vw, 1.5rem);\r\n  font-weight: 200;\r\n  background: linear-gradient(\r\n    135deg,\r\n    rgba(255, 255, 255, 0.1),\r\n    rgba(255, 255, 255, 0)\r\n  );\r\n  backdrop-filter: blur(30px);\r\n  -webkit-backdrop-filter: blur(30px);\r\n  border: 1px solid rgba(255, 255, 255, 0.5);\r\n  border-radius: 1em;\r\n}\r\n\r\n.search-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 30svw;\r\n  height: fit-content;\r\n  margin: 4em auto;\r\n  position: relative;\r\n  z-index: 20;\r\n}\r\n\r\n#search-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#logo {\r\n  width: 70%;\r\n  max-width: 70%;\r\n  margin: 0 auto;\r\n}\r\n\r\n#symbol {\r\n  height: 3.5em;\r\n  border: 1px solid #fff;\r\n  border-radius: 2em;\r\n  margin: 1em auto;\r\n}\r\n\r\n.caret {\r\n  width: 0;\r\n  height: 0;\r\n  position: relative;\r\n  left: -0.45em;\r\n  top: 0.3em;\r\n  border-top: 0.45em solid transparent;\r\n  border-bottom: 0.45em solid transparent;\r\n  border-left: 0.45em solid #fff;\r\n}\r\n\r\n.instruction {\r\n  display: flex;\r\n}\r\n\r\n.instruction,\r\n#search,\r\n#submit {\r\n  font-size: clamp(1rem, 5vw, 1.5rem);\r\n  padding: 0.1em 0.5em;\r\n  margin: 0.5em 1em;\r\n}\r\n\r\n#submit {\r\n  margin-bottom: 1em;\r\n}\r\n\r\n#search:hover,\r\n#submit:hover {\r\n  background: linear-gradient(\r\n    135deg,\r\n    rgba(255, 255, 255, 0.5),\r\n    rgba(255, 255, 255, 0.3)\r\n  );\r\n}\r\n\r\n#submit:active,\r\n#close:active {\r\n  transform: scale(1.05);\r\n}\r\n\r\n#search::placeholder {\r\n  color: rgb(255,0,0);\r\n}\r\n\r\n@keyframes layerSwipe {\r\n  0% {\r\n    transform: translateX(-100px);\r\n    opacity: 0;\r\n  }\r\n\r\n  80% {\r\n    transform: translateX(-80px);\r\n    opacity: 0.2;\r\n  }\r\n\r\n  100% {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.result-section {\r\n  font-size: clamp(1rem, 5vw, 1.5rem);\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  width: max-content;\r\n  height: max-content;\r\n  animation: layerSwipe 1s ease-out;\r\n  -webkit-animation: layerSwipe 1s ease-out;\r\n  position: relative;\r\n  z-index: 20;\r\n}\r\n\r\n.result-bar {\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n#close {\r\n  color: #fff;\r\n  background-color: red;\r\n  font-size: 1em;\r\n  font-weight: 500;\r\n  height: 102%;\r\n  position: relative;\r\n  bottom: 2%;\r\n  right: -0.2%;\r\n  padding: 0 0.5em;\r\n}\r\n\r\n#close:hover {\r\n  background-color: rgb(250, 100, 0);\r\n}\r\n\r\n.result-panel {\r\n  text-shadow: 1px 1px 2px black;\r\n  margin: 1em;\r\n}\r\n\r\n.temp {\r\n  font-weight: 400;\r\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,\r\n    1px 1px 0 #000;\r\n  display: grid;\r\n  grid-template-columns: 3fr 3fr 1fr 1fr;\r\n  padding-left: 0.5em;\r\n  border: 1px solid rgba(255, 255, 255, 0.5);\r\n  border-radius: 1em;\r\n  margin-top: 0.5em;\r\n}\r\n\r\n@keyframes tempSwitch {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.celsius {\r\n  grid-column: 1;\r\n  color: #2196f3;\r\n  animation: tempSwitch 0.3s ease-in;\r\n}\r\n\r\n.fahrenheit {\r\n  grid-column: 1;\r\n  color: red;\r\n  animation: tempSwitch 0.3s ease-in;\r\n}\r\n\r\n.temp-switch {\r\n  grid-column: 4;\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 2.2em;\r\n  height: 1.2em;\r\n  margin-top: 0.15em;\r\n}\r\n\r\n.temp-switch input {\r\n  position: absolute;\r\n  opacity: 0;\r\n}\r\n\r\n.slider {\r\n  background-color: #2196f3;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  transition: 0.3s;\r\n  -webkit-transition: 0.3s;\r\n  cursor: pointer;\r\n}\r\n\r\n.slider:before {\r\n  background-color: #fff;\r\n  position: absolute;\r\n  content: '';\r\n  height: 1.1em;\r\n  width: 1.1em;\r\n  left: 0.05em;\r\n  bottom: 0.05em;\r\n  transition: 0.3s;\r\n  -webkit-transition: 0.3s;\r\n}\r\n\r\n#switch:checked + .slider {\r\n  background-color: red;\r\n}\r\n\r\n#switch:focus + .slider {\r\n  box-shadow: 0 0 1px red;\r\n}\r\n\r\n#switch:checked + .slider:before {\r\n  transform: translateX(26px);\r\n  -webkit-transform: translateX(26px);\r\n  -ms-transform: translateX(26px);\r\n}\r\n\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\n\r\n.gif {\r\n  height: 250px;\r\n  border: 1px solid rgba(255, 255, 255, 0.5);\r\n  border-radius: 1em;\r\n  margin: 1em auto 0;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n  visibility: collapse;\r\n}\r\n\r\n@media only screen and (min-width: 960px) {\r\n  .background-image {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n\r\n  .search-section {\r\n    grid-column: 2;\r\n  }\r\n\r\n  .result-section {\r\n    margin: 4em 1em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 960px) {\r\n  body {\r\n    overflow: hidden;\r\n  }\r\n\r\n  .background-image {\r\n    display: flex;\r\n    justify-content: start;\r\n  }\r\n  \r\n  .search-section {\r\n    width: 50svw;\r\n    height: 100svh;\r\n    margin: 0;\r\n  }\r\n  \r\n  .result-section {\r\n    width: 47svw;\r\n    margin: 0.5em 0.5em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  body {\r\n    overflow: hidden;\r\n  }\r\n\r\n  .background-image {\r\n    display: grid;\r\n    padding-top: env(safe-area-inset-top);\r\n    padding-bottom: env(safe-area-inset-bottom);\r\n    transform: translateY(-50vh);\r\n  }\r\n\r\n  .search-section {\r\n    grid-row: 2;\r\n    width: 100vw;\r\n    height: 120vh;\r\n  }\r\n\r\n  #logo {\r\n    margin-top: -22em;\r\n  }\r\n\r\n  #search-form {\r\n    padding-top: 5em;\r\n  }\r\n\r\n  .result-section {\r\n    visibility: visible;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n    animation: none;\r\n    -webkit-animation: none;\r\n  }\r\n\r\n  .slide-down {\r\n    transform: translateY(0);\r\n    transition: transform 1s ease-in;\r\n  }\r\n\r\n  .slide-up {\r\n    transform: translateY(-50vh);\r\n    transition: transform 1s ease-out;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\r\n*::before,\r\n*::after {\r\n  padding: 0;\r\n  border: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\r\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  /* outline: 1px solid red;  */\r\n}\r\n\r\nbody {\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none !important;\r\n  -ms-user-select: none;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\n.background-image {\r\n  background: url(./images/background.jpg) 100% center no-repeat;\r\n  background-size: cover;\r\n  position: absolute;\r\n  min-width: 100vw;\r\n  min-height: 100vh;\r\n  z-index: 0;\r\n}\r\n\r\n.search-section,\r\n.result-section,\r\n#search,\r\n#submit {\r\n  color: #fff;\r\n  font-size: clamp(0.5rem, 4vw, 1.5rem);\r\n  font-weight: 200;\r\n  background: linear-gradient(\r\n    135deg,\r\n    rgba(255, 255, 255, 0.1),\r\n    rgba(255, 255, 255, 0)\r\n  );\r\n  backdrop-filter: blur(30px);\r\n  -webkit-backdrop-filter: blur(30px);\r\n  border: 1px solid rgba(255, 255, 255, 0.5);\r\n  border-radius: 1em;\r\n}\r\n\r\n.search-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 30svw;\r\n  height: fit-content;\r\n  margin: 4em auto;\r\n  position: relative;\r\n  z-index: 20;\r\n}\r\n\r\n#search-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#logo {\r\n  width: 70%;\r\n  max-width: 70%;\r\n  margin: 0 auto;\r\n}\r\n\r\n#symbol {\r\n  height: 3.5em;\r\n  border: 1px solid #fff;\r\n  border-radius: 2em;\r\n  margin: 1em auto;\r\n}\r\n\r\n.caret {\r\n  width: 0;\r\n  height: 0;\r\n  position: relative;\r\n  left: -0.45em;\r\n  top: 0.3em;\r\n  border-top: 0.45em solid transparent;\r\n  border-bottom: 0.45em solid transparent;\r\n  border-left: 0.45em solid #fff;\r\n}\r\n\r\n.instruction {\r\n  display: flex;\r\n}\r\n\r\n.instruction,\r\n#search,\r\n#submit {\r\n  font-size: clamp(1rem, 5vw, 1.5rem);\r\n  padding: 0.1em 0.5em;\r\n  margin: 0.5em 1em;\r\n}\r\n\r\n#submit {\r\n  margin-bottom: 1em;\r\n}\r\n\r\n#search:hover,\r\n#submit:hover {\r\n  background: linear-gradient(\r\n    135deg,\r\n    rgba(255, 255, 255, 0.5),\r\n    rgba(255, 255, 255, 0.3)\r\n  );\r\n}\r\n\r\n#submit:active,\r\n#close:active {\r\n  transform: scale(1.05);\r\n}\r\n\r\n#search::placeholder {\r\n  color: rgb(255,0,0);\r\n}\r\n\r\n@keyframes layerSwipe {\r\n  0% {\r\n    transform: translateX(-100px);\r\n    opacity: 0;\r\n  }\r\n\r\n  80% {\r\n    transform: translateX(-80px);\r\n    opacity: 0.2;\r\n  }\r\n\r\n  100% {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.result-section {\r\n  font-size: clamp(1rem, 5vw, 1.5rem);\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  width: max-content;\r\n  height: max-content;\r\n  animation: layerSwipe 1s ease-out;\r\n  -webkit-animation: layerSwipe 1s ease-out;\r\n  position: relative;\r\n  z-index: 20;\r\n}\r\n\r\n.result-bar {\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n#close {\r\n  color: #fff;\r\n  background-color: red;\r\n  font-size: 1em;\r\n  font-weight: 500;\r\n  height: 102%;\r\n  position: relative;\r\n  bottom: 2%;\r\n  right: -0.2%;\r\n  padding: 0 0.5em;\r\n}\r\n\r\n#close:hover {\r\n  background-color: rgb(250, 100, 0);\r\n}\r\n\r\n.result-panel {\r\n  text-shadow: 1px 1px 2px black;\r\n  margin: 1em;\r\n}\r\n\r\n.temp {\r\n  font-weight: 400;\r\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,\r\n    1px 1px 0 #000;\r\n  display: grid;\r\n  grid-template-columns: 3fr 3fr 1fr 1fr;\r\n  padding-left: 0.5em;\r\n  border: 1px solid rgba(255, 255, 255, 0.5);\r\n  border-radius: 1em;\r\n  margin-top: 0.5em;\r\n}\r\n\r\n@keyframes tempSwitch {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.celsius {\r\n  grid-column: 1;\r\n  color: #2196f3;\r\n  animation: tempSwitch 0.3s ease-in;\r\n}\r\n\r\n.fahrenheit {\r\n  grid-column: 1;\r\n  color: red;\r\n  animation: tempSwitch 0.3s ease-in;\r\n}\r\n\r\n.temp-switch {\r\n  grid-column: 4;\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 2.2em;\r\n  height: 1.2em;\r\n  margin-top: 0.15em;\r\n}\r\n\r\n.temp-switch input {\r\n  position: absolute;\r\n  opacity: 0;\r\n}\r\n\r\n.slider {\r\n  background-color: #2196f3;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  transition: 0.3s;\r\n  -webkit-transition: 0.3s;\r\n  cursor: pointer;\r\n}\r\n\r\n.slider:before {\r\n  background-color: #fff;\r\n  position: absolute;\r\n  content: '';\r\n  height: 1.1em;\r\n  width: 1.1em;\r\n  left: 0.05em;\r\n  bottom: 0.05em;\r\n  transition: 0.3s;\r\n  -webkit-transition: 0.3s;\r\n}\r\n\r\n#switch:checked + .slider {\r\n  background-color: red;\r\n}\r\n\r\n#switch:focus + .slider {\r\n  box-shadow: 0 0 1px red;\r\n}\r\n\r\n#switch:checked + .slider:before {\r\n  transform: translateX(26px);\r\n  -webkit-transform: translateX(26px);\r\n  -ms-transform: translateX(26px);\r\n}\r\n\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\n\r\n.gif {\r\n  height: 250px;\r\n  border: 1px solid rgba(255, 255, 255, 0.5);\r\n  border-radius: 1em;\r\n  margin: 1em auto 0;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n  visibility: collapse;\r\n}\r\n\r\n@media only screen and (min-width: 960px) {\r\n  .background-image {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n\r\n  .search-section {\r\n    grid-column: 2;\r\n  }\r\n\r\n  .result-section {\r\n    margin: 4em 1em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 960px) {\r\n  body {\r\n    overflow: hidden;\r\n  }\r\n\r\n  .background-image {\r\n    display: flex;\r\n    justify-content: start;\r\n  }\r\n  \r\n  .search-section {\r\n    width: 50svw;\r\n    height: 100svh;\r\n    margin: 0;\r\n  }\r\n  \r\n  .result-section {\r\n    width: 47svw;\r\n    margin: 0.5em 0.5em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  body {\r\n    overflow: hidden;\r\n  }\r\n\r\n  .background-image {\r\n    display: grid;\r\n    padding-top: env(safe-area-inset-top);\r\n    padding-bottom: env(safe-area-inset-bottom);\r\n    transform: translateY(-50vh);\r\n  }\r\n\r\n  .search-section {\r\n    grid-row: 2;\r\n    width: 100vw;\r\n    height: 120vh;\r\n  }\r\n\r\n  #logo {\r\n    margin-top: -22em;\r\n  }\r\n\r\n  #search-form {\r\n    padding-top: 5em;\r\n  }\r\n\r\n  .result-section {\r\n    visibility: visible;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n    animation: none;\r\n    -webkit-animation: none;\r\n  }\r\n\r\n  .slide-down {\r\n    transform: translateY(0);\r\n    transition: transform 1s ease-in;\r\n  }\r\n\r\n  .slide-up {\r\n    transform: translateY(-50vh);\r\n    transition: transform 1s ease-out;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywySEFBMEM7QUFDdEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0Esd0VBQXdFLGlCQUFpQixnQkFBZ0IsZ0JBQWdCLDZCQUE2QixpS0FBaUssa0NBQWtDLE9BQU8sY0FBYyx3QkFBd0IsZ0NBQWdDLHdDQUF3Qyw0QkFBNEIsS0FBSyxnQkFBZ0Isc0JBQXNCLEtBQUssMkJBQTJCLHdGQUF3Riw2QkFBNkIseUJBQXlCLHVCQUF1Qix3QkFBd0IsaUJBQWlCLEtBQUsscUVBQXFFLGtCQUFrQiw0Q0FBNEMsdUJBQXVCLHdIQUF3SCxrQ0FBa0MsMENBQTBDLGlEQUFpRCx5QkFBeUIsS0FBSyx5QkFBeUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsbUJBQW1CLDBCQUEwQix1QkFBdUIseUJBQXlCLGtCQUFrQixLQUFLLHNCQUFzQixvQkFBb0IsNkJBQTZCLEtBQUssZUFBZSxpQkFBaUIscUJBQXFCLHFCQUFxQixLQUFLLGlCQUFpQixvQkFBb0IsNkJBQTZCLHlCQUF5Qix1QkFBdUIsS0FBSyxnQkFBZ0IsZUFBZSxnQkFBZ0IseUJBQXlCLG9CQUFvQixpQkFBaUIsMkNBQTJDLDhDQUE4QyxxQ0FBcUMsS0FBSyxzQkFBc0Isb0JBQW9CLEtBQUssOENBQThDLDBDQUEwQywyQkFBMkIsd0JBQXdCLEtBQUssaUJBQWlCLHlCQUF5QixLQUFLLHlDQUF5QywwSEFBMEgsS0FBSywwQ0FBMEMsNkJBQTZCLEtBQUssOEJBQThCLDBCQUEwQixLQUFLLCtCQUErQixVQUFVLHNDQUFzQyxtQkFBbUIsT0FBTyxlQUFlLHFDQUFxQyxxQkFBcUIsT0FBTyxnQkFBZ0IsaUNBQWlDLG1CQUFtQixPQUFPLEtBQUsseUJBQXlCLDBDQUEwQyxvQkFBb0IsMEJBQTBCLHlCQUF5QiwwQkFBMEIsd0NBQXdDLGdEQUFnRCx5QkFBeUIsa0JBQWtCLEtBQUsscUJBQXFCLGlEQUFpRCxrQkFBa0Isb0JBQW9CLGdDQUFnQyxLQUFLLGdCQUFnQixrQkFBa0IsNEJBQTRCLHFCQUFxQix1QkFBdUIsbUJBQW1CLHlCQUF5QixpQkFBaUIsbUJBQW1CLHVCQUF1QixLQUFLLHNCQUFzQix5Q0FBeUMsS0FBSyx1QkFBdUIscUNBQXFDLGtCQUFrQixLQUFLLGVBQWUsdUJBQXVCLDZGQUE2RixvQkFBb0IsNkNBQTZDLDBCQUEwQixpREFBaUQseUJBQXlCLHdCQUF3QixLQUFLLCtCQUErQixZQUFZLG1CQUFtQixPQUFPLGNBQWMsbUJBQW1CLE9BQU8sS0FBSyxrQkFBa0IscUJBQXFCLHFCQUFxQix5Q0FBeUMsS0FBSyxxQkFBcUIscUJBQXFCLGlCQUFpQix5Q0FBeUMsS0FBSyxzQkFBc0IscUJBQXFCLDRCQUE0Qix5QkFBeUIsbUJBQW1CLG9CQUFvQix5QkFBeUIsS0FBSyw0QkFBNEIseUJBQXlCLGlCQUFpQixLQUFLLGlCQUFpQixnQ0FBZ0MseUJBQXlCLGFBQWEsY0FBYyxlQUFlLGdCQUFnQix1QkFBdUIsK0JBQStCLHNCQUFzQixLQUFLLHdCQUF3Qiw2QkFBNkIseUJBQXlCLGtCQUFrQixvQkFBb0IsbUJBQW1CLG1CQUFtQixxQkFBcUIsdUJBQXVCLCtCQUErQixLQUFLLG1DQUFtQyw0QkFBNEIsS0FBSyxpQ0FBaUMsOEJBQThCLEtBQUssMENBQTBDLGtDQUFrQywwQ0FBMEMsc0NBQXNDLEtBQUssdUJBQXVCLDBCQUEwQixLQUFLLDhCQUE4Qix5QkFBeUIsS0FBSyxjQUFjLG9CQUFvQixpREFBaUQseUJBQXlCLHlCQUF5QixLQUFLLGlCQUFpQixvQkFBb0IsMkJBQTJCLEtBQUssbURBQW1ELHlCQUF5QixzQkFBc0IsOENBQThDLE9BQU8sMkJBQTJCLHVCQUF1QixPQUFPLDJCQUEyQix3QkFBd0IsT0FBTyxLQUFLLG1EQUFtRCxZQUFZLHlCQUF5QixPQUFPLDZCQUE2QixzQkFBc0IsK0JBQStCLE9BQU8sNkJBQTZCLHFCQUFxQix1QkFBdUIsa0JBQWtCLE9BQU8sNkJBQTZCLHFCQUFxQiw0QkFBNEIsT0FBTyxLQUFLLG1EQUFtRCxZQUFZLHlCQUF5QixPQUFPLDZCQUE2QixzQkFBc0IsOENBQThDLG9EQUFvRCxxQ0FBcUMsT0FBTywyQkFBMkIsb0JBQW9CLHFCQUFxQixzQkFBc0IsT0FBTyxpQkFBaUIsMEJBQTBCLE9BQU8sd0JBQXdCLHlCQUF5QixPQUFPLDJCQUEyQiw0QkFBNEIsdUJBQXVCLG9CQUFvQixxQkFBcUIsa0JBQWtCLHdCQUF3QixnQ0FBZ0MsT0FBTyx1QkFBdUIsaUNBQWlDLHlDQUF5QyxPQUFPLHFCQUFxQixxQ0FBcUMsMENBQTBDLE9BQU8sS0FBSyxXQUFXLGtGQUFrRixVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sT0FBTyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLFFBQVEsVUFBVSxZQUFZLGFBQWEsU0FBUyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sT0FBTyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sUUFBUSxLQUFLLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxPQUFPLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFB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Ozs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLFxcclxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXHJcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7ICAqL1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tncm91bmQtaW1hZ2Uge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSAxMDAlIGNlbnRlciBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbWluLXdpZHRoOiAxMDB2dztcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgei1pbmRleDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1zZWN0aW9uLFxcclxcbi5yZXN1bHQtc2VjdGlvbixcXHJcXG4jc2VhcmNoLFxcclxcbiNzdWJtaXQge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXNpemU6IGNsYW1wKDAuNXJlbSwgNHZ3LCAxLjVyZW0pO1xcclxcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgMTM1ZGVnLFxcclxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSksXFxyXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMClcXHJcXG4gICk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzBweCk7XFxyXFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigzMHB4KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMzBzdnc7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgbWFyZ2luOiA0ZW0gYXV0bztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IDIwO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbiNsb2dvIHtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBtYXgtd2lkdGg6IDcwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jc3ltYm9sIHtcXHJcXG4gIGhlaWdodDogMy41ZW07XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMmVtO1xcclxcbiAgbWFyZ2luOiAxZW0gYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmV0IHtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGVmdDogLTAuNDVlbTtcXHJcXG4gIHRvcDogMC4zZW07XFxyXFxuICBib3JkZXItdG9wOiAwLjQ1ZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItYm90dG9tOiAwLjQ1ZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItbGVmdDogMC40NWVtIHNvbGlkICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5pbnN0cnVjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5zdHJ1Y3Rpb24sXFxyXFxuI3NlYXJjaCxcXHJcXG4jc3VibWl0IHtcXHJcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgNXZ3LCAxLjVyZW0pO1xcclxcbiAgcGFkZGluZzogMC4xZW0gMC41ZW07XFxyXFxuICBtYXJnaW46IDAuNWVtIDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2g6aG92ZXIsXFxyXFxuI3N1Ym1pdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIDEzNWRlZyxcXHJcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxcclxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMylcXHJcXG4gICk7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQ6YWN0aXZlLFxcclxcbiNjbG9zZTphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaDo6cGxhY2Vob2xkZXIge1xcclxcbiAgY29sb3I6IHJnYigyNTUsMCwwKTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBsYXllclN3aXBlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA4MCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTgwcHgpO1xcclxcbiAgICBvcGFjaXR5OiAwLjI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucmVzdWx0LXNlY3Rpb24ge1xcclxcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCA1dncsIDEuNXJlbSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxyXFxuICBhbmltYXRpb246IGxheWVyU3dpcGUgMXMgZWFzZS1vdXQ7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogbGF5ZXJTd2lwZSAxcyBlYXNlLW91dDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IDIwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdWx0LWJhciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xvc2Uge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBoZWlnaHQ6IDEwMiU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3R0b206IDIlO1xcclxcbiAgcmlnaHQ6IC0wLjIlO1xcclxcbiAgcGFkZGluZzogMCAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2Nsb3NlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDEwMCwgMCk7XFxyXFxufVxcclxcblxcclxcbi5yZXN1bHQtcGFuZWwge1xcclxcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xcclxcbiAgbWFyZ2luOiAxZW07XFxyXFxufVxcclxcblxcclxcbi50ZW1wIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgIzAwMCwgMXB4IC0xcHggMCAjMDAwLCAtMXB4IDFweCAwICMwMDAsXFxyXFxuICAgIDFweCAxcHggMCAjMDAwO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDNmciAxZnIgMWZyO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHRlbXBTd2l0Y2gge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jZWxzaXVzIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgY29sb3I6ICMyMTk2ZjM7XFxyXFxuICBhbmltYXRpb246IHRlbXBTd2l0Y2ggMC4zcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4uZmFocmVuaGVpdCB7XFxyXFxuICBncmlkLWNvbHVtbjogMTtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICBhbmltYXRpb246IHRlbXBTd2l0Y2ggMC4zcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcC1zd2l0Y2gge1xcclxcbiAgZ3JpZC1jb2x1bW46IDQ7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogMi4yZW07XFxyXFxuICBoZWlnaHQ6IDEuMmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMC4xNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcC1zd2l0Y2ggaW5wdXQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlcjpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgaGVpZ2h0OiAxLjFlbTtcXHJcXG4gIHdpZHRoOiAxLjFlbTtcXHJcXG4gIGxlZnQ6IDAuMDVlbTtcXHJcXG4gIGJvdHRvbTogMC4wNWVtO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuI3N3aXRjaDpjaGVja2VkICsgLnNsaWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbiNzd2l0Y2g6Zm9jdXMgKyAuc2xpZGVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4jc3dpdGNoOmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXHJcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXIucm91bmQge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lmIHtcXHJcXG4gIGhlaWdodDogMjUwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxyXFxuICBtYXJnaW46IDFlbSBhdXRvIDA7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XFxyXFxuICAuYmFja2dyb3VuZC1pbWFnZSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VhcmNoLXNlY3Rpb24ge1xcclxcbiAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZXN1bHQtc2VjdGlvbiB7XFxyXFxuICAgIG1hcmdpbjogNGVtIDFlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYmFja2dyb3VuZC1pbWFnZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zZWFyY2gtc2VjdGlvbiB7XFxyXFxuICAgIHdpZHRoOiA1MHN2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDBzdmg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnJlc3VsdC1zZWN0aW9uIHtcXHJcXG4gICAgd2lkdGg6IDQ3c3Z3O1xcclxcbiAgICBtYXJnaW46IDAuNWVtIDAuNWVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5iYWNrZ3JvdW5kLWltYWdlIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgcGFkZGluZy10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHZoKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWFyY2gtc2VjdGlvbiB7XFxyXFxuICAgIGdyaWQtcm93OiAyO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTIwdmg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjbG9nbyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0yMmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3NlYXJjaC1mb3JtIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDVlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZXN1bHQtc2VjdGlvbiB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGFuaW1hdGlvbjogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2xpZGUtZG93biB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2xpZGUtdXAge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwdmgpO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1vdXQ7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLFVBQVU7RUFDVixTQUFTO0VBQ1QsU0FBUztFQUNULHNCQUFzQjtFQUN0Qjt3RUFDc0U7RUFDdEUsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixpQ0FBaUM7RUFDakMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlFQUE4RDtFQUM5RCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBOzs7O0VBSUUsV0FBVztFQUNYLHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEI7Ozs7R0FJQztFQUNELDJCQUEyQjtFQUMzQixtQ0FBbUM7RUFDbkMsMENBQTBDO0VBQzFDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7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RSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLDJDQUEyQztJQUMzQyw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1QsZUFBZTtJQUNmLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsaUNBQWlDO0VBQ25DO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90byxcXHJcXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxyXFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgcmVkOyAgKi9cXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5iYWNrZ3JvdW5kLWltYWdlIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybCguL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZykgMTAwJSBjZW50ZXIgbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIG1pbi13aWR0aDogMTAwdnc7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHotaW5kZXg6IDA7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtc2VjdGlvbixcXHJcXG4ucmVzdWx0LXNlY3Rpb24sXFxyXFxuI3NlYXJjaCxcXHJcXG4jc3VibWl0IHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1zaXplOiBjbGFtcCgwLjVyZW0sIDR2dywgMS41cmVtKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIDEzNWRlZyxcXHJcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpLFxcclxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApXFxyXFxuICApO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMwcHgpO1xcclxcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzBweCk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDMwc3Z3O1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gIG1hcmdpbjogNGVtIGF1dG87XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiAyMDtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nbyB7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgbWF4LXdpZHRoOiA3MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI3N5bWJvbCB7XFxyXFxuICBoZWlnaHQ6IDMuNWVtO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJlbTtcXHJcXG4gIG1hcmdpbjogMWVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jYXJldCB7XFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGxlZnQ6IC0wLjQ1ZW07XFxyXFxuICB0b3A6IDAuM2VtO1xcclxcbiAgYm9yZGVyLXRvcDogMC40NWVtIHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMC40NWVtIHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLWxlZnQ6IDAuNDVlbSBzb2xpZCAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5zdHJ1Y3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmluc3RydWN0aW9uLFxcclxcbiNzZWFyY2gsXFxyXFxuI3N1Ym1pdCB7XFxyXFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDV2dywgMS41cmVtKTtcXHJcXG4gIHBhZGRpbmc6IDAuMWVtIDAuNWVtO1xcclxcbiAgbWFyZ2luOiAwLjVlbSAxZW07XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoOmhvdmVyLFxcclxcbiNzdWJtaXQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAxMzVkZWcsXFxyXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcXHJcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpXFxyXFxuICApO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0OmFjdGl2ZSxcXHJcXG4jY2xvc2U6YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2g6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGNvbG9yOiByZ2IoMjU1LDAsMCk7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbGF5ZXJTd2lwZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgODAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04MHB4KTtcXHJcXG4gICAgb3BhY2l0eTogMC4yO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnJlc3VsdC1zZWN0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgNXZ3LCAxLjVyZW0pO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbiAgYW5pbWF0aW9uOiBsYXllclN3aXBlIDFzIGVhc2Utb3V0O1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IGxheWVyU3dpcGUgMXMgZWFzZS1vdXQ7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiAyMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3VsdC1iYXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuI2Nsb3NlIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgZm9udC1zaXplOiAxZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgaGVpZ2h0OiAxMDIlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm90dG9tOiAyJTtcXHJcXG4gIHJpZ2h0OiAtMC4yJTtcXHJcXG4gIHBhZGRpbmc6IDAgMC41ZW07XFxyXFxufVxcclxcblxcclxcbiNjbG9zZTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAxMDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdWx0LXBhbmVsIHtcXHJcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcXHJcXG4gIG1hcmdpbjogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcCB7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAwICMwMDAsIDFweCAtMXB4IDAgIzAwMCwgLTFweCAxcHggMCAjMDAwLFxcclxcbiAgICAxcHggMXB4IDAgIzAwMDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAzZnIgMWZyIDFmcjtcXHJcXG4gIHBhZGRpbmctbGVmdDogMC41ZW07XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxyXFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyB0ZW1wU3dpdGNoIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY2Vsc2l1cyB7XFxyXFxuICBncmlkLWNvbHVtbjogMTtcXHJcXG4gIGNvbG9yOiAjMjE5NmYzO1xcclxcbiAgYW5pbWF0aW9uOiB0ZW1wU3dpdGNoIDAuM3MgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZhaHJlbmhlaXQge1xcclxcbiAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgYW5pbWF0aW9uOiB0ZW1wU3dpdGNoIDAuM3MgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXAtc3dpdGNoIHtcXHJcXG4gIGdyaWQtY29sdW1uOiA0O1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDIuMmVtO1xcclxcbiAgaGVpZ2h0OiAxLjJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDAuMTVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXAtc3dpdGNoIGlucHV0IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXI6YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIGhlaWdodDogMS4xZW07XFxyXFxuICB3aWR0aDogMS4xZW07XFxyXFxuICBsZWZ0OiAwLjA1ZW07XFxyXFxuICBib3R0b206IDAuMDVlbTtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XFxyXFxufVxcclxcblxcclxcbiNzd2l0Y2g6Y2hlY2tlZCArIC5zbGlkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4jc3dpdGNoOmZvY3VzICsgLnNsaWRlciB7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMXB4IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuI3N3aXRjaDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxyXFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLnJvdW5kIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZiB7XFxyXFxuICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcclxcbiAgbWFyZ2luOiAxZW0gYXV0byAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xcclxcbiAgLmJhY2tncm91bmQtaW1hZ2Uge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlYXJjaC1zZWN0aW9uIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVzdWx0LXNlY3Rpb24ge1xcclxcbiAgICBtYXJnaW46IDRlbSAxZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcXHJcXG4gIGJvZHkge1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJhY2tncm91bmQtaW1hZ2Uge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2VhcmNoLXNlY3Rpb24ge1xcclxcbiAgICB3aWR0aDogNTBzdnc7XFxyXFxuICAgIGhlaWdodDogMTAwc3ZoO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5yZXN1bHQtc2VjdGlvbiB7XFxyXFxuICAgIHdpZHRoOiA0N3N2dztcXHJcXG4gICAgbWFyZ2luOiAwLjVlbSAwLjVlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYmFja2dyb3VuZC1pbWFnZSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHBhZGRpbmctdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCk7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTB2aCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VhcmNoLXNlY3Rpb24ge1xcclxcbiAgICBncmlkLXJvdzogMjtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEyMHZoO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2xvZ28ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMjJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNzZWFyY2gtZm9ybSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA1ZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVzdWx0LXNlY3Rpb24ge1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBhbmltYXRpb246IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNsaWRlLWRvd24ge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlLWluO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNsaWRlLXVwIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHZoKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2Utb3V0O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==