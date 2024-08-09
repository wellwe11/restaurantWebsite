import { createFoodItem } from "./extendedUI";
import Pizza from "./backgroundImages/pizza.jpg";
import Sweets from "./backgroundImages/sweets.jpg";
import Drinks from "./backgroundImages/drinks.jpg";

export const menuItemOne = createFoodItem("Foods", Pizza, "", "top");
export const menuItemTwo = createFoodItem("Sweets", Sweets, "5px", "center");
export const menuItemThree = createFoodItem("Drinks", Drinks, "5px", "center");
