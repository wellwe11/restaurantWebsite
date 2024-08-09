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
export const hoverState = (colorOne, colorTwo, ...buttons) => {
  buttons.forEach((button) => {
    button.el.addEventListener("mouseover", () => {
      button.el.style.backgroundColor = colorOne;
    });

    button.el.addEventListener("mouseout", () => {
      button.el.style.backgroundColor = colorTwo;
    });
  });
};

// Pre-defined values for generic elements
export const values = () => {
  const flexValues = {
    display: "flex",
    justifyContent: "center",
  };

  const buttonValues = {
    width: "150px",
    height: "55px",
    color: "black",
    backgroundColor: "#88C5E9",
    border: "1px solid rgba(0, 0, 0, 0.4)",
    borderRadius: "3px",
    margin: "37px",
    cursor: "pointer",
  };

  const menuItemValues = {
    display: "none",
    width: "600px",
    height: "300px",
    color: "rgba(220, 220, 220, 0.9)",
    backgroundColor: "rgba(0, 0, 0, 0.86)",
    textAlign: "center",
    borderRadius: "3px",
    margin: "3px",
  };

  const uiItems = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70px",
  };

  return { flexValues, buttonValues, menuItemValues, uiItems };
};
