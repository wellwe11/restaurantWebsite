import { hoverState, toggleElement } from "./scripts.js";
import { homeBtn, infoBtn } from "./ui.js";

hoverState(homeBtn, infoBtn);

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
    } else if (moduleName === "infoTab") {
      module = await import("./infoTab.js");
      whichTab.infoOn
        ? toggleElement().displayElement(
            module.infoItemOne,
            module.infoItemThree
          )
        : toggleElement().hideElement(module.infoItemOne, module.infoItemThree);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

homeBtn.el.addEventListener("click", () => {
  whichTab.homeOn = true;
  whichTab.infoOn = false;
  fetch(...allModules);
});

infoBtn.el.addEventListener("click", () => {
  whichTab.homeOn = false;
  whichTab.infoOn = true;
  fetch(...allModules);
});

document.addEventListener("DOMContentLoaded", () => {
  homeBtn.el.click();
});
