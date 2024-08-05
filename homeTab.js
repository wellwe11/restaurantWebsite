import * as index from "./index.js";
export * from "./homeTab.js";

export const menuItemOne = index.menuAttributes(
  "Quick intro story",
  "yellow",
  "red"
);
export const menuItemTwo = index.menuAttributes(
  "Opening Hours",
  "yellow",
  "blue"
);
export const menuItemThree = index.menuAttributes(
  "Address",
  "yellow",
  "orange"
);

// centralize menuItems parent
index
  .moveElements("flex", "center", "column", "center", "10px")
  .relatedEles(index.content.el);
