import * as index from "./index.js";
export * from "./homeTab.js";

const genericMenuItem = {
  width: "600px",
  height: "300px",
  color: "AFDCEC",
  backgroundColor: "#88C5E9",
  textAlign: "center",
  border: "1px solid white",
  borderRadius: "3px",
  margin: "3px",
};

export const menuItemOne = index.ManageAttributes(
  "div",
  index.content.el,
  "some text",
  genericMenuItem
);

export const menuItemTwo = index.ManageAttributes(
  "div",
  index.content.el,
  "some text",
  genericMenuItem
);

export const menuItemThree = index.ManageAttributes(
  "div",
  index.content.el,
  "some text",
  genericMenuItem
);
