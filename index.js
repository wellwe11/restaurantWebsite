import { hoverState, toggleElement } from "./scripts.js";
import { homeBtn, menuBtn, infoBtn } from "./ui.js";

hoverState(homeBtn, menuBtn, infoBtn);

const fetch = (...modules) => {
  modules.forEach((thisModule) => fetchModule(thisModule));
};

const whichTab = () => {
  const booleanValues = {
    homeOn: true,
    menuOn: false,
    infoOn: false,
  };

  return booleanValues;
};

const allModules = ["homeTab", "menuTab", "infoTab"];

async function fetchModule(moduleName) {
  let module;
  try {
    if (moduleName === "homeTab") {
      module = await import("./homeTab.js");
      whichTab.homeOn
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
      whichTab.menuOn
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
      whichTab.infoOn
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
  whichTab.homeOn = true;
  whichTab.menuOn = false;
  whichTab.infoOn = false;
  fetch(...allModules);
});

menuBtn.el.addEventListener("click", () => {
  whichTab.homeOn = false;
  whichTab.menuOn = true;
  whichTab.infoOn = false;
  fetch(...allModules);
});

infoBtn.el.addEventListener("click", () => {
  whichTab.homeOn = false;
  whichTab.menuOn = false;
  whichTab.infoOn = true;
  fetch(...allModules);
});

document.addEventListener("DOMContentLoaded", () => {
  homeBtn.el.click();
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
