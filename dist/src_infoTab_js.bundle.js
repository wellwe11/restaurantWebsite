"use strict";
(self["webpackChunkrestaurantwebsite"] = self["webpackChunkrestaurantwebsite"] || []).push([["src_infoTab_js"],{

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
  backgroundImage: `url(${"something"})`,
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

  backgroundImage: `url(${"something"})`,
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
  backgroundImage: `url(${"something"})`,
  backgroundSize: "100px",
  marginLeft: "30px",
  marginTop: "200px",
});

// items three
const itemThreeLeftBar = (0,_scripts__WEBPACK_IMPORTED_MODULE_1__.ManageAttributes)("div", infoItemThree.el, "", {
  width: "23%",
  height: "100%",
  backgroundColor: "#ab3434",
  backgroundImage: `url(${"something"})`,
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
  backgroundImage: `url(${"something"})`,
  backgroundSize: "100px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "10px 109px",
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2luZm9UYWJfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QztBQUNEOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sb0JBQW9CLDJEQUFjO0FBQ2xDLHNCQUFzQiwyREFBYzs7QUFFcEMsdUJBQXVCLDBEQUFnQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRU0sb0JBQW9CLDBEQUFnQjtBQUMzQztBQUNBO0FBQ0EsMEJBQTBCLFlBQVk7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFTSx5QkFBeUIsMERBQWdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRU0sc0JBQXNCLDBEQUFnQjtBQUM3QztBQUNBOztBQUVBLDBCQUEwQixZQUFZO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ08sc0JBQXNCLDBEQUFnQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLHdCQUF3QiwwREFBZ0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFTSxxQkFBcUIsMERBQWdCO0FBQzVDO0FBQ0E7QUFDQSwwQkFBMEIsWUFBWTtBQUN0QztBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ08seUJBQXlCLDBEQUFnQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsWUFBWTtBQUN0QztBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVNLDRCQUE0QiwwREFBZ0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTywyQkFBMkIsMERBQWdCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTywwQkFBMEIsMERBQWdCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixZQUFZO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50d2Vic2l0ZS8uL3NyYy9pbmZvVGFiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZU1lbnVJdGVtIH0gZnJvbSBcIi4vZXh0ZW5kZWRVSVwiO1xuaW1wb3J0IHsgTWFuYWdlQXR0cmlidXRlcyB9IGZyb20gXCIuL3NjcmlwdHNcIjtcblxuY29uc3QgcmFuZG9tVGV4dCA9IGBcbkluIG1hbGVzdWFkYSwgYXJjdSBub24gZmF1Y2lidXMgdGVtcG9yLCBcbm9yY2kgbGFjdXMgYXVjdG9yIGxpYmVybywgaWQgdWx0cmljaWVzIGVyb3MgYXJjdSBub24gZHVpLiBcblV0IGltcGVyZGlldCBtYXNzYSBub24gZWxpdCBkYXBpYnVzLCBpbiB0aW5jaWR1bnQgbGVjdHVzIHJob25jdXMuIFxuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cblNvbWVSYW5kb21BZGRyZXNzLCA0MTMsIDMyMTUsIHNvbWVSYW5kb21DaXR5LCBzb21lUmFuZG9tQ291bnRyeVxuYDtcblxuY29uc3QgaW5mb1RleHQgPSBgXG5QaG9uZSBOdW1iZXI6ICsgMTIzIDEyMyAyMzFcbkVtYWlsIEFkZHJlc3M6IHNvbWVQbGFjZVRvRWF0QHlhaG9vLmNvbVxuTWFuYWdlcnM6XG5QZXRlciBKb2hhbnNzb24gJiBKb2hhbm5lcyBTa29nXG5gO1xuXG5leHBvcnQgY29uc3QgaW5mb0l0ZW1PbmUgPSBjcmVhdGVNZW51SXRlbShcIlwiLCBcIiNmN2U4ZDNcIiwgXCIxMDAlXCIsIFwiXCIpO1xuZXhwb3J0IGNvbnN0IGluZm9JdGVtVGhyZWUgPSBjcmVhdGVNZW51SXRlbShcIlwiLCBcIiNmN2U4ZDNcIiwgXCIxMDAlXCIsIFwiMXZoXCIpO1xuXG5leHBvcnQgY29uc3QgaXRlbU9uZUxlZnRCYXIgPSBNYW5hZ2VBdHRyaWJ1dGVzKFwiZGl2XCIsIGluZm9JdGVtT25lLmVsLCBcIlwiLCB7XG4gIHdpZHRoOiBcIjIzJVwiLFxuICBoZWlnaHQ6IFwiMTAwJVwiLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2FiMzQzNFwiLFxuICBtYXJnaW5SaWdodDogXCIxcHhcIixcbn0pO1xuXG5leHBvcnQgY29uc3QgaWNvbk9uZUxlZnQgPSBNYW5hZ2VBdHRyaWJ1dGVzKFwiZGl2XCIsIGl0ZW1PbmVMZWZ0QmFyLmVsLCBcIlwiLCB7XG4gIGhlaWdodDogXCIxMDBweFwiLFxuICB3aWR0aDogXCIxMDBweFwiLFxuICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtcInNvbWV0aGluZ1wifSlgLFxuICBiYWNrZ3JvdW5kU2l6ZTogXCIxMDBweFwiLFxuICBtYXJnaW5MZWZ0OiBcIjIwcHhcIixcbiAgbWFyZ2luVG9wOiBcIjUwcHhcIixcbn0pO1xuXG5leHBvcnQgY29uc3QgaXRlbU9uZUNlbnRlckJhciA9IE1hbmFnZUF0dHJpYnV0ZXMoXCJkaXZcIiwgaW5mb0l0ZW1PbmUuZWwsIFwiXCIsIHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICB3aWR0aDogXCI0OCVcIixcbiAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgbWFyZ2luUmlnaHQ6IFwiMXB4XCIsXG59KTtcblxuZXhwb3J0IGNvbnN0IGljb25PbmVDZW50ZXIgPSBNYW5hZ2VBdHRyaWJ1dGVzKFwiZGl2XCIsIGl0ZW1PbmVDZW50ZXJCYXIuZWwsIFwiXCIsIHtcbiAgaGVpZ2h0OiBcIjUwJVwiLFxuICB3aWR0aDogXCI5MCVcIixcblxuICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtcInNvbWV0aGluZ1wifSlgLFxuICBiYWNrZ3JvdW5kU2l6ZTogXCI0MDBweFwiLFxuICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxuXG4gIGxpbmVIZWlnaHQ6IFwiMS41XCIsXG59KTtcblxuLy8gaXRlbXMgdHdvXG5leHBvcnQgY29uc3QgaWNvblR3b0NlbnRlciA9IE1hbmFnZUF0dHJpYnV0ZXMoXG4gIFwiZGl2XCIsXG4gIGl0ZW1PbmVDZW50ZXJCYXIuZWwsXG4gIGluZm9UZXh0LFxuICB7XG4gICAgd2lkdGg6IFwiNjAlXCIsXG4gICAgbWFyZ2luOiBcIjAgODVweCAxMDBweCBhdXRvXCIsXG5cbiAgICBsaW5lSGVpZ2h0OiBcIjJcIixcbiAgICBmb250U2l6ZTogXCIxOHB4XCIsXG4gICAgaGVpZ2h0OiBcIjM1MHB4XCIsXG4gICAgb3ZlcmZsb3c6IFwib3ZlcmxheVwiLFxuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgaXRlbU9uZVJpZ2h0QmFyID0gTWFuYWdlQXR0cmlidXRlcyhcImRpdlwiLCBpbmZvSXRlbU9uZS5lbCwgXCJcIiwge1xuICB3aWR0aDogXCIyMyVcIixcbiAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgYmFja2dyb3VuZENvbG9yOiBcIiNhYjM0MzRcIixcbn0pO1xuXG5leHBvcnQgY29uc3QgaWNvbk9uZVJpZ2h0ID0gTWFuYWdlQXR0cmlidXRlcyhcImRpdlwiLCBpdGVtT25lUmlnaHRCYXIuZWwsIFwiXCIsIHtcbiAgaGVpZ2h0OiBcIjEwMHB4XCIsXG4gIHdpZHRoOiBcIjEwMHB4XCIsXG4gIGJhY2tncm91bmRJbWFnZTogYHVybCgke1wic29tZXRoaW5nXCJ9KWAsXG4gIGJhY2tncm91bmRTaXplOiBcIjEwMHB4XCIsXG4gIG1hcmdpbkxlZnQ6IFwiMzBweFwiLFxuICBtYXJnaW5Ub3A6IFwiMjAwcHhcIixcbn0pO1xuXG4vLyBpdGVtcyB0aHJlZVxuZXhwb3J0IGNvbnN0IGl0ZW1UaHJlZUxlZnRCYXIgPSBNYW5hZ2VBdHRyaWJ1dGVzKFwiZGl2XCIsIGluZm9JdGVtVGhyZWUuZWwsIFwiXCIsIHtcbiAgd2lkdGg6IFwiMjMlXCIsXG4gIGhlaWdodDogXCIxMDAlXCIsXG4gIGJhY2tncm91bmRDb2xvcjogXCIjYWIzNDM0XCIsXG4gIGJhY2tncm91bmRJbWFnZTogYHVybCgke1wic29tZXRoaW5nXCJ9KWAsXG4gIGJhY2tncm91bmRTaXplOiBcIjEwMHB4XCIsXG4gIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXG4gIGJhY2tncm91bmRQb3NpdGlvbjogXCI5MHB4XCIsXG59KTtcblxuZXhwb3J0IGNvbnN0IGl0ZW1UaHJlZUNlbnRlcnRCYXIgPSBNYW5hZ2VBdHRyaWJ1dGVzKFxuICBcImRpdlwiLFxuICBpbmZvSXRlbVRocmVlLmVsLFxuICBcIlwiLFxuICB7XG4gICAgd2lkdGg6IFwiNDglXCIsXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IGljb25Ud29DZW50ZXJUaHJlZSA9IE1hbmFnZUF0dHJpYnV0ZXMoXG4gIFwiZGl2XCIsXG4gIGl0ZW1UaHJlZUNlbnRlcnRCYXIuZWwsXG4gIHJhbmRvbVRleHQsXG4gIHtcbiAgICB3aWR0aDogXCI5MCVcIixcbiAgICBoZWlnaHQ6IFwiMzAwcHhcIixcbiAgICBvdmVyZmxvdzogXCJvdmVybGF5XCIsXG5cbiAgICBtYXJnaW5MZWZ0OiBcIjIlXCIsXG4gICAgbWFyZ2luUmlnaHQ6IFwiMiVcIixcbiAgICBsaW5lSGVpZ2h0OiBcIjEuNVwiLFxuICAgIG1hcmdpblRvcDogXCI3MHB4XCIsXG4gIH1cbik7XG5cbmV4cG9ydCBjb25zdCBpdGVtVGhyZWVSaWdodEJhciA9IE1hbmFnZUF0dHJpYnV0ZXMoXCJkaXZcIiwgaW5mb0l0ZW1UaHJlZS5lbCwgXCJcIiwge1xuICB3aWR0aDogXCIyMyVcIixcbiAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgYmFja2dyb3VuZENvbG9yOiBcIiNhYjM0MzRcIixcbiAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7XCJzb21ldGhpbmdcIn0pYCxcbiAgYmFja2dyb3VuZFNpemU6IFwiMTAwcHhcIixcbiAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcbiAgYmFja2dyb3VuZFBvc2l0aW9uOiBcIjEwcHggMTA5cHhcIixcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9