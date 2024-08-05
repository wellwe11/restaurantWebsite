export * from "./index.js";

// Create generic element
export const CreateElementFunction = (
  type,
  elementToAppend,
  ...addedMethods
) => {
  const el = document.createElement(type);
  elementToAppend.appendChild(el);

  addedMethods.forEach((method) => {
    Object.keys(method).forEach((key) => {
      el[key] = method[key].bind(el);
    });
  });

  return {
    el,
  };
};

// define placement of element
export const moveElements = (display, justify, flexDir, align) => {
  const relatedEles = (...elements) => {
    elements.forEach((element) => {
      element.style.display = display;
      element.style.justifyContent = justify;
      element.style.alignItems = align;
      element.style.flexDirection = flexDir;
    });
  };

  // might add other methods

  return {
    relatedEles,
  };
};

// create secondary factory function to simplify
export const header = CreateElementFunction("header", document.body);
export const navBar = CreateElementFunction("nav", header.el);
export const content = CreateElementFunction("div", document.body);

// display: flex etc. for header & navbar
moveElements("flex", "center", "row", "").relatedEles(header.el, navBar.el);

// CSS attribute creator. Defined in element with createElementFunction.
function dynamicFunction(...dynamicName) {
  const methods = {};

  // same as element.style.attribute = value;
  dynamicName.forEach((name) => {
    methods[name] = function (value) {
      this.style[name] = value;
    };
  });
  return methods;
}

const methods = dynamicFunction(
  "width",
  "height",
  "backgroundColor",
  "color",
  "borderRadius"
);

// create generic attributeFunction here

// CSS attribute function (will make generic function later on)
export const menuAttributes = (text, color, backgroundcolor) => {
  const menuItem = CreateElementFunction("div", content.el, methods);

  menuItem.el.width("600px");
  menuItem.el.height("300px");

  menuItem.el.textContent = text;
  menuItem.el.color(color);
  menuItem.el.backgroundColor(backgroundcolor);
  menuItem.el.borderRadius("3.5px");

  return menuItem;
};

// CSS attribute function (will make generic function later on)
const buttonAttributes = (text) => {
  const button = CreateElementFunction("button", navBar.el, methods);

  button.el.width("150px");
  button.el.height("55px");

  button.el.textContent = text;
  button.el.backgroundColor("white");
  button.el.color("black");

  return button;
};

// export to new file where all main-components will load
export const homeBtn = buttonAttributes("Home");
export const menuBtn = buttonAttributes("Menu");
export const infoBtn = buttonAttributes("Info");

export async function loadMenu() {
  try {
    const module = await import("./homeTab.js");

    if (module) {
      module.menuItemOne;
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
