import { createFoodItem, foodItemText } from "./extendedUI";
import Pizza from "./backgroundImages/pizza.jpg";
import Sweets from "./backgroundImages/sweets.jpg";
import Drinks from "./backgroundImages/drinks.jpg";

export const menuItemOne = createFoodItem("", Pizza, "", "top");
export const menuItemTwo = createFoodItem("Sweets", Sweets, "5px", "center");
export const menuItemThree = createFoodItem("Drinks", Drinks, "5px", "center");

export const menuItemOneText = foodItemText(
  "some text",
  menuItemOne.el,
  "7.8%"
);
export const menuItemTwoText = foodItemText(
  "some text",
  menuItemTwo.el,
  "4.6%"
);
export const menuItemThreeText = foodItemText(
  "some text",
  menuItemThree.el,
  "4.6%"
);
