import { createMenuItem } from "./extendedUI";
import { ManageAttributes } from "./scripts";
import { scrollState } from "./scripts";
import IconOne from "./icons/pizza-20.png";
import DrinkOne from "./icons/drink.png";
import Logo from "./icons/logo.jpg";
import CompoPics from "./backgroundImages/compos.png";
import IcreCream from "./icons/iceCream.png";
import Sunglasses from "./icons/sunglasses.png";

export const homeItemOne = createMenuItem(
  "",
  "#ab3434",
  "100%",
  "",
  "5px",
  "scroll"
);
export const homeItemTwo = createMenuItem("", "#f7e8d3", "100%", "5px", "5px");
export const homeItemThree = createMenuItem("", "#ab3434", "100%", "5px", "");
const randomText = `
In malesuada, arcu non faucibus tempor, 
orci lacus auctor libero, id ultricies eros arcu non dui. 
Ut imperdiet massa non elit dapibus, in tincidunt lectus rhoncus. 
Vestibulum ante ipsum primis in faucibus orci 
luctus et ultrices posuere cubilia curae; Donec et nunc 
at sem auctor cursus.
In malesuada, arcu non faucibus tempor, 
orci lacus auctor libero, id ultricies eros arcu non dui. 
Ut imperdiet massa non elit dapibus, in tincidunt lectus rhoncus. `;

// items one
export const itemOneLeftBar = ManageAttributes("div", homeItemOne.el, "", {
  width: "23%",
  height: "100%",
  backgroundColor: "#ab3434",
  marginRight: "1px",
});

export const iconOneLeft = ManageAttributes("div", itemOneLeftBar.el, "", {
  height: "100px",
  width: "100px",
  backgroundImage: `url(${IconOne})`,
  backgroundSize: "100px",
  marginLeft: "20px",
  marginTop: "50px",
});

export const itemOneCenterBar = ManageAttributes("div", homeItemOne.el, "", {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "48%",
  height: "100%",
  backgroundColor: "#f7e8d3",
  marginRight: "1px",
});

export const iconOneCenter = ManageAttributes("div", itemOneCenterBar.el, "", {
  height: "50%",
  width: "90%",

  backgroundImage: `url(${Logo})`,
  backgroundSize: "400px",
  backgroundRepeat: "no-repeat",

  lineHeight: "1.5",
});

export const iconTwoCenter = ManageAttributes(
  "div",
  itemOneCenterBar.el,
  randomText,
  {
    width: "90%",

    marginLeft: "2%",
    marginRight: "2%",
    lineHeight: "1.5",
    marginBottom: "13%",
    height: "350px",
    overflow: "overlay",
  }
);

export const itemOneRightBar = ManageAttributes("div", homeItemOne.el, "", {
  width: "23%",
  height: "100%",
  backgroundColor: "#ab3434",
});

export const iconOneRight = ManageAttributes("div", itemOneRightBar.el, "", {
  height: "100px",
  width: "100px",
  backgroundImage: `url(${DrinkOne})`,
  backgroundSize: "100px",
  marginLeft: "30px",
  marginTop: "200px",
});

// items two
export const itemTwoCentertBar = ManageAttributes("div", homeItemTwo.el, "", {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${CompoPics})`,
  backgroundSize: "120%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
});

// items three
export const itemThreeLeftBar = ManageAttributes("div", homeItemThree.el, "", {
  width: "23%",
  height: "100%",
  backgroundColor: "#ab3434",
  backgroundImage: `url(${Sunglasses})`,
  backgroundSize: "100px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "90px",
});

export const itemThreeCentertBar = ManageAttributes(
  "div",
  homeItemThree.el,
  "",
  {
    width: "48%",
    height: "100%",
    backgroundColor: "#f7e8d3",
  }
);

export const iconTwoCenterThree = ManageAttributes(
  "div",
  itemThreeCentertBar.el,
  randomText,
  {
    width: "90%",
    height: "300px",
    overflow: "overlay",

    marginLeft: "2%",
    marginRight: "2%",
    lineHeight: "1.5",
    marginTop: "70px",
  }
);

export const itemThreeRightBar = ManageAttributes("div", homeItemThree.el, "", {
  width: "23%",
  height: "100%",
  backgroundColor: "#ab3434",
  backgroundImage: `url(${IcreCream})`,
  backgroundSize: "100px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "10px 109px",
});
