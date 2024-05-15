import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">{product.description}</p>
        <p className="mt-2 text-indigo-600 font-bold">${product.price}</p>
        <Link to={`/product/${product._id}`} className="mt-4 inline-block text-indigo-500 hover:text-indigo-700">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
