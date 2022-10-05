// Adding item to Cart

export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// Deleting item to Cart

export const delCart = (product) => {
  return {
    type: "DELDITEM",
    payload: product,
  };
};
