import { createFoodItem, foodItemText } from "./extendedUI";
import Pizza from "./backgroundImages/pizza.jpg";
import Sweets from "./backgroundImages/sweets.jpg";
import Drinks from "./backgroundImages/drinks.jpg";

export const menuItemOne = createFoodItem("", Pizza, "", "center", "cover");
export const menuItemTwo = createFoodItem("", Sweets, "5px", "center", "cover");
export const menuItemThree = createFoodItem(
  "",
  Drinks,
  "5px",
  "center center",
  "contain"
);

const someText = `
Item One . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 50$
Item Two . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 30$
Item Three . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 20$
Item Four . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 50$
Item Five . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 10$`;

export const menuItemOneText = foodItemText(someText, menuItemOne.el);
export const menuItemTwoText = foodItemText(someText, menuItemTwo.el);
export const menuItemThreeText = foodItemText(someText, menuItemThree.el);
