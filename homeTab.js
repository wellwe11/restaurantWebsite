import * as index from "./index.js";
export * from "./homeTab.js";

export const menuItemOne = index.menuAttributes("", "", "red");
export const menuItemTwo = index.menuAttributes("", "", "blue");
export const menuItemThree = index.menuAttributes("", "", "orange");

// centralize menuItems parent
index
  .moveElements("flex", "center", "column", "center", "10px")
  .relatedEles(index.content.el);
