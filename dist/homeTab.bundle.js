"use strict";
(self["webpackChunkrestaurantwebsite"] = self["webpackChunkrestaurantwebsite"] || []).push([["homeTab"],{

/***/ "./src/extendedUI.js":
/*!***************************!*\
  !*** ./src/extendedUI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFoodItem: () => (/* binding */ createFoodItem),
/* harmony export */   createMenuItem: () => (/* binding */ createMenuItem),
/* harmony export */   designBtn: () => (/* binding */ designBtn),
/* harmony export */   foodItemText: () => (/* binding */ foodItemText)
/* harmony export */ });
/* harmony import */ var _scripts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts.js */ "./src/scripts.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");


// Extends ManageAttributes() & specifies buttons
const designBtn = (text) => {
  const button = (0,_scripts_js__WEBPACK_IMPORTED_MODULE_0__.ManageAttributes)("button", _ui_js__WEBPACK_IMPORTED_MODULE_1__.navBar.el, text, {
    width: "49px",
    height: "22px",
    color: "black",
    fontSize: "15px",
    backgroundColor: "#f7e8d3",
    margin: "25px",
    cursor: "pointer",
    border: "none",

    background: `linear-gradient(
              to right,
              rgba(158, 157, 193, 0),
              rgba(158, 157, 193, 0)
            ),
            linear-gradient(to right, rgb(0, 0, 0), rgb(0, 0, 0))`,
    backgroundSize: "100% 0.15em, 0 0.15em",
    backgroundPosition: "100% 100%, 0% 100%",
    backgroundRepeat: "no-repeat",
    transition: "background-size 400ms",
  });
  return button;
};

// Extends ManageAttributes() & specifies menu items
const createMenuItem = (text, color, width, marginTop, marginBottom) => {
  const item = (0,_scripts_js__WEBPACK_IMPORTED_MODULE_0__.ManageAttributes)("div", _ui_js__WEBPACK_IMPORTED_MODULE_1__.contentContainer.el, text, {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",

    width: width,
    height: "400px",

    color: "black",
    textAlign: "center",

    marginTop: marginTop,
    marginBottom: marginBottom,
    backgroundColor: color,
  });
  return item;
};

const createFoodItem = (
  text,
  picture,
  margin,
  picturePosition,
  size
) => {
  const item = (0,_scripts_js__WEBPACK_IMPORTED_MODULE_0__.ManageAttributes)("div", _ui_js__WEBPACK_IMPORTED_MODULE_1__.secondContentContainer.el, text, {
    display: "block",
    color: "black",
    minWidth: "100%",
    height: "50vh",
    maxHeight: "50vh",
    marginTop: margin,

    backgroundImage: `linear-gradient(to bottom, rgb(171, 52, 52, 0) 15%, rgb(171, 52, 52, 1) 0%),
    url(${picture})`,
    backgroundSize: size,
    backgroundPosition: picturePosition,
  });
  return item;
};

const foodItemText = (text, toAppend) => {
  const item = (0,_scripts_js__WEBPACK_IMPORTED_MODULE_0__.ManageAttributes)("div", toAppend, text, {
    height: "72%",
    marginLeft: "5%",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ab3434",
    // backgroundColor: "green",
    textAlign: "start",
    fontFamily: "'Georgia', serif",
    fontStyle: "italic",
    marginTop: "15%",
    lineHeight: "3",
  });

  return item;
};


/***/ }),

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

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateElementFunction: () => (/* binding */ CreateElementFunction),
/* harmony export */   ManageAttributes: () => (/* binding */ ManageAttributes),
/* harmony export */   hoverState: () => (/* binding */ hoverState),
/* harmony export */   scrollState: () => (/* binding */ scrollState),
/* harmony export */   toggleElement: () => (/* binding */ toggleElement)
/* harmony export */ });
// Factory function for elements (code starts here)
const CreateElementFunction = (type, elementToAppend, options = {}) => {
  const el = document.createElement(type);
  elementToAppend.appendChild(el);
  Object.assign(el.style, options.styles);

  return { el };
};

// Define values for elements
const ManageAttributes = (type, elementToAppend, name, styles) => {
  const newEl = CreateElementFunction(type, elementToAppend, { styles });
  newEl.el.textContent = name;
  return newEl;
};

// Toggle element visibility
const toggleElement = () => {
  const displayElement = (...elements) => {
    elements.forEach((element) => (element.el.style.display = "flex"));
  };

  const hideElement = (...elements) => {
    elements.forEach((element) => (element.el.style.display = "none"));
  };

  return { displayElement, hideElement };
};

// :hover state for buttons
const hoverState = (...buttons) => {
  buttons.forEach((button) => {
    button.el.addEventListener("mouseover", () => {
      button.el.style.backgroundSize = "0 0.15em, 100% 0.15em";
    });

    button.el.addEventListener("mouseout", () => {
      button.el.style.backgroundSize = "0 0.15em, 0% 0.15em";
    });
  });
};

// overflow on elements
const scrollState = (...elements) => {
  if (window.innerWidth > 1000) {
    elements.forEach((element) => {
      element.el.addEventListener("mouseenter", () => {
        element.el.style.overflow = "scroll";
      });

      element.el.addEventListener("mouseleave", () => {
        element.el.style.overflow = "hidden";
      });
    });
  }
};


/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   container: () => (/* binding */ container),
/* harmony export */   content: () => (/* binding */ content),
/* harmony export */   contentContainer: () => (/* binding */ contentContainer),
/* harmony export */   footer: () => (/* binding */ footer),
/* harmony export */   header: () => (/* binding */ header),
/* harmony export */   homeBtn: () => (/* binding */ homeBtn),
/* harmony export */   infoBtn: () => (/* binding */ infoBtn),
/* harmony export */   logo: () => (/* binding */ logo),
/* harmony export */   navBar: () => (/* binding */ navBar),
/* harmony export */   secondContent: () => (/* binding */ secondContent),
/* harmony export */   secondContentContainer: () => (/* binding */ secondContentContainer),
/* harmony export */   smallerWindow: () => (/* binding */ smallerWindow)
/* harmony export */ });
/* harmony import */ var _extendedUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extendedUI */ "./src/extendedUI.js");
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts */ "./src/scripts.js");


__webpack_require__.e(/*! import() */ "src_menuTab_js").then(__webpack_require__.bind(__webpack_require__, /*! ./menuTab */ "./src/menuTab.js"));
// import Wallpaper from "./wallpaper.jpeg";

// In another module or file
const header = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)("header", document.body, "", {
  display: "flex",
  justifyContent: "flexend",
  alignItems: "center",
  height: "70px",
  backgroundColor: "#fffff1",
  textAlign: "center",
  height: "7.5vh",
  marginBottom: "2vh",
});

const container = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)("div", document.body, "", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  margin: "0 auto 2% auto",
  backgroundColor: "#f7e8d3",
  width: "95%",
});

const navBar = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)("nav", header.el, "", {
  display: "flex",
  marginLeft: "1.9vh",
  alignItems: "center",
  width: "100px",
});

const logo = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)(
  "p",
  header.el,
  "Peter & Jonnies Pizzeria",
  {
    fontFamily: "'libre baskerville', serif",
    alignSelf: "center",
    fontSize: "20px",
    fontStyle: "italic",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  }
);

// contents size & overflow
const content = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)("div", container.el, "", {
  width: "60%",
  height: "90vh",
  overflow: "hidden",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  borderRadius: "3px",
});

// contents positioning
const contentContainer = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)("div", content.el, "", {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
});

// contents size & overflow
const secondContent = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)("div", container.el, "", {
  minWidth: "72vh",
  maxWidth: "72vh",
  height: "90vh",
  overflow: "hidden",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  marginLeft: "10px",
  marginRight: "0px",
  borderRadius: "3px",
  backgroundColor: "#f7e8d3",
  display: "flex",
  flexDirection: "column",
});

// contents positioning
const secondContentContainer = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)(
  "div",
  secondContent.el,
  "",
  {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  }
);

const footer = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)("footer", content.el, "Robin Ryan", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "7.5vh",
  backgroundColor: "#fffff1",
});

const homeBtn = (0,_extendedUI__WEBPACK_IMPORTED_MODULE_0__.designBtn)("Home");
const infoBtn = (0,_extendedUI__WEBPACK_IMPORTED_MODULE_0__.designBtn)("Info");

const body = document.querySelector("body");

body.style.margin = "0px";
body.style.backgroundColor = "#f7e8d3";

const smallerWindow = () => {
  window.addEventListener("resize", () => {
    if (window.innerWidth < 1000) {
      content.el.style.width = "100%";
      content.el.style.height = "90vh";
      container.el.style.flexDirection = "column";
      secondContent.el.style.width = "100%";
      secondContent.el.style.height = "90vh";
      secondContent.el.style.alignSelf = "center";
      logo.el.style.left = "70%";
    } else {
      container.el.style.flexDirection = "row";
      content.el.style.width = "60%";
      secondContent.el.style.width = "40%";
      content.el.style.height = "90vh";
      secondContent.el.style.height = "90vh";
      secondContent.el.style.alignSelf = "";
      logo.el.style.left = "50%";
    }
  });
};

smallerWindow();
(0,_scripts__WEBPACK_IMPORTED_MODULE_1__.scrollState)(content, secondContent);


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

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/homeTab.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxDQUFDOztBQUVNLGdCQUFnQixzREFBUztBQUN6QixnQkFBZ0Isc0RBQVM7O0FBRWhDOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLHFEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHdlYnNpdGUvLi9zcmMvZXh0ZW5kZWRVSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50d2Vic2l0ZS8uL3NyYy9ob21lVGFiLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnR3ZWJzaXRlLy4vc3JjL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHdlYnNpdGUvLi9zcmMvdWkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFuYWdlQXR0cmlidXRlcyB9IGZyb20gXCIuL3NjcmlwdHMuanNcIjtcbmltcG9ydCB7IG5hdkJhciwgY29udGVudENvbnRhaW5lciwgc2Vjb25kQ29udGVudENvbnRhaW5lciB9IGZyb20gXCIuL3VpLmpzXCI7XG4vLyBFeHRlbmRzIE1hbmFnZUF0dHJpYnV0ZXMoKSAmIHNwZWNpZmllcyBidXR0b25zXG5leHBvcnQgY29uc3QgZGVzaWduQnRuID0gKHRleHQpID0+IHtcbiAgY29uc3QgYnV0dG9uID0gTWFuYWdlQXR0cmlidXRlcyhcImJ1dHRvblwiLCBuYXZCYXIuZWwsIHRleHQsIHtcbiAgICB3aWR0aDogXCI0OXB4XCIsXG4gICAgaGVpZ2h0OiBcIjIycHhcIixcbiAgICBjb2xvcjogXCJibGFja1wiLFxuICAgIGZvbnRTaXplOiBcIjE1cHhcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y3ZThkM1wiLFxuICAgIG1hcmdpbjogXCIyNXB4XCIsXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICBib3JkZXI6IFwibm9uZVwiLFxuXG4gICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgdG8gcmlnaHQsXG4gICAgICAgICAgICAgIHJnYmEoMTU4LCAxNTcsIDE5MywgMCksXG4gICAgICAgICAgICAgIHJnYmEoMTU4LCAxNTcsIDE5MywgMClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigwLCAwLCAwKSwgcmdiKDAsIDAsIDApKWAsXG4gICAgYmFja2dyb3VuZFNpemU6IFwiMTAwJSAwLjE1ZW0sIDAgMC4xNWVtXCIsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcIjEwMCUgMTAwJSwgMCUgMTAwJVwiLFxuICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXG4gICAgdHJhbnNpdGlvbjogXCJiYWNrZ3JvdW5kLXNpemUgNDAwbXNcIixcbiAgfSk7XG4gIHJldHVybiBidXR0b247XG59O1xuXG4vLyBFeHRlbmRzIE1hbmFnZUF0dHJpYnV0ZXMoKSAmIHNwZWNpZmllcyBtZW51IGl0ZW1zXG5leHBvcnQgY29uc3QgY3JlYXRlTWVudUl0ZW0gPSAodGV4dCwgY29sb3IsIHdpZHRoLCBtYXJnaW5Ub3AsIG1hcmdpbkJvdHRvbSkgPT4ge1xuICBjb25zdCBpdGVtID0gTWFuYWdlQXR0cmlidXRlcyhcImRpdlwiLCBjb250ZW50Q29udGFpbmVyLmVsLCB0ZXh0LCB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG5cbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBcIjQwMHB4XCIsXG5cbiAgICBjb2xvcjogXCJibGFja1wiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcblxuICAgIG1hcmdpblRvcDogbWFyZ2luVG9wLFxuICAgIG1hcmdpbkJvdHRvbTogbWFyZ2luQm90dG9tLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gIH0pO1xuICByZXR1cm4gaXRlbTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVGb29kSXRlbSA9IChcbiAgdGV4dCxcbiAgcGljdHVyZSxcbiAgbWFyZ2luLFxuICBwaWN0dXJlUG9zaXRpb24sXG4gIHNpemVcbikgPT4ge1xuICBjb25zdCBpdGVtID0gTWFuYWdlQXR0cmlidXRlcyhcImRpdlwiLCBzZWNvbmRDb250ZW50Q29udGFpbmVyLmVsLCB0ZXh0LCB7XG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgbWluV2lkdGg6IFwiMTAwJVwiLFxuICAgIGhlaWdodDogXCI1MHZoXCIsXG4gICAgbWF4SGVpZ2h0OiBcIjUwdmhcIixcbiAgICBtYXJnaW5Ub3A6IG1hcmdpbixcblxuICAgIGJhY2tncm91bmRJbWFnZTogYGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYigxNzEsIDUyLCA1MiwgMCkgMTUlLCByZ2IoMTcxLCA1MiwgNTIsIDEpIDAlKSxcbiAgICB1cmwoJHtwaWN0dXJlfSlgLFxuICAgIGJhY2tncm91bmRTaXplOiBzaXplLFxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogcGljdHVyZVBvc2l0aW9uLFxuICB9KTtcbiAgcmV0dXJuIGl0ZW07XG59O1xuXG5leHBvcnQgY29uc3QgZm9vZEl0ZW1UZXh0ID0gKHRleHQsIHRvQXBwZW5kKSA9PiB7XG4gIGNvbnN0IGl0ZW0gPSBNYW5hZ2VBdHRyaWJ1dGVzKFwiZGl2XCIsIHRvQXBwZW5kLCB0ZXh0LCB7XG4gICAgaGVpZ2h0OiBcIjcyJVwiLFxuICAgIG1hcmdpbkxlZnQ6IFwiNSVcIixcbiAgICB3aWR0aDogXCI5MCVcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjYWIzNDM0XCIsXG4gICAgLy8gYmFja2dyb3VuZENvbG9yOiBcImdyZWVuXCIsXG4gICAgdGV4dEFsaWduOiBcInN0YXJ0XCIsXG4gICAgZm9udEZhbWlseTogXCInR2VvcmdpYScsIHNlcmlmXCIsXG4gICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICAgIG1hcmdpblRvcDogXCIxNSVcIixcbiAgICBsaW5lSGVpZ2h0OiBcIjNcIixcbiAgfSk7XG5cbiAgcmV0dXJuIGl0ZW07XG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlTWVudUl0ZW0gfSBmcm9tIFwiLi9leHRlbmRlZFVJXCI7XG5pbXBvcnQgeyBNYW5hZ2VBdHRyaWJ1dGVzIH0gZnJvbSBcIi4vc2NyaXB0c1wiO1xuaW1wb3J0IEljb25PbmUgZnJvbSBcIi4vaWNvbnMvcGl6emEtMjAucG5nXCI7XG5pbXBvcnQgRHJpbmtPbmUgZnJvbSBcIi4vaWNvbnMvZHJpbmsucG5nXCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9pY29ucy9sb2dvLmpwZ1wiO1xuaW1wb3J0IENvbXBvUGljcyBmcm9tIFwiLi9iYWNrZ3JvdW5kSW1hZ2VzL2NvbXBvcy5wbmdcIjtcbmltcG9ydCBJY3JlQ3JlYW0gZnJvbSBcIi4vaWNvbnMvaWNlQ3JlYW0ucG5nXCI7XG5pbXBvcnQgU3VuZ2xhc3NlcyBmcm9tIFwiLi9pY29ucy9zdW5nbGFzc2VzLnBuZ1wiO1xuXG5leHBvcnQgY29uc3QgaG9tZUl0ZW1PbmUgPSBjcmVhdGVNZW51SXRlbShcIlwiLCBcIiNhYjM0MzRcIiwgXCIxMDAlXCIsIFwiXCIsIFwiNXB4XCIpO1xuZXhwb3J0IGNvbnN0IGhvbWVJdGVtVHdvID0gY3JlYXRlTWVudUl0ZW0oXCJcIiwgXCIjZjdlOGQzXCIsIFwiMTAwJVwiLCBcIjVweFwiLCBcIjVweFwiKTtcbmV4cG9ydCBjb25zdCBob21lSXRlbVRocmVlID0gY3JlYXRlTWVudUl0ZW0oXCJcIiwgXCIjYWIzNDM0XCIsIFwiMTAwJVwiLCBcIjVweFwiLCBcIlwiKTtcbmNvbnN0IHJhbmRvbVRleHQgPSBgXG5JbiBtYWxlc3VhZGEsIGFyY3Ugbm9uIGZhdWNpYnVzIHRlbXBvciwgXG5vcmNpIGxhY3VzIGF1Y3RvciBsaWJlcm8sIGlkIHVsdHJpY2llcyBlcm9zIGFyY3Ugbm9uIGR1aS4gXG5VdCBpbXBlcmRpZXQgbWFzc2Egbm9uIGVsaXQgZGFwaWJ1cywgaW4gdGluY2lkdW50IGxlY3R1cyByaG9uY3VzLiBcblZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBcbmx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgY3VyYWU7IERvbmVjIGV0IG51bmMgXG5hdCBzZW0gYXVjdG9yIGN1cnN1cy5cbkluIG1hbGVzdWFkYSwgYXJjdSBub24gZmF1Y2lidXMgdGVtcG9yLCBcbm9yY2kgbGFjdXMgYXVjdG9yIGxpYmVybywgaWQgdWx0cmljaWVzIGVyb3MgYXJjdSBub24gZHVpLiBcblV0IGltcGVyZGlldCBtYXNzYSBub24gZWxpdCBkYXBpYnVzLCBpbiB0aW5jaWR1bnQgbGVjdHVzIHJob25jdXMuIGA7XG5cbi8vIGl0ZW1zIG9uZVxuZXhwb3J0IGNvbnN0IGl0ZW1PbmVMZWZ0QmFyID0gTWFuYWdlQXR0cmlidXRlcyhcImRpdlwiLCBob21lSXRlbU9uZS5lbCwgXCJcIiwge1xuICB3aWR0aDogXCIyMyVcIixcbiAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgYmFja2dyb3VuZENvbG9yOiBcIiNhYjM0MzRcIixcbiAgbWFyZ2luUmlnaHQ6IFwiMXB4XCIsXG59KTtcblxuZXhwb3J0IGNvbnN0IGljb25PbmVMZWZ0ID0gTWFuYWdlQXR0cmlidXRlcyhcImRpdlwiLCBpdGVtT25lTGVmdEJhci5lbCwgXCJcIiwge1xuICBoZWlnaHQ6IFwiMTAwcHhcIixcbiAgd2lkdGg6IFwiMTAwcHhcIixcbiAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7SWNvbk9uZX0pYCxcbiAgYmFja2dyb3VuZFNpemU6IFwiMTAwcHhcIixcbiAgbWFyZ2luTGVmdDogXCIyMHB4XCIsXG4gIG1hcmdpblRvcDogXCI1MHB4XCIsXG59KTtcblxuZXhwb3J0IGNvbnN0IGl0ZW1PbmVDZW50ZXJCYXIgPSBNYW5hZ2VBdHRyaWJ1dGVzKFwiZGl2XCIsIGhvbWVJdGVtT25lLmVsLCBcIlwiLCB7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgd2lkdGg6IFwiNDglXCIsXG4gIGhlaWdodDogXCIxMDAlXCIsXG4gIGJhY2tncm91bmRDb2xvcjogXCIjZjdlOGQzXCIsXG4gIG1hcmdpblJpZ2h0OiBcIjFweFwiLFxufSk7XG5cbmV4cG9ydCBjb25zdCBpY29uT25lQ2VudGVyID0gTWFuYWdlQXR0cmlidXRlcyhcImRpdlwiLCBpdGVtT25lQ2VudGVyQmFyLmVsLCBcIlwiLCB7XG4gIGhlaWdodDogXCI1MCVcIixcbiAgd2lkdGg6IFwiOTAlXCIsXG5cbiAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7TG9nb30pYCxcbiAgYmFja2dyb3VuZFNpemU6IFwiNDAwcHhcIixcbiAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcblxuICBsaW5lSGVpZ2h0OiBcIjEuNVwiLFxufSk7XG5cbmV4cG9ydCBjb25zdCBpY29uVHdvQ2VudGVyID0gTWFuYWdlQXR0cmlidXRlcyhcbiAgXCJkaXZcIixcbiAgaXRlbU9uZUNlbnRlckJhci5lbCxcbiAgcmFuZG9tVGV4dCxcbiAge1xuICAgIHdpZHRoOiBcIjkwJVwiLFxuXG4gICAgbWFyZ2luTGVmdDogXCIyJVwiLFxuICAgIG1hcmdpblJpZ2h0OiBcIjIlXCIsXG4gICAgbGluZUhlaWdodDogXCIxLjVcIixcbiAgICBtYXJnaW5Cb3R0b206IFwiMTMlXCIsXG4gICAgaGVpZ2h0OiBcIjM1MHB4XCIsXG4gICAgb3ZlcmZsb3c6IFwib3ZlcmxheVwiLFxuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgaXRlbU9uZVJpZ2h0QmFyID0gTWFuYWdlQXR0cmlidXRlcyhcImRpdlwiLCBob21lSXRlbU9uZS5lbCwgXCJcIiwge1xuICB3aWR0aDogXCIyMyVcIixcbiAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgYmFja2dyb3VuZENvbG9yOiBcIiNhYjM0MzRcIixcbn0pO1xuXG5leHBvcnQgY29uc3QgaWNvbk9uZVJpZ2h0ID0gTWFuYWdlQXR0cmlidXRlcyhcImRpdlwiLCBpdGVtT25lUmlnaHRCYXIuZWwsIFwiXCIsIHtcbiAgaGVpZ2h0OiBcIjEwMHB4XCIsXG4gIHdpZHRoOiBcIjEwMHB4XCIsXG4gIGJhY2tncm91bmRJbWFnZTogYHVybCgke0RyaW5rT25lfSlgLFxuICBiYWNrZ3JvdW5kU2l6ZTogXCIxMDBweFwiLFxuICBtYXJnaW5MZWZ0OiBcIjMwcHhcIixcbiAgbWFyZ2luVG9wOiBcIjIwMHB4XCIsXG59KTtcblxuLy8gaXRlbXMgdHdvXG5leHBvcnQgY29uc3QgaXRlbVR3b0NlbnRlcnRCYXIgPSBNYW5hZ2VBdHRyaWJ1dGVzKFwiZGl2XCIsIGhvbWVJdGVtVHdvLmVsLCBcIlwiLCB7XG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7Q29tcG9QaWNzfSlgLFxuICBiYWNrZ3JvdW5kU2l6ZTogXCIxMjAlXCIsXG4gIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXG4gIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcbn0pO1xuXG4vLyBpdGVtcyB0aHJlZVxuZXhwb3J0IGNvbnN0IGl0ZW1UaHJlZUxlZnRCYXIgPSBNYW5hZ2VBdHRyaWJ1dGVzKFwiZGl2XCIsIGhvbWVJdGVtVGhyZWUuZWwsIFwiXCIsIHtcbiAgd2lkdGg6IFwiMjMlXCIsXG4gIGhlaWdodDogXCIxMDAlXCIsXG4gIGJhY2tncm91bmRDb2xvcjogXCIjYWIzNDM0XCIsXG4gIGJhY2tncm91bmRJbWFnZTogYHVybCgke1N1bmdsYXNzZXN9KWAsXG4gIGJhY2tncm91bmRTaXplOiBcIjEwMHB4XCIsXG4gIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXG4gIGJhY2tncm91bmRQb3NpdGlvbjogXCI5MHB4XCIsXG59KTtcblxuZXhwb3J0IGNvbnN0IGl0ZW1UaHJlZUNlbnRlcnRCYXIgPSBNYW5hZ2VBdHRyaWJ1dGVzKFxuICBcImRpdlwiLFxuICBob21lSXRlbVRocmVlLmVsLFxuICBcIlwiLFxuICB7XG4gICAgd2lkdGg6IFwiNDglXCIsXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y3ZThkM1wiLFxuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgaWNvblR3b0NlbnRlclRocmVlID0gTWFuYWdlQXR0cmlidXRlcyhcbiAgXCJkaXZcIixcbiAgaXRlbVRocmVlQ2VudGVydEJhci5lbCxcbiAgcmFuZG9tVGV4dCxcbiAge1xuICAgIHdpZHRoOiBcIjkwJVwiLFxuICAgIGhlaWdodDogXCIzMDBweFwiLFxuICAgIG92ZXJmbG93OiBcIm92ZXJsYXlcIixcblxuICAgIG1hcmdpbkxlZnQ6IFwiMiVcIixcbiAgICBtYXJnaW5SaWdodDogXCIyJVwiLFxuICAgIGxpbmVIZWlnaHQ6IFwiMS41XCIsXG4gICAgbWFyZ2luVG9wOiBcIjcwcHhcIixcbiAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IGl0ZW1UaHJlZVJpZ2h0QmFyID0gTWFuYWdlQXR0cmlidXRlcyhcImRpdlwiLCBob21lSXRlbVRocmVlLmVsLCBcIlwiLCB7XG4gIHdpZHRoOiBcIjIzJVwiLFxuICBoZWlnaHQ6IFwiMTAwJVwiLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2FiMzQzNFwiLFxuICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtJY3JlQ3JlYW19KWAsXG4gIGJhY2tncm91bmRTaXplOiBcIjEwMHB4XCIsXG4gIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXG4gIGJhY2tncm91bmRQb3NpdGlvbjogXCIxMHB4IDEwOXB4XCIsXG59KTtcbiIsIi8vIEZhY3RvcnkgZnVuY3Rpb24gZm9yIGVsZW1lbnRzIChjb2RlIHN0YXJ0cyBoZXJlKVxuZXhwb3J0IGNvbnN0IENyZWF0ZUVsZW1lbnRGdW5jdGlvbiA9ICh0eXBlLCBlbGVtZW50VG9BcHBlbmQsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGVsZW1lbnRUb0FwcGVuZC5hcHBlbmRDaGlsZChlbCk7XG4gIE9iamVjdC5hc3NpZ24oZWwuc3R5bGUsIG9wdGlvbnMuc3R5bGVzKTtcblxuICByZXR1cm4geyBlbCB9O1xufTtcblxuLy8gRGVmaW5lIHZhbHVlcyBmb3IgZWxlbWVudHNcbmV4cG9ydCBjb25zdCBNYW5hZ2VBdHRyaWJ1dGVzID0gKHR5cGUsIGVsZW1lbnRUb0FwcGVuZCwgbmFtZSwgc3R5bGVzKSA9PiB7XG4gIGNvbnN0IG5ld0VsID0gQ3JlYXRlRWxlbWVudEZ1bmN0aW9uKHR5cGUsIGVsZW1lbnRUb0FwcGVuZCwgeyBzdHlsZXMgfSk7XG4gIG5ld0VsLmVsLnRleHRDb250ZW50ID0gbmFtZTtcbiAgcmV0dXJuIG5ld0VsO1xufTtcblxuLy8gVG9nZ2xlIGVsZW1lbnQgdmlzaWJpbGl0eVxuZXhwb3J0IGNvbnN0IHRvZ2dsZUVsZW1lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXlFbGVtZW50ID0gKC4uLmVsZW1lbnRzKSA9PiB7XG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gKGVsZW1lbnQuZWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiKSk7XG4gIH07XG5cbiAgY29uc3QgaGlkZUVsZW1lbnQgPSAoLi4uZWxlbWVudHMpID0+IHtcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiAoZWxlbWVudC5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpKTtcbiAgfTtcblxuICByZXR1cm4geyBkaXNwbGF5RWxlbWVudCwgaGlkZUVsZW1lbnQgfTtcbn07XG5cbi8vIDpob3ZlciBzdGF0ZSBmb3IgYnV0dG9uc1xuZXhwb3J0IGNvbnN0IGhvdmVyU3RhdGUgPSAoLi4uYnV0dG9ucykgPT4ge1xuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5lbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICAgIGJ1dHRvbi5lbC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiMCAwLjE1ZW0sIDEwMCUgMC4xNWVtXCI7XG4gICAgfSk7XG5cbiAgICBidXR0b24uZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICAgIGJ1dHRvbi5lbC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiMCAwLjE1ZW0sIDAlIDAuMTVlbVwiO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbi8vIG92ZXJmbG93IG9uIGVsZW1lbnRzXG5leHBvcnQgY29uc3Qgc2Nyb2xsU3RhdGUgPSAoLi4uZWxlbWVudHMpID0+IHtcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTAwMCkge1xuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xuICAgICAgICBlbGVtZW50LmVsLnN0eWxlLm92ZXJmbG93ID0gXCJzY3JvbGxcIjtcbiAgICAgIH0pO1xuXG4gICAgICBlbGVtZW50LmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcbiAgICAgICAgZWxlbWVudC5lbC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcbiIsImltcG9ydCB7IGRlc2lnbkJ0biB9IGZyb20gXCIuL2V4dGVuZGVkVUlcIjtcbmltcG9ydCB7IE1hbmFnZUF0dHJpYnV0ZXMsIHNjcm9sbFN0YXRlIH0gZnJvbSBcIi4vc2NyaXB0c1wiO1xuaW1wb3J0KFwiLi9tZW51VGFiXCIpO1xuLy8gaW1wb3J0IFdhbGxwYXBlciBmcm9tIFwiLi93YWxscGFwZXIuanBlZ1wiO1xuXG4vLyBJbiBhbm90aGVyIG1vZHVsZSBvciBmaWxlXG5leHBvcnQgY29uc3QgaGVhZGVyID0gTWFuYWdlQXR0cmlidXRlcyhcImhlYWRlclwiLCBkb2N1bWVudC5ib2R5LCBcIlwiLCB7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBqdXN0aWZ5Q29udGVudDogXCJmbGV4ZW5kXCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIGhlaWdodDogXCI3MHB4XCIsXG4gIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmYxXCIsXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgaGVpZ2h0OiBcIjcuNXZoXCIsXG4gIG1hcmdpbkJvdHRvbTogXCIydmhcIixcbn0pO1xuXG5leHBvcnQgY29uc3QgY29udGFpbmVyID0gTWFuYWdlQXR0cmlidXRlcyhcImRpdlwiLCBkb2N1bWVudC5ib2R5LCBcIlwiLCB7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgbWFyZ2luOiBcIjAgYXV0byAyJSBhdXRvXCIsXG4gIGJhY2tncm91bmRDb2xvcjogXCIjZjdlOGQzXCIsXG4gIHdpZHRoOiBcIjk1JVwiLFxufSk7XG5cbmV4cG9ydCBjb25zdCBuYXZCYXIgPSBNYW5hZ2VBdHRyaWJ1dGVzKFwibmF2XCIsIGhlYWRlci5lbCwgXCJcIiwge1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgbWFyZ2luTGVmdDogXCIxLjl2aFwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICB3aWR0aDogXCIxMDBweFwiLFxufSk7XG5cbmV4cG9ydCBjb25zdCBsb2dvID0gTWFuYWdlQXR0cmlidXRlcyhcbiAgXCJwXCIsXG4gIGhlYWRlci5lbCxcbiAgXCJQZXRlciAmIEpvbm5pZXMgUGl6emVyaWFcIixcbiAge1xuICAgIGZvbnRGYW1pbHk6IFwiJ2xpYnJlIGJhc2tlcnZpbGxlJywgc2VyaWZcIixcbiAgICBhbGlnblNlbGY6IFwiY2VudGVyXCIsXG4gICAgZm9udFNpemU6IFwiMjBweFwiLFxuICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIGxlZnQ6IFwiNTAlXCIsXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoLTUwJSlcIixcbiAgfVxuKTtcblxuLy8gY29udGVudHMgc2l6ZSAmIG92ZXJmbG93XG5leHBvcnQgY29uc3QgY29udGVudCA9IE1hbmFnZUF0dHJpYnV0ZXMoXCJkaXZcIiwgY29udGFpbmVyLmVsLCBcIlwiLCB7XG4gIHdpZHRoOiBcIjYwJVwiLFxuICBoZWlnaHQ6IFwiOTB2aFwiLFxuICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgbXNPdmVyZmxvd1N0eWxlOiBcIm5vbmVcIixcbiAgc2Nyb2xsYmFyV2lkdGg6IFwibm9uZVwiLFxuICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG59KTtcblxuLy8gY29udGVudHMgcG9zaXRpb25pbmdcbmV4cG9ydCBjb25zdCBjb250ZW50Q29udGFpbmVyID0gTWFuYWdlQXR0cmlidXRlcyhcImRpdlwiLCBjb250ZW50LmVsLCBcIlwiLCB7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbn0pO1xuXG4vLyBjb250ZW50cyBzaXplICYgb3ZlcmZsb3dcbmV4cG9ydCBjb25zdCBzZWNvbmRDb250ZW50ID0gTWFuYWdlQXR0cmlidXRlcyhcImRpdlwiLCBjb250YWluZXIuZWwsIFwiXCIsIHtcbiAgbWluV2lkdGg6IFwiNzJ2aFwiLFxuICBtYXhXaWR0aDogXCI3MnZoXCIsXG4gIGhlaWdodDogXCI5MHZoXCIsXG4gIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICBtc092ZXJmbG93U3R5bGU6IFwibm9uZVwiLFxuICBzY3JvbGxiYXJXaWR0aDogXCJub25lXCIsXG4gIG1hcmdpbkxlZnQ6IFwiMTBweFwiLFxuICBtYXJnaW5SaWdodDogXCIwcHhcIixcbiAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y3ZThkM1wiLFxuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbn0pO1xuXG4vLyBjb250ZW50cyBwb3NpdGlvbmluZ1xuZXhwb3J0IGNvbnN0IHNlY29uZENvbnRlbnRDb250YWluZXIgPSBNYW5hZ2VBdHRyaWJ1dGVzKFxuICBcImRpdlwiLFxuICBzZWNvbmRDb250ZW50LmVsLFxuICBcIlwiLFxuICB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgZm9vdGVyID0gTWFuYWdlQXR0cmlidXRlcyhcImZvb3RlclwiLCBjb250ZW50LmVsLCBcIlJvYmluIFJ5YW5cIiwge1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIGhlaWdodDogXCI3LjV2aFwiLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmMVwiLFxufSk7XG5cbmV4cG9ydCBjb25zdCBob21lQnRuID0gZGVzaWduQnRuKFwiSG9tZVwiKTtcbmV4cG9ydCBjb25zdCBpbmZvQnRuID0gZGVzaWduQnRuKFwiSW5mb1wiKTtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG5ib2R5LnN0eWxlLm1hcmdpbiA9IFwiMHB4XCI7XG5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2Y3ZThkM1wiO1xuXG5leHBvcnQgY29uc3Qgc21hbGxlcldpbmRvdyA9ICgpID0+IHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMDApIHtcbiAgICAgIGNvbnRlbnQuZWwuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICAgIGNvbnRlbnQuZWwuc3R5bGUuaGVpZ2h0ID0gXCI5MHZoXCI7XG4gICAgICBjb250YWluZXIuZWwuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XG4gICAgICBzZWNvbmRDb250ZW50LmVsLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICBzZWNvbmRDb250ZW50LmVsLnN0eWxlLmhlaWdodCA9IFwiOTB2aFwiO1xuICAgICAgc2Vjb25kQ29udGVudC5lbC5zdHlsZS5hbGlnblNlbGYgPSBcImNlbnRlclwiO1xuICAgICAgbG9nby5lbC5zdHlsZS5sZWZ0ID0gXCI3MCVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyLmVsLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuICAgICAgY29udGVudC5lbC5zdHlsZS53aWR0aCA9IFwiNjAlXCI7XG4gICAgICBzZWNvbmRDb250ZW50LmVsLnN0eWxlLndpZHRoID0gXCI0MCVcIjtcbiAgICAgIGNvbnRlbnQuZWwuc3R5bGUuaGVpZ2h0ID0gXCI5MHZoXCI7XG4gICAgICBzZWNvbmRDb250ZW50LmVsLnN0eWxlLmhlaWdodCA9IFwiOTB2aFwiO1xuICAgICAgc2Vjb25kQ29udGVudC5lbC5zdHlsZS5hbGlnblNlbGYgPSBcIlwiO1xuICAgICAgbG9nby5lbC5zdHlsZS5sZWZ0ID0gXCI1MCVcIjtcbiAgICB9XG4gIH0pO1xufTtcblxuc21hbGxlcldpbmRvdygpO1xuc2Nyb2xsU3RhdGUoY29udGVudCwgc2Vjb25kQ29udGVudCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=