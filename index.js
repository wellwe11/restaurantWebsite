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
export const ManageAttributes = (type, elementToAppend, name, styles) => {
  const newEl = CreateElementFunction(type, elementToAppend, {
    styles,
  });
  newEl.el.textContent = name;
  return newEl;
};

// extends & specifies ManageAttributes() for buttons
const designBtn = (text) => {
  const button = ManageAttributes(
    "button",
    navBar.el,
    text,
    values().buttonValues
  );

  return button;
};
// hover for buttons
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

  return {
    flexValues,
    buttonValues,
  };
};

export const header = ManageAttributes(
  "header",
  document.body,
  "",
  values().flexValues
);
export const navBar = ManageAttributes(
  "nav",
  header.el,
  "",
  values().flexValues
);
export const content = ManageAttributes("div", document.body, "", {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
});

const homeBtn = designBtn("home");
const menuBtn = designBtn("Menu");
const infoBtn = designBtn("Info");

hoverState("#6B9CC4", "#88C5E9", homeBtn, menuBtn, infoBtn);

// load specific items on button-click
export async function loadMenu() {
  try {
    const module = await import("./homeTab.js");

    if (module) {
      module.menuItemOne;
      module.menuItemTwo;
      module.menuItemThree;
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
