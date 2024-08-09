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
    border: "1px solid white",
    borderRadius: "3px",
    margin: "3px",
    marginTop: "-3px",
    cursor: "pointer",
  };

  const menuItemValues = {
    display: "none",
    width: "600px",
    height: "300px",
    color: "black",
    backgroundColor: "#88C5E9",
    textAlign: "center",
    border: "1px solid white",
    borderRadius: "3px",
    margin: "3px",
  };

  return { flexValues, buttonValues, menuItemValues };
};
