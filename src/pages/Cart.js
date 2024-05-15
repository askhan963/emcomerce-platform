import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../redux/slices/cartSlice';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar />
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item._id}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => dispatch(incrementQuantity(item))}>+</button>
              <button onClick={() => dispatch(decrementQuantity(item))}>-</button>
              <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
            </div>
          ))}
          <p>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
          <button onClick={() => window.location.href='/checkout'}>Proceed to Checkout</button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Cart;
