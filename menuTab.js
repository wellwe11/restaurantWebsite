import { createFoodItem } from "./extendedUI";
import Pizza from "./backgroundImages/pizza.jpg";
import Sweets from "./backgroundImages/sweets.jpg";
import Drinks from "./backgroundImages/drinks.jpg";

export const menuItemOne = createFoodItem("Foods", Pizza, "");
export const menuItemTwo = createFoodItem("Snacks", Sweets, "5px");
export const menuItemThree = createFoodItem("Drinks", Drinks, "5px");
