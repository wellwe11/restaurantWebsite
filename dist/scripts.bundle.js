"use strict";
(self["webpackChunkrestaurantwebsite"] = self["webpackChunkrestaurantwebsite"] || []).push([["scripts"],{

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNPLGtFQUFrRTtBQUN6RTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBO0FBQ087QUFDUCwrREFBK0QsUUFBUTtBQUN2RTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnR3ZWJzaXRlLy4vc3JjL3NjcmlwdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRmFjdG9yeSBmdW5jdGlvbiBmb3IgZWxlbWVudHMgKGNvZGUgc3RhcnRzIGhlcmUpXG5leHBvcnQgY29uc3QgQ3JlYXRlRWxlbWVudEZ1bmN0aW9uID0gKHR5cGUsIGVsZW1lbnRUb0FwcGVuZCwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgZWxlbWVudFRvQXBwZW5kLmFwcGVuZENoaWxkKGVsKTtcbiAgT2JqZWN0LmFzc2lnbihlbC5zdHlsZSwgb3B0aW9ucy5zdHlsZXMpO1xuXG4gIHJldHVybiB7IGVsIH07XG59O1xuXG4vLyBEZWZpbmUgdmFsdWVzIGZvciBlbGVtZW50c1xuZXhwb3J0IGNvbnN0IE1hbmFnZUF0dHJpYnV0ZXMgPSAodHlwZSwgZWxlbWVudFRvQXBwZW5kLCBuYW1lLCBzdHlsZXMpID0+IHtcbiAgY29uc3QgbmV3RWwgPSBDcmVhdGVFbGVtZW50RnVuY3Rpb24odHlwZSwgZWxlbWVudFRvQXBwZW5kLCB7IHN0eWxlcyB9KTtcbiAgbmV3RWwuZWwudGV4dENvbnRlbnQgPSBuYW1lO1xuICByZXR1cm4gbmV3RWw7XG59O1xuXG4vLyBUb2dnbGUgZWxlbWVudCB2aXNpYmlsaXR5XG5leHBvcnQgY29uc3QgdG9nZ2xlRWxlbWVudCA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGxheUVsZW1lbnQgPSAoLi4uZWxlbWVudHMpID0+IHtcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiAoZWxlbWVudC5lbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCIpKTtcbiAgfTtcblxuICBjb25zdCBoaWRlRWxlbWVudCA9ICguLi5lbGVtZW50cykgPT4ge1xuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IChlbGVtZW50LmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIikpO1xuICB9O1xuXG4gIHJldHVybiB7IGRpc3BsYXlFbGVtZW50LCBoaWRlRWxlbWVudCB9O1xufTtcblxuLy8gOmhvdmVyIHN0YXRlIGZvciBidXR0b25zXG5leHBvcnQgY29uc3QgaG92ZXJTdGF0ZSA9ICguLi5idXR0b25zKSA9PiB7XG4gIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgICAgYnV0dG9uLmVsLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCIwIDAuMTVlbSwgMTAwJSAwLjE1ZW1cIjtcbiAgICB9KTtcblxuICAgIGJ1dHRvbi5lbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgICAgYnV0dG9uLmVsLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCIwIDAuMTVlbSwgMCUgMC4xNWVtXCI7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLy8gb3ZlcmZsb3cgb24gZWxlbWVudHNcbmV4cG9ydCBjb25zdCBzY3JvbGxTdGF0ZSA9ICguLi5lbGVtZW50cykgPT4ge1xuICBpZiAod2luZG93LmlubmVyV2lkdGggPiAxMDAwKSB7XG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC5lbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuZWwuc3R5bGUub3ZlcmZsb3cgPSBcInNjcm9sbFwiO1xuICAgICAgfSk7XG5cbiAgICAgIGVsZW1lbnQuZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICAgICAgICBlbGVtZW50LmVsLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9