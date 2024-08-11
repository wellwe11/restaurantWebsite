"use strict";
(self["webpackChunkrestaurantwebsite"] = self["webpackChunkrestaurantwebsite"] || []).push([["infoTab"],{

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

/***/ "./src/infoTab.js":
/*!************************!*\
  !*** ./src/infoTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iconOneCenter: () => (/* binding */ iconOneCenter),
/* harmony export */   iconOneLeft: () => (/* binding */ iconOneLeft),
/* harmony export */   iconOneRight: () => (/* binding */ iconOneRight),
/* harmony export */   iconTwoCenter: () => (/* binding */ iconTwoCenter),
/* harmony export */   iconTwoCenterThree: () => (/* binding */ iconTwoCenterThree),
/* harmony export */   infoItemOne: () => (/* binding */ infoItemOne),
/* harmony export */   infoItemThree: () => (/* binding */ infoItemThree),
/* harmony export */   itemOneCenterBar: () => (/* binding */ itemOneCenterBar),
/* harmony export */   itemOneLeftBar: () => (/* binding */ itemOneLeftBar),
/* harmony export */   itemOneRightBar: () => (/* binding */ itemOneRightBar),
/* harmony export */   itemThreeCentertBar: () => (/* binding */ itemThreeCentertBar),
/* harmony export */   itemThreeLeftBar: () => (/* binding */ itemThreeLeftBar),
/* harmony export */   itemThreeRightBar: () => (/* binding */ itemThreeRightBar)
/* harmony export */ });
/* harmony import */ var _extendedUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extendedUI */ "./src/extendedUI.js");
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts */ "./src/scripts.js");



const randomText = `
In malesuada, arcu non faucibus tempor, 
orci lacus auctor libero, id ultricies eros arcu non dui. 
Ut imperdiet massa non elit dapibus, in tincidunt lectus rhoncus. 
................................................................................
SomeRandomAddress, 413, 3215, someRandomCity, someRandomCountry
`;

const infoText = `
Phone Number: + 123 123 231
Email Address: somePlaceToEat@yahoo.com
Managers:
Peter Johansson & Johannes Skog
`;

const infoItemOne = (0,_extendedUI__WEBPACK_IMPORTED_MODULE_0__.createMenuItem)("", "#f7e8d3", "100%", "");
const infoItemThree = (0,_extendedUI__WEBPACK_IMPORTED_MODULE_0__.createMenuItem)("", "#f7e8d3", "100%", "1vh");

const itemOneLeftBar = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)("div", infoItemOne.el, "", {
  width: "23%",
  height: "100%",
  backgroundColor: "#ab3434",
  marginRight: "1px",
});

const iconOneLeft = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)("div", itemOneLeftBar.el, "", {
  height: "100px",
  width: "100px",
  //   backgroundImage: `url(${"something"})`,
  backgroundSize: "100px",
  marginLeft: "20px",
  marginTop: "50px",
});

const itemOneCenterBar = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)("div", infoItemOne.el, "", {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "48%",
  height: "100%",
  marginRight: "1px",
});

const iconOneCenter = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)("div", itemOneCenterBar.el, "", {
  height: "50%",
  width: "90%",

  //   backgroundImage: `url(${"something"})`,
  backgroundSize: "400px",
  backgroundRepeat: "no-repeat",

  lineHeight: "1.5",
});

// items two
const iconTwoCenter = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)(
  "div",
  itemOneCenterBar.el,
  infoText,
  {
    width: "60%",
    margin: "0 85px 100px auto",

    lineHeight: "2",
    fontSize: "18px",
    height: "350px",
    overflow: "overlay",
  }
);

const itemOneRightBar = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)("div", infoItemOne.el, "", {
  width: "23%",
  height: "100%",
  backgroundColor: "#ab3434",
});

const iconOneRight = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)("div", itemOneRightBar.el, "", {
  height: "100px",
  width: "100px",
  //   backgroundImage: `url(${"something"})`,
  backgroundSize: "100px",
  marginLeft: "30px",
  marginTop: "200px",
});

// items three
const itemThreeLeftBar = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)("div", infoItemThree.el, "", {
  width: "23%",
  height: "100%",
  backgroundColor: "#ab3434",
  //   backgroundImage: `url(${"something"})`,
  backgroundSize: "100px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "90px",
});

const itemThreeCentertBar = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)(
  "div",
  infoItemThree.el,
  "",
  {
    width: "48%",
    height: "100%",
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

const itemThreeRightBar = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)("div", infoItemThree.el, "", {
  width: "23%",
  height: "100%",
  backgroundColor: "#ab3434",
  //   backgroundImage: `url(${"something"})`,
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/infoTab.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQSxxREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnR3ZWJzaXRlLy4vc3JjL2V4dGVuZGVkVUkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHdlYnNpdGUvLi9zcmMvaW5mb1RhYi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50d2Vic2l0ZS8uL3NyYy9zY3JpcHRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnR3ZWJzaXRlLy4vc3JjL3VpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hbmFnZUF0dHJpYnV0ZXMgfSBmcm9tIFwiLi9zY3JpcHRzLmpzXCI7XG5pbXBvcnQgeyBuYXZCYXIsIGNvbnRlbnRDb250YWluZXIsIHNlY29uZENvbnRlbnRDb250YWluZXIgfSBmcm9tIFwiLi91aS5qc1wiO1xuLy8gRXh0ZW5kcyBNYW5hZ2VBdHRyaWJ1dGVzKCkgJiBzcGVjaWZpZXMgYnV0dG9uc1xuZXhwb3J0IGNvbnN0IGRlc2lnbkJ0biA9ICh0ZXh0KSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IE1hbmFnZUF0dHJpYnV0ZXMoXCJidXR0b25cIiwgbmF2QmFyLmVsLCB0ZXh0LCB7XG4gICAgd2lkdGg6IFwiNDlweFwiLFxuICAgIGhlaWdodDogXCIyMnB4XCIsXG4gICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICBmb250U2l6ZTogXCIxNXB4XCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmN2U4ZDNcIixcbiAgICBtYXJnaW46IFwiMjVweFwiLFxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgYm9yZGVyOiBcIm5vbmVcIixcblxuICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAgIHRvIHJpZ2h0LFxuICAgICAgICAgICAgICByZ2JhKDE1OCwgMTU3LCAxOTMsIDApLFxuICAgICAgICAgICAgICByZ2JhKDE1OCwgMTU3LCAxOTMsIDApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMCwgMCwgMCksIHJnYigwLCAwLCAwKSlgLFxuICAgIGJhY2tncm91bmRTaXplOiBcIjEwMCUgMC4xNWVtLCAwIDAuMTVlbVwiLFxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCIxMDAlIDEwMCUsIDAlIDEwMCVcIixcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxuICAgIHRyYW5zaXRpb246IFwiYmFja2dyb3VuZC1zaXplIDQwMG1zXCIsXG4gIH0pO1xuICByZXR1cm4gYnV0dG9uO1xufTtcblxuLy8gRXh0ZW5kcyBNYW5hZ2VBdHRyaWJ1dGVzKCkgJiBzcGVjaWZpZXMgbWVudSBpdGVtc1xuZXhwb3J0IGNvbnN0IGNyZWF0ZU1lbnVJdGVtID0gKHRleHQsIGNvbG9yLCB3aWR0aCwgbWFyZ2luVG9wLCBtYXJnaW5Cb3R0b20pID0+IHtcbiAgY29uc3QgaXRlbSA9IE1hbmFnZUF0dHJpYnV0ZXMoXCJkaXZcIiwgY29udGVudENvbnRhaW5lci5lbCwgdGV4dCwge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogXCI0MDBweFwiLFxuXG4gICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG5cbiAgICBtYXJnaW5Ub3A6IG1hcmdpblRvcCxcbiAgICBtYXJnaW5Cb3R0b206IG1hcmdpbkJvdHRvbSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxuICB9KTtcbiAgcmV0dXJuIGl0ZW07XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlRm9vZEl0ZW0gPSAoXG4gIHRleHQsXG4gIHBpY3R1cmUsXG4gIG1hcmdpbixcbiAgcGljdHVyZVBvc2l0aW9uLFxuICBzaXplXG4pID0+IHtcbiAgY29uc3QgaXRlbSA9IE1hbmFnZUF0dHJpYnV0ZXMoXCJkaXZcIiwgc2Vjb25kQ29udGVudENvbnRhaW5lci5lbCwgdGV4dCwge1xuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICBjb2xvcjogXCJibGFja1wiLFxuICAgIG1pbldpZHRoOiBcIjEwMCVcIixcbiAgICBoZWlnaHQ6IFwiNTB2aFwiLFxuICAgIG1heEhlaWdodDogXCI1MHZoXCIsXG4gICAgbWFyZ2luVG9wOiBtYXJnaW4sXG5cbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2IoMTcxLCA1MiwgNTIsIDApIDE1JSwgcmdiKDE3MSwgNTIsIDUyLCAxKSAwJSksXG4gICAgdXJsKCR7cGljdHVyZX0pYCxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogc2l6ZSxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246IHBpY3R1cmVQb3NpdGlvbixcbiAgfSk7XG4gIHJldHVybiBpdGVtO1xufTtcblxuZXhwb3J0IGNvbnN0IGZvb2RJdGVtVGV4dCA9ICh0ZXh0LCB0b0FwcGVuZCkgPT4ge1xuICBjb25zdCBpdGVtID0gTWFuYWdlQXR0cmlidXRlcyhcImRpdlwiLCB0b0FwcGVuZCwgdGV4dCwge1xuICAgIGhlaWdodDogXCI3MiVcIixcbiAgICBtYXJnaW5MZWZ0OiBcIjUlXCIsXG4gICAgd2lkdGg6IFwiOTAlXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2FiMzQzNFwiLFxuICAgIC8vIGJhY2tncm91bmRDb2xvcjogXCJncmVlblwiLFxuICAgIHRleHRBbGlnbjogXCJzdGFydFwiLFxuICAgIGZvbnRGYW1pbHk6IFwiJ0dlb3JnaWEnLCBzZXJpZlwiLFxuICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICBtYXJnaW5Ub3A6IFwiMTUlXCIsXG4gICAgbGluZUhlaWdodDogXCIzXCIsXG4gIH0pO1xuXG4gIHJldHVybiBpdGVtO1xufTtcbiIsImltcG9ydCB7IGNyZWF0ZU1lbnVJdGVtIH0gZnJvbSBcIi4vZXh0ZW5kZWRVSVwiO1xuaW1wb3J0IHsgTWFuYWdlQXR0cmlidXRlcyB9IGZyb20gXCIuL3NjcmlwdHNcIjtcblxuY29uc3QgcmFuZG9tVGV4dCA9IGBcbkluIG1hbGVzdWFkYSwgYXJjdSBub24gZmF1Y2lidXMgdGVtcG9yLCBcbm9yY2kgbGFjdXMgYXVjdG9yIGxpYmVybywgaWQgdWx0cmljaWVzIGVyb3MgYXJjdSBub24gZHVpLiBcblV0IGltcGVyZGlldCBtYXNzYSBub24gZWxpdCBkYXBpYnVzLCBpbiB0aW5jaWR1bnQgbGVjdHVzIHJob25jdXMuIFxuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cblNvbWVSYW5kb21BZGRyZXNzLCA0MTMsIDMyMTUsIHNvbWVSYW5kb21DaXR5LCBzb21lUmFuZG9tQ291bnRyeVxuYDtcblxuY29uc3QgaW5mb1RleHQgPSBgXG5QaG9uZSBOdW1iZXI6ICsgMTIzIDEyMyAyMzFcbkVtYWlsIEFkZHJlc3M6IHNvbWVQbGFjZVRvRWF0QHlhaG9vLmNvbVxuTWFuYWdlcnM6XG5QZXRlciBKb2hhbnNzb24gJiBKb2hhbm5lcyBTa29nXG5gO1xuXG5leHBvcnQgY29uc3QgaW5mb0l0ZW1PbmUgPSBjcmVhdGVNZW51SXRlbShcIlwiLCBcIiNmN2U4ZDNcIiwgXCIxMDAlXCIsIFwiXCIpO1xuZXhwb3J0IGNvbnN0IGluZm9JdGVtVGhyZWUgPSBjcmVhdGVNZW51SXRlbShcIlwiLCBcIiNmN2U4ZDNcIiwgXCIxMDAlXCIsIFwiMXZoXCIpO1xuXG5leHBvcnQgY29uc3QgaXRlbU9uZUxlZnRCYXIgPSBNYW5hZ2VBdHRyaWJ1dGVzKFwiZGl2XCIsIGluZm9JdGVtT25lLmVsLCBcIlwiLCB7XG4gIHdpZHRoOiBcIjIzJVwiLFxuICBoZWlnaHQ6IFwiMTAwJVwiLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2FiMzQzNFwiLFxuICBtYXJnaW5SaWdodDogXCIxcHhcIixcbn0pO1xuXG5leHBvcnQgY29uc3QgaWNvbk9uZUxlZnQgPSBNYW5hZ2VBdHRyaWJ1dGVzKFwiZGl2XCIsIGl0ZW1PbmVMZWZ0QmFyLmVsLCBcIlwiLCB7XG4gIGhlaWdodDogXCIxMDBweFwiLFxuICB3aWR0aDogXCIxMDBweFwiLFxuICAvLyAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1wic29tZXRoaW5nXCJ9KWAsXG4gIGJhY2tncm91bmRTaXplOiBcIjEwMHB4XCIsXG4gIG1hcmdpbkxlZnQ6IFwiMjBweFwiLFxuICBtYXJnaW5Ub3A6IFwiNTBweFwiLFxufSk7XG5cbmV4cG9ydCBjb25zdCBpdGVtT25lQ2VudGVyQmFyID0gTWFuYWdlQXR0cmlidXRlcyhcImRpdlwiLCBpbmZvSXRlbU9uZS5lbCwgXCJcIiwge1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIHdpZHRoOiBcIjQ4JVwiLFxuICBoZWlnaHQ6IFwiMTAwJVwiLFxuICBtYXJnaW5SaWdodDogXCIxcHhcIixcbn0pO1xuXG5leHBvcnQgY29uc3QgaWNvbk9uZUNlbnRlciA9IE1hbmFnZUF0dHJpYnV0ZXMoXCJkaXZcIiwgaXRlbU9uZUNlbnRlckJhci5lbCwgXCJcIiwge1xuICBoZWlnaHQ6IFwiNTAlXCIsXG4gIHdpZHRoOiBcIjkwJVwiLFxuXG4gIC8vICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7XCJzb21ldGhpbmdcIn0pYCxcbiAgYmFja2dyb3VuZFNpemU6IFwiNDAwcHhcIixcbiAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcblxuICBsaW5lSGVpZ2h0OiBcIjEuNVwiLFxufSk7XG5cbi8vIGl0ZW1zIHR3b1xuZXhwb3J0IGNvbnN0IGljb25Ud29DZW50ZXIgPSBNYW5hZ2VBdHRyaWJ1dGVzKFxuICBcImRpdlwiLFxuICBpdGVtT25lQ2VudGVyQmFyLmVsLFxuICBpbmZvVGV4dCxcbiAge1xuICAgIHdpZHRoOiBcIjYwJVwiLFxuICAgIG1hcmdpbjogXCIwIDg1cHggMTAwcHggYXV0b1wiLFxuXG4gICAgbGluZUhlaWdodDogXCIyXCIsXG4gICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgIGhlaWdodDogXCIzNTBweFwiLFxuICAgIG92ZXJmbG93OiBcIm92ZXJsYXlcIixcbiAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IGl0ZW1PbmVSaWdodEJhciA9IE1hbmFnZUF0dHJpYnV0ZXMoXCJkaXZcIiwgaW5mb0l0ZW1PbmUuZWwsIFwiXCIsIHtcbiAgd2lkdGg6IFwiMjMlXCIsXG4gIGhlaWdodDogXCIxMDAlXCIsXG4gIGJhY2tncm91bmRDb2xvcjogXCIjYWIzNDM0XCIsXG59KTtcblxuZXhwb3J0IGNvbnN0IGljb25PbmVSaWdodCA9IE1hbmFnZUF0dHJpYnV0ZXMoXCJkaXZcIiwgaXRlbU9uZVJpZ2h0QmFyLmVsLCBcIlwiLCB7XG4gIGhlaWdodDogXCIxMDBweFwiLFxuICB3aWR0aDogXCIxMDBweFwiLFxuICAvLyAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1wic29tZXRoaW5nXCJ9KWAsXG4gIGJhY2tncm91bmRTaXplOiBcIjEwMHB4XCIsXG4gIG1hcmdpbkxlZnQ6IFwiMzBweFwiLFxuICBtYXJnaW5Ub3A6IFwiMjAwcHhcIixcbn0pO1xuXG4vLyBpdGVtcyB0aHJlZVxuZXhwb3J0IGNvbnN0IGl0ZW1UaHJlZUxlZnRCYXIgPSBNYW5hZ2VBdHRyaWJ1dGVzKFwiZGl2XCIsIGluZm9JdGVtVGhyZWUuZWwsIFwiXCIsIHtcbiAgd2lkdGg6IFwiMjMlXCIsXG4gIGhlaWdodDogXCIxMDAlXCIsXG4gIGJhY2tncm91bmRDb2xvcjogXCIjYWIzNDM0XCIsXG4gIC8vICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7XCJzb21ldGhpbmdcIn0pYCxcbiAgYmFja2dyb3VuZFNpemU6IFwiMTAwcHhcIixcbiAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcbiAgYmFja2dyb3VuZFBvc2l0aW9uOiBcIjkwcHhcIixcbn0pO1xuXG5leHBvcnQgY29uc3QgaXRlbVRocmVlQ2VudGVydEJhciA9IE1hbmFnZUF0dHJpYnV0ZXMoXG4gIFwiZGl2XCIsXG4gIGluZm9JdGVtVGhyZWUuZWwsXG4gIFwiXCIsXG4gIHtcbiAgICB3aWR0aDogXCI0OCVcIixcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgaWNvblR3b0NlbnRlclRocmVlID0gTWFuYWdlQXR0cmlidXRlcyhcbiAgXCJkaXZcIixcbiAgaXRlbVRocmVlQ2VudGVydEJhci5lbCxcbiAgcmFuZG9tVGV4dCxcbiAge1xuICAgIHdpZHRoOiBcIjkwJVwiLFxuICAgIGhlaWdodDogXCIzMDBweFwiLFxuICAgIG92ZXJmbG93OiBcIm92ZXJsYXlcIixcblxuICAgIG1hcmdpbkxlZnQ6IFwiMiVcIixcbiAgICBtYXJnaW5SaWdodDogXCIyJVwiLFxuICAgIGxpbmVIZWlnaHQ6IFwiMS41XCIsXG4gICAgbWFyZ2luVG9wOiBcIjcwcHhcIixcbiAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IGl0ZW1UaHJlZVJpZ2h0QmFyID0gTWFuYWdlQXR0cmlidXRlcyhcImRpdlwiLCBpbmZvSXRlbVRocmVlLmVsLCBcIlwiLCB7XG4gIHdpZHRoOiBcIjIzJVwiLFxuICBoZWlnaHQ6IFwiMTAwJVwiLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2FiMzQzNFwiLFxuICAvLyAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1wic29tZXRoaW5nXCJ9KWAsXG4gIGJhY2tncm91bmRTaXplOiBcIjEwMHB4XCIsXG4gIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXG4gIGJhY2tncm91bmRQb3NpdGlvbjogXCIxMHB4IDEwOXB4XCIsXG59KTtcbiIsIi8vIEZhY3RvcnkgZnVuY3Rpb24gZm9yIGVsZW1lbnRzIChjb2RlIHN0YXJ0cyBoZXJlKVxuZXhwb3J0IGNvbnN0IENyZWF0ZUVsZW1lbnRGdW5jdGlvbiA9ICh0eXBlLCBlbGVtZW50VG9BcHBlbmQsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGVsZW1lbnRUb0FwcGVuZC5hcHBlbmRDaGlsZChlbCk7XG4gIE9iamVjdC5hc3NpZ24oZWwuc3R5bGUsIG9wdGlvbnMuc3R5bGVzKTtcblxuICByZXR1cm4geyBlbCB9O1xufTtcblxuLy8gRGVmaW5lIHZhbHVlcyBmb3IgZWxlbWVudHNcbmV4cG9ydCBjb25zdCBNYW5hZ2VBdHRyaWJ1dGVzID0gKHR5cGUsIGVsZW1lbnRUb0FwcGVuZCwgbmFtZSwgc3R5bGVzKSA9PiB7XG4gIGNvbnN0IG5ld0VsID0gQ3JlYXRlRWxlbWVudEZ1bmN0aW9uKHR5cGUsIGVsZW1lbnRUb0FwcGVuZCwgeyBzdHlsZXMgfSk7XG4gIG5ld0VsLmVsLnRleHRDb250ZW50ID0gbmFtZTtcbiAgcmV0dXJuIG5ld0VsO1xufTtcblxuLy8gVG9nZ2xlIGVsZW1lbnQgdmlzaWJpbGl0eVxuZXhwb3J0IGNvbnN0IHRvZ2dsZUVsZW1lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXlFbGVtZW50ID0gKC4uLmVsZW1lbnRzKSA9PiB7XG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gKGVsZW1lbnQuZWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiKSk7XG4gIH07XG5cbiAgY29uc3QgaGlkZUVsZW1lbnQgPSAoLi4uZWxlbWVudHMpID0+IHtcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiAoZWxlbWVudC5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpKTtcbiAgfTtcblxuICByZXR1cm4geyBkaXNwbGF5RWxlbWVudCwgaGlkZUVsZW1lbnQgfTtcbn07XG5cbi8vIDpob3ZlciBzdGF0ZSBmb3IgYnV0dG9uc1xuZXhwb3J0IGNvbnN0IGhvdmVyU3RhdGUgPSAoLi4uYnV0dG9ucykgPT4ge1xuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5lbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICAgIGJ1dHRvbi5lbC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiMCAwLjE1ZW0sIDEwMCUgMC4xNWVtXCI7XG4gICAgfSk7XG5cbiAgICBidXR0b24uZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICAgIGJ1dHRvbi5lbC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiMCAwLjE1ZW0sIDAlIDAuMTVlbVwiO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbi8vIG92ZXJmbG93IG9uIGVsZW1lbnRzXG5leHBvcnQgY29uc3Qgc2Nyb2xsU3RhdGUgPSAoLi4uZWxlbWVudHMpID0+IHtcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTAwMCkge1xuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xuICAgICAgICBlbGVtZW50LmVsLnN0eWxlLm92ZXJmbG93ID0gXCJzY3JvbGxcIjtcbiAgICAgIH0pO1xuXG4gICAgICBlbGVtZW50LmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcbiAgICAgICAgZWxlbWVudC5lbC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcbiIsImltcG9ydCB7IGRlc2lnbkJ0biB9IGZyb20gXCIuL2V4dGVuZGVkVUlcIjtcbmltcG9ydCB7IE1hbmFnZUF0dHJpYnV0ZXMsIHNjcm9sbFN0YXRlIH0gZnJvbSBcIi4vc2NyaXB0c1wiO1xuaW1wb3J0KFwiLi9tZW51VGFiXCIpO1xuLy8gaW1wb3J0IFdhbGxwYXBlciBmcm9tIFwiLi93YWxscGFwZXIuanBlZ1wiO1xuXG4vLyBJbiBhbm90aGVyIG1vZHVsZSBvciBmaWxlXG5leHBvcnQgY29uc3QgaGVhZGVyID0gTWFuYWdlQXR0cmlidXRlcyhcImhlYWRlclwiLCBkb2N1bWVudC5ib2R5LCBcIlwiLCB7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBqdXN0aWZ5Q29udGVudDogXCJmbGV4ZW5kXCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIGhlaWdodDogXCI3MHB4XCIsXG4gIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmYxXCIsXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgaGVpZ2h0OiBcIjcuNXZoXCIsXG4gIG1hcmdpbkJvdHRvbTogXCIydmhcIixcbn0pO1xuXG5leHBvcnQgY29uc3QgY29udGFpbmVyID0gTWFuYWdlQXR0cmlidXRlcyhcImRpdlwiLCBkb2N1bWVudC5ib2R5LCBcIlwiLCB7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgbWFyZ2luOiBcIjAgYXV0byAyJSBhdXRvXCIsXG4gIGJhY2tncm91bmRDb2xvcjogXCIjZjdlOGQzXCIsXG4gIHdpZHRoOiBcIjk1JVwiLFxufSk7XG5cbmV4cG9ydCBjb25zdCBuYXZCYXIgPSBNYW5hZ2VBdHRyaWJ1dGVzKFwibmF2XCIsIGhlYWRlci5lbCwgXCJcIiwge1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgbWFyZ2luTGVmdDogXCIxLjl2aFwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICB3aWR0aDogXCIxMDBweFwiLFxufSk7XG5cbmV4cG9ydCBjb25zdCBsb2dvID0gTWFuYWdlQXR0cmlidXRlcyhcbiAgXCJwXCIsXG4gIGhlYWRlci5lbCxcbiAgXCJQZXRlciAmIEpvbm5pZXMgUGl6emVyaWFcIixcbiAge1xuICAgIGZvbnRGYW1pbHk6IFwiJ2xpYnJlIGJhc2tlcnZpbGxlJywgc2VyaWZcIixcbiAgICBhbGlnblNlbGY6IFwiY2VudGVyXCIsXG4gICAgZm9udFNpemU6IFwiMjBweFwiLFxuICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIGxlZnQ6IFwiNTAlXCIsXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoLTUwJSlcIixcbiAgfVxuKTtcblxuLy8gY29udGVudHMgc2l6ZSAmIG92ZXJmbG93XG5leHBvcnQgY29uc3QgY29udGVudCA9IE1hbmFnZUF0dHJpYnV0ZXMoXCJkaXZcIiwgY29udGFpbmVyLmVsLCBcIlwiLCB7XG4gIHdpZHRoOiBcIjYwJVwiLFxuICBoZWlnaHQ6IFwiOTB2aFwiLFxuICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgbXNPdmVyZmxvd1N0eWxlOiBcIm5vbmVcIixcbiAgc2Nyb2xsYmFyV2lkdGg6IFwibm9uZVwiLFxuICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG59KTtcblxuLy8gY29udGVudHMgcG9zaXRpb25pbmdcbmV4cG9ydCBjb25zdCBjb250ZW50Q29udGFpbmVyID0gTWFuYWdlQXR0cmlidXRlcyhcImRpdlwiLCBjb250ZW50LmVsLCBcIlwiLCB7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbn0pO1xuXG4vLyBjb250ZW50cyBzaXplICYgb3ZlcmZsb3dcbmV4cG9ydCBjb25zdCBzZWNvbmRDb250ZW50ID0gTWFuYWdlQXR0cmlidXRlcyhcImRpdlwiLCBjb250YWluZXIuZWwsIFwiXCIsIHtcbiAgbWluV2lkdGg6IFwiNzJ2aFwiLFxuICBtYXhXaWR0aDogXCI3MnZoXCIsXG4gIGhlaWdodDogXCI5MHZoXCIsXG4gIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICBtc092ZXJmbG93U3R5bGU6IFwibm9uZVwiLFxuICBzY3JvbGxiYXJXaWR0aDogXCJub25lXCIsXG4gIG1hcmdpbkxlZnQ6IFwiMTBweFwiLFxuICBtYXJnaW5SaWdodDogXCIwcHhcIixcbiAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y3ZThkM1wiLFxuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbn0pO1xuXG4vLyBjb250ZW50cyBwb3NpdGlvbmluZ1xuZXhwb3J0IGNvbnN0IHNlY29uZENvbnRlbnRDb250YWluZXIgPSBNYW5hZ2VBdHRyaWJ1dGVzKFxuICBcImRpdlwiLFxuICBzZWNvbmRDb250ZW50LmVsLFxuICBcIlwiLFxuICB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgZm9vdGVyID0gTWFuYWdlQXR0cmlidXRlcyhcImZvb3RlclwiLCBjb250ZW50LmVsLCBcIlJvYmluIFJ5YW5cIiwge1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIGhlaWdodDogXCI3LjV2aFwiLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmMVwiLFxufSk7XG5cbmV4cG9ydCBjb25zdCBob21lQnRuID0gZGVzaWduQnRuKFwiSG9tZVwiKTtcbmV4cG9ydCBjb25zdCBpbmZvQnRuID0gZGVzaWduQnRuKFwiSW5mb1wiKTtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG5ib2R5LnN0eWxlLm1hcmdpbiA9IFwiMHB4XCI7XG5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2Y3ZThkM1wiO1xuXG5leHBvcnQgY29uc3Qgc21hbGxlcldpbmRvdyA9ICgpID0+IHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMDApIHtcbiAgICAgIGNvbnRlbnQuZWwuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICAgIGNvbnRlbnQuZWwuc3R5bGUuaGVpZ2h0ID0gXCI5MHZoXCI7XG4gICAgICBjb250YWluZXIuZWwuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XG4gICAgICBzZWNvbmRDb250ZW50LmVsLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICBzZWNvbmRDb250ZW50LmVsLnN0eWxlLmhlaWdodCA9IFwiOTB2aFwiO1xuICAgICAgc2Vjb25kQ29udGVudC5lbC5zdHlsZS5hbGlnblNlbGYgPSBcImNlbnRlclwiO1xuICAgICAgbG9nby5lbC5zdHlsZS5sZWZ0ID0gXCI3MCVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyLmVsLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuICAgICAgY29udGVudC5lbC5zdHlsZS53aWR0aCA9IFwiNjAlXCI7XG4gICAgICBzZWNvbmRDb250ZW50LmVsLnN0eWxlLndpZHRoID0gXCI0MCVcIjtcbiAgICAgIGNvbnRlbnQuZWwuc3R5bGUuaGVpZ2h0ID0gXCI5MHZoXCI7XG4gICAgICBzZWNvbmRDb250ZW50LmVsLnN0eWxlLmhlaWdodCA9IFwiOTB2aFwiO1xuICAgICAgc2Vjb25kQ29udGVudC5lbC5zdHlsZS5hbGlnblNlbGYgPSBcIlwiO1xuICAgICAgbG9nby5lbC5zdHlsZS5sZWZ0ID0gXCI1MCVcIjtcbiAgICB9XG4gIH0pO1xufTtcblxuc21hbGxlcldpbmRvdygpO1xuc2Nyb2xsU3RhdGUoY29udGVudCwgc2Vjb25kQ29udGVudCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=