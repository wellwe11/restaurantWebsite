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
export const createMenuItem = (text) => {
  const item = ManageAttributes("div", contentContainer.el, text, {
    display: "block",
    width: "600px",
    height: "300px",
    color: "rgba(220, 220, 220, 0.9)",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "10px",
  });
  return item;
};

export const createFoodItem = (text, picture, margin) => {
  const item = ManageAttributes("div", secondContentContainer.el, text, {
    display: "block",
    width: "600px",
    height: "300px",
    marginTop: margin,
    textAlign: "center",

    backgroundImage: `linear-gradient(to bottom, rgb(171, 52, 52, 0.3) 10%, rgb(171, 52, 52, 1) 28%),
    url(${picture})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  });
  return item;
};
