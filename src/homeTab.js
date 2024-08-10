import { createMenuItem } from "./extendedUI";
import { ManageAttributes } from "./scripts";

export const homeItemOne = createMenuItem("", "#ab3434", "100%", "", "5px");
export const homeItemTwo = createMenuItem("", "white", "100%", "5px", "5px");
export const homeItemThree = createMenuItem("", "#ab3434", "100%", "5px", "");

export const itemOneLeftBar = ManageAttributes("div", homeItemOne.el, "", {
  width: "23%",
  height: "100%",
  backgroundColor: "black",
  marginRight: "1px",
});
export const itemOneCenterBar = ManageAttributes("div", homeItemOne.el, "", {
  width: "48%",
  height: "100%",
  backgroundColor: "black",
  marginRight: "1px",
  justifyContent: "center",
});

export const itemOneRightBar = ManageAttributes("div", homeItemOne.el, "", {
  width: "23%",
  height: "100%",
  backgroundColor: "black",
});

export const itemTwoLeftBar = ManageAttributes("div", homeItemTwo.el, "", {
  width: "23%",
  height: "100%",
  backgroundColor: "black",
});

export const itemTwoCentertBar = ManageAttributes("div", homeItemTwo.el, "", {
  width: "48%",
  height: "100%",
  backgroundColor: "black",
});

export const itemTwoRightBar = ManageAttributes("div", homeItemTwo.el, "", {
  width: "23%",
  height: "100%",
  backgroundColor: "black",
});

export const itemThreeLeftBar = ManageAttributes("div", homeItemThree.el, "", {
  width: "23%",
  height: "100%",
  backgroundColor: "black",
});

export const itemThreeCentertBar = ManageAttributes(
  "div",
  homeItemThree.el,
  "",
  {
    width: "48%",
    height: "100%",
    backgroundColor: "black",
  }
);

export const itemThreeRightBar = ManageAttributes("div", homeItemThree.el, "", {
  width: "23%",
  height: "100%",
  backgroundColor: "black",
});
