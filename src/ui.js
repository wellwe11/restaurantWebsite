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
  backgroundColor: "#fffff1",
  textAlign: "center",
  height: "7.5vh",
  marginBottom: "2vh",
});

export const container = ManageAttributes("div", document.body, "", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  margin: "0 auto 2% auto",
  backgroundColor: "#f7e8d3",
  width: "95%",
});

export const navBar = ManageAttributes("nav", header.el, "", {
  display: "flex",
  marginLeft: "1.9vh",
  alignItems: "center",
  width: "100px",
});

export const logo = ManageAttributes(
  "p",
  header.el,
  "Peter & Jonnies Pizzeria",
  {
    fontFamily: "'libre baskerville', serif",
    alignSelf: "center",
    fontSize: "20px",
    fontStyle: "italic",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  }
);

// contents size & overflow
export const content = ManageAttributes("div", container.el, "", {
  width: "60%",
  height: "90vh",
  overflow: "hidden",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  borderRadius: "3px",
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
  minWidth: "72vh",
  maxWidth: "72vh",
  height: "90vh",
  overflow: "hidden",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  marginLeft: "10px",
  marginRight: "0px",
  borderRadius: "3px",
  backgroundColor: "#f7e8d3",
  display: "flex",
  flexDirection: "column",
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
  backgroundColor: "#fffff1",
});

export const homeBtn = designBtn("Home");
export const infoBtn = designBtn("Info");

const body = document.querySelector("body");

body.style.margin = "0px";
body.style.backgroundColor = "#f7e8d3";

export const smallerWindow = () => {
  window.addEventListener("resize", () => {
    if (window.innerWidth < 1000) {
      content.el.style.width = "100%";
      content.el.style.height = "90vh";
      container.el.style.flexDirection = "column";
      secondContent.el.style.width = "100%";
      secondContent.el.style.height = "90vh";
      secondContent.el.style.alignSelf = "center";
      logo.el.style.left = "70%";
    } else {
      container.el.style.flexDirection = "row";
      content.el.style.width = "60%";
      secondContent.el.style.width = "40%";
      content.el.style.height = "90vh";
      secondContent.el.style.height = "90vh";
      secondContent.el.style.alignSelf = "";
      logo.el.style.left = "50%";
    }
  });
};

smallerWindow();
