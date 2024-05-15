import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.items.find((product) => product._id === id)
  );
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="text-center text-xl text-red-500">Product not found</div>
        </main>
      </div>
    );
  }

  const isInCart = cartItems.find((item) => item._id === product._id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success('Added to cart!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product));
    toast.error('Removed from cart!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2">
            <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-md object-cover" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-2xl text-indigo-600 font-semibold mb-4">${product.price}</p>
            {!isInCart ? (
              <button
                onClick={handleAddToCart}
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
              >
                Add to Cart
              </button>
            ) : (
              <button
                onClick={handleRemoveFromCart}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Remove from Cart
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;
