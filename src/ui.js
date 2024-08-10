import { designBtn } from "./extendedUI";
import { ManageAttributes, scrollState } from "./scripts";
import("./menuTab");
// import Wallpaper from "./wallpaper.jpeg";

// In another module or file
export const header = ManageAttributes("header", document.body, "", {
  display: "flex",
  justifyContent: "flexend",
  alignItems: "center",
  height: "70px",
  backgroundColor: "#ffffff",
  textAlign: "center",
  height: "7.5vh",
});

export const container = ManageAttributes("div", document.body, "", {
  display: "flex",
});

export const navBar = ManageAttributes("nav", header.el, "", {
  display: "flex",
  alignItems: "center",
  width: "100px",
});

export const logo = ManageAttributes(
  "p",
  header.el,
  "Peter & Jonnies Pizzeria",
  {
    fontFamily: "'Georgia', serif",
    alignSelf: "center",
    fontSize: "20px",
    fontStyle: "italic",
    textDecoration: "underline",
    marginLeft: "37%",
  }
);

// contents size & overflow
export const content = ManageAttributes("div", container.el, "", {
  display: "block",
  width: "60%",
  height: "92vh",
  overflow: "hidden",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  borderTopRightRadius: "3px",
  borderBottomRightRadius: "3px",
});

// contents positioning
export const contentContainer = ManageAttributes("div", content.el, "", {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
});

// contents size & overflow
export const secondContent = ManageAttributes("div", container.el, "", {
  display: "block",
  backgroundColor: "#ffffff",
  width: "40%",
  height: "92vh",
  overflow: "hidden",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  marginLeft: "10px",
  marginRight: "0px",
  borderTopLeftRadius: "3px",
  borderBottomLeftRadius: "3px",
});

// contents positioning
export const secondContentContainer = ManageAttributes(
  "div",
  secondContent.el,
  "",
  {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  }
);

scrollState(content, secondContent);

export const footer = ManageAttributes("footer", content.el, "Robin Ryan", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "7.5vh",
  backgroundColor: "#ffffff",
});

export const homeBtn = designBtn("Home");
export const infoBtn = designBtn("Info");

const body = document.querySelector("body");
// body.style.backgroundImage = `url(${Wallpaper})`;
// body.style.backgroundSize = "cover";
// body.style.backgroundPosition = "center";
// body.style.backgroundRepeat = "no-repeat";
body.style.margin = "0px";

// add footer
