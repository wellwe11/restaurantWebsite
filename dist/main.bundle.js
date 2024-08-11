"use strict";
(self["webpackChunkrestaurantwebsite"] = self["webpackChunkrestaurantwebsite"] || []).push([["main"],{

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts.js */ "./src/scripts.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");



(0,_scripts_js__WEBPACK_IMPORTED_MODULE_0__.hoverState)(_ui_js__WEBPACK_IMPORTED_MODULE_1__.homeBtn, _ui_js__WEBPACK_IMPORTED_MODULE_1__.infoBtn);

const fetch = (...modules) => {
  modules.forEach((thisModule) => fetchModule(thisModule));
};

const whichTab = () => {
  const booleanValues = {
    homeOn: true,
    infoOn: false,
  };

  return booleanValues;
};

const allModules = ["homeTab", "infoTab"];

async function fetchModule(moduleName) {
  let module;
  try {
    if (moduleName === "homeTab") {
      module = await __webpack_require__.e(/*! import() */ "src_homeTab_js").then(__webpack_require__.bind(__webpack_require__, /*! ./homeTab.js */ "./src/homeTab.js"));
      whichTab.homeOn
        ? (0,_scripts_js__WEBPACK_IMPORTED_MODULE_0__.toggleElement)().displayElement(
            module.homeItemOne,
            module.homeItemTwo,
            module.homeItemThree
          )
        : (0,_scripts_js__WEBPACK_IMPORTED_MODULE_0__.toggleElement)().hideElement(
            module.homeItemOne,
            module.homeItemTwo,
            module.homeItemThree
          );
    } else if (moduleName === "infoTab") {
      module = await __webpack_require__.e(/*! import() */ "src_infoTab_js").then(__webpack_require__.bind(__webpack_require__, /*! ./infoTab.js */ "./src/infoTab.js"));
      whichTab.infoOn
        ? (0,_scripts_js__WEBPACK_IMPORTED_MODULE_0__.toggleElement)().displayElement(
            module.infoItemOne,
            module.infoItemThree
          )
        : (0,_scripts_js__WEBPACK_IMPORTED_MODULE_0__.toggleElement)().hideElement(module.infoItemOne, module.infoItemThree);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

_ui_js__WEBPACK_IMPORTED_MODULE_1__.homeBtn.el.addEventListener("click", () => {
  whichTab.homeOn = true;
  whichTab.infoOn = false;
  fetch(...allModules);
});

_ui_js__WEBPACK_IMPORTED_MODULE_1__.infoBtn.el.addEventListener("click", () => {
  whichTab.homeOn = false;
  whichTab.infoOn = true;
  fetch(...allModules);
});

document.addEventListener("DOMContentLoaded", () => {
  _ui_js__WEBPACK_IMPORTED_MODULE_1__.homeBtn.el.click();
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNPLHNCQUFzQiwwREFBZ0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNPLCtCQUErQiwwREFBZ0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sZUFBZSwwREFBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRU0sZ0JBQWdCLHNEQUFTO0FBQ3pCLGdCQUFnQixzREFBUzs7QUFFaEM7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EscURBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50d2Vic2l0ZS8uL3NyYy9leHRlbmRlZFVJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnR3ZWJzaXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnR3ZWJzaXRlLy4vc3JjL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHdlYnNpdGUvLi9zcmMvdWkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFuYWdlQXR0cmlidXRlcyB9IGZyb20gXCIuL3NjcmlwdHMuanNcIjtcbmltcG9ydCB7IG5hdkJhciwgY29udGVudENvbnRhaW5lciwgc2Vjb25kQ29udGVudENvbnRhaW5lciB9IGZyb20gXCIuL3VpLmpzXCI7XG4vLyBFeHRlbmRzIE1hbmFnZUF0dHJpYnV0ZXMoKSAmIHNwZWNpZmllcyBidXR0b25zXG5leHBvcnQgY29uc3QgZGVzaWduQnRuID0gKHRleHQpID0+IHtcbiAgY29uc3QgYnV0dG9uID0gTWFuYWdlQXR0cmlidXRlcyhcImJ1dHRvblwiLCBuYXZCYXIuZWwsIHRleHQsIHtcbiAgICB3aWR0aDogXCI0OXB4XCIsXG4gICAgaGVpZ2h0OiBcIjIycHhcIixcbiAgICBjb2xvcjogXCJibGFja1wiLFxuICAgIGZvbnRTaXplOiBcIjE1cHhcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y3ZThkM1wiLFxuICAgIG1hcmdpbjogXCIyNXB4XCIsXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICBib3JkZXI6IFwibm9uZVwiLFxuXG4gICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgdG8gcmlnaHQsXG4gICAgICAgICAgICAgIHJnYmEoMTU4LCAxNTcsIDE5MywgMCksXG4gICAgICAgICAgICAgIHJnYmEoMTU4LCAxNTcsIDE5MywgMClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigwLCAwLCAwKSwgcmdiKDAsIDAsIDApKWAsXG4gICAgYmFja2dyb3VuZFNpemU6IFwiMTAwJSAwLjE1ZW0sIDAgMC4xNWVtXCIsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcIjEwMCUgMTAwJSwgMCUgMTAwJVwiLFxuICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXG4gICAgdHJhbnNpdGlvbjogXCJiYWNrZ3JvdW5kLXNpemUgNDAwbXNcIixcbiAgfSk7XG4gIHJldHVybiBidXR0b247XG59O1xuXG4vLyBFeHRlbmRzIE1hbmFnZUF0dHJpYnV0ZXMoKSAmIHNwZWNpZmllcyBtZW51IGl0ZW1zXG5leHBvcnQgY29uc3QgY3JlYXRlTWVudUl0ZW0gPSAodGV4dCwgY29sb3IsIHdpZHRoLCBtYXJnaW5Ub3AsIG1hcmdpbkJvdHRvbSkgPT4ge1xuICBjb25zdCBpdGVtID0gTWFuYWdlQXR0cmlidXRlcyhcImRpdlwiLCBjb250ZW50Q29udGFpbmVyLmVsLCB0ZXh0LCB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG5cbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBcIjQwMHB4XCIsXG5cbiAgICBjb2xvcjogXCJibGFja1wiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcblxuICAgIG1hcmdpblRvcDogbWFyZ2luVG9wLFxuICAgIG1hcmdpbkJvdHRvbTogbWFyZ2luQm90dG9tLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gIH0pO1xuICByZXR1cm4gaXRlbTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVGb29kSXRlbSA9IChcbiAgdGV4dCxcbiAgcGljdHVyZSxcbiAgbWFyZ2luLFxuICBwaWN0dXJlUG9zaXRpb24sXG4gIHNpemVcbikgPT4ge1xuICBjb25zdCBpdGVtID0gTWFuYWdlQXR0cmlidXRlcyhcImRpdlwiLCBzZWNvbmRDb250ZW50Q29udGFpbmVyLmVsLCB0ZXh0LCB7XG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgbWluV2lkdGg6IFwiMTAwJVwiLFxuICAgIGhlaWdodDogXCI1MHZoXCIsXG4gICAgbWF4SGVpZ2h0OiBcIjUwdmhcIixcbiAgICBtYXJnaW5Ub3A6IG1hcmdpbixcblxuICAgIGJhY2tncm91bmRJbWFnZTogYGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYigxNzEsIDUyLCA1MiwgMCkgMTUlLCByZ2IoMTcxLCA1MiwgNTIsIDEpIDAlKSxcbiAgICB1cmwoJHtwaWN0dXJlfSlgLFxuICAgIGJhY2tncm91bmRTaXplOiBzaXplLFxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogcGljdHVyZVBvc2l0aW9uLFxuICB9KTtcbiAgcmV0dXJuIGl0ZW07XG59O1xuXG5leHBvcnQgY29uc3QgZm9vZEl0ZW1UZXh0ID0gKHRleHQsIHRvQXBwZW5kKSA9PiB7XG4gIGNvbnN0IGl0ZW0gPSBNYW5hZ2VBdHRyaWJ1dGVzKFwiZGl2XCIsIHRvQXBwZW5kLCB0ZXh0LCB7XG4gICAgaGVpZ2h0OiBcIjcyJVwiLFxuICAgIG1hcmdpbkxlZnQ6IFwiNSVcIixcbiAgICB3aWR0aDogXCI5MCVcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjYWIzNDM0XCIsXG4gICAgLy8gYmFja2dyb3VuZENvbG9yOiBcImdyZWVuXCIsXG4gICAgdGV4dEFsaWduOiBcInN0YXJ0XCIsXG4gICAgZm9udEZhbWlseTogXCInR2VvcmdpYScsIHNlcmlmXCIsXG4gICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICAgIG1hcmdpblRvcDogXCIxNSVcIixcbiAgICBsaW5lSGVpZ2h0OiBcIjNcIixcbiAgfSk7XG5cbiAgcmV0dXJuIGl0ZW07XG59O1xuIiwiaW1wb3J0IHsgaG92ZXJTdGF0ZSwgdG9nZ2xlRWxlbWVudCB9IGZyb20gXCIuL3NjcmlwdHMuanNcIjtcbmltcG9ydCB7IGhvbWVCdG4sIGluZm9CdG4gfSBmcm9tIFwiLi91aS5qc1wiO1xuXG5ob3ZlclN0YXRlKGhvbWVCdG4sIGluZm9CdG4pO1xuXG5jb25zdCBmZXRjaCA9ICguLi5tb2R1bGVzKSA9PiB7XG4gIG1vZHVsZXMuZm9yRWFjaCgodGhpc01vZHVsZSkgPT4gZmV0Y2hNb2R1bGUodGhpc01vZHVsZSkpO1xufTtcblxuY29uc3Qgd2hpY2hUYWIgPSAoKSA9PiB7XG4gIGNvbnN0IGJvb2xlYW5WYWx1ZXMgPSB7XG4gICAgaG9tZU9uOiB0cnVlLFxuICAgIGluZm9PbjogZmFsc2UsXG4gIH07XG5cbiAgcmV0dXJuIGJvb2xlYW5WYWx1ZXM7XG59O1xuXG5jb25zdCBhbGxNb2R1bGVzID0gW1wiaG9tZVRhYlwiLCBcImluZm9UYWJcIl07XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoTW9kdWxlKG1vZHVsZU5hbWUpIHtcbiAgbGV0IG1vZHVsZTtcbiAgdHJ5IHtcbiAgICBpZiAobW9kdWxlTmFtZSA9PT0gXCJob21lVGFiXCIpIHtcbiAgICAgIG1vZHVsZSA9IGF3YWl0IGltcG9ydChcIi4vaG9tZVRhYi5qc1wiKTtcbiAgICAgIHdoaWNoVGFiLmhvbWVPblxuICAgICAgICA/IHRvZ2dsZUVsZW1lbnQoKS5kaXNwbGF5RWxlbWVudChcbiAgICAgICAgICAgIG1vZHVsZS5ob21lSXRlbU9uZSxcbiAgICAgICAgICAgIG1vZHVsZS5ob21lSXRlbVR3byxcbiAgICAgICAgICAgIG1vZHVsZS5ob21lSXRlbVRocmVlXG4gICAgICAgICAgKVxuICAgICAgICA6IHRvZ2dsZUVsZW1lbnQoKS5oaWRlRWxlbWVudChcbiAgICAgICAgICAgIG1vZHVsZS5ob21lSXRlbU9uZSxcbiAgICAgICAgICAgIG1vZHVsZS5ob21lSXRlbVR3byxcbiAgICAgICAgICAgIG1vZHVsZS5ob21lSXRlbVRocmVlXG4gICAgICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKG1vZHVsZU5hbWUgPT09IFwiaW5mb1RhYlwiKSB7XG4gICAgICBtb2R1bGUgPSBhd2FpdCBpbXBvcnQoXCIuL2luZm9UYWIuanNcIik7XG4gICAgICB3aGljaFRhYi5pbmZvT25cbiAgICAgICAgPyB0b2dnbGVFbGVtZW50KCkuZGlzcGxheUVsZW1lbnQoXG4gICAgICAgICAgICBtb2R1bGUuaW5mb0l0ZW1PbmUsXG4gICAgICAgICAgICBtb2R1bGUuaW5mb0l0ZW1UaHJlZVxuICAgICAgICAgIClcbiAgICAgICAgOiB0b2dnbGVFbGVtZW50KCkuaGlkZUVsZW1lbnQobW9kdWxlLmluZm9JdGVtT25lLCBtb2R1bGUuaW5mb0l0ZW1UaHJlZSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xuICB9XG59XG5cbmhvbWVCdG4uZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgd2hpY2hUYWIuaG9tZU9uID0gdHJ1ZTtcbiAgd2hpY2hUYWIuaW5mb09uID0gZmFsc2U7XG4gIGZldGNoKC4uLmFsbE1vZHVsZXMpO1xufSk7XG5cbmluZm9CdG4uZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgd2hpY2hUYWIuaG9tZU9uID0gZmFsc2U7XG4gIHdoaWNoVGFiLmluZm9PbiA9IHRydWU7XG4gIGZldGNoKC4uLmFsbE1vZHVsZXMpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgaG9tZUJ0bi5lbC5jbGljaygpO1xufSk7XG4iLCIvLyBGYWN0b3J5IGZ1bmN0aW9uIGZvciBlbGVtZW50cyAoY29kZSBzdGFydHMgaGVyZSlcbmV4cG9ydCBjb25zdCBDcmVhdGVFbGVtZW50RnVuY3Rpb24gPSAodHlwZSwgZWxlbWVudFRvQXBwZW5kLCBvcHRpb25zID0ge30pID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBlbGVtZW50VG9BcHBlbmQuYXBwZW5kQ2hpbGQoZWwpO1xuICBPYmplY3QuYXNzaWduKGVsLnN0eWxlLCBvcHRpb25zLnN0eWxlcyk7XG5cbiAgcmV0dXJuIHsgZWwgfTtcbn07XG5cbi8vIERlZmluZSB2YWx1ZXMgZm9yIGVsZW1lbnRzXG5leHBvcnQgY29uc3QgTWFuYWdlQXR0cmlidXRlcyA9ICh0eXBlLCBlbGVtZW50VG9BcHBlbmQsIG5hbWUsIHN0eWxlcykgPT4ge1xuICBjb25zdCBuZXdFbCA9IENyZWF0ZUVsZW1lbnRGdW5jdGlvbih0eXBlLCBlbGVtZW50VG9BcHBlbmQsIHsgc3R5bGVzIH0pO1xuICBuZXdFbC5lbC50ZXh0Q29udGVudCA9IG5hbWU7XG4gIHJldHVybiBuZXdFbDtcbn07XG5cbi8vIFRvZ2dsZSBlbGVtZW50IHZpc2liaWxpdHlcbmV4cG9ydCBjb25zdCB0b2dnbGVFbGVtZW50ID0gKCkgPT4ge1xuICBjb25zdCBkaXNwbGF5RWxlbWVudCA9ICguLi5lbGVtZW50cykgPT4ge1xuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IChlbGVtZW50LmVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIikpO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVFbGVtZW50ID0gKC4uLmVsZW1lbnRzKSA9PiB7XG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gKGVsZW1lbnQuZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiKSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZGlzcGxheUVsZW1lbnQsIGhpZGVFbGVtZW50IH07XG59O1xuXG4vLyA6aG92ZXIgc3RhdGUgZm9yIGJ1dHRvbnNcbmV4cG9ydCBjb25zdCBob3ZlclN0YXRlID0gKC4uLmJ1dHRvbnMpID0+IHtcbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICBidXR0b24uZWwuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcIjAgMC4xNWVtLCAxMDAlIDAuMTVlbVwiO1xuICAgIH0pO1xuXG4gICAgYnV0dG9uLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICBidXR0b24uZWwuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcIjAgMC4xNWVtLCAwJSAwLjE1ZW1cIjtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vLyBvdmVyZmxvdyBvbiBlbGVtZW50c1xuZXhwb3J0IGNvbnN0IHNjcm9sbFN0YXRlID0gKC4uLmVsZW1lbnRzKSA9PiB7XG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDEwMDApIHtcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgICAgICAgZWxlbWVudC5lbC5zdHlsZS5vdmVyZmxvdyA9IFwic2Nyb2xsXCI7XG4gICAgICB9KTtcblxuICAgICAgZWxlbWVudC5lbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuZWwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBkZXNpZ25CdG4gfSBmcm9tIFwiLi9leHRlbmRlZFVJXCI7XG5pbXBvcnQgeyBNYW5hZ2VBdHRyaWJ1dGVzLCBzY3JvbGxTdGF0ZSB9IGZyb20gXCIuL3NjcmlwdHNcIjtcbmltcG9ydChcIi4vbWVudVRhYlwiKTtcbi8vIGltcG9ydCBXYWxscGFwZXIgZnJvbSBcIi4vd2FsbHBhcGVyLmpwZWdcIjtcblxuLy8gSW4gYW5vdGhlciBtb2R1bGUgb3IgZmlsZVxuZXhwb3J0IGNvbnN0IGhlYWRlciA9IE1hbmFnZUF0dHJpYnV0ZXMoXCJoZWFkZXJcIiwgZG9jdW1lbnQuYm9keSwgXCJcIiwge1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAganVzdGlmeUNvbnRlbnQ6IFwiZmxleGVuZFwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICBoZWlnaHQ6IFwiNzBweFwiLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmMVwiLFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gIGhlaWdodDogXCI3LjV2aFwiLFxuICBtYXJnaW5Cb3R0b206IFwiMnZoXCIsXG59KTtcblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5lciA9IE1hbmFnZUF0dHJpYnV0ZXMoXCJkaXZcIiwgZG9jdW1lbnQuYm9keSwgXCJcIiwge1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gIG1hcmdpbjogXCIwIGF1dG8gMiUgYXV0b1wiLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y3ZThkM1wiLFxuICB3aWR0aDogXCI5NSVcIixcbn0pO1xuXG5leHBvcnQgY29uc3QgbmF2QmFyID0gTWFuYWdlQXR0cmlidXRlcyhcIm5hdlwiLCBoZWFkZXIuZWwsIFwiXCIsIHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIG1hcmdpbkxlZnQ6IFwiMS45dmhcIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgd2lkdGg6IFwiMTAwcHhcIixcbn0pO1xuXG5leHBvcnQgY29uc3QgbG9nbyA9IE1hbmFnZUF0dHJpYnV0ZXMoXG4gIFwicFwiLFxuICBoZWFkZXIuZWwsXG4gIFwiUGV0ZXIgJiBKb25uaWVzIFBpenplcmlhXCIsXG4gIHtcbiAgICBmb250RmFtaWx5OiBcIidsaWJyZSBiYXNrZXJ2aWxsZScsIHNlcmlmXCIsXG4gICAgYWxpZ25TZWxmOiBcImNlbnRlclwiLFxuICAgIGZvbnRTaXplOiBcIjIwcHhcIixcbiAgICBmb250U3R5bGU6IFwiaXRhbGljXCIsXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICBsZWZ0OiBcIjUwJVwiLFxuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKC01MCUpXCIsXG4gIH1cbik7XG5cbi8vIGNvbnRlbnRzIHNpemUgJiBvdmVyZmxvd1xuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBNYW5hZ2VBdHRyaWJ1dGVzKFwiZGl2XCIsIGNvbnRhaW5lci5lbCwgXCJcIiwge1xuICB3aWR0aDogXCI2MCVcIixcbiAgaGVpZ2h0OiBcIjkwdmhcIixcbiAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gIG1zT3ZlcmZsb3dTdHlsZTogXCJub25lXCIsXG4gIHNjcm9sbGJhcldpZHRoOiBcIm5vbmVcIixcbiAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxufSk7XG5cbi8vIGNvbnRlbnRzIHBvc2l0aW9uaW5nXG5leHBvcnQgY29uc3QgY29udGVudENvbnRhaW5lciA9IE1hbmFnZUF0dHJpYnV0ZXMoXCJkaXZcIiwgY29udGVudC5lbCwgXCJcIiwge1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG59KTtcblxuLy8gY29udGVudHMgc2l6ZSAmIG92ZXJmbG93XG5leHBvcnQgY29uc3Qgc2Vjb25kQ29udGVudCA9IE1hbmFnZUF0dHJpYnV0ZXMoXCJkaXZcIiwgY29udGFpbmVyLmVsLCBcIlwiLCB7XG4gIG1pbldpZHRoOiBcIjcydmhcIixcbiAgbWF4V2lkdGg6IFwiNzJ2aFwiLFxuICBoZWlnaHQ6IFwiOTB2aFwiLFxuICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgbXNPdmVyZmxvd1N0eWxlOiBcIm5vbmVcIixcbiAgc2Nyb2xsYmFyV2lkdGg6IFwibm9uZVwiLFxuICBtYXJnaW5MZWZ0OiBcIjEwcHhcIixcbiAgbWFyZ2luUmlnaHQ6IFwiMHB4XCIsXG4gIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgYmFja2dyb3VuZENvbG9yOiBcIiNmN2U4ZDNcIixcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG59KTtcblxuLy8gY29udGVudHMgcG9zaXRpb25pbmdcbmV4cG9ydCBjb25zdCBzZWNvbmRDb250ZW50Q29udGFpbmVyID0gTWFuYWdlQXR0cmlidXRlcyhcbiAgXCJkaXZcIixcbiAgc2Vjb25kQ29udGVudC5lbCxcbiAgXCJcIixcbiAge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IGZvb3RlciA9IE1hbmFnZUF0dHJpYnV0ZXMoXCJmb290ZXJcIiwgY29udGVudC5lbCwgXCJSb2JpbiBSeWFuXCIsIHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICBoZWlnaHQ6IFwiNy41dmhcIixcbiAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZjFcIixcbn0pO1xuXG5leHBvcnQgY29uc3QgaG9tZUJ0biA9IGRlc2lnbkJ0bihcIkhvbWVcIik7XG5leHBvcnQgY29uc3QgaW5mb0J0biA9IGRlc2lnbkJ0bihcIkluZm9cIik7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuYm9keS5zdHlsZS5tYXJnaW4gPSBcIjBweFwiO1xuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmN2U4ZDNcIjtcblxuZXhwb3J0IGNvbnN0IHNtYWxsZXJXaW5kb3cgPSAoKSA9PiB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCAxMDAwKSB7XG4gICAgICBjb250ZW50LmVsLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICBjb250ZW50LmVsLnN0eWxlLmhlaWdodCA9IFwiOTB2aFwiO1xuICAgICAgY29udGFpbmVyLmVsLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuICAgICAgc2Vjb25kQ29udGVudC5lbC5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgICAgc2Vjb25kQ29udGVudC5lbC5zdHlsZS5oZWlnaHQgPSBcIjkwdmhcIjtcbiAgICAgIHNlY29uZENvbnRlbnQuZWwuc3R5bGUuYWxpZ25TZWxmID0gXCJjZW50ZXJcIjtcbiAgICAgIGxvZ28uZWwuc3R5bGUubGVmdCA9IFwiNzAlXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lci5lbC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbiAgICAgIGNvbnRlbnQuZWwuc3R5bGUud2lkdGggPSBcIjYwJVwiO1xuICAgICAgc2Vjb25kQ29udGVudC5lbC5zdHlsZS53aWR0aCA9IFwiNDAlXCI7XG4gICAgICBjb250ZW50LmVsLnN0eWxlLmhlaWdodCA9IFwiOTB2aFwiO1xuICAgICAgc2Vjb25kQ29udGVudC5lbC5zdHlsZS5oZWlnaHQgPSBcIjkwdmhcIjtcbiAgICAgIHNlY29uZENvbnRlbnQuZWwuc3R5bGUuYWxpZ25TZWxmID0gXCJcIjtcbiAgICAgIGxvZ28uZWwuc3R5bGUubGVmdCA9IFwiNTAlXCI7XG4gICAgfVxuICB9KTtcbn07XG5cbnNtYWxsZXJXaW5kb3coKTtcbnNjcm9sbFN0YXRlKGNvbnRlbnQsIHNlY29uZENvbnRlbnQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9