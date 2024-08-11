"use strict";
(self["webpackChunkrestaurantwebsite"] = self["webpackChunkrestaurantwebsite"] || []).push([["UI"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/ui.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2s6Ly9yZXN0YXVyYW50d2Vic2l0ZS8uL3NyYy9leHRlbmRlZFVJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnR3ZWJzaXRlLy4vc3JjL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHdlYnNpdGUvLi9zcmMvdWkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFuYWdlQXR0cmlidXRlcyB9IGZyb20gXCIuL3NjcmlwdHMuanNcIjtcbmltcG9ydCB7IG5hdkJhciwgY29udGVudENvbnRhaW5lciwgc2Vjb25kQ29udGVudENvbnRhaW5lciB9IGZyb20gXCIuL3VpLmpzXCI7XG4vLyBFeHRlbmRzIE1hbmFnZUF0dHJpYnV0ZXMoKSAmIHNwZWNpZmllcyBidXR0b25zXG5leHBvcnQgY29uc3QgZGVzaWduQnRuID0gKHRleHQpID0+IHtcbiAgY29uc3QgYnV0dG9uID0gTWFuYWdlQXR0cmlidXRlcyhcImJ1dHRvblwiLCBuYXZCYXIuZWwsIHRleHQsIHtcbiAgICB3aWR0aDogXCI0OXB4XCIsXG4gICAgaGVpZ2h0OiBcIjIycHhcIixcbiAgICBjb2xvcjogXCJibGFja1wiLFxuICAgIGZvbnRTaXplOiBcIjE1cHhcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y3ZThkM1wiLFxuICAgIG1hcmdpbjogXCIyNXB4XCIsXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICBib3JkZXI6IFwibm9uZVwiLFxuXG4gICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgdG8gcmlnaHQsXG4gICAgICAgICAgICAgIHJnYmEoMTU4LCAxNTcsIDE5MywgMCksXG4gICAgICAgICAgICAgIHJnYmEoMTU4LCAxNTcsIDE5MywgMClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigwLCAwLCAwKSwgcmdiKDAsIDAsIDApKWAsXG4gICAgYmFja2dyb3VuZFNpemU6IFwiMTAwJSAwLjE1ZW0sIDAgMC4xNWVtXCIsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcIjEwMCUgMTAwJSwgMCUgMTAwJVwiLFxuICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXG4gICAgdHJhbnNpdGlvbjogXCJiYWNrZ3JvdW5kLXNpemUgNDAwbXNcIixcbiAgfSk7XG4gIHJldHVybiBidXR0b247XG59O1xuXG4vLyBFeHRlbmRzIE1hbmFnZUF0dHJpYnV0ZXMoKSAmIHNwZWNpZmllcyBtZW51IGl0ZW1zXG5leHBvcnQgY29uc3QgY3JlYXRlTWVudUl0ZW0gPSAodGV4dCwgY29sb3IsIHdpZHRoLCBtYXJnaW5Ub3AsIG1hcmdpbkJvdHRvbSkgPT4ge1xuICBjb25zdCBpdGVtID0gTWFuYWdlQXR0cmlidXRlcyhcImRpdlwiLCBjb250ZW50Q29udGFpbmVyLmVsLCB0ZXh0LCB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG5cbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBcIjQwMHB4XCIsXG5cbiAgICBjb2xvcjogXCJibGFja1wiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcblxuICAgIG1hcmdpblRvcDogbWFyZ2luVG9wLFxuICAgIG1hcmdpbkJvdHRvbTogbWFyZ2luQm90dG9tLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gIH0pO1xuICByZXR1cm4gaXRlbTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVGb29kSXRlbSA9IChcbiAgdGV4dCxcbiAgcGljdHVyZSxcbiAgbWFyZ2luLFxuICBwaWN0dXJlUG9zaXRpb24sXG4gIHNpemVcbikgPT4ge1xuICBjb25zdCBpdGVtID0gTWFuYWdlQXR0cmlidXRlcyhcImRpdlwiLCBzZWNvbmRDb250ZW50Q29udGFpbmVyLmVsLCB0ZXh0LCB7XG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgbWluV2lkdGg6IFwiMTAwJVwiLFxuICAgIGhlaWdodDogXCI1MHZoXCIsXG4gICAgbWF4SGVpZ2h0OiBcIjUwdmhcIixcbiAgICBtYXJnaW5Ub3A6IG1hcmdpbixcblxuICAgIGJhY2tncm91bmRJbWFnZTogYGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYigxNzEsIDUyLCA1MiwgMCkgMTUlLCByZ2IoMTcxLCA1MiwgNTIsIDEpIDAlKSxcbiAgICB1cmwoJHtwaWN0dXJlfSlgLFxuICAgIGJhY2tncm91bmRTaXplOiBzaXplLFxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogcGljdHVyZVBvc2l0aW9uLFxuICB9KTtcbiAgcmV0dXJuIGl0ZW07XG59O1xuXG5leHBvcnQgY29uc3QgZm9vZEl0ZW1UZXh0ID0gKHRleHQsIHRvQXBwZW5kKSA9PiB7XG4gIGNvbnN0IGl0ZW0gPSBNYW5hZ2VBdHRyaWJ1dGVzKFwiZGl2XCIsIHRvQXBwZW5kLCB0ZXh0LCB7XG4gICAgaGVpZ2h0OiBcIjcyJVwiLFxuICAgIG1hcmdpbkxlZnQ6IFwiNSVcIixcbiAgICB3aWR0aDogXCI5MCVcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjYWIzNDM0XCIsXG4gICAgLy8gYmFja2dyb3VuZENvbG9yOiBcImdyZWVuXCIsXG4gICAgdGV4dEFsaWduOiBcInN0YXJ0XCIsXG4gICAgZm9udEZhbWlseTogXCInR2VvcmdpYScsIHNlcmlmXCIsXG4gICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICAgIG1hcmdpblRvcDogXCIxNSVcIixcbiAgICBsaW5lSGVpZ2h0OiBcIjNcIixcbiAgfSk7XG5cbiAgcmV0dXJuIGl0ZW07XG59O1xuIiwiLy8gRmFjdG9yeSBmdW5jdGlvbiBmb3IgZWxlbWVudHMgKGNvZGUgc3RhcnRzIGhlcmUpXG5leHBvcnQgY29uc3QgQ3JlYXRlRWxlbWVudEZ1bmN0aW9uID0gKHR5cGUsIGVsZW1lbnRUb0FwcGVuZCwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgZWxlbWVudFRvQXBwZW5kLmFwcGVuZENoaWxkKGVsKTtcbiAgT2JqZWN0LmFzc2lnbihlbC5zdHlsZSwgb3B0aW9ucy5zdHlsZXMpO1xuXG4gIHJldHVybiB7IGVsIH07XG59O1xuXG4vLyBEZWZpbmUgdmFsdWVzIGZvciBlbGVtZW50c1xuZXhwb3J0IGNvbnN0IE1hbmFnZUF0dHJpYnV0ZXMgPSAodHlwZSwgZWxlbWVudFRvQXBwZW5kLCBuYW1lLCBzdHlsZXMpID0+IHtcbiAgY29uc3QgbmV3RWwgPSBDcmVhdGVFbGVtZW50RnVuY3Rpb24odHlwZSwgZWxlbWVudFRvQXBwZW5kLCB7IHN0eWxlcyB9KTtcbiAgbmV3RWwuZWwudGV4dENvbnRlbnQgPSBuYW1lO1xuICByZXR1cm4gbmV3RWw7XG59O1xuXG4vLyBUb2dnbGUgZWxlbWVudCB2aXNpYmlsaXR5XG5leHBvcnQgY29uc3QgdG9nZ2xlRWxlbWVudCA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGxheUVsZW1lbnQgPSAoLi4uZWxlbWVudHMpID0+IHtcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiAoZWxlbWVudC5lbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCIpKTtcbiAgfTtcblxuICBjb25zdCBoaWRlRWxlbWVudCA9ICguLi5lbGVtZW50cykgPT4ge1xuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IChlbGVtZW50LmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIikpO1xuICB9O1xuXG4gIHJldHVybiB7IGRpc3BsYXlFbGVtZW50LCBoaWRlRWxlbWVudCB9O1xufTtcblxuLy8gOmhvdmVyIHN0YXRlIGZvciBidXR0b25zXG5leHBvcnQgY29uc3QgaG92ZXJTdGF0ZSA9ICguLi5idXR0b25zKSA9PiB7XG4gIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgICAgYnV0dG9uLmVsLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCIwIDAuMTVlbSwgMTAwJSAwLjE1ZW1cIjtcbiAgICB9KTtcblxuICAgIGJ1dHRvbi5lbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgICAgYnV0dG9uLmVsLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCIwIDAuMTVlbSwgMCUgMC4xNWVtXCI7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLy8gb3ZlcmZsb3cgb24gZWxlbWVudHNcbmV4cG9ydCBjb25zdCBzY3JvbGxTdGF0ZSA9ICguLi5lbGVtZW50cykgPT4ge1xuICBpZiAod2luZG93LmlubmVyV2lkdGggPiAxMDAwKSB7XG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC5lbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuZWwuc3R5bGUub3ZlcmZsb3cgPSBcInNjcm9sbFwiO1xuICAgICAgfSk7XG5cbiAgICAgIGVsZW1lbnQuZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICAgICAgICBlbGVtZW50LmVsLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgZGVzaWduQnRuIH0gZnJvbSBcIi4vZXh0ZW5kZWRVSVwiO1xuaW1wb3J0IHsgTWFuYWdlQXR0cmlidXRlcywgc2Nyb2xsU3RhdGUgfSBmcm9tIFwiLi9zY3JpcHRzXCI7XG5pbXBvcnQoXCIuL21lbnVUYWJcIik7XG4vLyBpbXBvcnQgV2FsbHBhcGVyIGZyb20gXCIuL3dhbGxwYXBlci5qcGVnXCI7XG5cbi8vIEluIGFub3RoZXIgbW9kdWxlIG9yIGZpbGVcbmV4cG9ydCBjb25zdCBoZWFkZXIgPSBNYW5hZ2VBdHRyaWJ1dGVzKFwiaGVhZGVyXCIsIGRvY3VtZW50LmJvZHksIFwiXCIsIHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGp1c3RpZnlDb250ZW50OiBcImZsZXhlbmRcIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgaGVpZ2h0OiBcIjcwcHhcIixcbiAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZjFcIixcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICBoZWlnaHQ6IFwiNy41dmhcIixcbiAgbWFyZ2luQm90dG9tOiBcIjJ2aFwiLFxufSk7XG5cbmV4cG9ydCBjb25zdCBjb250YWluZXIgPSBNYW5hZ2VBdHRyaWJ1dGVzKFwiZGl2XCIsIGRvY3VtZW50LmJvZHksIFwiXCIsIHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICBtYXJnaW46IFwiMCBhdXRvIDIlIGF1dG9cIixcbiAgYmFja2dyb3VuZENvbG9yOiBcIiNmN2U4ZDNcIixcbiAgd2lkdGg6IFwiOTUlXCIsXG59KTtcblxuZXhwb3J0IGNvbnN0IG5hdkJhciA9IE1hbmFnZUF0dHJpYnV0ZXMoXCJuYXZcIiwgaGVhZGVyLmVsLCBcIlwiLCB7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBtYXJnaW5MZWZ0OiBcIjEuOXZoXCIsXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIHdpZHRoOiBcIjEwMHB4XCIsXG59KTtcblxuZXhwb3J0IGNvbnN0IGxvZ28gPSBNYW5hZ2VBdHRyaWJ1dGVzKFxuICBcInBcIixcbiAgaGVhZGVyLmVsLFxuICBcIlBldGVyICYgSm9ubmllcyBQaXp6ZXJpYVwiLFxuICB7XG4gICAgZm9udEZhbWlseTogXCInbGlicmUgYmFza2VydmlsbGUnLCBzZXJpZlwiLFxuICAgIGFsaWduU2VsZjogXCJjZW50ZXJcIixcbiAgICBmb250U2l6ZTogXCIyMHB4XCIsXG4gICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgbGVmdDogXCI1MCVcIixcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgtNTAlKVwiLFxuICB9XG4pO1xuXG4vLyBjb250ZW50cyBzaXplICYgb3ZlcmZsb3dcbmV4cG9ydCBjb25zdCBjb250ZW50ID0gTWFuYWdlQXR0cmlidXRlcyhcImRpdlwiLCBjb250YWluZXIuZWwsIFwiXCIsIHtcbiAgd2lkdGg6IFwiNjAlXCIsXG4gIGhlaWdodDogXCI5MHZoXCIsXG4gIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICBtc092ZXJmbG93U3R5bGU6IFwibm9uZVwiLFxuICBzY3JvbGxiYXJXaWR0aDogXCJub25lXCIsXG4gIGJvcmRlclJhZGl1czogXCIzcHhcIixcbn0pO1xuXG4vLyBjb250ZW50cyBwb3NpdGlvbmluZ1xuZXhwb3J0IGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBNYW5hZ2VBdHRyaWJ1dGVzKFwiZGl2XCIsIGNvbnRlbnQuZWwsIFwiXCIsIHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxufSk7XG5cbi8vIGNvbnRlbnRzIHNpemUgJiBvdmVyZmxvd1xuZXhwb3J0IGNvbnN0IHNlY29uZENvbnRlbnQgPSBNYW5hZ2VBdHRyaWJ1dGVzKFwiZGl2XCIsIGNvbnRhaW5lci5lbCwgXCJcIiwge1xuICBtaW5XaWR0aDogXCI3MnZoXCIsXG4gIG1heFdpZHRoOiBcIjcydmhcIixcbiAgaGVpZ2h0OiBcIjkwdmhcIixcbiAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gIG1zT3ZlcmZsb3dTdHlsZTogXCJub25lXCIsXG4gIHNjcm9sbGJhcldpZHRoOiBcIm5vbmVcIixcbiAgbWFyZ2luTGVmdDogXCIxMHB4XCIsXG4gIG1hcmdpblJpZ2h0OiBcIjBweFwiLFxuICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gIGJhY2tncm91bmRDb2xvcjogXCIjZjdlOGQzXCIsXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxufSk7XG5cbi8vIGNvbnRlbnRzIHBvc2l0aW9uaW5nXG5leHBvcnQgY29uc3Qgc2Vjb25kQ29udGVudENvbnRhaW5lciA9IE1hbmFnZUF0dHJpYnV0ZXMoXG4gIFwiZGl2XCIsXG4gIHNlY29uZENvbnRlbnQuZWwsXG4gIFwiXCIsXG4gIHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIH1cbik7XG5cbmV4cG9ydCBjb25zdCBmb290ZXIgPSBNYW5hZ2VBdHRyaWJ1dGVzKFwiZm9vdGVyXCIsIGNvbnRlbnQuZWwsIFwiUm9iaW4gUnlhblwiLCB7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgaGVpZ2h0OiBcIjcuNXZoXCIsXG4gIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmYxXCIsXG59KTtcblxuZXhwb3J0IGNvbnN0IGhvbWVCdG4gPSBkZXNpZ25CdG4oXCJIb21lXCIpO1xuZXhwb3J0IGNvbnN0IGluZm9CdG4gPSBkZXNpZ25CdG4oXCJJbmZvXCIpO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbmJvZHkuc3R5bGUubWFyZ2luID0gXCIwcHhcIjtcbmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZjdlOGQzXCI7XG5cbmV4cG9ydCBjb25zdCBzbWFsbGVyV2luZG93ID0gKCkgPT4ge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgMTAwMCkge1xuICAgICAgY29udGVudC5lbC5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgICAgY29udGVudC5lbC5zdHlsZS5oZWlnaHQgPSBcIjkwdmhcIjtcbiAgICAgIGNvbnRhaW5lci5lbC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbiAgICAgIHNlY29uZENvbnRlbnQuZWwuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICAgIHNlY29uZENvbnRlbnQuZWwuc3R5bGUuaGVpZ2h0ID0gXCI5MHZoXCI7XG4gICAgICBzZWNvbmRDb250ZW50LmVsLnN0eWxlLmFsaWduU2VsZiA9IFwiY2VudGVyXCI7XG4gICAgICBsb2dvLmVsLnN0eWxlLmxlZnQgPSBcIjcwJVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXIuZWwuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG4gICAgICBjb250ZW50LmVsLnN0eWxlLndpZHRoID0gXCI2MCVcIjtcbiAgICAgIHNlY29uZENvbnRlbnQuZWwuc3R5bGUud2lkdGggPSBcIjQwJVwiO1xuICAgICAgY29udGVudC5lbC5zdHlsZS5oZWlnaHQgPSBcIjkwdmhcIjtcbiAgICAgIHNlY29uZENvbnRlbnQuZWwuc3R5bGUuaGVpZ2h0ID0gXCI5MHZoXCI7XG4gICAgICBzZWNvbmRDb250ZW50LmVsLnN0eWxlLmFsaWduU2VsZiA9IFwiXCI7XG4gICAgICBsb2dvLmVsLnN0eWxlLmxlZnQgPSBcIjUwJVwiO1xuICAgIH1cbiAgfSk7XG59O1xuXG5zbWFsbGVyV2luZG93KCk7XG5zY3JvbGxTdGF0ZShjb250ZW50LCBzZWNvbmRDb250ZW50KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==