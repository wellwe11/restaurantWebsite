// To-do today.
// Re-follow the guide set up npm etc for your project
// once done, start coding, and follow the example below

// New assignment want me to create entire code in JS.

// That being, no html (I think only the body), and creating all elements through JS

// Solution?
// Factory functions.

// Example:

// I need to create elements for a restaurant. What better way to create elements through JS than factory functions?

// Example:

const FactoryFunction = (type, text, color, dynamicMethodName) => {
  const el = document.createElement(type);
  el.innerText = text;
  el.style.color = color = color;
  document.body.append(el);
  return {
    el,
    setText() {
      /*...*/
    },
    setColor() {
      /*...*/
    },
    [dynamicMethodName]() {
      console.log("random method");
    },
    newMethod: () => {
      /*do something*/
    },
  };
};

const buttonOne = new FactoryFunction(button, "Exit", red, buyButtonClick);
buttonOne.addEventListener("click", someBooleanFunction);
if (someBooleanValue) {
  buttonOne.buyButtonClick;
}

const buttonTwo = new FactoryFunction(
  button,
  "Buy",
  green,
  someOtherRandomNameForSomeMethod
);

const footer = new FactoryFunction(div, "", grayblue);

// DO THIS! CREATE ALL ELEMENTS THROUGH FACTORY FUNCTIONS. ADD METHODS RELATED. NO REPEATING CODE OR CREATING ELEMENTS
