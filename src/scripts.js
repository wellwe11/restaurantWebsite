// Factory function for elements (code starts here)
export const CreateElementFunction = (type, elementToAppend, options = {}) => {
  const el = document.createElement(type);
  elementToAppend.appendChild(el);
  Object.assign(el.style, options.styles);

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
    elements.forEach((element) => (element.el.style.display = "flex"));
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

// overflow on elements
export const scrollState = (...elements) => {
  if (window.innerWidth > 1000) {
    elements.forEach((element) => {
      element.el.addEventListener("mouseenter", () => {
        element.el.style.overflow = "scroll";
      });

      element.el.addEventListener("mouseleave", () => {
        element.el.style.overflow = "hidden";
      });
    });
  }
};
