import { createMenuItem } from "./extendedUI";
import { ManageAttributes } from "./scripts";

const randomText = `
In malesuada, arcu non faucibus tempor, 
orci lacus auctor libero, id ultricies eros arcu non dui. 
Ut imperdiet massa non elit dapibus, in tincidunt lectus rhoncus. 
................................................................................
SomeRandomAddress, 413, 3215, someRandomCity, someRandomCountry
`;

const infoText = `
Phone Number: + 123 123 231
Email Address: somePlaceToEat@yahoo.com
Managers:
Peter Johansson & Johannes Skog
`;

export const infoItemOne = createMenuItem("", "#f7e8d3", "100%", "");
export const infoItemThree = createMenuItem("", "#f7e8d3", "100%", "1vh");

export const itemOneLeftBar = ManageAttributes("div", infoItemOne.el, "", {
  width: "23%",
  height: "100%",
  backgroundColor: "#ab3434",
  marginRight: "1px",
});

export const iconOneLeft = ManageAttributes("div", itemOneLeftBar.el, "", {
  height: "100px",
  width: "100px",
  backgroundImage: `url(${"something"})`,
  backgroundSize: "100px",
  marginLeft: "20px",
  marginTop: "50px",
});

export const itemOneCenterBar = ManageAttributes("div", infoItemOne.el, "", {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "48%",
  height: "100%",
  marginRight: "1px",
});

export const iconOneCenter = ManageAttributes("div", itemOneCenterBar.el, "", {
  height: "50%",
  width: "90%",

  backgroundImage: `url(${"something"})`,
  backgroundSize: "400px",
  backgroundRepeat: "no-repeat",

  lineHeight: "1.5",
});

// items two
export const iconTwoCenter = ManageAttributes(
  "div",
  itemOneCenterBar.el,
  infoText,
  {
    width: "60%",
    margin: "0 85px 100px auto",

    lineHeight: "2",
    fontSize: "18px",
    height: "350px",
    overflow: "overlay",
  }
);

export const itemOneRightBar = ManageAttributes("div", infoItemOne.el, "", {
  width: "23%",
  height: "100%",
  backgroundColor: "#ab3434",
});

export const iconOneRight = ManageAttributes("div", itemOneRightBar.el, "", {
  height: "100px",
  width: "100px",
  backgroundImage: `url(${"something"})`,
  backgroundSize: "100px",
  marginLeft: "30px",
  marginTop: "200px",
});

// items three
export const itemThreeLeftBar = ManageAttributes("div", infoItemThree.el, "", {
  width: "23%",
  height: "100%",
  backgroundColor: "#ab3434",
  backgroundImage: `url(${"something"})`,
  backgroundSize: "100px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "90px",
});

export const itemThreeCentertBar = ManageAttributes(
  "div",
  infoItemThree.el,
  "",
  {
    width: "48%",
    height: "100%",
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

export const itemThreeRightBar = ManageAttributes("div", infoItemThree.el, "", {
  width: "23%",
  height: "100%",
  backgroundColor: "#ab3434",
  backgroundImage: `url(${"something"})`,
  backgroundSize: "100px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "10px 109px",
});
