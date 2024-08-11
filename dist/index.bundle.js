"use strict";
(self["webpackChunkrestaurantwebsite"] = self["webpackChunkrestaurantwebsite"] || []).push([["index"],{

/***/ "./src/extendedUI.js":
/*!***************************!*\
  !*** ./src/extendedUI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFoodItem: () => (/* binding */ createFoodItem),
/* harmony export */   createMenuItem: () => (/* binding */ createMenuItem),
/* harmony export */   designBtn: () => (/* binding */ designBtn)
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
    backgroundColor: "#ffffff",
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
const createMenuItem = (text) => {
  const item = (0,_scripts_js__WEBPACK_IMPORTED_MODULE_0__.ManageAttributes)("div", _ui_js__WEBPACK_IMPORTED_MODULE_1__.contentContainer.el, text, {
    display: "block",
    width: "600px",
    height: "300px",
    color: "rgba(220, 220, 220, 0.9)",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "10px",
  });
  return item;
};

const createFoodItem = (text, picture, margin, picturePosition) => {
  const item = (0,_scripts_js__WEBPACK_IMPORTED_MODULE_0__.ManageAttributes)("div", _ui_js__WEBPACK_IMPORTED_MODULE_1__.secondContentContainer.el, text, {
    display: "block",
    color: "white",
    width: "550px",
    height: "300px",
    marginTop: margin,
    textAlign: "center",
    fontSize: "34px",
    lineHeight: "1.5",
    fontFamily: "'Georgia', serif",
    fontStyle: "italic",

    backgroundImage: `linear-gradient(to top, rgb(171, 52, 52, 0.3) 10%, rgb(171, 52, 52, 1) 28%),
    url(${picture})`,
    backgroundSize: "cover",
    backgroundPosition: picturePosition,
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
            module.infoItemTwo,
            module.infoItemThree
          )
        : (0,_scripts_js__WEBPACK_IMPORTED_MODULE_0__.toggleElement)().hideElement(
            module.infoItemOne,
            module.infoItemTwo,
            module.infoItemThree
          );
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

// ------ v Menu Tab v --------------------------------------
// --item dish 1
// --item dish 2
// --item dish 3
// ------ v Info Tab v --------------------------------------
// --contact info
// ---name & title
// ---phone number
// ---email


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
    elements.forEach((element) => (element.el.style.display = "block"));
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
  elements.forEach((element) => {
    element.el.addEventListener("mouseenter", () => {
      element.el.style.overflowY = "scroll";
    });

    element.el.addEventListener("mouseleave", () => {
      element.el.style.overflowY = "hidden";
    });
  });
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
/* harmony export */   secondContentContainer: () => (/* binding */ secondContentContainer)
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
  backgroundColor: "#ffffff",
  textAlign: "center",
  height: "7.5vh",
});

const container = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)("div", document.body, "", {
  display: "flex",
});

const navBar = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)("nav", header.el, "", {
  display: "flex",
  alignItems: "center",
  width: "100px",
});

const logo = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)(
  "p",
  header.el,
  "Peter & Jonnies Pizzeria",
  {
    fontFamily: "'Georgia', serif",
    alignSelf: "center",
    fontSize: "20px",
    fontStyle: "italic",
    textDecoration: "underline",
    marginLeft: "37%",
  }
);

// contents size & overflow
const content = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)("div", container.el, "", {
  display: "block",
  backgroundColor: "#ab3434",
  width: "60%",
  height: "85vh",
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
  display: "block",
  backgroundColor: "#ffffff",
  width: "40%",
  height: "85vh",
  overflow: "hidden",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  marginLeft: "10px",
  marginRight: "0px",
  borderRadius: "1px",
  borderRadius: "3px",
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

(0,_scripts__WEBPACK_IMPORTED_MODULE_1__.scrollState)(content, secondContent);

const footer = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)("footer", document.body, "Robin Ryan", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "7.5vh",
  backgroundColor: "#ffffff",
});

const homeBtn = (0,_extendedUI__WEBPACK_IMPORTED_MODULE_0__.designBtn)("Home");
const infoBtn = (0,_extendedUI__WEBPACK_IMPORTED_MODULE_0__.designBtn)("Info");

const body = document.querySelector("body");
// body.style.backgroundImage = `url(${Wallpaper})`;
// body.style.backgroundSize = "cover";
// body.style.backgroundPosition = "center";
// body.style.backgroundRepeat = "no-repeat";
body.style.margin = "0px";

// add footer


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNPLCtCQUErQiwwREFBZ0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscURBQVc7O0FBRUosZUFBZSwwREFBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRU0sZ0JBQWdCLHNEQUFTO0FBQ3pCLGdCQUFnQixzREFBUzs7QUFFaEM7QUFDQSx1Q0FBdUMsVUFBVTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnR3ZWJzaXRlLy4vc3JjL2V4dGVuZGVkVUkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHdlYnNpdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHdlYnNpdGUvLi9zcmMvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50d2Vic2l0ZS8uL3NyYy91aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYW5hZ2VBdHRyaWJ1dGVzLCB2YWx1ZXMgfSBmcm9tIFwiLi9zY3JpcHRzLmpzXCI7XG5pbXBvcnQgeyBuYXZCYXIsIGNvbnRlbnRDb250YWluZXIsIHNlY29uZENvbnRlbnRDb250YWluZXIgfSBmcm9tIFwiLi91aS5qc1wiO1xuLy8gRXh0ZW5kcyBNYW5hZ2VBdHRyaWJ1dGVzKCkgJiBzcGVjaWZpZXMgYnV0dG9uc1xuZXhwb3J0IGNvbnN0IGRlc2lnbkJ0biA9ICh0ZXh0KSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IE1hbmFnZUF0dHJpYnV0ZXMoXCJidXR0b25cIiwgbmF2QmFyLmVsLCB0ZXh0LCB7XG4gICAgd2lkdGg6IFwiNDlweFwiLFxuICAgIGhlaWdodDogXCIyMnB4XCIsXG4gICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICBmb250U2l6ZTogXCIxNXB4XCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcbiAgICBtYXJnaW46IFwiMjVweFwiLFxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgYm9yZGVyOiBcIm5vbmVcIixcblxuICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAgIHRvIHJpZ2h0LFxuICAgICAgICAgICAgICByZ2JhKDE1OCwgMTU3LCAxOTMsIDApLFxuICAgICAgICAgICAgICByZ2JhKDE1OCwgMTU3LCAxOTMsIDApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMCwgMCwgMCksIHJnYigwLCAwLCAwKSlgLFxuICAgIGJhY2tncm91bmRTaXplOiBcIjEwMCUgMC4xNWVtLCAwIDAuMTVlbVwiLFxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCIxMDAlIDEwMCUsIDAlIDEwMCVcIixcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxuICAgIHRyYW5zaXRpb246IFwiYmFja2dyb3VuZC1zaXplIDQwMG1zXCIsXG4gIH0pO1xuICByZXR1cm4gYnV0dG9uO1xufTtcblxuLy8gRXh0ZW5kcyBNYW5hZ2VBdHRyaWJ1dGVzKCkgJiBzcGVjaWZpZXMgbWVudSBpdGVtc1xuZXhwb3J0IGNvbnN0IGNyZWF0ZU1lbnVJdGVtID0gKHRleHQpID0+IHtcbiAgY29uc3QgaXRlbSA9IE1hbmFnZUF0dHJpYnV0ZXMoXCJkaXZcIiwgY29udGVudENvbnRhaW5lci5lbCwgdGV4dCwge1xuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICB3aWR0aDogXCI2MDBweFwiLFxuICAgIGhlaWdodDogXCIzMDBweFwiLFxuICAgIGNvbG9yOiBcInJnYmEoMjIwLCAyMjAsIDIyMCwgMC45KVwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuMSlcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgbWFyZ2luOiBcIjEwcHhcIixcbiAgfSk7XG4gIHJldHVybiBpdGVtO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUZvb2RJdGVtID0gKHRleHQsIHBpY3R1cmUsIG1hcmdpbiwgcGljdHVyZVBvc2l0aW9uKSA9PiB7XG4gIGNvbnN0IGl0ZW0gPSBNYW5hZ2VBdHRyaWJ1dGVzKFwiZGl2XCIsIHNlY29uZENvbnRlbnRDb250YWluZXIuZWwsIHRleHQsIHtcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgY29sb3I6IFwid2hpdGVcIixcbiAgICB3aWR0aDogXCI1NTBweFwiLFxuICAgIGhlaWdodDogXCIzMDBweFwiLFxuICAgIG1hcmdpblRvcDogbWFyZ2luLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBmb250U2l6ZTogXCIzNHB4XCIsXG4gICAgbGluZUhlaWdodDogXCIxLjVcIixcbiAgICBmb250RmFtaWx5OiBcIidHZW9yZ2lhJywgc2VyaWZcIixcbiAgICBmb250U3R5bGU6IFwiaXRhbGljXCIsXG5cbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2IoMTcxLCA1MiwgNTIsIDAuMykgMTAlLCByZ2IoMTcxLCA1MiwgNTIsIDEpIDI4JSksXG4gICAgdXJsKCR7cGljdHVyZX0pYCxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogcGljdHVyZVBvc2l0aW9uLFxuICB9KTtcbiAgcmV0dXJuIGl0ZW07XG59O1xuIiwiaW1wb3J0IHsgaG92ZXJTdGF0ZSwgdG9nZ2xlRWxlbWVudCB9IGZyb20gXCIuL3NjcmlwdHMuanNcIjtcbmltcG9ydCB7IGhvbWVCdG4sIGluZm9CdG4gfSBmcm9tIFwiLi91aS5qc1wiO1xuXG5ob3ZlclN0YXRlKGhvbWVCdG4sIGluZm9CdG4pO1xuXG5jb25zdCBmZXRjaCA9ICguLi5tb2R1bGVzKSA9PiB7XG4gIG1vZHVsZXMuZm9yRWFjaCgodGhpc01vZHVsZSkgPT4gZmV0Y2hNb2R1bGUodGhpc01vZHVsZSkpO1xufTtcblxuY29uc3Qgd2hpY2hUYWIgPSAoKSA9PiB7XG4gIGNvbnN0IGJvb2xlYW5WYWx1ZXMgPSB7XG4gICAgaG9tZU9uOiB0cnVlLFxuICAgIGluZm9PbjogZmFsc2UsXG4gIH07XG5cbiAgcmV0dXJuIGJvb2xlYW5WYWx1ZXM7XG59O1xuXG5jb25zdCBhbGxNb2R1bGVzID0gW1wiaG9tZVRhYlwiLCBcImluZm9UYWJcIl07XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoTW9kdWxlKG1vZHVsZU5hbWUpIHtcbiAgbGV0IG1vZHVsZTtcbiAgdHJ5IHtcbiAgICBpZiAobW9kdWxlTmFtZSA9PT0gXCJob21lVGFiXCIpIHtcbiAgICAgIG1vZHVsZSA9IGF3YWl0IGltcG9ydChcIi4vaG9tZVRhYi5qc1wiKTtcbiAgICAgIHdoaWNoVGFiLmhvbWVPblxuICAgICAgICA/IHRvZ2dsZUVsZW1lbnQoKS5kaXNwbGF5RWxlbWVudChcbiAgICAgICAgICAgIG1vZHVsZS5ob21lSXRlbU9uZSxcbiAgICAgICAgICAgIG1vZHVsZS5ob21lSXRlbVR3byxcbiAgICAgICAgICAgIG1vZHVsZS5ob21lSXRlbVRocmVlXG4gICAgICAgICAgKVxuICAgICAgICA6IHRvZ2dsZUVsZW1lbnQoKS5oaWRlRWxlbWVudChcbiAgICAgICAgICAgIG1vZHVsZS5ob21lSXRlbU9uZSxcbiAgICAgICAgICAgIG1vZHVsZS5ob21lSXRlbVR3byxcbiAgICAgICAgICAgIG1vZHVsZS5ob21lSXRlbVRocmVlXG4gICAgICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKG1vZHVsZU5hbWUgPT09IFwiaW5mb1RhYlwiKSB7XG4gICAgICBtb2R1bGUgPSBhd2FpdCBpbXBvcnQoXCIuL2luZm9UYWIuanNcIik7XG4gICAgICB3aGljaFRhYi5pbmZvT25cbiAgICAgICAgPyB0b2dnbGVFbGVtZW50KCkuZGlzcGxheUVsZW1lbnQoXG4gICAgICAgICAgICBtb2R1bGUuaW5mb0l0ZW1PbmUsXG4gICAgICAgICAgICBtb2R1bGUuaW5mb0l0ZW1Ud28sXG4gICAgICAgICAgICBtb2R1bGUuaW5mb0l0ZW1UaHJlZVxuICAgICAgICAgIClcbiAgICAgICAgOiB0b2dnbGVFbGVtZW50KCkuaGlkZUVsZW1lbnQoXG4gICAgICAgICAgICBtb2R1bGUuaW5mb0l0ZW1PbmUsXG4gICAgICAgICAgICBtb2R1bGUuaW5mb0l0ZW1Ud28sXG4gICAgICAgICAgICBtb2R1bGUuaW5mb0l0ZW1UaHJlZVxuICAgICAgICAgICk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xuICB9XG59XG5cbmhvbWVCdG4uZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgd2hpY2hUYWIuaG9tZU9uID0gdHJ1ZTtcbiAgd2hpY2hUYWIuaW5mb09uID0gZmFsc2U7XG4gIGZldGNoKC4uLmFsbE1vZHVsZXMpO1xufSk7XG5cbmluZm9CdG4uZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgd2hpY2hUYWIuaG9tZU9uID0gZmFsc2U7XG4gIHdoaWNoVGFiLmluZm9PbiA9IHRydWU7XG4gIGZldGNoKC4uLmFsbE1vZHVsZXMpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgaG9tZUJ0bi5lbC5jbGljaygpO1xufSk7XG5cbi8vIC0tLS0tLSB2IE1lbnUgVGFiIHYgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0taXRlbSBkaXNoIDFcbi8vIC0taXRlbSBkaXNoIDJcbi8vIC0taXRlbSBkaXNoIDNcbi8vIC0tLS0tLSB2IEluZm8gVGFiIHYgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tY29udGFjdCBpbmZvXG4vLyAtLS1uYW1lICYgdGl0bGVcbi8vIC0tLXBob25lIG51bWJlclxuLy8gLS0tZW1haWxcbiIsIi8vIEZhY3RvcnkgZnVuY3Rpb24gZm9yIGVsZW1lbnRzIChjb2RlIHN0YXJ0cyBoZXJlKVxuZXhwb3J0IGNvbnN0IENyZWF0ZUVsZW1lbnRGdW5jdGlvbiA9ICh0eXBlLCBlbGVtZW50VG9BcHBlbmQsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGVsZW1lbnRUb0FwcGVuZC5hcHBlbmRDaGlsZChlbCk7XG4gIE9iamVjdC5hc3NpZ24oZWwuc3R5bGUsIG9wdGlvbnMuc3R5bGVzKTtcblxuICByZXR1cm4geyBlbCB9O1xufTtcblxuLy8gRGVmaW5lIHZhbHVlcyBmb3IgZWxlbWVudHNcbmV4cG9ydCBjb25zdCBNYW5hZ2VBdHRyaWJ1dGVzID0gKHR5cGUsIGVsZW1lbnRUb0FwcGVuZCwgbmFtZSwgc3R5bGVzKSA9PiB7XG4gIGNvbnN0IG5ld0VsID0gQ3JlYXRlRWxlbWVudEZ1bmN0aW9uKHR5cGUsIGVsZW1lbnRUb0FwcGVuZCwgeyBzdHlsZXMgfSk7XG4gIG5ld0VsLmVsLnRleHRDb250ZW50ID0gbmFtZTtcbiAgcmV0dXJuIG5ld0VsO1xufTtcblxuLy8gVG9nZ2xlIGVsZW1lbnQgdmlzaWJpbGl0eVxuZXhwb3J0IGNvbnN0IHRvZ2dsZUVsZW1lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXlFbGVtZW50ID0gKC4uLmVsZW1lbnRzKSA9PiB7XG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gKGVsZW1lbnQuZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIikpO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVFbGVtZW50ID0gKC4uLmVsZW1lbnRzKSA9PiB7XG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gKGVsZW1lbnQuZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiKSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZGlzcGxheUVsZW1lbnQsIGhpZGVFbGVtZW50IH07XG59O1xuXG4vLyA6aG92ZXIgc3RhdGUgZm9yIGJ1dHRvbnNcbmV4cG9ydCBjb25zdCBob3ZlclN0YXRlID0gKC4uLmJ1dHRvbnMpID0+IHtcbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICBidXR0b24uZWwuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcIjAgMC4xNWVtLCAxMDAlIDAuMTVlbVwiO1xuICAgIH0pO1xuXG4gICAgYnV0dG9uLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICBidXR0b24uZWwuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcIjAgMC4xNWVtLCAwJSAwLjE1ZW1cIjtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vLyBvdmVyZmxvdyBvbiBlbGVtZW50c1xuZXhwb3J0IGNvbnN0IHNjcm9sbFN0YXRlID0gKC4uLmVsZW1lbnRzKSA9PiB7XG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgICAgIGVsZW1lbnQuZWwuc3R5bGUub3ZlcmZsb3dZID0gXCJzY3JvbGxcIjtcbiAgICB9KTtcblxuICAgIGVsZW1lbnQuZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICAgICAgZWxlbWVudC5lbC5zdHlsZS5vdmVyZmxvd1kgPSBcImhpZGRlblwiO1xuICAgIH0pO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBkZXNpZ25CdG4gfSBmcm9tIFwiLi9leHRlbmRlZFVJXCI7XG5pbXBvcnQgeyBNYW5hZ2VBdHRyaWJ1dGVzLCBzY3JvbGxTdGF0ZSB9IGZyb20gXCIuL3NjcmlwdHNcIjtcbmltcG9ydChcIi4vbWVudVRhYlwiKTtcbi8vIGltcG9ydCBXYWxscGFwZXIgZnJvbSBcIi4vd2FsbHBhcGVyLmpwZWdcIjtcblxuLy8gSW4gYW5vdGhlciBtb2R1bGUgb3IgZmlsZVxuZXhwb3J0IGNvbnN0IGhlYWRlciA9IE1hbmFnZUF0dHJpYnV0ZXMoXCJoZWFkZXJcIiwgZG9jdW1lbnQuYm9keSwgXCJcIiwge1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAganVzdGlmeUNvbnRlbnQ6IFwiZmxleGVuZFwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICBoZWlnaHQ6IFwiNzBweFwiLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gIGhlaWdodDogXCI3LjV2aFwiLFxufSk7XG5cbmV4cG9ydCBjb25zdCBjb250YWluZXIgPSBNYW5hZ2VBdHRyaWJ1dGVzKFwiZGl2XCIsIGRvY3VtZW50LmJvZHksIFwiXCIsIHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG59KTtcblxuZXhwb3J0IGNvbnN0IG5hdkJhciA9IE1hbmFnZUF0dHJpYnV0ZXMoXCJuYXZcIiwgaGVhZGVyLmVsLCBcIlwiLCB7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICB3aWR0aDogXCIxMDBweFwiLFxufSk7XG5cbmV4cG9ydCBjb25zdCBsb2dvID0gTWFuYWdlQXR0cmlidXRlcyhcbiAgXCJwXCIsXG4gIGhlYWRlci5lbCxcbiAgXCJQZXRlciAmIEpvbm5pZXMgUGl6emVyaWFcIixcbiAge1xuICAgIGZvbnRGYW1pbHk6IFwiJ0dlb3JnaWEnLCBzZXJpZlwiLFxuICAgIGFsaWduU2VsZjogXCJjZW50ZXJcIixcbiAgICBmb250U2l6ZTogXCIyMHB4XCIsXG4gICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICAgIHRleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwiLFxuICAgIG1hcmdpbkxlZnQ6IFwiMzclXCIsXG4gIH1cbik7XG5cbi8vIGNvbnRlbnRzIHNpemUgJiBvdmVyZmxvd1xuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBNYW5hZ2VBdHRyaWJ1dGVzKFwiZGl2XCIsIGNvbnRhaW5lci5lbCwgXCJcIiwge1xuICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gIGJhY2tncm91bmRDb2xvcjogXCIjYWIzNDM0XCIsXG4gIHdpZHRoOiBcIjYwJVwiLFxuICBoZWlnaHQ6IFwiODV2aFwiLFxuICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgbXNPdmVyZmxvd1N0eWxlOiBcIm5vbmVcIixcbiAgc2Nyb2xsYmFyV2lkdGg6IFwibm9uZVwiLFxuICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG59KTtcblxuLy8gY29udGVudHMgcG9zaXRpb25pbmdcbmV4cG9ydCBjb25zdCBjb250ZW50Q29udGFpbmVyID0gTWFuYWdlQXR0cmlidXRlcyhcImRpdlwiLCBjb250ZW50LmVsLCBcIlwiLCB7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbn0pO1xuXG4vLyBjb250ZW50cyBzaXplICYgb3ZlcmZsb3dcbmV4cG9ydCBjb25zdCBzZWNvbmRDb250ZW50ID0gTWFuYWdlQXR0cmlidXRlcyhcImRpdlwiLCBjb250YWluZXIuZWwsIFwiXCIsIHtcbiAgZGlzcGxheTogXCJibG9ja1wiLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxuICB3aWR0aDogXCI0MCVcIixcbiAgaGVpZ2h0OiBcIjg1dmhcIixcbiAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gIG1zT3ZlcmZsb3dTdHlsZTogXCJub25lXCIsXG4gIHNjcm9sbGJhcldpZHRoOiBcIm5vbmVcIixcbiAgbWFyZ2luTGVmdDogXCIxMHB4XCIsXG4gIG1hcmdpblJpZ2h0OiBcIjBweFwiLFxuICBib3JkZXJSYWRpdXM6IFwiMXB4XCIsXG4gIGJvcmRlclJhZGl1czogXCIzcHhcIixcbn0pO1xuXG4vLyBjb250ZW50cyBwb3NpdGlvbmluZ1xuZXhwb3J0IGNvbnN0IHNlY29uZENvbnRlbnRDb250YWluZXIgPSBNYW5hZ2VBdHRyaWJ1dGVzKFxuICBcImRpdlwiLFxuICBzZWNvbmRDb250ZW50LmVsLFxuICBcIlwiLFxuICB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICB9XG4pO1xuXG5zY3JvbGxTdGF0ZShjb250ZW50LCBzZWNvbmRDb250ZW50KTtcblxuZXhwb3J0IGNvbnN0IGZvb3RlciA9IE1hbmFnZUF0dHJpYnV0ZXMoXCJmb290ZXJcIiwgZG9jdW1lbnQuYm9keSwgXCJSb2JpbiBSeWFuXCIsIHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICBoZWlnaHQ6IFwiNy41dmhcIixcbiAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcbn0pO1xuXG5leHBvcnQgY29uc3QgaG9tZUJ0biA9IGRlc2lnbkJ0bihcIkhvbWVcIik7XG5leHBvcnQgY29uc3QgaW5mb0J0biA9IGRlc2lnbkJ0bihcIkluZm9cIik7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbi8vIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke1dhbGxwYXBlcn0pYDtcbi8vIGJvZHkuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcImNvdmVyXCI7XG4vLyBib2R5LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IFwiY2VudGVyXCI7XG4vLyBib2R5LnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSBcIm5vLXJlcGVhdFwiO1xuYm9keS5zdHlsZS5tYXJnaW4gPSBcIjBweFwiO1xuXG4vLyBhZGQgZm9vdGVyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=