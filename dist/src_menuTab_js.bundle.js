"use strict";
(self["webpackChunkrestaurantwebsite"] = self["webpackChunkrestaurantwebsite"] || []).push([["src_menuTab_js"],{

/***/ "./src/menuTab.js":
/*!************************!*\
  !*** ./src/menuTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuItemOne: () => (/* binding */ menuItemOne),
/* harmony export */   menuItemOneText: () => (/* binding */ menuItemOneText),
/* harmony export */   menuItemThree: () => (/* binding */ menuItemThree),
/* harmony export */   menuItemThreeText: () => (/* binding */ menuItemThreeText),
/* harmony export */   menuItemTwo: () => (/* binding */ menuItemTwo),
/* harmony export */   menuItemTwoText: () => (/* binding */ menuItemTwoText)
/* harmony export */ });
/* harmony import */ var _extendedUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extendedUI */ "./src/extendedUI.js");
/* harmony import */ var _backgroundImages_pizza_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backgroundImages/pizza.jpg */ "./src/backgroundImages/pizza.jpg");
/* harmony import */ var _backgroundImages_sweets_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backgroundImages/sweets.jpg */ "./src/backgroundImages/sweets.jpg");
/* harmony import */ var _backgroundImages_drinks_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backgroundImages/drinks.jpg */ "./src/backgroundImages/drinks.jpg");





const menuItemOne = (0,_extendedUI__WEBPACK_IMPORTED_MODULE_0__.createFoodItem)("", _backgroundImages_pizza_jpg__WEBPACK_IMPORTED_MODULE_1__, "", "center", "cover");
const menuItemTwo = (0,_extendedUI__WEBPACK_IMPORTED_MODULE_0__.createFoodItem)("", _backgroundImages_sweets_jpg__WEBPACK_IMPORTED_MODULE_2__, "5px", "center", "cover");
const menuItemThree = (0,_extendedUI__WEBPACK_IMPORTED_MODULE_0__.createFoodItem)(
  "",
  _backgroundImages_drinks_jpg__WEBPACK_IMPORTED_MODULE_3__,
  "5px",
  "center center",
  "contain"
);

const someText = `
Item One . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 50$
Item Two . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 30$
Item Three . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 20$
Item Four . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 50$
Item Five . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 10$`;

const menuItemOneText = (0,_extendedUI__WEBPACK_IMPORTED_MODULE_0__.foodItemText)(someText, menuItemOne.el);
const menuItemTwoText = (0,_extendedUI__WEBPACK_IMPORTED_MODULE_0__.foodItemText)(someText, menuItemTwo.el);
const menuItemThreeText = (0,_extendedUI__WEBPACK_IMPORTED_MODULE_0__.foodItemText)(someText, menuItemThree.el);


/***/ }),

/***/ "./src/backgroundImages/drinks.jpg":
/*!*****************************************!*\
  !*** ./src/backgroundImages/drinks.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e982332eb5c2674a33a.jpg";

/***/ }),

/***/ "./src/backgroundImages/pizza.jpg":
/*!****************************************!*\
  !*** ./src/backgroundImages/pizza.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d79fc1fee1a19a9e85c.jpg";

/***/ }),

/***/ "./src/backgroundImages/sweets.jpg":
/*!*****************************************!*\
  !*** ./src/backgroundImages/sweets.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "321f8c8cb9f253e517a5.jpg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX21lbnVUYWJfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEQ7QUFDWDtBQUNFO0FBQ0E7O0FBRTVDLG9CQUFvQiwyREFBYyxLQUFLLHdEQUFLO0FBQzVDLG9CQUFvQiwyREFBYyxLQUFLLHlEQUFNO0FBQzdDLHNCQUFzQiwyREFBYztBQUMzQztBQUNBLEVBQUUseURBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sd0JBQXdCLHlEQUFZO0FBQ3BDLHdCQUF3Qix5REFBWTtBQUNwQywwQkFBMEIseURBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50d2Vic2l0ZS8uL3NyYy9tZW51VGFiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUZvb2RJdGVtLCBmb29kSXRlbVRleHQgfSBmcm9tIFwiLi9leHRlbmRlZFVJXCI7XG5pbXBvcnQgUGl6emEgZnJvbSBcIi4vYmFja2dyb3VuZEltYWdlcy9waXp6YS5qcGdcIjtcbmltcG9ydCBTd2VldHMgZnJvbSBcIi4vYmFja2dyb3VuZEltYWdlcy9zd2VldHMuanBnXCI7XG5pbXBvcnQgRHJpbmtzIGZyb20gXCIuL2JhY2tncm91bmRJbWFnZXMvZHJpbmtzLmpwZ1wiO1xuXG5leHBvcnQgY29uc3QgbWVudUl0ZW1PbmUgPSBjcmVhdGVGb29kSXRlbShcIlwiLCBQaXp6YSwgXCJcIiwgXCJjZW50ZXJcIiwgXCJjb3ZlclwiKTtcbmV4cG9ydCBjb25zdCBtZW51SXRlbVR3byA9IGNyZWF0ZUZvb2RJdGVtKFwiXCIsIFN3ZWV0cywgXCI1cHhcIiwgXCJjZW50ZXJcIiwgXCJjb3ZlclwiKTtcbmV4cG9ydCBjb25zdCBtZW51SXRlbVRocmVlID0gY3JlYXRlRm9vZEl0ZW0oXG4gIFwiXCIsXG4gIERyaW5rcyxcbiAgXCI1cHhcIixcbiAgXCJjZW50ZXIgY2VudGVyXCIsXG4gIFwiY29udGFpblwiXG4pO1xuXG5jb25zdCBzb21lVGV4dCA9IGBcbkl0ZW0gT25lIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gNTAkXG5JdGVtIFR3byAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIDMwJFxuSXRlbSBUaHJlZSAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAyMCRcbkl0ZW0gRm91ciAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIDUwJFxuSXRlbSBGaXZlIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gMTAkYDtcblxuZXhwb3J0IGNvbnN0IG1lbnVJdGVtT25lVGV4dCA9IGZvb2RJdGVtVGV4dChzb21lVGV4dCwgbWVudUl0ZW1PbmUuZWwpO1xuZXhwb3J0IGNvbnN0IG1lbnVJdGVtVHdvVGV4dCA9IGZvb2RJdGVtVGV4dChzb21lVGV4dCwgbWVudUl0ZW1Ud28uZWwpO1xuZXhwb3J0IGNvbnN0IG1lbnVJdGVtVGhyZWVUZXh0ID0gZm9vZEl0ZW1UZXh0KHNvbWVUZXh0LCBtZW51SXRlbVRocmVlLmVsKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==