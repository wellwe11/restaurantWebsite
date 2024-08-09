// Factory function for elements
export const CreateElementFunction = (type, elementToAppend, options = {}) => {
  const el = document.createElement(type);
  elementToAppend.appendChild(el);

  if (options.styles) {
    Object.assign(el.style, options.styles);
  }
  return { el };
};

// Define values for elements
export const ManageAttributes = (type, elementToAppend, name, styles) => {
  const newEl = CreateElementFunction(type, elementToAppend, { styles });
  newEl.el.textContent = name;
  return newEl;
};

// Toggle element visibility
export const toggleElement = () => {
  const displayElement = (...elements) => {
    elements.forEach((element) => (element.el.style.display = "block"));
  };

  const hideElement = (...elements) => {
    elements.forEach((element) => (element.el.style.display = "none"));
  };

  return { displayElement, hideElement };
};

// :hover state for buttons
export const hoverState = (...buttons) => {
  buttons.forEach((button) => {
    button.el.addEventListener("mouseover", () => {
      button.el.style.backgroundSize = "0 0.15em, 100% 0.15em";
    });

    button.el.addEventListener("mouseout", () => {
      button.el.style.backgroundSize = "0 0.15em, 0% 0.15em";
    });
  });
};

// Pre-defined values for generic elements
export const values = () => {
  const buttonValues = {
    width: "49px",
    height: "22px",
    color: "black",
    fontSize: "15px",
    backgroundColor: "#ffffff",
    margin: "25px",
    cursor: "pointer",
    border: "none",

    background: `linear-gradient(
      to right,
      rgba(158, 157, 193, 0),
      rgba(158, 157, 193, 0)
    ),
    linear-gradient(to right, rgb(0, 0, 0), rgb(0, 0, 0))`,
    backgroundSize: "100% 0.15em, 0 0.15em",
    backgroundPosition: "100% 100%, 0% 100%",
    backgroundRepeat: "no-repeat",
    transition: "background-size 400ms",
  };

  const menuItemValues = {
    display: "none",
    width: "600px",
    height: "300px",
    color: "rgba(220, 220, 220, 0.9)",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    borderRadius: "3px",
    margin: "3px",
  };

  const uiItems = {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    height: "70px",
  };

  return { buttonValues, menuItemValues, uiItems };
};
