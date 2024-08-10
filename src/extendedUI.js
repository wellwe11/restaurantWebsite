import { ManageAttributes, values } from "./scripts.js";
import { navBar, contentContainer, secondContentContainer } from "./ui.js";
// Extends ManageAttributes() & specifies buttons
export const designBtn = (text) => {
  const button = ManageAttributes("button", navBar.el, text, {
    width: "49px",
    height: "22px",
    color: "black",
    fontSize: "15px",
    backgroundColor: "#ffffff",
    margin: "25px",
    cursor: "pointer",
    border: "none",

    background: `linear-gradient(
              to right,
              rgba(158, 157, 193, 0),
              rgba(158, 157, 193, 0)
            ),
            linear-gradient(to right, rgb(0, 0, 0), rgb(0, 0, 0))`,
    backgroundSize: "100% 0.15em, 0 0.15em",
    backgroundPosition: "100% 100%, 0% 100%",
    backgroundRepeat: "no-repeat",
    transition: "background-size 400ms",
  });
  return button;
};

// Extends ManageAttributes() & specifies menu items
export const createMenuItem = (text, color, width, marginTop, marginBottom) => {
  const item = ManageAttributes("div", contentContainer.el, text, {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",

    width: width,
    height: "400px",

    color: "black",
    textAlign: "center",

    marginTop: marginTop,
    marginBottom: marginBottom,
    backgroundColor: color,
  });
  return item;
};

export const createFoodItem = (text, picture, margin, picturePosition) => {
  const item = ManageAttributes("div", secondContentContainer.el, text, {
    display: "block",
    color: "black",
    width: "100%",
    height: "300px",
    marginTop: margin,

    backgroundImage: `linear-gradient(to bottom, rgb(171, 52, 52, 0.3) 15%, rgb(171, 52, 52, 1) 0%),
    url(${picture})`,
    backgroundSize: "cover",
    backgroundPosition: picturePosition,
  });
  return item;
};

export const foodItemText = (text, toAppend, margin) => {
  const item = ManageAttributes("div", toAppend, text, {
    height: "85%",
    width: "100%",
    backgroundColor: "#ab3434",
    textAlign: "start",
    fontFamily: "'Georgia', serif",
    fontStyle: "italic",
    marginTop: margin,
  });

  return item;
};
