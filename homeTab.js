import * as index from "./index.js";
export * from "./homeTab.js";

export const menuItemOne = index.manageAttributes(
  "div",
  index.content.el,
  "some text",
  {
    width: "600px",
    height: "300px",
    backgroundColor: "red",
    textAlign: "center",
  }
);

export const menuItemTwo = index.manageAttributes(
  "div",
  index.content.el,
  "some text",
  {
    width: "600px",
    height: "300px",
    backgroundColor: "blue",
    textAlign: "center",
  }
);
// export const menuItemTwo = index.menuAttributes(
//   "Opening Hours",
//   "yellow",
//   "blue"
// );
// export const menuItemThree = index.menuAttributes(
//   "Address",
//   "yellow",
//   "orange"
// );

// // centralize menuItems parent
// index
//   .moveElements("flex", "center", "column", "center", "10px")
//   .relatedEles(index.content.el);
