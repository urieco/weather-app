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
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::before,\r\n*::after {\r\n  padding: 0;\r\n  border: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\r\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  /* outline: 1px solid red;  */\r\n}\r\n\r\nbody {\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none !important;\r\n  -ms-user-select: none;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\n.background-image {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") 100% center no-repeat;\r\n  background-size: cover;\r\n  position: absolute;\r\n  min-width: 100vw;\r\n  min-height: 100vh;\r\n  z-index: 0;\r\n}\r\n\r\n.search-section,\r\n.result-section,\r\n#search,\r\n#submit {\r\n  color: #fff;\r\n  font-size: clamp(0.5rem, 4vw, 1.5rem);\r\n  font-weight: 200;\r\n  background: linear-gradient(\r\n    135deg,\r\n    rgba(255, 255, 255, 0.1),\r\n    rgba(255, 255, 255, 0)\r\n  );\r\n  backdrop-filter: blur(30px);\r\n  -webkit-backdrop-filter: blur(30px);\r\n  border: 1px solid rgba(255, 255, 255, 0.5);\r\n  border-radius: 1em;\r\n}\r\n\r\n.search-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 30svw;\r\n  height: fit-content;\r\n  margin: 4em auto;\r\n  position: relative;\r\n  z-index: 20;\r\n}\r\n\r\n#search-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#logo {\r\n  width: 70%;\r\n  max-width: 70%;\r\n  margin: 0 auto;\r\n}\r\n\r\n#symbol {\r\n  height: 3.5em;\r\n  border: 1px solid #fff;\r\n  border-radius: 2em;\r\n  margin: 1em auto;\r\n}\r\n\r\n.caret {\r\n  width: 0;\r\n  height: 0;\r\n  position: relative;\r\n  left: -0.45em;\r\n  top: 0.3em;\r\n  border-top: 0.45em solid transparent;\r\n  border-bottom: 0.45em solid transparent;\r\n  border-left: 0.45em solid #fff;\r\n}\r\n\r\n.instruction {\r\n  display: flex;\r\n}\r\n\r\n.instruction,\r\n#search,\r\n#submit {\r\n  font-size: clamp(1rem, 5vw, 1.5rem);\r\n  padding: 0.1em 0.5em;\r\n  margin: 0.5em 1em;\r\n}\r\n\r\n#submit {\r\n  margin-bottom: 1em;\r\n}\r\n\r\n#search:hover,\r\n#submit:hover {\r\n  background: linear-gradient(\r\n    135deg,\r\n    rgba(255, 255, 255, 0.5),\r\n    rgba(255, 255, 255, 0.3)\r\n  );\r\n}\r\n\r\n#submit:active,\r\n#close:active {\r\n  transform: scale(1.05);\r\n}\r\n\r\n#search::placeholder {\r\n  color: rgb(255,0,0);\r\n}\r\n\r\n@keyframes layerSwipe {\r\n  0% {\r\n    transform: translateX(-100px);\r\n    opacity: 0;\r\n  }\r\n\r\n  80% {\r\n    transform: translateX(-80px);\r\n    opacity: 0.2;\r\n  }\r\n\r\n  100% {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.result-section {\r\n  font-size: clamp(1rem, 5vw, 1.5rem);\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  width: max-content;\r\n  height: max-content;\r\n  animation: layerSwipe 1s ease-out;\r\n  -webkit-animation: layerSwipe 1s ease-out;\r\n  position: relative;\r\n  z-index: 20;\r\n}\r\n\r\n.result-bar {\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n#close {\r\n  color: #fff;\r\n  background-color: red;\r\n  font-size: 1em;\r\n  font-weight: 500;\r\n  height: 102%;\r\n  position: relative;\r\n  bottom: 2%;\r\n  right: -0.2%;\r\n  padding: 0 0.5em;\r\n}\r\n\r\n#close:hover {\r\n  background-color: rgb(250, 100, 0);\r\n}\r\n\r\n.result-panel {\r\n  text-shadow: 1px 1px 2px black;\r\n  margin: 1em;\r\n}\r\n\r\n.temp {\r\n  font-weight: 400;\r\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,\r\n    1px 1px 0 #000;\r\n  display: grid;\r\n  grid-template-columns: 3fr 3fr 1fr 1fr;\r\n  padding-left: 0.5em;\r\n  border: 1px solid rgba(255, 255, 255, 0.5);\r\n  border-radius: 1em;\r\n  margin-top: 0.5em;\r\n}\r\n\r\n@keyframes tempSwitch {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.celsius {\r\n  grid-column: 1;\r\n  color: #2196f3;\r\n  animation: tempSwitch 0.3s ease-in;\r\n}\r\n\r\n.fahrenheit {\r\n  grid-column: 1;\r\n  color: red;\r\n  animation: tempSwitch 0.3s ease-in;\r\n}\r\n\r\n.temp-switch {\r\n  grid-column: 4;\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 2.2em;\r\n  height: 1.2em;\r\n  margin-top: 0.15em;\r\n}\r\n\r\n.temp-switch input {\r\n  position: absolute;\r\n  opacity: 0;\r\n}\r\n\r\n.slider {\r\n  background-color: #2196f3;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  transition: 0.3s;\r\n  -webkit-transition: 0.3s;\r\n  cursor: pointer;\r\n}\r\n\r\n.slider:before {\r\n  background-color: #fff;\r\n  position: absolute;\r\n  content: '';\r\n  height: 1.1em;\r\n  width: 1.1em;\r\n  left: 0.05em;\r\n  bottom: 0.05em;\r\n  transition: 0.3s;\r\n  -webkit-transition: 0.3s;\r\n}\r\n\r\n#switch:checked + .slider {\r\n  background-color: red;\r\n}\r\n\r\n#switch:focus + .slider {\r\n  box-shadow: 0 0 1px red;\r\n}\r\n\r\n#switch:checked + .slider:before {\r\n  transform: translateX(26px);\r\n  -webkit-transform: translateX(26px);\r\n  -ms-transform: translateX(26px);\r\n}\r\n\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\n\r\n.gif {\r\n  height: 250px;\r\n  border: 1px solid rgba(255, 255, 255, 0.5);\r\n  border-radius: 1em;\r\n  margin: 1em auto 0;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n  visibility: collapse;\r\n}\r\n\r\n@media only screen and (min-width: 960px) {\r\n  .background-image {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n\r\n  .search-section {\r\n    grid-column: 2;\r\n  }\r\n\r\n  .result-section {\r\n    margin: 4em 1em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 960px) {\r\n  body {\r\n    overflow: hidden;\r\n  }\r\n\r\n  .background-image {\r\n    display: flex;\r\n    justify-content: start;\r\n  }\r\n  \r\n  .search-section {\r\n    width: 50svw;\r\n    height: 100svh;\r\n    margin: 0;\r\n  }\r\n  \r\n  .result-section {\r\n    width: 47svw;\r\n    margin: 0.5em 0.5em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  body {\r\n    overflow: hidden;\r\n  }\r\n\r\n  .background-image {\r\n    display: grid;\r\n    transform: translateY(-32.7%);\r\n  }\r\n\r\n  .search-section {\r\n    grid-row: 2;\r\n    width: 100vw;\r\n    height: 120vh;\r\n  }\r\n\r\n  #logo {\r\n    margin-top: -22em;\r\n  }\r\n\r\n  .result-section {\r\n    visibility: visible;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 1em 0;\r\n    animation: none;\r\n    -webkit-animation: none;\r\n  }\r\n\r\n  .slide-down {\r\n    transform: translateY(0);\r\n    transition: transform 1s ease-in;\r\n  }\r\n\r\n  .slide-up {\r\n    transform: translateY(-32.7%);\r\n    transition: transform 1s ease-out;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\r\n*::before,\r\n*::after {\r\n  padding: 0;\r\n  border: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\r\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  /* outline: 1px solid red;  */\r\n}\r\n\r\nbody {\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none !important;\r\n  -ms-user-select: none;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\n.background-image {\r\n  background: url(./images/background.jpg) 100% center no-repeat;\r\n  background-size: cover;\r\n  position: absolute;\r\n  min-width: 100vw;\r\n  min-height: 100vh;\r\n  z-index: 0;\r\n}\r\n\r\n.search-section,\r\n.result-section,\r\n#search,\r\n#submit {\r\n  color: #fff;\r\n  font-size: clamp(0.5rem, 4vw, 1.5rem);\r\n  font-weight: 200;\r\n  background: linear-gradient(\r\n    135deg,\r\n    rgba(255, 255, 255, 0.1),\r\n    rgba(255, 255, 255, 0)\r\n  );\r\n  backdrop-filter: blur(30px);\r\n  -webkit-backdrop-filter: blur(30px);\r\n  border: 1px solid rgba(255, 255, 255, 0.5);\r\n  border-radius: 1em;\r\n}\r\n\r\n.search-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 30svw;\r\n  height: fit-content;\r\n  margin: 4em auto;\r\n  position: relative;\r\n  z-index: 20;\r\n}\r\n\r\n#search-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#logo {\r\n  width: 70%;\r\n  max-width: 70%;\r\n  margin: 0 auto;\r\n}\r\n\r\n#symbol {\r\n  height: 3.5em;\r\n  border: 1px solid #fff;\r\n  border-radius: 2em;\r\n  margin: 1em auto;\r\n}\r\n\r\n.caret {\r\n  width: 0;\r\n  height: 0;\r\n  position: relative;\r\n  left: -0.45em;\r\n  top: 0.3em;\r\n  border-top: 0.45em solid transparent;\r\n  border-bottom: 0.45em solid transparent;\r\n  border-left: 0.45em solid #fff;\r\n}\r\n\r\n.instruction {\r\n  display: flex;\r\n}\r\n\r\n.instruction,\r\n#search,\r\n#submit {\r\n  font-size: clamp(1rem, 5vw, 1.5rem);\r\n  padding: 0.1em 0.5em;\r\n  margin: 0.5em 1em;\r\n}\r\n\r\n#submit {\r\n  margin-bottom: 1em;\r\n}\r\n\r\n#search:hover,\r\n#submit:hover {\r\n  background: linear-gradient(\r\n    135deg,\r\n    rgba(255, 255, 255, 0.5),\r\n    rgba(255, 255, 255, 0.3)\r\n  );\r\n}\r\n\r\n#submit:active,\r\n#close:active {\r\n  transform: scale(1.05);\r\n}\r\n\r\n#search::placeholder {\r\n  color: rgb(255,0,0);\r\n}\r\n\r\n@keyframes layerSwipe {\r\n  0% {\r\n    transform: translateX(-100px);\r\n    opacity: 0;\r\n  }\r\n\r\n  80% {\r\n    transform: translateX(-80px);\r\n    opacity: 0.2;\r\n  }\r\n\r\n  100% {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.result-section {\r\n  font-size: clamp(1rem, 5vw, 1.5rem);\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  width: max-content;\r\n  height: max-content;\r\n  animation: layerSwipe 1s ease-out;\r\n  -webkit-animation: layerSwipe 1s ease-out;\r\n  position: relative;\r\n  z-index: 20;\r\n}\r\n\r\n.result-bar {\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n#close {\r\n  color: #fff;\r\n  background-color: red;\r\n  font-size: 1em;\r\n  font-weight: 500;\r\n  height: 102%;\r\n  position: relative;\r\n  bottom: 2%;\r\n  right: -0.2%;\r\n  padding: 0 0.5em;\r\n}\r\n\r\n#close:hover {\r\n  background-color: rgb(250, 100, 0);\r\n}\r\n\r\n.result-panel {\r\n  text-shadow: 1px 1px 2px black;\r\n  margin: 1em;\r\n}\r\n\r\n.temp {\r\n  font-weight: 400;\r\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,\r\n    1px 1px 0 #000;\r\n  display: grid;\r\n  grid-template-columns: 3fr 3fr 1fr 1fr;\r\n  padding-left: 0.5em;\r\n  border: 1px solid rgba(255, 255, 255, 0.5);\r\n  border-radius: 1em;\r\n  margin-top: 0.5em;\r\n}\r\n\r\n@keyframes tempSwitch {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.celsius {\r\n  grid-column: 1;\r\n  color: #2196f3;\r\n  animation: tempSwitch 0.3s ease-in;\r\n}\r\n\r\n.fahrenheit {\r\n  grid-column: 1;\r\n  color: red;\r\n  animation: tempSwitch 0.3s ease-in;\r\n}\r\n\r\n.temp-switch {\r\n  grid-column: 4;\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 2.2em;\r\n  height: 1.2em;\r\n  margin-top: 0.15em;\r\n}\r\n\r\n.temp-switch input {\r\n  position: absolute;\r\n  opacity: 0;\r\n}\r\n\r\n.slider {\r\n  background-color: #2196f3;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  transition: 0.3s;\r\n  -webkit-transition: 0.3s;\r\n  cursor: pointer;\r\n}\r\n\r\n.slider:before {\r\n  background-color: #fff;\r\n  position: absolute;\r\n  content: '';\r\n  height: 1.1em;\r\n  width: 1.1em;\r\n  left: 0.05em;\r\n  bottom: 0.05em;\r\n  transition: 0.3s;\r\n  -webkit-transition: 0.3s;\r\n}\r\n\r\n#switch:checked + .slider {\r\n  background-color: red;\r\n}\r\n\r\n#switch:focus + .slider {\r\n  box-shadow: 0 0 1px red;\r\n}\r\n\r\n#switch:checked + .slider:before {\r\n  transform: translateX(26px);\r\n  -webkit-transform: translateX(26px);\r\n  -ms-transform: translateX(26px);\r\n}\r\n\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\n\r\n.gif {\r\n  height: 250px;\r\n  border: 1px solid rgba(255, 255, 255, 0.5);\r\n  border-radius: 1em;\r\n  margin: 1em auto 0;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n  visibility: collapse;\r\n}\r\n\r\n@media only screen and (min-width: 960px) {\r\n  .background-image {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n\r\n  .search-section {\r\n    grid-column: 2;\r\n  }\r\n\r\n  .result-section {\r\n    margin: 4em 1em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 960px) {\r\n  body {\r\n    overflow: hidden;\r\n  }\r\n\r\n  .background-image {\r\n    display: flex;\r\n    justify-content: start;\r\n  }\r\n  \r\n  .search-section {\r\n    width: 50svw;\r\n    height: 100svh;\r\n    margin: 0;\r\n  }\r\n  \r\n  .result-section {\r\n    width: 47svw;\r\n    margin: 0.5em 0.5em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  body {\r\n    overflow: hidden;\r\n  }\r\n\r\n  .background-image {\r\n    display: grid;\r\n    transform: translateY(-32.7%);\r\n  }\r\n\r\n  .search-section {\r\n    grid-row: 2;\r\n    width: 100vw;\r\n    height: 120vh;\r\n  }\r\n\r\n  #logo {\r\n    margin-top: -22em;\r\n  }\r\n\r\n  .result-section {\r\n    visibility: visible;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 1em 0;\r\n    animation: none;\r\n    -webkit-animation: none;\r\n  }\r\n\r\n  .slide-down {\r\n    transform: translateY(0);\r\n    transition: transform 1s ease-in;\r\n  }\r\n\r\n  .slide-up {\r\n    transform: translateY(-32.7%);\r\n    transition: transform 1s ease-out;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxPQUFPLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSx1REFBdUQsaUJBQWlCLGdCQUFnQixnQkFBZ0IsNkJBQTZCLGlLQUFpSyxrQ0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sXFxyXFxuICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcclxcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIHJlZDsgICovXFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja2dyb3VuZC1pbWFnZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIDEwMCUgY2VudGVyIG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBtaW4td2lkdGg6IDEwMHZ3O1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICB6LWluZGV4OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXNlY3Rpb24sXFxyXFxuLnJlc3VsdC1zZWN0aW9uLFxcclxcbiNzZWFyY2gsXFxyXFxuI3N1Ym1pdCB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMC41cmVtLCA0dncsIDEuNXJlbSk7XFxyXFxuICBmb250LXdlaWdodDogMjAwO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAxMzVkZWcsXFxyXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSxcXHJcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKVxcclxcbiAgKTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzMHB4KTtcXHJcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMwcHgpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAzMHN2dztcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICBtYXJnaW46IDRlbSBhdXRvO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogMjA7XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2gtZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ28ge1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIG1heC13aWR0aDogNzAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbiNzeW1ib2wge1xcclxcbiAgaGVpZ2h0OiAzLjVlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyZW07XFxyXFxuICBtYXJnaW46IDFlbSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZXQge1xcclxcbiAgd2lkdGg6IDA7XFxyXFxuICBoZWlnaHQ6IDA7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBsZWZ0OiAtMC40NWVtO1xcclxcbiAgdG9wOiAwLjNlbTtcXHJcXG4gIGJvcmRlci10b3A6IDAuNDVlbSBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDAuNDVlbSBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci1sZWZ0OiAwLjQ1ZW0gc29saWQgI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmluc3RydWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5pbnN0cnVjdGlvbixcXHJcXG4jc2VhcmNoLFxcclxcbiNzdWJtaXQge1xcclxcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCA1dncsIDEuNXJlbSk7XFxyXFxuICBwYWRkaW5nOiAwLjFlbSAwLjVlbTtcXHJcXG4gIG1hcmdpbjogMC41ZW0gMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaDpob3ZlcixcXHJcXG4jc3VibWl0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgMTM1ZGVnLFxcclxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXFxyXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKVxcclxcbiAgKTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdDphY3RpdmUsXFxyXFxuI2Nsb3NlOmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoOjpwbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogcmdiKDI1NSwwLDApO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGxheWVyU3dpcGUge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDgwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtODBweCk7XFxyXFxuICAgIG9wYWNpdHk6IDAuMjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5yZXN1bHQtc2VjdGlvbiB7XFxyXFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDV2dywgMS41cmVtKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG4gIGFuaW1hdGlvbjogbGF5ZXJTd2lwZSAxcyBlYXNlLW91dDtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsYXllclN3aXBlIDFzIGVhc2Utb3V0O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogMjA7XFxyXFxufVxcclxcblxcclxcbi5yZXN1bHQtYmFyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbiNjbG9zZSB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGhlaWdodDogMTAyJTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJvdHRvbTogMiU7XFxyXFxuICByaWdodDogLTAuMiU7XFxyXFxuICBwYWRkaW5nOiAwIDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xvc2U6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMTAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3VsdC1wYW5lbCB7XFxyXFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XFxyXFxuICBtYXJnaW46IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXAge1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCAjMDAwLCAxcHggLTFweCAwICMwMDAsIC0xcHggMXB4IDAgIzAwMCxcXHJcXG4gICAgMXB4IDFweCAwICMwMDA7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgM2ZyIDFmciAxZnI7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcclxcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgdGVtcFN3aXRjaCB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRvIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNlbHNpdXMge1xcclxcbiAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICBjb2xvcjogIzIxOTZmMztcXHJcXG4gIGFuaW1hdGlvbjogdGVtcFN3aXRjaCAwLjNzIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbi5mYWhyZW5oZWl0IHtcXHJcXG4gIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIGFuaW1hdGlvbjogdGVtcFN3aXRjaCAwLjNzIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbi50ZW1wLXN3aXRjaCB7XFxyXFxuICBncmlkLWNvbHVtbjogNDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAyLjJlbTtcXHJcXG4gIGhlaWdodDogMS4yZW07XFxyXFxuICBtYXJnaW4tdG9wOiAwLjE1ZW07XFxyXFxufVxcclxcblxcclxcbi50ZW1wLXN3aXRjaCBpbnB1dCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyOmJlZm9yZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBoZWlnaHQ6IDEuMWVtO1xcclxcbiAgd2lkdGg6IDEuMWVtO1xcclxcbiAgbGVmdDogMC4wNWVtO1xcclxcbiAgYm90dG9tOiAwLjA1ZW07XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4jc3dpdGNoOmNoZWNrZWQgKyAuc2xpZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuI3N3aXRjaDpmb2N1cyArIC5zbGlkZXIge1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDFweCByZWQ7XFxyXFxufVxcclxcblxcclxcbiNzd2l0Y2g6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcclxcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci5yb3VuZCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5naWYge1xcclxcbiAgaGVpZ2h0OiAyNTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXHJcXG4gIG1hcmdpbjogMWVtIGF1dG8gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgdmlzaWJpbGl0eTogY29sbGFwc2U7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcXHJcXG4gIC5iYWNrZ3JvdW5kLWltYWdlIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWFyY2gtc2VjdGlvbiB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJlc3VsdC1zZWN0aW9uIHtcXHJcXG4gICAgbWFyZ2luOiA0ZW0gMWVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5iYWNrZ3JvdW5kLWltYWdlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnNlYXJjaC1zZWN0aW9uIHtcXHJcXG4gICAgd2lkdGg6IDUwc3Z3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHN2aDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAucmVzdWx0LXNlY3Rpb24ge1xcclxcbiAgICB3aWR0aDogNDdzdnc7XFxyXFxuICAgIG1hcmdpbjogMC41ZW0gMC41ZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gIGJvZHkge1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJhY2tncm91bmQtaW1hZ2Uge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMyLjclKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWFyY2gtc2VjdGlvbiB7XFxyXFxuICAgIGdyaWQtcm93OiAyO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTIwdmg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjbG9nbyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0yMmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJlc3VsdC1zZWN0aW9uIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMWVtIDA7XFxyXFxuICAgIGFuaW1hdGlvbjogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2xpZGUtZG93biB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2xpZGUtdXAge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMyLjclKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2Utb3V0O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6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QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLFxcclxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXHJcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7ICAqL1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tncm91bmQtaW1hZ2Uge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKC4vaW1hZ2VzL2JhY2tncm91bmQuanBnKSAxMDAlIGNlbnRlciBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbWluLXdpZHRoOiAxMDB2dztcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgei1pbmRleDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1zZWN0aW9uLFxcclxcbi5yZXN1bHQtc2VjdGlvbixcXHJcXG4jc2VhcmNoLFxcclxcbiNzdWJtaXQge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXNpemU6IGNsYW1wKDAuNXJlbSwgNHZ3LCAxLjVyZW0pO1xcclxcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgMTM1ZGVnLFxcclxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSksXFxyXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMClcXHJcXG4gICk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzBweCk7XFxyXFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigzMHB4KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMzBzdnc7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgbWFyZ2luOiA0ZW0gYXV0bztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IDIwO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbiNsb2dvIHtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBtYXgtd2lkdGg6IDcwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jc3ltYm9sIHtcXHJcXG4gIGhlaWdodDogMy41ZW07XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMmVtO1xcclxcbiAgbWFyZ2luOiAxZW0gYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmV0IHtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGVmdDogLTAuNDVlbTtcXHJcXG4gIHRvcDogMC4zZW07XFxyXFxuICBib3JkZXItdG9wOiAwLjQ1ZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItYm90dG9tOiAwLjQ1ZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItbGVmdDogMC40NWVtIHNvbGlkICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5pbnN0cnVjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5zdHJ1Y3Rpb24sXFxyXFxuI3NlYXJjaCxcXHJcXG4jc3VibWl0IHtcXHJcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgNXZ3LCAxLjVyZW0pO1xcclxcbiAgcGFkZGluZzogMC4xZW0gMC41ZW07XFxyXFxuICBtYXJnaW46IDAuNWVtIDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2g6aG92ZXIsXFxyXFxuI3N1Ym1pdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIDEzNWRlZyxcXHJcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxcclxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMylcXHJcXG4gICk7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQ6YWN0aXZlLFxcclxcbiNjbG9zZTphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaDo6cGxhY2Vob2xkZXIge1xcclxcbiAgY29sb3I6IHJnYigyNTUsMCwwKTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBsYXllclN3aXBlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA4MCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTgwcHgpO1xcclxcbiAgICBvcGFjaXR5OiAwLjI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucmVzdWx0LXNlY3Rpb24ge1xcclxcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCA1dncsIDEuNXJlbSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxyXFxuICBhbmltYXRpb246IGxheWVyU3dpcGUgMXMgZWFzZS1vdXQ7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogbGF5ZXJTd2lwZSAxcyBlYXNlLW91dDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IDIwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdWx0LWJhciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xvc2Uge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBoZWlnaHQ6IDEwMiU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3R0b206IDIlO1xcclxcbiAgcmlnaHQ6IC0wLjIlO1xcclxcbiAgcGFkZGluZzogMCAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2Nsb3NlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDEwMCwgMCk7XFxyXFxufVxcclxcblxcclxcbi5yZXN1bHQtcGFuZWwge1xcclxcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xcclxcbiAgbWFyZ2luOiAxZW07XFxyXFxufVxcclxcblxcclxcbi50ZW1wIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgIzAwMCwgMXB4IC0xcHggMCAjMDAwLCAtMXB4IDFweCAwICMwMDAsXFxyXFxuICAgIDFweCAxcHggMCAjMDAwO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDNmciAxZnIgMWZyO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHRlbXBTd2l0Y2gge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jZWxzaXVzIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgY29sb3I6ICMyMTk2ZjM7XFxyXFxuICBhbmltYXRpb246IHRlbXBTd2l0Y2ggMC4zcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4uZmFocmVuaGVpdCB7XFxyXFxuICBncmlkLWNvbHVtbjogMTtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICBhbmltYXRpb246IHRlbXBTd2l0Y2ggMC4zcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcC1zd2l0Y2gge1xcclxcbiAgZ3JpZC1jb2x1bW46IDQ7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogMi4yZW07XFxyXFxuICBoZWlnaHQ6IDEuMmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMC4xNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcC1zd2l0Y2ggaW5wdXQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlcjpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgaGVpZ2h0OiAxLjFlbTtcXHJcXG4gIHdpZHRoOiAxLjFlbTtcXHJcXG4gIGxlZnQ6IDAuMDVlbTtcXHJcXG4gIGJvdHRvbTogMC4wNWVtO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuI3N3aXRjaDpjaGVja2VkICsgLnNsaWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbiNzd2l0Y2g6Zm9jdXMgKyAuc2xpZGVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4jc3dpdGNoOmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXHJcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXIucm91bmQge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lmIHtcXHJcXG4gIGhlaWdodDogMjUwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxyXFxuICBtYXJnaW46IDFlbSBhdXRvIDA7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XFxyXFxuICAuYmFja2dyb3VuZC1pbWFnZSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VhcmNoLXNlY3Rpb24ge1xcclxcbiAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZXN1bHQtc2VjdGlvbiB7XFxyXFxuICAgIG1hcmdpbjogNGVtIDFlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYmFja2dyb3VuZC1pbWFnZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zZWFyY2gtc2VjdGlvbiB7XFxyXFxuICAgIHdpZHRoOiA1MHN2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDBzdmg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnJlc3VsdC1zZWN0aW9uIHtcXHJcXG4gICAgd2lkdGg6IDQ3c3Z3O1xcclxcbiAgICBtYXJnaW46IDAuNWVtIDAuNWVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5iYWNrZ3JvdW5kLWltYWdlIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMi43JSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VhcmNoLXNlY3Rpb24ge1xcclxcbiAgICBncmlkLXJvdzogMjtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEyMHZoO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2xvZ28ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMjJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZXN1bHQtc2VjdGlvbiB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDFlbSAwO1xcclxcbiAgICBhbmltYXRpb246IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNsaWRlLWRvd24ge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlLWluO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNsaWRlLXVwIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMi43JSk7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlLW91dDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=