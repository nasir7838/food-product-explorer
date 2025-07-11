import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map(product => (
        <ProductCard key={product.id || product._id || product.code} product={product} />
      ))}
    </div>
  );
};

export default ProductList; 