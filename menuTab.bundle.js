"use strict";
(self["webpackChunkrestaurantwebsite"] = self["webpackChunkrestaurantwebsite"] || []).push([["menuTab"],{

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

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menuTab.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRU8sZUFBZSwwREFBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRU0sZ0JBQWdCLHNEQUFTO0FBQ3pCLGdCQUFnQixzREFBUzs7QUFFaEM7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EscURBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50d2Vic2l0ZS8uL3NyYy9leHRlbmRlZFVJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnR3ZWJzaXRlLy4vc3JjL21lbnVUYWIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHdlYnNpdGUvLi9zcmMvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50d2Vic2l0ZS8uL3NyYy91aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYW5hZ2VBdHRyaWJ1dGVzIH0gZnJvbSBcIi4vc2NyaXB0cy5qc1wiO1xuaW1wb3J0IHsgbmF2QmFyLCBjb250ZW50Q29udGFpbmVyLCBzZWNvbmRDb250ZW50Q29udGFpbmVyIH0gZnJvbSBcIi4vdWkuanNcIjtcbi8vIEV4dGVuZHMgTWFuYWdlQXR0cmlidXRlcygpICYgc3BlY2lmaWVzIGJ1dHRvbnNcbmV4cG9ydCBjb25zdCBkZXNpZ25CdG4gPSAodGV4dCkgPT4ge1xuICBjb25zdCBidXR0b24gPSBNYW5hZ2VBdHRyaWJ1dGVzKFwiYnV0dG9uXCIsIG5hdkJhci5lbCwgdGV4dCwge1xuICAgIHdpZHRoOiBcIjQ5cHhcIixcbiAgICBoZWlnaHQ6IFwiMjJweFwiLFxuICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgZm9udFNpemU6IFwiMTVweFwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjdlOGQzXCIsXG4gICAgbWFyZ2luOiBcIjI1cHhcIixcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIGJvcmRlcjogXCJub25lXCIsXG5cbiAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgICB0byByaWdodCxcbiAgICAgICAgICAgICAgcmdiYSgxNTgsIDE1NywgMTkzLCAwKSxcbiAgICAgICAgICAgICAgcmdiYSgxNTgsIDE1NywgMTkzLCAwKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDAsIDAsIDApLCByZ2IoMCwgMCwgMCkpYCxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogXCIxMDAlIDAuMTVlbSwgMCAwLjE1ZW1cIixcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiMTAwJSAxMDAlLCAwJSAxMDAlXCIsXG4gICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcbiAgICB0cmFuc2l0aW9uOiBcImJhY2tncm91bmQtc2l6ZSA0MDBtc1wiLFxuICB9KTtcbiAgcmV0dXJuIGJ1dHRvbjtcbn07XG5cbi8vIEV4dGVuZHMgTWFuYWdlQXR0cmlidXRlcygpICYgc3BlY2lmaWVzIG1lbnUgaXRlbXNcbmV4cG9ydCBjb25zdCBjcmVhdGVNZW51SXRlbSA9ICh0ZXh0LCBjb2xvciwgd2lkdGgsIG1hcmdpblRvcCwgbWFyZ2luQm90dG9tKSA9PiB7XG4gIGNvbnN0IGl0ZW0gPSBNYW5hZ2VBdHRyaWJ1dGVzKFwiZGl2XCIsIGNvbnRlbnRDb250YWluZXIuZWwsIHRleHQsIHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcblxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IFwiNDAwcHhcIixcblxuICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuXG4gICAgbWFyZ2luVG9wOiBtYXJnaW5Ub3AsXG4gICAgbWFyZ2luQm90dG9tOiBtYXJnaW5Cb3R0b20sXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcbiAgfSk7XG4gIHJldHVybiBpdGVtO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUZvb2RJdGVtID0gKFxuICB0ZXh0LFxuICBwaWN0dXJlLFxuICBtYXJnaW4sXG4gIHBpY3R1cmVQb3NpdGlvbixcbiAgc2l6ZVxuKSA9PiB7XG4gIGNvbnN0IGl0ZW0gPSBNYW5hZ2VBdHRyaWJ1dGVzKFwiZGl2XCIsIHNlY29uZENvbnRlbnRDb250YWluZXIuZWwsIHRleHQsIHtcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICBtaW5XaWR0aDogXCIxMDAlXCIsXG4gICAgaGVpZ2h0OiBcIjUwdmhcIixcbiAgICBtYXhIZWlnaHQ6IFwiNTB2aFwiLFxuICAgIG1hcmdpblRvcDogbWFyZ2luLFxuXG4gICAgYmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiKDE3MSwgNTIsIDUyLCAwKSAxNSUsIHJnYigxNzEsIDUyLCA1MiwgMSkgMCUpLFxuICAgIHVybCgke3BpY3R1cmV9KWAsXG4gICAgYmFja2dyb3VuZFNpemU6IHNpemUsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBwaWN0dXJlUG9zaXRpb24sXG4gIH0pO1xuICByZXR1cm4gaXRlbTtcbn07XG5cbmV4cG9ydCBjb25zdCBmb29kSXRlbVRleHQgPSAodGV4dCwgdG9BcHBlbmQpID0+IHtcbiAgY29uc3QgaXRlbSA9IE1hbmFnZUF0dHJpYnV0ZXMoXCJkaXZcIiwgdG9BcHBlbmQsIHRleHQsIHtcbiAgICBoZWlnaHQ6IFwiNzIlXCIsXG4gICAgbWFyZ2luTGVmdDogXCI1JVwiLFxuICAgIHdpZHRoOiBcIjkwJVwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNhYjM0MzRcIixcbiAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JlZW5cIixcbiAgICB0ZXh0QWxpZ246IFwic3RhcnRcIixcbiAgICBmb250RmFtaWx5OiBcIidHZW9yZ2lhJywgc2VyaWZcIixcbiAgICBmb250U3R5bGU6IFwiaXRhbGljXCIsXG4gICAgbWFyZ2luVG9wOiBcIjE1JVwiLFxuICAgIGxpbmVIZWlnaHQ6IFwiM1wiLFxuICB9KTtcblxuICByZXR1cm4gaXRlbTtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVGb29kSXRlbSwgZm9vZEl0ZW1UZXh0IH0gZnJvbSBcIi4vZXh0ZW5kZWRVSVwiO1xuaW1wb3J0IFBpenphIGZyb20gXCIuL2JhY2tncm91bmRJbWFnZXMvcGl6emEuanBnXCI7XG5pbXBvcnQgU3dlZXRzIGZyb20gXCIuL2JhY2tncm91bmRJbWFnZXMvc3dlZXRzLmpwZ1wiO1xuaW1wb3J0IERyaW5rcyBmcm9tIFwiLi9iYWNrZ3JvdW5kSW1hZ2VzL2RyaW5rcy5qcGdcIjtcblxuZXhwb3J0IGNvbnN0IG1lbnVJdGVtT25lID0gY3JlYXRlRm9vZEl0ZW0oXCJcIiwgUGl6emEsIFwiXCIsIFwiY2VudGVyXCIsIFwiY292ZXJcIik7XG5leHBvcnQgY29uc3QgbWVudUl0ZW1Ud28gPSBjcmVhdGVGb29kSXRlbShcIlwiLCBTd2VldHMsIFwiNXB4XCIsIFwiY2VudGVyXCIsIFwiY292ZXJcIik7XG5leHBvcnQgY29uc3QgbWVudUl0ZW1UaHJlZSA9IGNyZWF0ZUZvb2RJdGVtKFxuICBcIlwiLFxuICBEcmlua3MsXG4gIFwiNXB4XCIsXG4gIFwiY2VudGVyIGNlbnRlclwiLFxuICBcImNvbnRhaW5cIlxuKTtcblxuY29uc3Qgc29tZVRleHQgPSBgXG5JdGVtIE9uZSAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIDUwJFxuSXRlbSBUd28gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAzMCRcbkl0ZW0gVGhyZWUgLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gMjAkXG5JdGVtIEZvdXIgLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiA1MCRcbkl0ZW0gRml2ZSAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIDEwJGA7XG5cbmV4cG9ydCBjb25zdCBtZW51SXRlbU9uZVRleHQgPSBmb29kSXRlbVRleHQoc29tZVRleHQsIG1lbnVJdGVtT25lLmVsKTtcbmV4cG9ydCBjb25zdCBtZW51SXRlbVR3b1RleHQgPSBmb29kSXRlbVRleHQoc29tZVRleHQsIG1lbnVJdGVtVHdvLmVsKTtcbmV4cG9ydCBjb25zdCBtZW51SXRlbVRocmVlVGV4dCA9IGZvb2RJdGVtVGV4dChzb21lVGV4dCwgbWVudUl0ZW1UaHJlZS5lbCk7XG4iLCIvLyBGYWN0b3J5IGZ1bmN0aW9uIGZvciBlbGVtZW50cyAoY29kZSBzdGFydHMgaGVyZSlcbmV4cG9ydCBjb25zdCBDcmVhdGVFbGVtZW50RnVuY3Rpb24gPSAodHlwZSwgZWxlbWVudFRvQXBwZW5kLCBvcHRpb25zID0ge30pID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBlbGVtZW50VG9BcHBlbmQuYXBwZW5kQ2hpbGQoZWwpO1xuICBPYmplY3QuYXNzaWduKGVsLnN0eWxlLCBvcHRpb25zLnN0eWxlcyk7XG5cbiAgcmV0dXJuIHsgZWwgfTtcbn07XG5cbi8vIERlZmluZSB2YWx1ZXMgZm9yIGVsZW1lbnRzXG5leHBvcnQgY29uc3QgTWFuYWdlQXR0cmlidXRlcyA9ICh0eXBlLCBlbGVtZW50VG9BcHBlbmQsIG5hbWUsIHN0eWxlcykgPT4ge1xuICBjb25zdCBuZXdFbCA9IENyZWF0ZUVsZW1lbnRGdW5jdGlvbih0eXBlLCBlbGVtZW50VG9BcHBlbmQsIHsgc3R5bGVzIH0pO1xuICBuZXdFbC5lbC50ZXh0Q29udGVudCA9IG5hbWU7XG4gIHJldHVybiBuZXdFbDtcbn07XG5cbi8vIFRvZ2dsZSBlbGVtZW50IHZpc2liaWxpdHlcbmV4cG9ydCBjb25zdCB0b2dnbGVFbGVtZW50ID0gKCkgPT4ge1xuICBjb25zdCBkaXNwbGF5RWxlbWVudCA9ICguLi5lbGVtZW50cykgPT4ge1xuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IChlbGVtZW50LmVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIikpO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVFbGVtZW50ID0gKC4uLmVsZW1lbnRzKSA9PiB7XG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gKGVsZW1lbnQuZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiKSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZGlzcGxheUVsZW1lbnQsIGhpZGVFbGVtZW50IH07XG59O1xuXG4vLyA6aG92ZXIgc3RhdGUgZm9yIGJ1dHRvbnNcbmV4cG9ydCBjb25zdCBob3ZlclN0YXRlID0gKC4uLmJ1dHRvbnMpID0+IHtcbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICBidXR0b24uZWwuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcIjAgMC4xNWVtLCAxMDAlIDAuMTVlbVwiO1xuICAgIH0pO1xuXG4gICAgYnV0dG9uLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICBidXR0b24uZWwuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcIjAgMC4xNWVtLCAwJSAwLjE1ZW1cIjtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vLyBvdmVyZmxvdyBvbiBlbGVtZW50c1xuZXhwb3J0IGNvbnN0IHNjcm9sbFN0YXRlID0gKC4uLmVsZW1lbnRzKSA9PiB7XG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDEwMDApIHtcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgICAgICAgZWxlbWVudC5lbC5zdHlsZS5vdmVyZmxvdyA9IFwic2Nyb2xsXCI7XG4gICAgICB9KTtcblxuICAgICAgZWxlbWVudC5lbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuZWwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBkZXNpZ25CdG4gfSBmcm9tIFwiLi9leHRlbmRlZFVJXCI7XG5pbXBvcnQgeyBNYW5hZ2VBdHRyaWJ1dGVzLCBzY3JvbGxTdGF0ZSB9IGZyb20gXCIuL3NjcmlwdHNcIjtcbmltcG9ydChcIi4vbWVudVRhYlwiKTtcbi8vIGltcG9ydCBXYWxscGFwZXIgZnJvbSBcIi4vd2FsbHBhcGVyLmpwZWdcIjtcblxuLy8gSW4gYW5vdGhlciBtb2R1bGUgb3IgZmlsZVxuZXhwb3J0IGNvbnN0IGhlYWRlciA9IE1hbmFnZUF0dHJpYnV0ZXMoXCJoZWFkZXJcIiwgZG9jdW1lbnQuYm9keSwgXCJcIiwge1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAganVzdGlmeUNvbnRlbnQ6IFwiZmxleGVuZFwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICBoZWlnaHQ6IFwiNzBweFwiLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmMVwiLFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gIGhlaWdodDogXCI3LjV2aFwiLFxuICBtYXJnaW5Cb3R0b206IFwiMnZoXCIsXG59KTtcblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5lciA9IE1hbmFnZUF0dHJpYnV0ZXMoXCJkaXZcIiwgZG9jdW1lbnQuYm9keSwgXCJcIiwge1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gIG1hcmdpbjogXCIwIGF1dG8gMiUgYXV0b1wiLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y3ZThkM1wiLFxuICB3aWR0aDogXCI5NSVcIixcbn0pO1xuXG5leHBvcnQgY29uc3QgbmF2QmFyID0gTWFuYWdlQXR0cmlidXRlcyhcIm5hdlwiLCBoZWFkZXIuZWwsIFwiXCIsIHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIG1hcmdpbkxlZnQ6IFwiMS45dmhcIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgd2lkdGg6IFwiMTAwcHhcIixcbn0pO1xuXG5leHBvcnQgY29uc3QgbG9nbyA9IE1hbmFnZUF0dHJpYnV0ZXMoXG4gIFwicFwiLFxuICBoZWFkZXIuZWwsXG4gIFwiUGV0ZXIgJiBKb25uaWVzIFBpenplcmlhXCIsXG4gIHtcbiAgICBmb250RmFtaWx5OiBcIidsaWJyZSBiYXNrZXJ2aWxsZScsIHNlcmlmXCIsXG4gICAgYWxpZ25TZWxmOiBcImNlbnRlclwiLFxuICAgIGZvbnRTaXplOiBcIjIwcHhcIixcbiAgICBmb250U3R5bGU6IFwiaXRhbGljXCIsXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICBsZWZ0OiBcIjUwJVwiLFxuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKC01MCUpXCIsXG4gIH1cbik7XG5cbi8vIGNvbnRlbnRzIHNpemUgJiBvdmVyZmxvd1xuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBNYW5hZ2VBdHRyaWJ1dGVzKFwiZGl2XCIsIGNvbnRhaW5lci5lbCwgXCJcIiwge1xuICB3aWR0aDogXCI2MCVcIixcbiAgaGVpZ2h0OiBcIjkwdmhcIixcbiAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gIG1zT3ZlcmZsb3dTdHlsZTogXCJub25lXCIsXG4gIHNjcm9sbGJhcldpZHRoOiBcIm5vbmVcIixcbiAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxufSk7XG5cbi8vIGNvbnRlbnRzIHBvc2l0aW9uaW5nXG5leHBvcnQgY29uc3QgY29udGVudENvbnRhaW5lciA9IE1hbmFnZUF0dHJpYnV0ZXMoXCJkaXZcIiwgY29udGVudC5lbCwgXCJcIiwge1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG59KTtcblxuLy8gY29udGVudHMgc2l6ZSAmIG92ZXJmbG93XG5leHBvcnQgY29uc3Qgc2Vjb25kQ29udGVudCA9IE1hbmFnZUF0dHJpYnV0ZXMoXCJkaXZcIiwgY29udGFpbmVyLmVsLCBcIlwiLCB7XG4gIG1pbldpZHRoOiBcIjcydmhcIixcbiAgbWF4V2lkdGg6IFwiNzJ2aFwiLFxuICBoZWlnaHQ6IFwiOTB2aFwiLFxuICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgbXNPdmVyZmxvd1N0eWxlOiBcIm5vbmVcIixcbiAgc2Nyb2xsYmFyV2lkdGg6IFwibm9uZVwiLFxuICBtYXJnaW5MZWZ0OiBcIjEwcHhcIixcbiAgbWFyZ2luUmlnaHQ6IFwiMHB4XCIsXG4gIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgYmFja2dyb3VuZENvbG9yOiBcIiNmN2U4ZDNcIixcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG59KTtcblxuLy8gY29udGVudHMgcG9zaXRpb25pbmdcbmV4cG9ydCBjb25zdCBzZWNvbmRDb250ZW50Q29udGFpbmVyID0gTWFuYWdlQXR0cmlidXRlcyhcbiAgXCJkaXZcIixcbiAgc2Vjb25kQ29udGVudC5lbCxcbiAgXCJcIixcbiAge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IGZvb3RlciA9IE1hbmFnZUF0dHJpYnV0ZXMoXCJmb290ZXJcIiwgY29udGVudC5lbCwgXCJSb2JpbiBSeWFuXCIsIHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICBoZWlnaHQ6IFwiNy41dmhcIixcbiAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZjFcIixcbn0pO1xuXG5leHBvcnQgY29uc3QgaG9tZUJ0biA9IGRlc2lnbkJ0bihcIkhvbWVcIik7XG5leHBvcnQgY29uc3QgaW5mb0J0biA9IGRlc2lnbkJ0bihcIkluZm9cIik7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuYm9keS5zdHlsZS5tYXJnaW4gPSBcIjBweFwiO1xuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmN2U4ZDNcIjtcblxuZXhwb3J0IGNvbnN0IHNtYWxsZXJXaW5kb3cgPSAoKSA9PiB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCAxMDAwKSB7XG4gICAgICBjb250ZW50LmVsLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICBjb250ZW50LmVsLnN0eWxlLmhlaWdodCA9IFwiOTB2aFwiO1xuICAgICAgY29udGFpbmVyLmVsLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuICAgICAgc2Vjb25kQ29udGVudC5lbC5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgICAgc2Vjb25kQ29udGVudC5lbC5zdHlsZS5oZWlnaHQgPSBcIjkwdmhcIjtcbiAgICAgIHNlY29uZENvbnRlbnQuZWwuc3R5bGUuYWxpZ25TZWxmID0gXCJjZW50ZXJcIjtcbiAgICAgIGxvZ28uZWwuc3R5bGUubGVmdCA9IFwiNzAlXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lci5lbC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbiAgICAgIGNvbnRlbnQuZWwuc3R5bGUud2lkdGggPSBcIjYwJVwiO1xuICAgICAgc2Vjb25kQ29udGVudC5lbC5zdHlsZS53aWR0aCA9IFwiNDAlXCI7XG4gICAgICBjb250ZW50LmVsLnN0eWxlLmhlaWdodCA9IFwiOTB2aFwiO1xuICAgICAgc2Vjb25kQ29udGVudC5lbC5zdHlsZS5oZWlnaHQgPSBcIjkwdmhcIjtcbiAgICAgIHNlY29uZENvbnRlbnQuZWwuc3R5bGUuYWxpZ25TZWxmID0gXCJcIjtcbiAgICAgIGxvZ28uZWwuc3R5bGUubGVmdCA9IFwiNTAlXCI7XG4gICAgfVxuICB9KTtcbn07XG5cbnNtYWxsZXJXaW5kb3coKTtcbnNjcm9sbFN0YXRlKGNvbnRlbnQsIHNlY29uZENvbnRlbnQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9