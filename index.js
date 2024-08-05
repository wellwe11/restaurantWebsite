export * from "./index.js";

// factory function for elements
export const CreateElementFunction = (type, elementToAppend, options = {}) => {
  const el = document.createElement(type);
  elementToAppend.appendChild(el);

  if (options.styles) {
    Object.assign(el.style, options.styles);
  }
  return {
    el,
  };
};

// define values for elements
export const manageAttributes = (type, elementToAppend, name, styles) => {
  const newEl = CreateElementFunction(type, elementToAppend, {
    styles,
  });
  newEl.el.textContent = name;
  return newEl;
};

// pre-defined values for generic elements
const values = () => {
  const flexValues = {
    display: "flex",
    justifyContent: "center",
  };

  const buttonValues = {
    width: "150px",
    height: "55px",
    color: "black",
    backgroundColor: "white",
  };

  return {
    flexValues,
    buttonValues,
  };
};

export const header = manageAttributes(
  "header",
  document.body,
  "",
  values().flexValues
);
export const navBar = manageAttributes(
  "nav",
  header.el,
  "",
  values().flexValues
);
export const content = manageAttributes("div", document.body, "", {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
});

const homeBtn = manageAttributes(
  "button",
  navBar.el,
  "Home",
  values().buttonValues
);

const menuBtn = manageAttributes(
  "button",
  navBar.el,
  "Menu",
  values().buttonValues
);

const infoBtn = manageAttributes(
  "button",
  navBar.el,
  "Info",
  values().buttonValues
);

// load specific items on button-click
export async function loadMenu() {
  try {
    const module = await import("./homeTab.js");

    if (module) {
      module.menuItemOne;
      module.menuItemTwo;
    } else {
      console.error("button dont work senior");
    }
  } catch (error) {
    console.log("Error:", error);
  }
}

homeBtn.el.addEventListener("click", loadMenu);

// create 3 different boiler plates for each tab:
// all using the same html build
// link them & import/export

// index.js still need more elements. Add them later:
// -Each individual button needs to have eventListener.
// -Each button needs to lead to whatever tab it's directed.
// -needs to be active on all 3 tabs

//add effects => hover, click, whileActive(on current tab), mouseOver,

// ------ v Menu Tab v --------------------------------------
// --item dish 1
// --item dish 2
// --item dish 3
// ------ v Info Tab v --------------------------------------
// --contact info
// ---name & title
// ---phone number
// ---email

// // CSS attribute creator. Defined in element with createElementFunction.
// function dynamicFunction(...dynamicName) {
//   const methods = {};

//   // same as element.style.attribute = value;
//   dynamicName.forEach((name) => {
//     methods[name] = function (value) {
//       this.style[name] = value;
//     };
//   });
// return methods;
// }
