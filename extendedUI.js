import { ManageAttributes, values } from "./scripts.js";
import { navBar, content } from "./ui.js";

// Extends ManageAttributes() & specifies buttons
export const designBtn = (text) => {
  const button = ManageAttributes(
    "button",
    navBar.el,
    text,
    values().buttonValues
  );
  return button;
};

// Extends ManageAttributes() & specifies menu items
export const createMenuItem = (text) => {
  const item = ManageAttributes(
    "div",
    content.el,
    text,
    values().menuItemValues
  );
  return item;
};
