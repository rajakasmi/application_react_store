
// src/components/Image.js
import React from "react";
import product from "../product";

const Image = () => {
  return (
    <img
      src={product.image}
      alt={product.name}
      style={{ width: "100%", borderRadius: "12px" }}
    />
  );
};

export default Image;
