// need to move code into another folder.
// index.js should only load all codes

export * from "./index.js";

// factory function for elements
const CreateElementFunction = (type, elementToAppend, options = {}) => {
  const el = document.createElement(type);
  elementToAppend.appendChild(el);

  if (options.styles) {
    Object.assign(el.style, options.styles);
  }
  return {
    el,
  };
};

// define values for element
const ManageAttributes = (type, elementToAppend, name, styles) => {
  const newEl = CreateElementFunction(type, elementToAppend, {
    styles,
  });
  newEl.el.textContent = name;
  return newEl;
};

// extends ManageAttributes() & specifies buttons
const designBtn = (text) => {
  const button = ManageAttributes(
    "button",
    navBar.el,
    text,
    values().buttonValues
  );

  return button;
};

// extends ManageAttributes() & specifies menuItems
export const createMenuItem = (text) => {
  const item = ManageAttributes(
    "div",
    content.el,
    text,
    values().menuItemValues
  );

  return item;
};

export const toggleElement = () => {
  const displayElement = (...elements) => {
    elements.forEach((element) => (element.el.style.display = "block"));
  };

  const hideElement = (...elements) => {
    elements.forEach((element) => (element.el.style.display = "none"));
  };

  return {
    displayElement,
    hideElement,
  };
};

// :hover for buttons
const hoverState = (colorOne, colorTwo, ...buttons) => {
  buttons.forEach((button) =>
    button.el.addEventListener("mouseover", () => {
      button.el.style.backgroundColor = colorOne;
    })
  );

  buttons.forEach((button) =>
    button.el.addEventListener("mouseout", () => {
      button.el.style.backgroundColor = colorTwo;
    })
  );
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
    backgroundColor: "#88C5E9",
    border: "1px solid white",
    borderRadius: "3px",
    margin: "3px",
    marginTop: "-3px",
    cursor: "pointer",
  };

  const menuItemValues = {
    display: "none",
    width: "600px",
    height: "300px",
    color: "black",
    backgroundColor: "#88C5E9",
    textAlign: "center",
    border: "1px solid white",
    borderRadius: "3px",
    margin: "3px",
  };

  return {
    flexValues,
    buttonValues,
    menuItemValues,
  };
};

const header = ManageAttributes(
  "header",
  document.body,
  "",
  values().flexValues
);
const navBar = ManageAttributes("nav", header.el, "", values().flexValues);
const content = ManageAttributes("div", document.body, "", {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
});

const homeBtn = designBtn("home");
const menuBtn = designBtn("Menu");
const infoBtn = designBtn("Info");

hoverState("#6B9CC4", "#88C5E9", homeBtn, menuBtn, infoBtn);

const fetch = (...modules) => {
  modules.forEach((thisModule) => fetchModule(thisModule));
};

const allModules = ["homeTab", "menuTab", "infoTab"];

const booleanValues = {
  homeOn: false,
  menuOn: false,
  infoOn: false,
};

export async function fetchModule(moduleName) {
  let module;
  try {
    if (moduleName === "homeTab") {
      module = await import("./homeTab.js");
      booleanValues.homeOn
        ? toggleElement().displayElement(
            module.homeItemOne,
            module.homeItemTwo,
            module.homeItemThree
          )
        : toggleElement().hideElement(
            module.homeItemOne,
            module.homeItemTwo,
            module.homeItemThree
          );
    } else if (moduleName === "menuTab") {
      module = await import("./menuTab.js");
      booleanValues.menuOn
        ? toggleElement().displayElement(
            module.menuItemOne,
            module.menuItemTwo,
            module.menuItemThree
          )
        : toggleElement().hideElement(
            module.menuItemOne,
            module.menuItemTwo,
            module.menuItemThree
          );
    } else if (moduleName === "infoTab") {
      module = await import("./infoTab.js");
      booleanValues.infoOn
        ? toggleElement().displayElement(
            module.infoItemOne,
            module.infoItemTwo,
            module.infoItemThree
          )
        : toggleElement().hideElement(
            module.infoItemOne,
            module.infoItemTwo,
            module.infoItemThree
          );
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

homeBtn.el.addEventListener("click", () => {
  booleanValues.homeOn = true;
  booleanValues.menuOn = false;
  booleanValues.infoOn = false;
  fetch(...allModules);
});

menuBtn.el.addEventListener("click", () => {
  booleanValues.homeOn = false;
  booleanValues.menuOn = true;
  booleanValues.infoOn = false;
  fetch(...allModules);
});

infoBtn.el.addEventListener("click", () => {
  booleanValues.homeOn = false;
  booleanValues.menuOn = false;
  booleanValues.infoOn = true;
  fetch(...allModules);
});

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
