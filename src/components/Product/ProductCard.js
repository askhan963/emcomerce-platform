import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <Link to={`/product/${product._id}`}>View Details</Link> {/* Ensure `_id` is used */}
    </div>
  );
};

export default ProductCard;
