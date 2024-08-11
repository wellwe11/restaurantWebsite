"use strict";
(self["webpackChunkrestaurantwebsite"] = self["webpackChunkrestaurantwebsite"] || []).push([["src_homeTab_js"],{

/***/ "./src/homeTab.js":
/*!************************!*\
  !*** ./src/homeTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homeItemOne: () => (/* binding */ homeItemOne),
/* harmony export */   homeItemThree: () => (/* binding */ homeItemThree),
/* harmony export */   homeItemTwo: () => (/* binding */ homeItemTwo),
/* harmony export */   iconOneCenter: () => (/* binding */ iconOneCenter),
/* harmony export */   iconOneLeft: () => (/* binding */ iconOneLeft),
/* harmony export */   iconOneRight: () => (/* binding */ iconOneRight),
/* harmony export */   iconTwoCenter: () => (/* binding */ iconTwoCenter),
/* harmony export */   iconTwoCenterThree: () => (/* binding */ iconTwoCenterThree),
/* harmony export */   itemOneCenterBar: () => (/* binding */ itemOneCenterBar),
/* harmony export */   itemOneLeftBar: () => (/* binding */ itemOneLeftBar),
/* harmony export */   itemOneRightBar: () => (/* binding */ itemOneRightBar),
/* harmony export */   itemThreeCentertBar: () => (/* binding */ itemThreeCentertBar),
/* harmony export */   itemThreeLeftBar: () => (/* binding */ itemThreeLeftBar),
/* harmony export */   itemThreeRightBar: () => (/* binding */ itemThreeRightBar),
/* harmony export */   itemTwoCentertBar: () => (/* binding */ itemTwoCentertBar)
/* harmony export */ });
/* harmony import */ var _extendedUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extendedUI */ "./src/extendedUI.js");
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts */ "./src/scripts.js");
/* harmony import */ var _icons_pizza_20_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/pizza-20.png */ "./src/icons/pizza-20.png");
/* harmony import */ var _icons_drink_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/drink.png */ "./src/icons/drink.png");
/* harmony import */ var _icons_logo_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/logo.jpg */ "./src/icons/logo.jpg");
/* harmony import */ var _backgroundImages_compos_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./backgroundImages/compos.png */ "./src/backgroundImages/compos.png");
/* harmony import */ var _icons_iceCream_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/iceCream.png */ "./src/icons/iceCream.png");
/* harmony import */ var _icons_sunglasses_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons/sunglasses.png */ "./src/icons/sunglasses.png");









const homeItemOne = (0,_extendedUI__WEBPACK_IMPORTED_MODULE_0__.createMenuItem)("", "#ab3434", "100%", "", "5px");
const homeItemTwo = (0,_extendedUI__WEBPACK_IMPORTED_MODULE_0__.createMenuItem)("", "#f7e8d3", "100%", "5px", "5px");
const homeItemThree = (0,_extendedUI__WEBPACK_IMPORTED_MODULE_0__.createMenuItem)("", "#ab3434", "100%", "5px", "");
const randomText = `
In malesuada, arcu non faucibus tempor, 
orci lacus auctor libero, id ultricies eros arcu non dui. 
Ut imperdiet massa non elit dapibus, in tincidunt lectus rhoncus. 
Vestibulum ante ipsum primis in faucibus orci 
luctus et ultrices posuere cubilia curae; Donec et nunc 
at sem auctor cursus.
In malesuada, arcu non faucibus tempor, 
orci lacus auctor libero, id ultricies eros arcu non dui. 
Ut imperdiet massa non elit dapibus, in tincidunt lectus rhoncus. `;

// items one
const itemOneLeftBar = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)("div", homeItemOne.el, "", {
  width: "23%",
  height: "100%",
  backgroundColor: "#ab3434",
  marginRight: "1px",
});

const iconOneLeft = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)("div", itemOneLeftBar.el, "", {
  height: "100px",
  width: "100px",
  backgroundImage: `url(${_icons_pizza_20_png__WEBPACK_IMPORTED_MODULE_2__})`,
  backgroundSize: "100px",
  marginLeft: "20px",
  marginTop: "50px",
});

const itemOneCenterBar = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)("div", homeItemOne.el, "", {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "48%",
  height: "100%",
  backgroundColor: "#f7e8d3",
  marginRight: "1px",
});

const iconOneCenter = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)("div", itemOneCenterBar.el, "", {
  height: "50%",
  width: "90%",

  backgroundImage: `url(${_icons_logo_jpg__WEBPACK_IMPORTED_MODULE_4__})`,
  backgroundSize: "400px",
  backgroundRepeat: "no-repeat",

  lineHeight: "1.5",
});

const iconTwoCenter = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)(
  "div",
  itemOneCenterBar.el,
  randomText,
  {
    width: "90%",

    marginLeft: "2%",
    marginRight: "2%",
    lineHeight: "1.5",
    marginBottom: "13%",
    height: "350px",
    overflow: "overlay",
  }
);

const itemOneRightBar = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)("div", homeItemOne.el, "", {
  width: "23%",
  height: "100%",
  backgroundColor: "#ab3434",
});

const iconOneRight = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)("div", itemOneRightBar.el, "", {
  height: "100px",
  width: "100px",
  backgroundImage: `url(${_icons_drink_png__WEBPACK_IMPORTED_MODULE_3__})`,
  backgroundSize: "100px",
  marginLeft: "30px",
  marginTop: "200px",
});

// items two
const itemTwoCentertBar = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)("div", homeItemTwo.el, "", {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${_backgroundImages_compos_png__WEBPACK_IMPORTED_MODULE_5__})`,
  backgroundSize: "120%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
});

// items three
const itemThreeLeftBar = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)("div", homeItemThree.el, "", {
  width: "23%",
  height: "100%",
  backgroundColor: "#ab3434",
  backgroundImage: `url(${_icons_sunglasses_png__WEBPACK_IMPORTED_MODULE_7__})`,
  backgroundSize: "100px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "90px",
});

const itemThreeCentertBar = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)(
  "div",
  homeItemThree.el,
  "",
  {
    width: "48%",
    height: "100%",
    backgroundColor: "#f7e8d3",
  }
);

const iconTwoCenterThree = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)(
  "div",
  itemThreeCentertBar.el,
  randomText,
  {
    width: "90%",
    height: "300px",
    overflow: "overlay",

    marginLeft: "2%",
    marginRight: "2%",
    lineHeight: "1.5",
    marginTop: "70px",
  }
);

const itemThreeRightBar = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)("div", homeItemThree.el, "", {
  width: "23%",
  height: "100%",
  backgroundColor: "#ab3434",
  backgroundImage: `url(${_icons_iceCream_png__WEBPACK_IMPORTED_MODULE_6__})`,
  backgroundSize: "100px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "10px 109px",
});


/***/ }),

/***/ "./src/backgroundImages/compos.png":
/*!*****************************************!*\
  !*** ./src/backgroundImages/compos.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "445e414f5e1968ae43b0.png";

/***/ }),

/***/ "./src/icons/drink.png":
/*!*****************************!*\
  !*** ./src/icons/drink.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b3218fe0205b1cc23ed.png";

/***/ }),

/***/ "./src/icons/iceCream.png":
/*!********************************!*\
  !*** ./src/icons/iceCream.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "49fc2d1f0f58c5bae187.png";

/***/ }),

/***/ "./src/icons/logo.jpg":
/*!****************************!*\
  !*** ./src/icons/logo.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4dbfeffbd049a04591b4.jpg";

/***/ }),

/***/ "./src/icons/pizza-20.png":
/*!********************************!*\
  !*** ./src/icons/pizza-20.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ea561592f6e8f0b3984.png";

/***/ }),

/***/ "./src/icons/sunglasses.png":
/*!**********************************!*\
  !*** ./src/icons/sunglasses.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "971cd96cfec50b746e18.png";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2hvbWVUYWJfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ0Q7QUFDRjtBQUNGO0FBQ0w7QUFDa0I7QUFDVDtBQUNHOztBQUV6QyxvQkFBb0IsMkRBQWM7QUFDbEMsb0JBQW9CLDJEQUFjO0FBQ2xDLHNCQUFzQiwyREFBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ08sdUJBQXVCLDBEQUFnQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRU0sb0JBQW9CLDBEQUFnQjtBQUMzQztBQUNBO0FBQ0EsMEJBQTBCLGdEQUFPLENBQUM7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFTSx5QkFBeUIsMERBQWdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFTSxzQkFBc0IsMERBQWdCO0FBQzdDO0FBQ0E7O0FBRUEsMEJBQTBCLDRDQUFJLENBQUM7QUFDL0I7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRU0sc0JBQXNCLDBEQUFnQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sd0JBQXdCLDBEQUFnQjtBQUMvQztBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVNLHFCQUFxQiwwREFBZ0I7QUFDNUM7QUFDQTtBQUNBLDBCQUEwQiw2Q0FBUSxDQUFDO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDTywwQkFBMEIsMERBQWdCO0FBQ2pEO0FBQ0E7QUFDQSwwQkFBMEIseURBQVMsQ0FBQztBQUNwQztBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ08seUJBQXlCLDBEQUFnQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsa0RBQVUsQ0FBQztBQUNyQztBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVNLDRCQUE0QiwwREFBZ0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLDJCQUEyQiwwREFBZ0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLDBCQUEwQiwwREFBZ0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdEQUFTLENBQUM7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnR3ZWJzaXRlLy4vc3JjL2hvbWVUYWIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTWVudUl0ZW0gfSBmcm9tIFwiLi9leHRlbmRlZFVJXCI7XG5pbXBvcnQgeyBNYW5hZ2VBdHRyaWJ1dGVzIH0gZnJvbSBcIi4vc2NyaXB0c1wiO1xuaW1wb3J0IEljb25PbmUgZnJvbSBcIi4vaWNvbnMvcGl6emEtMjAucG5nXCI7XG5pbXBvcnQgRHJpbmtPbmUgZnJvbSBcIi4vaWNvbnMvZHJpbmsucG5nXCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9pY29ucy9sb2dvLmpwZ1wiO1xuaW1wb3J0IENvbXBvUGljcyBmcm9tIFwiLi9iYWNrZ3JvdW5kSW1hZ2VzL2NvbXBvcy5wbmdcIjtcbmltcG9ydCBJY3JlQ3JlYW0gZnJvbSBcIi4vaWNvbnMvaWNlQ3JlYW0ucG5nXCI7XG5pbXBvcnQgU3VuZ2xhc3NlcyBmcm9tIFwiLi9pY29ucy9zdW5nbGFzc2VzLnBuZ1wiO1xuXG5leHBvcnQgY29uc3QgaG9tZUl0ZW1PbmUgPSBjcmVhdGVNZW51SXRlbShcIlwiLCBcIiNhYjM0MzRcIiwgXCIxMDAlXCIsIFwiXCIsIFwiNXB4XCIpO1xuZXhwb3J0IGNvbnN0IGhvbWVJdGVtVHdvID0gY3JlYXRlTWVudUl0ZW0oXCJcIiwgXCIjZjdlOGQzXCIsIFwiMTAwJVwiLCBcIjVweFwiLCBcIjVweFwiKTtcbmV4cG9ydCBjb25zdCBob21lSXRlbVRocmVlID0gY3JlYXRlTWVudUl0ZW0oXCJcIiwgXCIjYWIzNDM0XCIsIFwiMTAwJVwiLCBcIjVweFwiLCBcIlwiKTtcbmNvbnN0IHJhbmRvbVRleHQgPSBgXG5JbiBtYWxlc3VhZGEsIGFyY3Ugbm9uIGZhdWNpYnVzIHRlbXBvciwgXG5vcmNpIGxhY3VzIGF1Y3RvciBsaWJlcm8sIGlkIHVsdHJpY2llcyBlcm9zIGFyY3Ugbm9uIGR1aS4gXG5VdCBpbXBlcmRpZXQgbWFzc2Egbm9uIGVsaXQgZGFwaWJ1cywgaW4gdGluY2lkdW50IGxlY3R1cyByaG9uY3VzLiBcblZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBcbmx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgY3VyYWU7IERvbmVjIGV0IG51bmMgXG5hdCBzZW0gYXVjdG9yIGN1cnN1cy5cbkluIG1hbGVzdWFkYSwgYXJjdSBub24gZmF1Y2lidXMgdGVtcG9yLCBcbm9yY2kgbGFjdXMgYXVjdG9yIGxpYmVybywgaWQgdWx0cmljaWVzIGVyb3MgYXJjdSBub24gZHVpLiBcblV0IGltcGVyZGlldCBtYXNzYSBub24gZWxpdCBkYXBpYnVzLCBpbiB0aW5jaWR1bnQgbGVjdHVzIHJob25jdXMuIGA7XG5cbi8vIGl0ZW1zIG9uZVxuZXhwb3J0IGNvbnN0IGl0ZW1PbmVMZWZ0QmFyID0gTWFuYWdlQXR0cmlidXRlcyhcImRpdlwiLCBob21lSXRlbU9uZS5lbCwgXCJcIiwge1xuICB3aWR0aDogXCIyMyVcIixcbiAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgYmFja2dyb3VuZENvbG9yOiBcIiNhYjM0MzRcIixcbiAgbWFyZ2luUmlnaHQ6IFwiMXB4XCIsXG59KTtcblxuZXhwb3J0IGNvbnN0IGljb25PbmVMZWZ0ID0gTWFuYWdlQXR0cmlidXRlcyhcImRpdlwiLCBpdGVtT25lTGVmdEJhci5lbCwgXCJcIiwge1xuICBoZWlnaHQ6IFwiMTAwcHhcIixcbiAgd2lkdGg6IFwiMTAwcHhcIixcbiAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7SWNvbk9uZX0pYCxcbiAgYmFja2dyb3VuZFNpemU6IFwiMTAwcHhcIixcbiAgbWFyZ2luTGVmdDogXCIyMHB4XCIsXG4gIG1hcmdpblRvcDogXCI1MHB4XCIsXG59KTtcblxuZXhwb3J0IGNvbnN0IGl0ZW1PbmVDZW50ZXJCYXIgPSBNYW5hZ2VBdHRyaWJ1dGVzKFwiZGl2XCIsIGhvbWVJdGVtT25lLmVsLCBcIlwiLCB7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgd2lkdGg6IFwiNDglXCIsXG4gIGhlaWdodDogXCIxMDAlXCIsXG4gIGJhY2tncm91bmRDb2xvcjogXCIjZjdlOGQzXCIsXG4gIG1hcmdpblJpZ2h0OiBcIjFweFwiLFxufSk7XG5cbmV4cG9ydCBjb25zdCBpY29uT25lQ2VudGVyID0gTWFuYWdlQXR0cmlidXRlcyhcImRpdlwiLCBpdGVtT25lQ2VudGVyQmFyLmVsLCBcIlwiLCB7XG4gIGhlaWdodDogXCI1MCVcIixcbiAgd2lkdGg6IFwiOTAlXCIsXG5cbiAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7TG9nb30pYCxcbiAgYmFja2dyb3VuZFNpemU6IFwiNDAwcHhcIixcbiAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcblxuICBsaW5lSGVpZ2h0OiBcIjEuNVwiLFxufSk7XG5cbmV4cG9ydCBjb25zdCBpY29uVHdvQ2VudGVyID0gTWFuYWdlQXR0cmlidXRlcyhcbiAgXCJkaXZcIixcbiAgaXRlbU9uZUNlbnRlckJhci5lbCxcbiAgcmFuZG9tVGV4dCxcbiAge1xuICAgIHdpZHRoOiBcIjkwJVwiLFxuXG4gICAgbWFyZ2luTGVmdDogXCIyJVwiLFxuICAgIG1hcmdpblJpZ2h0OiBcIjIlXCIsXG4gICAgbGluZUhlaWdodDogXCIxLjVcIixcbiAgICBtYXJnaW5Cb3R0b206IFwiMTMlXCIsXG4gICAgaGVpZ2h0OiBcIjM1MHB4XCIsXG4gICAgb3ZlcmZsb3c6IFwib3ZlcmxheVwiLFxuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgaXRlbU9uZVJpZ2h0QmFyID0gTWFuYWdlQXR0cmlidXRlcyhcImRpdlwiLCBob21lSXRlbU9uZS5lbCwgXCJcIiwge1xuICB3aWR0aDogXCIyMyVcIixcbiAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgYmFja2dyb3VuZENvbG9yOiBcIiNhYjM0MzRcIixcbn0pO1xuXG5leHBvcnQgY29uc3QgaWNvbk9uZVJpZ2h0ID0gTWFuYWdlQXR0cmlidXRlcyhcImRpdlwiLCBpdGVtT25lUmlnaHRCYXIuZWwsIFwiXCIsIHtcbiAgaGVpZ2h0OiBcIjEwMHB4XCIsXG4gIHdpZHRoOiBcIjEwMHB4XCIsXG4gIGJhY2tncm91bmRJbWFnZTogYHVybCgke0RyaW5rT25lfSlgLFxuICBiYWNrZ3JvdW5kU2l6ZTogXCIxMDBweFwiLFxuICBtYXJnaW5MZWZ0OiBcIjMwcHhcIixcbiAgbWFyZ2luVG9wOiBcIjIwMHB4XCIsXG59KTtcblxuLy8gaXRlbXMgdHdvXG5leHBvcnQgY29uc3QgaXRlbVR3b0NlbnRlcnRCYXIgPSBNYW5hZ2VBdHRyaWJ1dGVzKFwiZGl2XCIsIGhvbWVJdGVtVHdvLmVsLCBcIlwiLCB7XG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7Q29tcG9QaWNzfSlgLFxuICBiYWNrZ3JvdW5kU2l6ZTogXCIxMjAlXCIsXG4gIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXG4gIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcbn0pO1xuXG4vLyBpdGVtcyB0aHJlZVxuZXhwb3J0IGNvbnN0IGl0ZW1UaHJlZUxlZnRCYXIgPSBNYW5hZ2VBdHRyaWJ1dGVzKFwiZGl2XCIsIGhvbWVJdGVtVGhyZWUuZWwsIFwiXCIsIHtcbiAgd2lkdGg6IFwiMjMlXCIsXG4gIGhlaWdodDogXCIxMDAlXCIsXG4gIGJhY2tncm91bmRDb2xvcjogXCIjYWIzNDM0XCIsXG4gIGJhY2tncm91bmRJbWFnZTogYHVybCgke1N1bmdsYXNzZXN9KWAsXG4gIGJhY2tncm91bmRTaXplOiBcIjEwMHB4XCIsXG4gIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXG4gIGJhY2tncm91bmRQb3NpdGlvbjogXCI5MHB4XCIsXG59KTtcblxuZXhwb3J0IGNvbnN0IGl0ZW1UaHJlZUNlbnRlcnRCYXIgPSBNYW5hZ2VBdHRyaWJ1dGVzKFxuICBcImRpdlwiLFxuICBob21lSXRlbVRocmVlLmVsLFxuICBcIlwiLFxuICB7XG4gICAgd2lkdGg6IFwiNDglXCIsXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y3ZThkM1wiLFxuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgaWNvblR3b0NlbnRlclRocmVlID0gTWFuYWdlQXR0cmlidXRlcyhcbiAgXCJkaXZcIixcbiAgaXRlbVRocmVlQ2VudGVydEJhci5lbCxcbiAgcmFuZG9tVGV4dCxcbiAge1xuICAgIHdpZHRoOiBcIjkwJVwiLFxuICAgIGhlaWdodDogXCIzMDBweFwiLFxuICAgIG92ZXJmbG93OiBcIm92ZXJsYXlcIixcblxuICAgIG1hcmdpbkxlZnQ6IFwiMiVcIixcbiAgICBtYXJnaW5SaWdodDogXCIyJVwiLFxuICAgIGxpbmVIZWlnaHQ6IFwiMS41XCIsXG4gICAgbWFyZ2luVG9wOiBcIjcwcHhcIixcbiAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IGl0ZW1UaHJlZVJpZ2h0QmFyID0gTWFuYWdlQXR0cmlidXRlcyhcImRpdlwiLCBob21lSXRlbVRocmVlLmVsLCBcIlwiLCB7XG4gIHdpZHRoOiBcIjIzJVwiLFxuICBoZWlnaHQ6IFwiMTAwJVwiLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2FiMzQzNFwiLFxuICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtJY3JlQ3JlYW19KWAsXG4gIGJhY2tncm91bmRTaXplOiBcIjEwMHB4XCIsXG4gIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXG4gIGJhY2tncm91bmRQb3NpdGlvbjogXCIxMHB4IDEwOXB4XCIsXG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==