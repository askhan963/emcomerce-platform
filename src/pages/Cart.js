import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/Cart/CartItem';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <p>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
          <button onClick={() => window.location.href='/checkout'}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
