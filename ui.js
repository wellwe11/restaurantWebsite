import { designBtn } from "./extendedUI";
import { ManageAttributes, scrollState, values } from "./scripts";
import("./menuTab");
// import Wallpaper from "./wallpaper.jpeg";

// In another module or file
export const header = ManageAttributes(
  "header",
  document.body,
  "",
  values().uiItems && {
    backgroundColor: "#ffffff",
  }
);

export const container = ManageAttributes("div", document.body, "", {
  display: "flex",
});

export const navBar = ManageAttributes("nav", header.el, "", {
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  height: "7.5vh",
});

// contents size & overflow
export const content = ManageAttributes("div", container.el, "", {
  display: "block",
  backgroundColor: "#ab3434",
  width: "60%",
  height: "85vh",
  overflowY: "hidden",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  borderTop: "1px solid black",
  borderBottom: "1px solid black",
  borderRadius: "1px",
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
  backgroundColor: "#ab3434",
  width: "40%",
  height: "85vh",
  overflowY: "hidden",
  marginLeft: "10px",
  marginRight: "0px",
  borderTop: "1px solid black",
  borderBottom: "1px solid black",
  borderRadius: "1px",
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

export const footer = ManageAttributes("footer", document.body, "Robin Ryan", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "7.5vh",
  backgroundColor: "#ffffff",
});

export const logo = ManageAttributes("div", header.el, "Logo", {
  display: "flex",
  justifyContent: "center",
  position: "absolute",
  left: "50%",
  marginTop: "-39px",
  transform: "translateX(-50%)",
  fontFamily: "'Georgia', serif",
  fontSize: "20px",
  fontStyle: "italic",
  textDecoration: "underline",
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
