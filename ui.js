import { designBtn } from "./extendedUI";
import { ManageAttributes, values } from "./scripts";
import Wallpaper from "./wallpaper.jpeg";

// In another module or file
export const header = ManageAttributes(
  "header",
  document.body,
  "",
  values().uiItems && { backgroundColor: "#ffffff" }
);

export const navBar = ManageAttributes("nav", header.el, "", {
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  height: "53px",
});

export const content = ManageAttributes("div", document.body, "", {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
});

export const footer = ManageAttributes("footer", document.body, "", {
  display: "flex",
  justifyContent: "center",
  height: "53px",
  backgroundColor: "#ffffff",
});

export const logo = ManageAttributes("div", header.el, "Logo", {
  display: "flex",
  justifyContent: "center",
  position: "absolute",
  left: "50%",
  marginTop: "-34px",
  transform: "translateX(-50%)",
});

export const homeBtn = designBtn("Home");
export const menuBtn = designBtn("Menu");
export const infoBtn = designBtn("Info");

const body = document.querySelector("body");
// body.style.backgroundImage = `url(${Wallpaper})`;
// body.style.backgroundSize = "cover";
// body.style.backgroundPosition = "center";
// body.style.backgroundRepeat = "no-repeat";
body.style.backgroundColor = "#ab3434";
body.style.margin = "0px";

// add footer
