import { designBtn } from "./extendedUI";
import { ManageAttributes, values } from "./scripts";
import Wallpaper from "./wallpaper.jpeg";

// In another module or file
export const header = ManageAttributes(
  "header",
  document.body,
  "",
  values().uiItems && { backgroundColor: "rgba(0, 0, 0, 0.7)" }
);

export const navBar = ManageAttributes("nav", header.el, "", values().uiItems);

export const content = ManageAttributes("div", document.body, "", {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
});

export const homeBtn = designBtn("Home");
export const menuBtn = designBtn("Menu");
export const infoBtn = designBtn("Info");

const body = document.querySelector("body");
body.style.backgroundImage = `url(${Wallpaper})`;
body.style.backgroundSize = "cover";
body.style.backgroundPosition = "center";
body.style.backgroundRepeat = "no-repeat";
body.style.margin = "0px";

// add footer
