<<<<<<< HEAD
export * from "./index.js";

// Create generic element
export const CreateElementFunction = (
=======
// Create generic element
const CreateElementFunction = (
>>>>>>> 43dc34736e9c651af709d5ff821f2fb7f407fd1d
  type,
  width = "",
  height = "",
  elementToAppend,
<<<<<<< HEAD
  ...addedMethods
=======
  dynamicMethod
>>>>>>> 43dc34736e9c651af709d5ff821f2fb7f407fd1d
) => {
  const el = document.createElement(type);
  el.style.width = width;
  el.style.height = height;
  elementToAppend.appendChild(el);

<<<<<<< HEAD
  addedMethods.forEach((method) => {
    Object.keys(method).forEach((key) => {
      el[key] = method[key].bind(el);
    });
  });

  return {
    el,
  };
};

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
export const header = CreateElementFunction("header", "", "", document.body);
export const navBar = CreateElementFunction("nav", "", "", header.el);
export const content = CreateElementFunction("div", "", "", document.body);

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

const methods = dynamicFunction("backgroundColor", "color");
// CSS attribute function (will make generic function later on)
export const menuAttributes = (text, color, backgroundcolor) => {
  const menuItem = CreateElementFunction(
    "div",
    "600px",
    "300px",
    content.el,
    methods
  );

  menuItem.el.textContent = text;
  menuItem.el.color(color);
  menuItem.el.backgroundColor(backgroundcolor);
  return menuItem;
};

// CSS attribute function (will make generic function later on)
const buttonAttributes = (text) => {
  const button = CreateElementFunction(
    "button",
    "150px",
    "55px",
    navBar.el,
    methods
  );
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
// Each individual button needs to have eventListener.
// Each button needs to lead to whatever tab it's directed.
// needs to be active on all 3 tabs

//add effects => hover, click, whileActive(on current tab), mouseOver,

//
=======
  return {
    el,
    setColor(eleColor) {
      el.style.color = eleColor;
    },
    setBackgroundColor(eleBackgroundColor) {
      el.style.backgroundColor = eleBackgroundColor;
    },
    setText(eleText) {
      el.innerText = eleText;
    },
    [dynamicMethod]: dynamicMethod ? () => {} : undefined,
    newMethod: () => {},
  };
};

// create & specify buttons specifications
const createButton = (btnName, color, backgroundclr, text) => {
  btnName.setColor(color),
    btnName.setBackgroundColor(backgroundclr),
    btnName.setText(text);
};

const flexBoxCenter = (...elements) => {
  elements.forEach((element) => {
    element.style.display = "flex";
    element.style.justifyContent = "center";
  });
};

const header = CreateElementFunction("header", "", "", document.body);
const navBar = CreateElementFunction("nav", "", "", header.el);

flexBoxCenter(header.el, navBar.el);

const Button = (buttonWidth, buttonHeight, parent) => {
  return CreateElementFunction("button", buttonWidth, buttonHeight, parent);
};

const buttonAttributes = (buttonText) => {
  const button = Button("150px", "55px", navBar.el);
  createButton(button, "black", "white", buttonText);
  return button;
};

const homeBtn = buttonAttributes("Home");
const menuBtn = buttonAttributes("Menu");
const infoBtn = buttonAttributes("info");

// decide on what types of elements we need
// decide on functions they'll do

// ----------------------------------------------------------

>>>>>>> 43dc34736e9c651af709d5ff821f2fb7f407fd1d
// ------ v Home Tab v --------------------------------------
// Basic divs with quick basic information about restaurant
// --quick story
// --opening hours
// --address
// ------ v Menu Tab v --------------------------------------
// --item dish 1
// --item dish 2
// --item dish 3
// ------ v Info Tab v --------------------------------------
// --contact info
// ---name & title
// ---phone number
// ---email
