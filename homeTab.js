import * as index from "./index.js";
export * from "./homeTab.js";

const menuText = `Hey and welcome to our beautiful restaurant.
Here you'll find all sort of delicious treats, foods & drinks!
`;

const menuInfo = `We'd love to hear from you. Please contact us at:
Phone Number: +1231231223
Email: SomeRandomMail@yahoo.com
`;

export const homeItemOne = index.createMenuItem("HomeTab");
export const homeItemTwo = index.createMenuItem("");
export const homeItemThree = index.createMenuItem("");

// need to fix the texts so they look appealing
// need to style the texts too
